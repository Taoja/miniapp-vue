function merge(mixins, options, properties) {
  mixins.reverse().forEach(mixin => {
    if (typeof mixin == 'object') {
      for (let [key, value] of Object.entries(mixin)) {
        if (key === 'data') {
          options.data = Object.assign({}, value, options.data)
        } else if (key === 'watch') {
          options.data.__w = {
            ...options.data.__w,
            ...value
          }
        } else if (key === 'computed') {
          options.data.__c = {
            ...options.data.__c,
            ...value
          }
        } else if (properties.includes(key)) {
          let native = options[key]
          options[key] = function (...args) {
            value.call(this, ...args)
            return native && native.call(this, ...args)
          }
        } else {
          options = Object.assign({}, mixin, options)
        }
      }
    }
  })
  return options
}

export default merge