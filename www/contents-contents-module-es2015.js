(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contents-contents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contents/contents.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contents/contents.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button style=\"color:white;\"></ion-menu-button> -->\n      <h6><ion-icon name=\"chevron-back-outline\" (click)=\"goBack()\"></ion-icon></h6>\n    </ion-buttons>\n    <!-- &emsp;&nbsp;&nbsp;&nbsp;&nbsp;{{language}} -->\n    <ion-title>{{language}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-card *ngFor=\"let c of data\" (click)=\"details(c)\" > \n  <ion-item lines=\"none\">\n \n  {{c.chapter}}\n    <ion-icon name=\"caret-forward-outline\" slot=\"end\" color=\"primary\"></ion-icon>\n\n</ion-item>\n</ion-card>\n\n\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n<ion-tabs >\n  <ion-tab-bar slot=\"bottom\"  >\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <!-- <ion-label>tab 1</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"categories\" >\n      <ion-icon name=\"book\"></ion-icon>\n      <!-- <ion-label>tab 2</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"notifications\" >\n      <ion-icon name=\"notifications-sharp\"></ion-icon>\n      <!-- <ion-label>tab 3</ion-label> -->\n    </ion-tab-button>\n\n\n  </ion-tab-bar>\n</ion-tabs>\n</ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/contents/contents-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contents/contents-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ContentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsPageRoutingModule", function() { return ContentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contents.page */ "./src/app/contents/contents.page.ts");




const routes = [
    {
        path: '',
        component: _contents_page__WEBPACK_IMPORTED_MODULE_3__["ContentsPage"]
    }
];
let ContentsPageRoutingModule = class ContentsPageRoutingModule {
};
ContentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContentsPageRoutingModule);



/***/ }),

/***/ "./src/app/contents/contents.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contents/contents.module.ts ***!
  \*********************************************/
/*! exports provided: ContentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsPageModule", function() { return ContentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contents-routing.module */ "./src/app/contents/contents-routing.module.ts");
/* harmony import */ var _contents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contents.page */ "./src/app/contents/contents.page.ts");







let ContentsPageModule = class ContentsPageModule {
};
ContentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contents_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContentsPageRoutingModule"]
        ],
        declarations: [_contents_page__WEBPACK_IMPORTED_MODULE_6__["ContentsPage"]]
    })
], ContentsPageModule);



/***/ }),

/***/ "./src/app/contents/contents.page.css":
/*!********************************************!*\
  !*** ./src/app/contents/contents.page.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card{\n    \n    /* border: 1px solid rgb(251, 158, 43);\n    border-left: 7px solid rgb(248, 173, 80);\n     */\n     border: 1px solid  rgb(19, 70, 109);\n    border-left: 7px solid rgb(19, 70, 109);\n    cursor: pointer;\n    \n}\n\nion-icon{\n    color:rgb(48, 83, 110);\n}\n\nion-icon{\n    color:white;\n   \n}\n\nion-icon:hover{\n    \n    color: rgb(219, 155, 155);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudHMvY29udGVudHMucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7O01BRUU7S0FDRCxtQ0FBbUM7SUFDcEMsdUNBQXVDO0lBQ3ZDLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUdBO0lBQ0ksV0FBVzs7QUFFZjs7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50cy9jb250ZW50cy5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTEsIDE1OCwgNDMpO1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgcmdiKDI0OCwgMTczLCA4MCk7XG4gICAgICovXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICByZ2IoMTksIDcwLCAxMDkpO1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgcmdiKDE5LCA3MCwgMTA5KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG59XG5cbmlvbi1pY29ue1xuICAgIGNvbG9yOnJnYig0OCwgODMsIDExMCk7XG59XG5cblxuaW9uLWljb257XG4gICAgY29sb3I6d2hpdGU7XG4gICBcbn1cbmlvbi1pY29uOmhvdmVye1xuICAgIFxuICAgIGNvbG9yOiByZ2IoMjE5LCAxNTUsIDE1NSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/contents/contents.page.ts":
/*!*******************************************!*\
  !*** ./src/app/contents/contents.page.ts ***!
  \*******************************************/
/*! exports provided: ContentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsPage", function() { return ContentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firebase-data.service */ "./src/app/services/firebase-data.service.ts");






let ContentsPage = class ContentsPage {
    constructor(activatedRoute, router, navCtrl, location, fds) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.navCtrl = navCtrl;
        this.location = location;
        this.fds = fds;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            console.log(params);
            this.courseName = params.json;
            this.language = params.language;
            this.fds.loadingPresent();
            this.fds.getData(this.courseName + ".json")
                .subscribe((data) => {
                this.fds.loadingDismiss();
                this.data = data;
            }, (error) => {
                console.log(error);
                this.fds.loadingDismiss();
                this.errorMsg = error;
            });
            console.log(this.data);
        });
    }
    details(c) {
        this.router.navigate(['/details'], { queryParams: {
                value: JSON.stringify(c),
                courseName: this.courseName,
                data: JSON.stringify(this.data)
            }
        });
    }
    goBack() {
        this.location.back();
    }
};
ContentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseDataService"] }
];
ContentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contents',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contents.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contents/contents.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contents.page.css */ "./src/app/contents/contents.page.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseDataService"]])
], ContentsPage);



/***/ })

}]);
//# sourceMappingURL=contents-contents-module-es2015.js.map