(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color:white;\"></ion-menu-button>\n    </ion-buttons>\n    \n    <ion-title>Categories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngIf=\"errorMsg\">\n  <h3 style=\"font-family:Wide Latin;text-align: center;font-weight: bold;font-size: x-large;\"> {{errorMsg}}</h3>\n<img  src=\"../../assets/images/404.png\"/>\n</div>\n\n \n  <ion-card  *ngFor=\"let c of categories\"  class=\"card\" (click)=\"cources(c.cources)\" >\n    <img src={{c.img}} width=\"900\" height=\"170\"/>\n    <ion-card-header>\n      <!-- <ion-card-subtitle>{{c.category}}</ion-card-subtitle> -->\n      <ion-card-title><h5>{{c.category}}</h5></ion-card-title>\n    </ion-card-header>\n    <ion-card-content>{{c.details}}</ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
    },
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.css":
/*!************************************!*\
  !*** ./src/app/tab2/tab2.page.css ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nion-card{\n    background-color: rgb(243, 226, 208);\n    /* border:1px solid rgb(251, 158, 43); */\n    border: 1px solid rgb(19, 70, 109);\n    /* background-color: rgb(192, 226, 251); */\n}\nion-menu-button{\n    color: #ffffff;\n  }\n.card {\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n  }\n.card:hover {\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyx3Q0FBd0M7SUFDeEMsa0NBQWtDO0lBQ2xDLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksY0FBYztFQUNoQjtBQUdBO0lBQ0Usa0VBQWtFO0lBQ2xFLHVEQUErQztJQUEvQywrQ0FBK0M7RUFDakQ7QUFDQTtJQUNFLHNFQUFzRTtFQUN4RSIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjI2LCAyMDgpO1xuICAgIC8qIGJvcmRlcjoxcHggc29saWQgcmdiKDI1MSwgMTU4LCA0Myk7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCA3MCwgMTA5KTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAyMjYsIDI1MSk7ICovXG59XG5pb24tbWVudS1idXR0b257XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICBcbiAgLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiAgfVxuICAuY2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcbiAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase-data.service */ "./src/app/services/firebase-data.service.ts");




let Tab2Page = class Tab2Page {
    // categories = [{
    //   "category": "Programming Languages",
    //   "img": "../../assets/images/programming.jpg",
    //   "details": "C, C++, Java, Python etc.",
    //   "cources": [
    //     { "language": "C Programming", "img": "../../assets/images/c.png" },
    //     { "language": "C++ Programming", "img": "../../assets/images/c++.png" },
    //     { "language": "Java Programming", "img": "../../assets/images/java.png" },
    //     { "language": "Python Programming", "img": "../../assets/images/python.png" }
    //   ]
    //   // ["C", "C++", "Java", "Python"]
    // },
    // {
    //   "category": "UI/UX Develepment",
    //   "img": "../../assets/images/ui-ux-development.png",
    //   "details": "Angular , React , Vue , Ionic ,React Native ,Flutter etc.",
    //   "cources": [
    //     { "language": "Angular \n", "img": "../../assets/images/angular.png" },
    //     { "language": "React", "img": "../../assets/images/react.png" },
    //     { "language": "Vue", "img": "../../assets/images/vuejs.png" },
    //     { "language": "Ionic", "img": "../../assets/images/ionic.png" },
    //     { "language": "React Native ", "img": "../../assets/images/reactnative.png" },
    //     { "language": "Flutter", "img": "../../assets/images/flutter.png" }
    //   ]
    //   // ["Angular", "React ", "Vue ", "Ionic", "React Native ", "Flutter "]
    // },
    // {
    //   "category": "Backend Development",
    //   "img": "../../assets/images/backend.png",
    //   "details": "Node , Express, Spring Boot ,PHP etc.",
    //   "cources": [
    //     { "language": "Node.js", "img": "../../assets/images/nodejs.png" },
    //     { "language": "Express", "img": "../../assets/images/expressjs.png" },
    //     { "language": "Spring Boot", "img": "../../assets/images/springboot.png" },
    //     { "language": "PHP", "img": "../../assets/images/php.png" }
    //   ]
    //   // ["Node.js" , "Express", "Spring Boot ","PHP " ]
    // }
    // ]
    constructor(router, fds) {
        this.router = router;
        this.fds = fds;
    }
    ngOnInit() {
        this.fds.getCategoriesData()
            .subscribe((data) => {
            this.categories = data;
        }, (error) => {
            console.log(error);
            this.errorMsg = error;
        });
    }
    cources(c) {
        this.router.navigate(['cources'], { queryParams: { value: JSON.stringify(c) } });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseDataService"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab2.page.css */ "./src/app/tab2/tab2.page.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseDataService"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map