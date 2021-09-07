"use strict";
(self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_landing_landing_module_ts"],{

/***/ 62490:
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/landing-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageRoutingModule": function() { return /* binding */ LandingPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.page */ 84808);




const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_0__.LandingPage
    }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LandingPageRoutingModule);



/***/ }),

/***/ 97241:
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageModule": function() { return /* binding */ LandingPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-routing.module */ 62490);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page */ 84808);







let LandingPageModule = class LandingPageModule {
};
LandingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPageRoutingModule
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_1__.LandingPage]
    })
], LandingPageModule);



/***/ }),

/***/ 84808:
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPage": function() { return /* binding */ LandingPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_landing_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./landing.page.html */ 35288);
/* harmony import */ var _landing_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page.scss */ 3815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let LandingPage = class LandingPage {
    constructor() { }
    ngOnInit() {
    }
};
LandingPage.ctorParameters = () => [];
LandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-landing',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_landing_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_landing_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LandingPage);



/***/ }),

/***/ 35288:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/landing/landing.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <div class=\"div-center\" style=\"margin-left: 40px; margin-top: 50px\">\n    <ion-icon src=\"./assets/icon/mediumLogo.svg\" class=\"logo-medium\"></ion-icon>\n  </div>\n</ion-header>\n<ion-content>\n  <div class=\"div-center\" style=\"padding-bottom: 30%\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\" class=\"welcome-text\"> Welcome to BookSelf </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" class=\"sub-text\">\n          Register an account and start scanning your favourite books or find\n          new ones to add to your digital bookshelf.\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" class=\"div-center\"\n          ><ion-button id=\"reg-button\" [routerLink]=\"['../register']\"\n            ><span class=\"button-text\">Register</span></ion-button\n          >\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" class=\"div-center\"\n          ><ion-button\n            id=\"login-button\"\n            style=\"margin-top: 10px\"\n            [routerLink]=\"['../login']\"\n            ><span class=\"button-text\">Login</span></ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n<ion-footer\n  ><div class=\"footer-text\">\n    Proiect Licenta - Ion Mihnea-Andrei - Facultatea de Automatica si\n    Calculatoare - Universitatea Politehnica din Bucuresti\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ 3815:
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss ***!
  \*************************************************/
/***/ (function(module) {

module.exports = ".div-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.logo-medium {\n  fill: #000000;\n  width: 338px;\n  height: 60px;\n  justify-content: center;\n  align-items: center;\n}\n\n.welcome-text {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  line-height: 47px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.sub-text {\n  font-family: LatoBoldItalic !important;\n  color: #bebebe;\n  width: 100%;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.5625px;\n  text-align: center !important;\n}\n\n.button-text {\n  font-family: LatoBold;\n  color: rgba(246, 246, 246, 0.8);\n  font-size: 14px;\n  align-self: center;\n  justify-content: center;\n  text-transform: none;\n  text-transform: initial;\n}\n\n.footer-text {\n  font-family: LatoLight;\n  color: #bebebe;\n  font-size: 14px;\n  align-self: center;\n  justify-content: center;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n#reg-button {\n  --background: rgba(var(--ion-color-success-rgb), 0.7);\n  margin-top: 30px;\n  height: 50px;\n  width: 90%;\n  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  --border-radius: 10px;\n}\n\n#login-button {\n  --background: #2f2f2f;\n  height: 50px;\n  width: 90%;\n  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  --border-radius: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUVyQjs7QUFBQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsNENBQTRDO0FBRzlDOztBQURBO0VBQ0Usc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsNkJBQTZCO0FBSS9COztBQUZBO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixvQkFBdUI7RUFBdkIsdUJBQXVCO0FBS3pCOztBQUhBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBTXJCOztBQUpBO0VBQ0UscURBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7RUFDViwrQ0FBK0M7RUFDL0MscUJBQWdCO0FBT2xCOztBQUxBO0VBQ0UscUJBQWE7RUFDYixZQUFZO0VBQ1osVUFBVTtFQUNWLCtDQUErQztFQUMvQyxxQkFBZ0I7QUFRbEIiLCJmaWxlIjoibGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9nby1tZWRpdW0ge1xuICBmaWxsOiAjMDAwMDAwO1xuICB3aWR0aDogMzM4cHg7XG4gIGhlaWdodDogNjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2VsY29tZS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IExhdG9FeHRyYUJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbi5zdWItdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvQm9sZEl0YWxpYyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2JlYmViZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9uLXRleHQge1xuICBmb250LWZhbWlseTogTGF0b0JvbGQ7XG4gIGNvbG9yOiByZ2JhKDI0NiwgMjQ2LCAyNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG59XG4uZm9vdGVyLXRleHQge1xuICBmb250LWZhbWlseTogTGF0b0xpZ2h0O1xuICBjb2xvcjogI2JlYmViZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4jcmVnLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IpLCAwLjcpO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDFweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4jbG9naW4tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMmYyZjJmO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDFweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_landing_landing_module_ts-es2015.js.map