(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_home_home_module_ts"], {
    /***/
    51889: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportedFormat": function SupportedFormat() {
          return (
            /* binding */
            _SupportedFormat
          );
        }
        /* harmony export */

      });

      var _SupportedFormat;

      (function (SupportedFormat) {
        // 1D Product
        SupportedFormat["UPC_A"] = "UPC_A";
        SupportedFormat["UPC_E"] = "UPC_E";
        SupportedFormat["UPC_EAN_EXTENSION"] = "UPC_EAN_EXTENSION";
        SupportedFormat["EAN_8"] = "EAN_8";
        SupportedFormat["EAN_13"] = "EAN_13"; // 1D Industrial

        SupportedFormat["CODE_39"] = "CODE_39";
        SupportedFormat["CODE_39_MOD_43"] = "CODE_39_MOD_43";
        SupportedFormat["CODE_93"] = "CODE_93";
        SupportedFormat["CODE_128"] = "CODE_128";
        SupportedFormat["CODABAR"] = "CODABAR";
        SupportedFormat["ITF"] = "ITF";
        SupportedFormat["ITF_14"] = "ITF_14"; // 2D

        SupportedFormat["AZTEC"] = "AZTEC";
        SupportedFormat["DATA_MATRIX"] = "DATA_MATRIX";
        SupportedFormat["MAXICODE"] = "MAXICODE";
        SupportedFormat["PDF_417"] = "PDF_417";
        SupportedFormat["QR_CODE"] = "QR_CODE";
        SupportedFormat["RSS_14"] = "RSS_14";
        SupportedFormat["RSS_EXPANDED"] = "RSS_EXPANDED";
      })(_SupportedFormat || (_SupportedFormat = {}));
      /***/

    },

    /***/
    6921: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportedFormat": function SupportedFormat() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.SupportedFormat
          );
        },

        /* harmony export */
        "BarcodeScanner": function BarcodeScanner() {
          return (
            /* binding */
            _BarcodeScanner
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      41899);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      51889);

      var _BarcodeScanner = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('BarcodeScanner', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor-community_barcode-scanner_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          67793)).then(function (m) {
            return new m.BarcodeScannerWeb();
          });
        }
      });
      /***/

    },

    /***/
    96610: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
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


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      10678);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
        children: [{
          path: 'bookshelf',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_bookshelf_add-book-modal_add-book-modal_component_ts-src_app_services_f-9dafa4"), __webpack_require__.e("src_app_pages_bookshelf_bookshelf_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../bookshelf/bookshelf.module */
            35879)).then(function (m) {
              return m.BookshelfPageModule;
            });
          }
        }, {
          path: 'scanner',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_bookshelf_add-book-modal_add-book-modal_component_ts-src_app_services_f-9dafa4"), __webpack_require__.e("src_app_pages_scanner_scanner_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../scanner/scanner.module */
            33983)).then(function (m) {
              return m.ScannerPageModule;
            });
          }
        }, {
          path: 'review',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_review_review_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../review/review.module */
            61559)).then(function (m) {
              return m.ReviewPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/home/bookshelf',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/home/bookshelf',
        pathMatch: 'full'
      }];

      var _HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      _HomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HomePageRoutingModule);
      /***/
    },

    /***/
    57994: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home-routing.module */
      96610);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page */
      10678);

      var _HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
      })], _HomePageModule);
      /***/
    },

    /***/
    10678: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */
      99090);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      26613);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor-community/barcode-scanner */
      6921);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _HomePage = /*#__PURE__*/function () {
        function HomePage(alertController) {
          _classCallCheck(this, HomePage);

          this.alertController = alertController;
          this.result = null;
          this.scanActive = false;
        }

        _createClass(HomePage, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.prepare();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.stopScan();
          }
        }, {
          key: "startScanner",
          value: function startScanner() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var allowed, result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.checkPermission();

                    case 2:
                      allowed = _context.sent;

                      if (!allowed) {
                        _context.next = 12;
                        break;
                      }

                      this.scanActive = true;
                      document.body.classList.add('qrscanner'); // add the qrscanner class to body

                      _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.hideBackground();

                      _context.next = 9;
                      return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.startScan();

                    case 9:
                      result = _context.sent;
                      document.body.classList.remove('qrscanner'); // remove the qrscanner from the body

                      if (result.hasContent) {
                        this.result = result.content;
                        this.scanActive = false;
                      }

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "checkPermission",
          value: function checkPermission() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", new Promise(function (resolve, reject) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var status, alert;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.checkPermission({
                                    force: true
                                  });

                                case 2:
                                  status = _context2.sent;

                                  if (!status.granted) {
                                    _context2.next = 7;
                                    break;
                                  }

                                  resolve(true);
                                  _context2.next = 16;
                                  break;

                                case 7:
                                  if (!status.denied) {
                                    _context2.next = 15;
                                    break;
                                  }

                                  _context2.next = 10;
                                  return this.alertController.create({
                                    header: 'No permission',
                                    message: 'Please allow camera access in your settings',
                                    buttons: [{
                                      text: 'No',
                                      role: 'cancel'
                                    }, {
                                      text: 'Open Settings',
                                      handler: function handler() {
                                        resolve(false);

                                        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.openAppSettings();
                                      }
                                    }]
                                  });

                                case 10:
                                  alert = _context2.sent;
                                  _context2.next = 13;
                                  return alert.present();

                                case 13:
                                  _context2.next = 16;
                                  break;

                                case 15:
                                  resolve(false);

                                case 16:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "stopScanner",
          value: function stopScanner() {
            document.body.classList.remove('qrscanner'); // remove the qrscanner from the body

            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner.stopScan();

            this.scanActive = false;
          }
        }]);

        return HomePage;
      }();

      _HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
        }];
      };

      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _HomePage);
      /***/
    },

    /***/
    99090: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar\n    slot=\"bottom\"\n    style=\"--color-selected: rgba(var(--ion-color-primary-rgb), 0.9)\"\n  >\n    <ion-tab-button tab=\"bookshelf\" root>\n      <ion-icon\n        src=\"../assets/icon/bookshelfIcon.svg\"\n        style=\"width: 32px; height: 29px\"\n      ></ion-icon>\n      <ion-label>Bookshelf</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button\n      tab=\"scanner\"\n      style=\"--color-selected: rgba(var(--ion-color-success-rgb), 0.8)\"\n    >\n      <ion-icon name=\"scan\" size=\"large\"></ion-icon>\n      <ion-label>Scanner</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button\n      tab=\"review\"\n      style=\"--color-selected: rgba(var(--ion-color-warning-rgb), 0.8)\"\n    >\n      <ion-icon name=\"star\" size=\"large\"></ion-icon>\n      <ion-label>Reviews</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    26613: function _(module) {
      module.exports = "ion-tab-bar {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXIge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_home_module_ts-es5.js.map