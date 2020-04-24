function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color:white;\"></ion-menu-button>\n    </ion-buttons>\n    \n    <ion-title>Tips & Quiz</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!-- 404 Error -->\n\n<div *ngIf=\"errorMsg\">\n  <h3 style=\"font-family:Wide Latin;text-align: center;font-weight: bold;font-size: x-large;\"> {{errorMsg}}</h3>\n<img  src=\"../../assets/images/404.png\"/>\n</div>\n\n<!-- for tips of the day -->\n  <ion-card >\n    <ion-item color=\"primary\">\n      <ion-icon name=\"bulb-sharp\" slot=\"start\"></ion-icon>\n    \n      <ion-label>{{tipsTitle}}</ion-label>\n    \n    </ion-item>\n    \n    <ion-card-content style=\"color:black\">\n       {{tips}}\n    </ion-card-content>\n  </ion-card>\n\n<!-- for Quiz of the day -->\n\n<ion-card >\n  <ion-item color=\"primary\">\n    <ion-icon name=\"code-slash-sharp\" slot=\"start\"></ion-icon>\n  \n    <ion-label>{{quizTitle}}</ion-label>\n  \n  </ion-item>\n  \n  <ion-card-content style=\"color:black\">\n      <!-- <p>{{quiz}}</p> -->\n<pre >  cc = 2\n  if False:\n      cc = 66\n\n  def helmet():\n      if True:\n          cc = 40\n\n  helmet()\n\n  print(cc)</pre>\n  \n  <hr style=\"border-top: 1px solid rgb(148, 145, 145)\">\n    \n        \n      <ion-list lines=\"none\">\n        <ion-radio-group [(ngModel)]=\"ans\">\n          <ion-item *ngFor=\"let option of options\" > \n            <ion-label >{{option}}</ion-label>\n            <ion-radio slot=\"start\" [color]=\"radioColor\" [value]=\"option\" (click)=\"setColor()\"></ion-radio>\n          </ion-item>\n          </ion-radio-group>\n      </ion-list> \n      <ion-button color=\"primary\" (click)=\"checkAns()\">Submit Answer</ion-button>\n      \n      \n<!-- Currect answer message -->\n      <ion-item color=\"success\" *ngIf=\"correctAns\" >\n        <ion-icon name=\"checkmark-circle-sharp\" slot=\"start\"></ion-icon>\n      \n        <ion-label>{{correctAns}}</ion-label>\n      \n      </ion-item>\n\n   <!--Wronge answer Message  -->\n      <ion-item color=\"danger\" *ngIf=\"wrongeAns\">\n        <ion-icon name=\"close-circle-sharp\" slot=\"start\"></ion-icon>\n      \n        <ion-label>{{wrongeAns}}</ion-label>\n      \n      </ion-item> \n\n<!-- warning Message-->\n      <ion-item color=\"warning\" *ngIf=\"warning\">\n        <ion-icon name=\"warning-sharp\" slot=\"start\"></ion-icon>\n      \n        <ion-label>{{warning}}</ion-label>\n      \n      </ion-item>\n      <ion-button *ngIf=\"viewExplainationBtn\" fill=\"outline\" color=\"primary\" (click)=\"explainationShow()\">Explaination</ion-button>\n\n\n     \n    \n\n      <ion-card *ngIf=\"viewExplaination\" style=\"margin:5px -2px;\">\n        <ion-item color=\"primary\">\n          <ion-icon name=\"information-circle-sharp\" slot=\"start\"></ion-icon>\n          <ion-label>Explaination</ion-label>\n        \n        </ion-item>\n        \n        <ion-card-content style=\"color:black\">\n          {{explaination}}\n        </ion-card-content>\n      </ion-card>\n  \n\n  </ion-card-content>\n</ion-card> \n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab1/tab1-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab1/tab1-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab1PageRoutingModule */

  /***/
  function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
      return Tab1PageRoutingModule;
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


    var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");

    var routes = [{
      path: '',
      component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }];

    var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
      _classCallCheck(this, Tab1PageRoutingModule);
    };

    Tab1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
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


    var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab1-routing.module */
    "./src/app/tab1/tab1-routing.module.ts");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab1PageRoutingModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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


    var _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/firebase-data.service */
    "./src/app/services/firebase-data.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");

    var Tab1Page =
    /*#__PURE__*/
    function () {
      function Tab1Page(fds, storage) {
        _classCallCheck(this, Tab1Page);

        this.fds = fds;
        this.storage = storage;
        this.correctAns = null;
        this.warning = null;
        this.wrongeAns = null;
        this.ans = null;
        this.viewExplainationBtn = false;
        this.viewExplaination = false;
        this.radioColor = "primary";
      }

      _createClass(Tab1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.fds.loadingPresent();
          this.fds.getTipsQuiz().subscribe(function (data) {
            _this.tipsTitle = data[0].tipsTitle;
            _this.tips = data[0].tips;
            _this.quizTitle = data[1].quizTitle;
            _this.options = data[1].options;
            _this.answer = data[1].answer;
            _this.explaination = data[1].explaination;
            _this.quiz = data[1].quiz;

            _this.fds.loadingDismiss();
          }, function (error) {
            _this.fds.loadingDismiss();

            _this.errorMsg = error;
          });
        } // check Answere

      }, {
        key: "checkAns",
        value: function checkAns() {
          console.log(this.ans);

          if (this.answer === this.ans) {
            this.wrongeAns = null;
            this.warning = null;
            this.correctAns = "Correct Answer";
            this.viewExplainationBtn = true;
            this.radioColor = "success";
          } else if (this.ans === null) {
            this.correctAns = null;
            this.wrongeAns = null;
            this.warning = "Please select your option";
            this.radioColor = "danger";
          } else {
            this.correctAns = null;
            this.warning = null;
            this.wrongeAns = "Wrong Answer Try Again!!!";
            this.viewExplainationBtn = true;
            this.radioColor = "danger";
          }

          this.viewExplaination = false;
        }
      }, {
        key: "explainationShow",
        value: function explainationShow() {
          this.viewExplaination = true;
          this.viewExplainationBtn = false; // this.correctAns=null
          // this.wrorngeAns=null
        }
      }, {
        key: "setColor",
        value: function setColor() {
          this.radioColor = "primary";
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDataService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
      }];
    };

    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tab1",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_data_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDataService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map