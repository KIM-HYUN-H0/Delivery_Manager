webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _serverconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../serverconfig */ "./serverconfig.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/home/hyunho/project/next_tutorial/pages/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  tabWrapper: {
    width: '100%',
    textAlign: 'center'
  },
  tabs: {
    display: 'inline-block'
  }
});

var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      value = _useState[0],
      setvalue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      lists = _useState2[0],
      setLists = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_serverconfig__WEBPACK_IMPORTED_MODULE_3__["default"], "dev/list")).then(function (datas) {
      setLists(datas.data.message);
    })["catch"](function (err) {
      console.error(err);
    });
  }, []);

  var handleChange = function handleChange(event, newValue) {
    setvalue(newValue);
  };

  var classes = useStyles();
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
          lineNumber: 54,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "\uC644\uB8CC",
          value: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this), lists !== undefined ? lists.map(function (list) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
        elevation: 3,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: list.idx
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: list.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: list.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: list.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, _this);
    }) : null]
  }, void 0, true);
};

_s(Index, "713WErioQMhNX2MpYFh4kRwIFXY=", false, function () {
  return [useStyles];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0YWJXcmFwcGVyIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ0YWJzIiwiZGlzcGxheSIsIkluZGV4IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldHZhbHVlIiwibGlzdHMiLCJzZXRMaXN0cyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidXJsIiwidGhlbiIsImRhdGFzIiwiZGF0YSIsIm1lc3NhZ2UiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiY2xhc3NlcyIsInVuZGVmaW5lZCIsIm1hcCIsImxpc3QiLCJpZHgiLCJuYW1lIiwicGhvbmUiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFNQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQ3pCQyxZQUFVLEVBQUU7QUFDUkMsU0FBSyxFQUFFLE1BREM7QUFFUkMsYUFBUyxFQUFFO0FBRkgsR0FEYTtBQUt6QkMsTUFBSSxFQUFFO0FBQ0ZDLFdBQU8sRUFBRTtBQURQO0FBTG1CLENBQUQsQ0FBNUI7O0FBVUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUVVQyxzREFBUSxDQUFDLENBQUQsQ0FGbEI7QUFBQSxNQUVUQyxLQUZTO0FBQUEsTUFFRkMsUUFGRTs7QUFBQSxtQkFHVUYsc0RBQVEsRUFIbEI7QUFBQSxNQUdURyxLQUhTO0FBQUEsTUFHRkMsUUFIRTs7QUFNaEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxnREFBSyxDQUFDQyxHQUFOLFdBQWFDLHFEQUFiLGVBQ0NDLElBREQsQ0FDTSxVQUFDQyxLQUFELEVBQVc7QUFDYk4sY0FBUSxDQUFDTSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsT0FBWixDQUFSO0FBQ0gsS0FIRCxXQUlPLFVBQUNDLEdBQUQsRUFBUztBQUNaQyxhQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNILEtBTkQ7QUFPSCxHQVJRLEVBUU4sRUFSTSxDQUFUOztBQVVBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFxQjtBQUN0Q2hCLFlBQVEsQ0FBQ2dCLFFBQUQsQ0FBUjtBQUNILEdBRkQ7O0FBR0EsTUFBTUMsT0FBTyxHQUFHM0IsU0FBUyxFQUF6QjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsdURBQUQ7QUFBTyxlQUFTLEVBQUUsQ0FBbEI7QUFBcUIsZUFBUyxFQUFFMkIsT0FBTyxDQUFDekIsVUFBeEM7QUFBb0QsWUFBTSxNQUExRDtBQUFBLDZCQUNJLHFFQUFDLHNEQUFEO0FBQ0ksYUFBSyxFQUFFTyxLQURYO0FBRUksaUJBQVMsRUFBRWtCLE9BQU8sQ0FBQ3RCLElBRnZCO0FBR0ksZUFBTyxFQUFDLFdBSFo7QUFJSSxzQkFBYyxFQUFDLFNBSm5CO0FBS0ksaUJBQVMsRUFBQyxTQUxkO0FBTUksZ0JBQVEsRUFBRW1CLFlBTmQ7QUFBQSxnQ0FRSSxxRUFBQyxxREFBRDtBQUFLLGVBQUssRUFBQyxvQkFBWDtBQUFpQixlQUFLLEVBQUU7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSixlQVNJLHFFQUFDLHFEQUFEO0FBQUssZUFBSyxFQUFDLGNBQVg7QUFBZ0IsZUFBSyxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBZUtiLEtBQUssS0FBS2lCLFNBQVYsR0FDRGpCLEtBQUssQ0FBQ2tCLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDaEIsMEJBQ0kscUVBQUMsdURBQUQ7QUFBTyxpQkFBUyxFQUFFLENBQWxCO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBTUEsSUFBSSxDQUFDQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLG9CQUFNRCxJQUFJLENBQUNFO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsb0JBQU1GLElBQUksQ0FBQ0c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUk7QUFBQSxvQkFBTUgsSUFBSSxDQUFDSTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFRSCxLQVRELENBREMsR0FZTCxJQTNCQTtBQUFBLGtCQURKO0FBK0JILENBcEREOztHQUFNM0IsSztVQW1CY1AsUzs7O0tBbkJkTyxLO0FBc0RTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMjZiMjM4ZThhNjVhYTNhMjZmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICAgIFBhcGVyLFxyXG4gICAgVGFicyxcclxuICAgIFRhYixcclxuICAgIG1ha2VTdHlsZXNcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB1cmwgZnJvbSAnLi4vc2VydmVyY29uZmlnJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGFiV3JhcHBlcjoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIHRhYnM6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXR2YWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsaXN0cywgc2V0TGlzdHNdID0gdXNlU3RhdGUoKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYCR7dXJsfWRldi9saXN0YClcclxuICAgICAgICAudGhlbigoZGF0YXMpID0+IHtcclxuICAgICAgICAgICAgc2V0TGlzdHMoZGF0YXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldHZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJXcmFwcGVyfSBzcXVhcmU+XHJcbiAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGFic31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZnVsbFdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIuuMgOq4sOykkVwiIHZhbHVlPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCLsmYTro4xcIiB2YWx1ZT17MX0vPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG5cclxuICAgICAgICAgICAge2xpc3RzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICBsaXN0cy5tYXAoKGxpc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2xpc3QuaWR4fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntsaXN0Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2xpc3QucGhvbmV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2xpc3QuYWRkcmVzc308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDpcclxuICAgICAgICBudWxsfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9