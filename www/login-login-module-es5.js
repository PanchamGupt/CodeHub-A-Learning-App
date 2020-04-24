function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n\n      <h6>\n        <ion-icon name=\"chevron-back-outline\" (click)=\"goBack()\"></ion-icon>\n      </h6>\n    </ion-buttons> -->\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"background\">\n  \n\n    <!-- <ion-card-header>\n      Card Header\n    </ion-card-header> -->\n    <br/>\n    <ion-grid>\n      <ion-row justify-content-around>\n        <ion-col>\n    \n        </ion-col>\n        <ion-col>\n          <ion-icon  color=\"primary\" name=\"person-circle-sharp\" style=\"zoom:5.0;\" ></ion-icon>\n    \n        </ion-col>\n        <ion-col>\n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-card-content style=\"text-align: center;\" >\n      <form  [formGroup]=\"userLogin\" (ngSubmit)=\"loginData()\" >\n        <ion-item color=\"none\" >\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n      \n\n      <ion-item color=\"none\">\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\" required></ion-input>\n      </ion-item>\n\n      <br/>\n      <ion-button type=\"submit\" color=\"primary\" expand=\"block\"  shape=\"round\" [disabled]=\"!userLogin.valid\">Log IN<ion-icon name=\"log-in\"></ion-icon></ion-button>\n      <br/><br/>\n       Not registered? <a [routerLink]='[\"/register\"]' >Register Now</a><br/><br/>\n      Password not remember? <a [routerLink]='[\"/login\"]' (click)=\"recoverPassword()\">Recover Password</a>\n      </form>\n      \n      <!-- <div class=\"row\">\n        <div class=\"col\">______________</div>\n        <div class=\"col-auto\">OR</div>\n        <div class=\"col\"><hr></div>\n    </div> -->\n\n    <!-- <ion-grid>\n      <ion-row>\n        <ion-col></ion-col>or<ion-col><hr></ion-col>\n      </ion-row>\n    </ion-grid>\n\n  \n      <ion-button  color=\"danger\"  expand=\"full\">Log In with &nbsp; <ion-icon name=\"logo-google\"></ion-icon> </ion-button>\n       <ion-button  color=\"primary\" expand=\"full\">Log In with &nbsp; <ion-icon name=\"logo-facebook\"></ion-icon> </ion-button> -->\n    </ion-card-content> \n\n  \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts"); // import { FormsModule } from '@angular/forms';


    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "error-message {\n  color: var(--ion-color-danger);\n}\n\nion-content.background {\n  --background: url('login.png') 0 0/100% 100% no-repeat;\n  text-align: center;\n}\n\nion-card-content {\n  margin-top: -35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5jaGFta3VtYXJndXB0L0ZyYW1ld29yay9jb2RlaHViLWlvbmljL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBRElBO0VBQ0ksc0RBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0EsaUJBQUE7QUNEQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImVycm9yLW1lc3NhZ2V7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cblxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4ucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnR7XG5tYXJnaW4tdG9wOiAtMzVweDtcbn1cbiIsImVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IC0zNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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
    /* harmony import */


    var _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/firebase-data.service */
    "./src/app/services/firebase-data.service.ts");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(storage, location, formBuilder, router, afAuth, fds, alertCtrl) {
        _classCallCheck(this, LoginPage);

        this.storage = storage;
        this.location = location;
        this.formBuilder = formBuilder;
        this.router = router;
        this.afAuth = afAuth;
        this.fds = fds;
        this.alertCtrl = alertCtrl;
        this.userLogin = this.formBuilder.group({
          email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z0-9_.]+@[a-zA-Z0-9]{2,}.[a-zA-Z0-9]{2,3}$")]],
          password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginData",
        value: function loginData() {
          var _this = this;

          this.afAuth.auth.signInWithEmailAndPassword(this.userLogin.value.email, this.userLogin.value.password).then(function (res) {
            if (res.user) {
              console.log(_this.afAuth.auth);

              if (_this.afAuth.auth.currentUser.emailVerified) {
                console.log(_this.userLogin.value);

                _this.storage.set("currentUser", _this.userLogin.value.email);

                _this.fds.login(_this.userLogin.value.email);

                _this.router.navigate(["tabs/tab/categories"]);

                _this.userLogin.reset();
              } else {
                _this.afAuth.auth.currentUser.sendEmailVerification().then(function () {
                  _this.alertAll("Email not verified", "Visit your email for email verification");

                  _this.router.navigate(["/login"]);
                });

                _this.userLogin.reset();
              }
            }
          }).catch(function (err) {
            console.log("user not ", err.message);

            _this.alertAll("Login failed!", err.message);
          });
        } //alert

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
                    return this.alertCtrl.create({
                      header: header,
                      message: message,
                      buttons: ["Ok"]
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
        } //  Recover Password

      }, {
        key: "recoverPassword",
        value: function recoverPassword() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: 'Recover Password',
                      inputs: [{
                        name: 'email',
                        type: 'email',
                        placeholder: 'Enter your email'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler(data) {
                          console.log('Cancel clicked');
                        }
                      }, {
                        text: 'Recover Password',
                        handler: function handler(data) {
                          _this2.afAuth.auth.sendPasswordResetEmail(data.email).then(function (data) {
                            _this2.alertAll("Reset password", "Visit your email to recover codeHub password.");
                          }).catch(function (err) {
                            _this2.alertAll("failed!", err.message);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }, {
        type: _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _services_firebase_data_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map