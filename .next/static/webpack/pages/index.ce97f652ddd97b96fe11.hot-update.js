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
        className: classes.listWrapper,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0YWJXcmFwcGVyIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJsaXN0V3JhcHBlciIsIm1hcmdpblRvcCIsInRhYnMiLCJkaXNwbGF5IiwibmFtZSIsImFkZHJlc3MiLCJwaG9uZSIsIkluZGV4IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldHZhbHVlIiwibGlzdHMiLCJzZXRMaXN0cyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidXJsIiwicGFyYW1zIiwiY29tcGxldGUiLCJ0aGVuIiwiZGF0YXMiLCJkYXRhIiwibWVzc2FnZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJjbGFzc2VzIiwidW5kZWZpbmVkIiwibWFwIiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUN6QkMsWUFBVSxFQUFFO0FBQ1JDLFNBQUssRUFBRSxNQURDO0FBRVJDLGFBQVMsRUFBRTtBQUZILEdBRGE7QUFLekJDLGFBQVcsRUFBRztBQUNWQyxhQUFTLEVBQUc7QUFERixHQUxXO0FBUXpCQyxNQUFJLEVBQUU7QUFDRkMsV0FBTyxFQUFFO0FBRFAsR0FSbUI7QUFXekJDLE1BQUksRUFBRyxFQVhrQjtBQWN6QkMsU0FBTyxFQUFHLEVBZGU7QUFpQnpCQyxPQUFLLEVBQUc7QUFqQmlCLENBQUQsQ0FBNUI7O0FBdUJBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFFVUMsc0RBQVEsQ0FBQyxDQUFELENBRmxCO0FBQUEsTUFFVEMsS0FGUztBQUFBLE1BRUZDLFFBRkU7O0FBQUEsbUJBR1VGLHNEQUFRLEVBSGxCO0FBQUEsTUFHVEcsS0FIUztBQUFBLE1BR0ZDLFFBSEU7O0FBTWhCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZ0RBQUssQ0FBQ0MsR0FBTixXQUFhQyxxREFBYixlQUE0QjtBQUN4QkMsWUFBTSxFQUFHO0FBQ0xDLGdCQUFRLEVBQUdUO0FBRE47QUFEZSxLQUE1QixFQUtLVSxJQUxMLENBS1UsVUFBQ0MsS0FBRCxFQUFXO0FBQ2JSLGNBQVEsQ0FBQ1EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLE9BQVosQ0FBUjtBQUNILEtBUEwsV0FRVyxVQUFDQyxHQUFELEVBQVM7QUFDWkMsYUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDSCxLQVZMO0FBV0gsR0FaUSxFQVlOLENBQUNkLEtBQUQsQ0FaTSxDQUFUOztBQWNBLE1BQU1pQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDdENsQixZQUFRLENBQUNrQixRQUFELENBQVI7QUFDSCxHQUZEOztBQUdBLE1BQU1DLE9BQU8sR0FBR2xDLFNBQVMsRUFBekI7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHVEQUFEO0FBQU8sZUFBUyxFQUFFLENBQWxCO0FBQXFCLGVBQVMsRUFBRWtDLE9BQU8sQ0FBQ2hDLFVBQXhDO0FBQW9ELFlBQU0sTUFBMUQ7QUFBQSw2QkFDSSxxRUFBQyxzREFBRDtBQUNJLGFBQUssRUFBRVksS0FEWDtBQUVJLGlCQUFTLEVBQUVvQixPQUFPLENBQUMzQixJQUZ2QjtBQUdJLGVBQU8sRUFBQyxXQUhaO0FBSUksc0JBQWMsRUFBQyxTQUpuQjtBQUtJLGlCQUFTLEVBQUMsU0FMZDtBQU1JLGdCQUFRLEVBQUV3QixZQU5kO0FBQUEsZ0NBUUkscUVBQUMscURBQUQ7QUFBSyxlQUFLLEVBQUMsb0JBQVg7QUFBaUIsZUFBSyxFQUFFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFTSSxxRUFBQyxxREFBRDtBQUFLLGVBQUssRUFBQyxjQUFYO0FBQWdCLGVBQUssRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQWVLZixLQUFLLEtBQUttQixTQUFWLEdBQ0duQixLQUFLLENBQUNvQixHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hCLDBCQUNJLHFFQUFDLHVEQUFEO0FBQU8saUJBQVMsRUFBRSxDQUFsQjtBQUFxQixpQkFBUyxFQUFFSCxPQUFPLENBQUM3QixXQUF4QztBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRTZCLE9BQU8sQ0FBQ3pCLElBQXhCO0FBQUEsb0JBQStCNEIsSUFBSSxDQUFDNUI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUssbUJBQVMsRUFBRXlCLE9BQU8sQ0FBQ3ZCLEtBQXhCO0FBQUEsb0JBQWdDMEIsSUFBSSxDQUFDMUI7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUssbUJBQVMsRUFBRXVCLE9BQU8sQ0FBQ3hCLE9BQXhCO0FBQUEsb0JBQWtDMkIsSUFBSSxDQUFDM0I7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU9ILEtBUkQsQ0FESCxnQkFXRztBQUFBO0FBQUEscUJBMUJSO0FBQUEsa0JBREo7QUFpQ0gsQ0ExREQ7O0dBQU1FLEs7VUF1QmNaLFM7OztLQXZCZFksSztBQTREU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2U5N2Y2NTJkZGQ5N2I5NmZlMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgICBQYXBlcixcclxuICAgIFRhYnMsXHJcbiAgICBUYWIsXHJcbiAgICBtYWtlU3R5bGVzXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgdXJsIGZyb20gJy4uL3NlcnZlcmNvbmZpZyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRhYldyYXBwZXI6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBsaXN0V3JhcHBlciA6IHtcclxuICAgICAgICBtYXJnaW5Ub3AgOiAnNXB4J1xyXG4gICAgfSxcclxuICAgIHRhYnM6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xyXG4gICAgfSxcclxuICAgIG5hbWUgOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgYWRkcmVzcyA6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgcGhvbmUgOiB7XHJcblxyXG4gICAgfSxcclxuXHJcbn0pXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldHZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xpc3RzLCBzZXRMaXN0c10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgJHt1cmx9ZGV2L2xpc3RgLCB7XHJcbiAgICAgICAgICAgIHBhcmFtcyA6IHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlIDogdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TGlzdHMoZGF0YXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFt2YWx1ZV0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldHZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJXcmFwcGVyfSBzcXVhcmU+XHJcbiAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGFic31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZnVsbFdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIuuMgOq4sOykkVwiIHZhbHVlPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCLsmYTro4xcIiB2YWx1ZT17MX0gLz5cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuXHJcbiAgICAgICAgICAgIHtsaXN0cyAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgIGxpc3RzLm1hcCgobGlzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0V3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYW1lfT57bGlzdC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGhvbmV9PntsaXN0LnBob25lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkcmVzc30+e2xpc3QuYWRkcmVzc308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICDrsLDri6wg66qp66Gd7J20IOyhtOyerO2VmOyngCDslYrsirXri4jri6QuXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9