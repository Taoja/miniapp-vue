function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function merge(mixins, options, properties) {
  mixins.reverse().forEach(function (mixin) {
    if (_typeof_1(mixin) == 'object') {
      var _loop = function _loop() {
        var _Object$entries$_i = slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (key === 'data') {
          options.data = Object.assign({}, value, options.data);
        } else if (key === 'watch') {
          options.data.__w = _objectSpread(_objectSpread({}, options.data.__w), value);
        } else if (key === 'computed') {
          options.data.__c = _objectSpread(_objectSpread({}, options.data.__c), value);
        } else if (properties.includes(key)) {
          var _native = options[key];

          options[key] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            value.call.apply(value, [this].concat(args));
            return _native && _native.call.apply(_native, [this].concat(args));
          };
        } else {
          options = Object.assign({}, mixin, options);
        }
      };

      for (var _i = 0, _Object$entries = Object.entries(mixin); _i < _Object$entries.length; _i++) {
        _loop();
      }
    }
  });
  return options;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var Event = /*#__PURE__*/function () {
  function Event() {
    classCallCheck(this, Event);

    defineProperty(this, "stack", {});
  }

  createClass(Event, [{
    key: "on",
    value: function on(eventName, callback) {
      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date().getTime();
      this.stack[eventName] = [].concat(toConsumableArray(this.stack[eventName] || []), [{
        callback: callback,
        id: id,
        once: false
      }]);
      return id;
    }
  }, {
    key: "once",
    value: function once(eventName, callback) {
      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date().getTime();
      this.stack[eventName] = [].concat(toConsumableArray(this.stack[eventName] || []), [{
        callback: callback,
        id: id,
        once: true
      }]);
      return id;
    }
  }, {
    key: "trigger",
    value: function trigger(eventName, e) {
      var callbackList = this.stack[eventName];
      var callbackListNew = (callbackList || []).filter(function (item) {
        item.callback(e);
        return !item.once;
      });
      this.stack[eventName] = callbackListNew;
    }
  }, {
    key: "off",
    value: function off(eventName, id) {
      var callbackListNew = this.stack[eventName].filter(function (item) {
        return item.id !== id;
      });
      this.stack[eventName] = callbackListNew;
    }
  }]);

  return Event;
}();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Core = /*#__PURE__*/function (_Event) {
  inherits(Core, _Event);

  var _super = _createSuper(Core);

  function Core() {
    classCallCheck(this, Core);

    return _super.apply(this, arguments);
  }

  createClass(Core, [{
    key: "addProxy",

    /**
     * 将data转发到上下文，可以直接this.xxx调用并修改对象
     * 监听set方法，触发set时调用对应的watch 并且触发setData事件
     * @param {Object} context 页面实例上下文
     */
    value: function addProxy(context) {
      var _this = this;

      var _loop = function _loop(key) {
        var getset = {
          get: function get() {
            return context.data[key];
          },
          // this.xxx 指向 this.data.xxx
          set: function set(value) {
            _this.watch(context, key, value, context.data[key]); // 触发 watch.xxx


            context.data[key] = value; // this.xxx = y 改为 this.data.xxx = y

            if (_typeof_1(value) == 'object') {
              // 判断xxx内属性是否是对象，是的话 深层解构
              _this.addPropertyProxy(context, value, key);
            }

            _this.trigger('setData', key); // 发起setData事件， runtime

          }
        };
        Object.defineProperty(context, key, getset); // 将xxx 绑定到上下文，即 this.xxx => this.data.xxx

        if (_typeof_1(context.data[key]) == 'object') {
          // 判断xxx内属性是否是对象，是的话 深层解构
          _this.addPropertyProxy(context, context.data, key);
        }
      };

      for (var key in context.data) {
        _loop(key);
      }
    }
    /**
     * 解构对象内的所有对象，使他们在set时也可以触发setData事件
     * @param {Object} context 页面上下文
     * @param {Object | Array} obj 需要解构的对象，
     * @param {String} name 解构对象的顶层对象名
     */

  }, {
    key: "addPropertyProxy",
    value: function addPropertyProxy(context, obj, name) {
      var _this2 = this;

      var keys = Object.keys(obj || {});
      keys.forEach(function (e) {
        // 循环对象
        var value = obj[e]; // 创建一个暂存的新元数据，让转发指向这个新创建的值

        var define = {
          get: function get() {
            return value; // 返回暂存的新元数据
          },
          set: function set(val) {
            value = val; // 修改暂存的新元数据

            if (_typeof_1(value) == 'object') {
              _this2.addPropertyProxy(context, value, name); // 该对象赋值的值如果是对象，则解构

            }

            _this2.trigger('setData', name); // 发起setData事件，并告知顶层对象名

          }
        };
        Object.defineProperty(obj, e, define); // this.xxx[0].y => value = this.data.xxx[0].y

        if (_typeof_1(obj[e]) == 'object') {
          _this2.addPropertyProxy(context, obj[e], name);
        }
      });
    }
    /**
     * 将computed转发到上下文
     * @param {Object} context 页面上下文
     */

  }, {
    key: "addComputedProxy",
    value: function addComputedProxy(context) {
      var _this3 = this;

      var cpt = context.computed;
      var cpts = Object.keys(context.computed || {});
      cpts.forEach(function (e) {
        var getset = {
          enumerable: true,
          get: function get() {
            var val = cpt[e].call(_this3);
            return val;
          }
        };
        Object.defineProperty(context, e, getset);
      });
    }
  }, {
    key: "watch",
    value: function watch(context, key, newV, oldV) {
      if (context.watch && context.watch.hasOwnProperty(key)) {
        if (_typeof_1(context.watch[key]) == 'object') {
          context.watch[key].handler.call(context, newV, oldV);
        } else {
          context.watch[key].call(context, newV, oldV);
        }
      }
    }
  }]);

  return Core;
}(Event);

var __empty = function __empty(e) {
  for (var i in e) {
    return false;
  }

  return true;
};

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Rumtime = /*#__PURE__*/function (_Core) {
  inherits(Rumtime, _Core);

  var _super = _createSuper$1(Rumtime);

  // setData数据暂存
  // 控制一个同步内只会发起一次setData
  function Rumtime(context) {
    var _this;

    classCallCheck(this, Rumtime);

    _this = _super.call(this);

    defineProperty(assertThisInitialized(_this), "dataCache", {});

    defineProperty(assertThisInitialized(_this), "setDataSwitch", true);

    _this.context = context; // 页面上下文

    _this.on('setData', _this.setData.bind(assertThisInitialized(_this)));

    _this.init();

    return _this;
  }
  /**
   * 重写setData，响应data数据变化
   * 缓存一个同步内的变更，并在一个异步后统一发出
   */


  createClass(Rumtime, [{
    key: "setData",
    value: function setData(name) {
      var _this2 = this;

      Object.assign(this.dataCache, defineProperty({}, name, this.context[name]));

      if (this.setDataSwitch && !__empty(this.dataCache)) {
        this.setDataSwitch = false;
        wx.nextTick(function () {
          _this2.setDataSwitch = true;

          _this2.send();
        });
      }
    }
    /**
     * 发送真实的setData
     */

  }, {
    key: "send",
    value: function send() {
      this.computed();
      this.context.setData(this.dataCache);
      this.dataCache = {};
    }
    /**
     * 初始化runtime
     * created时触发
     */

  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      this.addProxy(this.context); // 调用Core类中的转发函数

      this.addComputedProxy(this.context); // 调用Core类中的 computed转发函数

      wx.nextTick(function () {
        _this3.send(); // 一个异步后计算computed

      });
    }
    /**
     * 将所有的computed计算
     * 并装载入setData暂存
     */

  }, {
    key: "computed",
    value: function computed() {
      for (var key in this.context.computed) {
        var value = this.context.computed[key].call(this.context);
        this.dataCache[key] = value;
      }
    }
  }]);

  return Rumtime;
}(Core);

var Render = /*#__PURE__*/function () {
  // 原始参数
  // component文档参数
  // component实例
  function Render(config) {
    classCallCheck(this, Render);

    defineProperty(this, "config", {});

    defineProperty(this, "options", {});

    defineProperty(this, "instance", void 0);

    this.setMixins(config);
    this.setLifetime();
    this.setData();
    this.setComputed();
    this.setProps();
    this.setWatch();
    this.setMethods();
    this.setBehavior();
    Component(this.options);
  }
  /**
   * data转小程序component data
   */


  createClass(Render, [{
    key: "setData",
    value: function setData() {
      var data = this.config.data;

      if (typeof data === 'function') {
        this.options.data = data();
      } else if (_typeof_1(data) === 'object') {
        this.options.data = data;
      } else {
        throw new Error('data格式不正确');
      }
    }
    /**
     * methods转小程序component methods
     */

  }, {
    key: "setMethods",
    value: function setMethods() {
      var methods = this.config.methods;
      this.options.methods = methods;
    }
    /**
     * 通过behaviors插入自己默认的初始化runtime脚本
     */

  }, {
    key: "setBehavior",
    value: function setBehavior() {
      var behaviors = this.config.behaviors;
      this.options.behaviors = behaviors || [];
    }
    /**
     * 把mixins的配置，拼入各个参数中
     */

  }, {
    key: "setMixins",
    value: function setMixins(config) {
      var mixins = config.mixins;
      delete this.config.mixins;
      var that = this;
      mixins = [].concat(toConsumableArray(mixins || []), [{
        created: function created() {
          that.instance = this;

          if (this.data && this.data.hasOwnProperty('__c')) {
            this.computed = this.data.__c;
            delete this.data.__c;
          }

          if (this.data && this.data.hasOwnProperty('__w')) {
            this.watch = this.data.__w;
            delete this.data.__w;
          }

          new Rumtime(this);
        }
      }]);
      var params = ['mounted', 'created', 'destroyed', 'created', 'ready', 'attached', 'moved', 'detached']; // 需要合并调用的函数

      this.config = merge(mixins || [], config, params);
    }
    /**
     * 把computed存入data.__c 中
     * 并在runtime中取出并删除data.__c
     */

  }, {
    key: "setComputed",
    value: function setComputed() {
      var computed = this.config.computed;
      this.options.data.__c = computed || {};
    }
    /**
     * 把watch存入data.__w 中
     * 并在runtime中取出并删除data.__w
     */

  }, {
    key: "setWatch",
    value: function setWatch() {
      var watch = this.config.watch;
      this.options.data.__w = watch || {};
    }
    /** 
     * 重写生命周期名
     * created => created
     * mounted => ready
     * activated => pageLifetimes.show
     * deactivated => pageLifetimes.hide
     * destroyed => detached
     */

  }, {
    key: "setLifetime",
    value: function setLifetime() {
      var _this$config = this.config,
          mounted = _this$config.mounted,
          activated = _this$config.activated,
          deactivated = _this$config.deactivated,
          destroyed = _this$config.destroyed,
          created = _this$config.created;
      this.options.created = created;
      this.options.ready = mounted;
      this.options.pageLifetimes = {
        show: activated,
        hide: deactivated
      };
      this.options.detached = destroyed;
    }
    /**
     * 将props参数转换为component需要的properties
     */

  }, {
    key: "setProps",
    value: function setProps() {
      var props = this.config.props || {};
      var properties = {};

      var _loop = function _loop(key) {
        properties[key] = {
          type: props[key].type,
          value: props[key]["default"],
          observer: function observer(e, f, g) {
            if (typeof props[key].observer == 'function') {
              props[key].observer.call(this, e, f, g);
            }

            this[key] = e;
          }
        };
      };

      for (var key in props) {
        _loop(key);
      }

      this.options.properties = properties;
    }
    /**
     * 将参数转换为component需要的参数
     */

  }], [{
    key: "render",
    value: function render() {
      var init = new this();
      init.setMixins(init);
      init.setLifetime();
      init.setData();
      init.setComputed();
      init.setProps();
      init.setWatch();
      init.setMethods();
      init.setBehavior();
      Component(init.options);
      return init;
    }
  }]);

  return Render;
}();

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Render$1 = /*#__PURE__*/function () {
  // 原始参数
  // page文档参数
  // page实例
  function Render(config) {
    classCallCheck(this, Render);

    defineProperty(this, "config", {});

    defineProperty(this, "options", {});

    defineProperty(this, "instance", void 0);

    this.setMixins(config);
    this.setLifetime();
    this.setData();
    this.setComputed();
    this.setWatch();
    this.setMethods();
    this.setBehavior();
    Page(this.options);
  }
  /**
   * data转小程序page data
   */


  createClass(Render, [{
    key: "setData",
    value: function setData() {
      var data = this.config.data;

      if (typeof data === 'function') {
        this.options.data = data();
      } else if (_typeof_1(data) === 'object') {
        this.options.data = data;
      } else {
        throw new Error('data格式不正确');
      }
    }
    /**
     * methods转小程序page methods
     */

  }, {
    key: "setMethods",
    value: function setMethods() {
      var methods = this.config.methods;
      this.options = _objectSpread$1(_objectSpread$1({}, this.options), methods);
    }
    /**
     * 通过behaviors插入自己默认的初始化runtime脚本
     */

  }, {
    key: "setBehavior",
    value: function setBehavior() {
      var behaviors = this.config.behaviors;
      this.options.behaviors = behaviors || [];
    }
    /**
     * 把mixins的配置，拼入各个参数中
     */

  }, {
    key: "setMixins",
    value: function setMixins(config) {
      var mixins = config.mixins;
      delete this.config.mixins;
      var that = this;
      mixins = [].concat(toConsumableArray(mixins || []), [{
        created: function created() {
          that.instance = this;

          if (this.data && this.data.hasOwnProperty('__c')) {
            this.computed = this.data.__c;
            delete this.data.__c;
          }

          if (this.data && this.data.hasOwnProperty('__w')) {
            this.watch = this.data.__w;
            delete this.data.__w;
          }

          new Rumtime(this);
        }
      }]);
      var params = ['mounted', 'created', 'activated', 'destroyed', 'onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']; // 需要合并调用的函数

      this.config = merge(mixins || [], config, params);
    }
    /**
     * 把computed存入data.__c 中
     * 并在runtime中取出并删除data.__c
     */

  }, {
    key: "setComputed",
    value: function setComputed() {
      var computed = this.config.computed;
      this.options.data.__c = computed || {};
    }
    /**
     * 把watch存入data.__w 中
     * 并在runtime中取出并删除data.__w
     */

  }, {
    key: "setWatch",
    value: function setWatch() {
      var watch = this.config.watch;
      this.options.data.__w = watch || {};
    }
    /** 
     * 重写生命周期名
     * created => onLoad
     * mounted => onReady
     * activated => onShow
     * destroyed => onUnload
     */

  }, {
    key: "setLifetime",
    value: function setLifetime() {
      var _this$config = this.config,
          mounted = _this$config.mounted,
          activated = _this$config.activated,
          destroyed = _this$config.destroyed,
          created = _this$config.created;
      this.options.onReady = mounted;
      this.options.onShow = activated;
      this.options.onUnload = destroyed;
      this.options.onLoad = created;
    }
    /**
     * 将参数转换为page需要的参数
     */

  }], [{
    key: "render",
    value: function render() {
      var init = new this();
      init.setMixins(config);
      init.setLifetime();
      init.setData();
      init.setComputed();
      init.setWatch();
      init.setMethods();
      init.setBehavior();
      Page(init.options);
      return init;
    }
  }]);

  return Render;
}();

export { Render as Component, Render$1 as Page };
