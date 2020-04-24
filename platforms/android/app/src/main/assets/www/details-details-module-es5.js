function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button style=\"color:white;\"></ion-menu-button> -->\n      <!-- <h6><ion-icon name=\"chevron-back-outline\" [routerLink]='[\"/contents\"]' [queryParams]=\"{type:language}\"></ion-icon></h6> -->\n      <h6><ion-icon name=\"chevron-back-outline\" (click)=\"goBack()\"></ion-icon></h6>\n    </ion-buttons>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{contents.chapter}}\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <p *ngFor=\"let c of contents.discription\">{{c}}\n\n  </p> -->\n<div>\n  {{contents.description}}\n</div>\n  \n  <!-- <ion-infinite-scroll >\n    <p  *ngFor=\"let c of contents.description\">{{c}}  </p>\n    \n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data…\" >\n     \n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"contents.index!=1\"  >\n    <ion-fab-button (click)=\"back(contents.index)\" color=\"light\" size=\"small\">\n      <ion-icon name=\"arrow-undo\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"  *ngIf=\"contents.index!='6'\">\n    <ion-fab-button (click)=\"next(contents.index)\" color=\"light\" size=\"small\">\n      <ion-icon name=\"arrow-redo\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n<!-- \n    <ion-item lines=\"none\">\n \n      <ion-button *ngIf=\"contents.index!=1\" color=\"primary\" fill=\"clear\" (click)=\"back(contents.index)\" ><ion-icon name=\"arrow-undo\" slot=\"icon-only\"color=\"primary\"></ion-icon></ion-button>\n      <ion-button *ngIf=\"contents.index!='6'\" color=\"primary\" fill=\"clear\" (click)=\"next(contents.index)\"slot=\"end\" ><ion-icon name=\"arrow-redo\" slot=\"icon-only\" color=\"primary\"></ion-icon></ion-button>\n    </ion-item> -->\n\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n<ion-tabs >\n  <ion-tab-bar slot=\"bottom\"  >\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home\"></ion-icon>\n      <!-- <ion-label>tab 1</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\" >\n      <ion-icon name=\"book\"></ion-icon>\n      <!-- <ion-label>tab 2</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\" >\n      <ion-icon name=\"ribbon\"></ion-icon>\n      <!-- <ion-label>tab 3</ion-label> -->\n    </ion-tab-button>\n\n\n  </ion-tab-bar>\n</ion-tabs>\n</ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/details/details-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/details/details-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: DetailsPageRoutingModule */

  /***/
  function srcAppDetailsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function () {
      return DetailsPageRoutingModule;
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


    var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./details.page */
    "./src/app/details/details.page.ts");

    var routes = [{
      path: '',
      component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }];

    var DetailsPageRoutingModule = function DetailsPageRoutingModule() {
      _classCallCheck(this, DetailsPageRoutingModule);
    };

    DetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/details/details.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/details/details.module.ts ***!
    \*******************************************/

  /*! exports provided: DetailsPageModule */

  /***/
  function srcAppDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
      return DetailsPageModule;
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


    var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details-routing.module */
    "./src/app/details/details-routing.module.ts");
    /* harmony import */


    var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./details.page */
    "./src/app/details/details.page.ts");

    var DetailsPageModule = function DetailsPageModule() {
      _classCallCheck(this, DetailsPageModule);
    };

    DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]],
      declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })], DetailsPageModule);
    /***/
  },

  /***/
  "./src/app/details/details.page.css":
  /*!******************************************!*\
    !*** ./src/app/details/details.page.css ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailsDetailsPageCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5wYWdlLmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/details/details.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/details/details.page.ts ***!
    \*****************************************/

  /*! exports provided: DetailsPage */

  /***/
  function srcAppDetailsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
      return DetailsPage;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var DetailsPage =
    /*#__PURE__*/
    function () {
      function DetailsPage(route, location) {
        _classCallCheck(this, DetailsPage);

        this.route = route;
        this.location = location;
        console.log(this.data);
      }

      _createClass(DetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (res) {
            _this.contents = JSON.parse(res.value);
            _this.language = res.language;
            console.log(JSON.parse(res.value));
            _this.data = JSON.parse(res.data);
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "back",
        value: function back(index) {
          var _this2 = this;

          this.index = index - 1;
          this.contents = this.data.filter(function (s) {
            return s.index == _this2.index;
          })[0];
        }
      }, {
        key: "next",
        value: function next(index) {
          var _this3 = this;

          this.index = index + 1;
          this.contents = this.data.filter(function (s) {
            return s.index == _this3.index;
          })[0];
        }
      }]);

      return DetailsPage;
    }();

    DetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./details.page.css */
      "./src/app/details/details.page.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])], DetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=details-details-module-es5.js.map