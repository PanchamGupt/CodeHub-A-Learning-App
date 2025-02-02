function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contents-contents-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contents/contents.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contents/contents.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentsContentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button style=\"color:white;\"></ion-menu-button> -->\n      <h6><ion-icon name=\"chevron-back-outline\" (click)=\"goBack()\"></ion-icon></h6>\n    </ion-buttons>\n    <!-- &emsp;&nbsp;&nbsp;&nbsp;&nbsp;{{language}} -->\n    <ion-title>{{language}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!-- no data -->\n\n<div *ngIf=\"data===null\"  class=\"background\">\n  <img src=\"https://images.wallpaperscraft.com/image/pen_pages_vintage_130832_1350x2400.jpg\" style=\"filter: blur(5px);background-size: cover;\" >\n  <div class=\"centered\"><h1 >Coming Soon!!</h1>\n  <p> CodeHub Team is working on it....</p></div>\n\n</div>\n\n\n<ion-card *ngFor=\"let c of data\" (click)=\"details(c)\" > \n  <ion-item lines=\"none\">\n \n  {{c.chapter}}\n    <ion-icon name=\"caret-forward-outline\" slot=\"end\" color=\"primary\"></ion-icon>\n\n</ion-item>\n</ion-card>\n\n\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n<ion-tabs >\n  <ion-tab-bar slot=\"bottom\"  >\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <!-- <ion-label>tab 1</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"categories\" >\n      <ion-icon name=\"book\"></ion-icon>\n      <!-- <ion-label>tab 2</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"notifications\" >\n      <ion-icon name=\"notifications-sharp\"></ion-icon>\n      <!-- <ion-label>tab 3</ion-label> -->\n    </ion-tab-button>\n\n\n  </ion-tab-bar>\n</ion-tabs>\n</ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/contents/contents-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/contents/contents-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ContentsPageRoutingModule */

  /***/
  function srcAppContentsContentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentsPageRoutingModule", function () {
      return ContentsPageRoutingModule;
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


    var _contents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contents.page */
    "./src/app/contents/contents.page.ts");

    var routes = [{
      path: '',
      component: _contents_page__WEBPACK_IMPORTED_MODULE_3__["ContentsPage"]
    }];

    var ContentsPageRoutingModule = function ContentsPageRoutingModule() {
      _classCallCheck(this, ContentsPageRoutingModule);
    };

    ContentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContentsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/contents/contents.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/contents/contents.module.ts ***!
    \*********************************************/

  /*! exports provided: ContentsPageModule */

  /***/
  function srcAppContentsContentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentsPageModule", function () {
      return ContentsPageModule;
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


    var _contents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contents-routing.module */
    "./src/app/contents/contents-routing.module.ts");
    /* harmony import */


    var _contents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contents.page */
    "./src/app/contents/contents.page.ts");

    var ContentsPageModule = function ContentsPageModule() {
      _classCallCheck(this, ContentsPageModule);
    };

    ContentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contents_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContentsPageRoutingModule"]],
      declarations: [_contents_page__WEBPACK_IMPORTED_MODULE_6__["ContentsPage"]]
    })], ContentsPageModule);
    /***/
  },

  /***/
  "./src/app/contents/contents.page.css":
  /*!********************************************!*\
    !*** ./src/app/contents/contents.page.css ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentsContentsPageCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card{\n    \n    /* border: 1px solid rgb(251, 158, 43);\n    border-left: 7px solid rgb(248, 173, 80);\n     */\n     border: 1px solid  rgb(19, 70, 109);\n    border-left: 7px solid rgb(19, 70, 109);\n    cursor: pointer;\n    \n}\n\nion-icon{\n    color:rgb(48, 83, 110);\n}\n\nion-icon{\n    color:white;\n   \n}\n\nion-icon:hover{\n    \n    color: rgb(219, 155, 155);\n}\n\n/* div.background{\n    --background: url(https://images.wallpaperscraft.com/image/pen_pages_vintage_130832_1350x2400.jpg) 0 0/100% 100% no-repeat;\n    text-align: center;\n} */\n\n.background{\n    position: relative;\n  text-align: center;\n  color: white;\n  \n}\n\n.centered {\n    font-weight: bolder;\n    position: absolute;\n    top: 30%;\n    left: 20%;\n    /* transform: translate(-50%, -50%); */\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudHMvY29udGVudHMucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7O01BRUU7S0FDRCxtQ0FBbUM7SUFDcEMsdUNBQXVDO0lBQ3ZDLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUdBO0lBQ0ksV0FBVzs7QUFFZjs7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksa0JBQWtCO0VBQ3BCLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHNDQUFzQztFQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnRzL2NvbnRlbnRzLnBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICAgXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDI1MSwgMTU4LCA0Myk7XG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCByZ2IoMjQ4LCAxNzMsIDgwKTtcbiAgICAgKi9cbiAgICAgYm9yZGVyOiAxcHggc29saWQgIHJnYigxOSwgNzAsIDEwOSk7XG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCByZ2IoMTksIDcwLCAxMDkpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbn1cblxuaW9uLWljb257XG4gICAgY29sb3I6cmdiKDQ4LCA4MywgMTEwKTtcbn1cblxuXG5pb24taWNvbntcbiAgICBjb2xvcjp3aGl0ZTtcbiAgIFxufVxuaW9uLWljb246aG92ZXJ7XG4gICAgXG4gICAgY29sb3I6IHJnYigyMTksIDE1NSwgMTU1KTtcbn1cblxuLyogZGl2LmJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMud2FsbHBhcGVyc2NyYWZ0LmNvbS9pbWFnZS9wZW5fcGFnZXNfdmludGFnZV8xMzA4MzJfMTM1MHgyNDAwLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAqL1xuXG4uYmFja2dyb3VuZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBcbn1cblxuLmNlbnRlcmVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiAyMCU7XG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ICovXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/contents/contents.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/contents/contents.page.ts ***!
    \*******************************************/

  /*! exports provided: ContentsPage */

  /***/
  function srcAppContentsContentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentsPage", function () {
      return ContentsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/firebase-data.service */
    "./src/app/services/firebase-data.service.ts");

    var ContentsPage =
    /*#__PURE__*/
    function () {
      function ContentsPage(activatedRoute, router, navCtrl, location, fds) {
        _classCallCheck(this, ContentsPage);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.navCtrl = navCtrl;
        this.location = location;
        this.fds = fds;
      }

      _createClass(ContentsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.courseName = params.json;
            _this.language = params.language;

            _this.fds.loadingPresent();

            _this.fds.getData(_this.courseName + ".json").subscribe(function (data) {
              _this.fds.loadingDismiss();

              _this.data = data;
              console.log("data", _this.data);
            }, function (error) {
              console.log(error);

              _this.fds.loadingDismiss();

              _this.errorMsg = error;
            });

            console.log(_this.data);
          });
        }
      }, {
        key: "details",
        value: function details(c) {
          this.router.navigate(['/details'], {
            queryParams: {
              value: JSON.stringify(c),
              courseName: this.courseName,
              data: JSON.stringify(this.data)
            }
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.fds.loadingDismiss();
          this.location.back();
        }
      }]);

      return ContentsPage;
    }();

    ContentsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseDataService"]
      }];
    };

    ContentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contents',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contents.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contents/contents.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contents.page.css */
      "./src/app/contents/contents.page.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseDataService"]])], ContentsPage);
    /***/
  }
}]);
//# sourceMappingURL=contents-contents-module-es5.js.map