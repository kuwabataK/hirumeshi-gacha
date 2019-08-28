webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store/AuthStore.ts":
/*!****************************!*\
  !*** ./store/AuthStore.ts ***!
  \****************************/
/*! exports provided: AuthStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStore", function() { return AuthStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.ts");









var _class, _descriptor, _descriptor2, _temp;



var AuthStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function AuthStore() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AuthStore);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "user", _descriptor, this);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "loginStatus", _descriptor2, this);

    this.checkLoginStatus();
  }
  /**
   * ログインユーザー
   */


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AuthStore, [{
    key: "login",

    /**
     * googleのアカウントでログインする
     */
    value: function () {
      var _login = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var provider;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.checkLoginStatus();
                this.loginStatus = 'loading';
                provider = new _utils_firebase__WEBPACK_IMPORTED_MODULE_9__["default"].auth.GoogleAuthProvider();
                _context.next = 5;
                return _utils_firebase__WEBPACK_IMPORTED_MODULE_9__["default"].auth().signInWithRedirect(provider);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }()
    /**
     * ログアウトする
     */

  }, {
    key: "logout",
    value: function () {
      var _logout = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.checkLoginStatus();
                this.loginStatus = 'loading';
                _context2.next = 4;
                return _utils_firebase__WEBPACK_IMPORTED_MODULE_9__["default"].auth().signOut();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function logout() {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
    /**
     * firebaseのログイン状態に応じてログインユーザーを変更する
     * 
     * @param user 設定するユーザー
     */

  }, {
    key: "setUser",
    value: function setUser(user) {
      this.user = user;

      if (user) {
        this.loginStatus = 'login';
      } else {
        this.loginStatus = 'logout';
      }
    }
    /**
     * ログイン状態の変更を監視するObserverをセット
     */

  }, {
    key: "checkLoginStatus",
    value: function checkLoginStatus() {
      var _this = this;

      _utils_firebase__WEBPACK_IMPORTED_MODULE_9__["default"].auth().onAuthStateChanged(function (user) {
        _this.setUser(user);
      });
    }
  }]);

  return AuthStore;
}(), _temp), (_descriptor = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "user", [mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "loginStatus", [mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'loading';
  }
}), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "login", [mobx__WEBPACK_IMPORTED_MODULE_8__["action"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "login"), _class.prototype), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "logout", [mobx__WEBPACK_IMPORTED_MODULE_8__["action"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "logout"), _class.prototype), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "setUser", [mobx__WEBPACK_IMPORTED_MODULE_8__["action"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "setUser"), _class.prototype)), _class);

/***/ })

})
//# sourceMappingURL=index.js.a7ddf759e991d128dc21.hot-update.js.map