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
      console.log(datas);
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
          lineNumber: 72,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
          label: "\uC644\uB8CC",
          value: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
          lineNumber: 81,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.phone,
          children: list.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.address,
          children: list.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0YWJXcmFwcGVyIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJsaXN0V3JhcHBlciIsIm1hcmdpblRvcCIsInRhYnMiLCJkaXNwbGF5IiwibmFtZSIsImFkZHJlc3MiLCJwaG9uZSIsIkluZGV4IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldHZhbHVlIiwibGlzdHMiLCJzZXRMaXN0cyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidXJsIiwicGFyYW1zIiwiY29tcGxldGUiLCJ0aGVuIiwiZGF0YXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJlcnIiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJjbGFzc2VzIiwidW5kZWZpbmVkIiwibWFwIiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUN6QkMsWUFBVSxFQUFFO0FBQ1JDLFNBQUssRUFBRSxNQURDO0FBRVJDLGFBQVMsRUFBRTtBQUZILEdBRGE7QUFLekJDLGFBQVcsRUFBRztBQUNWQyxhQUFTLEVBQUc7QUFERixHQUxXO0FBUXpCQyxNQUFJLEVBQUU7QUFDRkMsV0FBTyxFQUFFO0FBRFAsR0FSbUI7QUFXekJDLE1BQUksRUFBRyxFQVhrQjtBQWN6QkMsU0FBTyxFQUFHLEVBZGU7QUFpQnpCQyxPQUFLLEVBQUc7QUFqQmlCLENBQUQsQ0FBNUI7O0FBdUJBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFFVUMsc0RBQVEsQ0FBQyxDQUFELENBRmxCO0FBQUEsTUFFVEMsS0FGUztBQUFBLE1BRUZDLFFBRkU7O0FBQUEsbUJBR1VGLHNEQUFRLEVBSGxCO0FBQUEsTUFHVEcsS0FIUztBQUFBLE1BR0ZDLFFBSEU7O0FBTWhCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZ0RBQUssQ0FBQ0MsR0FBTixXQUFhQyxxREFBYixlQUE0QjtBQUN4QkMsWUFBTSxFQUFHO0FBQ0xDLGdCQUFRLEVBQUdUO0FBRE47QUFEZSxLQUE1QixFQUtLVSxJQUxMLENBS1UsVUFBQ0MsS0FBRCxFQUFXO0FBQ2JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0FSLGNBQVEsQ0FBQ1EsS0FBSyxDQUFDRyxJQUFOLENBQVdDLE9BQVosQ0FBUjtBQUNILEtBUkwsV0FTVyxVQUFDQyxHQUFELEVBQVM7QUFDWkosYUFBTyxDQUFDSyxLQUFSLENBQWNELEdBQWQ7QUFDSCxLQVhMO0FBWUgsR0FiUSxFQWFOLENBQUNoQixLQUFELENBYk0sQ0FBVDs7QUFlQSxNQUFNa0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3RDbkIsWUFBUSxDQUFDbUIsUUFBRCxDQUFSO0FBQ0gsR0FGRDs7QUFHQSxNQUFNQyxPQUFPLEdBQUduQyxTQUFTLEVBQXpCO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyx1REFBRDtBQUFPLGVBQVMsRUFBRSxDQUFsQjtBQUFxQixlQUFTLEVBQUVtQyxPQUFPLENBQUNqQyxVQUF4QztBQUFvRCxZQUFNLE1BQTFEO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFDSSxhQUFLLEVBQUVZLEtBRFg7QUFFSSxpQkFBUyxFQUFFcUIsT0FBTyxDQUFDNUIsSUFGdkI7QUFHSSxlQUFPLEVBQUMsV0FIWjtBQUlJLHNCQUFjLEVBQUMsU0FKbkI7QUFLSSxpQkFBUyxFQUFDLFNBTGQ7QUFNSSxnQkFBUSxFQUFFeUIsWUFOZDtBQUFBLGdDQVFJLHFFQUFDLHFEQUFEO0FBQUssZUFBSyxFQUFDLG9CQUFYO0FBQWlCLGVBQUssRUFBRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKLGVBU0kscUVBQUMscURBQUQ7QUFBSyxlQUFLLEVBQUMsY0FBWDtBQUFnQixlQUFLLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFlS2hCLEtBQUssS0FBS29CLFNBQVYsR0FDR3BCLEtBQUssQ0FBQ3FCLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDaEIsMEJBQ0kscUVBQUMsdURBQUQ7QUFBTyxpQkFBUyxFQUFFLENBQWxCO0FBQXFCLGlCQUFTLEVBQUVILE9BQU8sQ0FBQzlCLFdBQXhDO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFOEIsT0FBTyxDQUFDMUIsSUFBeEI7QUFBQSxvQkFBK0I2QixJQUFJLENBQUM3QjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBSyxtQkFBUyxFQUFFMEIsT0FBTyxDQUFDeEIsS0FBeEI7QUFBQSxvQkFBZ0MyQixJQUFJLENBQUMzQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBSyxtQkFBUyxFQUFFd0IsT0FBTyxDQUFDekIsT0FBeEI7QUFBQSxvQkFBa0M0QixJQUFJLENBQUM1QjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBT0gsS0FSRCxDQURILGdCQVdHO0FBQUE7QUFBQSxxQkExQlI7QUFBQSxrQkFESjtBQWlDSCxDQTNERDs7R0FBTUUsSztVQXdCY1osUzs7O0tBeEJkWSxLO0FBNkRTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YTVkOGU2NTdiMWFjMWNjOTIyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICAgIFBhcGVyLFxyXG4gICAgVGFicyxcclxuICAgIFRhYixcclxuICAgIG1ha2VTdHlsZXNcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB1cmwgZnJvbSAnLi4vc2VydmVyY29uZmlnJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGFiV3JhcHBlcjoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIGxpc3RXcmFwcGVyIDoge1xyXG4gICAgICAgIG1hcmdpblRvcCA6ICc1cHgnXHJcbiAgICB9LFxyXG4gICAgdGFiczoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXHJcbiAgICB9LFxyXG4gICAgbmFtZSA6IHtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBhZGRyZXNzIDoge1xyXG5cclxuICAgIH0sXHJcbiAgICBwaG9uZSA6IHtcclxuXHJcbiAgICB9LFxyXG5cclxufSlcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0dmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbGlzdHMsIHNldExpc3RzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGAke3VybH1kZXYvbGlzdGAsIHtcclxuICAgICAgICAgICAgcGFyYW1zIDoge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGUgOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGFzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhcyk7XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0cyhkYXRhcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW3ZhbHVlXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0dmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtjbGFzc2VzLnRhYldyYXBwZXJ9IHNxdWFyZT5cclxuICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJzfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmdWxsV2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwi64yA6riw7KSRXCIgdmFsdWU9ezB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIuyZhOujjFwiIHZhbHVlPXsxfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG5cclxuICAgICAgICAgICAge2xpc3RzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgbGlzdHMubWFwKChsaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hbWV9PntsaXN0Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5waG9uZX0+e2xpc3QucGhvbmV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRyZXNzfT57bGlzdC5hZGRyZXNzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIOuwsOuLrCDrqqnroZ3snbQg7KG07J6s7ZWY7KeAIOyViuyKteuLiOuLpC5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=