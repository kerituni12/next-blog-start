module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/blog/[slug].js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/kin/next-blog/pages/blog/[slug].tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst BlogPage = ({\n  title,\n  des,\n  date\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, \"Title: \", title), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, \"DEs: \", des), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, \"Date: \", date));\n};\n\nconst getStaticPaths = async () => {\n  const blogs = (await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../../data/blog.json */ \"./data/blog.json\", 3))).default;\n  const slugs = blogs.map(blog => blog.slug);\n  const paths = slugs.map(slug => `/blog/${slug}`);\n  return {\n    paths,\n    fallback: false\n  };\n};\nconst getStaticProps = async ({\n  params\n}) => {\n  const blogs = (await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../../data/blog.json */ \"./data/blog.json\", 3))).default;\n  const blog = blogs.find(x => x.slug === params.slug);\n  return {\n    props: {\n      title: blog.title,\n      des: blog.des,\n      date: blog.date\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS50c3g/YWRmOSJdLCJuYW1lcyI6WyJCbG9nUGFnZSIsInRpdGxlIiwiZGVzIiwiZGF0ZSIsImdldFN0YXRpY1BhdGhzIiwiYmxvZ3MiLCJkZWZhdWx0Iiwic2x1Z3MiLCJtYXAiLCJibG9nIiwic2x1ZyIsInBhdGhzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsImZpbmQiLCJ4IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdDLE1BQU1BLFFBQTRELEdBQUUsQ0FBQztBQUFDQyxPQUFEO0FBQVFDLEtBQVI7QUFBYUM7QUFBYixDQUFELEtBQXdCO0FBQ3pGLFNBQVEsbUVBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBY0YsS0FBZCxDQURJLEVBRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFZQyxHQUFaLENBRkksRUFHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWFDLElBQWIsQ0FISSxDQUFSO0FBT0gsQ0FSQTs7QUFVTSxNQUFNQyxjQUErQixHQUFHLFlBQVc7QUFDdEQsUUFBTUMsS0FBSyxHQUFHLENBQUMsTUFBTSxrSUFBUCxFQUF1Q0MsT0FBckQ7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csR0FBTixDQUFVQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsSUFBdkIsQ0FBZDtBQUNBLFFBQU1DLEtBQUssR0FBR0osS0FBSyxDQUFDQyxHQUFOLENBQVVFLElBQUksSUFBSyxTQUFRQSxJQUFLLEVBQWhDLENBQWQ7QUFDQSxTQUNLO0FBQ0dDLFNBREg7QUFFR0MsWUFBUSxFQUFFO0FBRmIsR0FETDtBQU1ILENBVk07QUFZQSxNQUFNQyxjQUE4QixHQUFHLE9BQU87QUFBQ0M7QUFBRCxDQUFQLEtBQW9CO0FBQzlELFFBQU1ULEtBQUssR0FBRyxDQUFDLE1BQU0sa0lBQVAsRUFBdUNDLE9BQXJEO0FBRUEsUUFBTUcsSUFBSSxHQUFHSixLQUFLLENBQUNVLElBQU4sQ0FBV0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNOLElBQUYsS0FBV0ksTUFBTSxDQUFDSixJQUFsQyxDQUFiO0FBRUEsU0FBTztBQUNITyxTQUFLLEVBQUc7QUFDSmhCLFdBQUssRUFBRVEsSUFBSSxDQUFDUixLQURSO0FBRUpDLFNBQUcsRUFBRU8sSUFBSSxDQUFDUCxHQUZOO0FBR0pDLFVBQUksRUFBQ00sSUFBSSxDQUFDTjtBQUhOO0FBREwsR0FBUDtBQU9ILENBWk07QUFhUUgsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRQYWdlLCBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHN9IGZyb20gJ25leHQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG4gY29uc3QgQmxvZ1BhZ2UgOk5leHRQYWdlIDx7dGl0bGU6c3RyaW5nLCBkZXM6c3RyaW5nLCBkYXRlOnN0cmluZ30+PSAoe3RpdGxlLCBkZXMsIGRhdGV9KSA9PiB7XG4gICAgcmV0dXJuICg8PlxuICAgICAgICA8ZGl2PlRpdGxlOiB7IHRpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2PkRFczogeyBkZXN9PC9kaXY+XG4gICAgICAgIDxkaXY+RGF0ZTogeyBkYXRlfTwvZGl2PiBcbiAgICA8Lz5cbiAgICAgIClcbiAgICBcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3QgYmxvZ3MgPSAoYXdhaXQgaW1wb3J0KCcuLi8uLi9kYXRhL2Jsb2cuanNvbicpKS5kZWZhdWx0O1xuICAgIGNvbnN0IHNsdWdzID0gYmxvZ3MubWFwKGJsb2cgPT4gYmxvZy5zbHVnKTtcbiAgICBjb25zdCBwYXRocyA9IHNsdWdzLm1hcChzbHVnID0+IGAvYmxvZy8ke3NsdWd9YCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGhzLFxuICAgICAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgICAgIH1cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe3BhcmFtc30pID0+IHtcbiAgICBjb25zdCBibG9ncyA9IChhd2FpdCBpbXBvcnQoJy4uLy4uL2RhdGEvYmxvZy5qc29uJykpLmRlZmF1bHQ7XG5cbiAgICBjb25zdCBibG9nID0gYmxvZ3MuZmluZCh4ID0+IHguc2x1ZyA9PT0gcGFyYW1zLnNsdWcpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHMgOiB7XG4gICAgICAgICAgICB0aXRsZTogYmxvZy50aXRsZSxcbiAgICAgICAgICAgIGRlczogYmxvZy5kZXMsXG4gICAgICAgICAgICBkYXRlOmJsb2cuZGF0ZVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmxvZ1BhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].tsx\n");

/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** multi ./pages/blog/[slug].tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kin/next-blog/pages/blog/[slug].tsx */"./pages/blog/[slug].tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });