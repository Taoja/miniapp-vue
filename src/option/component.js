import merge from '../lib/merge'
import Rumtime from '../runtime/rumtime'
export default class Render {
  config = {} // 原始参数
  options = {} // component文档参数
  instance // component实例
  constructor(config) {
    this.setMixins(config)
    this.setLifetime()
    this.setData()
    this.setComputed()
    this.setProps()
    this.setWatch()
    this.setMethods()
    this.setBehavior()
    Component(this.options)
  }
  /**
   * data转小程序component data
   */
  setData() {
    var { data } = this.config
    if (typeof data === 'function') {
      this.options.data = data()
    } else if (typeof data === 'object') {
      this.options.data = data
    } else {
      throw new Error('data格式不正确')
    }
  }
  /**
   * methods转小程序component methods
   */
  setMethods() {
    var { methods } = this.config
    this.options.methods = methods
  }
  /**
   * 通过behaviors插入自己默认的初始化runtime脚本
   */
  setBehavior() {
    var { behaviors } = this.config
    this.options.behaviors = behaviors || []
  }
  /**
   * 把mixins的配置，拼入各个参数中
   */
  setMixins(config) {
    var { mixins } = config
    delete this.config.mixins
    var that = this
    mixins = [...mixins || [], {
      created() {
        that.instance = this
        if (this.data && this.data.hasOwnProperty('__c')) {
          this.computed = this.data.__c
          delete this.data.__c
        }
        if (this.data && this.data.hasOwnProperty('__w')) {
          this.watch = this.data.__w
          delete this.data.__w
        }
        new Rumtime(this)
      }
    }]
    const params = ['mounted','created','destroyed', 'created', 'ready', 'attached', 'moved', 'detached'] // 需要合并调用的函数
    this.config = merge(mixins || [], config, params)
  }
  /**
   * 把computed存入data.__c 中
   * 并在runtime中取出并删除data.__c
   */
  setComputed() {
    var { computed } = this.config
    this.options.data.__c = computed || {}
  }
  /**
   * 把watch存入data.__w 中
   * 并在runtime中取出并删除data.__w
   */
  setWatch() {
    var { watch } = this.config
    this.options.data.__w = watch || {}
  }
  /** 
   * 重写生命周期名
   * created => created
   * mounted => ready
   * activated => pageLifetimes.show
   * deactivated => pageLifetimes.hide
   * destroyed => detached
   */
  setLifetime() {
    var { mounted, activated, deactivated, destroyed, created } = this.config
    this.options.created = created
    this.options.ready = mounted
    this.options.pageLifetimes = {
      show: activated,
      hide: deactivated
    }
    this.options.detached = destroyed
  }
  /**
   * 将props参数转换为component需要的properties
   */
  setProps() {
    var props = this.config.props || {}
    var properties = {}
    for (let key in props) {
      properties[key] = {
        type: props[key].type,
        value: props[key].default,
        observer(e, f, g) {
          if (typeof props[key].observer == 'function') {
            props[key].observer.call(this, e, f, g)
          }
          this[key] = e
        }
      }
    }
    this.options.properties = properties
  }
  /**
   * 将参数转换为component需要的参数
   */
  static render() {
    var init = new this()
    init.setMixins(init)
    init.setLifetime()
    init.setData()
    init.setComputed()
    init.setProps()
    init.setWatch()
    init.setMethods()
    init.setBehavior()
    Component(init.options)
    return init
  }
}