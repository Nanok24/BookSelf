(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
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


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      17500);

      var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
        return (0, _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.redirectUnauthorizedTo)(['login']);
      };

      var redirectLoggedInToHome = function redirectLoggedInToHome() {
        return (0, _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.redirectLoggedInTo)(['home']);
      };

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_loader_loader_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/loader/loader.module */
          38487)).then(function (m) {
            return m.LoaderPageModule;
          });
        }
      }, {
        path: 'landing',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_landing_landing_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/landing/landing.module */
          97241)).then(function (m) {
            return m.LandingPageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectLoggedInToHome
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/login/login.module */
          21053)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/register/register.module */
          60207)).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/home/home.module */
          57994)).then(function (m) {
            return m.HomePageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin
        }
      }, {
        path: 'verify-email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_verify-email_verify-email_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/verify-email/verify-email.module */
          28736)).then(function (m) {
            return m.VerifyEmailPageModule;
          });
        }
      }, {
        path: 'review-modal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/review-modal/review-modal.module */
          25683)).then(function (m) {
            return m.ReviewModalPageModule;
          });
        }
      }, {
        path: 'book-search',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_book-search_book-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/book-search/book-search.module */
          69470)).then(function (m) {
            return m.BookSearchPageModule;
          });
        }
      }, {
        path: 'user-search',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_user-search_user-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/user-search/user-search.module */
          51618)).then(function (m) {
            return m.UserSearchPageModule;
          });
        }
      }, {
        path: 'review-search',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_review-search_review-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/review-search/review-search.module */
          169)).then(function (m) {
            return m.ReviewSearchPageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */
      75158);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      53040);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      _AppComponent.ctorParameters = function () {
        return [];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AppComponent);
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire */
      18690);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/authentication.service */
      7053);
      /* harmony import */


      var _pages_review_modal_review_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/review-modal/review-modal.module */
      25683);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot({
          mode: 'md'
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_fire__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig, 'BookSelf'), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestoreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _pages_review_modal_review_modal_module__WEBPACK_IMPORTED_MODULE_4__.ReviewModalPageModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot()],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy
        }, _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    32821: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReviewModalPageRoutingModule": function ReviewModalPageRoutingModule() {
          return (
            /* binding */
            _ReviewModalPageRoutingModule
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


      var _review_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./review-modal.page */
      86875);

      var routes = [{
        path: '',
        component: _review_modal_page__WEBPACK_IMPORTED_MODULE_0__.ReviewModalPage
      }];

      var _ReviewModalPageRoutingModule = function ReviewModalPageRoutingModule() {
        _classCallCheck(this, ReviewModalPageRoutingModule);
      };

      _ReviewModalPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ReviewModalPageRoutingModule);
      /***/
    },

    /***/
    25683: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReviewModalPageModule": function ReviewModalPageModule() {
          return (
            /* binding */
            _ReviewModalPageModule
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


      var _review_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./review-modal-routing.module */
      32821);
      /* harmony import */


      var _review_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./review-modal.page */
      86875);

      var _ReviewModalPageModule = function ReviewModalPageModule() {
        _classCallCheck(this, ReviewModalPageModule);
      };

      _ReviewModalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _review_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewModalPageRoutingModule],
        declarations: [_review_modal_page__WEBPACK_IMPORTED_MODULE_1__.ReviewModalPage]
      })], _ReviewModalPageModule);
      /***/
    },

    /***/
    86875: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReviewModalPage": function ReviewModalPage() {
          return (
            /* binding */
            _ReviewModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_review_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./review-modal.page.html */
      53670);
      /* harmony import */


      var _review_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./review-modal.page.scss */
      73011);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _capacitor_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/toast */
      68381);

      var _ReviewModalPage = /*#__PURE__*/function () {
        function ReviewModalPage(navParams, modalController, angularFirestore) {
          _classCallCheck(this, ReviewModalPage);

          this.navParams = navParams;
          this.modalController = modalController;
          this.angularFirestore = angularFirestore;
        }

        _createClass(ReviewModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.bookTitle = this.navParams.get("bookTitle");
            this.bookAuthors = this.navParams.get("bookAuthors");
            this.userId = this.navParams.get("userId");
            this.bookId = this.navParams.get("bookId");
            this.cover = this.navParams.get("cover");
            this.title = this.navParams.get("title");
          }
        }, {
          key: "changeRating",
          value: function changeRating(rating) {
            this.rating = parseFloat(rating.target.value);
          }
        }, {
          key: "changeDescription",
          value: function changeDescription(description) {
            this.description = description.target.value;
          } // closeModal() {
          //   const close = "Modal Removed";
          //   this.modalController.dismiss(close).then(() => {});
          //   this.angularFirestore
          //     .collection("stars")
          //     .add({
          //       title: this.bookTitle,
          //       rating: this.rating,
          //       text: this.description,
          //       userId: this.userId,
          //       bookId: this.bookId,
          //       cover: this.cover,
          //       bookAuthors: this.bookAuthors,
          //     })
          //     .then(() => {})
          //     .catch((error) => console.log(error));
          //   Toast.show({
          //     text: "Review was created successfully!",
          //   });
          // }

        }, {
          key: "closeModal",
          value: function closeModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var close;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      close = "Modal Removed";
                      _context.next = 3;
                      return this.modalController.dismiss(close);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "save",
          value: function save() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.angularFirestore.collection("stars").add({
                        title: this.bookTitle,
                        rating: this.rating,
                        text: this.description,
                        userId: this.userId,
                        bookId: this.bookId,
                        cover: this.cover,
                        bookAuthors: this.bookAuthors
                      }).then(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var close;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  close = "Modal Removed";

                                  _capacitor_toast__WEBPACK_IMPORTED_MODULE_2__.Toast.show({
                                    text: "Review was created successfully!"
                                  });

                                  _context2.next = 4;
                                  return this.modalController.dismiss(close);

                                case 4:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      })["catch"](function (err) {
                        return console.log(err);
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ReviewModalPage;
      }();

      _ReviewModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
        }];
      };

      _ReviewModalPage.propDecorators = {
        bookTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
        }]
      };
      _ReviewModalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-review-modal",
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_review_modal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_review_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ReviewModalPage);
      /***/
    },

    /***/
    7053: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationService": function AuthenticationService() {
          return (
            /* binding */
            _AuthenticationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/app */
      77199);
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/auth */
      77258);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);

      var _AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(afAuth, afStore, router, ngZone) {
          var _this2 = this;

          _classCallCheck(this, AuthenticationService);

          this.afAuth = afAuth;
          this.afStore = afStore;
          this.router = router;
          this.ngZone = ngZone;
          this.isEmailVerified = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this2.userData = user;
              localStorage.setItem("user", JSON.stringify(_this2.userData));

              _this2.isEmailVerified.next(user.emailVerified);

              _this2.afStore.collection("users").snapshotChanges().subscribe(function (reviews) {
                _this2.currentUserDisplayName = reviews.map(function (t) {
                  return Object.assign({
                    id: t.payload.doc.id
                  }, t.payload.doc.data());
                }).filter(function (t) {
                  return t.uid === user.uid;
                })[0].displayName;
                localStorage.setItem("currentUserDisplayName", _this2.currentUserDisplayName);
              });
            }
          });
        }

        _createClass(AuthenticationService, [{
          key: "login",
          value: function login(email, password) {
            return this.afAuth.signInWithEmailAndPassword(email, password);
          }
        }, {
          key: "registerUser",
          value: function registerUser(email, password) {
            return this.afAuth.createUserWithEmailAndPassword(email, password);
          }
        }, {
          key: "sendVerificationEmail",
          value: function sendVerificationEmail() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.afAuth.currentUser;

                    case 2:
                      _context4.next = 4;
                      return _context4.sent.sendEmailVerification().then(function () {
                        _this3.router.navigate(["verify-email"]);
                      });

                    case 4:
                      return _context4.abrupt("return", _context4.sent);

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "passwordRecover",
          value: function passwordRecover(passwordResetEmail) {
            return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(function () {
              window.alert("Password reset email has been sent, please check your inbox.");
            })["catch"](function (error) {
              window.alert(error);
            });
          }
        }, {
          key: "isLoggedIn",
          get: function get() {
            var user = JSON.parse(localStorage.getItem("user"));
            if (user === null || user === undefined) return false;
          } // get isEmailVerified(): boolean {
          //   const user = JSON.parse(localStorage.getItem('user'));
          //   return user.emailVerified !== false;
          // }

        }, {
          key: "setUserData",
          value: function setUserData(user, displayName) {
            var userRef = this.afStore.doc("users/".concat(user.uid));

            if (displayName) {
              var userData = {
                uid: user.uid,
                email: user.email,
                displayName: displayName
              };
              return userRef.set(userData, {
                merge: true
              });
            } else {
              var _userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName
              };
              return userRef.set(_userData, {
                merge: true
              });
            }
          }
        }, {
          key: "authLogin",
          value: function authLogin(provider) {
            var _this4 = this;

            return this.afAuth.signInWithPopup(provider).then(function (result) {
              _this4.ngZone.run(function () {
                _this4.router.navigate(["home"]);
              });

              _this4.setUserData(result.user, result.user.displayName);
            })["catch"](function (error) {
              window.alert(error);
            });
          }
        }, {
          key: "googleAuth",
          value: function googleAuth() {
            return this.authLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider());
          }
        }, {
          key: "testGoogle",
          value: function testGoogle() {
            this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider());
          } // async googleSignIn() {
          //   let googleUser = await GoogleAuth.signIn();
          //   const credential = firebase.auth.GoogleAuthProvider.credential(
          //     googleUser.authentication.idToken
          //   );
          //   return this.afAuth.signInAndRetrieveDataWithCredential(credential);
          // }

        }, {
          key: "signOut",
          value: function signOut() {
            var _this5 = this;

            return this.afAuth.signOut().then(function () {
              localStorage.clear();

              _this5.router.navigate(["login"]);
            });
          }
        }]);

        return AuthenticationService;
      }();

      _AuthenticationService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
        }];
      };

      _AuthenticationService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: "root"
      })], _AuthenticationService);
      /***/
    },

    /***/
    92340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        firebaseConfig: {
          apiKey: 'AIzaSyAlq_FKQRuTd_XhRjB0f2CnipX3BTjxXvY',
          authDomain: 'bookself-dabc8.firebaseapp.com',
          projectId: 'bookself-dabc8',
          storageBucket: 'bookself-dabc8.appspot.com',
          messagingSenderId: '801454611323',
          appId: '1:801454611323:web:1860777a1228ba2649bbde',
          measurementId: 'G-7Q8BQPH921'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      61882);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863: function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [90733, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [20985, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [93899, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [5121, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [52960, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [45473, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [19787, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66165, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [69569, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [35119, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [90799, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68918, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [94028, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [98107, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [72178, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [42868, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [18706, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [12099, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [84868, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [54377, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [15678, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [16735, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [87686, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [48555, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [30568, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [6231, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [45772, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [14977, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [42886, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [54990, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [13810, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [2446, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [47619, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [28393, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [56281, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [35932, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [57970, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [80298, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [71006, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [74783, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [62749, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [55404, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [39043, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    75158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    53670: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Write a review</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\" class=\"button-text\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"div-center\">\n    <ion-list style=\"height: 100%; width: 100%\" lines=\"none\">\n      <ion-item>\n        <ion-label class=\"ion-text-center book-title\">{{title}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"label-text\" style=\"margin-top: 3px\"\n          >Rating:</ion-label\n        >\n        <ion-input\n          type=\"text\"\n          class=\"review-text\"\n          (ionChange)=\"changeRating($event)\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"ion-text-center label-text\" style=\"width: 100%\">\n          How was the book?\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-textarea\n          maxLength=\"500\"\n          autoGrow=\"true\"\n          class=\"review-text ion-text-wrap\"\n          placeholder=\"You can write your opinion on the book here\"\n          (ionChange)=\"changeDescription($event)\"\n        >\n        </ion-textarea>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style=\"--background: rgba(var(--ion-color-success-rgb), 0.7)\">\n    <ion-button expand=\"block\" fill=\"clear\" shape=\"round\" (click)=\"save()\">\n      <span class=\"button-text\">Save review</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    53040: function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    73011: function _(module) {
      "use strict";

      module.exports = "ion-toolbar {\n  --background: rgba(var(--ion-color-primary-rgb), 0.8);\n}\n\nion-title {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n}\n\n.button-text {\n  font-family: Lato;\n  font-size: 20px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.div-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.review-text {\n  font-family: LatoBold;\n  color: white;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  padding-bottom: 10px;\n  white-space: normal;\n}\n\n.book-title {\n  margin-bottom: 0px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 30px;\n  line-height: 30px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.label-text {\n  font-family: LatoBold !important;\n  color: rgba(255, 255, 255, 0.8) !important;\n  font-size: 20px !important;\n  letter-spacing: 0.5625px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxREFBYTtBQUNmOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QywrQkFBK0I7RUFDL0IsV0FBVztBQUViOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QywrQkFBK0I7RUFDL0IsV0FBVztFQUNYLG9CQUF1QjtFQUF2Qix1QkFBdUI7QUFFekI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBRWQ7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBNkI7RUFDN0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUVyQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsWUFBNkI7RUFDN0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFFbEI7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsMENBQTBDO0VBQzFDLDBCQUEwQjtFQUMxQix3QkFBd0I7QUFFMUIiLCJmaWxlIjoicmV2aWV3LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuOCk7XG59XG5pb24tdGl0bGUge1xuICBmb250LWZhbWlseTogTGF0b0V4dHJhQm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uLXRleHQge1xuICBmb250LWZhbWlseTogTGF0bztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbn1cblxuLmRpdi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmV2aWV3LXRleHQge1xuICBmb250LWZhbWlseTogTGF0b0JvbGQ7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uYm9vay10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1mYW1pbHk6IExhdG9Cb2xkSXRhbGljO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5sYWJlbC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IExhdG9Cb2xkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcbn1cbiJdfQ== */";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map