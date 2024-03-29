(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    './dist/esm/my-component.entry.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'my_component', function () {
          return MyComponent;
        });
      __webpack_require__('./node_modules/core-js/modules/es.symbol.to-primitive.js'),
        __webpack_require__('./node_modules/core-js/modules/es.date.to-primitive.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('./node_modules/core-js/modules/es.number.constructor.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.define-property.js');
      var _index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./dist/esm/index-c81fdd5d.js'),
        _utils_03f9b096_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./dist/esm/utils-03f9b096.js');
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
      var MyComponent = (function () {
        function MyComponent(hostRef) {
          !(function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
          })(this, MyComponent),
            Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_7__.e)(this, hostRef),
            (this.first = void 0),
            (this.middle = void 0),
            (this.last = void 0);
        }
        return (
          (function _createClass(Constructor, protoProps, staticProps) {
            return (
              protoProps && _defineProperties(Constructor.prototype, protoProps),
              staticProps && _defineProperties(Constructor, staticProps),
              Object.defineProperty(Constructor, 'prototype', { writable: !1 }),
              Constructor
            );
          })(MyComponent, [
            {
              key: 'getText',
              value: function getText() {
                return Object(_utils_03f9b096_js__WEBPACK_IMPORTED_MODULE_8__.b)(this.first, this.middle, this.last);
              },
            },
            {
              key: 'render',
              value: function render() {
                return Object(_index_c81fdd5d_js__WEBPACK_IMPORTED_MODULE_7__.c)('div', null, "Hello, World! I'm ", this.getText());
              },
            },
          ]),
          MyComponent
        );
      })();
      MyComponent.style = ':host{display:block}';
    },
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
  },
]);
