(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/kit/cssbundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/kit/cssbundle.js":
/*!***********************************!*\
  !*** ./packages/kit/cssbundle.js ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./packages/kit/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///./packages/kit/cssbundle.js?");

/***/ }),

/***/ "./packages/kit/styles.scss":
/*!**********************************!*\
  !*** ./packages/kit/styles.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"bg-blue\":\"bg-blue\",\"bg-indigo\":\"bg-indigo\",\"bg-red\":\"bg-red\",\"bg-orange\":\"bg-orange\",\"bg-yellow\":\"bg-yellow\",\"bg-green\":\"bg-green\",\"text-blue\":\"text-blue\",\"text-indigo\":\"text-indigo\",\"text-red\":\"text-red\",\"text-orange\":\"text-orange\",\"text-yellow\":\"text-yellow\",\"text-green\":\"text-green\",\"alert\":\"alert\",\"alert-left-el\":\"alert-left-el\",\"alert-right-el\":\"alert-right-el\",\"alert-primary\":\"alert-primary\",\"alert-success\":\"alert-success\",\"alert-danger\":\"alert-danger\",\"alert-warning\":\"alert-warning\",\"alert-blue\":\"alert-blue\",\"alert-indigo\":\"alert-indigo\",\"alert-red\":\"alert-red\",\"alert-orange\":\"alert-orange\",\"alert-yellow\":\"alert-yellow\",\"alert-green\":\"alert-green\",\"container\":\"container\",\"fluid\":\"fluid\",\"Grid__row\":\"Grid__row\",\"Grid__col\":\"Grid__col\",\"Grid__xs-1\":\"Grid__xs-1\",\"Grid__xs-2\":\"Grid__xs-2\",\"Grid__xs-3\":\"Grid__xs-3\",\"Grid__xs-4\":\"Grid__xs-4\",\"Grid__xs-5\":\"Grid__xs-5\",\"Grid__xs-6\":\"Grid__xs-6\",\"Grid__xs-7\":\"Grid__xs-7\",\"Grid__xs-8\":\"Grid__xs-8\",\"Grid__xs-9\":\"Grid__xs-9\",\"Grid__xs-10\":\"Grid__xs-10\",\"Grid__xs-11\":\"Grid__xs-11\",\"Grid__xs-12\":\"Grid__xs-12\",\"Grid__sm-1\":\"Grid__sm-1\",\"Grid__sm-2\":\"Grid__sm-2\",\"Grid__sm-3\":\"Grid__sm-3\",\"Grid__sm-4\":\"Grid__sm-4\",\"Grid__sm-5\":\"Grid__sm-5\",\"Grid__sm-6\":\"Grid__sm-6\",\"Grid__sm-7\":\"Grid__sm-7\",\"Grid__sm-8\":\"Grid__sm-8\",\"Grid__sm-9\":\"Grid__sm-9\",\"Grid__sm-10\":\"Grid__sm-10\",\"Grid__sm-11\":\"Grid__sm-11\",\"Grid__sm-12\":\"Grid__sm-12\",\"Grid__md-1\":\"Grid__md-1\",\"Grid__md-2\":\"Grid__md-2\",\"Grid__md-3\":\"Grid__md-3\",\"Grid__md-4\":\"Grid__md-4\",\"Grid__md-5\":\"Grid__md-5\",\"Grid__md-6\":\"Grid__md-6\",\"Grid__md-7\":\"Grid__md-7\",\"Grid__md-8\":\"Grid__md-8\",\"Grid__md-9\":\"Grid__md-9\",\"Grid__md-10\":\"Grid__md-10\",\"Grid__md-11\":\"Grid__md-11\",\"Grid__md-12\":\"Grid__md-12\",\"Grid__lg-1\":\"Grid__lg-1\",\"Grid__lg-2\":\"Grid__lg-2\",\"Grid__lg-3\":\"Grid__lg-3\",\"Grid__lg-4\":\"Grid__lg-4\",\"Grid__lg-5\":\"Grid__lg-5\",\"Grid__lg-6\":\"Grid__lg-6\",\"Grid__lg-7\":\"Grid__lg-7\",\"Grid__lg-8\":\"Grid__lg-8\",\"Grid__lg-9\":\"Grid__lg-9\",\"Grid__lg-10\":\"Grid__lg-10\",\"Grid__lg-11\":\"Grid__lg-11\",\"Grid__lg-12\":\"Grid__lg-12\",\"Grid__spacing-0\":\"Grid__spacing-0\",\"Grid__spacing-1\":\"Grid__spacing-1\",\"Grid__spacing-2\":\"Grid__spacing-2\",\"Grid__spacing-3\":\"Grid__spacing-3\",\"Grid__spacing-4\":\"Grid__spacing-4\",\"Grid__spacing-5\":\"Grid__spacing-5\",\"Grid__spacing-6\":\"Grid__spacing-6\",\"Grid__spacing-7\":\"Grid__spacing-7\",\"Grid__spacing-8\":\"Grid__spacing-8\",\"Grid__spacing-9\":\"Grid__spacing-9\",\"Grid__spacing-10\":\"Grid__spacing-10\",\"Grid__justifyContent-flex-start\":\"Grid__justifyContent-flex-start\",\"Grid__justifyContent-center\":\"Grid__justifyContent-center\",\"Grid__justifyContent-space-between\":\"Grid__justifyContent-space-between\",\"Grid__justifyContent-flex-end\":\"Grid__justifyContent-flex-end\",\"Grid__alignContent-stretch\":\"Grid__alignContent-stretch\",\"Grid__alignContent-flex-start\":\"Grid__alignContent-flex-start\",\"Grid__alignContent-center\":\"Grid__alignContent-center\",\"Grid__alignContent-flex-end\":\"Grid__alignContent-flex-end\",\"Grid__alignContent-space-between\":\"Grid__alignContent-space-between\",\"Grid__alignContent-space-around\":\"Grid__alignContent-space-around\",\"Grid__alignItems-stretch\":\"Grid__alignItems-stretch\",\"Grid__alignItems-flex-start\":\"Grid__alignItems-flex-start\",\"Grid__alignItems-center\":\"Grid__alignItems-center\",\"Grid__alignItems-flex-end\":\"Grid__alignItems-flex-end\",\"Grid__alignItems-baseline\":\"Grid__alignItems-baseline\",\"Grid__direction-row\":\"Grid__direction-row\",\"Grid__direction-row-reverse\":\"Grid__direction-row-reverse\",\"Grid__direction-column\":\"Grid__direction-column\",\"Grid__direction-column-reverse\":\"Grid__direction-column-reverse\",\"header\":\"header\",\"sidebar\":\"sidebar\",\"content\":\"content\",\"footer\":\"footer\",\"header__alignItems-stretch\":\"header__alignItems-stretch\",\"sidebar__alignItems-stretch\":\"sidebar__alignItems-stretch\",\"content__alignItems-stretch\":\"content__alignItems-stretch\",\"footer__alignItems-stretch\":\"footer__alignItems-stretch\",\"header__alignItems-flex-start\":\"header__alignItems-flex-start\",\"sidebar__alignItems-flex-start\":\"sidebar__alignItems-flex-start\",\"content__alignItems-flex-start\":\"content__alignItems-flex-start\",\"footer__alignItems-flex-start\":\"footer__alignItems-flex-start\",\"header__alignItems-center\":\"header__alignItems-center\",\"sidebar__alignItems-center\":\"sidebar__alignItems-center\",\"content__alignItems-center\":\"content__alignItems-center\",\"footer__alignItems-center\":\"footer__alignItems-center\",\"header__alignItems-flex-end\":\"header__alignItems-flex-end\",\"sidebar__alignItems-flex-end\":\"sidebar__alignItems-flex-end\",\"content__alignItems-flex-end\":\"content__alignItems-flex-end\",\"footer__alignItems-flex-end\":\"footer__alignItems-flex-end\",\"header__alignItems-baseline\":\"header__alignItems-baseline\",\"sidebar__alignItems-baseline\":\"sidebar__alignItems-baseline\",\"content__alignItems-baseline\":\"content__alignItems-baseline\",\"footer__alignItems-baseline\":\"footer__alignItems-baseline\",\"header__direction-row\":\"header__direction-row\",\"sidebar__direction-row\":\"sidebar__direction-row\",\"content__direction-row\":\"content__direction-row\",\"footer__direction-row\":\"footer__direction-row\",\"header__direction-row-reverse\":\"header__direction-row-reverse\",\"sidebar__direction-row-reverse\":\"sidebar__direction-row-reverse\",\"content__direction-row-reverse\":\"content__direction-row-reverse\",\"footer__direction-row-reverse\":\"footer__direction-row-reverse\",\"header__direction-column\":\"header__direction-column\",\"sidebar__direction-column\":\"sidebar__direction-column\",\"content__direction-column\":\"content__direction-column\",\"footer__direction-column\":\"footer__direction-column\",\"header__direction-column-reverse\":\"header__direction-column-reverse\",\"sidebar__direction-column-reverse\":\"sidebar__direction-column-reverse\",\"content__direction-column-reverse\":\"content__direction-column-reverse\",\"footer__direction-column-reverse\":\"footer__direction-column-reverse\",\"header__justifyContent-flex-start\":\"header__justifyContent-flex-start\",\"sidebar__justifyContent-flex-start\":\"sidebar__justifyContent-flex-start\",\"content__justifyContent-flex-start\":\"content__justifyContent-flex-start\",\"footer__justifyContent-flex-start\":\"footer__justifyContent-flex-start\",\"header__justifyContent-center\":\"header__justifyContent-center\",\"sidebar__justifyContent-center\":\"sidebar__justifyContent-center\",\"content__justifyContent-center\":\"content__justifyContent-center\",\"footer__justifyContent-center\":\"footer__justifyContent-center\",\"header__justifyContent-space-between\":\"header__justifyContent-space-between\",\"sidebar__justifyContent-space-between\":\"sidebar__justifyContent-space-between\",\"content__justifyContent-space-between\":\"content__justifyContent-space-between\",\"footer__justifyContent-space-between\":\"footer__justifyContent-space-between\",\"header__justifyContent-flex-end\":\"header__justifyContent-flex-end\",\"sidebar__justifyContent-flex-end\":\"sidebar__justifyContent-flex-end\",\"content__justifyContent-flex-end\":\"content__justifyContent-flex-end\",\"footer__justifyContent-flex-end\":\"footer__justifyContent-flex-end\",\"header__alignContent-stretch\":\"header__alignContent-stretch\",\"sidebar__alignContent-stretch\":\"sidebar__alignContent-stretch\",\"content__alignContent-stretch\":\"content__alignContent-stretch\",\"footer__alignContent-stretch\":\"footer__alignContent-stretch\",\"header__alignContent-flex-start\":\"header__alignContent-flex-start\",\"sidebar__alignContent-flex-start\":\"sidebar__alignContent-flex-start\",\"content__alignContent-flex-start\":\"content__alignContent-flex-start\",\"footer__alignContent-flex-start\":\"footer__alignContent-flex-start\",\"header__alignContent-center\":\"header__alignContent-center\",\"sidebar__alignContent-center\":\"sidebar__alignContent-center\",\"content__alignContent-center\":\"content__alignContent-center\",\"footer__alignContent-center\":\"footer__alignContent-center\",\"header__alignContent-flex-end\":\"header__alignContent-flex-end\",\"sidebar__alignContent-flex-end\":\"sidebar__alignContent-flex-end\",\"content__alignContent-flex-end\":\"content__alignContent-flex-end\",\"footer__alignContent-flex-end\":\"footer__alignContent-flex-end\",\"header__alignContent-space-between\":\"header__alignContent-space-between\",\"sidebar__alignContent-space-between\":\"sidebar__alignContent-space-between\",\"content__alignContent-space-between\":\"content__alignContent-space-between\",\"footer__alignContent-space-between\":\"footer__alignContent-space-between\",\"header__alignContent-space-around\":\"header__alignContent-space-around\",\"sidebar__alignContent-space-around\":\"sidebar__alignContent-space-around\",\"content__alignContent-space-around\":\"content__alignContent-space-around\",\"footer__alignContent-space-around\":\"footer__alignContent-space-around\",\"layout\":\"layout\",\"layout__header\":\"layout__header\",\"layout__sidebar\":\"layout__sidebar\",\"layout__content\":\"layout__content\",\"layout__footer\":\"layout__footer\"};\n\n//# sourceURL=webpack:///./packages/kit/styles.scss?");

/***/ })

/******/ });
});