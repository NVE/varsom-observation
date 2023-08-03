/*! For license information please see main.58941db9.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    './.storybook/preview.js-generated-config-entry.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, 'parameters', function () {
          return parameters;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.filter.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.get-own-property-descriptor.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.for-each.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.for-each.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.get-own-property-descriptors.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.define-properties.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.define-property.js');
      var ClientApi = __webpack_require__('./node_modules/@storybook/client-api/dist/esm/ClientApi.js');
      __webpack_require__('./node_modules/core-js/modules/es.reflect.construct.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.set-prototype-of.js'),
        __webpack_require__('./node_modules/core-js/modules/es.promise.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('./node_modules/core-js/modules/es.string.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/web.url.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.entries.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.find.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.includes.js'),
        __webpack_require__('./node_modules/core-js/modules/es.string.starts-with.js'),
        __webpack_require__('./node_modules/core-js/modules/es.string.ends-with.js'),
        __webpack_require__('./node_modules/core-js/modules/es.weak-map.js');
      var index_c81fdd5d = __webpack_require__('./dist/esm/index-c81fdd5d.js');
      !(function () {
        if ('undefined' != typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
          var a = HTMLElement;
          (window.HTMLElement = function () {
            return Reflect.construct(a, [], this.constructor);
          }),
            (HTMLElement.prototype = a.prototype),
            (HTMLElement.prototype.constructor = HTMLElement),
            Object.setPrototypeOf(HTMLElement, a);
        }
      })(),
        (function defineCustomElements(win, options) {
          'undefined' == typeof window
            ? Promise.resolve()
            : (function patchEsm() {
                return Object(index_c81fdd5d.d)();
              })().then(function () {
                return Object(index_c81fdd5d.a)(
                  [
                    ['my-component', [[1, 'my-component', { first: [1], middle: [1], last: [1] }]]],
                    [
                      'varsom-observation',
                      [
                        [
                          1,
                          'varsom-observation',
                          {
                            regid: [1],
                            language: [1],
                            type: [1],
                            number: [2],
                            count: [2],
                            _regId: [32],
                            moh: [32],
                            numberOfObservations: [32],
                            region: [32],
                            municipality: [32],
                            source: [32],
                            sourceOfPositioning: [32],
                            precision: [32],
                            dateOfObservation: [32],
                            dateOfRegistration: [32],
                            dateOfLastUpdate: [32],
                            observer: [32],
                            typeOfWeather: [32],
                            slideIndex: [32],
                          },
                        ],
                      ],
                    ],
                  ],
                  options,
                );
              });
        })();
      var parameters = { actions: { argTypesRegex: '^on[A-Z].*' }, controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } } };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : (obj[key] = value), obj;
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
            return Object(ClientApi.d)(value);
          case 'argTypes':
            return Object(ClientApi.b)(value);
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(ClientApi.f)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(ClientApi.g)(loader, !1);
            });
          case 'parameters':
            return Object(ClientApi.h)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                      });
                }
                return target;
              })({}, value),
              !1,
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.e)(enhancer);
            });
          case 'render':
            return Object(ClientApi.i)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(ClientApi.h)(v, !1);
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null;
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    './dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$': function (module, exports, __webpack_require__) {
      var map = { './my-component.entry.js': ['./dist/esm/my-component.entry.js', 11], './varsom-observation.entry.js': ['./dist/esm/varsom-observation.entry.js', 12] };
      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req))
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          });
        var ids = map[req],
          id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }
      (webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      }),
        (webpackAsyncContext.id = './dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$'),
        (module.exports = webpackAsyncContext);
    },
    './dist/esm/index-c81fdd5d.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return bootstrapLazy;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return getAssetPath;
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return h;
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function () {
          return promiseResolve;
        }),
        __webpack_require__.d(__webpack_exports__, 'e', function () {
          return registerInstance;
        });
      __webpack_require__('./node_modules/core-js/modules/web.url.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('./node_modules/core-js/modules/es.string.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.is-array.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.join.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.filter.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.parse-float.js'),
        __webpack_require__('./node_modules/core-js/modules/es.weak-map.js'),
        __webpack_require__('./node_modules/core-js/modules/es.set.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.includes.js'),
        __webpack_require__('./node_modules/core-js/modules/es.string.includes.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.concat.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__('./node_modules/core-js/modules/es.string.split.js'),
        __webpack_require__('./node_modules/core-js/modules/es.regexp.exec.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__('./node_modules/core-js/modules/es.promise.js'),
        __webpack_require__('./node_modules/core-js/modules/es.number.is-nan.js'),
        __webpack_require__('./node_modules/core-js/modules/es.number.constructor.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.entries.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.define-property.js'),
        __webpack_require__('./node_modules/core-js/modules/es.map.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/web.timers.js'),
        __webpack_require__('./node_modules/core-js/modules/es.string.replace.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.name.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.async-iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.to-string-tag.js'),
        __webpack_require__('./node_modules/core-js/modules/es.math.to-string-tag.js'),
        __webpack_require__('./node_modules/core-js/modules/es.json.to-string-tag.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.create.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.get-prototype-of.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.for-each.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.for-each.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.set-prototype-of.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.reverse.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('./node_modules/core-js/modules/es.regexp.to-string.js'),
        __webpack_require__('./node_modules/core-js/modules/es.date.to-string.js'),
        __webpack_require__('./node_modules/core-js/modules/es.reflect.construct.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.to-primitive.js'),
        __webpack_require__('./node_modules/core-js/modules/es.date.to-primitive.js');
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(
              target,
              ((arg = descriptor.key),
              (key = void 0),
              'symbol' ==
              typeof (key = (function _toPrimitive(input, hint) {
                if ('object' != typeof input || null === input) return input;
                var prim = input[Symbol.toPrimitive];
                if (void 0 !== prim) {
                  var res = prim.call(input, hint || 'default');
                  if ('object' != typeof res) return res;
                  throw new TypeError('@@toPrimitive must return a primitive value.');
                }
                return ('string' === hint ? String : Number)(input);
              })(arg, 'string'))
                ? key
                : String(key)),
              descriptor,
            );
        }
        var arg, key;
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return (function _possibleConstructorReturn(self, call) {
            if (call && ('object' == typeof call || 'function' == typeof call)) return call;
            if (void 0 !== call) throw new TypeError('Derived constructors may only return object or undefined');
            return _assertThisInitialized(self);
          })(this, result);
        };
      }
      function _assertThisInitialized(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
      }
      function _wrapNativeSuper(Class) {
        var _cache = 'function' == typeof Map ? new Map() : void 0;
        return (
          (_wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (
              null === Class ||
              !(function _isNativeFunction(fn) {
                return -1 !== Function.toString.call(fn).indexOf('[native code]');
              })(Class)
            )
              return Class;
            if ('function' != typeof Class) throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== _cache) {
              if (_cache.has(Class)) return _cache.get(Class);
              _cache.set(Class, Wrapper);
            }
            function Wrapper() {
              return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }
            return (
              (Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } })),
              _setPrototypeOf(Wrapper, Class)
            );
          }),
          _wrapNativeSuper(Class)
        );
      }
      function _construct(Parent, args, Class) {
        return (
          (_construct = _isNativeReflectConstruct()
            ? Reflect.construct.bind()
            : function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var instance = new (Function.bind.apply(Parent, a))();
                return Class && _setPrototypeOf(instance, Class.prototype), instance;
              }),
          _construct.apply(null, arguments)
        );
      }
      function _isNativeReflectConstruct() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function _setPrototypeOf(o, p) {
        return (
          (_setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function _setPrototypeOf(o, p) {
                return (o.__proto__ = p), o;
              }),
          _setPrototypeOf(o, p)
        );
      }
      function _getPrototypeOf(o) {
        return (
          (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              }),
          _getPrototypeOf(o)
        );
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i = null == arr ? null : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
            if (null != _i) {
              var _s,
                _e,
                _x,
                _r,
                _arr = [],
                _n = !0,
                _d = !1;
              try {
                if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                  if (Object(_i) !== _i) return;
                  _n = !1;
                } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
              } catch (err) {
                (_d = !0), (_e = err);
              } finally {
                try {
                  if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
                } finally {
                  if (_d) throw _e;
                }
              }
              return _arr;
            }
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
          })()
        );
      }
      function _regeneratorRuntime() {
        _regeneratorRuntime = function _regeneratorRuntime() {
          return exports;
        };
        var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value;
            },
          $Symbol = 'function' == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || '@@iterator',
          asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
          toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
        function define(obj, key, value) {
          return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];
        }
        try {
          define({}, '');
        } catch (err) {
          define = function define(obj, key, value) {
            return (obj[key] = value);
          };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || []);
          return defineProperty(generator, '_invoke', { value: makeInvokeMethod(innerFn, self, context) }), generator;
        }
        function tryCatch(fn, obj, arg) {
          try {
            return { type: 'normal', arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: 'throw', arg: err };
          }
        }
        exports.wrap = wrap;
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
        var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype));
        function defineIteratorMethods(prototype) {
          ['next', 'throw', 'return'].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ('throw' !== record.type) {
              var result = record.arg,
                value = result.value;
              return value && 'object' == typeof value && hasOwn.call(value, '__await')
                ? PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke('next', value, resolve, reject);
                    },
                    function (err) {
                      invoke('throw', err, resolve, reject);
                    },
                  )
                : PromiseImpl.resolve(value).then(
                    function (unwrapped) {
                      (result.value = unwrapped), resolve(result);
                    },
                    function (error) {
                      return invoke('throw', error, resolve, reject);
                    },
                  );
            }
            reject(record.arg);
          }
          var previousPromise;
          defineProperty(this, '_invoke', {
            value: function value(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return (previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg());
            },
          });
        }
        function makeInvokeMethod(innerFn, self, context) {
          var state = 'suspendedStart';
          return function (method, arg) {
            if ('executing' === state) throw new Error('Generator is already running');
            if ('completed' === state) {
              if ('throw' === method) throw arg;
              return doneResult();
            }
            for (context.method = method, context.arg = arg; ; ) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if ('next' === context.method) context.sent = context._sent = context.arg;
              else if ('throw' === context.method) {
                if ('suspendedStart' === state) throw ((state = 'completed'), context.arg);
                context.dispatchException(context.arg);
              } else 'return' === context.method && context.abrupt('return', context.arg);
              state = 'executing';
              var record = tryCatch(innerFn, self, context);
              if ('normal' === record.type) {
                if (((state = context.done ? 'completed' : 'suspendedYield'), record.arg === ContinueSentinel)) continue;
                return { value: record.arg, done: context.done };
              }
              'throw' === record.type && ((state = 'completed'), (context.method = 'throw'), (context.arg = record.arg));
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method,
            method = delegate.iterator[methodName];
          if (void 0 === method)
            return (
              (context.delegate = null),
              ('throw' === methodName &&
                delegate.iterator.return &&
                ((context.method = 'return'), (context.arg = void 0), maybeInvokeDelegate(delegate, context), 'throw' === context.method)) ||
                ('return' !== methodName && ((context.method = 'throw'), (context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")))),
              ContinueSentinel
            );
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ('throw' === record.type) return (context.method = 'throw'), (context.arg = record.arg), (context.delegate = null), ContinueSentinel;
          var info = record.arg;
          return info
            ? info.done
              ? ((context[delegate.resultName] = info.value),
                (context.next = delegate.nextLoc),
                'return' !== context.method && ((context.method = 'next'), (context.arg = void 0)),
                (context.delegate = null),
                ContinueSentinel)
              : info
            : ((context.method = 'throw'), (context.arg = new TypeError('iterator result is not an object')), (context.delegate = null), ContinueSentinel);
        }
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          1 in locs && (entry.catchLoc = locs[1]), 2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])), this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          (record.type = 'normal'), delete record.arg, (entry.completion = record);
        }
        function Context(tryLocsList) {
          (this.tryEntries = [{ tryLoc: 'root' }]), tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ('function' == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  for (; ++i < iterable.length; ) if (hasOwn.call(iterable, i)) return (next.value = iterable[i]), (next.done = !1), next;
                  return (next.value = void 0), (next.done = !0), next;
                };
              return (next.next = next);
            }
          }
          return { next: doneResult };
        }
        function doneResult() {
          return { value: void 0, done: !0 };
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          defineProperty(Gp, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
          defineProperty(GeneratorFunctionPrototype, 'constructor', { value: GeneratorFunction, configurable: !0 }),
          (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, 'GeneratorFunction')),
          (exports.isGeneratorFunction = function (genFun) {
            var ctor = 'function' == typeof genFun && genFun.constructor;
            return !!ctor && (ctor === GeneratorFunction || 'GeneratorFunction' === (ctor.displayName || ctor.name));
          }),
          (exports.mark = function (genFun) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                : ((genFun.__proto__ = GeneratorFunctionPrototype), define(genFun, toStringTagSymbol, 'GeneratorFunction')),
              (genFun.prototype = Object.create(Gp)),
              genFun
            );
          }),
          (exports.awrap = function (arg) {
            return { __await: arg };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          }),
          (exports.AsyncIterator = AsyncIterator),
          (exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn)
              ? iter
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          }),
          defineIteratorMethods(Gp),
          define(Gp, toStringTagSymbol, 'Generator'),
          define(Gp, iteratorSymbol, function () {
            return this;
          }),
          define(Gp, 'toString', function () {
            return '[object Generator]';
          }),
          (exports.keys = function (val) {
            var object = Object(val),
              keys = [];
            for (var key in object) keys.push(key);
            return (
              keys.reverse(),
              function next() {
                for (; keys.length; ) {
                  var key = keys.pop();
                  if (key in object) return (next.value = key), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (exports.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(resetTryEntry),
                !skipTempReset)
              )
                for (var name in this) 't' === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
            },
            stop: function stop() {
              this.done = !0;
              var rootRecord = this.tryEntries[0].completion;
              if ('throw' === rootRecord.type) throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                return (record.type = 'throw'), (record.arg = exception), (context.next = loc), caught && ((context.method = 'next'), (context.arg = void 0)), !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion;
                if ('root' === entry.tryLoc) return handle('end');
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, 'catchLoc'),
                    hasFinally = hasOwn.call(entry, 'finallyLoc');
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  } else {
                    if (!hasFinally) throw new Error('try statement without catch or finally');
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, 'finallyLoc') && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry && ('break' === type || 'continue' === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return (
                (record.type = type), (record.arg = arg), finallyEntry ? ((this.method = 'next'), (this.next = finallyEntry.finallyLoc), ContinueSentinel) : this.complete(record)
              );
            },
            complete: function complete(record, afterLoc) {
              if ('throw' === record.type) throw record.arg;
              return (
                'break' === record.type || 'continue' === record.type
                  ? (this.next = record.arg)
                  : 'return' === record.type
                  ? ((this.rval = this.arg = record.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === record.type && afterLoc && (this.next = afterLoc),
                ContinueSentinel
              );
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
              }
            },
            catch: function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ('throw' === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              return (this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }), 'next' === this.method && (this.arg = void 0), ContinueSentinel;
            },
          }),
          exports
        );
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg),
            value = info.value;
        } catch (error) {
          return void reject(error);
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
            }
            _next(void 0);
          });
        };
      }
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if (('undefined' != typeof Symbol && null != iter[Symbol.iterator]) || null != iter['@@iterator']) return Array.from(iter);
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(o) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var scopeId,
        hostTagName,
        queuePending = !1,
        getAssetPath = function getAssetPath(path) {
          var assetUrl = new URL(path, plt.$resourcesUrl$);
          return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
        },
        createTime = function createTime(fnName) {
          return function () {};
        },
        HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}',
        EMPTY_OBJ = {},
        isComplexType = function isComplexType(o) {
          return 'object' === (o = typeof o) || 'function' === o;
        };
      function queryNonceMetaTagContent(doc) {
        var _a, _b, _c;
        return null !==
          (_c =
            null === (_b = null === (_a = doc.head) || void 0 === _a ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) || void 0 === _b
              ? void 0
              : _b.getAttribute('content')) && void 0 !== _c
          ? _c
          : void 0;
      }
      var h = function h(nodeName, vnodeData) {
          for (
            var child = null, simple = !1, lastSimple = !1, vNodeChildren = [], _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2;
            _key < _len;
            _key++
          )
            children[_key - 2] = arguments[_key];
          if (
            ((function walk(c) {
              for (var i = 0; i < c.length; i++)
                (child = c[i]),
                  Array.isArray(child)
                    ? walk(child)
                    : null != child &&
                      'boolean' != typeof child &&
                      ((simple = 'function' != typeof nodeName && !isComplexType(child)) && (child = String(child)),
                      simple && lastSimple ? (vNodeChildren[vNodeChildren.length - 1].$text$ += child) : vNodeChildren.push(simple ? newVNode(null, child) : child),
                      (lastSimple = simple));
            })(children),
            vnodeData)
          ) {
            var classData = vnodeData.className || vnodeData.class;
            classData &&
              (vnodeData.class =
                'object' != typeof classData
                  ? classData
                  : Object.keys(classData)
                      .filter(function (k) {
                        return classData[k];
                      })
                      .join(' '));
          }
          var vnode = newVNode(nodeName, null);
          return (vnode.$attrs$ = vnodeData), vNodeChildren.length > 0 && (vnode.$children$ = vNodeChildren), vnode;
        },
        newVNode = function newVNode(tag, text) {
          var vnode = { $flags$: 0, $tag$: tag, $text$: text, $elm$: null, $children$: null, $attrs$: null };
          return vnode;
        },
        Host = {},
        rootAppliedStyles = new WeakMap(),
        registerStyle = function registerStyle(scopeId, cssText, allowCS) {
          var style = styles.get(scopeId);
          supportsConstructableStylesheets && allowCS
            ? 'string' == typeof (style = style || new CSSStyleSheet())
              ? (style = cssText)
              : style.replaceSync(cssText)
            : (style = cssText),
            styles.set(scopeId, style);
        },
        attachStyles = function attachStyles(hostRef) {
          var cmpMeta = hostRef.$cmpMeta$,
            elm = hostRef.$hostElement$,
            flags = cmpMeta.$flags$,
            endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$),
            scopeId = (function addStyle(styleContainerNode, cmpMeta, mode, hostElm) {
              var _a,
                scopeId = getScopeId(cmpMeta),
                style = styles.get(scopeId);
              if (((styleContainerNode = 11 === styleContainerNode.nodeType ? styleContainerNode : doc), style))
                if ('string' == typeof style) {
                  styleContainerNode = styleContainerNode.head || styleContainerNode;
                  var styleElm,
                    appliedStyles = rootAppliedStyles.get(styleContainerNode);
                  if ((appliedStyles || rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set())), !appliedStyles.has(scopeId))) {
                    (styleElm = doc.createElement('style')).innerHTML = style;
                    var nonce = null !== (_a = plt.$nonce$) && void 0 !== _a ? _a : queryNonceMetaTagContent(doc);
                    null != nonce && styleElm.setAttribute('nonce', nonce),
                      styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link')),
                      appliedStyles && appliedStyles.add(scopeId);
                  }
                } else
                  styleContainerNode.adoptedStyleSheets.includes(style) ||
                    (styleContainerNode.adoptedStyleSheets = [].concat(_toConsumableArray(styleContainerNode.adoptedStyleSheets), [style]));
              return scopeId;
            })(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
          10 & flags && ((elm['s-sc'] = scopeId), elm.classList.add(scopeId + '-h')), endAttachStyles();
        },
        getScopeId = function getScopeId(cmp, mode) {
          return 'sc-' + cmp.$tagName$;
        },
        setAccessor = function setAccessor(elm, memberName, oldValue, newValue, isSvg, flags) {
          if (oldValue !== newValue) {
            var isProp = isMemberInElement(elm, memberName),
              ln = memberName.toLowerCase();
            if ('class' === memberName) {
              var classList = elm.classList,
                oldClasses = parseClassList(oldValue),
                newClasses = parseClassList(newValue);
              classList.remove.apply(
                classList,
                _toConsumableArray(
                  oldClasses.filter(function (c) {
                    return c && !newClasses.includes(c);
                  }),
                ),
              ),
                classList.add.apply(
                  classList,
                  _toConsumableArray(
                    newClasses.filter(function (c) {
                      return c && !oldClasses.includes(c);
                    }),
                  ),
                );
            } else if ('ref' === memberName) newValue && newValue(elm);
            else if (isProp || 'o' !== memberName[0] || 'n' !== memberName[1]) {
              var isComplex = isComplexType(newValue);
              if ((isProp || (isComplex && null !== newValue)) && !isSvg)
                try {
                  if (elm.tagName.includes('-')) elm[memberName] = newValue;
                  else {
                    var n = null == newValue ? '' : newValue;
                    'list' === memberName ? (isProp = !1) : (null != oldValue && elm[memberName] == n) || (elm[memberName] = n);
                  }
                } catch (e) {}
              null == newValue || !1 === newValue
                ? (!1 === newValue && '' !== elm.getAttribute(memberName)) || elm.removeAttribute(memberName)
                : (!isProp || 4 & flags || isSvg) && !isComplex && ((newValue = !0 === newValue ? '' : newValue), elm.setAttribute(memberName, newValue));
            } else
              (memberName = '-' === memberName[2] ? memberName.slice(3) : isMemberInElement(win, ln) ? ln.slice(2) : ln[2] + memberName.slice(3)),
                oldValue && plt.rel(elm, memberName, oldValue, !1),
                newValue && plt.ael(elm, memberName, newValue, !1);
          }
        },
        parseClassListRegex = /\s/,
        parseClassList = function parseClassList(value) {
          return value ? value.split(parseClassListRegex) : [];
        },
        updateElement = function updateElement(oldVnode, newVnode, isSvgMode, memberName) {
          var elm = 11 === newVnode.$elm$.nodeType && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$,
            oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ,
            newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
          for (memberName in oldVnodeAttrs) memberName in newVnodeAttrs || setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode, newVnode.$flags$);
          for (memberName in newVnodeAttrs) setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
        },
        createElm = function createElm(oldParentVNode, newParentVNode, childIndex, parentElm) {
          var elm,
            childNode,
            newVNode = newParentVNode.$children$[childIndex],
            i = 0;
          if (null !== newVNode.$text$) elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
          else if (
            ((elm = newVNode.$elm$ = doc.createElement(newVNode.$tag$)),
            updateElement(null, newVNode, false),
            (function isDef(v) {
              return null != v;
            })(scopeId) &&
              elm['s-si'] !== scopeId &&
              elm.classList.add((elm['s-si'] = scopeId)),
            newVNode.$children$)
          )
            for (i = 0; i < newVNode.$children$.length; ++i) (childNode = createElm(oldParentVNode, newVNode, i)) && elm.appendChild(childNode);
          return elm;
        },
        addVnodes = function addVnodes(parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
          var childNode,
            containerElm = parentElm;
          for (containerElm.shadowRoot && containerElm.tagName === hostTagName && (containerElm = containerElm.shadowRoot); startIdx <= endIdx; ++startIdx)
            vnodes[startIdx] && (childNode = createElm(null, parentVNode, startIdx)) && ((vnodes[startIdx].$elm$ = childNode), containerElm.insertBefore(childNode, before));
        },
        removeVnodes = function removeVnodes(vnodes, startIdx, endIdx, vnode, elm) {
          for (; startIdx <= endIdx; ++startIdx) (vnode = vnodes[startIdx]) && ((elm = vnode.$elm$), callNodeRefs(vnode), elm.remove());
        },
        updateChildren = function updateChildren(parentElm, oldCh, newVNode, newCh) {
          for (
            var node,
              oldStartIdx = 0,
              newStartIdx = 0,
              oldEndIdx = oldCh.length - 1,
              oldStartVnode = oldCh[0],
              oldEndVnode = oldCh[oldEndIdx],
              newEndIdx = newCh.length - 1,
              newStartVnode = newCh[0],
              newEndVnode = newCh[newEndIdx];
            oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx;

          )
            null == oldStartVnode
              ? (oldStartVnode = oldCh[++oldStartIdx])
              : null == oldEndVnode
              ? (oldEndVnode = oldCh[--oldEndIdx])
              : null == newStartVnode
              ? (newStartVnode = newCh[++newStartIdx])
              : null == newEndVnode
              ? (newEndVnode = newCh[--newEndIdx])
              : isSameVnode(oldStartVnode, newStartVnode)
              ? (patch(oldStartVnode, newStartVnode), (oldStartVnode = oldCh[++oldStartIdx]), (newStartVnode = newCh[++newStartIdx]))
              : isSameVnode(oldEndVnode, newEndVnode)
              ? (patch(oldEndVnode, newEndVnode), (oldEndVnode = oldCh[--oldEndIdx]), (newEndVnode = newCh[--newEndIdx]))
              : isSameVnode(oldStartVnode, newEndVnode)
              ? (patch(oldStartVnode, newEndVnode),
                parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling),
                (oldStartVnode = oldCh[++oldStartIdx]),
                (newEndVnode = newCh[--newEndIdx]))
              : isSameVnode(oldEndVnode, newStartVnode)
              ? (patch(oldEndVnode, newStartVnode),
                parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$),
                (oldEndVnode = oldCh[--oldEndIdx]),
                (newStartVnode = newCh[++newStartIdx]))
              : ((node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx)),
                (newStartVnode = newCh[++newStartIdx]),
                node && oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$));
          oldStartIdx > oldEndIdx
            ? addVnodes(parentElm, null == newCh[newEndIdx + 1] ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx)
            : newStartIdx > newEndIdx && removeVnodes(oldCh, oldStartIdx, oldEndIdx);
        },
        isSameVnode = function isSameVnode(leftVNode, rightVNode) {
          return leftVNode.$tag$ === rightVNode.$tag$;
        },
        patch = function patch(oldVNode, newVNode) {
          var elm = (newVNode.$elm$ = oldVNode.$elm$),
            oldChildren = oldVNode.$children$,
            newChildren = newVNode.$children$,
            text = newVNode.$text$;
          null === text
            ? (updateElement(oldVNode, newVNode, false),
              null !== oldChildren && null !== newChildren
                ? updateChildren(elm, oldChildren, newVNode, newChildren)
                : null !== newChildren
                ? (null !== oldVNode.$text$ && (elm.textContent = ''), addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1))
                : null !== oldChildren && removeVnodes(oldChildren, 0, oldChildren.length - 1))
            : oldVNode.$text$ !== text && (elm.data = text);
        },
        callNodeRefs = function callNodeRefs(vNode) {
          vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null), vNode.$children$ && vNode.$children$.map(callNodeRefs);
        },
        renderVdom = function renderVdom(hostRef, renderFnResults) {
          var hostElm = hostRef.$hostElement$,
            oldVNode = hostRef.$vnode$ || newVNode(null, null),
            rootVnode = (function isHost(node) {
              return node && node.$tag$ === Host;
            })(renderFnResults)
              ? renderFnResults
              : h(null, null, renderFnResults);
          (hostTagName = hostElm.tagName),
            (rootVnode.$tag$ = null),
            (rootVnode.$flags$ |= 4),
            (hostRef.$vnode$ = rootVnode),
            (rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm),
            (scopeId = hostElm['s-sc']),
            patch(oldVNode, rootVnode);
        },
        attachToAncestor = function attachToAncestor(hostRef, ancestorComponent) {
          ancestorComponent &&
            !hostRef.$onRenderResolve$ &&
            ancestorComponent['s-p'] &&
            ancestorComponent['s-p'].push(
              new Promise(function (r) {
                return (hostRef.$onRenderResolve$ = r);
              }),
            );
        },
        scheduleUpdate = function scheduleUpdate(hostRef, isInitialLoad) {
          if (((hostRef.$flags$ |= 16), !(4 & hostRef.$flags$))) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$);
            return writeTask(function dispatch() {
              return dispatchHooks(hostRef, isInitialLoad);
            });
          }
          hostRef.$flags$ |= 512;
        },
        dispatchHooks = function dispatchHooks(hostRef, isInitialLoad) {
          var promise,
            endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$),
            instance = hostRef.$lazyInstance$;
          return (
            isInitialLoad && (promise = safeCall(instance, 'componentWillLoad')),
            endSchedule(),
            then(promise, function () {
              return updateComponent(hostRef, instance, isInitialLoad);
            })
          );
        },
        updateComponent = (function () {
          var _ref = _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee(hostRef, instance, isInitialLoad) {
              var elm, endUpdate, rc, endRender, childrenPromises, postUpdate;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                for (;;)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      (elm = hostRef.$hostElement$),
                        (endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$)),
                        (rc = elm['s-rc']),
                        isInitialLoad && attachStyles(hostRef),
                        (endRender = createTime('render', hostRef.$cmpMeta$.$tagName$)),
                        callRender(hostRef, instance),
                        rc &&
                          (rc.map(function (cb) {
                            return cb();
                          }),
                          (elm['s-rc'] = void 0)),
                        endRender(),
                        endUpdate(),
                        (childrenPromises = elm['s-p']),
                        (postUpdate = function postUpdate() {
                          return postUpdateComponent(hostRef);
                        }),
                        0 === childrenPromises.length ? postUpdate() : (Promise.all(childrenPromises).then(postUpdate), (hostRef.$flags$ |= 4), (childrenPromises.length = 0));
                    case 12:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            }),
          );
          return function updateComponent(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
          };
        })(),
        callRender = function callRender(hostRef, instance, elm) {
          try {
            (instance = instance.render()), (hostRef.$flags$ &= -17), (hostRef.$flags$ |= 2), renderVdom(hostRef, instance);
          } catch (e) {
            consoleError(e, hostRef.$hostElement$);
          }
          return null;
        },
        postUpdateComponent = function postUpdateComponent(hostRef) {
          var tagName = hostRef.$cmpMeta$.$tagName$,
            elm = hostRef.$hostElement$,
            endPostUpdate = createTime('postUpdate', tagName),
            instance = hostRef.$lazyInstance$,
            ancestorComponent = hostRef.$ancestorComponent$;
          safeCall(instance, 'componentDidRender'),
            64 & hostRef.$flags$
              ? endPostUpdate()
              : ((hostRef.$flags$ |= 64), addHydratedFlag(elm), endPostUpdate(), hostRef.$onReadyResolve$(elm), ancestorComponent || appDidLoad()),
            hostRef.$onRenderResolve$ && (hostRef.$onRenderResolve$(), (hostRef.$onRenderResolve$ = void 0)),
            512 & hostRef.$flags$ &&
              nextTick(function () {
                return scheduleUpdate(hostRef, !1);
              }),
            (hostRef.$flags$ &= -517);
        },
        appDidLoad = function appDidLoad(who) {
          addHydratedFlag(doc.documentElement),
            nextTick(function () {
              return (function emitEvent(elm, name, opts) {
                var ev = plt.ce(name, opts);
                return elm.dispatchEvent(ev), ev;
              })(win, 'appload', { detail: { namespace: 'observasjonskort' } });
            });
        },
        safeCall = function safeCall(instance, method, arg) {
          if (instance && instance[method])
            try {
              return instance[method](arg);
            } catch (e) {
              consoleError(e);
            }
        },
        then = function then(promise, thenFn) {
          return promise && promise.then ? promise.then(thenFn) : thenFn();
        },
        addHydratedFlag = function addHydratedFlag(elm) {
          return elm.classList.add('hydrated');
        },
        setValue = function setValue(ref, propName, newVal, cmpMeta) {
          var hostRef = getHostRef(ref),
            oldVal = hostRef.$instanceValues$.get(propName),
            flags = hostRef.$flags$,
            instance = hostRef.$lazyInstance$;
          newVal = (function parsePropertyValue(propValue, propType) {
            return null == propValue || isComplexType(propValue) ? propValue : 2 & propType ? parseFloat(propValue) : 1 & propType ? String(propValue) : propValue;
          })(newVal, cmpMeta.$members$[propName][0]);
          var areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
          (8 & flags && void 0 !== oldVal) ||
            !(newVal !== oldVal && !areBothNaN) ||
            (hostRef.$instanceValues$.set(propName, newVal), instance && 2 == (18 & flags) && scheduleUpdate(hostRef, !1));
        },
        proxyComponent = function proxyComponent(Cstr, cmpMeta, flags) {
          if (cmpMeta.$members$) {
            var members = Object.entries(cmpMeta.$members$),
              prototype = Cstr.prototype;
            if (
              (members.map(function (_ref2) {
                var _ref3 = _slicedToArray(_ref2, 2),
                  memberName = _ref3[0],
                  memberFlags = _slicedToArray(_ref3[1], 1)[0];
                (31 & memberFlags || (2 & flags && 32 & memberFlags)) &&
                  Object.defineProperty(prototype, memberName, {
                    get: function get() {
                      return (function getValue(ref, propName) {
                        return getHostRef(ref).$instanceValues$.get(propName);
                      })(this, memberName);
                    },
                    set: function set(newValue) {
                      setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: !0,
                    enumerable: !0,
                  });
              }),
              1 & flags)
            ) {
              var attrNameToPropName = new Map();
              (prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var _this = this;
                plt.jmp(function () {
                  var propName = attrNameToPropName.get(attrName);
                  if (_this.hasOwnProperty(propName)) (newValue = _this[propName]), delete _this[propName];
                  else if (prototype.hasOwnProperty(propName) && 'number' == typeof _this[propName] && _this[propName] == newValue) return;
                  _this[propName] = (null !== newValue || 'boolean' != typeof _this[propName]) && newValue;
                });
              }),
                (Cstr.observedAttributes = members
                  .filter(function (_ref4) {
                    var _ref5 = _slicedToArray(_ref4, 2);
                    _ref5[0];
                    return 15 & _ref5[1][0];
                  })
                  .map(function (_ref6) {
                    var _ref7 = _slicedToArray(_ref6, 2),
                      propName = _ref7[0],
                      attrName = _ref7[1][1] || propName;
                    return attrNameToPropName.set(attrName, propName), attrName;
                  }));
            }
          }
          return Cstr;
        },
        initializeComponent = (function () {
          var _ref8 = _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee2(elm, hostRef, cmpMeta, hmrVersionId, Cstr) {
              var endLoad, endNewInstance, style, _scopeId, endRegisterStyles, ancestorComponent, schedule;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                for (;;)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      if (0 != (32 & hostRef.$flags$)) {
                        _context2.next = 16;
                        break;
                      }
                      if (((hostRef.$flags$ |= 32), !(Cstr = loadModule(cmpMeta)).then)) {
                        _context2.next = 9;
                        break;
                      }
                      return (endLoad = function () {}), (_context2.next = 7), Cstr;
                    case 7:
                      (Cstr = _context2.sent), endLoad();
                    case 9:
                      Cstr.isProxied || (proxyComponent(Cstr, cmpMeta, 2), (Cstr.isProxied = !0)),
                        (endNewInstance = createTime('createInstance', cmpMeta.$tagName$)),
                        (hostRef.$flags$ |= 8);
                      try {
                        new Cstr(hostRef);
                      } catch (e) {
                        consoleError(e);
                      }
                      (hostRef.$flags$ &= -9),
                        endNewInstance(),
                        Cstr.style &&
                          ((style = Cstr.style),
                          (_scopeId = getScopeId(cmpMeta)),
                          styles.has(_scopeId) ||
                            ((endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$)), registerStyle(_scopeId, style, !!(1 & cmpMeta.$flags$)), endRegisterStyles()));
                    case 16:
                      (ancestorComponent = hostRef.$ancestorComponent$),
                        (schedule = function schedule() {
                          return scheduleUpdate(hostRef, !0);
                        }),
                        ancestorComponent && ancestorComponent['s-rc'] ? ancestorComponent['s-rc'].push(schedule) : schedule();
                    case 19:
                    case 'end':
                      return _context2.stop();
                  }
              }, _callee2);
            }),
          );
          return function initializeComponent(_x4, _x5, _x6, _x7, _x8) {
            return _ref8.apply(this, arguments);
          };
        })(),
        _connectedCallback = function connectedCallback(elm) {
          if (0 == (1 & plt.$flags$)) {
            var hostRef = getHostRef(elm),
              cmpMeta = hostRef.$cmpMeta$,
              endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
            if (!(1 & hostRef.$flags$)) {
              hostRef.$flags$ |= 1;
              for (var ancestorComponent = elm; (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host); )
                if (ancestorComponent['s-p']) {
                  attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                  break;
                }
              cmpMeta.$members$ &&
                Object.entries(cmpMeta.$members$).map(function (_ref9) {
                  var _ref10 = _slicedToArray(_ref9, 2),
                    memberName = _ref10[0];
                  if (31 & _slicedToArray(_ref10[1], 1)[0] && elm.hasOwnProperty(memberName)) {
                    var value = elm[memberName];
                    delete elm[memberName], (elm[memberName] = value);
                  }
                }),
                initializeComponent(elm, hostRef, cmpMeta);
            }
            endConnected();
          }
        },
        _disconnectedCallback = function disconnectedCallback(elm) {
          0 == (1 & plt.$flags$) && getHostRef(elm);
        },
        bootstrapLazy = function bootstrapLazy(lazyBundles) {
          var _a,
            appLoadFallback,
            options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            endBootstrap = createTime(),
            cmpTags = [],
            exclude = options.exclude || [],
            customElements = win.customElements,
            head = doc.head,
            metaCharset = head.querySelector('meta[charset]'),
            visibilityStyle = doc.createElement('style'),
            deferredConnectedCallbacks = [],
            isBootstrapping = !0;
          Object.assign(plt, options),
            (plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href),
            lazyBundles.map(function (lazyBundle) {
              lazyBundle[1].map(function (compactMeta) {
                var cmpMeta = { $flags$: compactMeta[0], $tagName$: compactMeta[1], $members$: compactMeta[2], $listeners$: compactMeta[3] };
                cmpMeta.$members$ = compactMeta[2];
                var tagName = cmpMeta.$tagName$,
                  HostElement = (function (_HTMLElement) {
                    !(function _inherits(subClass, superClass) {
                      if ('function' != typeof superClass && null !== superClass) throw new TypeError('Super expression must either be null or a function');
                      (subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } })),
                        Object.defineProperty(subClass, 'prototype', { writable: !1 }),
                        superClass && _setPrototypeOf(subClass, superClass);
                    })(HostElement, _HTMLElement);
                    var _super = _createSuper(HostElement);
                    function HostElement(self) {
                      var _this2;
                      return (
                        (function _classCallCheck(instance, Constructor) {
                          if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
                        })(this, HostElement),
                        (self = _assertThisInitialized((_this2 = _super.call(this, self)))),
                        registerHost(self, cmpMeta),
                        1 & cmpMeta.$flags$ && self.attachShadow({ mode: 'open' }),
                        _this2
                      );
                    }
                    return (
                      (function _createClass(Constructor, protoProps, staticProps) {
                        return (
                          protoProps && _defineProperties(Constructor.prototype, protoProps),
                          staticProps && _defineProperties(Constructor, staticProps),
                          Object.defineProperty(Constructor, 'prototype', { writable: !1 }),
                          Constructor
                        );
                      })(HostElement, [
                        {
                          key: 'connectedCallback',
                          value: function connectedCallback() {
                            var _this3 = this;
                            appLoadFallback && (clearTimeout(appLoadFallback), (appLoadFallback = null)),
                              isBootstrapping
                                ? deferredConnectedCallbacks.push(this)
                                : plt.jmp(function () {
                                    return _connectedCallback(_this3);
                                  });
                          },
                        },
                        {
                          key: 'disconnectedCallback',
                          value: function disconnectedCallback() {
                            var _this4 = this;
                            plt.jmp(function () {
                              return _disconnectedCallback(_this4);
                            });
                          },
                        },
                        {
                          key: 'componentOnReady',
                          value: function componentOnReady() {
                            return getHostRef(this).$onReadyPromise$;
                          },
                        },
                      ]),
                      HostElement
                    );
                  })(_wrapNativeSuper(HTMLElement));
                (cmpMeta.$lazyBundleId$ = lazyBundle[0]),
                  exclude.includes(tagName) || customElements.get(tagName) || (cmpTags.push(tagName), customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1)));
              });
            }),
            (visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS),
            visibilityStyle.setAttribute('data-styles', '');
          var nonce = null !== (_a = plt.$nonce$) && void 0 !== _a ? _a : queryNonceMetaTagContent(doc);
          null != nonce && visibilityStyle.setAttribute('nonce', nonce),
            head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild),
            (isBootstrapping = !1),
            deferredConnectedCallbacks.length
              ? deferredConnectedCallbacks.map(function (host) {
                  return host.connectedCallback();
                })
              : plt.jmp(function () {
                  return (appLoadFallback = setTimeout(appDidLoad, 30));
                }),
            endBootstrap();
        },
        hostRefs = new WeakMap(),
        getHostRef = function getHostRef(ref) {
          return hostRefs.get(ref);
        },
        registerInstance = function registerInstance(lazyInstance, hostRef) {
          return hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
        },
        registerHost = function registerHost(elm, cmpMeta) {
          var hostRef = { $flags$: 0, $hostElement$: elm, $cmpMeta$: cmpMeta, $instanceValues$: new Map() };
          return (
            (hostRef.$onReadyPromise$ = new Promise(function (r) {
              return (hostRef.$onReadyResolve$ = r);
            })),
            (elm['s-p'] = []),
            (elm['s-rc'] = []),
            hostRefs.set(elm, hostRef)
          );
        },
        isMemberInElement = function isMemberInElement(elm, memberName) {
          return memberName in elm;
        },
        consoleError = function consoleError(e, el) {
          return (0, console.error)(e, el);
        },
        cmpModules = new Map(),
        loadModule = function loadModule(cmpMeta, hostRef, hmrVersionId) {
          var exportName = cmpMeta.$tagName$.replace(/-/g, '_'),
            bundleId = cmpMeta.$lazyBundleId$,
            module = cmpModules.get(bundleId);
          return module
            ? module[exportName]
            : __webpack_require__('./dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$')('./' + bundleId + '.entry.js').then(
                function (importedModule) {
                  return cmpModules.set(bundleId, importedModule), importedModule[exportName];
                },
                consoleError,
              );
        },
        styles = new Map(),
        win = 'undefined' != typeof window ? window : {},
        doc = win.document || { head: {} },
        plt = {
          $flags$: 0,
          $resourcesUrl$: '',
          jmp: function jmp(h) {
            return h();
          },
          raf: function raf(h) {
            return requestAnimationFrame(h);
          },
          ael: function ael(el, eventName, listener, opts) {
            return el.addEventListener(eventName, listener, opts);
          },
          rel: function rel(el, eventName, listener, opts) {
            return el.removeEventListener(eventName, listener, opts);
          },
          ce: function ce(eventName, opts) {
            return new CustomEvent(eventName, opts);
          },
        },
        promiseResolve = function promiseResolve(v) {
          return Promise.resolve(v);
        },
        supportsConstructableStylesheets = (function () {
          try {
            return new CSSStyleSheet(), 'function' == typeof new CSSStyleSheet().replaceSync;
          } catch (e) {}
          return !1;
        })(),
        queueDomReads = [],
        queueDomWrites = [],
        queueTask = function queueTask(queue, write) {
          return function (cb) {
            queue.push(cb), queuePending || ((queuePending = !0), write && 4 & plt.$flags$ ? nextTick(flush) : plt.raf(flush));
          };
        },
        consume = function consume(queue) {
          for (var i = 0; i < queue.length; i++)
            try {
              queue[i](performance.now());
            } catch (e) {
              consoleError(e);
            }
          queue.length = 0;
        },
        flush = function flush() {
          consume(queueDomReads), consume(queueDomWrites), (queuePending = queueDomReads.length > 0) && plt.raf(flush);
        },
        nextTick = function nextTick(cb) {
          return promiseResolve().then(cb);
        },
        writeTask = queueTask(queueDomWrites, !0);
    },
    './generated-stories-entry.js': function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0, __webpack_require__('./node_modules/@storybook/html/dist/esm/client/index.js').configure)(
          [
            __webpack_require__('./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$'),
            __webpack_require__('./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$'),
          ],
          module,
          !1,
        );
      }).call(this, __webpack_require__('./node_modules/webpack/buildin/module.js')(module));
    },
    './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/stories/button.css': function (module, exports, __webpack_require__) {
      (exports = __webpack_require__('./node_modules/css-loader/dist/runtime/api.js')(!1)).push([
        module.i,
        ".storybook-button {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  border: 0;\r\n  border-radius: 3em;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n.storybook-button--primary {\r\n  color: white;\r\n  background-color: #1ea7fd;\r\n}\r\n.storybook-button--secondary {\r\n  color: #333;\r\n  background-color: transparent;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\r\n}\r\n.storybook-button--small {\r\n  font-size: 12px;\r\n  padding: 10px 16px;\r\n}\r\n.storybook-button--medium {\r\n  font-size: 14px;\r\n  padding: 11px 20px;\r\n}\r\n.storybook-button--large {\r\n  font-size: 16px;\r\n  padding: 12px 24px;\r\n}\r\n",
        '',
      ]),
        (module.exports = exports);
    },
    './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/stories/header.css': function (module, exports, __webpack_require__) {
      (exports = __webpack_require__('./node_modules/css-loader/dist/runtime/api.js')(!1)).push([
        module.i,
        ".wrapper {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  padding: 15px 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\nsvg {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\nh1 {\r\n  font-weight: 900;\r\n  font-size: 20px;\r\n  line-height: 1;\r\n  margin: 6px 0 6px 10px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\nbutton + button {\r\n  margin-left: 10px;\r\n}\r\n\r\n.welcome {\r\n  color: #333;\r\n  font-size: 14px;\r\n  margin-right: 10px;\r\n}\r\n",
        '',
      ]),
        (module.exports = exports);
    },
    './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/stories/page.css': function (module, exports, __webpack_require__) {
      (exports = __webpack_require__('./node_modules/css-loader/dist/runtime/api.js')(!1)).push([
        module.i,
        "section {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  line-height: 24px;\r\n  padding: 48px 20px;\r\n  margin: 0 auto;\r\n  max-width: 600px;\r\n  color: #333;\r\n}\r\n\r\nsection h2 {\r\n  font-weight: 900;\r\n  font-size: 32px;\r\n  line-height: 1;\r\n  margin: 0 0 4px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\nsection p {\r\n  margin: 1em 0;\r\n}\r\n\r\nsection a {\r\n  text-decoration: none;\r\n  color: #1ea7fd;\r\n}\r\n\r\nsection ul {\r\n  padding-left: 30px;\r\n  margin: 1em 0;\r\n}\r\n\r\nsection li {\r\n  margin-bottom: 8px;\r\n}\r\n\r\nsection .tip {\r\n  display: inline-block;\r\n  border-radius: 1em;\r\n  font-size: 11px;\r\n  line-height: 12px;\r\n  font-weight: 700;\r\n  background: #e7fdd8;\r\n  color: #66bf3c;\r\n  padding: 4px 12px;\r\n  margin-right: 10px;\r\n  vertical-align: top;\r\n}\r\n\r\nsection .tip-wrapper {\r\n  font-size: 13px;\r\n  line-height: 20px;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\nsection .tip-wrapper svg {\r\n  display: inline-block;\r\n  height: 12px;\r\n  width: 12px;\r\n  margin-right: 4px;\r\n  vertical-align: top;\r\n  margin-top: 3px;\r\n}\r\n\r\nsection .tip-wrapper svg path {\r\n  fill: #1ea7fd;\r\n}\r\n",
        '',
      ]),
        (module.exports = exports);
    },
    './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$': function (
      module,
      exports,
      __webpack_require__,
    ) {
      var map = {
        './components/varsom-observasjon/varsom-observation.stories.ts': './src/components/varsom-observasjon/varsom-observation.stories.ts',
        './stories/Button.stories.js': './src/stories/Button.stories.js',
        './stories/Header.stories.js': './src/stories/Header.stories.js',
        './stories/Page.stories.js': './src/stories/Page.stories.js',
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$');
    },
    './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$': function (module, exports, __webpack_require__) {
      var map = { './stories/Introduction.stories.mdx': './src/stories/Introduction.stories.mdx' };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = './src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$');
    },
    './src/components/varsom-observasjon/varsom-observation.stories.ts': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'VarsomObservation', function () {
          return VarsomObservation;
        });
      __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'), __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
      __webpack_exports__.default = {
        title: 'Components/VarsomObservation',
        argTypes: {
          language: { control: 'select', options: ['English', 'German', 'Italian', 'Slovenian', 'Nynorsk', 'Norwegian', 'Swedish'] },
          type: { control: 'select', options: ['Snow', 'Ice', 'Dirt', 'Water'] },
        },
      };
      var VarsomObservation = function Template(args) {
        return '<varsom-observation regId=' + args.regid + ' type="' + args.type + '" count=' + args.count + ' language="' + args.language + '"></varsom-observation> ';
      }.bind({});
      (VarsomObservation.args = { count: 1, regid: 0 }),
        (VarsomObservation.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => `<varsom-observation regId=${args.regid} type="${args.type}" count=${args.count} language="${args.language}"></varsom-observation> `',
            },
          },
          VarsomObservation.parameters,
        ));
    },
    './src/stories/Button.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return createButton;
      });
      __webpack_require__('./node_modules/core-js/modules/es.array.join.js'), __webpack_require__('./src/stories/button.css');
      var createButton = function createButton(_ref) {
        var _ref$primary = _ref.primary,
          primary = void 0 !== _ref$primary && _ref$primary,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 'medium' : _ref$size,
          backgroundColor = _ref.backgroundColor,
          label = _ref.label,
          onClick = _ref.onClick,
          btn = document.createElement('button');
        (btn.type = 'button'), (btn.innerText = label), btn.addEventListener('click', onClick);
        var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
        return (btn.className = ['storybook-button', 'storybook-button--' + size, mode].join(' ')), (btn.style.backgroundColor = backgroundColor), btn;
      };
    },
    './src/stories/Button.stories.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        }),
        __webpack_require__.d(__webpack_exports__, 'Secondary', function () {
          return Secondary;
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large;
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.bind.js');
      var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./src/stories/Button.js'),
        _excluded = ['label'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]), excluded.indexOf(key) >= 0 || (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      __webpack_exports__.default = {
        title: 'Example/Button',
        argTypes: {
          backgroundColor: { control: 'color' },
          label: { control: 'text' },
          onClick: { action: 'onClick' },
          primary: { control: 'boolean' },
          size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
        },
      };
      var Template = function Template(_ref) {
          var label = _ref.label,
            args = _objectWithoutProperties(_ref, _excluded);
          return Object(_Button__WEBPACK_IMPORTED_MODULE_5__.a)(Object.assign({ label: label }, args));
        },
        Primary = Template.bind({});
      Primary.args = { primary: !0, label: 'Button' };
      var Secondary = Template.bind({});
      Secondary.args = { label: 'Button' };
      var Large = Template.bind({});
      Large.args = { size: 'large', label: 'Button' };
      var Small = Template.bind({});
      (Small.args = { size: 'small', label: 'Button' }),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source:
                '({ label, ...args }) => {\r\n  // You can either use a function to create DOM elements or use a plain html string!\r\n  // return `<div>${label}</div>`;\r\n  return createButton({ label, ...args });\r\n}',
            },
          },
          Primary.parameters,
        )),
        (Secondary.parameters = Object.assign(
          {
            storySource: {
              source:
                '({ label, ...args }) => {\r\n  // You can either use a function to create DOM elements or use a plain html string!\r\n  // return `<div>${label}</div>`;\r\n  return createButton({ label, ...args });\r\n}',
            },
          },
          Secondary.parameters,
        )),
        (Large.parameters = Object.assign(
          {
            storySource: {
              source:
                '({ label, ...args }) => {\r\n  // You can either use a function to create DOM elements or use a plain html string!\r\n  // return `<div>${label}</div>`;\r\n  return createButton({ label, ...args });\r\n}',
            },
          },
          Large.parameters,
        )),
        (Small.parameters = Object.assign(
          {
            storySource: {
              source:
                '({ label, ...args }) => {\r\n  // You can either use a function to create DOM elements or use a plain html string!\r\n  // return `<div>${label}</div>`;\r\n  return createButton({ label, ...args });\r\n}',
            },
          },
          Small.parameters,
        ));
    },
    './src/stories/Header.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return createHeader;
      });
      __webpack_require__('./node_modules/core-js/modules/es.function.name.js'), __webpack_require__('./src/stories/header.css');
      var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/stories/Button.js'),
        createHeader = function createHeader(_ref) {
          var user = _ref.user,
            onLogout = _ref.onLogout,
            onLogin = _ref.onLogin,
            onCreateAccount = _ref.onCreateAccount,
            header = document.createElement('header'),
            wrapper = document.createElement('div');
          wrapper.className = 'wrapper';
          wrapper.insertAdjacentHTML(
            'afterbegin',
            '<div>\n    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n      <g fill="none" fillRule="evenodd">\n        <path\n          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"\n          fill="#FFF" />\n        <path\n          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"\n          fill="#555AB9" />\n        <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />\n      </g>\n    </svg>\n    <h1>Acme</h1>\n  </div>',
          );
          var account = document.createElement('div');
          if (user) {
            var welcomeMessage = '<span class="welcome">Welcome, <b>' + user.name + '</b>!</span>';
            (account.innerHTML = welcomeMessage), account.appendChild(Object(_Button__WEBPACK_IMPORTED_MODULE_2__.a)({ size: 'small', label: 'Log out', onClick: onLogout }));
          } else
            account.appendChild(Object(_Button__WEBPACK_IMPORTED_MODULE_2__.a)({ size: 'small', label: 'Log in', onClick: onLogin })),
              account.appendChild(Object(_Button__WEBPACK_IMPORTED_MODULE_2__.a)({ size: 'small', label: 'Sign up', onClick: onCreateAccount, primary: !0 }));
          return wrapper.appendChild(account), header.appendChild(wrapper), header;
        };
    },
    './src/stories/Header.stories.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'LoggedIn', function () {
          return LoggedIn;
        }),
        __webpack_require__.d(__webpack_exports__, 'LoggedOut', function () {
          return LoggedOut;
        });
      __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'), __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
      var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/stories/Header.js');
      __webpack_exports__.default = {
        title: 'Example/Header',
        parameters: { layout: 'fullscreen' },
        argTypes: { onLogin: { action: 'onLogin' }, onLogout: { action: 'onLogout' }, onCreateAccount: { action: 'onCreateAccount' } },
      };
      var Template = function Template(args) {
          return Object(_Header__WEBPACK_IMPORTED_MODULE_2__.a)(args);
        },
        LoggedIn = Template.bind({});
      LoggedIn.args = { user: { name: 'Jane Doe' } };
      var LoggedOut = Template.bind({});
      (LoggedOut.args = {}),
        (LoggedIn.parameters = Object.assign({ storySource: { source: '(args) => createHeader(args)' } }, LoggedIn.parameters)),
        (LoggedOut.parameters = Object.assign({ storySource: { source: '(args) => createHeader(args)' } }, LoggedOut.parameters));
    },
    './src/stories/Introduction.stories.mdx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./node_modules/@mdx-js/react/dist/esm.js'),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./node_modules/@storybook/addon-docs/dist/esm/index.js'),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./src/stories/assets/code-brackets.svg'),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8__),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('./src/stories/assets/colors.svg'),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(_assets_colors_svg__WEBPACK_IMPORTED_MODULE_9__),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('./src/stories/assets/comments.svg'),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(_assets_comments_svg__WEBPACK_IMPORTED_MODULE_10__),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('./src/stories/assets/direction.svg'),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(_assets_direction_svg__WEBPACK_IMPORTED_MODULE_11__),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./src/stories/assets/flow.svg'),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_12__),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./src/stories/assets/plugin.svg'),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13__),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./src/stories/assets/repo.svg'),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_14__),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./src/stories/assets/stackalt.svg'),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15__),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]), excluded.indexOf(key) >= 0 || (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {},
        MDXLayout = 'wrapper';
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
          MDXLayout,
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.b, { title: 'Example/Introduction', mdxType: 'Meta' }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
            'style',
            null,
            "\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  ",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('h1', { id: 'welcome-to-storybook' }, 'Welcome to Storybook'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
            'p',
            null,
            "Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('strong', { parentName: 'p' }, 'stories'),
            ' to revisit during development, testing, or QA.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
            'p',
            null,
            'Browse example stories now by navigating to them in the sidebar.\nView their code in the ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('inlineCode', { parentName: 'p' }, 'stories'),
            ' directory to learn how they work.\nWe recommend building UIs with a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
              'a',
              { parentName: 'p', href: 'https://componentdriven.org', target: '_blank', rel: 'nofollow noopener noreferrer' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('strong', { parentName: 'a' }, 'component-driven'),
            ),
            ' process starting with atomic components and ending with pages.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('div', { className: 'subheading' }, 'Configure'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
            'div',
            { className: 'link-list' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
              'a',
              { className: 'link-item', href: 'https://storybook.js.org/docs/react/addons/addon-types', target: '_blank' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('img', { src: _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13___default.a, alt: 'plugin' }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('strong', null, 'Presets for popular tools'),
                'Easy setup for TypeScript, SCSS and more.',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
              'a',
              { className: 'link-item', href: 'https://storybook.js.org/docs/react/configure/webpack', target: '_blank' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('img', { src: _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15___default.a, alt: 'Build' }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('strong', null, 'Build configuration'),
                'How to customize webpack and Babel',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
              'a',
              { className: 'link-item', href: 'https://storybook.js.org/docs/react/configure/styling-and-css', target: '_blank' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('img', { src: _assets_colors_svg__WEBPACK_IMPORTED_MODULE_9___default.a, alt: 'colors' }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('strong', null, 'Styling'),
                'How to load and configure CSS libraries',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
              'a',
              { className: 'link-item', href: 'https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack', target: '_blank' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('img', { src: _assets_flow_svg__WEBPACK_IMPORTED_MODULE_12___default.a, alt: 'flow' }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('strong', null, 'Data'),
                'Providers and mocking for data libraries',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('div', { className: 'subheading' }, 'Learn'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
            'div',
            { className: 'link-list' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
              'a',
              { className: 'link-item', href: 'https://storybook.js.org/docs', target: '_blank' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('img', { src: _assets_repo_svg__WEBPACK_IMPORTED_MODULE_14___default.a, alt: 'repo' }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('strong', null, 'Storybook documentation'),
                'Configure, customize, and extend',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
              'a',
              { className: 'link-item', href: 'https://storybook.js.org/tutorials/', target: '_blank' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('img', { src: _assets_direction_svg__WEBPACK_IMPORTED_MODULE_11___default.a, alt: 'direction' }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('strong', null, 'In-depth guides'),
                'Best practices from leading teams',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
              'a',
              { className: 'link-item', href: 'https://github.com/storybookjs/storybook', target: '_blank' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('img', { src: _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8___default.a, alt: 'code' }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('strong', null, 'GitHub project'),
                'View the source and add issues',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
              'a',
              { className: 'link-item', href: 'https://discord.gg/storybook', target: '_blank' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('img', { src: _assets_comments_svg__WEBPACK_IMPORTED_MODULE_10___default.a, alt: 'comments' }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('strong', null, 'Discord chat'),
                'Chat with maintainers and the community',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
            'div',
            { className: 'tip-wrapper' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('span', { className: 'tip' }, 'Tip'),
            'Edit the Markdown in',
            ' ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)('code', null, 'stories/Introduction.stories.mdx'),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = { title: 'Example/Introduction', includeStories: ['__page'] },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(
              _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.a,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(MDXContent, null),
            );
          },
        })),
        (__webpack_exports__.default = componentMeta);
    },
    './src/stories/Page.stories.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'LoggedOut', function () {
          return LoggedOut;
        }),
        __webpack_require__.d(__webpack_exports__, 'LoggedIn', function () {
          return LoggedIn;
        });
      __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('./node_modules/core-js/modules/es.promise.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.define-property.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.string.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.async-iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.to-string-tag.js'),
        __webpack_require__('./node_modules/core-js/modules/es.math.to-string-tag.js'),
        __webpack_require__('./node_modules/core-js/modules/es.json.to-string-tag.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.create.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.get-prototype-of.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.for-each.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.for-each.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.name.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.set-prototype-of.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.reverse.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js');
      var esm = __webpack_require__('./node_modules/@storybook/testing-library/dist/esm/index.js'),
        Header = (__webpack_require__('./src/stories/page.css'), __webpack_require__('./src/stories/Header.js'));
      function _regeneratorRuntime() {
        _regeneratorRuntime = function _regeneratorRuntime() {
          return exports;
        };
        var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value;
            },
          $Symbol = 'function' == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || '@@iterator',
          asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
          toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
        function define(obj, key, value) {
          return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];
        }
        try {
          define({}, '');
        } catch (err) {
          define = function define(obj, key, value) {
            return (obj[key] = value);
          };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || []);
          return defineProperty(generator, '_invoke', { value: makeInvokeMethod(innerFn, self, context) }), generator;
        }
        function tryCatch(fn, obj, arg) {
          try {
            return { type: 'normal', arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: 'throw', arg: err };
          }
        }
        exports.wrap = wrap;
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
        var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype));
        function defineIteratorMethods(prototype) {
          ['next', 'throw', 'return'].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ('throw' !== record.type) {
              var result = record.arg,
                value = result.value;
              return value && 'object' == typeof value && hasOwn.call(value, '__await')
                ? PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke('next', value, resolve, reject);
                    },
                    function (err) {
                      invoke('throw', err, resolve, reject);
                    },
                  )
                : PromiseImpl.resolve(value).then(
                    function (unwrapped) {
                      (result.value = unwrapped), resolve(result);
                    },
                    function (error) {
                      return invoke('throw', error, resolve, reject);
                    },
                  );
            }
            reject(record.arg);
          }
          var previousPromise;
          defineProperty(this, '_invoke', {
            value: function value(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return (previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg());
            },
          });
        }
        function makeInvokeMethod(innerFn, self, context) {
          var state = 'suspendedStart';
          return function (method, arg) {
            if ('executing' === state) throw new Error('Generator is already running');
            if ('completed' === state) {
              if ('throw' === method) throw arg;
              return doneResult();
            }
            for (context.method = method, context.arg = arg; ; ) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if ('next' === context.method) context.sent = context._sent = context.arg;
              else if ('throw' === context.method) {
                if ('suspendedStart' === state) throw ((state = 'completed'), context.arg);
                context.dispatchException(context.arg);
              } else 'return' === context.method && context.abrupt('return', context.arg);
              state = 'executing';
              var record = tryCatch(innerFn, self, context);
              if ('normal' === record.type) {
                if (((state = context.done ? 'completed' : 'suspendedYield'), record.arg === ContinueSentinel)) continue;
                return { value: record.arg, done: context.done };
              }
              'throw' === record.type && ((state = 'completed'), (context.method = 'throw'), (context.arg = record.arg));
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method,
            method = delegate.iterator[methodName];
          if (void 0 === method)
            return (
              (context.delegate = null),
              ('throw' === methodName &&
                delegate.iterator.return &&
                ((context.method = 'return'), (context.arg = void 0), maybeInvokeDelegate(delegate, context), 'throw' === context.method)) ||
                ('return' !== methodName && ((context.method = 'throw'), (context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")))),
              ContinueSentinel
            );
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ('throw' === record.type) return (context.method = 'throw'), (context.arg = record.arg), (context.delegate = null), ContinueSentinel;
          var info = record.arg;
          return info
            ? info.done
              ? ((context[delegate.resultName] = info.value),
                (context.next = delegate.nextLoc),
                'return' !== context.method && ((context.method = 'next'), (context.arg = void 0)),
                (context.delegate = null),
                ContinueSentinel)
              : info
            : ((context.method = 'throw'), (context.arg = new TypeError('iterator result is not an object')), (context.delegate = null), ContinueSentinel);
        }
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          1 in locs && (entry.catchLoc = locs[1]), 2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])), this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          (record.type = 'normal'), delete record.arg, (entry.completion = record);
        }
        function Context(tryLocsList) {
          (this.tryEntries = [{ tryLoc: 'root' }]), tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ('function' == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  for (; ++i < iterable.length; ) if (hasOwn.call(iterable, i)) return (next.value = iterable[i]), (next.done = !1), next;
                  return (next.value = void 0), (next.done = !0), next;
                };
              return (next.next = next);
            }
          }
          return { next: doneResult };
        }
        function doneResult() {
          return { value: void 0, done: !0 };
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          defineProperty(Gp, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
          defineProperty(GeneratorFunctionPrototype, 'constructor', { value: GeneratorFunction, configurable: !0 }),
          (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, 'GeneratorFunction')),
          (exports.isGeneratorFunction = function (genFun) {
            var ctor = 'function' == typeof genFun && genFun.constructor;
            return !!ctor && (ctor === GeneratorFunction || 'GeneratorFunction' === (ctor.displayName || ctor.name));
          }),
          (exports.mark = function (genFun) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                : ((genFun.__proto__ = GeneratorFunctionPrototype), define(genFun, toStringTagSymbol, 'GeneratorFunction')),
              (genFun.prototype = Object.create(Gp)),
              genFun
            );
          }),
          (exports.awrap = function (arg) {
            return { __await: arg };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          }),
          (exports.AsyncIterator = AsyncIterator),
          (exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn)
              ? iter
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          }),
          defineIteratorMethods(Gp),
          define(Gp, toStringTagSymbol, 'Generator'),
          define(Gp, iteratorSymbol, function () {
            return this;
          }),
          define(Gp, 'toString', function () {
            return '[object Generator]';
          }),
          (exports.keys = function (val) {
            var object = Object(val),
              keys = [];
            for (var key in object) keys.push(key);
            return (
              keys.reverse(),
              function next() {
                for (; keys.length; ) {
                  var key = keys.pop();
                  if (key in object) return (next.value = key), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (exports.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(resetTryEntry),
                !skipTempReset)
              )
                for (var name in this) 't' === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
            },
            stop: function stop() {
              this.done = !0;
              var rootRecord = this.tryEntries[0].completion;
              if ('throw' === rootRecord.type) throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                return (record.type = 'throw'), (record.arg = exception), (context.next = loc), caught && ((context.method = 'next'), (context.arg = void 0)), !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion;
                if ('root' === entry.tryLoc) return handle('end');
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, 'catchLoc'),
                    hasFinally = hasOwn.call(entry, 'finallyLoc');
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  } else {
                    if (!hasFinally) throw new Error('try statement without catch or finally');
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, 'finallyLoc') && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry && ('break' === type || 'continue' === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return (
                (record.type = type), (record.arg = arg), finallyEntry ? ((this.method = 'next'), (this.next = finallyEntry.finallyLoc), ContinueSentinel) : this.complete(record)
              );
            },
            complete: function complete(record, afterLoc) {
              if ('throw' === record.type) throw record.arg;
              return (
                'break' === record.type || 'continue' === record.type
                  ? (this.next = record.arg)
                  : 'return' === record.type
                  ? ((this.rval = this.arg = record.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === record.type && afterLoc && (this.next = afterLoc),
                ContinueSentinel
              );
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
              }
            },
            catch: function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ('throw' === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              return (this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }), 'next' === this.method && (this.arg = void 0), ContinueSentinel;
            },
          }),
          exports
        );
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg),
            value = info.value;
        } catch (error) {
          return void reject(error);
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
      }
      __webpack_exports__.default = { title: 'Example/Page', parameters: { layout: 'fullscreen' } };
      var Page_stories_Template = function Template() {
          return (function createPage() {
            var header,
              article = document.createElement('article'),
              user = null,
              rerenderHeader = function rerenderHeader() {
                var wrapper = document.getElementsByTagName('article')[0];
                wrapper.replaceChild(createHeaderElement(), wrapper.firstChild);
              },
              onLogin = function onLogin() {
                (user = { name: 'Jane Doe' }), rerenderHeader();
              },
              onLogout = function onLogout() {
                (user = null), rerenderHeader();
              },
              onCreateAccount = function onCreateAccount() {
                (user = { name: 'Jane Doe' }), rerenderHeader();
              },
              createHeaderElement = function createHeaderElement() {
                return Object(Header.a)({ onLogin: onLogin, onLogout: onLogout, onCreateAccount: onCreateAccount, user: user });
              };
            return (
              (header = createHeaderElement()),
              article.appendChild(header),
              article.insertAdjacentHTML(
                'beforeend',
                '\n  <section>\n    <h2>Pages in Storybook</h2>\n    <p>\n      We recommend building UIs with a\n      <a\n        href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e"\n        target="_blank"\n        rel="noopener noreferrer">\n        <strong>component-driven</strong>\n      </a>\n      process starting with atomic components and ending with pages.\n    </p>\n    <p>\n      Render pages with mock data. This makes it easy to build and review page states without\n      needing to navigate to them in your app. Here are some handy patterns for managing page data\n      in Storybook:\n    </p>\n    <ul>\n      <li>\n        Use a higher-level connected component. Storybook helps you compose such data from the\n        "args" of child component stories\n      </li>\n      <li>\n        Assemble data in the page component from your services. You can mock these services out\n        using Storybook.\n      </li>\n    </ul>\n    <p>\n      Get a guided tutorial on component-driven development at\n      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">\n        Storybook tutorials\n      </a>\n      . Read more in the\n      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>\n      .\n    </p>\n    <div class="tip-wrapper">\n      <span class="tip">Tip</span>\n      Adjust the width of the canvas with the\n      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">\n        <g fill="none" fillRule="evenodd">\n          <path\n            d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0\n            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0\n            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"\n            id="a"\n            fill="#999" />\n        </g>\n      </svg>\n      Viewports addon in the toolbar\n    </div>\n  </section>\n',
              ),
              article
            );
          })();
        },
        LoggedOut = Page_stories_Template.bind({}),
        LoggedIn = Page_stories_Template.bind({});
      (LoggedIn.play = (function () {
        var _ref2 = (function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
              }
              _next(void 0);
            });
          };
        })(
          _regeneratorRuntime().mark(function _callee(_ref) {
            var canvasElement, canvas, loginButton;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              for (;;)
                switch ((_context.prev = _context.next)) {
                  case 0:
                    return (canvasElement = _ref.canvasElement), (canvas = Object(esm.b)(canvasElement)), (_context.next = 4), canvas.getByRole('button', { name: /Log in/i });
                  case 4:
                    return (loginButton = _context.sent), (_context.next = 7), esm.a.click(loginButton);
                  case 7:
                  case 'end':
                    return _context.stop();
                }
            }, _callee);
          }),
        );
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      })()),
        (LoggedOut.parameters = Object.assign({ storySource: { source: '() => createPage()' } }, LoggedOut.parameters)),
        (LoggedIn.parameters = Object.assign({ storySource: { source: '() => createPage()' } }, LoggedIn.parameters));
    },
    './src/stories/assets/code-brackets.svg': function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/code-brackets.2e1112d7.svg';
    },
    './src/stories/assets/colors.svg': function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/colors.a4bd0486.svg';
    },
    './src/stories/assets/comments.svg': function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/comments.a3859089.svg';
    },
    './src/stories/assets/direction.svg': function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/direction.b770f9af.svg';
    },
    './src/stories/assets/flow.svg': function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/flow.edad2ac1.svg';
    },
    './src/stories/assets/plugin.svg': function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/plugin.d494b228.svg';
    },
    './src/stories/assets/repo.svg': function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/repo.6d496322.svg';
    },
    './src/stories/assets/stackalt.svg': function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/stackalt.dba9fbb3.svg';
    },
    './src/stories/button.css': function (module, exports, __webpack_require__) {
      var api = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
        content = __webpack_require__('./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/stories/button.css');
      'string' == typeof (content = content.__esModule ? content.default : content) && (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    './src/stories/header.css': function (module, exports, __webpack_require__) {
      var api = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
        content = __webpack_require__('./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/stories/header.css');
      'string' == typeof (content = content.__esModule ? content.default : content) && (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    './src/stories/page.css': function (module, exports, __webpack_require__) {
      var api = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
        content = __webpack_require__('./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/stories/page.css');
      'string' == typeof (content = content.__esModule ? content.default : content) && (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    './storybook-init-framework-entry.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__('./node_modules/@storybook/html/dist/esm/client/index.js');
    },
    '0': function (module, exports, __webpack_require__) {
      __webpack_require__('./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'),
        __webpack_require__('./node_modules/@storybook/core-client/dist/esm/globals/globals.js'),
        __webpack_require__('./storybook-init-framework-entry.js'),
        __webpack_require__('./node_modules/@storybook/html/dist/esm/client/preview/config-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/html/dist/esm/client/docs/config-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js'),
        __webpack_require__('./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js'),
        __webpack_require__('./.storybook/preview.js-generated-config-entry.js'),
        (module.exports = __webpack_require__('./generated-stories-entry.js'));
    },
    '1': function (module, exports) {},
  },
  [[0, 8, 9]],
]);
//# sourceMappingURL=main.58941db9.iframe.bundle.js.map
