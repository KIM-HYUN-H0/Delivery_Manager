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
  listWrapper: {
    marginTop: '5px'
  },
  tabs: {
    display: 'inline-block'
  },
  idx: {},
  name: {},
  address: {},
  phone: {}
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
      params: {
        complete: value
      }
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
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "\uC644\uB8CC",
          value: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, _this), lists !== undefined ? lists.map(function (list) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
        elevation: 3,
        className: classes.listWrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.name,
          children: list.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.phone,
          children: list.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.address,
          children: list.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0YWJXcmFwcGVyIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJsaXN0V3JhcHBlciIsIm1hcmdpblRvcCIsInRhYnMiLCJkaXNwbGF5IiwiaWR4IiwibmFtZSIsImFkZHJlc3MiLCJwaG9uZSIsIkluZGV4IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldHZhbHVlIiwibGlzdHMiLCJzZXRMaXN0cyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidXJsIiwicGFyYW1zIiwiY29tcGxldGUiLCJ0aGVuIiwiZGF0YXMiLCJkYXRhIiwibWVzc2FnZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJjbGFzc2VzIiwidW5kZWZpbmVkIiwibWFwIiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUN6QkMsWUFBVSxFQUFFO0FBQ1JDLFNBQUssRUFBRSxNQURDO0FBRVJDLGFBQVMsRUFBRTtBQUZILEdBRGE7QUFLekJDLGFBQVcsRUFBRztBQUNWQyxhQUFTLEVBQUc7QUFERixHQUxXO0FBUXpCQyxNQUFJLEVBQUU7QUFDRkMsV0FBTyxFQUFFO0FBRFAsR0FSbUI7QUFXekJDLEtBQUcsRUFBRyxFQVhtQjtBQWN6QkMsTUFBSSxFQUFHLEVBZGtCO0FBaUJ6QkMsU0FBTyxFQUFHLEVBakJlO0FBb0J6QkMsT0FBSyxFQUFHO0FBcEJpQixDQUFELENBQTVCOztBQTBCQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBRVVDLHNEQUFRLENBQUMsQ0FBRCxDQUZsQjtBQUFBLE1BRVRDLEtBRlM7QUFBQSxNQUVGQyxRQUZFOztBQUFBLG1CQUdVRixzREFBUSxFQUhsQjtBQUFBLE1BR1RHLEtBSFM7QUFBQSxNQUdGQyxRQUhFOztBQU1oQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdEQUFLLENBQUNDLEdBQU4sV0FBYUMscURBQWIsZUFBNEI7QUFDeEJDLFlBQU0sRUFBRztBQUNMQyxnQkFBUSxFQUFHVDtBQUROO0FBRGUsS0FBNUIsRUFLS1UsSUFMTCxDQUtVLFVBQUNDLEtBQUQsRUFBVztBQUNiUixjQUFRLENBQUNRLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxPQUFaLENBQVI7QUFDSCxLQVBMLFdBUVcsVUFBQ0MsR0FBRCxFQUFTO0FBQ1pDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0gsS0FWTDtBQVdILEdBWlEsRUFZTixDQUFDZCxLQUFELENBWk0sQ0FBVDs7QUFjQSxNQUFNaUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3RDbEIsWUFBUSxDQUFDa0IsUUFBRCxDQUFSO0FBQ0gsR0FGRDs7QUFHQSxNQUFNQyxPQUFPLEdBQUduQyxTQUFTLEVBQXpCO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyx1REFBRDtBQUFPLGVBQVMsRUFBRSxDQUFsQjtBQUFxQixlQUFTLEVBQUVtQyxPQUFPLENBQUNqQyxVQUF4QztBQUFvRCxZQUFNLE1BQTFEO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFDSSxhQUFLLEVBQUVhLEtBRFg7QUFFSSxpQkFBUyxFQUFFb0IsT0FBTyxDQUFDNUIsSUFGdkI7QUFHSSxlQUFPLEVBQUMsV0FIWjtBQUlJLHNCQUFjLEVBQUMsU0FKbkI7QUFLSSxpQkFBUyxFQUFDLFNBTGQ7QUFNSSxnQkFBUSxFQUFFeUIsWUFOZDtBQUFBLGdDQVFJLHFFQUFDLHFEQUFEO0FBQUssZUFBSyxFQUFDLG9CQUFYO0FBQWlCLGVBQUssRUFBRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKLGVBU0kscUVBQUMscURBQUQ7QUFBSyxlQUFLLEVBQUMsY0FBWDtBQUFnQixlQUFLLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFlS2YsS0FBSyxLQUFLbUIsU0FBVixHQUNHbkIsS0FBSyxDQUFDb0IsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNoQiwwQkFDSSxxRUFBQyx1REFBRDtBQUFPLGlCQUFTLEVBQUUsQ0FBbEI7QUFBcUIsaUJBQVMsRUFBRUgsT0FBTyxDQUFDOUIsV0FBeEM7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUU4QixPQUFPLENBQUN6QixJQUF4QjtBQUFBLG9CQUErQjRCLElBQUksQ0FBQzVCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLG1CQUFTLEVBQUV5QixPQUFPLENBQUN2QixLQUF4QjtBQUFBLG9CQUFnQzBCLElBQUksQ0FBQzFCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFLLG1CQUFTLEVBQUV1QixPQUFPLENBQUN4QixPQUF4QjtBQUFBLG9CQUFrQzJCLElBQUksQ0FBQzNCO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFPSCxLQVJELENBREgsZ0JBV0c7QUFBQTtBQUFBLHFCQTFCUjtBQUFBLGtCQURKO0FBaUNILENBMUREOztHQUFNRSxLO1VBdUJjYixTOzs7S0F2QmRhLEs7QUE0RFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAwNzVmZDQ0Y2Y1YTE2MDkzYTcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gICAgUGFwZXIsXHJcbiAgICBUYWJzLFxyXG4gICAgVGFiLFxyXG4gICAgbWFrZVN0eWxlc1xyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHVybCBmcm9tICcuLi9zZXJ2ZXJjb25maWcnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0YWJXcmFwcGVyOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgbGlzdFdyYXBwZXIgOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wIDogJzVweCdcclxuICAgIH0sXHJcbiAgICB0YWJzOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcclxuICAgIH0sXHJcbiAgICBpZHggOiB7XHJcblxyXG4gICAgfSxcclxuICAgIG5hbWUgOiB7XHJcblxyXG4gICAgfSxcclxuICAgIGFkZHJlc3MgOiB7XHJcblxyXG4gICAgfSxcclxuICAgIHBob25lIDoge1xyXG5cclxuICAgIH0sXHJcblxyXG59KVxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXR2YWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsaXN0cywgc2V0TGlzdHNdID0gdXNlU3RhdGUoKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYCR7dXJsfWRldi9saXN0YCwge1xyXG4gICAgICAgICAgICBwYXJhbXMgOiB7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA6IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldExpc3RzKGRhdGFzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbdmFsdWVdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXR2YWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2NsYXNzZXMudGFiV3JhcHBlcn0gc3F1YXJlPlxyXG4gICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYnN9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZ1bGxXaWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCLrjIDquLDspJFcIiB2YWx1ZT17MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwi7JmE66OMXCIgdmFsdWU9ezF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcblxyXG4gICAgICAgICAgICB7bGlzdHMgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICBsaXN0cy5tYXAoKGxpc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmFtZX0+e2xpc3QubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBob25lfT57bGlzdC5waG9uZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZHJlc3N9PntsaXN0LmFkZHJlc3N9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAg67Cw64usIOuqqeuhneydtCDsobTsnqztlZjsp4Ag7JWK7Iq164uI64ukLlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==