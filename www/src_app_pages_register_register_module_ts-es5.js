(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_register_register_module_ts"], {
    /***/
    81557: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPageRoutingModule": function RegisterPageRoutingModule() {
          return (
            /* binding */
            _RegisterPageRoutingModule
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


      var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register.page */
      66690);

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
      }];

      var _RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      _RegisterPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegisterPageRoutingModule);
      /***/
    },

    /***/
    60207: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPageModule": function RegisterPageModule() {
          return (
            /* binding */
            _RegisterPageModule
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-routing.module */
      81557);
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.page */
      66690);

      var _RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      _RegisterPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
      })], _RegisterPageModule);
      /***/
    },

    /***/
    66690: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPage": function RegisterPage() {
          return (
            /* binding */
            _RegisterPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.page.html */
      12004);
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.page.scss */
      39917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/authentication.service */
      7053);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);

      var _RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(authService, router, formBuilder, alertController, afAuth) {
          _classCallCheck(this, RegisterPage);

          this.authService = authService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.alertController = alertController;
          this.afAuth = afAuth;
          this.isSubmitted = false;
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ionicForm = this.formBuilder.group({
              displayName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]]
            });
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.ionicForm.controls;
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.isSubmitted = true;

            if (!this.ionicForm.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              console.log(this.ionicForm.value);
            }
          }
        }, {
          key: "signUp",
          value: function signUp(email, password, displayName) {
            var _this = this;

            this.authService.registerUser(email.value, password.value).then(function (res) {
              _this.authService.setUserData(res.user, displayName.value);

              _this.authService.sendVerificationEmail();
            })["catch"](function (error) {
              var alert = _this.alertController.create({
                header: 'Sign up failed',
                message: error.message,
                buttons: ['OK']
              });
            });
          }
        }]);

        return RegisterPage;
      }();

      _RegisterPage.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth
        }];
      };

      _RegisterPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _RegisterPage);
      /***/
    },

    /***/
    12004: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"div-title\" style=\"margin-left: 40px\">\n    <ion-icon src=\"./assets/icon/mediumLogo.svg\" class=\"logo-medium\"></ion-icon>\n  </div>\n</ion-header>\n<ion-content>\n  <div class=\"div-center\" style=\"padding-bottom: 10%\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\" class=\"welcome-text\"> Create an account </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" style=\"display: flex; justify-content: center\"\n          ><ion-card style=\"border-radius: 40px; width: 80%\">\n            <ion-card-content>\n              <form\n                [formGroup]=\"ionicForm\"\n                (ngSubmit)=\"submitForm()\"\n                novalidate\n              >\n                <div class=\"item-content\">\n                  <ion-item class=\"input-field\">\n                    <ion-icon\n                      name=\"person-outline\"\n                      slot=\"end\"\n                      size=\"large\"\n                      style=\"color: rgba(255, 255, 255, 0.4)\"\n                    ></ion-icon>\n                    <ion-input\n                      placeholder=\"Display name\"\n                      formControlName=\"displayName\"\n                      type=\"text\"\n                      #displayName\n                      required\n                    ></ion-input>\n                  </ion-item>\n                  <span\n                    class=\"error ion-padding-vertical\"\n                    *ngIf=\"isSubmitted && errorControl.displayName.errors?.required\"\n                  >\n                    Name is required.\n                  </span>\n                  <span\n                    class=\"error ion-padding-vertical\"\n                    *ngIf=\"isSubmitted && errorControl.displayName.errors?.minlength\"\n                  >\n                    Name should be min 3 chars long.\n                  </span>\n                </div>\n                <div class=\"item-content\">\n                  <ion-item class=\"input-field\">\n                    <ion-icon\n                      name=\"mail-outline\"\n                      slot=\"end\"\n                      size=\"large\"\n                      style=\"color: rgba(255, 255, 255, 0.4)\"\n                    ></ion-icon>\n                    <ion-input\n                      placeholder=\"Email\"\n                      formControlName=\"email\"\n                      type=\"text\"\n                      #email\n                      required\n                    ></ion-input>\n                  </ion-item>\n                  <span\n                    class=\"error ion-padding-vertical\"\n                    *ngIf=\"isSubmitted && errorControl.email.errors?.required\"\n                  >\n                    Email is required.\n                  </span>\n                  <span\n                    class=\"error ion-padding-vertical\"\n                    *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\"\n                  >\n                    Please provide a valid email address.\n                  </span>\n                </div>\n                <div class=\"item-content\">\n                  <ion-item class=\"input-field\">\n                    <ion-icon\n                      src=\"./assets/icon/lockPassword.svg\"\n                      slot=\"end\"\n                      size=\"large\"\n                    ></ion-icon>\n                    <ion-input\n                      placeholder=\"Password\"\n                      formControlName=\"password\"\n                      type=\"text\"\n                      #password\n                      required\n                    ></ion-input>\n                  </ion-item>\n                  <span\n                    class=\"error ion-padding-vertical\"\n                    *ngIf=\"isSubmitted && errorControl.password.errors?.required\"\n                  >\n                    Password is required.\n                  </span>\n                  <span\n                    class=\"error ion-padding-vertical\"\n                    *ngIf=\"isSubmitted && errorControl.password.errors?.minlength\"\n                  >\n                    Password should be min 5 chars long.\n                  </span>\n                  <ion-row>\n                    <ion-col size=\"12\" class=\"div-center\" style=\"padding: 0px\"\n                      ><ion-button\n                        id=\"reg-button\"\n                        type=\"submit\"\n                        (click)=\"signUp(email, password, displayName)\"\n                        ><span class=\"button-text\">Create</span></ion-button\n                      ></ion-col\n                    >\n                  </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\" class=\"div-center\" style=\"padding: 0px\"\n                      ><ion-button\n                        id=\"google-button\"\n                        (click)=\"authService.googleAuth()\"\n                      >\n                        <ion-icon name=\"logo-google\" slot=\"start\"></ion-icon>\n                        <span class=\"button-text\"\n                          >Sign up with Google</span\n                        ></ion-button\n                      ></ion-col\n                    >\n                  </ion-row>\n                </div>\n              </form>\n            </ion-card-content>\n          </ion-card></ion-col\n        >\n      </ion-row>\n    </ion-grid>\n  </div></ion-content\n>\n";
      /***/
    },

    /***/
    39917: function _(module) {
      module.exports = ".div-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.div-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo-medium {\n  fill: #000000;\n  width: 338px;\n  height: 60px;\n  justify-content: center;\n  align-items: center;\n}\n\n.welcome-text {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  line-height: 47px;\n  letter-spacing: 0.5625px;\n  margin-bottom: 2%;\n  margin-top: 5%;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.button-text {\n  font-family: LatoBoldItalic;\n  color: rgba(246, 246, 246, 0.8);\n  font-size: 14px;\n  align-self: center;\n  justify-content: center;\n  text-transform: none;\n  text-transform: initial;\n}\n\n#reg-button {\n  --background: rgba(var(--ion-color-success-rgb), 0.7);\n  margin-top: 30px;\n  height: 50px;\n  width: 100%;\n  padding: 0px;\n  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  --border-radius: 10px;\n}\n\n#google-button {\n  --background: rgba(var(--ion-color-primary-rgb), 0.7);\n  margin-top: 30px;\n  height: 50px;\n  width: 100%;\n  padding: 0px;\n  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  --border-radius: 10px;\n}\n\n.item-content {\n  margin-top: 15px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 25px;\n}\n\n.input-field ion-input {\n  font-family: LatoBold;\n  font-size: 14px;\n  color: rgba(254, 254, 254, 0.8);\n}\n\nion-toolbar {\n  --background: --ion-background-color;\n}\n\nion-item {\n  border-radius: 10px;\n  --background: #484848;\n  --highlight-color-focused: #69c699;\n  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBRXJCOztBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUdyQjs7QUFEQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw0Q0FBNEM7QUFJOUM7O0FBREE7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG9CQUF1QjtFQUF2Qix1QkFBdUI7QUFJekI7O0FBRkE7RUFDRSxxREFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWiwrQ0FBK0M7RUFDL0MscUJBQWdCO0FBS2xCOztBQUZBO0VBQ0UscURBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0NBQStDO0VBQy9DLHFCQUFnQjtBQUtsQjs7QUFGQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUtyQjs7QUFIQTtFQUVJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsK0JBQStCO0FBS25DOztBQURBO0VBQ0Usb0NBQWE7QUFJZjs7QUFEQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBYTtFQUNiLGtDQUEwQjtFQUMxQiwrQ0FBK0M7QUFJakQiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRpdi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ28tbWVkaXVtIHtcbiAgZmlsbDogIzAwMDAwMDtcbiAgd2lkdGg6IDMzOHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndlbGNvbWUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvRXh0cmFCb2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IExhdG9Cb2xkSXRhbGljO1xuICBjb2xvcjogcmdiYSgyNDYsIDI0NiwgMjQ2LCAwLjgpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xufVxuI3JlZy1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiKSwgMC43KTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2hhZG93OiAxcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jZ29vZ2xlLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjcpO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJveC1zaGFkb3c6IDFweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pdGVtLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmlucHV0LWZpZWxkIHtcbiAgaW9uLWlucHV0IHtcbiAgICBmb250LWZhbWlseTogTGF0b0JvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NCwgMjU0LCAyNTQsIDAuOCk7XG4gIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IC0taW9uLWJhY2tncm91bmQtY29sb3I7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNDg0ODQ4O1xuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjNjljNjk5O1xuICBib3gtc2hhZG93OiAxcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_register_register_module_ts-es5.js.map