(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_book-search_book-search_module_ts"], {
    /***/
    47230: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookSearchPageRoutingModule": function BookSearchPageRoutingModule() {
          return (
            /* binding */
            _BookSearchPageRoutingModule
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


      var _book_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./book-search.page */
      47208);

      var routes = [{
        path: '',
        component: _book_search_page__WEBPACK_IMPORTED_MODULE_0__.BookSearchPage
      }];

      var _BookSearchPageRoutingModule = function BookSearchPageRoutingModule() {
        _classCallCheck(this, BookSearchPageRoutingModule);
      };

      _BookSearchPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BookSearchPageRoutingModule);
      /***/
    },

    /***/
    69470: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookSearchPageModule": function BookSearchPageModule() {
          return (
            /* binding */
            _BookSearchPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _book_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./book-search-routing.module */
      47230);
      /* harmony import */


      var _book_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./book-search.page */
      47208);
      /* harmony import */


      var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../pipes/filter.pipe */
      9216);

      var _BookSearchPageModule = function BookSearchPageModule() {
        _classCallCheck(this, BookSearchPageModule);
      };

      _BookSearchPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _book_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookSearchPageRoutingModule],
        declarations: [_book_search_page__WEBPACK_IMPORTED_MODULE_1__.BookSearchPage, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe]
      })], _BookSearchPageModule);
      /***/
    },

    /***/
    47208: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookSearchPage": function BookSearchPage() {
          return (
            /* binding */
            _BookSearchPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_book_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./book-search.page.html */
      90263);
      /* harmony import */


      var _book_search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./book-search.page.scss */
      7776);
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      85816);
      /* harmony import */


      var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/firestore.service */
      91343);

      var _BookSearchPage = /*#__PURE__*/function () {
        function BookSearchPage(afs, afAuth, angularFirestore) {
          _classCallCheck(this, BookSearchPage);

          this.afs = afs;
          this.afAuth = afAuth;
          this.angularFirestore = angularFirestore;
        }

        _createClass(BookSearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            var user = JSON.parse(localStorage.getItem('user'));

            if (user) {
              this.angularFirestore.collection('bookshelfs').snapshotChanges().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (booksShelves) {
                _this.booksShelves = booksShelves.map(function (t) {
                  return Object.assign({
                    id: t.payload.doc.id
                  }, t.payload.doc.data());
                }).filter(function (t) {
                  return t.userId === user.uid;
                });
                return _this.angularFirestore.collection('books').snapshotChanges();
              })).subscribe(function (books) {
                var unfilteredBooks = books.map(function (t) {
                  return Object.assign({
                    id: t.payload.doc.id
                  }, t.payload.doc.data());
                });
                _this.books = unfilteredBooks.filter(function (t) {
                  return _this.booksShelves.map(function (x) {
                    return x.id;
                  }).includes(t.bookShelfId);
                });
              });
            }
          }
        }]);

        return BookSearchPage;
      }();

      _BookSearchPage.ctorParameters = function () {
        return [{
          type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__.FirestoreService
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
        }];
      };

      _BookSearchPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-book-search',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_book_search_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_book_search_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _BookSearchPage);
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
          var _this2 = this;

          _classCallCheck(this, FirestoreService);

          this.afAuth = afAuth;
          this.afStore = afStore;
          this.currentUser = null;
          this.currentReview = null;
          this.afAuth.onAuthStateChanged(function (user) {
            _this2.currentUser = user;
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
    90263: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-text\">Search library</ion-title>\n  </ion-toolbar>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col\n        size=\"12\"\n        class=\"ion-align-items-center ion-justify-content-center\"\n      >\n        <ion-searchbar\n          showCancelButton=\"never\"\n          placeholder=\"Filter by Book Title\"\n          [(ngModel)]=\"searchTerm\"\n          animated\n        ></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-align-items-center ion-justify-content-center\">\n    <ion-row class=\"ion-justify-content-center\">\n      <!-- tot ce e in ion-col e template-ul pentru afisarea cartilor -->\n      <ion-col\n        size=\"12\"\n        size-md=\"6\"\n        size-lg=\"4\"\n        style=\"width: 390px\"\n        *ngFor=\"let book of books| filter:searchTerm\"\n      >\n        <ion-card>\n          <ion-card-header>\n            <ion-item lines=\"none\">\n              <ion-label class=\"card-title ion-text-wrap\"\n                >{{book.title}}</ion-label\n              >\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content\n            class=\"\n              ion-text-center\n              ion-justify-content-between\n              ion-align-center-center\n            \"\n          >\n            <div\n              style=\"width: 100px; height: 250px\"\n              class=\"ion-float-left ion-align-items-center\"\n            >\n              <ion-img\n                class=\"ion-float-left ion-align-self-center\"\n                src=\"{{book.cover}}\"\n                style=\"width: 100px; height: 250px; margin-top: 10%\"\n              ></ion-img>\n            </div>\n            <ion-list lines=\"none\">\n              <ion-item>\n                <ion-label>Authors: <span>{{book.authors}}</span></ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label\n                  >Publisher: <span>{{book.publishers}}</span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label\n                  >Publish date: <span>{{book.publish_date}}</span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label\n                  >Number of pages:\n                  <span>{{book.number_of_pages}}</span></ion-label\n                >\n              </ion-item>\n              <ion-item>\n                <ion-label>ISBN: <span>{{book.isbn}}</span></ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    7776: function _(module) {
      module.exports = "ion-searchbar {\n  --background: #1f1f1f;\n  --border-radius: 20px;\n  width: 100%;\n}\n\n.div-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  margin: 0px !important;\n}\n\nion-card {\n  border-radius: 10px;\n  padding: 0 !important;\n  margin-left: 0px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  width: 100%;\n}\n\nion-card ion-list ion-label {\n  font-family: Lato;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.5625px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #363636;\n  white-space: normal;\n}\n\nion-card ion-list ion-label span {\n  font-family: LatoBold;\n  color: white;\n}\n\nion-card ion-list ion-item {\n  margin-left: 15px;\n  border: 0px;\n  border-left: 2px solid rgba(74, 92, 252, 0.7);\n}\n\n.card-title {\n  margin-bottom: 0px;\n  margin-left: 10px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 24px;\n  line-height: 25px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 10px;\n}\n\n.title-text {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  width: 80%;\n  padding-right: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFhO0VBQ2IscUJBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBUkE7RUFVTSxpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBRXpCOztBQW5CQTtFQW1CUSxxQkFBcUI7RUFDckIsWUFBNkI7QUFJckM7O0FBeEJBO0VBd0JNLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsNkNBQTZDO0FBSW5EOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsWUFBNkI7RUFDN0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUVyQjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsVUFBVTtFQUNWLG1CQUFtQjtBQUVyQiIsImZpbGUiOiJib29rLXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICMxZjFmMWY7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGl2LWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBpb24tbGlzdCB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzNjM2MzY7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvQm9sZDtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSg3NCwgOTIsIDI1MiwgMC43KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IExhdG9Cb2xkSXRhbGljO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50aXRsZS10ZXh0IHtcclxuICBmb250LWZhbWlseTogTGF0b0V4dHJhQm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB3aWR0aDogODAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_book-search_book-search_module_ts-es5.js.map