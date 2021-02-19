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
    width: '100%',
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
      elevation: 3,
      className: classes.tabWrapper,
      square: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
        className: classes.tabs,
        variant: "fullWidth",
        indicatorColor: "primary",
        textColor: "primary",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "\uBC30\uB2EC\uBAA9\uB85D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "\uC9C0\uB3C4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "\uAD00\uB9AC\uC790"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYldyYXBwZXIiLCJib3R0b20iLCJwb3NpdGlvbiIsIndpZHRoIiwidGV4dEFsaWduIiwidGFicyIsImRpc3BsYXkiLCJMYXlvdXQiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBT0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQ3pCQyxZQUFVLEVBQUU7QUFDUkMsVUFBTSxFQUFFLENBREE7QUFFUkMsWUFBUSxFQUFFLE9BRkY7QUFHUkMsU0FBSyxFQUFFLE1BSEM7QUFJUkMsYUFBUyxFQUFFO0FBSkgsR0FEYTtBQU96QkMsTUFBSSxFQUFFO0FBQ0ZDLFdBQU8sRUFBRTtBQURQO0FBUG1CLENBQUQsQ0FBNUI7O0FBV0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLENBQUQsQ0FEakI7QUFBQSxNQUNWQyxLQURVO0FBQUEsTUFDSEMsUUFERzs7QUFHakIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3RDSCxZQUFRLENBQUNHLFFBQUQsQ0FBUjtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6QjtBQUNBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsdURBQUQ7QUFBTyxlQUFTLEVBQUUsQ0FBbEI7QUFBcUIsZUFBUyxFQUFFZ0IsT0FBTyxDQUFDZCxVQUF4QztBQUFvRCxZQUFNLE1BQTFEO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFDSSxpQkFBUyxFQUFFYyxPQUFPLENBQUNULElBRHZCO0FBRUksZUFBTyxFQUFDLFdBRlo7QUFHSSxzQkFBYyxFQUFDLFNBSG5CO0FBSUksaUJBQVMsRUFBQyxTQUpkO0FBQUEsZ0NBTUkscUVBQUMscURBQUQ7QUFBSyxlQUFLLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLGVBT0kscUVBQUMscURBQUQ7QUFBSyxlQUFLLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKLGVBUUkscUVBQUMscURBQUQ7QUFBSyxlQUFLLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWdCSCxDQXhCRDs7R0FBTUUsTTtVQU9jVCxTOzs7S0FQZFMsTTtBQTBCU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hNDlmNDRjNzIzN2FkNWZhYmE3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge1xuICAgIFBhcGVyLFxuICAgIFRhYnMsXG4gICAgVGFiLFxuICAgIG1ha2VTdHlsZXNcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICB0YWJXcmFwcGVyOiB7XG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuICAgIHRhYnM6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9XG59KVxuY29uc3QgTGF5b3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJXcmFwcGVyfSBzcXVhcmU+XG4gICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYnN9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmdWxsV2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCLrsLDri6zrqqnroZ1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwi7KeA64+EXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIuq0gOumrOyekFwiIC8+XG4gICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==