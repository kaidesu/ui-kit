/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_UiAlert_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_UiAlert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_UiAlert_vue__);


var UIKit = {
    UiAlert: __WEBPACK_IMPORTED_MODULE_0__components_UiAlert_vue___default.a,

    install: function install(Vue) {
        Vue.component('ui-alert', __WEBPACK_IMPORTED_MODULE_0__components_UiAlert_vue___default.a);
    }
};

window.UIKit = UIKit;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
    props: {
        type: {
            type: String,
            default: "info"
        },
        dismissable: {
            type: Boolean,
            default: false
        },
        show: {
            type: Boolean,
            default: true
        },
        timeout: {
            type: Number,
            default: 5
        }
    },

    ready: function ready() {
        var _this = this;

        if (!this.dismissable) {
            setTimeout(function () {
                return _this.show = false;
            }, this.timeout * 1000);
        }
    }
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(1)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Kai/Code/ui-kit/src/components/UiAlert.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b6c71be", __vue_options__)
  } else {
    hotAPI.reload("data-v-7b6c71be", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] UiAlert.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    class: {
      'alert': true,
      'alert-success': (_vm.type == 'success'),
      'alert-warning': (_vm.type == 'warning'),
      'alert-info': (_vm.type == 'info'),
      'alert-danger': (_vm.type == 'danger')
    },
    attrs: {
      "transition": "fade",
      "role": "alert"
    }
  }, [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dismissable),
      expression: "dismissable"
    }],
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.show = false
      }
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7b6c71be", module.exports)
  }
}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }
/******/ ]);