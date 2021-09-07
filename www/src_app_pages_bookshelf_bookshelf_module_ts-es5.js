(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_bookshelf_bookshelf_module_ts"], {
    /***/
    9944: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddBookshelfComponent": function AddBookshelfComponent() {
          return (
            /* binding */
            _AddBookshelfComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_bookshelf_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-bookshelf.component.html */
      98594);
      /* harmony import */


      var _add_bookshelf_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-bookshelf.component.scss */
      51234);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _AddBookshelfComponent = /*#__PURE__*/function () {
        function AddBookshelfComponent(navParams, modalController, angularFirestore) {
          _classCallCheck(this, AddBookshelfComponent);

          this.navParams = navParams;
          this.modalController = modalController;
          this.angularFirestore = angularFirestore;
        }

        _createClass(AddBookshelfComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userId = this.navParams.get('userId');
          }
        }, {
          key: "changeName",
          value: function changeName(name) {
            this.name = name.target.value;
          }
        }, {
          key: "changeDescription",
          value: function changeDescription(description) {
            this.description = description.target.value;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var close;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      close = 'Modal Removed';
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.angularFirestore.collection('bookshelfs').add({
                        name: this.name,
                        userId: this.userId,
                        createdAt: new Date()
                      }).then(function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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

        return AddBookshelfComponent;
      }();

      _AddBookshelfComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
        }];
      };

      _AddBookshelfComponent.propDecorators = {
        bookTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
        }]
      };
      _AddBookshelfComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-bookshelf',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_bookshelf_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_bookshelf_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AddBookshelfComponent);
      /***/
    },

    /***/
    39974: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookshelfBookListComponent": function BookshelfBookListComponent() {
          return (
            /* binding */
            _BookshelfBookListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bookshelf_book_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./bookshelf-book-list.component.html */
      79073);
      /* harmony import */


      var _bookshelf_book_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bookshelf-book-list.component.scss */
      83928);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/authentication.service */
      7053);
      /* harmony import */


      var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/firestore.service */
      91343);
      /* harmony import */


      var _review_modal_review_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../review-modal/review-modal.page */
      86875);

      var _BookshelfBookListComponent = /*#__PURE__*/function () {
        function BookshelfBookListComponent(authService, modalController, afs, afAuth, angularFirestore, route) {
          var _this2 = this;

          _classCallCheck(this, BookshelfBookListComponent);

          this.authService = authService;
          this.modalController = modalController;
          this.afs = afs;
          this.afAuth = afAuth;
          this.angularFirestore = angularFirestore;
          this.route = route;
          this.displayName = null;
          this.uid = null;
          this.books = [];
          this.bookShelfId = this.route.snapshot.paramMap.get('id');
          afAuth.authState.subscribe(function (user) {
            if (user) {
              _this2.uid = user.uid;
              _this2.displayName = localStorage.getItem('currentUserDisplayName');
            }
          });
        } // Aici e tot ce am incercat eu pe parcurs pentru afisare, ceva de aici functioneaza, dar nu cum imi doresc


        _createClass(BookshelfBookListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.angularFirestore.collection('books').snapshotChanges().subscribe(function (books) {
              _this3.books = books.map(function (t) {
                return Object.assign({
                  id: t.payload.doc.id
                }, t.payload.doc.data());
              }).filter(function (t) {
                return t.bookShelfId === _this3.bookShelfId;
              }).sort(function (a, b) {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
              });
            }); // this.user$ = this.afs.afStore
            //   .collection('users', (ref) => ref.where('uid', '==', this.uid))
            //   .valueChanges();
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// this.user$ = this.afs.afStore
            //   .collection('users', (ref) => ref.where('uid', '==', this.uid))
            //   .valueChanges();
            // this.books$ = this.afs.afStore.collection('books').valueChanges();
            // this.docs$ = this.afs.afStore
            //   .collection('bookshelfs', (ref) =>
            //     ref.where('userID', '==', this.uid).orderBy('createdAt', 'desc')
            //   )
            //   .valueChanges();
            // console.log(
            //   '🚀 ~ file: bookshelf.page.ts ~ line 79 ~ BookshelfPage ~ ionViewWillEnter ~ docs$',
            //   this.docs$
            // );
            // const testare = this.afs.afStore
            //   .collection('bookshelfs', (ref) =>
            //     ref.where('userID', '==', this.uid).orderBy('createdAt', 'desc')
            //   )
            //   .valueChanges();
            // testare.forEach((el) => {
            //   for (let index = 0; index < el.length; index++) {
            //     console.log(el[index]);
            //   }
            //   console.log(el);
            // });
            // const queryObservable = this.test$.pipe(
            //   switchMap((test) =>
            //     this.afs.afStore
            //       .collection('users', (ref) => ref.where('uid', '==', test))
            //       .valueChanges()
            //   )
            // );
            // queryObservable.subscribe((queriedItems) => {
            //   console.log(queriedItems);
            // });
          }
        }, {
          key: "openModal",
          value: function openModal(book) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: _review_modal_review_modal_page__WEBPACK_IMPORTED_MODULE_4__.ReviewModalPage,
                        cssClass: 'modalCss',
                        componentProps: {
                          bookTitle: book.title,
                          bookAuthors: book.authors,
                          userId: this.uid,
                          bookId: book.id,
                          cover: book.cover,
                          title: book.title
                        }
                      });

                    case 2:
                      modal = _context4.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "deleteBook",
          value: function deleteBook(bookId) {
            return this.angularFirestore.doc("books/".concat(bookId))["delete"]();
          }
        }]);

        return BookshelfBookListComponent;
      }();

      _BookshelfBookListComponent.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }];
      };

      _BookshelfBookListComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-bookshelf-book-list',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bookshelf_book_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_bookshelf_book_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _BookshelfBookListComponent);
      /***/
    },

    /***/
    79529: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookshelfPageRoutingModule": function BookshelfPageRoutingModule() {
          return (
            /* binding */
            _BookshelfPageRoutingModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _bookshelf_book_list_bookshelf_book_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bookshelf-book-list/bookshelf-book-list.component */
      39974);
      /* harmony import */


      var _bookshelf_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bookshelf.page */
      43579);

      var routes = [{
        path: '',
        component: _bookshelf_page__WEBPACK_IMPORTED_MODULE_1__.BookshelfPage
      }, {
        path: 'book-list/:id',
        component: _bookshelf_book_list_bookshelf_book_list_component__WEBPACK_IMPORTED_MODULE_0__.BookshelfBookListComponent
      }];

      var _BookshelfPageRoutingModule = function BookshelfPageRoutingModule() {
        _classCallCheck(this, BookshelfPageRoutingModule);
      };

      _BookshelfPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _BookshelfPageRoutingModule);
      /***/
    },

    /***/
    35879: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookshelfPageModule": function BookshelfPageModule() {
          return (
            /* binding */
            _BookshelfPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _add_book_modal_add_book_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-book-modal/add-book-modal.component */
      37025);
      /* harmony import */


      var _add_bookshelf_add_bookshelf_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-bookshelf/add-bookshelf.component */
      9944);
      /* harmony import */


      var _bookshelf_book_list_bookshelf_book_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bookshelf-book-list/bookshelf-book-list.component */
      39974);
      /* harmony import */


      var _bookshelf_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bookshelf-routing.module */
      79529);
      /* harmony import */


      var _bookshelf_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bookshelf.page */
      43579);

      var _BookshelfPageModule = function BookshelfPageModule() {
        _classCallCheck(this, BookshelfPageModule);
      };

      _BookshelfPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _bookshelf_routing_module__WEBPACK_IMPORTED_MODULE_3__.BookshelfPageRoutingModule],
        declarations: [_bookshelf_page__WEBPACK_IMPORTED_MODULE_4__.BookshelfPage, _bookshelf_book_list_bookshelf_book_list_component__WEBPACK_IMPORTED_MODULE_2__.BookshelfBookListComponent, _add_bookshelf_add_bookshelf_component__WEBPACK_IMPORTED_MODULE_1__.AddBookshelfComponent, _add_book_modal_add_book_modal_component__WEBPACK_IMPORTED_MODULE_0__.AddBookModalComponent],
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavParams]
      })], _BookshelfPageModule);
      /***/
    },

    /***/
    43579: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookshelfPage": function BookshelfPage() {
          return (
            /* binding */
            _BookshelfPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bookshelf_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./bookshelf.page.html */
      12918);
      /* harmony import */


      var _bookshelf_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bookshelf.page.scss */
      48925);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      7053);
      /* harmony import */


      var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/firestore.service */
      91343);
      /* harmony import */


      var _add_bookshelf_add_bookshelf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-bookshelf/add-bookshelf.component */
      9944);

      var _BookshelfPage = /*#__PURE__*/function () {
        function BookshelfPage(authService, modalController, afs, afAuth, angularFirestore, router, navCtrl) {
          _classCallCheck(this, BookshelfPage);

          this.authService = authService;
          this.modalController = modalController;
          this.afs = afs;
          this.afAuth = afAuth;
          this.angularFirestore = angularFirestore;
          this.router = router;
          this.navCtrl = navCtrl;
          this.booksShelves = [];
        }

        _createClass(BookshelfPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this4 = this;

            var user = JSON.parse(localStorage.getItem("user"));

            if (user) {
              this.userData = user;
              this.userId = user.uid;
              this.displayName = localStorage.getItem("currentUserDisplayName");
              this.angularFirestore.collection("bookshelfs").snapshotChanges().subscribe(function (books) {
                _this4.booksShelves = books.map(function (t) {
                  return Object.assign({
                    id: t.payload.doc.id
                  }, t.payload.doc.data());
                }).map(function (book) {
                  return {
                    id: book.id,
                    userId: book.userId,
                    name: book.name
                  };
                }).filter(function (t) {
                  return t.userId === _this4.userId;
                });
              });
            }
          }
        }, {
          key: "goToBookList",
          value: function goToBookList(bookShelfId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.router.navigate(["book-list", bookShelfId]);

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.navCtrl.navigateRoot("/login");

                    case 2:
                      _context6.next = 4;
                      return this.authService.signOut();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var modal;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.modalController.create({
                        component: _add_bookshelf_add_bookshelf_component__WEBPACK_IMPORTED_MODULE_4__.AddBookshelfComponent,
                        cssClass: "modalCss",
                        componentProps: {
                          userId: this.userId
                        }
                      });

                    case 2:
                      modal = _context7.sent;
                      _context7.next = 5;
                      return modal.present();

                    case 5:
                      return _context7.abrupt("return", _context7.sent);

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "deleteBookshelf",
          value: function deleteBookshelf(bookShelfId) {
            return this.angularFirestore.doc("bookshelfs/".concat(bookShelfId))["delete"]();
          }
        }]);

        return BookshelfPage;
      }();

      _BookshelfPage.ctorParameters = function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }];
      };

      _BookshelfPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-bookshelf",
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bookshelf_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_bookshelf_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _BookshelfPage);
      /***/
    },

    /***/
    98594: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Add a bookshelf</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\" class=\"button-text\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list\n    style=\"height: 100%; width: 100%\"\n    lines=\"none\"\n    class=\"ion-align-items-center ion-justify-content-center\"\n  >\n    <ion-item>\n      <ion-label class=\"ion-text-center book-title\">Bookshelf Title</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label-text\" style=\"margin-top: 0px\">Name:</ion-label>\n      <ion-input\n        type=\"text\"\n        class=\"review-text\"\n        (ionChange)=\"changeName($event)\"\n      ></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style=\"--background: rgba(var(--ion-color-success-rgb), 0.7)\">\n    <ion-button expand=\"block\" fill=\"clear\" shape=\"round\" (click)=\"save()\">\n      <span class=\"button-text\">Create</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    79073: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"../assets/icon/profileIcon.svg\" />\n      </ion-avatar>\n      <ion-label class=\"profile-name\">{{ displayName }}</ion-label>\n    </ion-item>\n    <ion-item button slot=\"end\" (click)=\"authService.signOut()\">\n      <ion-icon\n        name=\"log-out-outline\"\n        style=\"width: 30px; height: 30px\"\n      ></ion-icon>\n      <ion-label style=\"margin-left: 5px\" class=\"logout-text\">Logout</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-align-items-center ion-justify-content-center\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-card *ngIf=\"!books.length\">\n        <ion-card-content>\n          <ion-item>\n            <ion-label><span>Collection is empty</span></ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n      <ion-col\n        size=\"12\"\n        size-md=\"6\"\n        size-lg=\"4\"\n        style=\"width: 390px\"\n        *ngFor=\"let book of books\"\n      >\n        <ion-card>\n          <ion-card-header>\n            <div class=\"ion-float-right ion-no-padding\">\n              <ion-button (click)=\"openModal(book)\" fill=\"clear\" slot=\"end\">\n                <ion-icon\n                  slot=\"icon-only\"\n                  name=\"star-sharp\"\n                  style=\"color: rgba(var(--ion-color-warning-rgb), 0.85)\"\n                ></ion-icon>\n              </ion-button>\n              <ion-button (click)=\"deleteBook(book.id)\" fill=\"clear\" slot=\"end\">\n                <ion-icon\n                  slot=\"icon-only\"\n                  name=\"trash-sharp\"\n                  style=\"color: rgba(var(--ion-color-danger-rgb), 0.85)\"\n                >\n                </ion-icon>\n              </ion-button>\n            </div>\n            <ion-item lines=\"none\">\n              <ion-label class=\"card-title ion-text-wrap\">{{\n                book.title\n              }}</ion-label>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content\n            class=\"\n              ion-text-center\n              ion-justify-content-between\n              ion-align-center-center\n            \"\n          >\n            <div\n              style=\"width: 100px; height: 250px\"\n              class=\"ion-float-left ion-align-items-center\"\n            >\n              <ion-img\n                class=\"ion-float-left ion-align-self-center\"\n                src=\"{{ book.cover }}\"\n                style=\"width: 100px; height: 250px; margin-top: 10%\"\n              ></ion-img>\n            </div>\n            <ion-list lines=\"none\">\n              <ion-item>\n                <ion-label\n                  >Authors: <span>{{ book.authors }}</span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label\n                  >Publisher: <span>{{ book.publishers }}</span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label\n                  >Publish date: <span>{{ book.publish_date }}</span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label\n                  >Number of pages:\n                  <span>{{ book.number_of_pages }}</span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label\n                  >ISBN: <span>{{ book.isbn }}</span></ion-label\n                >\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    12918: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"../assets/icon/profileIcon.svg\" />\n      </ion-avatar>\n      <ion-label class=\"profile-name\">{{displayName}}</ion-label>\n    </ion-item>\n    <ion-item button slot=\"end\" (click)=\"signOut()\">\n      <ion-icon\n        name=\"log-out-outline\"\n        style=\"width: 30px; height: 30px\"\n      ></ion-icon>\n      <ion-label style=\"margin-left: 5px\" class=\"logout-text\">Logout</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-align-items-center ion-justify-content-center\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\"\n        ><ion-button\n          (click)=\"presentModal()\"\n          class=\"ion-justify-content-center add-button\"\n        >\n          <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n          Add a bookshelf\n        </ion-button></ion-col\n      >\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-card *ngIf=\"!booksShelves.length\">\n        <ion-card-content>\n          <ion-item>\n            <ion-label><span>Collection is empty</span></ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n      <ion-col\n        size=\"12\"\n        size-md=\"6\"\n        size-lg=\"4\"\n        style=\"width: 390px\"\n        *ngFor=\"let bookShelf of booksShelves\"\n      >\n        <ion-card>\n          <ion-card-header>\n            <ion-img\n              class=\"ion-float-left ion-align-self-center\"\n              src=\"./assets/icon/bookshelfCard.svg\"\n              style=\"width: 100px; height: 200px\"\n            ></ion-img>\n            <div class=\"ion-float-right ion-no-padding\">\n              <ion-button\n                (click)=\"deleteBookshelf(bookShelf.id)\"\n                fill=\"clear\"\n                slot=\"end\"\n              >\n                <ion-icon\n                  slot=\"icon-only\"\n                  name=\"trash-sharp\"\n                  style=\"color: rgba(var(--ion-color-danger-rgb), 0.85)\"\n                >\n                </ion-icon>\n              </ion-button>\n            </div>\n          </ion-card-header>\n          <ion-card-content\n            class=\"\n              ion-text-center\n              ion-justify-content-between\n              ion-align-center-center\n            \"\n          >\n            <ion-item lines=\"none\">\n              <ion-label class=\"card-title ion-text-wrap\"\n                >{{bookShelf.name}}</ion-label\n              >\n            </ion-item>\n          </ion-card-content>\n          <div class=\"ion-justify-content-center\">\n            <ion-button\n              [routerLink]=\"['book-list', bookShelf.id]\"\n              fill=\"solid\"\n              class=\"open-button\"\n            >\n              Open\n              <ion-icon name=\"open-outline\" style=\"margin-left: 5px\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"search-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button class=\"search-list\" [routerLink]=\"['../../book-search']\">\n        <ion-icon name=\"book\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button\n        class=\"search-list\"\n        [routerLink]=\"['../../review-search']\"\n      >\n        <ion-icon name=\"star\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button class=\"search-list\" [routerLink]=\"['../../user-search']\">\n        <ion-icon name=\"person\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    51234: function _(module) {
      module.exports = "ion-toolbar {\n  --background: rgba(var(--ion-color-primary-rgb), 0.8);\n}\n\nion-title {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n}\n\n.button-text {\n  font-family: Lato;\n  font-size: 20px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.review-text {\n  font-family: LatoBold;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 20px;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  padding-bottom: 10px;\n  white-space: normal;\n  margin-bottom: 10px;\n}\n\n.book-title {\n  margin-bottom: 0px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 30px;\n  line-height: 30px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.label-text {\n  font-family: LatoBold !important;\n  color: rgba(255, 255, 255, 0.8) !important;\n  font-size: 20px !important;\n  letter-spacing: 0.5625px;\n}\n\nion-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1ib29rc2hlbGYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxREFBYTtBQUNmOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QywrQkFBK0I7RUFDL0IsV0FBVztBQUViOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QywrQkFBK0I7RUFDL0IsV0FBVztFQUNYLG9CQUF1QjtFQUF2Qix1QkFBdUI7QUFFekI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixZQUE2QjtFQUM3QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUVsQjs7QUFDQTtFQUNFLGdDQUFnQztFQUNoQywwQ0FBMEM7RUFDMUMsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUUxQjs7QUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBR3JCIiwiZmlsZSI6ImFkZC1ib29rc2hlbGYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjgpO1xufVxuaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IExhdG9FeHRyYUJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG59XG5cbi5yZXZpZXctdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvQm9sZDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ib29rLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LWZhbWlseTogTGF0b0JvbGRJdGFsaWM7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmxhYmVsLXRleHQge1xuICBmb250LWZhbWlseTogTGF0b0JvbGQgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xufVxuaW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    83928: function _(module) {
      module.exports = ".logout-text {\n  font-family: Lato;\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.87);\n}\n\n.profile-name {\n  font-family: LatoExtraBold;\n  font-size: 18px;\n  color: white;\n}\n\nion-button ion-icon {\n  font-size: 30px;\n}\n\n.card-title {\n  margin-bottom: 0px;\n  margin-left: 10px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 24px;\n  line-height: 25px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 10px;\n}\n\n.card-buttons {\n  padding: 0px !important;\n  margin: 0px !important;\n  width: 150px;\n}\n\n.item-background-color {\n  --ion-item-background: transparent;\n}\n\nion-card {\n  border-radius: 10px;\n  padding: 0 !important;\n  margin-left: 0px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  width: 100%;\n}\n\nion-card ion-list ion-label {\n  font-family: Lato;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.5625px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #363636;\n  white-space: normal;\n}\n\nion-card ion-list ion-label span {\n  font-family: LatoBold;\n  color: white;\n}\n\nion-card ion-list ion-item {\n  margin-left: 15px;\n  border: 0px;\n  border-left: 2px solid rgba(74, 92, 252, 0.7);\n}\n\n.search-list {\n  --background: rgba(var(--ion-color-tertiary-rgb), 0.9);\n  width: 50px !important;\n  height: 50px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tzaGVsZi1ib29rLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsWUFBNkI7QUFDL0I7O0FBRUE7RUFFSSxlQUFlO0FBQW5COztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsWUFBNkI7RUFDN0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQURyQjs7QUFJQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsWUFBWTtBQURkOztBQUlBO0VBQ0Usa0NBQXNCO0FBRHhCOztBQUlBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztBQURiOztBQU5BO0VBVU0saUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUF6Qjs7QUFqQkE7RUFtQlEscUJBQXFCO0VBQ3JCLFlBQTZCO0FBRXJDOztBQXRCQTtFQXdCTSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDZDQUE2QztBQUVuRDs7QUFHQTtFQUNFLHNEQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUF6QiIsImZpbGUiOiJib29rc2hlbGYtYm9vay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ291dC10ZXh0IHtcclxuICBmb250LWZhbWlseTogTGF0bztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7XHJcbn1cclxuXHJcbi5wcm9maWxlLW5hbWUge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvRXh0cmFCb2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LWZhbWlseTogTGF0b0JvbGRJdGFsaWM7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNhcmQtYnV0dG9ucyB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5pdGVtLWJhY2tncm91bmQtY29sb3Ige1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGlvbi1saXN0IHtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM2MzYzNjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG9Cb2xkO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICBib3JkZXI6IDBweDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDc0LCA5MiwgMjUyLCAwLjcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1saXN0IHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYiksIDAuOSk7XHJcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    48925: function _(module) {
      module.exports = ".logout-text {\n  font-family: Lato;\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.87);\n}\n\n.profile-name {\n  font-family: LatoExtraBold;\n  font-size: 18px;\n  color: white;\n}\n\nion-button ion-icon {\n  font-size: 30px;\n}\n\n.add-button {\n  width: 90%;\n  --background: rgba(var(--ion-color-success-rgb), 0.7);\n  --border-radius: 15px;\n  font-family: LatoBold;\n  color: rgba(246, 246, 246, 0.9);\n  font-size: 20px;\n  align-self: center;\n  justify-content: center;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.open-button {\n  width: 60%;\n  margin-left: 10px;\n  --background: rgba(var(--ion-color-primary-rgb), 0.7);\n  --border-radius: 15px;\n  font-family: LatoBold;\n  color: rgba(246, 246, 246, 0.9);\n  font-size: 18px;\n  align-self: center;\n  justify-content: center;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.card-title {\n  margin-bottom: 0px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 24px;\n  line-height: 30px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 10px;\n}\n\n.card-buttons {\n  padding: 0px !important;\n  margin: 0px !important;\n  width: 150px;\n}\n\n.item-background-color {\n  --ion-item-background: transparent;\n}\n\nion-card {\n  border-radius: 10px;\n  padding: 0 !important;\n  margin-left: 0px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  width: 100%;\n  height: 200px;\n}\n\nion-card ion-item {\n  margin-top: 20px;\n}\n\n.search-list {\n  --background: rgba(var(--ion-color-tertiary-rgb), 0.9);\n  width: 50px !important;\n  height: 50px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tzaGVsZi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsWUFBNkI7QUFDL0I7O0FBRUE7RUFFSSxlQUFlO0FBQW5COztBQUlBO0VBQ0UsVUFBVTtFQUNWLHFEQUFhO0VBQ2IscUJBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsb0JBQXVCO0VBQXZCLHVCQUF1QjtBQUR6Qjs7QUFJQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscURBQWE7RUFDYixxQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixvQkFBdUI7RUFBdkIsdUJBQXVCO0FBRHpCOztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixZQUE2QjtFQUM3QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBRHJCOztBQUlBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixZQUFZO0FBRGQ7O0FBSUE7RUFDRSxrQ0FBc0I7QUFEeEI7O0FBSUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtBQURmOztBQVBBO0VBVUksZ0JBQWdCO0FBQ3BCOztBQUdBO0VBQ0Usc0RBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQXpCIiwiZmlsZSI6ImJvb2tzaGVsZi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3V0LXRleHQge1xuICBmb250LWZhbWlseTogTGF0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KTtcbn1cblxuLnByb2ZpbGUtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvRXh0cmFCb2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IpLCAwLjcpO1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvQm9sZDtcbiAgY29sb3I6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMC45KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbn1cblxuLm9wZW4tYnV0dG9uIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjcpO1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvQm9sZDtcbiAgY29sb3I6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMC45KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvQm9sZEl0YWxpYztcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC1idXR0b25zIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLml0ZW0tYmFja2dyb3VuZC1jb2xvciB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cblxuLnNlYXJjaC1saXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2IpLCAwLjkpO1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_bookshelf_bookshelf_module_ts-es5.js.map