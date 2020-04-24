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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button style=\"color:white;\"></ion-menu-button> -->\n      <!-- <h6><ion-icon name=\"chevron-back-outline\" [routerLink]='[\"/contents\"]' [queryParams]=\"{type:language}\"></ion-icon></h6> -->\n      <h6>\n        <ion-icon name=\"chevron-back-outline\" (click)=\"goBack()\"></ion-icon>\n      </h6>\n    </ion-buttons>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{contents.chapter}}\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding-horizontal\n  [scrollEvents]=\"true\"\n  (ionScrollStart)=\"logScrollStart()\"\n  (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\"\n  [fullscreen]=\"true\"\n>\n\n  <div *ngFor=\"let c of item.content\" style=\"margin:0px 12px;\">\n    \n    <h1 *ngIf=\"c.type=='heading'\">\n      {{c.value}}\n    </h1>\n    <p *ngIf=\"c.type=='text'\" style=\"text-align:justify\">\n      {{c.value}}\n    </p>\n    <ion-img *ngIf=\"c.type=='image'\" [src]=\"imageUrl\"></ion-img>\n\n    <div *ngIf=\"c.type=='list-string'\">\n      <ul *ngFor=\"let item of c.value\">\n        <li>{{item}}</li>\n      </ul>\n    </div>\n    <div *ngIf=\"c.type=='code'\">\n      <pre style=\"background-color: black; color: white;\">{{code}}</pre>\n    </div>\n  </div>\n  <!-- </div>  -->\n \n  <ion-item lines=\"none\" style=\"font-weight: bold; margin:2% 32%; \" >\n    <ion-icon name=\"chevron-back-outline\" (click)=\"backItem()\" *ngIf=\"backDisplay\"></ion-icon> Page\n    {{index+1}}<ion-icon *ngIf=\"nextDisplay\"\n      name=\"chevron-forward-outline\"\n      (click)=\"nextItem()\">\n    </ion-icon>\n  </ion-item>\n\n\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"contents.index!=1\"  >\n    <ion-fab-button (click)=\"back(contents.index)\" color=\"light\" size=\"small\">\n      <ion-icon name=\"arrow-undo\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"  *ngIf=\"contents.index!='6'\">\n    <ion-fab-button (click)=\"next(contents.index)\" color=\"light\" size=\"small\">\n      <ion-icon name=\"arrow-redo\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <!-- \n    <ion-item lines=\"none\">\n \n      <ion-button *ngIf=\"contents.index!=1\" color=\"primary\" fill=\"clear\" (click)=\"back(contents.index)\" ><ion-icon name=\"arrow-undo\" slot=\"icon-only\"color=\"primary\"></ion-icon></ion-button>\n      <ion-button *ngIf=\"contents.index!='6'\" color=\"primary\" fill=\"clear\" (click)=\"next(contents.index)\"slot=\"end\" ><ion-icon name=\"arrow-redo\" slot=\"icon-only\" color=\"primary\"></ion-icon></ion-button>\n    </ion-item> -->\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"home\">\n          <ion-icon name=\"home\"></ion-icon>\n          <!-- <ion-label>tab 1</ion-label> -->\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"categories\">\n          <ion-icon name=\"book\"></ion-icon>\n          <!-- <ion-label>tab 2</ion-label> -->\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"notifications\">\n          <ion-icon name=\"notifications-sharp\"></ion-icon>\n          <!-- <ion-label>tab 3</ion-label> -->\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-toolbar>\n</ion-footer>\n";
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
    /* harmony import */


    var _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/firebase-data.service */
    "./src/app/services/firebase-data.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");

    var DetailsPage =
    /*#__PURE__*/
    function () {
      function DetailsPage(route, location, fds, storage) {
        var _this = this;

        _classCallCheck(this, DetailsPage);

        this.route = route;
        this.location = location;
        this.fds = fds;
        this.storage = storage;
        this.index = 0;
        this.nextDisplay = true;
        this.backDisplay = false;
        this.route.queryParams.subscribe(function (res) {
          _this.contents = JSON.parse(res.value);
          _this.data = JSON.parse(res.data);
          _this.courseName = res.courseName; // this.items = this.contents['description']
        });
      }

      _createClass(DetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.item = this.contents["description"][this.index];
          this.chapterName = this.contents.chapter; // this.loadCode(this.courseName,this.chapterName,this.item[3].value)

          this.loadCurrentItem(this.index);

          if (this.contents.description.length == 1) {
            this.nextDisplay = false;
          } else {
            this.nextDisplay = true;
            this.backDisplay = false;
          }
        }
      }, {
        key: "loadCurrentItem",
        value: function loadCurrentItem(index) {
          this.item = this.contents["description"][this.index];

          if (this.index == this.contents.description.length - 1) {
            this.nextDisplay = false;
            this.backDisplay = true;
          }

          var codeindex = -1;

          for (var i = 0; i < this.contents["description"][this.index].content.length; i++) {
            if (this.contents["description"][this.index].content[i].type === "code") {
              codeindex = i;
              break;
            }
          }

          if (codeindex != -1) {
            this.loadCode(this.courseName, this.chapterName, this.item.content[codeindex].value);
          } //for image


          var imageindex = -1;

          for (var _i = 0; _i < this.contents["description"][this.index].content.length; _i++) {
            if (this.contents["description"][this.index].content[_i].type === "image") {
              imageindex = _i;
            }
          }

          if (imageindex != -1) {
            this.loadImage(this.courseName, this.chapterName, this.item.content[imageindex].value);
          }
        }
      }, {
        key: "nextItem",
        value: function nextItem() {
          // if (this.index < this.contents.description.length) {
          if (this.index + 2 == this.contents.description.length) {
            this.index++;
            this.loadCurrentItem(this.index);
            this.nextDisplay = false;
          } else {
            this.index++;
            this.loadCurrentItem(this.index);
            this.nextDisplay = true;
            this.backDisplay = true;
          } // }

        }
      }, {
        key: "backItem",
        value: function backItem() {
          if (this.index <= 1) {
            this.index--;
            this.loadCurrentItem(this.index);
            this.backDisplay = false;
          } else {
            this.index--;
            this.loadCurrentItem(this.index);
            this.backDisplay = true;
            this.nextDisplay = true;
          }
        }
      }, {
        key: "loadCode",
        value: function loadCode(course, chapter, file) {
          var _this2 = this;

          this.fds.loadingPresent();
          var path = "".concat(course, "/").concat(chapter, "/").concat(file);
          var storageRef = this.storage.ref(path);
          storageRef.getDownloadURL().subscribe(function (res) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = "text";

            xhr.onload = function (e) {
              _this2.fds.loadingDismiss();

              _this2.code = xhr.response;
            };

            xhr.open("GET", res);
            xhr.send();
          }, function (err) {
            console.log(err);
          });
        } //load image

      }, {
        key: "loadImage",
        value: function loadImage(course, chapter, file) {
          var _this3 = this;

          // this.fds.loadingPresent()
          var path = "".concat(course, "/").concat(chapter, "/").concat(file);
          var storageRef = this.storage.ref(path);
          storageRef.getDownloadURL().subscribe(function (res) {
            _this3.imageUrl = res;
          }, function (err) {
            console.log(err);
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
          var _this4 = this;

          this.index = index - 1;
          this.contents = this.data.filter(function (s) {
            return s.index == _this4.index;
          })[0];
        }
      }, {
        key: "next",
        value: function next(index) {
          var _this5 = this;

          this.index = index + 1;
          this.contents = this.data.filter(function (s) {
            return s.index == _this5.index;
          })[0];
        }
      }, {
        key: "ngOnDistroy",
        value: function ngOnDistroy() {
          this.fds.loadingDismiss();
        }
      }]);

      return DetailsPage;
    }();

    DetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseDataService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]
      }];
    };

    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./details.page.css */
      "./src/app/details/details.page.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseDataService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])], DetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=details-details-module-es5.js.map