"use strict";
(self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 51889:
/*!***********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/definitions.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportedFormat": function() { return /* binding */ SupportedFormat; }
/* harmony export */ });
var SupportedFormat;
(function (SupportedFormat) {
    // 1D Product
    SupportedFormat["UPC_A"] = "UPC_A";
    SupportedFormat["UPC_E"] = "UPC_E";
    SupportedFormat["UPC_EAN_EXTENSION"] = "UPC_EAN_EXTENSION";
    SupportedFormat["EAN_8"] = "EAN_8";
    SupportedFormat["EAN_13"] = "EAN_13";
    // 1D Industrial
    SupportedFormat["CODE_39"] = "CODE_39";
    SupportedFormat["CODE_39_MOD_43"] = "CODE_39_MOD_43";
    SupportedFormat["CODE_93"] = "CODE_93";
    SupportedFormat["CODE_128"] = "CODE_128";
    SupportedFormat["CODABAR"] = "CODABAR";
    SupportedFormat["ITF"] = "ITF";
    SupportedFormat["ITF_14"] = "ITF_14";
    // 2D
    SupportedFormat["AZTEC"] = "AZTEC";
    SupportedFormat["DATA_MATRIX"] = "DATA_MATRIX";
    SupportedFormat["MAXICODE"] = "MAXICODE";
    SupportedFormat["PDF_417"] = "PDF_417";
    SupportedFormat["QR_CODE"] = "QR_CODE";
    SupportedFormat["RSS_14"] = "RSS_14";
    SupportedFormat["RSS_EXPANDED"] = "RSS_EXPANDED";
})(SupportedFormat || (SupportedFormat = {}));


/***/ }),

/***/ 6921:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportedFormat": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.SupportedFormat; },
/* harmony export */   "BarcodeScanner": function() { return /* binding */ BarcodeScanner; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 41899);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 51889);

const BarcodeScanner = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('BarcodeScanner', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_barcode-scanner_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 67793)).then(m => new m.BarcodeScannerWeb()),
});




/***/ }),

/***/ 96610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 10678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
        children: [
            {
                path: 'bookshelf',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_bookshelf_add-book-modal_add-book-modal_component_ts-src_app_services_f-9dafa4"), __webpack_require__.e("src_app_pages_bookshelf_bookshelf_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../bookshelf/bookshelf.module */ 35879)).then((m) => m.BookshelfPageModule)
            },
            {
                path: 'scanner',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_bookshelf_add-book-modal_add-book-modal_component_ts-src_app_services_f-9dafa4"), __webpack_require__.e("src_app_pages_scanner_scanner_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../scanner/scanner.module */ 33983)).then((m) => m.ScannerPageModule)
            },
            {
                path: 'review',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_review_review_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../review/review.module */ 61559)).then((m) => m.ReviewPageModule)
            },
            {
                path: '',
                redirectTo: '/home/bookshelf',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/bookshelf',
        pathMatch: 'full'
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 96610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 10678);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 10678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 99090);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 26613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor-community/barcode-scanner */ 6921);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7602);






let HomePage = class HomePage {
    constructor(alertController) {
        this.alertController = alertController;
        this.result = null;
        this.scanActive = false;
    }
    ngAfterViewInit() {
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.prepare();
    }
    ngOnDestroy() {
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.stopScan();
    }
    startScanner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const allowed = yield this.checkPermission();
            if (allowed) {
                this.scanActive = true;
                document.body.classList.add('qrscanner'); // add the qrscanner class to body
                _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.hideBackground();
                const result = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.startScan();
                document.body.classList.remove('qrscanner'); // remove the qrscanner from the body
                if (result.hasContent) {
                    this.result = result.content;
                    this.scanActive = false;
                }
            }
        });
    }
    checkPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                const status = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.checkPermission({ force: true });
                if (status.granted) {
                    resolve(true);
                }
                else if (status.denied) {
                    const alert = yield this.alertController.create({
                        header: 'No permission',
                        message: 'Please allow camera access in your settings',
                        buttons: [
                            {
                                text: 'No',
                                role: 'cancel',
                            },
                            {
                                text: 'Open Settings',
                                handler: () => {
                                    resolve(false);
                                    _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.openAppSettings();
                                },
                            },
                        ],
                    });
                    yield alert.present();
                }
                else {
                    resolve(false);
                }
            }));
        });
    }
    stopScanner() {
        document.body.classList.remove('qrscanner'); // remove the qrscanner from the body
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.stopScan();
        this.scanActive = false;
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 99090:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/home.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar\n    slot=\"bottom\"\n    style=\"--color-selected: rgba(var(--ion-color-primary-rgb), 0.9)\"\n  >\n    <ion-tab-button tab=\"bookshelf\" root>\n      <ion-icon\n        src=\"../assets/icon/bookshelfIcon.svg\"\n        style=\"width: 32px; height: 29px\"\n      ></ion-icon>\n      <ion-label>Bookshelf</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button\n      tab=\"scanner\"\n      style=\"--color-selected: rgba(var(--ion-color-success-rgb), 0.8)\"\n    >\n      <ion-icon name=\"scan\" size=\"large\"></ion-icon>\n      <ion-label>Scanner</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button\n      tab=\"review\"\n      style=\"--color-selected: rgba(var(--ion-color-warning-rgb), 0.8)\"\n    >\n      <ion-icon name=\"star\" size=\"large\"></ion-icon>\n      <ion-label>Reviews</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ 26613:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ (function(module) {

module.exports = "ion-tab-bar {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXIge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts-es2015.js.map