/*! For license information please see 12.d9c0e08b.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    './dist/esm/utils-03f9b096.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      function format(first, middle, last) {
        return (first || '') + (middle ? ' ' + middle : '') + (last ? ' ' + last : '');
      }
      function getGeoHazardIdFromName(hazardName) {
        switch (hazardName) {
          case 'Snow':
            return 10;
          case 'Dirt':
            return 20;
          case 'Water':
            return 60;
          case 'Ice':
            return 70;
        }
      }
      function getLangKeyFromName(language) {
        switch (language) {
          case 'English':
            return 2;
          case 'Norwegian':
            return 1;
          case 'German':
            return 3;
          case 'Slovenian':
            return 4;
          case 'Italian':
            return 6;
          case 'Swedish':
            return 5;
          case 'Nynorsk':
            return 7;
        }
      }
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return getLangKeyFromName;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return format;
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return getGeoHazardIdFromName;
        });
    },
    './dist/esm/varsom-observation.entry.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'varsom_observation', function () {
          return VarsomObservation;
        });
      __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('./node_modules/core-js/modules/es.promise.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.to-primitive.js'),
        __webpack_require__('./node_modules/core-js/modules/es.date.to-primitive.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
        __webpack_require__('./node_modules/core-js/modules/es.number.constructor.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.define-property.js'),
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
      var _index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__('./dist/esm/index-c81fdd5d.js'),
        _utils_03f9b096_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__('./dist/esm/utils-03f9b096.js');
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
      var VarsomObservation = (function () {
        function VarsomObservation(hostRef) {
          !(function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
          })(this, VarsomObservation),
            Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.e)(this, hostRef),
            (this.observations = []),
            (this.observationImages = []),
            (this._regId = void 0),
            (this.moh = void 0),
            (this.numberOfObservations = void 0),
            (this.region = void 0),
            (this.municipality = void 0),
            (this.source = void 0),
            (this.sourceOfPositioning = void 0),
            (this.precision = void 0),
            (this.dateOfObservation = void 0),
            (this.dateOfRegistration = void 0),
            (this.dateOfLastUpdate = void 0),
            (this.observer = void 0),
            (this.typeOfWeather = void 0),
            (this.slideIndex = 1),
            (this.regid = '0'),
            (this.language = 'Norwegian'),
            (this.type = void 0),
            (this.number = 1),
            (this.count = 1);
        }
        var _componentWillLoad, _componentDidRender;
        return (
          (function _createClass(Constructor, protoProps, staticProps) {
            return (
              protoProps && _defineProperties(Constructor.prototype, protoProps),
              staticProps && _defineProperties(Constructor, staticProps),
              Object.defineProperty(Constructor, 'prototype', { writable: !1 }),
              Constructor
            );
          })(
            VarsomObservation,
            [
              {
                key: 'plusSlides',
                value: function plusSlides(n) {
                  this.showSlides.bind(this, (this.slideIndex += n));
                },
              },
              {
                key: 'currentSlide',
                value: function currentSlide(n) {
                  this.showSlides.bind(this, (this.slideIndex = n));
                },
              },
              {
                key: 'showSlides',
                value: function showSlides(n, observation) {
                  var i,
                    slides = observation._observationImages,
                    dots = document.getElementsByClassName('dot');
                  for (n > slides.length && (this.slideIndex = 1), n < 1 && (this.slideIndex = slides.length), i = 0; i < slides.length; i++) slides[i].style.display = 'none';
                  for (i = 0; i < dots.length; i++);
                  slides[this.slideIndex - 1].style.display = 'block';
                },
              },
              {
                key: 'componentDidRender',
                value:
                  ((_componentDidRender = _asyncToGenerator(
                    _regeneratorRuntime().mark(function _callee() {
                      var i, obs, j, k;
                      return _regeneratorRuntime().wrap(
                        function _callee$(_context) {
                          for (;;)
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                for (i = 0; i < this.observations.length; i++) for (obs = this.observations[i], j = 0; j < 3; j++) obs._observationImages[j].style.display = 'none';
                                for (k = 0; k < this.observations.length; k++) this.showSlides(this.slideIndex, this.observations[k]);
                              case 2:
                              case 'end':
                                return _context.stop();
                            }
                        },
                        _callee,
                        this,
                      );
                    }),
                  )),
                  function componentDidRender() {
                    return _componentDidRender.apply(this, arguments);
                  }),
              },
              {
                key: 'componentWillLoad',
                value:
                  ((_componentWillLoad = _asyncToGenerator(
                    _regeneratorRuntime().mark(function _callee2() {
                      var geoHazardId, langKey, _data, response, data, i, j, _j2, _j4, _j6;
                      return _regeneratorRuntime().wrap(
                        function _callee2$(_context2) {
                          for (;;)
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                return (
                                  console.log(this.regid),
                                  (geoHazardId = Object(_utils_03f9b096_js__WEBPACK_IMPORTED_MODULE_27__.c)(this.type)),
                                  (langKey = Object(_utils_03f9b096_js__WEBPACK_IMPORTED_MODULE_27__.a)(this.language)),
                                  (_data =
                                    '0' !== this.regid
                                      ? '{"LangKey": ' + langKey + ', "RegId": ' + this.regid + '}'
                                      : '{"NumberOfRecords": ' + this.count + ', "SelectedGeoHazards": [' + geoHazardId + '], "LangKey": ' + langKey + '}'),
                                  (_context2.next = 6),
                                  fetch('https://api.regobs.no/v5/Search', { method: 'POST', body: _data, headers: { 'Content-Type': 'application/json' } })
                                );
                              case 6:
                                return (response = _context2.sent), (_context2.next = 9), response.json();
                              case 9:
                                for (data = _context2.sent, console.log(_data), i = 0; i < this.count; i++) {
                                  for (
                                    this.observations.push({
                                      _moh: data[i].ObsLocation.Height,
                                      _region: data[i].ObsLocation.MunicipalName,
                                      _regId: data[i].RegId,
                                      _municipality: data[i].ObsLocation.LocationName,
                                      _source: data[i].SourceName,
                                      _sourceOfPositioning: data[i].ObsLocation.UTMSourceName,
                                      _precision: data[i].ObsLocation.Uncertainty,
                                      _dateOfRegistration: data[i].DtRegTime,
                                      _dateOfLastUpdate: data[i].DtChangeTime,
                                      _observer: data[i].Observer,
                                      _typeOfWeather: data[i].ObsLocation.ForecastRegionName,
                                      _latitude: data[i].ObsLocation.Latitude,
                                      _longitude: data[i].ObsLocation.Longitude,
                                      _dangerObs: [],
                                      _landslideObs: data[i].LandslideObs,
                                      _avalancheObs: data[i].AvalancheObs,
                                      _avalancheActivityObs2: [],
                                      _snowSurface: data[i].SnowSurface,
                                      _images: [],
                                      _className: data[i].RegId + ' fade',
                                      _observationImages: [],
                                      _geoHazardName: data[i].GeoHazardName,
                                      _attachments: [],
                                      _weather: data[i].WeatherObservation,
                                      _observerGroupName: data[i].ObserverGroupName,
                                      _iceCoverObs: data[i].IceCoverObs,
                                      _iceThickness: data[i].IceThickness,
                                      _waterLevel: data[i].WaterLevel2,
                                      _damageObs: [],
                                    }),
                                      j = 0;
                                    j < 30;
                                    j++
                                  )
                                    data[i].Attachments[j] &&
                                      0 !== data[i].Attachments[j] &&
                                      this.observations[i]._attachments.push({
                                        Url: data[i].Attachments[j].Url,
                                        Comment: data[i].Attachments[j].Comment,
                                        Photographer: data[i].Attachments[j].Photographer,
                                        GeoHazardName: data[i].Attachments[j].GeoHazardName,
                                        RegistrationName: data[i].Attachments[j].RegistrationName,
                                        Copyright: data[i].Attachments[j].Copyright,
                                      });
                                  if (data[i].AvalancheActivityObs2.length > 0)
                                    for (_j2 = 0; _j2 < data[i].AvalancheActivityObs2.length; _j2++)
                                      this.observations[i]._avalancheActivityObs2.push({
                                        EstimatedNumName: data[i].AvalancheActivityObs2[_j2].EstimatedNumName,
                                        ExposedHeightComboName: data[i].AvalancheActivityObs2[_j2].ExposedHeightComboName,
                                        AvalancheExtName: data[i].AvalancheActivityObs2[_j2].AvalancheExtName,
                                        AvalCauseName: data[i].AvalancheActivityObs2[_j2].AvalCauseName,
                                        AvalTriggerSimpleName: data[i].AvalancheActivityObs2[_j2].AvalTriggerSimpleName,
                                        DestructiveSizeName: data[i].AvalancheActivityObs2[_j2].DestructiveSizeName,
                                        AvalPropagationName: data[i].AvalancheActivityObs2[_j2].AvalPropagationName,
                                        EstimatedNumTID: data[i].AvalancheActivityObs2[_j2].EstimatedNumTID,
                                        DtStart: data[i].AvalancheActivityObs2[_j2].DtStart,
                                        DtEnd: data[i].AvalancheActivityObs2[_j2].DtEnd,
                                        ValidExposition: data[i].AvalancheActivityObs2[_j2].ValidExposition,
                                        ExposedHeight1: data[i].AvalancheActivityObs2[_j2].ExposedHeight1,
                                        ExposedHeight2: data[i].AvalancheActivityObs2[_j2].ExposedHeight2,
                                        ExposedHeightComboTID: data[i].AvalancheActivityObs2[_j2].ExposedHeightComboTID,
                                        AvalancheExtTID: data[i].AvalancheActivityObs2[_j2].AvalancheExtTID,
                                        AvalCauseTID: data[i].AvalancheActivityObs2[_j2].AvalancheCauseTID,
                                        AvalTriggerSimpleTID: data[i].AvalancheActivityObs2[_j2].AvalancheTriggerSimpleTID,
                                        DestructiveSizeTID: data[i].AvalancheActivityObs2[_j2].DestructiveSizeTID,
                                        AvalPropagationTID: data[i].AvalancheActivityObs2[_j2].AvalPropagationTID,
                                        Comment: data[i].AvalancheActivityObs2[_j2].Comment,
                                      });
                                  if (data[i].DangerObs.length > 0)
                                    for (_j4 = 0; _j4 < data[i].DangerObs.length; _j4++) this.observations[i]._dangerObs.push({ Comment: data[i].DangerObs[_j4].Comment });
                                  if (data[i].DamageObs.length > 0)
                                    for (_j6 = 0; _j6 < data[i].DamageObs.length; _j6++)
                                      this.observations[i]._damageObs.push({
                                        GeoHazardName: data[i].DamageObs[_j6].GeoHazardName,
                                        DamageTypeName: data[i].DamageObs[_j6].DamageTypeName,
                                        GeoHazardTID: data[i].DamageObs[_j6].GeoHazardTID,
                                        DamageTypeTID: data[i].DamageObs[_j6].DamageTypeTID,
                                        DamagePosition: data[i].DamageObs[_j6].DamagePosition,
                                        Comment: data[i].DamageObs[_j6].Comment,
                                      });
                                  this.observations[i]._images.push(
                                    {
                                      _imageData: data[i].Attachments[0] && 0 !== data[i].Attachments[0] ? data[i].Attachments[0].Url : '',
                                      _copyright: data[i].Attachments[0] && 0 !== data[i].Attachments[0] ? data[i].Attachments[0].Copyright : '',
                                      _photographer: data[i].Attachments[0] && 0 !== data[i].Attachments[0] ? data[i].Attachments[0].Photographer : '',
                                      _comment: data[i].Attachments[0] && 0 !== data[i].Attachments[0] ? data[i].Attachments[0].Comment : '',
                                    },
                                    {
                                      _imageData: data[i].Attachments[1] && 0 !== data[i].Attachments[1] ? data[i].Attachments[1].Url : '',
                                      _copyright: data[i].Attachments[1] && 0 !== data[i].Attachments[1] ? data[i].Attachments[1].Copyright : '',
                                      _comment: data[i].Attachments[1] && 0 !== data[i].Attachments[1] ? data[i].Attachments[1].Comment : '',
                                    },
                                    {
                                      _imageData: data[i].Attachments[2] && 0 !== data[i].Attachments[2] ? data[i].Attachments[2].Url : '',
                                      _copyright: data[i].Attachments[2] && 0 !== data[i].Attachments[2] ? data[i].Attachments[2].Copyright : '',
                                      _comment: data[i].Attachments[2] && 0 !== data[i].Attachments[2] ? data[i].Attachments[2].Comment : '',
                                    },
                                  );
                                }
                              case 12:
                              case 'end':
                                return _context2.stop();
                            }
                        },
                        _callee2,
                        this,
                      );
                    }),
                  )),
                  function componentWillLoad() {
                    return _componentWillLoad.apply(this, arguments);
                  }),
              },
              {
                key: 'render',
                value: function render() {
                  var _this = this;
                  return Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                    'div',
                    null,
                    this.observations.map(function () {
                      var obs = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                      return Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                        'div',
                        { class: 'observation-container' },
                        Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                          'div',
                          { class: 'observation-header' },
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('p', null, obs._region),
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('p', null, 'ID: ', obs._regId),
                        ),
                        Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                          'div',
                          { class: 'observation-metadata' },
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('span', null, 'Registrert ', obs._dateOfRegistration),
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('span', null, ' Oppdatert ', obs._dateOfLastUpdate),
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('br', null),
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('span', null, 'Ikon faretype: ', obs._geoHazardName, ' ikon moh: ', obs._moh, ' '),
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                            'span',
                            null,
                            'bruker: ',
                            obs._observer.NickName,
                            ' brukerRating ',
                            obs._observer.CompetenceLevelName,
                            ' ',
                            obs._observerGroupName,
                            ' ',
                          ),
                        ),
                        Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                          'div',
                          null,
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('img', {
                            class: 'map',
                            src: Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.b)('./images/mapRegobs.png'),
                          }),
                        ),
                        Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                          'div',
                          { class: 'slideshow-container' },
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                            'div',
                            {
                              ref: function ref(el) {
                                return (obs._observationImages[0] = el);
                              },
                              class: 'mySlides fade',
                            },
                            Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', { class: 'numbertext' }, '1 / 3'),
                            Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                              'div',
                              null,
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('img', { class: 'observation-images', src: obs._images[0]._imageData }),
                            ),
                            Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                              'div',
                              { class: 'imageInfo' },
                              ' ',
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('b', null, 'Opphavsrett: '),
                              ' ',
                              obs._images[0]._copyright,
                              ' ',
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('br', null),
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                                'p',
                                null,
                                Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('b', null, 'Fotograf: '),
                                ' ',
                                obs._images[0]._photographer,
                                ' ',
                              ),
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                                'p',
                                null,
                                Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('b', null, 'Kommentar: '),
                                ' ',
                                obs._images[0]._comment,
                                ' ',
                              ),
                            ),
                          ),
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                            'div',
                            {
                              ref: function ref(el) {
                                return (obs._observationImages[1] = el);
                              },
                              class: 'mySlides fade',
                            },
                            Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', { class: 'numbertext' }, '2 / 3'),
                            Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('img', { class: 'observation-images', src: obs._images[1]._imageData }),
                            Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', { class: 'text' }, 'Caption Text'),
                          ),
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                            'div',
                            {
                              ref: function ref(el) {
                                return (obs._observationImages[2] = el);
                              },
                              class: 'mySlides fade',
                            },
                            Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', { class: 'numbertext' }, '3 / 3'),
                            Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('img', { class: 'observation-images', src: obs._images[2]._imageData }),
                            Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', { class: 'text' }, 'Caption Text'),
                          ),
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('a', { class: 'prev', onClick: _this.plusSlides.bind(_this, -1) }, '❮'),
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('a', { class: 'next', onClick: _this.plusSlides.bind(_this, 1) }, '❯'),
                        ),
                        Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('br', null),
                        Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                          'div',
                          null,
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('span', { class: 'dot 1', onClick: _this.currentSlide.bind(_this, 1) }),
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('span', { class: 'dot 2', onClick: _this.currentSlide.bind(_this, 2) }),
                          Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('span', { class: 'dot 3', onClick: _this.currentSlide.bind(_this, 3) }),
                        ),
                        Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                          'div',
                          { class: 'observation-content' },
                          obs._attachments.length > 0 ? Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('h2', null, 'Faretegn') : '',
                          obs._attachments.map(function () {
                            var att = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                              'div',
                              null,
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', null, ' Type: ', att.RegistrationName, ' '),
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', null, ' Kommentar: ', att.Comment, ' '),
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('img', { class: 'observation-images', src: att.Url }),
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', null, ' Fotograf: ', att.Photographer, ' '),
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', null, ' Copyright: ', att.Copyright, ' '),
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('br', null),
                            );
                          }),
                          obs._avalancheActivityObs2.length > 0 ? Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('h2', null, 'Skredaktivitet') : '',
                          obs._avalancheActivityObs2.map(function () {
                            var el = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                              'div',
                              null,
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', null, ' Tid: ', el.DtStart, ' '),
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', null, ' Antall, størrelse og skredutløser: ', el.AvalCauseName, ' '),
                              Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', null, ' Kommentar: ', el.Comment, ' '),
                            );
                          }),
                          obs._avalancheObs
                            ? Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                                'div',
                                null,
                                Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('h2', null, 'Skredobservasjon'),
                                Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', null, 'Tid: ', obs._avalancheObs.DtAvalancheTime),
                                Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', null, 'Kommentar: ', obs._avalancheObs.Comment),
                              )
                            : '',
                          obs._weather
                            ? Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                                'div',
                                null,
                                Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('h2', null, 'Vær:'),
                                Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', null, 'Nedbørstype: ', obs._weather.PrecipitationName),
                                Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('div', null, 'Temperatur: ', obs._weather.AirTemperature),
                              )
                            : '',
                          obs._snowSurface
                            ? Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)(
                                'div',
                                null,
                                ' ',
                                Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_26__.c)('h2', null, 'Snødekke:'),
                                ' Kommentar: ',
                                obs._snowSurface.Comment,
                                ' ',
                              )
                            : '',
                        ),
                      );
                    }),
                  );
                },
              },
            ],
            [
              {
                key: 'assetsDirs',
                get: function get() {
                  return ['images'];
                },
              },
            ],
          ),
          VarsomObservation
        );
      })();
      VarsomObservation.style =
        ':host{display:block}.observation-images{max-width:200px}.map{max-width:835px}.slideshow-container{max-width:1000px;position:relative;margin:auto}.mySlides{display:none}.prev,.next{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-22px;padding:16px;color:white;font-weight:bold;font-size:18px;transition:0.6s ease;border-radius:0 3px 3px 0;user-select:none}.next{right:0;border-radius:3px 0 0 3px}.prev:hover,.next:hover{background-color:rgba(0,0,0,0.8)}.imageInfo{background-color:rgb(178, 203, 211)}.text{color:rgb(52, 59, 59);font-size:15px;padding:8px 12px;position:absolute;bottom:8px;width:100%;text-align:center}.numbertext{color:#f2f2f2;font-size:12px;padding:8px 12px;position:absolute;top:0}.dot{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:#bbb;border-radius:50%;display:inline-block;transition:background-color 0.6s ease}.active,.dot:hover{background-color:#717171}.fade{animation-name:fade;animation-duration:1.5s}@keyframes fade{from{opacity:.4}to{opacity:1}}.observation-container{border:3px solid black;border-radius:2%;padding:10px;margin:30px;width:70%}.observation-header{display:flex;justify-content:space-between;font-weight:bolder;font-size:larger}';
    },
  },
]);
//# sourceMappingURL=12.d9c0e08b.iframe.bundle.js.map
