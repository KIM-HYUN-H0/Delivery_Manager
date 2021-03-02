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
          lineNumber: 71,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "\uC644\uB8CC",
          value: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, _this), lists !== undefined ? lists.map(function (list) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
        elevation: 3,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.name,
          children: list.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.phone,
          children: list.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.address,
          children: list.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0YWJXcmFwcGVyIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ0YWJzIiwiZGlzcGxheSIsImlkeCIsIm5hbWUiLCJhZGRyZXNzIiwicGhvbmUiLCJJbmRleCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXR2YWx1ZSIsImxpc3RzIiwic2V0TGlzdHMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInVybCIsInBhcmFtcyIsImNvbXBsZXRlIiwidGhlbiIsImRhdGFzIiwiZGF0YSIsIm1lc3NhZ2UiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiY2xhc3NlcyIsInVuZGVmaW5lZCIsIm1hcCIsImxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQU1BO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDekJDLFlBQVUsRUFBRTtBQUNSQyxTQUFLLEVBQUUsTUFEQztBQUVSQyxhQUFTLEVBQUU7QUFGSCxHQURhO0FBS3pCQyxNQUFJLEVBQUU7QUFDRkMsV0FBTyxFQUFFO0FBRFAsR0FMbUI7QUFRekJDLEtBQUcsRUFBRyxFQVJtQjtBQVd6QkMsTUFBSSxFQUFHLEVBWGtCO0FBY3pCQyxTQUFPLEVBQUcsRUFkZTtBQWlCekJDLE9BQUssRUFBRztBQWpCaUIsQ0FBRCxDQUE1Qjs7QUF1QkEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUVVQyxzREFBUSxDQUFDLENBQUQsQ0FGbEI7QUFBQSxNQUVUQyxLQUZTO0FBQUEsTUFFRkMsUUFGRTs7QUFBQSxtQkFHVUYsc0RBQVEsRUFIbEI7QUFBQSxNQUdURyxLQUhTO0FBQUEsTUFHRkMsUUFIRTs7QUFNaEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxnREFBSyxDQUFDQyxHQUFOLFdBQWFDLHFEQUFiLGVBQTRCO0FBQ3hCQyxZQUFNLEVBQUc7QUFDTEMsZ0JBQVEsRUFBR1Q7QUFETjtBQURlLEtBQTVCLEVBS0tVLElBTEwsQ0FLVSxVQUFDQyxLQUFELEVBQVc7QUFDYlIsY0FBUSxDQUFDUSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsT0FBWixDQUFSO0FBQ0gsS0FQTCxXQVFXLFVBQUNDLEdBQUQsRUFBUztBQUNaQyxhQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNILEtBVkw7QUFXSCxHQVpRLEVBWU4sQ0FBQ2QsS0FBRCxDQVpNLENBQVQ7O0FBY0EsTUFBTWlCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFxQjtBQUN0Q2xCLFlBQVEsQ0FBQ2tCLFFBQUQsQ0FBUjtBQUNILEdBRkQ7O0FBR0EsTUFBTUMsT0FBTyxHQUFHakMsU0FBUyxFQUF6QjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsdURBQUQ7QUFBTyxlQUFTLEVBQUUsQ0FBbEI7QUFBcUIsZUFBUyxFQUFFaUMsT0FBTyxDQUFDL0IsVUFBeEM7QUFBb0QsWUFBTSxNQUExRDtBQUFBLDZCQUNJLHFFQUFDLHNEQUFEO0FBQ0ksYUFBSyxFQUFFVyxLQURYO0FBRUksaUJBQVMsRUFBRW9CLE9BQU8sQ0FBQzVCLElBRnZCO0FBR0ksZUFBTyxFQUFDLFdBSFo7QUFJSSxzQkFBYyxFQUFDLFNBSm5CO0FBS0ksaUJBQVMsRUFBQyxTQUxkO0FBTUksZ0JBQVEsRUFBRXlCLFlBTmQ7QUFBQSxnQ0FRSSxxRUFBQyxxREFBRDtBQUFLLGVBQUssRUFBQyxvQkFBWDtBQUFpQixlQUFLLEVBQUU7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSixlQVNJLHFFQUFDLHFEQUFEO0FBQUssZUFBSyxFQUFDLGNBQVg7QUFBZ0IsZUFBSyxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBZUtmLEtBQUssS0FBS21CLFNBQVYsR0FDR25CLEtBQUssQ0FBQ29CLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDaEIsMEJBQ0kscUVBQUMsdURBQUQ7QUFBTyxpQkFBUyxFQUFFLENBQWxCO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFSCxPQUFPLENBQUN6QixJQUF4QjtBQUFBLG9CQUErQjRCLElBQUksQ0FBQzVCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLG1CQUFTLEVBQUV5QixPQUFPLENBQUN2QixLQUF4QjtBQUFBLG9CQUFnQzBCLElBQUksQ0FBQzFCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFLLG1CQUFTLEVBQUV1QixPQUFPLENBQUN4QixPQUF4QjtBQUFBLG9CQUFrQzJCLElBQUksQ0FBQzNCO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFPSCxLQVJELENBREgsZ0JBV0c7QUFBQTtBQUFBLHFCQTFCUjtBQUFBLGtCQURKO0FBaUNILENBMUREOztHQUFNRSxLO1VBdUJjWCxTOzs7S0F2QmRXLEs7QUE0RFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkyM2EyN2RmNjkzYWZhZDc4MDExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gICAgUGFwZXIsXHJcbiAgICBUYWJzLFxyXG4gICAgVGFiLFxyXG4gICAgbWFrZVN0eWxlc1xyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHVybCBmcm9tICcuLi9zZXJ2ZXJjb25maWcnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0YWJXcmFwcGVyOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgdGFiczoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXHJcbiAgICB9LFxyXG4gICAgaWR4IDoge1xyXG5cclxuICAgIH0sXHJcbiAgICBuYW1lIDoge1xyXG5cclxuICAgIH0sXHJcbiAgICBhZGRyZXNzIDoge1xyXG5cclxuICAgIH0sXHJcbiAgICBwaG9uZSA6IHtcclxuXHJcbiAgICB9LFxyXG5cclxufSlcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0dmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbGlzdHMsIHNldExpc3RzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGAke3VybH1kZXYvbGlzdGAsIHtcclxuICAgICAgICAgICAgcGFyYW1zIDoge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGUgOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGFzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0cyhkYXRhcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW3ZhbHVlXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0dmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtjbGFzc2VzLnRhYldyYXBwZXJ9IHNxdWFyZT5cclxuICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJzfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmdWxsV2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwi64yA6riw7KSRXCIgdmFsdWU9ezB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIuyZhOujjFwiIHZhbHVlPXsxfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG5cclxuICAgICAgICAgICAge2xpc3RzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgbGlzdHMubWFwKChsaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYW1lfT57bGlzdC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGhvbmV9PntsaXN0LnBob25lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkcmVzc30+e2xpc3QuYWRkcmVzc308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICDrsLDri6wg66qp66Gd7J20IOyhtOyerO2VmOyngCDslYrsirXri4jri6QuXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9