(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aboutus-aboutus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      \n      <h6><ion-icon name=\"chevron-back-outline\" (click)=\"goBack()\"></ion-icon></h6>\n    </ion-buttons>\n    <ion-title>About us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n\n     \n  \n  \n  <h1 style=\"font-family:Wide Latin;text-align: center;font-weight: bold;font-size: xx-large;\">Codehub Team</h1>\n  <br/>\n  <!-- Saurabh -->\n  <ion-card style=\"background-color: rgb(200, 225, 236);border:1px ridge rgb(143, 213, 243);\">\n    <!-- <ion-card-header *ngIf=\"!saurabh\"><ion-card-title><h4>Saurabh Singh <ion-icon name=\"chevron-down-outline\" slot=\"end\" (click)=\"showdetails('saurabh')\"></ion-icon></h4></ion-card-title></ion-card-header> -->\n    <ion-item lines=\"none\" *ngIf=\"!saurabh\" >\n \n      Saurabh Singh \n        <ion-icon name=\"chevron-down-outline\" slot=\"end\" (click)=\"showdetails('saurabh')\"></ion-icon>\n    \n    </ion-item> \n\n    <ion-grid *ngIf=\"saurabh\">\n      <ion-row>\n         <ion-col size=\"5\"><img src=\"../../assets/user/saurabh.jpg\"></ion-col>\n         <ion-col>\n           <h4>Saurabh Singh</h4>\n           <p>Full Stack Application Developer</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <!-- pancham -->\n<ion-card style=\"background-color: rgb(238, 216, 199);border:1px ridge rgb(241, 190, 151);\">\n    <!-- <ion-card-header *ngIf=\"!pancham\"><ion-card-title><h4>Pancham Kumar Gupt <ion-icon name=\"chevron-down-outline\" slot=\"end\" (click)=\"showdetails('pancham')\"></ion-icon></h4></ion-card-title></ion-card-header> -->\n    <ion-item lines=\"none\" *ngIf=\"!pancham\" >\n \n      Pancham Kumar Gupt\n        <ion-icon name=\"chevron-down-outline\" slot=\"end\" (click)=\"showdetails('pancham')\"></ion-icon>\n    \n    </ion-item> \n\n      <ion-grid *ngIf=\"pancham\">\n        <ion-row>\n          <ion-col>\n            <h4>Pancham Kr. Gupt</h4>\n            <p>Full Stack Application Developer</p>\n         </ion-col>\n           <ion-col size=\"5\"><img src=\"../../assets/user/Unknown 2.jpg\"></ion-col>\n           \n        </ion-row>\n      </ion-grid>\n  </ion-card>\n\n\n\n  <!-- shashank -->\n  <ion-card style=\"background-color:rgb(228, 213, 236);border:1px ridge rgb(213, 159, 241);\">\n    <!-- <ion-card-header *ngIf=\"!shashank\"><ion-card-title><h4>Shashank Shukla <ion-icon name=\"chevron-down-outline\" slot=\"end\" (click)=\"showdetails('shashank')\"></ion-icon></h4></ion-card-title></ion-card-header> -->\n    <ion-item lines=\"none\" *ngIf=\"!shashank\" >\n \n      Shashank Shukla\n        <ion-icon name=\"chevron-down-outline\" slot=\"end\" (click)=\"showdetails('shashank')\"></ion-icon>\n    \n    </ion-item> \n\n    <ion-grid *ngIf=\"shashank\">\n      <ion-row>\n         <ion-col size=\"5\"><img src=\"../../assets/user/shashank.png\"></ion-col>\n         <ion-col>\n           <h4>Shashank Shukla</h4>\n           <p>Full Stack Application Developer</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n  <!-- kashish -->\n  <ion-card style=\"background-color: rgb(236, 243, 205);border:1px ridge rgb(217, 240, 114);\">\n    <!-- <ion-card-header *ngIf=\"!kashish\"><ion-card-title><h4>Kashish Mehata<ion-icon name=\"chevron-down-outline\" slot=\"end\" (click)=\"showdetails('kashish')\"></ion-icon></h4></ion-card-title></ion-card-header> -->\n    <ion-item lines=\"none\" *ngIf=\"!kashish\" >\n \n      Kashish Mehta\n        <ion-icon name=\"chevron-down-outline\" slot=\"end\" (click)=\"showdetails('kashish')\"></ion-icon>\n    \n    </ion-item> \n\n    <ion-grid *ngIf=\"kashish\">\n      <ion-row>\n       \n         <ion-col>\n           <h4>Kashish Mehta</h4>\n           <p>UX Designer</p>\n        </ion-col>\n        <ion-col size=\"5\"><img src=\"../../assets/user/kashish.jpg\" ></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <br/>\n <p style=\"text-align: center ;\"> contact us : codehubteam@gmail.com</p> \n</ion-content>\n");

/***/ }),

/***/ "./src/app/aboutus/aboutus-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/aboutus/aboutus-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AboutusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageRoutingModule", function() { return AboutusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/aboutus/aboutus.page.ts");




const routes = [
    {
        path: '',
        component: _aboutus_page__WEBPACK_IMPORTED_MODULE_3__["AboutusPage"]
    }
];
let AboutusPageRoutingModule = class AboutusPageRoutingModule {
};
AboutusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutusPageRoutingModule);



/***/ }),

/***/ "./src/app/aboutus/aboutus.module.ts":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.module.ts ***!
  \*******************************************/
/*! exports provided: AboutusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus-routing.module */ "./src/app/aboutus/aboutus-routing.module.ts");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/aboutus/aboutus.page.ts");







let AboutusPageModule = class AboutusPageModule {
};
AboutusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutusPageRoutingModule"]
        ],
        declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_6__["AboutusPage"]]
    })
], AboutusPageModule);



/***/ }),

/***/ "./src/app/aboutus/aboutus.page.scss":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  border-radius: 10px;\n  width: 150px;\n  height: 100;\n}\n\nh4 {\n  color: black;\n}\n\nion-card {\n  border: 1px ridge #777575;\n}\n\nion-item {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5jaGFta3VtYXJndXB0L0ZyYW1ld29yay9jb2RlaHViLWlvbmljL3NyYy9hcHAvYWJvdXR1cy9hYm91dHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNOSjs7QURTQTtFQUNJLFlBQUE7QUNOSjs7QURTQTtFQUNJLHlCQUFBO0FDTko7O0FEU0E7RUFDSSxnQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50e1xuLy8gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIwMywgMTc1KTtcbi8vIH1cblxuLy8gaW9uLXJvd3tcbi8vICAgICBtYXJnaW4tbGVmdDogLTIycHg7ICBcbi8vIH1cbmltZ3tcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIGhlaWdodDoxMDA7XG5cbn1cbmg0e1xuICAgIGNvbG9yOmJsYWNrO1xufVxuXG5pb24tY2FyZHtcbiAgICBib3JkZXI6MXB4IHJpZGdlIHJnYigxMTksIDExNywgMTE3KTtcbn1cblxuaW9uLWl0ZW17XG4gICAgZm9udC1zaXplOmxhcmdlO1xufSIsImltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxMDA7XG59XG5cbmg0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlcjogMXB4IHJpZGdlICM3Nzc1NzU7XG59XG5cbmlvbi1pdGVtIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/aboutus/aboutus.page.ts":
/*!*****************************************!*\
  !*** ./src/app/aboutus/aboutus.page.ts ***!
  \*****************************************/
/*! exports provided: AboutusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPage", function() { return AboutusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AboutusPage = class AboutusPage {
    constructor(router) {
        this.router = router;
        this.pancham = false;
        this.saurabh = false;
        this.shashank = false;
        this.kashish = false;
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigate(["tabs/tab/categories"]);
    }
    showdetails(name) {
        switch (name) {
            case "pancham": {
                this.pancham = true;
                this.saurabh = false;
                this.shashank = false;
                this.kashish = false;
                break;
            }
            case "saurabh": {
                this.pancham = false;
                this.saurabh = true;
                this.shashank = false;
                this.kashish = false;
                break;
            }
            case "shashank": {
                this.pancham = false;
                this.saurabh = false;
                this.shashank = true;
                this.kashish = false;
                break;
            }
            case "kashish": {
                this.pancham = false;
                this.saurabh = false;
                this.shashank = false;
                this.kashish = true;
                break;
            }
        }
    }
};
AboutusPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AboutusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aboutus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aboutus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aboutus.page.scss */ "./src/app/aboutus/aboutus.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AboutusPage);



/***/ })

}]);
//# sourceMappingURL=aboutus-aboutus-module-es2015.js.map