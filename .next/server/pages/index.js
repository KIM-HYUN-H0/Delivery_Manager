module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _serverconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../serverconfig */ "./serverconfig.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/hyunho/project/next_tutorial/pages/index.tsx";




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  tabWrapper: {
    width: '100%',
    textAlign: 'center'
  },
  listWrapper: {
    marginTop: '5px'
  },
  tabs: {
    display: 'inline-block'
  },
  name: {},
  address: {},
  phone: {}
});

const Index = () => {
  const {
    0: value,
    1: setvalue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: lists,
    1: setLists
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`${_serverconfig__WEBPACK_IMPORTED_MODULE_3__["default"]}dev/list`, {
      params: {
        complete: value
      }
    }).then(datas => {
      console.log(datas);
      setLists(datas.data.message);
    }).catch(err => {
      console.error(err);
    });
  }, [value]);

  const handleChange = (event, newValue) => {
    setvalue(newValue);
  };

  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      elevation: 3,
      className: classes.tabWrapper,
      square: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
        value: value,
        className: classes.tabs,
        variant: "fullWidth",
        indicatorColor: "primary",
        textColor: "primary",
        onChange: handleChange,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "\uB300\uAE30\uC911",
          value: 0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "\uC644\uB8CC",
          value: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, undefined), lists !== undefined ? lists.map(list => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
        elevation: 3,
        className: classes.listWrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.name,
          children: list.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.phone,
          children: list.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.address,
          children: list.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }, undefined);
    }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: "\uBC30\uB2EC \uBAA9\uB85D\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
    }, void 0, false)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./serverconfig.js":
/*!*************************!*\
  !*** ./serverconfig.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Url = 'https://qkep7s4a52.execute-api.ap-northeast-2.amazonaws.com/';
/* harmony default export */ __webpack_exports__["default"] = (Url);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NlcnZlcmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGFiV3JhcHBlciIsIndpZHRoIiwidGV4dEFsaWduIiwibGlzdFdyYXBwZXIiLCJtYXJnaW5Ub3AiLCJ0YWJzIiwiZGlzcGxheSIsIm5hbWUiLCJhZGRyZXNzIiwicGhvbmUiLCJJbmRleCIsInZhbHVlIiwic2V0dmFsdWUiLCJ1c2VTdGF0ZSIsImxpc3RzIiwic2V0TGlzdHMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInVybCIsInBhcmFtcyIsImNvbXBsZXRlIiwidGhlbiIsImRhdGFzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJjbGFzc2VzIiwidW5kZWZpbmVkIiwibWFwIiwibGlzdCIsIlVybCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FB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SUFBRCxJQUFVO0FBQ2hCLDBCQUNJLHFFQUFDLHVEQUFEO0FBQU8saUJBQVMsRUFBRSxDQUFsQjtBQUFxQixpQkFBUyxFQUFFSCxPQUFPLENBQUMvQixXQUF4QztBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRStCLE9BQU8sQ0FBQzNCLElBQXhCO0FBQUEsb0JBQStCOEIsSUFBSSxDQUFDOUI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUssbUJBQVMsRUFBRTJCLE9BQU8sQ0FBQ3pCLEtBQXhCO0FBQUEsb0JBQWdDNEIsSUFBSSxDQUFDNUI7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQUssbUJBQVMsRUFBRXlCLE9BQU8sQ0FBQzFCLE9BQXhCO0FBQUEsb0JBQWtDNkIsSUFBSSxDQUFDN0I7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFPSCxLQVJELENBREgsZ0JBV0c7QUFBQTtBQUFBLHFCQTFCUjtBQUFBLGtCQURKO0FBaUNILENBM0REOztBQTZEZUUsb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQUEsTUFBTTRCLEdBQUcsR0FBRyw4REFBWjtBQUVlQSxrRUFBZixFOzs7Ozs7Ozs7OztBQ0ZBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gICAgUGFwZXIsXHJcbiAgICBUYWJzLFxyXG4gICAgVGFiLFxyXG4gICAgbWFrZVN0eWxlc1xyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHVybCBmcm9tICcuLi9zZXJ2ZXJjb25maWcnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0YWJXcmFwcGVyOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgbGlzdFdyYXBwZXIgOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wIDogJzVweCdcclxuICAgIH0sXHJcbiAgICB0YWJzOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcclxuICAgIH0sXHJcbiAgICBuYW1lIDoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIGFkZHJlc3MgOiB7XHJcblxyXG4gICAgfSxcclxuICAgIHBob25lIDoge1xyXG5cclxuICAgIH0sXHJcblxyXG59KVxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXR2YWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsaXN0cywgc2V0TGlzdHNdID0gdXNlU3RhdGUoKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYCR7dXJsfWRldi9saXN0YCwge1xyXG4gICAgICAgICAgICBwYXJhbXMgOiB7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA6IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFzKTtcclxuICAgICAgICAgICAgICAgIHNldExpc3RzKGRhdGFzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbdmFsdWVdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXR2YWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2NsYXNzZXMudGFiV3JhcHBlcn0gc3F1YXJlPlxyXG4gICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYnN9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZ1bGxXaWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCLrjIDquLDspJFcIiB2YWx1ZT17MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwi7JmE66OMXCIgdmFsdWU9ezF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcblxyXG4gICAgICAgICAgICB7bGlzdHMgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICBsaXN0cy5tYXAoKGxpc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmFtZX0+e2xpc3QubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBob25lfT57bGlzdC5waG9uZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZHJlc3N9PntsaXN0LmFkZHJlc3N9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAg67Cw64usIOuqqeuhneydtCDsobTsnqztlZjsp4Ag7JWK7Iq164uI64ukLlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwiY29uc3QgVXJsID0gJ2h0dHBzOi8vcWtlcDdzNGE1Mi5leGVjdXRlLWFwaS5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tLyc7XG5cbmV4cG9ydCBkZWZhdWx0IFVybDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==