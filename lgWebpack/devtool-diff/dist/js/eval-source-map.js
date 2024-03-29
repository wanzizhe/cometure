/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n\nvar heading = Object(_heading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ndocument.body.append(heading);\nconsole.log('main.js running'); // 运行时错误\n\nconsole.log111('main.js running');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz81NmQ3Il0sIm5hbWVzIjpbImhlYWRpbmciLCJjcmVhdGVIZWFkaW5nIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsImxvZzExMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHQywyREFBYSxFQUE3QjtBQUNBQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBZCxDQUFxQkosT0FBckI7QUFDQUssT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRSxDQUNBOztBQUNBRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxpQkFBZiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUhlYWRpbmcgZnJvbSAnLi9oZWFkaW5nLmpzJ1xuY29uc3QgaGVhZGluZyA9IGNyZWF0ZUhlYWRpbmcoKVxuZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGluZylcbmNvbnNvbGUubG9nKCdtYWluLmpzIHJ1bm5pbmcnKVxuLy8g6L+Q6KGM5pe26ZSZ6K+vXG5jb25zb2xlLmxvZzExMSgnbWFpbi5qcyBydW5uaW5nJykiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var element = document.createElement('h2');\n  element.textContent = 'Hello WebPack';\n  element.addEventListener('click', function () {\n    return alert('Hello WebPack');\n  });\n  return element;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGluZy5qcz9hZGMxIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGVydCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBYywyRUFBTTtBQUNoQixNQUFNQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFoQjtBQUNBRixTQUFPLENBQUNHLFdBQVIsR0FBc0IsZUFBdEI7QUFDQUgsU0FBTyxDQUFDSSxnQkFBUixDQUF5QixPQUF6QixFQUFpQztBQUFBLFdBQUtDLEtBQUssQ0FBQyxlQUFELENBQVY7QUFBQSxHQUFqQztBQUNBLFNBQU9MLE9BQVA7QUFDSCxDQUxEIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFdlYlBhY2snO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT4gYWxlcnQoJ0hlbGxvIFdlYlBhY2snKSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);