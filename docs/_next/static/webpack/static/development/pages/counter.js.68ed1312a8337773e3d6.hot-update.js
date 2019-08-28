webpackHotUpdate("static/development/pages/counter.js",{

/***/ "./components/organisms/ButtonAppBar.tsx":
/*!***********************************************!*\
  !*** ./components/organisms/ButtonAppBar.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/store */ "./store/store.ts");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
var _jsxFileName = "/Users/kuwaharasouba/Documents/GitHub/hirumeshi-gacha/components/organisms/ButtonAppBar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









/**
 * ヘッダーに表示するログインボタン
 * 
 * @param props 
 */

var LoginButton = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["observer"])(function () {
  var login = function login() {
    _store_store__WEBPACK_IMPORTED_MODULE_8__["default"].authStore.login();
  };

  var logout = function logout() {
    _store_store__WEBPACK_IMPORTED_MODULE_8__["default"].authStore.logout();
  };

  if (_store_store__WEBPACK_IMPORTED_MODULE_8__["default"].authStore.loginStatus === 'login') {
    return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "inherit",
      onClick: logout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, _store_store__WEBPACK_IMPORTED_MODULE_8__["default"].authStore.user && _store_store__WEBPACK_IMPORTED_MODULE_8__["default"].authStore.user.displayName);
  } else if (_store_store__WEBPACK_IMPORTED_MODULE_8__["default"].authStore.loginStatus === 'loading') {
    return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Now Loading...");
  }

  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit",
    onClick: login,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Login");
});
/**
 * material uiで利用するスタイル
 */

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  };
});
/**
 * ヘッダーに常に表示するAppBar
 */

var ButtonAppBar = function ButtonAppBar() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "#f44336",
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "News"), __jsx(LoginButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonAppBar);

/***/ })

})
//# sourceMappingURL=counter.js.68ed1312a8337773e3d6.hot-update.js.map