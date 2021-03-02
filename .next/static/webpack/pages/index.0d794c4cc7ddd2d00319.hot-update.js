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
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: list.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: list.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: list.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0YWJXcmFwcGVyIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ0YWJzIiwiZGlzcGxheSIsIkluZGV4IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldHZhbHVlIiwibGlzdHMiLCJzZXRMaXN0cyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidXJsIiwidGhlbiIsImRhdGFzIiwiZGF0YSIsIm1lc3NhZ2UiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiY2xhc3NlcyIsInVuZGVmaW5lZCIsIm1hcCIsImxpc3QiLCJpZHgiLCJuYW1lIiwicGhvbmUiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFNQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQ3pCQyxZQUFVLEVBQUU7QUFDUkMsU0FBSyxFQUFFLE1BREM7QUFFUkMsYUFBUyxFQUFFO0FBRkgsR0FEYTtBQUt6QkMsTUFBSSxFQUFFO0FBQ0ZDLFdBQU8sRUFBRTtBQURQO0FBTG1CLENBQUQsQ0FBNUI7O0FBVUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUVVQyxzREFBUSxDQUFDLENBQUQsQ0FGbEI7QUFBQSxNQUVUQyxLQUZTO0FBQUEsTUFFRkMsUUFGRTs7QUFBQSxtQkFHVUYsc0RBQVEsRUFIbEI7QUFBQSxNQUdURyxLQUhTO0FBQUEsTUFHRkMsUUFIRTs7QUFNaEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxnREFBSyxDQUFDQyxHQUFOLFdBQWFDLHFEQUFiLGVBQ0tDLElBREwsQ0FDVSxVQUFDQyxLQUFELEVBQVc7QUFDYk4sY0FBUSxDQUFDTSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsT0FBWixDQUFSO0FBQ0gsS0FITCxXQUlXLFVBQUNDLEdBQUQsRUFBUztBQUNaQyxhQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNILEtBTkw7QUFPSCxHQVJRLEVBUU4sQ0FBQ1osS0FBRCxDQVJNLENBQVQ7O0FBVUEsTUFBTWUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3RDaEIsWUFBUSxDQUFDZ0IsUUFBRCxDQUFSO0FBQ0gsR0FGRDs7QUFHQSxNQUFNQyxPQUFPLEdBQUczQixTQUFTLEVBQXpCO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyx1REFBRDtBQUFPLGVBQVMsRUFBRSxDQUFsQjtBQUFxQixlQUFTLEVBQUUyQixPQUFPLENBQUN6QixVQUF4QztBQUFvRCxZQUFNLE1BQTFEO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFDSSxhQUFLLEVBQUVPLEtBRFg7QUFFSSxpQkFBUyxFQUFFa0IsT0FBTyxDQUFDdEIsSUFGdkI7QUFHSSxlQUFPLEVBQUMsV0FIWjtBQUlJLHNCQUFjLEVBQUMsU0FKbkI7QUFLSSxpQkFBUyxFQUFDLFNBTGQ7QUFNSSxnQkFBUSxFQUFFbUIsWUFOZDtBQUFBLGdDQVFJLHFFQUFDLHFEQUFEO0FBQUssZUFBSyxFQUFDLG9CQUFYO0FBQWlCLGVBQUssRUFBRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKLGVBU0kscUVBQUMscURBQUQ7QUFBSyxlQUFLLEVBQUMsY0FBWDtBQUFnQixlQUFLLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFlS2IsS0FBSyxLQUFLaUIsU0FBVixHQUNHakIsS0FBSyxDQUFDa0IsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNoQiwwQkFDSSxxRUFBQyx1REFBRDtBQUFPLGlCQUFTLEVBQUUsQ0FBbEI7QUFBQSxnQ0FDSTtBQUFBLG9CQUFNQSxJQUFJLENBQUNDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsb0JBQU1ELElBQUksQ0FBQ0U7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBQSxvQkFBTUYsSUFBSSxDQUFDRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFBLG9CQUFNSCxJQUFJLENBQUNJO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFILEtBVEQsQ0FESCxnQkFZRztBQUFBO0FBQUEscUJBM0JSO0FBQUEsa0JBREo7QUFrQ0gsQ0F2REQ7O0dBQU0zQixLO1VBbUJjUCxTOzs7S0FuQmRPLEs7QUF5RFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkNzk0YzRjYzdkZGQyZDAwMzE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gICAgUGFwZXIsXHJcbiAgICBUYWJzLFxyXG4gICAgVGFiLFxyXG4gICAgbWFrZVN0eWxlc1xyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHVybCBmcm9tICcuLi9zZXJ2ZXJjb25maWcnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0YWJXcmFwcGVyOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgdGFiczoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldHZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xpc3RzLCBzZXRMaXN0c10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgJHt1cmx9ZGV2L2xpc3RgKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldExpc3RzKGRhdGFzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbdmFsdWVdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXR2YWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2NsYXNzZXMudGFiV3JhcHBlcn0gc3F1YXJlPlxyXG4gICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYnN9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZ1bGxXaWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCLrjIDquLDspJFcIiB2YWx1ZT17MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwi7JmE66OMXCIgdmFsdWU9ezF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcblxyXG4gICAgICAgICAgICB7bGlzdHMgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICBsaXN0cy5tYXAoKGxpc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2xpc3QuaWR4fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57bGlzdC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57bGlzdC5waG9uZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2xpc3QuYWRkcmVzc308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICDrsLDri6wg66qp66Gd7J20IOyhtOyerO2VmOyngCDslYrsirXri4jri6QuXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9