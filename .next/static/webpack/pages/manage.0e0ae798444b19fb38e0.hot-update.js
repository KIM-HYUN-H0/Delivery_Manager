webpackHotUpdate_N_E("pages/manage",{

/***/ "./pages/manage.tsx":
/*!**************************!*\
  !*** ./pages/manage.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _serverconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../serverconfig */ "./serverconfig.js");



var _s = $RefreshSig$();





var manage = function manage() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_serverconfig__WEBPACK_IMPORTED_MODULE_3__["default"], "dev/list")).then(function (data) {
      console.log(data);
    });
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: "manage"
  }, void 0, false);
};

_s(manage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/* harmony default export */ __webpack_exports__["default"] = (manage);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./serverconfig.js":
/*!*************************!*\
  !*** ./serverconfig.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var Url = 'https://qkep7s4a52.execute-api.ap-northeast-2.amazonaws.com/';
/* harmony default export */ __webpack_exports__["default"] = (Url);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFuYWdlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc2VydmVyY29uZmlnLmpzIl0sIm5hbWVzIjpbIm1hbmFnZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidXJsIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBRWpCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZ0RBQUssQ0FBQ0MsR0FBTixXQUFhQyxxREFBYixlQUNDQyxJQURELENBQ00sVUFBQ0MsSUFBRCxFQUFVO0FBQ1pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0gsS0FIRDtBQUlILEdBTFEsQ0FBVDtBQU1ELHNCQUNJO0FBQUE7QUFBQSxtQkFESjtBQUtGLENBYkQ7O0dBQU1OLE07O0FBZVNBLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQSxrREFBTVMsR0FBRyxHQUFHLDhEQUFaO0FBRWVBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hbmFnZS4wZTBhZTc5ODQ0NGIxOWZiMzhlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgdXJsIGZyb20gJy4uL3NlcnZlcmNvbmZpZyc7XG5cbmNvbnN0IG1hbmFnZSA9ICgpID0+IHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChgJHt1cmx9ZGV2L2xpc3RgKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgIHJldHVybihcbiAgICAgICA8PlxuICAgICAgIG1hbmFnZVxuICAgICAgIDwvPlxuICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYW5hZ2U7IiwiY29uc3QgVXJsID0gJ2h0dHBzOi8vcWtlcDdzNGE1Mi5leGVjdXRlLWFwaS5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tLyc7XG5cbmV4cG9ydCBkZWZhdWx0IFVybDsiXSwic291cmNlUm9vdCI6IiJ9