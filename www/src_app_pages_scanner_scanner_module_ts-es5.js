(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_scanner_scanner_module_ts"], {
    /***/
    86252: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScannerPageRoutingModule": function ScannerPageRoutingModule() {
          return (
            /* binding */
            _ScannerPageRoutingModule
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


      var _scanner_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./scanner.page */
      70032);

      var routes = [{
        path: '',
        component: _scanner_page__WEBPACK_IMPORTED_MODULE_0__.ScannerPage
      }];

      var _ScannerPageRoutingModule = function ScannerPageRoutingModule() {
        _classCallCheck(this, ScannerPageRoutingModule);
      };

      _ScannerPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ScannerPageRoutingModule);
      /***/
    },

    /***/
    33983: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScannerPageModule": function ScannerPageModule() {
          return (
            /* binding */
            _ScannerPageModule
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


      var _scanner_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./scanner-routing.module */
      86252);
      /* harmony import */


      var _scanner_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./scanner.page */
      70032);

      var _ScannerPageModule = function ScannerPageModule() {
        _classCallCheck(this, ScannerPageModule);
      };

      _ScannerPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _scanner_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScannerPageRoutingModule],
        declarations: [_scanner_page__WEBPACK_IMPORTED_MODULE_1__.ScannerPage]
      })], _ScannerPageModule);
      /***/
    },

    /***/
    70032: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScannerPage": function ScannerPage() {
          return (
            /* binding */
            _ScannerPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_scanner_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./scanner.page.html */
      13206);
      /* harmony import */


      var _scanner_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./scanner.page.scss */
      72683);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor-community/barcode-scanner */
      6921);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      94283);
      /* harmony import */


      var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/firestore.service */
      91343);
      /* harmony import */


      var _bookshelf_add_book_modal_add_book_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../bookshelf/add-book-modal/add-book-modal.component */
      37025);
      /* harmony import */


      var _capacitor_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/toast */
      68381);

      var _ScannerPage = /*#__PURE__*/function () {
        function ScannerPage(alertController, angularFirestore, afs, pickerController, modalController) {
          _classCallCheck(this, ScannerPage);

          this.alertController = alertController;
          this.angularFirestore = angularFirestore;
          this.afs = afs;
          this.pickerController = pickerController;
          this.modalController = modalController;
          this.selectBookShelfTitle = "Select bookshelf";
          this.result = null;
          this.resultHasContent = false;
          this.scanActive = false;
          this.title = null;
          this.authors = null;
          this.publishers = null;
          this.publish_date = null;
          this.number_of_pages = null;
          this.cover = null;
          this.isbn = null;
          this.bookShelfId = null;
          this.currentBook = {
            title: this.title,
            authors: this.authors,
            publishers: this.publishers,
            publish_date: this.publish_date,
            number_of_pages: this.number_of_pages,
            cover: this.cover,
            isbn: this.isbn,
            bookShelfId: this.bookShelfId,
            createdAt: new Date()
          };
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        }

        _createClass(ScannerPage, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.prepare();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.stopScan();

            this.subscriptions.unsubscribe();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.result = null;
            this.resultHasContent = false;
            this.title = null;
            this.authors = null;
            this.publishers = null;
            this.publish_date = null;
            this.number_of_pages = null;
            this.cover = null;
            this.isbn = null;
            var user = JSON.parse(localStorage.getItem("user"));

            if (user) {
              var sub = this.angularFirestore.collection("bookshelfs").snapshotChanges().subscribe(function (bookshelfs) {
                _this.booksShelves = bookshelfs.map(function (t) {
                  return Object.assign({
                    id: t.payload.doc.id
                  }, t.payload.doc.data());
                }).map(function (bookshelf) {
                  return {
                    id: bookshelf.id,
                    userId: bookshelf.userId,
                    name: bookshelf.name
                  };
                }).filter(function (t) {
                  return t.userId === user.uid;
                });
              });
              this.subscriptions.add(sub);
            }
          }
        }, {
          key: "showPicker",
          value: function showPicker() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var options, picker;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      options = {
                        buttons: [{
                          text: "Cancel",
                          role: "cancel"
                        }, {
                          text: "Ok",
                          handler: function handler(value) {
                            _this2.selectBookShelfTitle = value.Bookshelfs.text;
                            _this2.bookShelfId = value.Bookshelfs.value;
                          }
                        }],
                        columns: [{
                          name: "Bookshelfs",
                          options: this.getColumnOptions()
                        }]
                      };
                      _context.next = 3;
                      return this.pickerController.create(options);

                    case 3:
                      picker = _context.sent;
                      picker.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _bookshelf_add_book_modal_add_book_modal_component__WEBPACK_IMPORTED_MODULE_4__.AddBookModalComponent,
                        cssClass: "modalCss",
                        componentProps: {
                          bookShelfId: this.bookShelfId
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getColumnOptions",
          value: function getColumnOptions() {
            var options = [];
            this.booksShelves.forEach(function (x) {
              options.push({
                text: x.name,
                value: x.id
              });
            });
            return options;
          }
        }, {
          key: "selectBookShelf",
          value: function selectBookShelf() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.showPicker();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "startScanner",
          value: function startScanner() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var allowed, result, response, data, index;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.title = null;
                      this.authors = null;
                      this.publishers = null;
                      this.publish_date = null;
                      this.number_of_pages = null;
                      this.cover = null;
                      this.isbn = null;
                      _context4.next = 9;
                      return this.checkPermission();

                    case 9:
                      allowed = _context4.sent;

                      if (!allowed) {
                        _context4.next = 45;
                        break;
                      }

                      this.scanActive = true;
                      document.body.classList.add("qrscanner"); // add the qrscanner class to body

                      _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.hideBackground();

                      _context4.next = 16;
                      return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.startScan();

                    case 16:
                      result = _context4.sent;
                      document.body.classList.remove("qrscanner"); // remove the qrscanner from the body

                      if (!result.hasContent) {
                        _context4.next = 45;
                        break;
                      }

                      this.result = result.content;
                      this.resultHasContent = true;
                      this.scanActive = false;
                      this.isbn = this.result;
                      _context4.next = 25;
                      return fetch("https://openlibrary.org/api/books?bibkeys=ISBN:" + this.result + "&jscmd=data&format=json");

                    case 25:
                      response = _context4.sent;
                      _context4.next = 28;
                      return response.json();

                    case 28:
                      data = _context4.sent;
                      //Title of the book
                      this.title = data["ISBN:" + this.result].title; //Authors, implementation for multiple

                      this.authors = data["ISBN:" + this.result].authors[0].name;

                      for (index = 1; index < data["ISBN:" + this.result].authors.length; index++) {
                        this.authors = this.authors + " " + data["ISBN:" + this.result].authors[index].name + " ";
                      } //Publisher


                      this.publishers = data["ISBN:" + this.result].publishers[0].name; //Publish date

                      this.publish_date = data["ISBN:" + this.result].publish_date; //Number of pages

                      if (data["ISBN:" + this.result].number_of_pages !== undefined) {
                        this.number_of_pages = data["ISBN:" + this.result].number_of_pages;
                      } else {
                        this.number_of_pages = "";
                      } //Book cover


                      if (data["ISBN:" + this.result].hasOwnProperty("cover")) {
                        this.cover = data["ISBN:" + this.result].cover.medium;
                      } else {
                        this.cover = "./assets/icon/bookCoverError.svg";
                      }

                      this.currentBook.authors = this.authors;
                      this.currentBook.cover = this.cover;
                      this.currentBook.isbn = this.isbn;
                      this.currentBook.number_of_pages = this.number_of_pages;
                      this.currentBook.publish_date = this.publish_date;
                      this.currentBook.publishers = this.publishers;
                      this.currentBook.title = this.title;
                      this.currentBook.bookShelfId = this.bookShelfId;
                      this.currentBook.createdAt = new Date();

                    case 45:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "checkPermission",
          value: function checkPermission() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", new Promise(function (resolve, reject) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var status, alert;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.checkPermission({
                                    force: true
                                  });

                                case 2:
                                  status = _context5.sent;

                                  if (!status.granted) {
                                    _context5.next = 7;
                                    break;
                                  }

                                  resolve(true);
                                  _context5.next = 16;
                                  break;

                                case 7:
                                  if (!status.denied) {
                                    _context5.next = 15;
                                    break;
                                  }

                                  _context5.next = 10;
                                  return this.alertController.create({
                                    header: "No permission",
                                    message: "Please allow camera access in your settings",
                                    buttons: [{
                                      text: "No",
                                      role: "cancel"
                                    }, {
                                      text: "Open Settings",
                                      handler: function handler() {
                                        resolve(false);

                                        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.openAppSettings();
                                      }
                                    }]
                                  });

                                case 10:
                                  alert = _context5.sent;
                                  _context5.next = 13;
                                  return alert.present();

                                case 13:
                                  _context5.next = 16;
                                  break;

                                case 15:
                                  resolve(false);

                                case 16:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }, {
          key: "stopScanner",
          value: function stopScanner() {
            document.body.classList.remove("qrscanner"); // remove the qrscanner from the body

            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.stopScan();

            this.scanActive = false;
          }
        }, {
          key: "addBook",
          value: function addBook() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.afs.addBook(this.currentBook);

                    case 2:
                      _capacitor_toast__WEBPACK_IMPORTED_MODULE_5__.Toast.show({
                        text: "Book was successfully added to your bookshelf!"
                      });

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return ScannerPage;
      }();

      _ScannerPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore
        }, {
          type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PickerController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }];
      };

      _ScannerPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-scanner",
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_scanner_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_scanner_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ScannerPage);
      /***/
    },

    /***/
    13206: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [hidden]=\"scanActive\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon\n      src=\"./assets/icon/bookLogo.svg\"\n      class=\"logo-large\"\n      slot=\"end\"\n    ></ion-icon>\n    <ion-title class=\"title-text\">ISBN Scanner</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content\n  [style.--background]=\"scanActive ? 'rgba(255,255,255,0.3)' : '#121212'\"\n>\n  <ion-row class=\"scanner-buttons ion-align-items-center\" [hidden]=\"scanActive\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-button\n        (click)=\"selectBookShelf()\"\n        expand=\"block\"\n        shape=\"round\"\n        style=\"\n          --background: rgba(var(--ion-color-success-rgb), 0.7);\n          margin-bottom: 10px;\n        \"\n      >\n        <span class=\"button-text\">{{selectBookShelfTitle}}</span>\n      </ion-button>\n      <ion-button\n        (click)=\"presentModal()\"\n        expand=\"block\"\n        shape=\"round\"\n        [disabled]=\"bookShelfId === null\"\n        style=\"\n          --background: rgba(var(--ion-color-success-rgb), 0.7);\n          margin-bottom: 10px;\n        \"\n      >\n        <span class=\"button-text\">Enter manually</span>\n      </ion-button>\n      <ion-button\n        (click)=\"startScanner()\"\n        expand=\"block\"\n        shape=\"round\"\n        [disabled]=\"bookShelfId === null\"\n        [hidden]=\"scanActive\"\n        style=\"\n          --background: rgba(var(--ion-color-success-rgb), 0.7);\n          margin-bottom: 10px;\n        \"\n      >\n        <span class=\"button-text\">Start scanning</span>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <div\n    class=\"div-center\"\n    *ngIf=\"resultHasContent && !scanActive else firstOpen\"\n  >\n    <ion-card class=\"card-style\">\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center\">{{ title }}</ion-card-title>\n      </ion-card-header>\n      <div class=\"div-center\">\n        <ion-card-content class=\"ion-align-self-center\" style=\"width: 350px\">\n          <ion-img src=\"{{ cover }}\"></ion-img>\n          <div>\n            <ion-list lines=\"none\">\n              <ion-item>\n                <ion-label class=\"ion-text-wrap\">\n                  Authors:\n                  <span> {{ authors }} </span>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label class=\"ion-text-wrap\"\n                  >Publisher: <span> {{ publishers }} </span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label class=\"ion-text-wrap\"\n                  >Publish date: <span> {{ publish_date }} </span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label class=\"ion-text-wrap\"\n                  >Number of pages:\n                  <span> {{ number_of_pages }} </span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label class=\"ion-text-wrap\"\n                  >ISBN: <span> {{ isbn }} </span></ion-label\n                >\n              </ion-item>\n            </ion-list>\n          </div>\n          <ion-button (click)=\"addBook()\" expand=\"block\" shape=\"round\">\n            <span class=\"button-text\">Add book to bookshelf </span>\n          </ion-button>\n        </ion-card-content>\n      </div>\n    </ion-card>\n  </div>\n\n  <ng-template #firstOpen>\n    <div class=\"div-center\" [hidden]=\"scanActive\">\n      <ion-grid fixed style=\"margin-bottom: 30px\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-icon\n              src=\"./assets/icon/bookCard.svg\"\n              class=\"card-icon\"\n            ></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" class=\"firstTitle\"\n            >Scanning a book is easy!\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" class=\"firstSubtitle\"\n            >Select a bookshelf and make sure to allign your book barcode with\n            the highlight box. Try to keep it steady!\n            <ion-icon\n              src=\"./assets/icon/bookCard.svg\"\n              class=\"logo-large\"\n              slot=\"end\"\n            ></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ng-template>\n</ion-content>\n<ion-row class=\"scanner-buttons ion-align-items-center\" [hidden]=\"!scanActive\">\n  <ion-col size=\"12\" class=\"ion-no-padding ion-text-center\">\n    <ion-button\n      (click)=\"stopScanner()\"\n      expand=\"block\"\n      shape=\"round\"\n      style=\"--background: rgba(var(--ion-color-danger-rgb), 0.7)\"\n    >\n      <span class=\"button-text\">Stop scanning</span>\n    </ion-button>\n  </ion-col>\n</ion-row>\n<div class=\"scanner-ui\" [hidden]=\"!scanActive\"></div>\n";
      /***/
    },

    /***/
    72683: function _(module) {
      module.exports = ".logo-large {\n  fill: #000000;\n  font-size: 40px;\n  margin-right: 30px;\n}\n\n.card-icon {\n  fill: #000000;\n  font-size: 100px;\n  margin-right: 0px;\n  margin-bottom: 30px;\n  width: 100%;\n}\n\n.title-text {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  margin-left: 40px;\n}\n\n.firstTitle {\n  font-family: LatoBoldItalic;\n  font-size: 32px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin-bottom: 5px;\n}\n\n.firstSubtitle {\n  font-family: Lato;\n  font-size: 14px;\n  color: rgba(246, 246, 246, 0.8);\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.div-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n}\n\n.button-text {\n  font-family: LatoBold;\n  color: rgba(246, 246, 246, 0.8);\n  font-size: 20px;\n  align-self: center;\n  justify-content: center;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.item-content {\n  margin-top: 0px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 25px;\n}\n\n.card-style {\n  border-radius: 20px;\n  color: #9c9c9c;\n  width: 90vw;\n  margin: 0px;\n  margin-bottom: 10%;\n  padding: 0px;\n  justify-content: center;\n  align-content: center;\n}\n\n.card-style ion-label {\n  font-family: Lato;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.5625px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #363636;\n}\n\n.card-style ion-label span {\n  font-family: LatoBold;\n  color: white;\n}\n\n.card-style ion-img {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  width: 100px;\n  height: 250px;\n  margin-right: 5px;\n  transform: scale(0.8);\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  float: left;\n  transform: translate(-10px, 0px);\n}\n\n.card-style ion-card-title {\n  margin-bottom: 0px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 24px;\n  line-height: 20px;\n  letter-spacing: 0.5625px;\n}\n\n.card-style ion-item {\n  margin-left: 5px;\n  border: 0px;\n  border-left: 2px solid #4a5cfc;\n}\n\n.scanner-buttons {\n  margin: 0px;\n  position: absolute;\n  bottom: 100px;\n  width: 80%;\n  left: 10vw;\n  height: 50px;\n  z-index: 11;\n  font-family: LatoExtraBold;\n  font-size: 40px;\n}\n\n.scanner-ui {\n  border: 2px solid #ffffff;\n  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);\n  content: \"\";\n  display: block;\n  left: 50%;\n  height: 300px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW5uZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztBQUViOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxXQUFXO0VBQ1gsaUJBQWlCO0FBRW5COztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxrQkFBa0I7QUFFcEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLCtCQUErQjtFQUMvQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUViOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixvQkFBdUI7RUFBdkIsdUJBQXVCO0FBRXpCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUV2Qjs7QUFWQTtFQVVJLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdDQUFnQztBQUlwQzs7QUFwQkE7RUFrQk0scUJBQXFCO0VBQ3JCLFlBQTZCO0FBTW5DOztBQXpCQTtFQXVCSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0NBQWdDO0FBTXBDOztBQXZDQTtFQW9DSSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0FBTzVCOztBQWhEQTtFQTRDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDhCQUE4QjtBQVFsQzs7QUFKQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsZUFBZTtBQU9qQjs7QUFMQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBNEM7RUFDNUMsV0FBVztFQUNYLGNBQWM7RUFDZCxTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFRZCIsImZpbGUiOiJzY2FubmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWxhcmdlIHtcbiAgZmlsbDogIzAwMDAwMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4uY2FyZC1pY29uIHtcbiAgZmlsbDogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvRXh0cmFCb2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4uZmlyc3RUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvQm9sZEl0YWxpYztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmZpcnN0U3VidGl0bGUge1xuICBmb250LWZhbWlseTogTGF0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiYSgyNDYsIDI0NiwgMjQ2LCAwLjgpO1xuICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLmRpdi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi5idXR0b24tdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvQm9sZDtcbiAgY29sb3I6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMC44KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbn1cblxuLml0ZW0tY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmNhcmQtc3R5bGUge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogIzljOWM5YztcbiAgd2lkdGg6IDkwdnc7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIHBhZGRpbmc6IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzNjM2MzY7XG4gICAgc3BhbiB7XG4gICAgICBmb250LWZhbWlseTogTGF0b0JvbGQ7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICB9XG4gIH1cbiAgaW9uLWltZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIDBweCk7XG4gIH1cbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LWZhbWlseTogTGF0b0JvbGRJdGFsaWM7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcbiAgfVxuICBpb24taXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM0YTVjZmM7XG4gIH1cbn1cblxuLnNjYW5uZXItYnV0dG9ucyB7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGxlZnQ6IDEwdnc7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogMTE7XG4gIGZvbnQtZmFtaWx5OiBMYXRvRXh0cmFCb2xkO1xuICBmb250LXNpemU6IDQwcHg7XG59XG4uc2Nhbm5lci11aSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwMHZtYXggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDMwMHB4O1xufVxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_scanner_scanner_module_ts-es5.js.map