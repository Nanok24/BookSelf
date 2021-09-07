(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_login_login_module_ts"], {
    /***/
    73403: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageRoutingModule": function LoginPageRoutingModule() {
          return (
            /* binding */
            _LoginPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      3058);

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      _LoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginPageRoutingModule);
      /***/
    },

    /***/
    21053: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      73403);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page */
      3058);

      var _LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
      })], _LoginPageModule);
      /***/
    },

    /***/
    3058: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */
      57230);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      12032);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _capacitor_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/toast */
      68381);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/authentication.service */
      7053);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(authService, router) {
          _classCallCheck(this, LoginPage);

          this.authService = authService;
          this.router = router;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logIn",
          value: function logIn(email, password) {
            var _this = this;

            this.authService.login(email.value, password.value).then(function (res) {
              _this.authService.isEmailVerified.subscribe(function (emailVerified) {
                if (emailVerified) {
                  _this.router.navigate(['home']);
                }
              });
            })["catch"](function (error) {
              window.alert(error.message);
            });
          }
        }, {
          key: "recoverPassword",
          value: function recoverPassword(email) {
            this.authService.passwordRecover(email.value).then(function (res) {
              _capacitor_toast__WEBPACK_IMPORTED_MODULE_2__.Toast.show({
                text: 'Password reset email has been sent, please check your inbox!'
              });
            });
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _LoginPage);
      /***/
    },

    /***/
    57230: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"div-title\">\n    <ion-icon src=\"./assets/icon/mediumLogo.svg\" class=\"logo-medium\"></ion-icon>\n  </div>\n</ion-header>\n<ion-content>\n  <div class=\"div-center\" style=\"padding-bottom: 20%\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\" class=\"welcome-text\"> Welcome back! </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" style=\"display: flex; justify-content: center\"\n          ><ion-card style=\"border-radius: 40px; width: 80%\">\n            <ion-card-content>\n              <div class=\"item-content\">\n                <ion-item\n                  class=\"input-field\"\n                  style=\"\n                    border-radius: 10px;\n                    --background: #484848;\n                    --highlight-color-focused: #69c699;\n                    box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);\n                  \"\n                >\n                  <ion-icon\n                    name=\"mail-outline\"\n                    slot=\"end\"\n                    size=\"large\"\n                    style=\"color: rgba(255, 255, 255, 0.4)\"\n                  ></ion-icon>\n                  <ion-input placeholder=\"Email\" #email required></ion-input>\n                </ion-item>\n              </div>\n              <div class=\"item-content\">\n                <ion-item\n                  class=\"input-field\"\n                  style=\"\n                    border-radius: 10px;\n                    --background: #484848;\n                    --highlight-color-focused: #69c699;\n                    box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);\n                  \"\n                >\n                  <ion-icon\n                    src=\"./assets/icon/lockPassword.svg\"\n                    slot=\"end\"\n                    size=\"large\"\n                  ></ion-icon>\n                  <ion-input\n                    placeholder=\"Password\"\n                    type=\"password\"\n                    #password\n                    required\n                  ></ion-input>\n                </ion-item>\n                <ion-row>\n                  <ion-col size=\"12\" class=\"div-center\" style=\"padding: 0px\"\n                    ><ion-button id=\"reg-button\" (click)=\"logIn(email,password)\"\n                      ><span class=\"button-text\">Login</span></ion-button\n                    ></ion-col\n                  >\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\" class=\"div-center\" style=\"padding: 0px\"\n                    ><ion-button\n                      id=\"google-button\"\n                      (click)=\"authService.testGoogle()\"\n                    >\n                      <ion-icon name=\"logo-google\" slot=\"start\"></ion-icon>\n                      <span class=\"button-text\"\n                        >Continue with Google</span\n                      ></ion-button\n                    ></ion-col\n                  >\n                </ion-row>\n                <ion-row>\n                  <ion-col\n                    size=\"12\"\n                    class=\"ion-text-center button-text\"\n                    style=\"margin-top: 10px\"\n                    ><ion-item button (click)=\"recoverPassword(email)\">\n                      <ion-label class=\"button-text ion-text-center\"\n                        ><ion-text\n                          style=\"\n                            text-decoration: underline;\n                            color: rgba(var(--ion-color-warning-rgb), 0.8);\n                          \"\n                        >\n                          <h2 class=\"ion-text-wrap\">Forgot your password?</h2>\n                        </ion-text></ion-label\n                      >\n                    </ion-item>\n                    Complete your email and press the link\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-card-content>\n          </ion-card></ion-col\n        >\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    12032: function _(module) {
      module.exports = ".div-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 40px;\n}\n\n.div-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.logo-medium {\n  fill: #000000;\n  width: 338px;\n  height: 60px;\n  justify-content: center;\n  align-items: center;\n}\n\n.welcome-text {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  line-height: 47px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  margin-bottom: 2%;\n  margin-top: 5%;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.button-text {\n  font-family: LatoBoldItalic;\n  color: rgba(246, 246, 246, 0.8);\n  font-size: 14px;\n  align-self: center;\n  justify-content: center;\n  text-transform: none;\n  text-transform: initial;\n}\n\n#reg-button {\n  --background: rgba(var(--ion-color-success-rgb), 0.7);\n  margin-top: 30px;\n  height: 50px;\n  width: 100%;\n  padding: 0px;\n  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  --border-radius: 10px;\n}\n\n#google-button {\n  --background: rgba(var(--ion-color-primary-rgb), 0.7);\n  margin-top: 30px;\n  height: 50px;\n  width: 100%;\n  padding: 0px;\n  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  --border-radius: 10px;\n}\n\n.item-content {\n  margin-top: 15px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 25px;\n}\n\n.input-field ion-input {\n  font-family: LatoBold;\n  font-size: 14px;\n  color: rgba(254, 254, 254, 0.8);\n}\n\nion-toolbar {\n  --background: --ion-background-color;\n}\n\nion-content {\n  --offset-bottom: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFFZDs7QUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFHckI7O0FBREE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNENBQTRDO0FBSTlDOztBQURBO0VBQ0UsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixvQkFBdUI7RUFBdkIsdUJBQXVCO0FBSXpCOztBQUZBO0VBQ0UscURBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0NBQStDO0VBQy9DLHFCQUFnQjtBQUtsQjs7QUFGQTtFQUNFLHFEQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLCtDQUErQztFQUMvQyxxQkFBZ0I7QUFLbEI7O0FBRkE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFLckI7O0FBSEE7RUFFSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLCtCQUErQjtBQUtuQzs7QUFGQTtFQUNFLG9DQUFhO0FBS2Y7O0FBRkE7RUFDRSw2QkFBZ0I7QUFLbEIiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5kaXYtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5sb2dvLW1lZGl1bSB7XG4gIGZpbGw6ICMwMDAwMDA7XG4gIHdpZHRoOiAzMzhweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53ZWxjb21lLXRleHQge1xuICBmb250LWZhbWlseTogTGF0b0V4dHJhQm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5idXR0b24tdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvQm9sZEl0YWxpYztcbiAgY29sb3I6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbn1cbiNyZWctYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiksIDAuNyk7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm94LXNoYWRvdzogMXB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2dvb2dsZS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC43KTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2hhZG93OiAxcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaXRlbS1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5pbnB1dC1maWVsZCB7XG4gIGlvbi1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IExhdG9Cb2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmdiYSgyNTQsIDI1NCwgMjU0LCAwLjgpO1xuICB9XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogLS1pb24tYmFja2dyb3VuZC1jb2xvcjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW9mZnNldC1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_login_login_module_ts-es5.js.map