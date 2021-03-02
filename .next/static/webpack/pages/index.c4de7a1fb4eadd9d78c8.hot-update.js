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
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_serverconfig__WEBPACK_IMPORTED_MODULE_3__["default"], "dev/list"), {
      complete: value
    }).then(function (datas) {
      setLists(datas.data.message);
    })["catch"](function (err) {
      console.error(err);
    });
  }, [value]);

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
          lineNumber: 56,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "\uC644\uB8CC",
          value: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this), lists !== undefined ? lists.map(function (list) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
        elevation: 3,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: list.idx
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: list.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: list.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: list.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }, _this);
    }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: "\uBC30\uB2EC \uBAA9\uB85D\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
    }, void 0, false)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0YWJXcmFwcGVyIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ0YWJzIiwiZGlzcGxheSIsIkluZGV4IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldHZhbHVlIiwibGlzdHMiLCJzZXRMaXN0cyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidXJsIiwiY29tcGxldGUiLCJ0aGVuIiwiZGF0YXMiLCJkYXRhIiwibWVzc2FnZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJjbGFzc2VzIiwidW5kZWZpbmVkIiwibWFwIiwibGlzdCIsImlkeCIsIm5hbWUiLCJwaG9uZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQU1BO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDekJDLFlBQVUsRUFBRTtBQUNSQyxTQUFLLEVBQUUsTUFEQztBQUVSQyxhQUFTLEVBQUU7QUFGSCxHQURhO0FBS3pCQyxNQUFJLEVBQUU7QUFDRkMsV0FBTyxFQUFFO0FBRFA7QUFMbUIsQ0FBRCxDQUE1Qjs7QUFVQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBRVVDLHNEQUFRLENBQUMsQ0FBRCxDQUZsQjtBQUFBLE1BRVRDLEtBRlM7QUFBQSxNQUVGQyxRQUZFOztBQUFBLG1CQUdVRixzREFBUSxFQUhsQjtBQUFBLE1BR1RHLEtBSFM7QUFBQSxNQUdGQyxRQUhFOztBQU1oQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdEQUFLLENBQUNDLEdBQU4sV0FBYUMscURBQWIsZUFBNEI7QUFDeEJDLGNBQVEsRUFBR1I7QUFEYSxLQUE1QixFQUdLUyxJQUhMLENBR1UsVUFBQ0MsS0FBRCxFQUFXO0FBQ2JQLGNBQVEsQ0FBQ08sS0FBSyxDQUFDQyxJQUFOLENBQVdDLE9BQVosQ0FBUjtBQUNILEtBTEwsV0FNVyxVQUFDQyxHQUFELEVBQVM7QUFDWkMsYUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDSCxLQVJMO0FBU0gsR0FWUSxFQVVOLENBQUNiLEtBQUQsQ0FWTSxDQUFUOztBQVlBLE1BQU1nQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDdENqQixZQUFRLENBQUNpQixRQUFELENBQVI7QUFDSCxHQUZEOztBQUdBLE1BQU1DLE9BQU8sR0FBRzVCLFNBQVMsRUFBekI7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHVEQUFEO0FBQU8sZUFBUyxFQUFFLENBQWxCO0FBQXFCLGVBQVMsRUFBRTRCLE9BQU8sQ0FBQzFCLFVBQXhDO0FBQW9ELFlBQU0sTUFBMUQ7QUFBQSw2QkFDSSxxRUFBQyxzREFBRDtBQUNJLGFBQUssRUFBRU8sS0FEWDtBQUVJLGlCQUFTLEVBQUVtQixPQUFPLENBQUN2QixJQUZ2QjtBQUdJLGVBQU8sRUFBQyxXQUhaO0FBSUksc0JBQWMsRUFBQyxTQUpuQjtBQUtJLGlCQUFTLEVBQUMsU0FMZDtBQU1JLGdCQUFRLEVBQUVvQixZQU5kO0FBQUEsZ0NBUUkscUVBQUMscURBQUQ7QUFBSyxlQUFLLEVBQUMsb0JBQVg7QUFBaUIsZUFBSyxFQUFFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFTSSxxRUFBQyxxREFBRDtBQUFLLGVBQUssRUFBQyxjQUFYO0FBQWdCLGVBQUssRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQWVLZCxLQUFLLEtBQUtrQixTQUFWLEdBQ0dsQixLQUFLLENBQUNtQixHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hCLDBCQUNJLHFFQUFDLHVEQUFEO0FBQU8saUJBQVMsRUFBRSxDQUFsQjtBQUFBLGdDQUNJO0FBQUEsb0JBQU1BLElBQUksQ0FBQ0M7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBTUQsSUFBSSxDQUFDRTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBLG9CQUFNRixJQUFJLENBQUNHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJO0FBQUEsb0JBQU1ILElBQUksQ0FBQ0k7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUgsS0FURCxDQURILGdCQVlHO0FBQUE7QUFBQSxxQkEzQlI7QUFBQSxrQkFESjtBQWtDSCxDQXpERDs7R0FBTTVCLEs7VUFxQmNQLFM7OztLQXJCZE8sSztBQTJEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzRkZTdhMWZiNGVhZGQ5ZDc4YzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgICBQYXBlcixcclxuICAgIFRhYnMsXHJcbiAgICBUYWIsXHJcbiAgICBtYWtlU3R5bGVzXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgdXJsIGZyb20gJy4uL3NlcnZlcmNvbmZpZyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRhYldyYXBwZXI6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICB0YWJzOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0dmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbGlzdHMsIHNldExpc3RzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGAke3VybH1kZXYvbGlzdGAsIHtcclxuICAgICAgICAgICAgY29tcGxldGUgOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TGlzdHMoZGF0YXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFt2YWx1ZV0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldHZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJXcmFwcGVyfSBzcXVhcmU+XHJcbiAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGFic31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZnVsbFdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIuuMgOq4sOykkVwiIHZhbHVlPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCLsmYTro4xcIiB2YWx1ZT17MX0gLz5cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuXHJcbiAgICAgICAgICAgIHtsaXN0cyAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgIGxpc3RzLm1hcCgobGlzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57bGlzdC5pZHh9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntsaXN0Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntsaXN0LnBob25lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57bGlzdC5hZGRyZXNzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIOuwsOuLrCDrqqnroZ3snbQg7KG07J6s7ZWY7KeAIOyViuyKteuLiOuLpC5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=