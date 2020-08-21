import merge from '../lib/merge'
import Rumtime from '../runtime/rumtime'
export default class Render {
  config = {} // 原始参数
  options = {} // page文档参数
  instance // page实例
  constructor(config) {
    this.setMixins(config)
    this.setLifetime()
    this.setData()
    this.setComputed()
    this.setWatch()
    this.setMethods()
    Page(this.options)
  }
  /**
   * data转小程序page data
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
   * methods转小程序page methods
   */
  setMethods() {
    var { methods } = this.config
    this.options = {
      ...this.options,
      ...methods
    }
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
    const params = ['mounted','created','activated','destroyed', 'onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap'] // 需要合并调用的函数
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
   * created => onLoad
   * mounted => onReady
   * activated => onShow
   * destroyed => onUnload
   */
  setLifetime() {
    var { mounted, activated, destroyed, created } = this.config
    this.options.onReady = mounted
    this.options.onShow = activated
    this.options.onUnload = destroyed
    this.options.onLoad = created
  }
  /**
   * 将参数转换为page需要的参数
   */
  static render() {
    var init = new this()
    init.setMixins(config)
    init.setLifetime()
    init.setData()
    init.setComputed()
    init.setWatch()
    init.setMethods()
    Page(init.options)
    return init
  }
}