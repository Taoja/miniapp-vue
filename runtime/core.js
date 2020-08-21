import Event from './event'

export default class Core extends Event {
  /**
   * 将data转发到上下文，可以直接this.xxx调用并修改对象
   * 监听set方法，触发set时调用对应的watch 并且触发setData事件
   * @param {Object} context 页面实例上下文
   */
  addProxy(context) {
    for (let key in context.data) {
      let getset = {
        get: () => context.data[key], // this.xxx 指向 this.data.xxx
        set: (value) => {
          this.watch(context, key, value, context.data[key]) // 触发 watch.xxx
          context.data[key] = value // this.xxx = y 改为 this.data.xxx = y
          if (typeof value == 'object') { // 判断xxx内属性是否是对象，是的话 深层解构
            this.addPropertyProxy(context, value, key)
          }
          this.trigger('setData', key) // 发起setData事件， runtime
        }
      }
      Object.defineProperty(context, key, getset) // 将xxx 绑定到上下文，即 this.xxx => this.data.xxx
      if (typeof context.data[key] == 'object') { // 判断xxx内属性是否是对象，是的话 深层解构
        this.addPropertyProxy(context, context.data, key)
      }
    }
  }
  /**
   * 解构对象内的所有对象，使他们在set时也可以触发setData事件
   * @param {Object} context 页面上下文
   * @param {Object | Array} obj 需要解构的对象，
   * @param {String} name 解构对象的顶层对象名
   */
  addPropertyProxy(context, obj, name) {
    var keys = Object.keys(obj || {})
    keys.forEach((e) => { // 循环对象
      let value = obj[e] // 创建一个暂存的新元数据，让转发指向这个新创建的值
      var define = {
        get: () => {
          return value // 返回暂存的新元数据
        },
        set: (val) => {
          value = val // 修改暂存的新元数据
          if (typeof value == 'object') {
            this.addPropertyProxy(context, value, name) // 该对象赋值的值如果是对象，则解构
          }
          this.trigger('setData', name) // 发起setData事件，并告知顶层对象名
        }
      }
      Object.defineProperty(obj, e, define) // this.xxx[0].y => value = this.data.xxx[0].y
      if (typeof obj[e] == 'object') {
        this.addPropertyProxy(context, obj[e], name)
      }
    })
  }
  /**
   * 将computed转发到上下文
   * @param {Object} context 页面上下文
   */
  addComputedProxy(context) {
    const cpt = context.computed
    const cpts = Object.keys(context.computed || {})

    cpts.forEach((e) => {
      const getset = {
        enumerable: true,
        get: () => {
          let val = cpt[e].call(this)
          return val
        }
      }
      Object.defineProperty(context, e, getset)
    })
  }
  watch(context, key, newV, oldV) {
    if (context.watch && context.watch.hasOwnProperty(key)) {
      if (typeof context.watch[key] == 'object') {
        context.watch[key].handler.call(context, newV, oldV)
      } else {
        context.watch[key].call(context, newV, oldV)
      }
    }
  }
}
