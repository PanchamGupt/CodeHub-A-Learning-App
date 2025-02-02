(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button style=\"color:white;\"></ion-menu-button> -->\n      <!-- <h6><ion-icon name=\"chevron-back-outline\" [routerLink]='[\"/contents\"]' [queryParams]=\"{type:language}\"></ion-icon></h6> -->\n      <h6>\n        <ion-icon name=\"chevron-back-outline\" (click)=\"goBack()\"></ion-icon>\n      </h6>\n    </ion-buttons>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{contents.chapter}}\n  </ion-toolbar>\n</ion-header>\n\n<ion-content\n  padding-horizontal\n  [scrollEvents]=\"true\"\n  (ionScrollStart)=\"logScrollStart()\"\n  (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\"\n  [fullscreen]=\"true\"\n>\n  <div *ngFor=\"let c of item.content\" style=\"margin: 0px 12px;\">\n    <h2 *ngIf=\"c.type=='heading'\">\n      {{c.value}}\n    </h2>\n    <h5 *ngIf=\"c.type=='sub-heading'\">\n      {{c.value}}\n    </h5>\n    <div\n      *ngIf=\"c.type=='example'\"\n      style=\"\n        border: 0.8px groove rgb(27, 116, 93);\n        padding: 5px;\n        border-radius: 5px;\n      \"\n    >\n      <p *ngFor=\"let line of c.value\">{{line}}</p>\n    </div>\n\n    <pre\n      *ngIf=\"c.type=='example-code'\"\n      style=\"\n        \n        padding: 5px;\n        border-radius: 5px;\n        background-color: black;\n        color:white;\n      \"\n    >\n      <p *ngFor=\"let line of c.value\">{{line}}</p>\n  </pre>\n    <p *ngIf=\"c.type=='text'\" style=\"text-align: justify;\">\n      {{c.value}}\n    </p>\n    <div *ngIf=\"c.type=='note'\">\n      <p>\n        <span\n          style=\"\n            color: red;\n            font-size: large;\n            font-weight: bold;\n            font-style: italic;\n          \"\n          >Note: -&nbsp;</span\n        >{{c.value}}\n      </p>\n    </div>\n\n    <ion-img\n      *ngIf=\"c.type=='image'\"\n      [src]=\"imageUrl\"\n      style=\"border: 1px solid rgb(20, 66, 100);border-radius: 10px;\"\n    ></ion-img>\n\n    <div *ngIf=\"c.type=='list-string'\">\n      <ul *ngFor=\"let item of c.value\">\n        <li>{{item}}</li>\n      </ul>\n    </div>\n    <div *ngIf=\"c.type=='code'\" style=\"background-color: black; color: white;padding:3px 5px;border-radius: 7px;\">\n      <pre >{{code}}</pre>\n    </div>\n  </div>\n  <!-- </div>  -->\n\n  <ion-item lines=\"none\" style=\"font-weight: bold; margin: 2% 32%;\">\n    <ion-icon\n      name=\"chevron-back-outline\"\n      (click)=\"backItem()\"\n      *ngIf=\"backDisplay\"\n    ></ion-icon>\n    Page {{index+1}}<ion-icon\n      *ngIf=\"nextDisplay\"\n      name=\"chevron-forward-outline\"\n      (click)=\"nextItem()\"\n    >\n    </ion-icon>\n  </ion-item>\n\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"contents.index!=1\"  >\n    <ion-fab-button (click)=\"back(contents.index)\" color=\"light\" size=\"small\">\n      <ion-icon name=\"arrow-undo\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"  *ngIf=\"contents.index!='6'\">\n    <ion-fab-button (click)=\"next(contents.index)\" color=\"light\" size=\"small\">\n      <ion-icon name=\"arrow-redo\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <!-- \n    <ion-item lines=\"none\">\n \n      <ion-button *ngIf=\"contents.index!=1\" color=\"primary\" fill=\"clear\" (click)=\"back(contents.index)\" ><ion-icon name=\"arrow-undo\" slot=\"icon-only\"color=\"primary\"></ion-icon></ion-button>\n      <ion-button *ngIf=\"contents.index!='6'\" color=\"primary\" fill=\"clear\" (click)=\"next(contents.index)\"slot=\"end\" ><ion-icon name=\"arrow-redo\" slot=\"icon-only\" color=\"primary\"></ion-icon></ion-button>\n    </ion-item> -->\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"home\">\n          <ion-icon name=\"home\"></ion-icon>\n          <!-- <ion-label>tab 1</ion-label> -->\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"categories\">\n          <ion-icon name=\"book\"></ion-icon>\n          <!-- <ion-label>tab 2</ion-label> -->\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"notifications\">\n          <ion-icon name=\"notifications-sharp\"></ion-icon>\n          <!-- <ion-label>tab 3</ion-label> -->\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/details/details-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/details/details-routing.module.ts ***!
  \***************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/details/details.module.ts":
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/details/details.page.css":
/*!******************************************!*\
  !*** ./src/app/details/details.page.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5wYWdlLmNzcyJ9 */");

/***/ }),

/***/ "./src/app/details/details.page.ts":
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase-data.service */ "./src/app/services/firebase-data.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");






let DetailsPage = class DetailsPage {
    constructor(route, location, fds, storage) {
        this.route = route;
        this.location = location;
        this.fds = fds;
        this.storage = storage;
        this.index = 0;
        this.nextDisplay = true;
        this.backDisplay = false;
        this.route.queryParams.subscribe((res) => {
            this.contents = JSON.parse(res.value);
            this.data = JSON.parse(res.data);
            this.courseName = res.courseName;
            // this.items = this.contents['description']
        });
    }
    ngOnInit() {
        this.item = this.contents["description"][this.index];
        this.chapterName = this.contents.chapter;
        // this.loadCode(this.courseName,this.chapterName,this.item[3].value)
        this.loadCurrentItem(this.index);
        if (this.contents.description.length == 1) {
            this.nextDisplay = false;
        }
        else {
            this.nextDisplay = true;
            this.backDisplay = false;
        }
    }
    loadCurrentItem(index) {
        this.item = this.contents["description"][this.index];
        if (this.index == this.contents.description.length - 1) {
            this.nextDisplay = false;
            this.backDisplay = true;
        }
        let codeindex = -1;
        for (let i = 0; i < this.contents["description"][this.index].content.length; i++) {
            if (this.contents["description"][this.index].content[i].type === "code") {
                codeindex = i;
                break;
            }
        }
        if (codeindex != -1) {
            this.loadCode(this.courseName, this.chapterName, this.item.content[codeindex].value);
        }
        //for image
        let imageindex = -1;
        for (let i = 0; i < this.contents["description"][this.index].content.length; i++) {
            if (this.contents["description"][this.index].content[i].type === "image") {
                imageindex = i;
            }
        }
        if (imageindex != -1) {
            this.loadImage(this.courseName, this.chapterName, this.item.content[imageindex].value);
        }
    }
    nextItem() {
        // if (this.index < this.contents.description.length) {
        if (this.index + 2 == this.contents.description.length) {
            this.index++;
            this.loadCurrentItem(this.index);
            this.nextDisplay = false;
        }
        else {
            this.index++;
            this.loadCurrentItem(this.index);
            this.nextDisplay = true;
            this.backDisplay = true;
        }
        // }
    }
    backItem() {
        if (this.index <= 1) {
            this.index--;
            this.loadCurrentItem(this.index);
            this.backDisplay = false;
        }
        else {
            this.index--;
            this.loadCurrentItem(this.index);
            this.backDisplay = true;
            this.nextDisplay = true;
        }
    }
    //load code
    loadCode(course, chapter, file) {
        this.fds.loadingPresent();
        const path = `${course}/${chapter}/${file}`;
        const storageRef = this.storage.ref(path);
        storageRef.getDownloadURL().subscribe((res) => {
            let xhr = new XMLHttpRequest();
            xhr.responseType = "text";
            xhr.onload = (e) => {
                this.fds.loadingDismiss();
                this.code = xhr.response;
            };
            xhr.open("GET", res);
            xhr.send();
        }, (err) => {
            this.fds.loadingDismiss();
            console.log(err);
        });
    }
    //load image
    loadImage(course, chapter, file) {
        this.fds.loadingPresent();
        const path = `${course}/${chapter}/${file}`;
        const storageRef = this.storage.ref(path);
        storageRef.getDownloadURL().subscribe((res) => {
            this.fds.loadingDismiss();
            this.imageUrl = res;
        }, (err) => {
            this.fds.loadingDismiss();
            console.log(err);
        });
    }
    goBack() {
        this.fds.loadingDismiss();
        this.location.back();
    }
    back(index) {
        this.index = index - 1;
        this.contents = this.data.filter((s) => s.index == this.index)[0];
    }
    next(index) {
        this.index = index + 1;
        this.contents = this.data.filter((s) => s.index == this.index)[0];
    }
    ngOnDistroy() {
        this.fds.loadingDismiss();
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseDataService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }
];
DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.page.css */ "./src/app/details/details.page.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseDataService"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=details-details-module-es2015.js.map