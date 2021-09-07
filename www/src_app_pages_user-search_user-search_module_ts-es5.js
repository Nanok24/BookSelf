(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_user-search_user-search_module_ts"], {
    /***/
    80933: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserSearchBookListComponent": function UserSearchBookListComponent() {
          return (
            /* binding */
            _UserSearchBookListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_search_book_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-search-book-list.component.html */
      83585);
      /* harmony import */


      var _user_search_book_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-search-book-list.component.scss */
      71677);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/authentication.service */
      7053);

      var _UserSearchBookListComponent = /*#__PURE__*/function () {
        function UserSearchBookListComponent(authService, navParams, angularFirestore, router, navCtrl, modalController) {
          _classCallCheck(this, UserSearchBookListComponent);

          this.authService = authService;
          this.navParams = navParams;
          this.angularFirestore = angularFirestore;
          this.router = router;
          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.bookShelfId = this.navParams.get('bookshelfId');
          this.title = this.navParams.get('title');
        }

        _createClass(UserSearchBookListComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.displayName = localStorage.getItem('currentUserDisplayName');
            this.angularFirestore.collection('books').snapshotChanges().subscribe(function (books) {
              _this.books = books.map(function (t) {
                return Object.assign({
                  id: t.payload.doc.id
                }, t.payload.doc.data());
              }).filter(function (t) {
                return t.bookShelfId === _this.bookShelfId;
              });
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.navCtrl.navigateRoot('/login');

                    case 2:
                      _context.next = 4;
                      return this.authService.signOut();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var close;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      close = 'Modal Removed';
                      _context2.next = 3;
                      return this.modalController.dismiss(close);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return UserSearchBookListComponent;
      }();

      _UserSearchBookListComponent.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
        }];
      };

      _UserSearchBookListComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-user-search-book-list',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_search_book_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_search_book_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _UserSearchBookListComponent);
      /***/
    },

    /***/
    5241: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserSearchDetailsComponent": function UserSearchDetailsComponent() {
          return (
            /* binding */
            _UserSearchDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_search_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-search-details.component.html */
      80956);
      /* harmony import */


      var _user_search_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-search-details.component.scss */
      80349);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/authentication.service */
      7053);
      /* harmony import */


      var _user_search_book_list_user_search_book_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../user-search-book-list/user-search-book-list.component */
      80933);

      var _UserSearchDetailsComponent = /*#__PURE__*/function () {
        function UserSearchDetailsComponent(authService, activatedRoute, angularFirestore, router, navCtrl, modalController) {
          _classCallCheck(this, UserSearchDetailsComponent);

          this.authService = authService;
          this.activatedRoute = activatedRoute;
          this.angularFirestore = angularFirestore;
          this.router = router;
          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.segment = 'bookshelves';
          this.userId = this.activatedRoute.snapshot.paramMap.get('id');
        }

        _createClass(UserSearchDetailsComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.displayName = localStorage.getItem('currentUserDisplayName');
            this.angularFirestore.collection('bookshelfs').snapshotChanges().subscribe(function (books) {
              _this2.booksShelves = books.map(function (t) {
                return Object.assign({
                  id: t.payload.doc.id
                }, t.payload.doc.data());
              }).filter(function (t) {
                return t.userId === _this2.userId;
              });
            });
            this.angularFirestore.collection('stars').snapshotChanges().subscribe(function (review) {
              _this2.reviews = review.map(function (t) {
                return Object.assign({
                  id: t.payload.doc.id
                }, t.payload.doc.data());
              }).filter(function (t) {
                return t.userId === _this2.userId;
              });
            });
          }
        }, {
          key: "presentModal",
          value: function presentModal(bookShelf) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _user_search_book_list_user_search_book_list_component__WEBPACK_IMPORTED_MODULE_3__.UserSearchBookListComponent,
                        componentProps: {
                          bookshelfId: bookShelf.id,
                          title: bookShelf.name
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            this.segment = ev.target.value;
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.navCtrl.navigateRoot('/login');

                    case 2:
                      _context4.next = 4;
                      return this.authService.signOut();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return UserSearchDetailsComponent;
      }();

      _UserSearchDetailsComponent.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }];
      };

      _UserSearchDetailsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-user-search-details',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_search_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_search_details_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _UserSearchDetailsComponent);
      /***/
    },

    /***/
    10842: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserSearchPageRoutingModule": function UserSearchPageRoutingModule() {
          return (
            /* binding */
            _UserSearchPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _user_search_book_list_user_search_book_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-search-book-list/user-search-book-list.component */
      80933);
      /* harmony import */


      var _user_search_details_user_search_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-search-details/user-search-details.component */
      5241);
      /* harmony import */


      var _user_search_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-search.page */
      48728);

      var routes = [{
        path: '',
        component: _user_search_page__WEBPACK_IMPORTED_MODULE_2__.UserSearchPage
      }, {
        path: 'user-bookshelves/:id',
        component: _user_search_details_user_search_details_component__WEBPACK_IMPORTED_MODULE_1__.UserSearchDetailsComponent
      }, {
        path: 'user-book-list/:id',
        component: _user_search_book_list_user_search_book_list_component__WEBPACK_IMPORTED_MODULE_0__.UserSearchBookListComponent
      }];

      var _UserSearchPageRoutingModule = function UserSearchPageRoutingModule() {
        _classCallCheck(this, UserSearchPageRoutingModule);
      };

      _UserSearchPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      })], _UserSearchPageRoutingModule);
      /***/
    },

    /***/
    51618: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserSearchPageModule": function UserSearchPageModule() {
          return (
            /* binding */
            _UserSearchPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../pipes/filter.pipe */
      9216);
      /* harmony import */


      var _user_search_book_list_user_search_book_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-search-book-list/user-search-book-list.component */
      80933);
      /* harmony import */


      var _user_search_details_user_search_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-search-details/user-search-details.component */
      5241);
      /* harmony import */


      var _user_search_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-search-routing.module */
      10842);
      /* harmony import */


      var _user_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-search.page */
      48728);

      var _UserSearchPageModule = function UserSearchPageModule() {
        _classCallCheck(this, UserSearchPageModule);
      };

      _UserSearchPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _user_search_routing_module__WEBPACK_IMPORTED_MODULE_3__.UserSearchPageRoutingModule],
        declarations: [_user_search_page__WEBPACK_IMPORTED_MODULE_4__.UserSearchPage, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _user_search_details_user_search_details_component__WEBPACK_IMPORTED_MODULE_2__.UserSearchDetailsComponent, _user_search_book_list_user_search_book_list_component__WEBPACK_IMPORTED_MODULE_1__.UserSearchBookListComponent]
      })], _UserSearchPageModule);
      /***/
    },

    /***/
    48728: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserSearchPage": function UserSearchPage() {
          return (
            /* binding */
            _UserSearchPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-search.page.html */
      75340);
      /* harmony import */


      var _user_search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-search.page.scss */
      80178);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _UserSearchPage = /*#__PURE__*/function () {
        function UserSearchPage(angularFirestore, router) {
          _classCallCheck(this, UserSearchPage);

          this.angularFirestore = angularFirestore;
          this.router = router;
        }

        _createClass(UserSearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            this.angularFirestore.collection('users').snapshotChanges().pipe().subscribe(function (users) {
              _this3.users = users.map(function (t) {
                return Object.assign({
                  id: t.payload.doc.id
                }, t.payload.doc.data());
              });
            });
          }
        }, {
          key: "changeSearchCriteria",
          value: function changeSearchCriteria(searchTerm) {
            this.filtered = this.users.filter(function (t) {
              return searchTerm !== '' && t.displayName.includes(searchTerm);
            });
          }
        }, {
          key: "goToUser",
          value: function goToUser(userId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.router.navigate(['user-bookshelves', userId]);

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return UserSearchPage;
      }();

      _UserSearchPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _UserSearchPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-search.page',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_search_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_search_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _UserSearchPage);
      /***/
    },

    /***/
    83585: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center title-text\">{{ title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\" class=\"button-text\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-align-items-center ion-justify-content-center\">\n    <ion-row class=\"ion-justify-content-center\">\n      <!-- tot ce e in ion-col e template-ul pentru afisarea cartilor -->\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" style=\"width: 390px\">\n        <ion-card *ngFor=\"let book of books\">\n          <ion-card-header>\n            <ion-item lines=\"none\">\n              <ion-label class=\"card-title ion-text-wrap\">{{\n                book.title\n              }}</ion-label>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content\n            class=\"\n              ion-text-center\n              ion-justify-content-between\n              ion-align-center-center\n            \"\n          >\n            <div\n              style=\"width: 100px; height: 250px\"\n              class=\"ion-float-left ion-align-items-center\"\n            >\n              <ion-img\n                class=\"ion-float-left ion-align-self-center\"\n                src=\"{{ book.cover }}\"\n                style=\"width: 100px; height: 250px; margin-top: 10%\"\n              ></ion-img>\n            </div>\n            <ion-list lines=\"none\">\n              <ion-item>\n                <ion-label\n                  >Authors: <span>{{ book.authors }}</span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label\n                  >Publisher: <span>{{ book.publishers }}</span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label\n                  >Publish date: <span>{{ book.publish_date }}</span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label\n                  >Number of pages:\n                  <span>{{ book.number_of_pages }}</span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label\n                  >ISBN: <span>{{ book.isbn }}</span></ion-label\n                >\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    80956: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"../assets/icon/profileIcon.svg\" />\n      </ion-avatar>\n      <ion-label class=\"profile-name\">{{ displayName }}</ion-label>\n    </ion-item>\n    <ion-item button slot=\"end\" (click)=\"signOut()\">\n      <ion-icon\n        name=\"log-out-outline\"\n        style=\"width: 30px; height: 30px\"\n      ></ion-icon>\n      <ion-label style=\"margin-left: 5px\" class=\"logout-text\">Logout</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"bookshelves\">\n      <ion-label>Bookshelves</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"reviews\">\n      <ion-label>Reviews</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-grid\n    *ngIf=\"segment === 'bookshelves'\"\n    class=\"ion-align-items-center ion-justify-content-center\"\n  >\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col\n        size=\"12\"\n        size-md=\"6\"\n        size-lg=\"4\"\n        style=\"width: 390px\"\n        *ngFor=\"let bookShelf of booksShelves\"\n        class=\"bookshelves-card\"\n      >\n        <ion-card>\n          <ion-card-header>\n            <ion-img\n              class=\"ion-float-left ion-align-self-center\"\n              src=\"./assets/icon/bookshelfCard.svg\"\n              style=\"width: 100px; height: 200px\"\n            ></ion-img>\n          </ion-card-header>\n          <ion-card-content\n            class=\"\n              ion-text-center\n              ion-justify-content-between\n              ion-align-center-center\n            \"\n          >\n            <ion-item lines=\"none\">\n              <ion-label class=\"bookshelf-title ion-text-wrap\">{{\n                bookShelf.name\n              }}</ion-label>\n            </ion-item>\n          </ion-card-content>\n          <div class=\"ion-justify-content-center\">\n            <ion-button\n              (click)=\"presentModal(bookShelf)\"\n              fill=\"solid\"\n              class=\"open-button\"\n            >\n              Open\n              <ion-icon name=\"open-outline\" style=\"margin-left: 5px\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid\n    *ngIf=\"segment === 'reviews'\"\n    class=\"ion-align-items-center ion-justify-content-center\"\n  >\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col\n        size=\"12\"\n        size-md=\"6\"\n        size-lg=\"4\"\n        style=\"width: 390px\"\n        *ngFor=\"let review of reviews\"\n        class=\"reviews-card\"\n      >\n        <ion-card>\n          <ion-card-header>\n            <ion-item lines=\"none\">\n              <ion-label class=\"review-title ion-text-wrap\">{{\n                review.title\n              }}</ion-label>\n            </ion-item>\n            <ion-card-subtitle>{{ review.bookAuthors }}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content\n            class=\"\n              ion-text-center ion-justify-content-between ion-align-items-center\n            \"\n          >\n            <div\n              style=\"width: 100px; height: 250px\"\n              class=\"ion-float-left ion-align-items-center\"\n            >\n              <ion-img\n                class=\"ion-align-items-center\"\n                src=\"{{ review.cover }}\"\n                style=\"\n                  width: 100px;\n                  height: 250px;\n                  margin-bottom: 20%;\n                  display: inline-block;\n                \"\n              ></ion-img>\n            </div>\n            <ion-list lines=\"none\">\n              <ion-item class=\"review-text\"> {{ review.text }} </ion-item>\n              <ion-item>\n                <ion-label> Rating: {{ review.rating }} / 5</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    75340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-text\">Search for users</ion-title>\n  </ion-toolbar>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col\n        size=\"12\"\n        class=\"ion-align-items-center ion-justify-content-center\"\n      >\n        <ion-searchbar\n          showCancelButton=\"never\"\n          placeholder=\"Filter by display name\"\n          [ngModel]=\"searchTerm\"\n          (ngModelChange)=\"changeSearchCriteria($event)\"\n          animated\n          [debounce]=\"500\"\n        ></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-align-items-center ion-justify-content-center\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col\n        size=\"12\"\n        size-md=\"6\"\n        size-lg=\"4\"\n        style=\"width: 390px\"\n        *ngFor=\"let user of filtered\"\n      >\n        <ion-card>\n          <ion-card-content\n            class=\"ion-justify-content-center ion-align-center-center\"\n          >\n            <ion-list lines=\"none\" class=\"ion-text-center\">\n              <ion-item class=\"ion-text-center\">\n                <ion-img\n                  class=\"ion-float-left ion-align-self-center ion-text-center\"\n                  src=\"./assets/icon/userSearchIcon2.svg\"\n                ></ion-img>\n                <ion-label class=\"ion-text-left\"\n                  ><span>{{user.displayName}}</span></ion-label\n                >\n                <ion-button\n                  [routerLink]=\"['user-bookshelves', user.uid]\"\n                  fill=\"clear\"\n                  slot=\"end\"\n                >\n                  <ion-icon\n                    slot=\"icon-only\"\n                    name=\"eye-outline\"\n                    style=\"\n                      color: rgba(var(--ion-color-secondary-rgb), 0.7);\n                      font-size: 30px;\n                    \"\n                  >\n                  </ion-icon>\n                </ion-button>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    71677: function _(module) {
      module.exports = "ion-card {\n  border-radius: 10px;\n  padding: 0 !important;\n  margin-left: 0px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  width: 100%;\n}\n\nion-card ion-list ion-label {\n  font-family: Lato;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.5625px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #363636;\n  white-space: normal;\n}\n\nion-card ion-list ion-label span {\n  font-family: LatoBold;\n  color: white;\n}\n\nion-card ion-list ion-item {\n  margin-left: 15px;\n  border: 0px;\n  border-left: 2px solid rgba(74, 92, 252, 0.7);\n}\n\n.card-title {\n  margin-bottom: 0px;\n  margin-left: 10px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 24px;\n  line-height: 25px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 10px;\n}\n\n.button-text {\n  font-family: Lato;\n  font-size: 20px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.title-text {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  margin-left: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc2VhcmNoLWJvb2stbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFSQTtFQVVNLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFFekI7O0FBbkJBO0VBbUJRLHFCQUFxQjtFQUNyQixZQUE2QjtBQUlyQzs7QUF4QkE7RUF3Qk0saUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2Q0FBNkM7QUFJbkQ7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixZQUE2QjtFQUM3QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QywrQkFBK0I7RUFDL0IsV0FBVztFQUNYLG9CQUF1QjtFQUF2Qix1QkFBdUI7QUFFekI7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCxpQkFBaUI7QUFFbkIiLCJmaWxlIjoidXNlci1zZWFyY2gtYm9vay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzYzNjM2O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogTGF0b0JvbGQ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoNzQsIDkyLCAyNTIsIDAuNyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvQm9sZEl0YWxpYztcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbn1cclxuXHJcbi50aXRsZS10ZXh0IHtcclxuICBmb250LWZhbWlseTogTGF0b0V4dHJhQm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    80349: function _(module) {
      module.exports = "ion-segment {\n  --background: #1f1f1f;\n}\n\nion-segment ion-segment-button {\n  color: rgba(255, 255, 255, 0.8);\n  white-space: normal;\n  font-family: LatoBold;\n  --color-checked: rgba(var(--ion-color-secondary-rgb), 0.8);\n}\n\n.bookshelves-card ion-card {\n  border-radius: 10px;\n  padding: 0 !important;\n  margin-left: 0px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  width: 100%;\n  height: 200px;\n}\n\n.bookshelves-card ion-card ion-item {\n  margin-top: 20px;\n}\n\n.bookshelf-title {\n  margin-bottom: 0px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 24px;\n  line-height: 30px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 10px;\n}\n\n.open-button {\n  width: 60%;\n  margin-left: 10px;\n  --background: rgba(var(--ion-color-primary-rgb), 0.7);\n  --border-radius: 15px;\n  font-family: LatoBold;\n  color: rgba(246, 246, 246, 0.9);\n  font-size: 18px;\n  align-self: center;\n  justify-content: center;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.reviews-card ion-card {\n  border-radius: 10px;\n  padding: 0 !important;\n  margin-left: 0px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  width: 100%;\n}\n\n.reviews-card ion-card ion-card-subtitle {\n  margin-bottom: 0px;\n  font-family: LatoItalic;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 18px;\n  line-height: 20px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 5px;\n  margin-left: 5px;\n}\n\n.review-text {\n  font-family: Lato;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #363636;\n  white-space: normal;\n}\n\n.review-title {\n  margin-bottom: 0px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 24px;\n  line-height: 30px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n\n.profile-name {\n  font-family: LatoExtraBold;\n  font-size: 18px;\n  color: white;\n}\n\n.logout-text {\n  font-family: Lato;\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.87);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc2VhcmNoLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYTtBQUNmOztBQUZBO0VBR0ksK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsMERBQWdCO0FBR3BCOztBQUNBO0VBRUksbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7QUFDakI7O0FBVkE7RUFXTSxnQkFBZ0I7QUFHdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHFEQUFhO0VBQ2IscUJBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsb0JBQXVCO0VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUVJLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7QUFBZjs7QUFSQTtFQVVNLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBRXRCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUFyQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsWUFBNkI7RUFDN0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFBbkI7O0FBR0E7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFlBQTZCO0FBQS9COztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQ0FBZ0M7QUFBbEMiLCJmaWxlIjoidXNlci1zZWFyY2gtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICMxZjFmMWY7XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG9Cb2xkO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgMC44KTtcclxuICB9XHJcbn1cclxuXHJcbi5ib29rc2hlbHZlcy1jYXJkIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib29rc2hlbGYtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LWZhbWlseTogTGF0b0JvbGRJdGFsaWM7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm9wZW4tYnV0dG9uIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjcpO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LWZhbWlseTogTGF0b0JvbGQ7XHJcbiAgY29sb3I6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMC45KTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcblxyXG4ucmV2aWV3cy1jYXJkIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBMYXRvSXRhbGljO1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XHJcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJldmlldy10ZXh0IHtcclxuICBmb250LWZhbWlseTogTGF0bztcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzYzNjM2O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5yZXZpZXctdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LWZhbWlseTogTGF0b0JvbGRJdGFsaWM7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1uYW1lIHtcclxuICBmb250LWZhbWlseTogTGF0b0V4dHJhQm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcbi5sb2dvdXQtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    80178: function _(module) {
      module.exports = "ion-img {\n  width: 50px;\n  height: 50px;\n  margin-top: 10px;\n}\n\nion-label {\n  padding-left: 15px;\n}\n\nion-label span {\n  white-space: normal;\n  font-family: LatoBoldItalic;\n  color: rgba(255, 255, 255, 0.9);\n}\n\nion-card {\n  border-radius: 10px;\n  padding: 0 !important;\n  margin-left: 0px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n}\n\nion-searchbar {\n  --background: #1f1f1f;\n  --border-radius: 20px;\n  width: 100%;\n}\n\n.title-text {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  width: 80%;\n  padding-right: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0FBRXBCOztBQUhBO0VBSUksbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiwrQkFBK0I7QUFHbkM7O0FBQUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7QUFHakI7O0FBQUE7RUFDRSxxQkFBYTtFQUNiLHFCQUFnQjtFQUNoQixXQUFXO0FBR2I7O0FBQUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLFVBQVU7RUFDVixtQkFBbUI7QUFHckIiLCJmaWxlIjoidXNlci1zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvQm9sZEl0YWxpYztcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgfVxyXG59XHJcbmlvbi1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICMxZjFmMWY7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGUtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG9FeHRyYUJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_user-search_user-search_module_ts-es5.js.map