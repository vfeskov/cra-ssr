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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serve_static__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serve_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serve_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handlers__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(7);





const envSpecificHandlers = process.env.NODE_ENV !== 'production' ? [] : [
  __WEBPACK_IMPORTED_MODULE_1_serve_static___default()('public'),
  index()
]

const handlers = [
  __WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* api */],
  ...envSpecificHandlers,
  __WEBPACK_IMPORTED_MODULE_2__handlers__["b" /* error */]
]

const server = __WEBPACK_IMPORTED_MODULE_0_http___default.a.createServer(Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* chain */])(handlers))

server.listen(process.env.PORT || 3000)



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("serve-static");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = api;
/* unused harmony export index */
/* harmony export (immutable) */ __webpack_exports__["b"] = error;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db_json__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__db_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_finalhandler__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_finalhandler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_finalhandler__);


// import { renderServerSide } from '../../client/src/renderServerSide'


function api ({ method, url }, res, next) {
  if (method !== 'GET' || url !== '/api/posts') { return next() }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__db_json___default.a))
}

function index () {
  const layout = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync('public/layout.html').toString()

  return ({ method }, res, next) => {
    if (method !== 'GET') { return next() }

    const app = renderServerSide(__WEBPACK_IMPORTED_MODULE_0__db_json___default.a)
    const content = layout
      .replace(
        '<div id="root"></div>',
        `<div id="root">${app.html}</div>`
      )
      .replace(
        '</head>',
        `<script>window.__INITIAL_STATE__='${app.state.replace(/'/g, '\\\'')}'</script></head>`
      )

    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': Buffer.from(content).length
    })
    res.end(content)
  }
}

function error (req, res) {
  return __WEBPACK_IMPORTED_MODULE_2_finalhandler___default()(req, res)()
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [{"id":1,"title":"Bitoin's worth like a lot OMG :O","excerpt":"Today bitcoin peaked at 19k US dollars. Sure is more than half a pizza I bought in 2013, sigh :("},{"id":2,"title":"Scientists invented new pants","excerpt":"They're blue but like different kind of blue"}]

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("finalhandler");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = chain;
function chain (handlers) {
  return (req, res) => {
    [...handlers] // need to copy array because #reverse mutates it
      .reverse()
      .reduce(
        (next, handler) => {
          const args = [req, res].concat(next ? next : [])
          return () => handler(...args)
        },
        null
      )()
  }
}


/***/ })
/******/ ]);