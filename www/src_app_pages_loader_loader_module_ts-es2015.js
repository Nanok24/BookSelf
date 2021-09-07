"use strict";
(self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_loader_loader_module_ts"],{

/***/ 41369:
/*!*******************************************************!*\
  !*** ./src/app/pages/loader/loader-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPageRoutingModule": function() { return /* binding */ LoaderPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.page */ 37281);




const routes = [
    {
        path: '',
        component: _loader_page__WEBPACK_IMPORTED_MODULE_0__.LoaderPage
    }
];
let LoaderPageRoutingModule = class LoaderPageRoutingModule {
};
LoaderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoaderPageRoutingModule);



/***/ }),

/***/ 38487:
/*!***********************************************!*\
  !*** ./src/app/pages/loader/loader.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPageModule": function() { return /* binding */ LoaderPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _loader_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader-routing.module */ 41369);
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.page */ 37281);







let LoaderPageModule = class LoaderPageModule {
};
LoaderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loader_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoaderPageRoutingModule
        ],
        declarations: [_loader_page__WEBPACK_IMPORTED_MODULE_1__.LoaderPage]
    })
], LoaderPageModule);



/***/ }),

/***/ 37281:
/*!*********************************************!*\
  !*** ./src/app/pages/loader/loader.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderPage": function() { return /* binding */ LoaderPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_loader_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./loader.page.html */ 56274);
/* harmony import */ var _loader_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.page.scss */ 2604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);





let LoaderPage = class LoaderPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        setTimeout(() => {
            this.router.navigate(['landing']);
        }, 3000);
    }
};
LoaderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoaderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-loader',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_loader_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_loader_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoaderPage);



/***/ }),

/***/ 56274:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/loader/loader.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <div class=\"div-center\">\n    <ion-grid fixed>\n      <ion-row class=\"title-screen\">\n        <ion-col size=\"12\" class=\"title-text\">BookSelf</ion-col>\n      </ion-row>\n      <ion-row class=\"title-screen\">\n        <ion-col size=\"12\" class=\"title-text\"\n          ><ion-icon\n            src=\"./assets/icon/bookLogo.svg\"\n            class=\"logo-large\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div style=\"text-align: center; margin-bottom: 40px\">\n    <ion-spinner name=\"bubbles\" color=\"success\"></ion-spinner>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ 2604:
/*!***********************************************!*\
  !*** ./src/app/pages/loader/loader.page.scss ***!
  \***********************************************/
/***/ (function(module) {

module.exports = ".div-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.title-screen {\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  margin-bottom: 20px;\n}\n\n.title-text {\n  font-family: Merriweather-BoldItalic;\n  font-size: 72px;\n  line-height: 47px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  -webkit-text-stroke: 2px black;\n  text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);\n}\n\n.logo-large {\n  fill: #000000;\n  text-align: center;\n  font-size: 180px;\n}\n\nion-spinner {\n  align-items: flex-end;\n  text-align: center;\n  transform: scale(3);\n}\n\nion-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFFckI7O0FBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5Qiw0Q0FBNEM7QUFHOUM7O0FBREE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUlsQjs7QUFGQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBS3JCOztBQUhBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFNekIiLCJmaWxlIjoibG9hZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi50aXRsZS1zY3JlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpdGxlLXRleHQge1xuICBmb250LWZhbWlseTogTWVycml3ZWF0aGVyLUJvbGRJdGFsaWM7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggYmxhY2s7XG4gIHRleHQtc2hhZG93OiAwcHggOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLmxvZ28tbGFyZ2Uge1xuICBmaWxsOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTgwcHg7XG59XG5pb24tc3Bpbm5lciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xufVxuaW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_loader_loader_module_ts-es2015.js.map