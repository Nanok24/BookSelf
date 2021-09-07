"use strict";
(self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_review-search_review-search_module_ts"],{

/***/ 79534:
/*!*********************************************************************!*\
  !*** ./src/app/pages/review-search/review-search-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewSearchPageRoutingModule": function() { return /* binding */ ReviewSearchPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _review_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review-search.page */ 20289);




const routes = [
    {
        path: '',
        component: _review_search_page__WEBPACK_IMPORTED_MODULE_0__.ReviewSearchPage
    }
];
let ReviewSearchPageRoutingModule = class ReviewSearchPageRoutingModule {
};
ReviewSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReviewSearchPageRoutingModule);



/***/ }),

/***/ 169:
/*!*************************************************************!*\
  !*** ./src/app/pages/review-search/review-search.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewSearchPageModule": function() { return /* binding */ ReviewSearchPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/filter.pipe */ 9216);
/* harmony import */ var _review_search_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-search-routing.module */ 79534);
/* harmony import */ var _review_search_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-search.page */ 20289);








let ReviewSearchPageModule = class ReviewSearchPageModule {
};
ReviewSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _review_search_routing_module__WEBPACK_IMPORTED_MODULE_1__.ReviewSearchPageRoutingModule
        ],
        declarations: [_review_search_page__WEBPACK_IMPORTED_MODULE_2__.ReviewSearchPage, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe]
    })
], ReviewSearchPageModule);



/***/ }),

/***/ 20289:
/*!***********************************************************!*\
  !*** ./src/app/pages/review-search/review-search.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewSearchPage": function() { return /* binding */ ReviewSearchPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_review_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./review-search.page.html */ 12644);
/* harmony import */ var _review_search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-search.page.scss */ 24597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 36363);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firestore.service */ 91343);








let ReviewSearchPage = class ReviewSearchPage {
    constructor(afs, afAuth, angularFirestore) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.angularFirestore = angularFirestore;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.angularFirestore.collection('bookshelfs').snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((booksShelves) => {
                this.booksShelves = booksShelves
                    .map((t) => (Object.assign({ id: t.payload.doc.id }, t.payload.doc.data())))
                    .filter(t => t.userId === user.uid);
                return this.angularFirestore.collection('books').snapshotChanges();
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((books) => {
                const unfilteredBooks = books
                    .map((t) => (Object.assign({ id: t.payload.doc.id }, t.payload.doc.data())));
                this.books = unfilteredBooks.filter(t => this.booksShelves.map(x => x.id).includes(t.bookShelfId));
                return this.angularFirestore.collection('stars').snapshotChanges();
            })).subscribe((reviews) => {
                const unfilteredReviews = reviews
                    .map((t) => (Object.assign({ id: t.payload.doc.id }, t.payload.doc.data())));
                this.reviews = unfilteredReviews.filter(t => this.books.map(x => x.id).includes(t.bookId));
            });
        }
    }
};
ReviewSearchPage.ctorParameters = () => [
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__.FirestoreService },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore }
];
ReviewSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-review-search',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_review_search_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_review_search_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReviewSearchPage);



/***/ }),

/***/ 91343:
/*!***********************************************!*\
  !*** ./src/app/services/firestore.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirestoreService": function() { return /* binding */ FirestoreService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/auth */ 36363);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);




let FirestoreService = class FirestoreService {
    constructor(afAuth, afStore) {
        this.afAuth = afAuth;
        this.afStore = afStore;
        this.currentUser = null;
        this.currentReview = null;
        this.afAuth.onAuthStateChanged((user) => {
            this.currentUser = user;
        });
    }
    // getBooks() {
    //   this.afStore
    //     .collection('books')
    //     .get()
    //     .forEach((el) => {
    //       console.log(el);
    //     });
    // }
    // Asta functioneaza, daca tu ai alta modalitate, poti sa o modifici schimbi
    addBook(book) {
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
};
FirestoreService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__.AngularFireAuth },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore }
];
FirestoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], FirestoreService);



/***/ }),

/***/ 12644:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/review-search/review-search.page.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-text\">Search reviews</ion-title>\n  </ion-toolbar>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col\n        size=\"12\"\n        class=\"ion-align-items-center ion-justify-content-center\"\n      >\n        <ion-searchbar\n          showCancelButton=\"never\"\n          placeholder=\"Filter by Book Title\"\n          [(ngModel)]=\"searchTerm\"\n          animated\n        ></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-align-items-center ion-justify-content-center\">\n    <ion-row class=\"ion-justify-content-center\">\n      <!-- tot ce e in ion-col e template-ul pentru afisarea recenziilor -->\n      <ion-col\n        size=\"12\"\n        size-md=\"6\"\n        size-lg=\"4\"\n        style=\"width: 390px\"\n        *ngFor=\"let review of reviews| filter: searchTerm\"\n      >\n        <ion-card>\n          <ion-card-header>\n            <ion-item lines=\"none\">\n              <ion-label class=\"card-title ion-text-wrap\"\n                >{{review.title}}</ion-label\n              >\n            </ion-item>\n            <ion-card-subtitle>{{review.bookAuthors}}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content\n            class=\"\n              ion-text-center ion-justify-content-between ion-align-items-center\n            \"\n          >\n            <div\n              style=\"width: 100px; height: 250px\"\n              class=\"ion-float-left ion-align-items-center\"\n            >\n              <ion-img\n                class=\"ion-align-items-center\"\n                src=\"{{review.cover}}\"\n                style=\"\n                  width: 100px;\n                  height: 250px;\n                  margin-bottom: 20%;\n                  display: inline-block;\n                \"\n              ></ion-img>\n            </div>\n            <ion-list lines=\"none\">\n              <ion-item class=\"review-text\"> {{review.text}} </ion-item>\n              <ion-item>\n                <ion-label> {{review.rating}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 24597:
/*!*************************************************************!*\
  !*** ./src/app/pages/review-search/review-search.page.scss ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "ion-searchbar {\n  --background: #1f1f1f;\n  --border-radius: 20px;\n  width: 100%;\n}\n\n.div-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  margin: 0px !important;\n}\n\nion-card {\n  border-radius: 10px;\n  padding: 0 !important;\n  margin-left: 0px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  width: 100%;\n}\n\n.card-title {\n  margin-bottom: 0px;\n  margin-left: 10px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 24px;\n  line-height: 25px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 10px;\n}\n\n.title-text {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  width: 80%;\n  padding-right: 30px;\n}\n\n.review-text {\n  font-family: Lato;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #363636;\n  white-space: normal;\n}\n\nion-card-subtitle {\n  margin-bottom: 0px;\n  font-family: LatoItalic;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 18px;\n  line-height: 20px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 5px;\n  margin-left: 5px;\n}\n\n.card-title {\n  margin-bottom: 0px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 24px;\n  line-height: 30px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWE7RUFDYixxQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLFlBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InJldmlldy1zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpdi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IExhdG9Cb2xkSXRhbGljO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50aXRsZS10ZXh0IHtcclxuICBmb250LWZhbWlseTogTGF0b0V4dHJhQm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB3aWR0aDogODAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5yZXZpZXctdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM2MzYzNjtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvSXRhbGljO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IExhdG9Cb2xkSXRhbGljO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_review-search_review-search_module_ts-es2015.js.map