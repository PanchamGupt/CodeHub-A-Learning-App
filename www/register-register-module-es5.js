function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <h6>\n        <ion-icon name=\"chevron-back-outline\" (click)=\"goBack()\"></ion-icon>\n      </h6>\n    </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"background\">\n  <ion-card-content style=\"text-align: center;\">\n    <form [formGroup]=\"registeredData\" (ngSubmit)=\"registere()\" >\n    <ion-item color=\"none\">\n    <ion-label position=\"floating\">Name <span>*</span></ion-label>\n    <ion-input formControlName=\"name\" required></ion-input>\n  </ion-item>\n  <ion-item color=\"none\">\n    <ion-label position=\"floating\">Email Id <span>*</span></ion-label>\n    <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\n  </ion-item>\n  <ion-item color=\"none\">\n    <ion-label position=\"floating\">Password <span>*</span></ion-label>\n    <ion-input type=\"password\" formControlName=\"password\" required></ion-input>\n  </ion-item>\n  <ion-item color=\"none\">\n    <ion-label position=\"floating\">Confirm Password <span>*</span></ion-label>\n    <ion-input type=\"password\" formControlName=\"cpassword\" required></ion-input>\n  </ion-item>\n  <ion-item color=\"none\">\n    <ion-label position=\"floating\">Mobile Number <span>*</span></ion-label>\n    <ion-input formControlName=\"mobile\" required></ion-input>\n  </ion-item>\n  <br/>\n  <ion-button type=\"submit\"  expand=\"block\"  shape=\"round\" [disabled]=\"!registeredData.valid\">Register</ion-button>\n  <ion-button type=\"reset\" color=\"warning\" expand=\"block\"  shape=\"round\">Reset</ion-button>\n  Already registered? <a [routerLink]='[\"/login\"]' >Log In</a>\n</form>\n</ion-card-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/register/register-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/register/register-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "span {\n  color: red;\n}\n\nion-content.background {\n  --background: url('login.png') 0 0/100% 100% no-repeat;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5jaGFta3VtYXJndXB0L0ZyYW1ld29yay9jb2RlaHViLWlvbmljL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxzREFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFue1xuICAgIGNvbG9yOnJlZDtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbiIsInNwYW4ge1xuICBjb2xvcjogcmVkO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var RegisterPage =
    /*#__PURE__*/
    function () {
      function RegisterPage(location, formBuilder, router, afAuth, alert, storage) {
        _classCallCheck(this, RegisterPage);

        this.location = location;
        this.formBuilder = formBuilder;
        this.router = router;
        this.afAuth = afAuth;
        this.alert = alert;
        this.storage = storage;
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registeredData = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[6-9][0-9]{9}$')]]
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "registere",
        value: function registere() {
          var _this = this;

          if (this.registeredData.value.password !== this.registeredData.value.cpassword) {
            this.alertAll("Failed!", "Passwords don't match");
          } else {
            // working==============================
            this.afAuth.auth.createUserWithEmailAndPassword(this.registeredData.value.email, this.registeredData.value.password).then(function (res) {
              if (res.user) {
                _this.afAuth.auth.currentUser.sendEmailVerification().then(function () {
                  _this.storage.set(_this.registeredData.value.email, _this.registeredData.value);

                  _this.alertAll("Verify Email", "Visit your email for email verification");

                  _this.router.navigate(["/login"]);
                });
              }
            }).catch(function (err) {
              _this.alertAll("failed", err.message);
            });
          }
        } // SendVerificationMail() {
        //   console.log(this.afAuth.auth.currentUser)
        //  return this.afAuth.auth.currentUser.sendEmailVerification()
        //     .then(() => {
        //       this.alertAll("Email Verification", "visit your email for email Verification")
        //       this.router.navigateByUrl("/login");
        //     })
        // }

      }, {
        key: "alertAll",
        value: function alertAll(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alert.create({
                      header: header,
                      message: message,
                      buttons: ['Ok']
                    });

                  case 2:
                    this.allet = _context.sent;
                    _context.next = 5;
                    return this.allet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=register-register-module-es5.js.map