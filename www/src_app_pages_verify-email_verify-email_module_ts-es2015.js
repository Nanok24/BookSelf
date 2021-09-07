"use strict";
(self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_verify-email_verify-email_module_ts"],{

/***/ 5180:
/*!**********************************************************************!*\
  !*** ./node_modules/@capacitor/app-launcher/dist/esm/definitions.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 31529:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/app-launcher/dist/esm/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLauncher": function() { return /* binding */ AppLauncher; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 41899);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 5180);

const AppLauncher = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('AppLauncher', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_app-launcher_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 89527)).then(m => new m.AppLauncherWeb()),
});




/***/ }),

/***/ 20608:
/*!*******************************************************************!*\
  !*** ./src/app/pages/verify-email/verify-email-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPageRoutingModule": function() { return /* binding */ VerifyEmailPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email.page */ 11285);




const routes = [
    {
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailPage
    }
];
let VerifyEmailPageRoutingModule = class VerifyEmailPageRoutingModule {
};
VerifyEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyEmailPageRoutingModule);



/***/ }),

/***/ 28736:
/*!***********************************************************!*\
  !*** ./src/app/pages/verify-email/verify-email.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPageModule": function() { return /* binding */ VerifyEmailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email-routing.module */ 20608);
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email.page */ 11285);







let VerifyEmailPageModule = class VerifyEmailPageModule {
};
VerifyEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailPageRoutingModule,
        ],
        declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_1__.VerifyEmailPage],
    })
], VerifyEmailPageModule);



/***/ }),

/***/ 11285:
/*!*********************************************************!*\
  !*** ./src/app/pages/verify-email/verify-email.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPage": function() { return /* binding */ VerifyEmailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verify_email_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./verify-email.page.html */ 48598);
/* harmony import */ var _verify_email_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email.page.scss */ 84112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _capacitor_app_launcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/app-launcher */ 31529);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);







let VerifyEmailPage = class VerifyEmailPage {
    constructor(authService, alertController) {
        this.authService = authService;
        this.alertController = alertController;
    }
    openGmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_app_launcher__WEBPACK_IMPORTED_MODULE_3__.AppLauncher.canOpenUrl({
                url: 'com.google.android.gm',
            });
            if (value) {
                yield _capacitor_app_launcher__WEBPACK_IMPORTED_MODULE_3__.AppLauncher.openUrl({ url: 'com.google.android.gm' });
            }
            else {
                const alert = yield this.alertController.create({
                    header: 'Error',
                    message: "Couldn't open/find Gmail app",
                    buttons: ['OK'],
                });
                yield alert.present();
            }
        });
    }
};
VerifyEmailPage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
VerifyEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-verify-email',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verify_email_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_verify_email_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyEmailPage);



/***/ }),

/***/ 48598:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/verify-email/verify-email.page.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"div-title\" style=\"margin-left: 40px\">\n    <ion-icon src=\"./assets/icon/mediumLogo.svg\" class=\"logo-medium\"></ion-icon>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"div-center\" style=\"padding-bottom: 30%\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center ion-justify-items-center\">\n        <ion-col size=\"12\" class=\"welcome-text\"> Wait a second! </ion-col>\n\n        <p class=\"sub-text\">\n          Please check your email and click on the link to verify your email\n          address.\n        </p>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"8\"\n          ><ion-button id=\"reg-button\" (click)=\"openGmail()\"\n            ><ion-icon src=\"./assets/icon/inboxIcon.svg\"></ion-icon\n            ><span class=\"button-text\">Open Gmail App</span></ion-button\n          >\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"8\"\n          ><ion-button\n            id=\"reg-button\"\n            (click)=\"authService.sendVerificationEmail()\"\n            class=\"ion-align-self-center\"\n            ><ion-icon name=\"send-sharp\"></ion-icon\n            ><span class=\"button-text\"\n              >Resend verification email</span\n            ></ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 84112:
/*!***********************************************************!*\
  !*** ./src/app/pages/verify-email/verify-email.page.scss ***!
  \***********************************************************/
/***/ (function(module) {

module.exports = ".div-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.div-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.logo-medium {\n  fill: #000000;\n  width: 338px;\n  height: 60px;\n  justify-content: center;\n  align-items: center;\n}\n\nion-toolbar {\n  --background: --ion-background-color;\n}\n\n.button-text {\n  font-family: LatoBoldItalic;\n  color: rgba(246, 246, 246, 0.8);\n  font-size: 15px;\n  align-self: center;\n  justify-content: center;\n  text-transform: none;\n  text-transform: initial;\n  margin-left: 10px;\n}\n\n#reg-button {\n  --background: rgba(var(--ion-color-primary-rgb), 0.7);\n  margin-top: 30px;\n  height: 50px;\n  width: 100%;\n  padding: 0px;\n  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  --border-radius: 10px;\n}\n\n.welcome-text {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  line-height: 47px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  margin-bottom: 2%;\n  margin-top: 5%;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.sub-text {\n  font-family: LatoBoldItalic !important;\n  color: #bebebe;\n  width: 100%;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.5625px;\n  text-align: center !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFFZDs7QUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFHckI7O0FBREE7RUFDRSxvQ0FBYTtBQUlmOztBQUZBO0VBQ0UsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixvQkFBdUI7RUFBdkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUtuQjs7QUFGQTtFQUNFLHFEQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLCtDQUErQztFQUMvQyxxQkFBZ0I7QUFLbEI7O0FBSEE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNENBQTRDO0FBTTlDOztBQUpBO0VBQ0Usc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsNkJBQTZCO0FBTy9CIiwiZmlsZSI6InZlcmlmeS1lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGl2LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9nby1tZWRpdW0ge1xuICBmaWxsOiAjMDAwMDAwO1xuICB3aWR0aDogMzM4cHg7XG4gIGhlaWdodDogNjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogLS1pb24tYmFja2dyb3VuZC1jb2xvcjtcbn1cbi5idXR0b24tdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvQm9sZEl0YWxpYztcbiAgY29sb3I6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbiNyZWctYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuNyk7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm94LXNoYWRvdzogMXB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi53ZWxjb21lLXRleHQge1xuICBmb250LWZhbWlseTogTGF0b0V4dHJhQm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTYyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG4uc3ViLXRleHQge1xuICBmb250LWZhbWlseTogTGF0b0JvbGRJdGFsaWMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNiZWJlYmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_verify-email_verify-email_module_ts-es2015.js.map