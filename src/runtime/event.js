export default class Event {
  stack = {}
  on(eventName, callback, id = (new Date()).getTime()) {
    this.stack[eventName] = [
      ...this.stack[eventName] || [],
      {
        callback,
        id,
        once: false
      }
    ]
    return id
  }
  once(eventName, callback, id = (new Date()).getTime()) {
    this.stack[eventName] = [
      ...this.stack[eventName] || [],
      {
        callback,
        id,
        once: true
      }
    ]
    return id
  }
  trigger(eventName, e) {
    var callbackList = this.stack[eventName]
    var callbackListNew = (callbackList || []).filter((item) => {
      item.callback(e)
      return !item.once
    })
    this.stack[eventName] = callbackListNew
  }
  off(eventName, id) {
    var callbackListNew = this.stack[eventName].filter((item) => {
      return item.id !== id
    })
    this.stack[eventName] = callbackListNew
  }
}
