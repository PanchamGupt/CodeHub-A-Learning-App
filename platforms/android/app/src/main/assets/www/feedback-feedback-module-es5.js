function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-feedback-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeedbackFeedbackPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      \n      <h6><ion-icon name=\"chevron-back-outline\" (click)=\"goBack()\"></ion-icon></h6>\n    </ion-buttons>\n    <ion-title>Feedback</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br/><br/>\n  <h1 style=\"font-family:Wide Latin;text-align: center;font-weight: bold;font-size: x-large;\">Write your feedback</h1>\n\n\n  <br/>\n<!-- Textarea in an item with a placeholder -->\n\n<ion-item lines=\"none\" style=\"border:1px solid black;height:205px;margin: 30px;border-radius: 20px;\">\n  <ion-textarea placeholder=\"write your feedback/suggestion here...\" rows=\"7\" style=\"line-height:1.6 ;\" [(ngModel)]=\"feedback\"></ion-textarea>\n</ion-item>\n\n\n\n<ion-button expand=\"block\" style=\"margin:38px;\" (click)=\"submitfeedback()\">Submit feedback</ion-button>\n\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/feedback/feedback-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/feedback/feedback-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: FeedbackPageRoutingModule */

  /***/
  function srcAppFeedbackFeedbackRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackPageRoutingModule", function () {
      return FeedbackPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _feedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feedback.page */
    "./src/app/feedback/feedback.page.ts");

    var routes = [{
      path: '',
      component: _feedback_page__WEBPACK_IMPORTED_MODULE_3__["FeedbackPage"]
    }];

    var FeedbackPageRoutingModule = function FeedbackPageRoutingModule() {
      _classCallCheck(this, FeedbackPageRoutingModule);
    };

    FeedbackPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FeedbackPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/feedback/feedback.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/feedback/feedback.module.ts ***!
    \*********************************************/

  /*! exports provided: FeedbackPageModule */

  /***/
  function srcAppFeedbackFeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function () {
      return FeedbackPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./feedback-routing.module */
    "./src/app/feedback/feedback-routing.module.ts");
    /* harmony import */


    var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./feedback.page */
    "./src/app/feedback/feedback.page.ts");

    var FeedbackPageModule = function FeedbackPageModule() {
      _classCallCheck(this, FeedbackPageModule);
    };

    FeedbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackPageRoutingModule"]],
      declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
    })], FeedbackPageModule);
    /***/
  },

  /***/
  "./src/app/feedback/feedback.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/feedback/feedback.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeedbackFeedbackPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/feedback/feedback.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/feedback/feedback.page.ts ***!
    \*******************************************/

  /*! exports provided: FeedbackPage */

  /***/
  function srcAppFeedbackFeedbackPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackPage", function () {
      return FeedbackPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var FeedbackPage =
    /*#__PURE__*/
    function () {
      function FeedbackPage(location) {
        _classCallCheck(this, FeedbackPage);

        this.location = location;
      }

      _createClass(FeedbackPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "submitfeedback",
        value: function submitfeedback() {
          console.log(this.feedback);
        }
      }]);

      return FeedbackPage;
    }();

    FeedbackPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    FeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feedback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedback.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback.page.scss */
      "./src/app/feedback/feedback.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])], FeedbackPage);
    /***/
  }
}]);
//# sourceMappingURL=feedback-feedback-module-es5.js.map