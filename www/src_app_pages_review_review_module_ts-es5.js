(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkBookSelf"] = self["webpackChunkBookSelf"] || []).push([["src_app_pages_review_review_module_ts"], {
    /***/
    25799: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReviewPageRoutingModule": function ReviewPageRoutingModule() {
          return (
            /* binding */
            _ReviewPageRoutingModule
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


      var _review_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./review.page */
      54784);

      var routes = [{
        path: '',
        component: _review_page__WEBPACK_IMPORTED_MODULE_0__.ReviewPage
      }];

      var _ReviewPageRoutingModule = function ReviewPageRoutingModule() {
        _classCallCheck(this, ReviewPageRoutingModule);
      };

      _ReviewPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ReviewPageRoutingModule);
      /***/
    },

    /***/
    61559: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReviewPageModule": function ReviewPageModule() {
          return (
            /* binding */
            _ReviewPageModule
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


      var _review_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./review-routing.module */
      25799);
      /* harmony import */


      var _review_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./review.page */
      54784);

      var _ReviewPageModule = function ReviewPageModule() {
        _classCallCheck(this, ReviewPageModule);
      };

      _ReviewPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _review_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewPageRoutingModule],
        declarations: [_review_page__WEBPACK_IMPORTED_MODULE_1__.ReviewPage]
      })], _ReviewPageModule);
      /***/
    },

    /***/
    54784: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReviewPage": function ReviewPage() {
          return (
            /* binding */
            _ReviewPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_review_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./review.page.html */
      92065);
      /* harmony import */


      var _review_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./review.page.scss */
      26566);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);

      var _ReviewPage = /*#__PURE__*/function () {
        function ReviewPage(angularFirestore) {
          _classCallCheck(this, ReviewPage);

          this.angularFirestore = angularFirestore;
          this.reviews = [];
        }

        _createClass(ReviewPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            var user = JSON.parse(localStorage.getItem("user"));

            if (user) {
              this.userId = user.uid;
              this.displayName = localStorage.getItem("currentUserDisplayName");
              this.angularFirestore.collection("stars").snapshotChanges().subscribe(function (reviews) {
                _this.reviews = reviews.map(function (t) {
                  return Object.assign({
                    id: t.payload.doc.id
                  }, t.payload.doc.data());
                }).filter(function (t) {
                  return t.userId === _this.userId;
                });
              });
            }
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this2 = this;

            this.angularFirestore.collection("stars").snapshotChanges().subscribe(function (reviews) {
              _this2.reviews = reviews.map(function (t) {
                return Object.assign({
                  id: t.payload.doc.id
                }, t.payload.doc.data());
              });
            });
          }
        }, {
          key: "deleteReview",
          value: function deleteReview(reviewId) {
            return this.angularFirestore.doc("stars/".concat(reviewId))["delete"]();
          }
        }]);

        return ReviewPage;
      }();

      _ReviewPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore
        }];
      };

      _ReviewPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-review",
        template: _C_Licenta_Archive_node_modules_ngtools_webpack_src_loaders_direct_resource_js_review_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_review_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ReviewPage);
      /***/
    },

    /***/
    92065: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"title-text\">Books Review</ion-title>\n    <ion-icon\n      src=\"./assets/icon/bookLogo.svg\"\n      class=\"logo-large\"\n      slot=\"end\"\n    ></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-align-items-center ion-justify-content-center\">\n    <ion-card *ngIf=\"!reviews.length\">\n      <ion-card-content>\n        <ion-item>\n          <ion-label><span>Collection is empty</span></ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <ion-row class=\"ion-justify-content-center\">\n      <!-- tot ce e in ion-col e template-ul pentru afisarea recenziilor -->\n      <ion-col\n        size=\"12\"\n        size-md=\"6\"\n        size-lg=\"4\"\n        style=\"width: 390px\"\n        *ngFor=\"let review of reviews\"\n      >\n        <ion-card>\n          <ion-card-header>\n            <div class=\"ion-float-right ion-no-padding\">\n              <ion-button\n                (click)=\"deleteReview(review.id)\"\n                fill=\"clear\"\n                slot=\"end\"\n              >\n                <ion-icon\n                  slot=\"icon-only\"\n                  name=\"trash-sharp\"\n                  style=\"color: rgba(var(--ion-color-danger-rgb), 0.85)\"\n                >\n                </ion-icon>\n              </ion-button>\n            </div>\n            <ion-item lines=\"none\">\n              <ion-label class=\"card-title ion-text-wrap\"\n                >{{review.title}}</ion-label\n              >\n            </ion-item>\n            <ion-card-subtitle>{{review.bookAuthors}}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content\n            class=\"\n              ion-text-center ion-justify-content-between ion-align-items-center\n            \"\n          >\n            <div\n              style=\"width: 100px; height: 250px\"\n              class=\"ion-float-left ion-align-items-center\"\n            >\n              <ion-img\n                class=\"ion-align-items-center\"\n                src=\"{{review.cover}}\"\n                style=\"\n                  width: 100px;\n                  height: 250px;\n                  margin-bottom: 20%;\n                  display: inline-block;\n                \"\n              ></ion-img>\n            </div>\n            <ion-list lines=\"none\">\n              <ion-item class=\"review-text\"> {{review.text}} </ion-item>\n              <ion-item>\n                <ion-label> Rating: {{ review.rating }} / 5</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"search-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button class=\"search-list\" [routerLink]=\"['../../book-search']\">\n        <ion-icon name=\"book\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button\n        class=\"search-list\"\n        [routerLink]=\"['../../review-search']\"\n      >\n        <ion-icon name=\"star\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button class=\"search-list\" [routerLink]=\"['../../user-search']\">\n        <ion-icon name=\"person\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    26566: function _(module) {
      module.exports = ".logo-large {\n  fill: #000000;\n  font-size: 40px;\n  margin-right: 30px;\n}\n\n.title-text {\n  font-family: LatoExtraBold;\n  font-size: 24px;\n  letter-spacing: 0.5625px;\n  text-align: center;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  margin-left: 40px;\n}\n\n.card-title {\n  margin-bottom: 0px;\n  font-family: LatoBoldItalic;\n  color: white;\n  font-size: 24px;\n  line-height: 30px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n\nion-card-subtitle {\n  margin-bottom: 0px;\n  font-family: LatoItalic;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 18px;\n  line-height: 20px;\n  letter-spacing: 0.5625px;\n  word-wrap: break-word;\n  margin-bottom: 5px;\n  margin-left: 5px;\n}\n\n.review-text {\n  font-family: Lato;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #363636;\n  white-space: normal;\n}\n\nion-card {\n  border-radius: 10px;\n  padding: 0 !important;\n  margin-left: 0px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  width: 100%;\n}\n\n.search-list {\n  --background: rgba(var(--ion-color-tertiary-rgb), 0.9);\n  width: 50px !important;\n  height: 50px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtBQURwQjs7QUFJQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsV0FBVztFQUNYLGlCQUFpQjtBQURuQjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsWUFBNkI7RUFDN0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFEbkI7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQURsQjs7QUFJQTtFQUNFLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFEckI7O0FBSUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0FBRGI7O0FBSUE7RUFDRSxzREFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFEekIiLCJmaWxlIjoicmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKC8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzMuMi4xL2Nzcy9mb250LWF3ZXNvbWUuY3NzKTtcblxuLmxvZ28tbGFyZ2Uge1xuICBmaWxsOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLnRpdGxlLXRleHQge1xuICBmb250LWZhbWlseTogTGF0b0V4dHJhQm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41NjI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvQm9sZEl0YWxpYztcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1mYW1pbHk6IExhdG9JdGFsaWM7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjU2MjVweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5yZXZpZXctdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzNjM2MzY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaC1saXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2IpLCAwLjkpO1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_review_review_module_ts-es5.js.map