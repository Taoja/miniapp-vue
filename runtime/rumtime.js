import Core from './core'
import { __empty } from '../lib/help'

export default class Rumtime extends Core {
  dataCache = {} // setData数据暂存
  setDataSwitch = true // 控制一个同步内只会发起一次setData
  constructor(context) {
    super()
    this.context = context // 页面上下文
    this.on('setData', this.setData.bind(this))
    this.init()
  }
  /**
   * 重写setData，响应data数据变化
   * 缓存一个同步内的变更，并在一个异步后统一发出
   */
  setData(name) {
    Object.assign(this.dataCache, {
      [name]: this.context[name]
    })
    if (this.setDataSwitch && !__empty(this.dataCache)) {
      this.setDataSwitch = false
      wx.nextTick(() => {
        this.setDataSwitch = true
        this.send()
      })
    }
  }
  /**
   * 发送真实的setData
   */
  send() {
    this.computed()
    this.context.setData(this.dataCache)
    this.dataCache = {}
  }
  /**
   * 初始化runtime
   * created时触发
   */
  init() {
    this.addProxy(this.context) // 调用Core类中的转发函数
    this.addComputedProxy(this.context) // 调用Core类中的 computed转发函数
    wx.nextTick(() => {
      this.send() // 一个异步后计算computed
    })
  }
  /**
   * 将所有的computed计算
   * 并装载入setData暂存
   */
  computed() {
    for (let key in this.context.computed) {
      var value = this.context.computed[key].call(this.context)
      this.dataCache[key] = value
    }
  }
}