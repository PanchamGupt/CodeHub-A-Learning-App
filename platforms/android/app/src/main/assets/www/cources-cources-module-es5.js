function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cources-cources-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cources/cources.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cources/cources.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCourcesCourcesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color:white;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Courses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-list>\n    <ion-list-header>\n      Recent Conversations\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let cource of getValue\">\n      <ion-avatar slot=\"start\">\n        <img src=\"./avatar-finn.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{cource}}</h2>\n        <h3>I'm a big deal</h3>\n        <p>Listen, I've had a pretty messed up day...</p>\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n\n\n  <ion-card *ngFor=\"let cource of getValue\" [routerLink]=\"['/contents']\" [queryParams]=\"{type:cource.language}\">\n    <ion-item lines=\"none\">\n      <ion-thumbnail slot=\"start\">\n        <img src={{cource.img}}>\n      </ion-thumbnail>\n      <ion-card-header>\n\n        <ion-card-title>\n          <h5>{{cource.language}}</h5>\n        </ion-card-title>\n      </ion-card-header>\n    </ion-item>\n  </ion-card>\n\n\n  <!-- <ion-card  *ngFor=\"let cource of getValue\" class=\"small-list\">\n    \n \n  <ion-item >\n    <ion-thumbnail slot=\"start\">\n      <img src={{cource.img}} >\n    </ion-thumbnail>\n    <ion-label>{{cource.language}}</ion-label>\n  </ion-item>\n\n\n</ion-card>  -->\n\n\n  <!-- <ion-grid>\n  <ion-row>\n    <ion-col col-6 *ngFor=\"let cource of getValue\">\n    <ion-card>\n\n  <img src={{cource.img}} height=\"100px\" width=\"100px\"/>\n  \n   \n  {{cource.language}}\n\n  \n\n</ion-card>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n -->\n\n\n\n\n</ion-content>\n\n<ion-footer >\n  <ion-toolbar >\n    <ion-tabs > \n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"tab1\">\n          <ion-icon name=\"home\"></ion-icon>\n          <!-- <ion-label>tab 1</ion-label> -->\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"tab2\">\n          <ion-icon name=\"book\"></ion-icon>\n          <!-- <ion-label>tab 2</ion-label> -->\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"tab3\">\n          <ion-icon name=\"ribbon\"></ion-icon>\n          <!-- <ion-label>tab 3</ion-label> -->\n        </ion-tab-button>\n\n\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/cources/cources-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/cources/cources-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CourcesPageRoutingModule */

  /***/
  function srcAppCourcesCourcesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourcesPageRoutingModule", function () {
      return CourcesPageRoutingModule;
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


    var _cources_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cources.page */
    "./src/app/cources/cources.page.ts");

    var routes = [{
      path: '',
      component: _cources_page__WEBPACK_IMPORTED_MODULE_3__["CourcesPage"]
    }];

    var CourcesPageRoutingModule = function CourcesPageRoutingModule() {
      _classCallCheck(this, CourcesPageRoutingModule);
    };

    CourcesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CourcesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/cources/cources.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/cources/cources.module.ts ***!
    \*******************************************/

  /*! exports provided: CourcesPageModule */

  /***/
  function srcAppCourcesCourcesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourcesPageModule", function () {
      return CourcesPageModule;
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


    var _cources_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cources-routing.module */
    "./src/app/cources/cources-routing.module.ts");
    /* harmony import */


    var _cources_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cources.page */
    "./src/app/cources/cources.page.ts");

    var CourcesPageModule = function CourcesPageModule() {
      _classCallCheck(this, CourcesPageModule);
    };

    CourcesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cources_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourcesPageRoutingModule"]],
      declarations: [_cources_page__WEBPACK_IMPORTED_MODULE_6__["CourcesPage"]]
    })], CourcesPageModule);
    /***/
  },

  /***/
  "./src/app/cources/cources.page.css":
  /*!******************************************!*\
    !*** ./src/app/cources/cources.page.css ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCourcesCourcesPageCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* // page-list {\n//     // reduce min height restriction\n//        .item {\n//            min-height: 0.5rem;\n//            max-height: 8rem;\n//        }\n//        // set height of thumbnail\n//        .item-md ion-thumbnail ion-img,\n//        .item-md ion-thumbnail img,\n//        .item ion-thumbnail ion-img,\n//        .item ion-thumbnail img {\n//            width: 50px;\n//            height: 50px;\n//        }\n//        // set max height of list item\n//        .small-list {\n//            max-height: 50px;\n//        }\n//     } */\n\n/* .small-list{\n    width:500px;\n} */\n\nion-card {\n    /* border: 2px solid rgb(42, 129, 170); */\n    /* border: 1px solid rgb(251, 158, 43);\n    border-bottom: 7px solid rgb(248, 173, 80); */\n    border: 1px solid rgb(19, 70, 109);\n    border-left: 3px solid  rgb(19, 70, 109);\n    border-bottom: 6px solid  rgb(19, 70, 109);\n    \n    height: 100px;\n    /* background-color:rgb(42, 129, 170) ; */\n }\n\n/* ion-item {\n    background-color:rgb(134, 192, 192);\n } */\n\n \n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cmNlcy9jb3VyY2VzLnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFrQlU7O0FBRVY7O0dBRUc7O0FBRUg7SUFDSSx5Q0FBeUM7SUFDekM7aURBQzZDO0lBQzdDLGtDQUFrQztJQUNsQyx3Q0FBd0M7SUFDeEMsMENBQTBDOztJQUUxQyxhQUFhO0lBQ2IseUNBQXlDO0NBQzVDOztBQUVBOztJQUVHIiwiZmlsZSI6InNyYy9hcHAvY291cmNlcy9jb3VyY2VzLnBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLy8gcGFnZS1saXN0IHtcbi8vICAgICAvLyByZWR1Y2UgbWluIGhlaWdodCByZXN0cmljdGlvblxuLy8gICAgICAgIC5pdGVtIHtcbi8vICAgICAgICAgICAgbWluLWhlaWdodDogMC41cmVtO1xuLy8gICAgICAgICAgICBtYXgtaGVpZ2h0OiA4cmVtO1xuLy8gICAgICAgIH1cbi8vICAgICAgICAvLyBzZXQgaGVpZ2h0IG9mIHRodW1ibmFpbFxuLy8gICAgICAgIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZyxcbi8vICAgICAgICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyxcbi8vICAgICAgICAuaXRlbSBpb24tdGh1bWJuYWlsIGlvbi1pbWcsXG4vLyAgICAgICAgLml0ZW0gaW9uLXRodW1ibmFpbCBpbWcge1xuLy8gICAgICAgICAgICB3aWR0aDogNTBweDtcbi8vICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuLy8gICAgICAgIH1cbi8vICAgICAgICAvLyBzZXQgbWF4IGhlaWdodCBvZiBsaXN0IGl0ZW1cbi8vICAgICAgICAuc21hbGwtbGlzdCB7XG4vLyAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4vLyAgICAgICAgfVxuLy8gICAgIH0gKi9cblxuLyogLnNtYWxsLWxpc3R7XG4gICAgd2lkdGg6NTAwcHg7XG59ICovXG5cbmlvbi1jYXJkIHtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZ2IoNDIsIDEyOSwgMTcwKTsgKi9cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjUxLCAxNTgsIDQzKTtcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgcmdiKDI0OCwgMTczLCA4MCk7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCA3MCwgMTA5KTtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICByZ2IoMTksIDcwLCAxMDkpO1xuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAgcmdiKDE5LCA3MCwgMTA5KTtcbiAgICBcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6cmdiKDQyLCAxMjksIDE3MCkgOyAqL1xuIH1cblxuIC8qIGlvbi1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMzQsIDE5MiwgMTkyKTtcbiB9ICovXG5cbiBcblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/cources/cources.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/cources/cources.page.ts ***!
    \*****************************************/

  /*! exports provided: CourcesPage */

  /***/
  function srcAppCourcesCourcesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourcesPage", function () {
      return CourcesPage;
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

    var CourcesPage =
    /*#__PURE__*/
    function () {
      function CourcesPage(router) {
        _classCallCheck(this, CourcesPage);

        this.router = router;
      }

      _createClass(CourcesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // this.getValue= this.router.snapshot.paramMap.get("item")
          // console.log(JSON.parse(this.getValue))
          // this.getValue=this.getValue.split(",")
          this.router.queryParams.subscribe(function (res) {
            _this.getValue = JSON.parse(res.value);
            console.log(JSON.parse(res.value));
          });
        }
      }]);

      return CourcesPage;
    }();

    CourcesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    CourcesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cources',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cources.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cources/cources.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cources.page.css */
      "./src/app/cources/cources.page.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], CourcesPage);
    /***/
  }
}]);
//# sourceMappingURL=cources-cources-module-es5.js.map