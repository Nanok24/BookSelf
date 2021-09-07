(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["default-src_app_pages_bookshelf_add-book-modal_add-book-modal_component_ts-src_app_services_f-9dafa4"], {
    /***/
    37025: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddBookModalComponent": function AddBookModalComponent() {
          return (
            /* binding */
            _AddBookModalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_book_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-book-modal.component.html */
      95599);
      /* harmony import */


      var _add_book_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-book-modal.component.scss */
      33320);
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

      var _AddBookModalComponent = /*#__PURE__*/function () {
        function AddBookModalComponent(navParams, modalController, angularFirestore) {
          _classCallCheck(this, AddBookModalComponent);

          this.navParams = navParams;
          this.modalController = modalController;
          this.angularFirestore = angularFirestore;
          this.bookshelfId = this.navParams.get("bookShelfId");
        }

        _createClass(AddBookModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.customPickerOptions = {
              buttons: [{
                text: "Cancel",
                handler: function handler() {
                  console.log("Clicked Log. Do not Dismiss.");
                  return false;
                }
              }, {
                text: "Save",
                handler: function handler(data) {
                  console.log(data);

                  _this.changePublishDate(data);
                }
              }]
            };
          }
        }, {
          key: "changeTitle",
          value: function changeTitle(title) {
            this.title = title.target.value;
          }
        }, {
          key: "changeAuthors",
          value: function changeAuthors(authors) {
            this.authors = authors.target.value;
          }
        }, {
          key: "changePublishers",
          value: function changePublishers(publishers) {
            this.publishers = publishers.target.value;
          }
        }, {
          key: "changePublishDate",
          value: function changePublishDate(publishDate) {
            this.publishDate = publishDate.target.value;
          }
        }, {
          key: "changeNumberOfPages",
          value: function changeNumberOfPages(numberOfPages) {
            this.numberOfPages = numberOfPages.target.value;
          }
        }, {
          key: "changeIsbn",
          value: function changeIsbn(name) {
            this.isbn = name.target.value;
          }
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
            var _this2 = this;

            this.angularFirestore.collection("books").add({
              bookShelfId: this.bookshelfId,
              title: this.title,
              authors: this.authors,
              publishers: this.publishers,
              publish_date: this.publishDate,
              number_of_pages: this.numberOfPages,
              cover: "./assets/icon/bookCard.svg",
              isbn: this.isbn,
              createdAt: new Date()
            }).then(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var close;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        close = "Modal Removed";

                        _capacitor_toast__WEBPACK_IMPORTED_MODULE_2__.Toast.show({
                          text: "Book was successfully added to your bookshelf!"
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
          }
        }]);

        return AddBookModalComponent;
      }();

      _AddBookModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
        }];
      };

      _AddBookModalComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-add-book-modal",
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_book_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_book_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AddBookModalComponent);
      /***/
    },

    /***/
    91343: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FirestoreService": function FirestoreService() {
          return (
            /* binding */
            _FirestoreService
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);

      var _FirestoreService = /*#__PURE__*/function () {
        function FirestoreService(afAuth, afStore) {
          var _this3 = this;

          _classCallCheck(this, FirestoreService);

          this.afAuth = afAuth;
          this.afStore = afStore;
          this.currentUser = null;
          this.currentReview = null;
          this.afAuth.onAuthStateChanged(function (user) {
            _this3.currentUser = user;
          });
        } // getBooks() {
        //   this.afStore
        //     .collection('books')
        //     .get()
        //     .forEach((el) => {
        //       console.log(el);
        //     });
        // }
        // Asta functioneaza, daca tu ai alta modalitate, poti sa o modifici schimbi


        _createClass(FirestoreService, [{
          key: "addBook",
          value: function addBook(book) {
            return this.afStore.collection('books').add({
              authors: book.authors,
              cover: book.cover,
              isbn: book.isbn,
              number_of_pages: book.number_of_pages,
              publish_date: book.publish_date,
              publishers: book.publishers,
              title: book.title,
              bookShelfId: book.bookShelfId,
              createdAt: book.createdAt
            });
          }
        }]);

        return FirestoreService;
      }();

      _FirestoreService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuth
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore
        }];
      };

      _FirestoreService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _FirestoreService);
      /***/
    },

    /***/
    95599: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Add a book</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\" class=\"button-text\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list style=\"height: 100%; width: 100%\" lines=\"none\">\n    <ion-item style=\"margin-bottom: 20px\">\n      <ion-label class=\"ion-text-center book-title\"\n        >Enter information</ion-label\n      >\n    </ion-item>\n    <ion-item style=\"margin-bottom: 10px\">\n      <ion-label class=\"label-text\">Title:</ion-label>\n      <ion-input\n        (ionChange)=\"changeTitle($event)\"\n        class=\"review-text\"\n      ></ion-input>\n    </ion-item>\n    <ion-item style=\"margin-bottom: 10px\">\n      <ion-label class=\"label-text\">Authors:</ion-label>\n      <ion-input\n        (ionChange)=\"changeAuthors($event)\"\n        class=\"review-text\"\n      ></ion-input>\n    </ion-item>\n    <ion-item style=\"margin-bottom: 10px\">\n      <ion-label class=\"label-text\">Publishers:</ion-label>\n      <ion-input\n        (ionChange)=\"changePublishers($event)\"\n        class=\"review-text\"\n      ></ion-input>\n    </ion-item>\n    <ion-item style=\"margin-bottom: 10px\">\n      <ion-label class=\"label-text\">Publish date:</ion-label>\n      <ion-input\n        (ionChange)=\"changePublishDate($event)\"\n        class=\"review-text\"\n      ></ion-input>\n    </ion-item>\n    <ion-item style=\"margin-bottom: 10px\">\n      <ion-label class=\"label-text\">Number of pages:</ion-label>\n      <ion-input\n        (ionChange)=\"changeNumberOfPages($event)\"\n        class=\"review-text\"\n      ></ion-input>\n    </ion-item>\n    <ion-item style=\"margin-bottom: 10px\">\n      <ion-label class=\"label-text\">ISBN:</ion-label>\n      <ion-input\n        (ionChange)=\"changeIsbn($event)\"\n        class=\"review-text\"\n      ></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar style=\"--background: rgba(var(--ion-color-success-rgb), 0.7)\">\n    <ion-button expand=\"block\" fill=\"clear\" shape=\"round\" (click)=\"save()\">\n      <span class=\"button-text\">Save book</span>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    33320: function _(module) {
      module.exports = "ion-toolbar {\n  --background: rgba(var(--ion-color-primary-rgb), 0.8);\n}\n\nion-title {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n}\n\n.div-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.review-text {\n  font-family: LatoBold;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  padding-bottom: 10px;\n  white-space: normal;\n  margin-top: 5px;\n}\n\n.book-title {\n  margin-bottom: 0px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 30px;\n  line-height: 30px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.label-text {\n  font-family: LatoBold !important;\n  color: rgba(255, 255, 255, 0.8) !important;\n  font-size: 20px !important;\n  letter-spacing: 0.5625px;\n}\n\n.button-text {\n  font-family: Lato;\n  font-size: 20px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  text-transform: none;\n  text-transform: initial;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1ib29rLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscURBQWE7QUFDZjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsK0JBQStCO0VBQy9CLFdBQVc7QUFFYjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFFZDs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixlQUFlO0FBRWpCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixZQUE2QjtFQUM3QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUVsQjs7QUFDQTtFQUNFLGdDQUFnQztFQUNoQywwQ0FBMEM7RUFDMUMsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUUxQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxvQkFBdUI7RUFBdkIsdUJBQXVCO0FBRXpCIiwiZmlsZSI6ImFkZC1ib29rLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC44KTtcbn1cbmlvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvRXh0cmFCb2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXYtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJldmlldy10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IExhdG9Cb2xkO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYm9vay10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1mYW1pbHk6IExhdG9Cb2xkSXRhbGljO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5sYWJlbC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IExhdG9Cb2xkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_pages_bookshelf_add-book-modal_add-book-modal_component_ts-src_app_services_f-9dafa4-es5.js.map