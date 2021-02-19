webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/Layout.tsx":
/*!************************!*\
  !*** ./src/Layout.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "/home/hyunho/project/next_tutorial/src/Layout.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  tabWrapper: {
    bottom: 0,
    position: 'fixed',
    // width : '100%',
    textAlign: 'center'
  },
  tabs: {
    display: 'inline-block'
  }
});

var Layout = function Layout() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      value = _useState[0],
      setValue = _useState[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      className: classes.tabWrapper,
      square: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
        className: classes.tabs,
        value: value,
        fullWidth: true,
        indicatorColor: "primary",
        textColor: "primary",
        onChange: handleChange,
        "aria-label": "disabled tabs example",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "\uBC30\uB2EC\uBAA9\uB85D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "Disabled",
          disabled: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "Active"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Layout, "amYE+i0RSNXWcaZXPkaqPcPCmRg=", false, function () {
  return [useStyles];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYldyYXBwZXIiLCJib3R0b20iLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsInRhYnMiLCJkaXNwbGF5IiwiTGF5b3V0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQU9BLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUN6QkMsWUFBVSxFQUFHO0FBQ1RDLFVBQU0sRUFBRyxDQURBO0FBRVRDLFlBQVEsRUFBRyxPQUZGO0FBR1Q7QUFDQUMsYUFBUyxFQUFHO0FBSkgsR0FEWTtBQU96QkMsTUFBSSxFQUFHO0FBQ0hDLFdBQU8sRUFBRztBQURQO0FBUGtCLENBQUQsQ0FBNUI7O0FBV0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLENBQUQsQ0FEakI7QUFBQSxNQUNWQyxLQURVO0FBQUEsTUFDSEMsUUFERzs7QUFHakIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3RDSCxZQUFRLENBQUNHLFFBQUQsQ0FBUjtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsT0FBTyxHQUFHZixTQUFTLEVBQXpCO0FBQ0Esc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyx1REFBRDtBQUFPLGVBQVMsRUFBRWUsT0FBTyxDQUFDYixVQUExQjtBQUFzQyxZQUFNLE1BQTVDO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFDQSxpQkFBUyxFQUFFYSxPQUFPLENBQUNULElBRG5CO0FBRUksYUFBSyxFQUFFSSxLQUZYO0FBR0ksaUJBQVMsTUFIYjtBQUlJLHNCQUFjLEVBQUMsU0FKbkI7QUFLSSxpQkFBUyxFQUFDLFNBTGQ7QUFNSSxnQkFBUSxFQUFFRSxZQU5kO0FBT0ksc0JBQVcsdUJBUGY7QUFBQSxnQ0FTSSxxRUFBQyxxREFBRDtBQUFLLGVBQUssRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEosZUFVSSxxRUFBQyxxREFBRDtBQUFLLGVBQUssRUFBQyxVQUFYO0FBQXNCLGtCQUFRO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkosZUFXSSxxRUFBQyxxREFBRDtBQUFLLGVBQUssRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBbUJILENBM0JEOztHQUFNSixNO1VBT2NSLFM7OztLQVBkUSxNO0FBNkJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmUzYzE4NzI3MDRiODkyYTdlYTVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7XG4gICAgUGFwZXIsXG4gICAgVGFicyxcbiAgICBUYWIsXG4gICAgbWFrZVN0eWxlc1xufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHRhYldyYXBwZXIgOiB7XG4gICAgICAgIGJvdHRvbSA6IDAsXG4gICAgICAgIHBvc2l0aW9uIDogJ2ZpeGVkJyxcbiAgICAgICAgLy8gd2lkdGggOiAnMTAwJScsXG4gICAgICAgIHRleHRBbGlnbiA6ICdjZW50ZXInXG4gICAgfSxcbiAgICB0YWJzIDoge1xuICAgICAgICBkaXNwbGF5IDogJ2lubGluZS1ibG9jaydcbiAgICB9XG59KVxuY29uc3QgTGF5b3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XG4gICAgXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYldyYXBwZXJ9IHNxdWFyZT5cbiAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJzfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImRpc2FibGVkIHRhYnMgZXhhbXBsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwi67Cw64us66qp66GdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkRpc2FibGVkXCIgZGlzYWJsZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkFjdGl2ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==