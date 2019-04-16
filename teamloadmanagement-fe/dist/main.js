(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _directives_email_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/email.validator.directive */ "./src/app/directives/email.validator.directive.ts");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _account_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.routing */ "./src/app/account/account.routing.ts");
/* harmony import */ var _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./facebook-login/facebook-login.component */ "./src/app/account/facebook-login/facebook-login.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");











var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _account_routing__WEBPACK_IMPORTED_MODULE_7__["routing"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationFormComponent"], _directives_email_validator_directive__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"], _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_8__["FacebookLoginComponent"]],
            providers: [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/account.routing.ts":
/*!********************************************!*\
  !*** ./src/app/account/account.routing.ts ***!
  \********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facebook-login/facebook-login.component */ "./src/app/account/facebook-login/facebook-login.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");




var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    { path: 'register', component: _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationFormComponent"] },
    { path: 'login', component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"] },
    { path: 'facebook-login', component: _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginComponent"] }
]);


/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <a *ngIf=\"!isRequesting\" href=\"javascript:void(0)\" (click)=\"launchFbLogin()\"> <img class=\"img-fluid\" src=\"/assets/facebook-login.png\" /></a>\r\n    <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n    <div *ngIf=\"failed\" class=\"alert alert-danger\" role=\"alert\">\r\n      <p><strong>Oops!</strong> Your facebook login failed.</p>\r\n      <ul>\r\n        <li>Error: {{error}}</li>\r\n        <li>Description: {{errorDescription}}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZmFjZWJvb2stbG9naW4vZmFjZWJvb2stbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.ts ***!
  \********************************************************************/
/*! exports provided: FacebookLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginComponent", function() { return FacebookLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");




var FacebookLoginComponent = /** @class */ (function () {
    function FacebookLoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        if (window.addEventListener) {
            window.addEventListener("message", this.handleMessage.bind(this), false);
        }
        else {
            window.attachEvent("onmessage", this.handleMessage.bind(this));
        }
    }
    FacebookLoginComponent.prototype.launchFbLogin = function () {
        this.authWindow = window.open('https://www.facebook.com/v2.11/dialog/oauth?&response_type=token&display=popup&client_id=1528751870549294&display=popup&redirect_uri=http://localhost:5000/facebook-auth.html&scope=email', null, 'width=600,height=400');
    };
    FacebookLoginComponent.prototype.handleMessage = function (event) {
        var _this = this;
        var message = event;
        // Only trust messages from the below origin.
        if (message.origin !== "http://localhost:5000")
            return;
        this.authWindow.close();
        var result = JSON.parse(message.data);
        if (!result.status) {
            this.failed = true;
            this.error = result.error;
            this.errorDescription = result.errorDescription;
        }
        else {
            this.failed = false;
            this.isRequesting = true;
            this.userService.facebookLogin(result.accessToken)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/dashboard/home']);
                }
            }, function (error) {
                _this.failed = true;
                _this.error = error;
            });
        }
    };
    FacebookLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-facebook-login',
            template: __webpack_require__(/*! ./facebook-login.component.html */ "./src/app/account/facebook-login/facebook-login.component.html"),
            styles: [__webpack_require__(/*! ./facebook-login.component.scss */ "./src/app/account/facebook-login/facebook-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());



/***/ }),

/***/ "./src/app/account/login-form/login-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login-box\">\r\n  <div class=\"left\">\r\n    <h1>Log in</h1>\r\n    <form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\r\n      <input id=\"email\" type=\"text\" name=\"email\" placeholder=\"E-mail\" ngModel />\r\n      <input id=\"password\" type=\"password\" name=\"password\" placeholder=\"Password\" ngModel />\r\n      <input type=\"password\" name=\"password2\" placeholder=\"Retype password\" />\r\n\r\n      <input type=\"submit\" name=\"signup_submit\" [disabled]=\"f.invalid || isRequesting\" value=\"Log in\" />\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"right\">\r\n    <span class=\"loginwith\">Sign in with<br />social network</span>\r\n\r\n    <button class=\"social-signin facebook\">Log in with facebook</button>\r\n  </div>\r\n  <div class=\"or\">OR</div>\r\n</div>\r\n<div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n  <strong>Oops!</strong> {{errors}}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);\n*:focus {\n  outline: none; }\nbody {\n  margin: 0;\n  padding: 0;\n  background: #DDD;\n  font-size: 16px;\n  color: #222;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300; }\n#login-box {\n  position: relative;\n  margin: 5% auto;\n  width: 600px;\n  height: 450px;\n  background: #FFF;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); }\n.left {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  padding: 40px;\n  width: 300px;\n  height: 400px; }\nh1 {\n  margin: 0 0 20px 0;\n  font-weight: 300;\n  font-size: 28px; }\ninput[type=\"text\"],\ninput[type=\"password\"] {\n  display: block;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n  padding: 4px;\n  width: 220px;\n  height: 32px;\n  border: none;\n  border-bottom: 1px solid #AAA;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  transition: 0.2s ease; }\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus {\n  border-bottom: 2px solid #16a085;\n  color: #16a085;\n  transition: 0.2s ease; }\ninput[type=\"submit\"] {\n  margin-top: 28px;\n  width: 120px;\n  height: 32px;\n  background: #16a085;\n  border: none;\n  border-radius: 2px;\n  color: #FFF;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: 0.1s ease;\n  cursor: pointer; }\ninput[type=\"submit\"]:hover,\ninput[type=\"submit\"]:focus {\n  opacity: 0.8;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  transition: 0.1s ease; }\ninput[type=\"submit\"]:active {\n  opacity: 1;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  transition: 0.1s ease; }\n.or {\n  position: absolute;\n  top: 180px;\n  left: 280px;\n  width: 40px;\n  height: 40px;\n  background: #DDD;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  line-height: 40px;\n  text-align: center; }\n.right {\n  position: absolute;\n  top: 0;\n  right: 0;\n  box-sizing: border-box;\n  padding: 40px;\n  width: 300px;\n  height: 400px;\n  background: url(\"https://goo.gl/YbktSj\");\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0; }\n.right .loginwith {\n  display: block;\n  margin-bottom: 40px;\n  font-size: 28px;\n  color: #FFF;\n  text-align: center; }\nbutton.social-signin {\n  margin-bottom: 20px;\n  width: 220px;\n  height: 36px;\n  border: none;\n  border-radius: 2px;\n  color: #FFF;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  transition: 0.2s ease;\n  cursor: pointer; }\nbutton.social-signin:hover,\nbutton.social-signin:focus {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  transition: 0.2s ease; }\nbutton.social-signin:active {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  transition: 0.2s ease; }\nbutton.social-signin.facebook {\n  background: #32508E; }\nbutton.social-signin.twitter {\n  background: #55ACEE; }\nbutton.social-signin.google {\n  background: #DD4B39; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi1mb3JtL0M6XFxNeVByb2plY3RzXFx1bml2ZXJzaXR5XFxnaXRodWJcXENvdXJzZVdvcmtWMlxcdGVhbWxvYWRtYW5hZ2VtZW50LWZlL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcYWNjb3VudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUFZO0FBRVo7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0NBQXdDLEVBQUE7QUFHMUM7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhLEVBQUE7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2pCOztFQUVFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7QUFHdkI7O0VBRUUsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZSxFQUFBO0FBR2pCOztFQUVFLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxVQUFVO0VBQ1Ysd0NBQXdDO0VBQ3hDLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsMEJBQTBCLEVBQUE7QUFHNUI7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7QUFHakI7O0VBRUUsd0NBQXdDO0VBQ3hDLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usd0NBQXdDO0VBQ3hDLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCwzMDAsNTAwKTtcclxuXHJcbio6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNEREQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4jbG9naW4tYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQUFBO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTZhMDg1O1xyXG4gIGNvbG9yOiAjMTZhMDg1O1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgbWFyZ2luLXRvcDogMjhweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMxNmEwODU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMge1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTphY3RpdmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XHJcbn1cclxuXHJcbi5vciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTgwcHg7XHJcbiAgbGVmdDogMjgwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNEREQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nb28uZ2wvWWJrdFNqJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XHJcbn1cclxuXHJcbi5yaWdodCAubG9naW53aXRoIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogI0ZGRjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbi5zb2NpYWwtc2lnbmluIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b24uc29jaWFsLXNpZ25pbjpob3ZlcixcclxuYnV0dG9uLnNvY2lhbC1zaWduaW46Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG5idXR0b24uc29jaWFsLXNpZ25pbjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG5idXR0b24uc29jaWFsLXNpZ25pbi5mYWNlYm9vayB7XHJcbiAgYmFja2dyb3VuZDogIzMyNTA4RTtcclxufVxyXG5cclxuYnV0dG9uLnNvY2lhbC1zaWduaW4udHdpdHRlciB7XHJcbiAgYmFja2dyb3VuZDogIzU1QUNFRTtcclxufVxyXG5cclxuYnV0dG9uLnNvY2lhbC1zaWduaW4uZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kOiAjREQ0QjM5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.ts ***!
  \************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginFormComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.email, value.password)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/dashboard/home']);
                }
            }, function (error) { return _this.errors = error; });
        }
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/account/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/account/login-form/login-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <h2>Please enter your information</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n      <form #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser(f)\">\r\n          <div class=\"form-group\">\r\n              <label for=\"first-name\">First name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"First name\" name=\"firstName\" tmFocus ngModel>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"last-name\">Last name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Last name\" name=\"lastName\" ngModel>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email\" ngModel  #email=\"ngModel\">\r\n            <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\" ngModel>\r\n          </div>\r\n          <div class=\"form-group\">\r\n             <label for=\"location\">Location</label>\r\n             <input type=\"text\" class=\"form-control\" id=\"location\" placeholder=\"Location\"  required name=\"location\" ngModel>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Sign Up</button>\r\n              <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n          </div>\r\n\r\n          <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n              <strong>Oops!</strong> {{errors}}\r\n            </div>\r\n\r\n        </form>\r\n   </div>\r\n</div> -->\r\n\r\n<div id=\"login-box\">\r\n  <div class=\"left\">\r\n    <h1>Sign up</h1>\r\n    <form #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser(f)\">\r\n      <input id=\"firstName\" type=\"text\" name=\"firstName\" placeholder=\"First Name\" ngModel />\r\n      <input id=\"lastName\" type=\"text\" name=\"lastName\" placeholder=\"Last Name\" ngModel />\r\n      <input id=\"email\" type=\"text\" name=\"email\" placeholder=\"E-mail\" ngModel />\r\n      <input id=\"password\" type=\"password\" name=\"password\" placeholder=\"Password\" ngModel />\r\n      <input type=\"password\" name=\"password2\" placeholder=\"Retype password\" />\r\n      <input type=\"submit\" name=\"signup_submit\" [disabled]=\"f.invalid || isRequesting\" value=\"Sign me up\" />\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"right\">\r\n    <span class=\"loginwith\">Sign in with<br />social network</span>\r\n\r\n    <button class=\"social-signin facebook\">Log in with facebook</button>\r\n  </div>\r\n  <div class=\"or\">OR</div>\r\n</div>\r\n<div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n  <strong>Oops!</strong> {{errors}}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);\n*:focus {\n  outline: none; }\nbody {\n  margin: 0;\n  padding: 0;\n  background: #DDD;\n  font-size: 16px;\n  color: #222;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300; }\n#login-box {\n  position: relative;\n  margin: 5% auto;\n  width: 600px;\n  height: 450px;\n  background: #FFF;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); }\n.left {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  padding: 40px;\n  width: 300px;\n  height: 400px; }\nh1 {\n  margin: 0 0 20px 0;\n  font-weight: 300;\n  font-size: 28px; }\ninput[type=\"text\"],\ninput[type=\"password\"] {\n  display: block;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n  padding: 4px;\n  width: 220px;\n  height: 32px;\n  border: none;\n  border-bottom: 1px solid #AAA;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  transition: 0.2s ease; }\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus {\n  border-bottom: 2px solid #16a085;\n  color: #16a085;\n  transition: 0.2s ease; }\ninput[type=\"submit\"] {\n  margin-top: 28px;\n  width: 120px;\n  height: 32px;\n  background: #16a085;\n  border: none;\n  border-radius: 2px;\n  color: #FFF;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: 0.1s ease;\n  cursor: pointer; }\ninput[type=\"submit\"]:hover,\ninput[type=\"submit\"]:focus {\n  opacity: 0.8;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  transition: 0.1s ease; }\ninput[type=\"submit\"]:active {\n  opacity: 1;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  transition: 0.1s ease; }\n.or {\n  position: absolute;\n  top: 180px;\n  left: 280px;\n  width: 40px;\n  height: 40px;\n  background: #DDD;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  line-height: 40px;\n  text-align: center; }\n.right {\n  position: absolute;\n  top: 0;\n  right: 0;\n  box-sizing: border-box;\n  padding: 40px;\n  width: 300px;\n  height: 400px;\n  background: url(\"https://goo.gl/YbktSj\");\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0; }\n.right .loginwith {\n  display: block;\n  margin-bottom: 40px;\n  font-size: 28px;\n  color: #FFF;\n  text-align: center; }\nbutton.social-signin {\n  margin-bottom: 20px;\n  width: 220px;\n  height: 36px;\n  border: none;\n  border-radius: 2px;\n  color: #FFF;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  transition: 0.2s ease;\n  cursor: pointer; }\nbutton.social-signin:hover,\nbutton.social-signin:focus {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  transition: 0.2s ease; }\nbutton.social-signin:active {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  transition: 0.2s ease; }\nbutton.social-signin.facebook {\n  background: #32508E; }\nbutton.social-signin.twitter {\n  background: #55ACEE; }\nbutton.social-signin.google {\n  background: #DD4B39; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZWdpc3RyYXRpb24tZm9ybS9DOlxcTXlQcm9qZWN0c1xcdW5pdmVyc2l0eVxcZ2l0aHViXFxDb3Vyc2VXb3JrVjJcXHRlYW1sb2FkbWFuYWdlbWVudC1mZS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGFjY291bnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBWTtBQUVaO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHdDQUF3QyxFQUFBO0FBRzFDO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYSxFQUFBO0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdqQjs7RUFFRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQixFQUFBO0FBR3ZCOztFQUVFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTtBQUdqQjs7RUFFRSxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsVUFBVTtFQUNWLHdDQUF3QztFQUN4QyxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDBCQUEwQixFQUFBO0FBRzVCO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZSxFQUFBO0FBR2pCOztFQUVFLHdDQUF3QztFQUN4QyxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLHdDQUF3QztFQUN4QyxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVnaXN0cmF0aW9uLWZvcm0vcmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCwzMDAsNTAwKTtcclxuXHJcbio6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNEREQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4jbG9naW4tYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQUFBO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTZhMDg1O1xyXG4gIGNvbG9yOiAjMTZhMDg1O1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgbWFyZ2luLXRvcDogMjhweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMxNmEwODU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMge1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTphY3RpdmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XHJcbn1cclxuXHJcbi5vciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTgwcHg7XHJcbiAgbGVmdDogMjgwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNEREQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nb28uZ2wvWWJrdFNqJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XHJcbn1cclxuXHJcbi5yaWdodCAubG9naW53aXRoIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogI0ZGRjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbi5zb2NpYWwtc2lnbmluIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogI0ZGRjtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b24uc29jaWFsLXNpZ25pbjpob3ZlcixcclxuYnV0dG9uLnNvY2lhbC1zaWduaW46Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG5idXR0b24uc29jaWFsLXNpZ25pbjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG5idXR0b24uc29jaWFsLXNpZ25pbi5mYWNlYm9vayB7XHJcbiAgYmFja2dyb3VuZDogIzMyNTA4RTtcclxufVxyXG5cclxuYnV0dG9uLnNvY2lhbC1zaWduaW4udHdpdHRlciB7XHJcbiAgYmFja2dyb3VuZDogIzU1QUNFRTtcclxufVxyXG5cclxuYnV0dG9uLnNvY2lhbC1zaWduaW4uZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kOiAjREQ0QjM5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");




var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        console.log(value);
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.register(value.firstName, value.lastName, value.email, value.password)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                }
            }, function (errors) { return _this.errors = errors; });
        }
    };
    RegistrationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__(/*! ./registration-form.component.html */ "./src/app/account/registration-form/registration-form.component.html"),
            styles: [__webpack_require__(/*! ./registration-form.component.scss */ "./src/app/account/registration-form/registration-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<!-- <app-sidenav></app-sidenav> -->\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-left: auto;\n  margin-right: auto; }\n\n@media (min-width: 568px) {\n  .container-fluid {\n    width: 550px; } }\n\n@media (min-width: 992px) {\n  .container-fluid {\n    width: 970px; } }\n\n@media (min-width: 1200px) {\n  .container-fluid {\n    width: 1170px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXE15UHJvamVjdHNcXHVuaXZlcnNpdHlcXGdpdGh1YlxcQ291cnNlV29ya1YyXFx0ZWFtbG9hZG1hbmFnZW1lbnQtZmUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSTtJQUNFLFlBQVksRUFBQSxFQUNiOztBQUVIO0VBQ0U7SUFDRSxZQUFZLEVBQUEsRUFDYjs7QUFFSDtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NjhweCkge1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgIHdpZHRoOiA1NTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgd2lkdGg6IDk3MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgd2lkdGg6IDExNzBweDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasks/tasks.module */ "./src/app/tasks/tasks.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _authenticate_xhr_backend__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authenticate-xhr.backend */ "./src/app/authenticate-xhr.backend.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ng_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ng-material.module */ "./src/app/ng-material.module.ts");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_material_module__WEBPACK_IMPORTED_MODULE_16__["NgMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _account_account_module__WEBPACK_IMPORTED_MODULE_8__["AccountModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_14__["DashboardModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _tasks_tasks_module__WEBPACK_IMPORTED_MODULE_10__["TaskModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [_shared_utils_config_service__WEBPACK_IMPORTED_MODULE_17__["ConfigService"], {
                    provide: _angular_http__WEBPACK_IMPORTED_MODULE_4__["XHRBackend"],
                    useClass: _authenticate_xhr_backend__WEBPACK_IMPORTED_MODULE_13__["AuthenticateXHRBackend"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");


var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");

// auth.guard.ts



var AuthGuard = /** @class */ (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.user.isLoggedIn()) {
            this.router.navigate(['/account/login']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authenticate-xhr.backend.ts":
/*!*********************************************!*\
  !*** ./src/app/authenticate-xhr.backend.ts ***!
  \*********************************************/
/*! exports provided: AuthenticateXHRBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateXHRBackend", function() { return AuthenticateXHRBackend; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");






// sweet global way to handle 401s - works in tandem with existing AuthGuard route checks
// http://stackoverflow.com/questions/34934009/handling-401s-globally-with-angular-2
var AuthenticateXHRBackend = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthenticateXHRBackend, _super);
    function AuthenticateXHRBackend(_browserXhr, _baseResponseOptions, _xsrfStrategy) {
        return _super.call(this, _browserXhr, _baseResponseOptions, _xsrfStrategy) || this;
    }
    AuthenticateXHRBackend.prototype.createConnection = function (request) {
        var xhrConnection = _super.prototype.createConnection.call(this, request);
        xhrConnection.response = xhrConnection.response.catch(function (error) {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
                /* Great solution for bundling with Auth Guard!
                1. Auth Guard checks authorized user (e.g. by looking into LocalStorage).
                2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage).
                3. As at this early stage you can't access the Router for forwarding to the login page,
                4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                localStorage.removeItem('auth_token');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
        });
        return xhrConnection;
    };
    AuthenticateXHRBackend = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["XSRFStrategy"]])
    ], AuthenticateXHRBackend);
    return AuthenticateXHRBackend;
}(_angular_http__WEBPACK_IMPORTED_MODULE_2__["XHRBackend"]));



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ng-material.module */ "./src/app/ng-material.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/core/sidenav/sidenav.component.ts");







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_material_module__WEBPACK_IMPORTED_MODULE_4__["NgMaterialModule"]
            ],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["SidenavComponent"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["SidenavComponent"]
            ],
            providers: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button mat-icon-button class=\"example-icon\" aria-hidden=\"false\" matTooltip=\"Dashboard\" routerLinkActive=\"active\" routerLink=\"/dashboard\"><mat-icon>dashboard</mat-icon></button>\r\n    <span class=\"example-spacer\"></span>\r\n    <button mat-icon-button class=\"example-icon\" aria-hidden=\"false\" *ngIf=\"!status\" routerLinkActive=\"active\" routerLink=\"/register\" matTooltip=\"Signup\"><mat-icon>person_add</mat-icon></button>\r\n    <button mat-icon-button class=\"example-icon\" aria-hidden=\"false\" *ngIf=\"!status\" routerLinkActive=\"active\" routerLink=\"/login\" matTooltip=\"Login\"><mat-icon>exit_to_app</mat-icon></button>\r\n    <button mat-icon-button class=\"example-icon\" aria-hidden=\"false\" *ngIf=\"status\" (click)=\"logout()\" matTooltip=\"Logout\"><mat-icon>power_settings_new</mat-icon></button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXE15UHJvamVjdHNcXHVuaXZlcnNpdHlcXGdpdGh1YlxcQ291cnNlV29ya1YyXFx0ZWFtbG9hZG1hbmFnZW1lbnQtZmUvc3JjXFxhcHBcXGNvcmVcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.authNavStatus$.subscribe(function (status) { return _this.status = status; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/sidenav/sidenav.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/sidenav/sidenav.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"slide-out\" class=\"side-nav fixed main-side\">\r\n    <li class=\"lone\">\r\n        <a href=\"#\"><i class=\"fas fa-home my-icon\"></i>Home</a>\r\n    </li>\r\n    <div class=\"divider\"></div>\r\n    <li class=\"lone subheader center-align\">Features</li>\r\n    <li class=\"lone\"><a class=\"waves-effect\" href=\"#\"><i class=\"fas fa-calculator my-icon\"></i>Sales</a></li>\r\n    <li class=\"lone\"><a class=\"waves-effect\" href=\"#\"><i class=\"fas fa-cart-plus my-icon\"></i>Incomes</a></li>\r\n    <li class=\"lone\"><a class=\"waves-effect\" href=\"#\"><i class=\"fas fa-users my-icon\"></i>Suppliers</a></li>\r\n    <li class=\"lone\"><a class=\"waves-effect\" href=\"#\"><i class=\"fas fa-clipboard-list my-icon\"></i>Reports</a></li>\r\n</ul>"

/***/ }),

/***/ "./src/app/core/sidenav/sidenav.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/sidenav/sidenav.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#slide-out {\n  margin-top: 64px; }\n\n#dropdown1, #dropdown2 {\n  margin-top: 64px; }\n\n.dropdown-content li > a {\n  color: #00bcd4 !important; }\n\n.side-nav li.active {\n  background-color: #00bcd4 !important; }\n\n.side-nav li.user-li.active {\n  background-color: #ac3973 !important; }\n\n.side-nav li.active.lone a, .side-nav li.active ul li:first-child, .side-nav li.active.lone a svg, .side-nav li.active ul li div.collapsible-header p svg {\n  color: #FFFFFF !important; }\n\n.my-icon {\n  font-size: 1.5em;\n  margin-right: 14px;\n  color: #666666; }\n\n.changed {\n  margin-left: 5px;\n  color: #666666; }\n\n.no-margin {\n  margin: 0px; }\n\n.user-li {\n  background-color: #c6538c !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaWRlbmF2L0M6XFxNeVByb2plY3RzXFx1bml2ZXJzaXR5XFxnaXRodWJcXENvdXJzZVdvcmtWMlxcdGVhbWxvYWRtYW5hZ2VtZW50LWZlL3NyY1xcYXBwXFxjb3JlXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZSxFQUFBOztBQUdqQjtFQUNFLHlCQUF3QixFQUFBOztBQUcxQjtFQUNFLG9DQUFtQyxFQUFBOztBQUdyQztFQUNFLG9DQUFtQyxFQUFBOztBQUdwQztFQUNDLHlCQUF3QixFQUFBOztBQUcxQjtFQUNFLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGNBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFlO0VBQ2YsY0FBYSxFQUFBOztBQUdmO0VBQ0UsV0FBVSxFQUFBOztBQUdaO0VBQ0Usb0NBQW1DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzbGlkZS1vdXR7XHJcbiAgICBtYXJnaW4tdG9wOjY0cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNkcm9wZG93bjEsICNkcm9wZG93bjJ7XHJcbiAgICBtYXJnaW4tdG9wOjY0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IGxpID4gYXtcclxuICAgIGNvbG9yOiMwMGJjZDQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGUtbmF2IGxpLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwYmNkNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuc2lkZS1uYXYgbGkudXNlci1saS5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhYzM5NzMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgIC5zaWRlLW5hdiBsaS5hY3RpdmUubG9uZSBhLC5zaWRlLW5hdiBsaS5hY3RpdmUgdWwgbGk6Zmlyc3QtY2hpbGQsIC5zaWRlLW5hdiBsaS5hY3RpdmUubG9uZSBhIHN2ZywgLnNpZGUtbmF2IGxpLmFjdGl2ZSB1bCBsaSBkaXYuY29sbGFwc2libGUtaGVhZGVyIHAgc3Zne1xyXG4gICAgY29sb3I6I0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubXktaWNvbntcclxuICAgIGZvbnQtc2l6ZToxLjVlbTtcclxuICAgIG1hcmdpbi1yaWdodDoxNHB4O1xyXG4gICAgY29sb3I6IzY2NjY2NjtcclxuICB9XHJcbiAgXHJcbiAgLmNoYW5nZWR7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICBjb2xvcjojNjY2NjY2O1xyXG4gIH1cclxuICBcclxuICAubm8tbWFyZ2lue1xyXG4gICAgbWFyZ2luOjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItbGl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjNjUzOGMgIWltcG9ydGFudDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/core/sidenav/sidenav.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidenav/sidenav.component.ts ***!
  \***************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(userService) {
        this.userService = userService;
    }
    SidenavComponent.prototype.logout = function () {
        this.userService.logout();
    };
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.ngOnDestroy = function () {
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/core/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/core/sidenav/sidenav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _dashboard_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_root_root_component__WEBPACK_IMPORTED_MODULE_8__["RootComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"]],
            exports: [],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_9__["DashboardService"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");





var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    {
        path: 'dashboard',
        component: _root_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"] },
        ]
    }
]);


/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 col-sm-3\">\r\n    <p>{{homeDetails?.message}}</p>\r\n    <p><strong>Name:</strong> {{homeDetails?.firstName}} {{homeDetails?.lastName}}</p>\r\n    <p *ngIf=\"homeDetails?.location\"><strong>Location:</strong> {{homeDetails?.location}}</p>\r\n    <p *ngIf=\"homeDetails?.locale\"><strong>Locale:</strong> {{homeDetails?.locale}}</p>\r\n    <p *ngIf=\"homeDetails?.gender\"><strong>Gender:</strong> {{homeDetails?.gender}}</p>\r\n    <p *ngIf=\"homeDetails?.facebookId\"><strong>Facebook Id:</strong> {{homeDetails?.facebookId}}</p>\r\n    <div *ngIf=\"homeDetails?.pictureUrl\"><img src=\"{{homeDetails?.pictureUrl}}\" /></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getHomeDetails()
            .subscribe(function (homeDetails) {
            _this.homeDetails = homeDetails;
        }, function (error) {
            //this.notificationService.printErrorMessage(error);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/dashboard/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/root/root.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <nav class=\"col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar\">\r\n    <ul class=\"nav nav-pills flex-column\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"/dashboard/home\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"/dashboard/settings\">Settings</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  <main role=\"main\" class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Sidebar\r\n */\n.sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n  border-right: 1px solid #eee; }\n.sidebar .nav {\n  margin-bottom: 20px; }\n.sidebar .nav-item {\n  width: 100%; }\n.sidebar .nav-item + .nav-item {\n  margin-left: 0; }\n.sidebar .nav-link {\n  border-radius: 0; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Jvb3QvQzpcXE15UHJvamVjdHNcXHVuaXZlcnNpdHlcXGdpdGh1YlxcQ291cnNlV29ya1YyXFx0ZWFtbG9hZG1hbmFnZW1lbnQtZmUvc3JjXFxhcHBcXGRhc2hib2FyZFxccm9vdFxccm9vdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL3Jvb3Qvcm9vdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUNFRTtBREVGO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUFFLDZEQUFBO0VBQ2xCLDRCQUE0QixFQUFBO0FBRzlCO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3Jvb3Qvcm9vdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFNpZGViYXJcclxuICovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTFweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWl0ZW0gKyAubmF2LWl0ZW0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuIiwiLypcclxuICogU2lkZWJhclxyXG4gKi9cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUxcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZzogMjBweCAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7IH1cblxuLnNpZGViYXIgLm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLnNpZGViYXIgLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnNpZGViYXIgLm5hdi1pdGVtICsgLm5hdi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/root/root.component.ts ***!
  \**************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () { };
    RootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/dashboard/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.scss */ "./src/app/dashboard/root/root.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/services/dashboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/services/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");





var DashboardService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DashboardService, _super);
    function DashboardService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.baseUrl = '';
        return _this;
    }
    DashboardService.prototype.getHomeDetails = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get("/api/dashboard/home", { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], DashboardService);
    return DashboardService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  settings works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () { };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/dashboard/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/directives/email.validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/email.validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



function validateEmailFactory() {
    return function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
        this.validator = validateEmailFactory();
    }
    EmailValidator_1 = EmailValidator;
    EmailValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    var EmailValidator_1;
    EmailValidator = EmailValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[validateEmail][ngModel],[validateEmail][formControl]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EmailValidator_1; }), multi: true }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailValidator);
    return EmailValidator;
}());



/***/ }),

/***/ "./src/app/directives/focus.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/focus.directive.ts ***!
  \***********************************************/
/*! exports provided: myFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myFocus", function() { return myFocus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var myFocus = /** @class */ (function () {
    function myFocus(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // focus won't work at construction time - too early
    }
    myFocus.prototype.ngOnInit = function () {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    };
    myFocus = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[tmFocus]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], myFocus);
    return myFocus;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\r\n  <!-- Main jumbotron for a primary marketing message or call to action -->\r\n  <div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-3\">JWT Auth Demo</h1>\r\n      <p>This demo shows local and facebook user registration and login flow using Angular v5.2.1, ASP.NET Core 2.0 WebApi and Facebook api</p>\r\n      <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"/register\">Signup with email</a> <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"/login\">Login with email</a> <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"/facebook-login\">Signup/login with facebook</a></p>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ng-material.module.ts":
/*!***************************************!*\
  !*** ./src/app/ng-material.module.ts ***!
  \***************************************/
/*! exports provided: NgMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMaterialModule", function() { return NgMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");






var NgMaterialModule = /** @class */ (function () {
    function NgMaterialModule() {
    }
    NgMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"]
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"]]
        })
    ], NgMaterialModule);
    return NgMaterialModule;
}());



/***/ }),

/***/ "./src/app/rxjs-operators.js":
/*!***********************************!*\
  !*** ./src/app/rxjs-operators.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics

// Operators








/***/ }),

/***/ "./src/app/shared/models/task.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/task.model.ts ***!
  \*********************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/shared/modules/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modules/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_focus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/focus.directive */ "./src/app/directives/focus.directive.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
// include directives/components commonly used in features modules in this shared modules
// and import me into the feature module
// importing them individually results in: Type xxx is part of the declarations of 2 modules: ... Please consider moving to a higher module...
// https://github.com/angular/angular/issues/10646  





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_directives_focus_directive__WEBPACK_IMPORTED_MODULE_3__["myFocus"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]],
            exports: [_directives_focus_directive__WEBPACK_IMPORTED_MODULE_3__["myFocus"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(injector) {
        this.apiUrl = (document.location.host + "/api/");
        this.httpClient = injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = {
            headers: this.headers
        };
    }
    ApiService.prototype.httpGet = function (url, params) {
        if (params === void 0) { params = {}; }
        return this.httpClient.get(url, {
            headers: this.headers,
            params: params
        });
    };
    ApiService.prototype.get = function (url, params) {
        if (params === void 0) { params = {}; }
        return this.httpClient.get(url, {
            headers: this.headers,
            params: params
        });
    };
    ApiService.prototype.httpPost = function (url, body) {
        return this.httpClient.post(url, body, this.options);
    };
    ApiService.prototype.httpPatch = function (url, body) {
        return this.httpClient.patch(url, body, this.options);
    };
    ApiService.prototype.httpDelete = function (url) {
        return this.httpClient.delete(url, this.options);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");

var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? undefined : modelStateErrors;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");






var UserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserService, _super);
    function UserService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.baseUrl = '';
        // Observable navItem source
        _this._authNavStatusSource = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.loggedIn = false;
        _this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        _this._authNavStatusSource.next(_this.loggedIn);
        return _this;
    }
    UserService.prototype.register = function (firstName, lastName, email, password) {
        var body = JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password });
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        return this.http.post('/api/accounts', body, options)
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.login = function (userName, password) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('/api/auth/login', JSON.stringify({ userName: userName, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.facebookLogin = function (accessToken) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({ accessToken: accessToken });
        return this.http
            .post('/api/externalauth/facebook', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UserService);
    return UserService;
}(_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "./src/app/shared/utils/config.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/utils/config.service.ts ***!
  \************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._apiURI = 'http://localhost:5000/api';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">\r\n  <div class=\"double-bounce1\"></div>\r\n  <div class=\"double-bounce2\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 30px auto; }\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9DOlxcTXlQcm9qZWN0c1xcdW5pdmVyc2l0eVxcZ2l0aHViXFxDb3Vyc2VXb3JrVjJcXHRlYW1sb2FkbWFuYWdlbWVudC1mZS9zcmNcXGFwcFxcc3Bpbm5lclxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asc0RBQXNEO0VBQ3RELDhDQUE4QyxFQUFBOztBQUdoRDtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRTtJQUNFLDJCQUE2QixFQUFBO0VBRy9CO0lBQ0UsMkJBQTZCLEVBQUEsRUFBQTs7QUFJakM7RUFDRTtJQUNFLG1CQUFxQjtJQUNyQiwyQkFBNkIsRUFBQTtFQUcvQjtJQUNFLG1CQUFxQjtJQUNyQiwyQkFBNkIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbn1cclxuXHJcbi5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmRvdWJsZS1ib3VuY2UyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMClcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gIDAlLCAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SpinnerComponent.prototype, "delay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SpinnerComponent.prototype, "isRunning", null);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/spinner/spinner.component.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/tasks/components/tasks-table/tasks-table.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/tasks/components/tasks-table/tasks-table.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort multiTemplateDataRows>\n\n    <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n      <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n    </ng-container>\n    \n\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n        <div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n          <div class=\"example-element-description\">{{element.description}}</div>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n    </tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/tasks/components/tasks-table/tasks-table.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/tasks/components/tasks-table/tasks-table.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntr.example-detail-row {\n  height: 0; }\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5; }\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef; }\n\n.example-element-row td {\n  border-bottom-width: 0; }\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex; }\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px; }\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal; }\n\n.example-element-description {\n  padding: 16px; }\n\n.example-element-description-attribution {\n  opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvY29tcG9uZW50cy90YXNrcy10YWJsZS9DOlxcTXlQcm9qZWN0c1xcdW5pdmVyc2l0eVxcZ2l0aHViXFxDb3Vyc2VXb3JrVjJcXHRlYW1sb2FkbWFuYWdlbWVudC1mZS9zcmNcXGFwcFxcdGFza3NcXGNvbXBvbmVudHNcXHRhc2tzLXRhYmxlXFx0YXNrcy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR2I7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL2NvbXBvbmVudHMvdGFza3MtdGFibGUvdGFza3MtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgdHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgdHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgaGVpZ2h0OiAxMDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/tasks/components/tasks-table/tasks-table.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tasks/components/tasks-table/tasks-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: TasksTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksTableComponent", function() { return TasksTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var TasksTableComponent = /** @class */ (function () {
    function TasksTableComponent() {
        this.columnsToDisplay = ['title', 'estimate', 'progress', 'user'];
    }
    TasksTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tasks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TasksTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TasksTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], TasksTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksTableComponent.prototype, "tasks", void 0);
    TasksTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks-table',
            template: __webpack_require__(/*! ./tasks-table.component.html */ "./src/app/tasks/components/tasks-table/tasks-table.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./tasks-table.component.scss */ "./src/app/tasks/components/tasks-table/tasks-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksTableComponent);
    return TasksTableComponent;
}());



/***/ }),

/***/ "./src/app/tasks/pages/create-task-page/create-task-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/tasks/pages/create-task-page/create-task-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create new task</h2>\n\n<form class=\"create-task-container\" #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(f)\">\n  <mat-form-field>\n    <input id=\"title\" name=\"title\" required ngModel matInput placeholder=\"Title\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea id=\"description\" name=\"description\" ngModel matInput placeholder=\"Description\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput type=\"number\" required placeholder=\"Estimate\" min=\"0\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <input type=\"submit\" name=\"task_create_submit\" [disabled]=\"f.invalid\" value=\"Log in\" />\n\n</form>"

/***/ }),

/***/ "./src/app/tasks/pages/create-task-page/create-task-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/tasks/pages/create-task-page/create-task-page.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-task-container {\n  display: flex;\n  flex-direction: column; }\n\n.create-task-container > * {\n  width: 540px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvcGFnZXMvY3JlYXRlLXRhc2stcGFnZS9DOlxcTXlQcm9qZWN0c1xcdW5pdmVyc2l0eVxcZ2l0aHViXFxDb3Vyc2VXb3JrVjJcXHRlYW1sb2FkbWFuYWdlbWVudC1mZS9zcmNcXGFwcFxcdGFza3NcXHBhZ2VzXFxjcmVhdGUtdGFzay1wYWdlXFxjcmVhdGUtdGFzay1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUcxQjtFQUNLLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3BhZ2VzL2NyZWF0ZS10YXNrLXBhZ2UvY3JlYXRlLXRhc2stcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtdGFzay1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNyZWF0ZS10YXNrLWNvbnRhaW5lciA+ICoge1xyXG4gICAgIHdpZHRoOiA1NDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tasks/pages/create-task-page/create-task-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/tasks/pages/create-task-page/create-task-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateTaskPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskPageComponent", function() { return CreateTaskPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/tasks/services/tasks.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var TaskCreatedString = "Task Created";
var TaskCreatedAction = "OK";
var CreateTaskPageComponent = /** @class */ (function () {
    function CreateTaskPageComponent(tasksService, router, snackBar) {
        this.tasksService = tasksService;
        this.router = router;
        this.snackBar = snackBar;
    }
    CreateTaskPageComponent.prototype.ngOnInit = function () {
    };
    CreateTaskPageComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.tasksService.createTask(value).subscribe(function (task) {
                _this.snackBar.open(TaskCreatedString, TaskCreatedAction, {
                    duration: 2000,
                });
                _this.router.navigate(['/tasks']);
            }, function (error) {
            });
        }
    };
    CreateTaskPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-task-page',
            template: __webpack_require__(/*! ./create-task-page.component.html */ "./src/app/tasks/pages/create-task-page/create-task-page.component.html"),
            styles: [__webpack_require__(/*! ./create-task-page.component.scss */ "./src/app/tasks/pages/create-task-page/create-task-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], CreateTaskPageComponent);
    return CreateTaskPageComponent;
}());



/***/ }),

/***/ "./src/app/tasks/pages/index.ts":
/*!**************************************!*\
  !*** ./src/app/tasks/pages/index.ts ***!
  \**************************************/
/*! exports provided: CreateTaskPageComponent, TasksPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks_page_tasks_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-page/tasks-page.component */ "./src/app/tasks/pages/tasks-page/tasks-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TasksPageComponent", function() { return _tasks_page_tasks_page_component__WEBPACK_IMPORTED_MODULE_0__["TasksPageComponent"]; });

/* harmony import */ var _create_task_page_create_task_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task-page/create-task-page.component */ "./src/app/tasks/pages/create-task-page/create-task-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateTaskPageComponent", function() { return _create_task_page_create_task_page_component__WEBPACK_IMPORTED_MODULE_1__["CreateTaskPageComponent"]; });





/***/ }),

/***/ "./src/app/tasks/pages/tasks-page/tasks-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tasks/pages/tasks-page/tasks-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Tasks</h1>\r\n<app-tasks-table *ngIf=\"tasks && tasks.length>0\" [tasks]=\"tasks\"></app-tasks-table>\r\n<button mat-fab class=\"add-task-button\">\r\n    <mat-icon aria-label=\"Example icon-button with a heart icon\" routerLink=\"/create-task\" matTooltip=\"Create new task\">add</mat-icon>\r\n</button>"

/***/ }),

/***/ "./src/app/tasks/pages/tasks-page/tasks-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/tasks/pages/tasks-page/tasks-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-task-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvcGFnZXMvdGFza3MtcGFnZS9DOlxcTXlQcm9qZWN0c1xcdW5pdmVyc2l0eVxcZ2l0aHViXFxDb3Vyc2VXb3JrVjJcXHRlYW1sb2FkbWFuYWdlbWVudC1mZS9zcmNcXGFwcFxcdGFza3NcXHBhZ2VzXFx0YXNrcy1wYWdlXFx0YXNrcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YXNrcy9wYWdlcy90YXNrcy1wYWdlL3Rhc2tzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLXRhc2stYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tasks/pages/tasks-page/tasks-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tasks/pages/tasks-page/tasks-page.component.ts ***!
  \****************************************************************/
/*! exports provided: TasksPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPageComponent", function() { return TasksPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/tasks/services/tasks.service.ts");



var TasksPageComponent = /** @class */ (function () {
    function TasksPageComponent(tasksService) {
        this.tasksService = tasksService;
        this.tasks = [];
    }
    TasksPageComponent.prototype.ngOnInit = function () {
        this.loadTasks();
    };
    TasksPageComponent.prototype.loadTasks = function () {
        var _this = this;
        this.tasksService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    TasksPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks-page',
            template: __webpack_require__(/*! ./tasks-page.component.html */ "./src/app/tasks/pages/tasks-page/tasks-page.component.html"),
            styles: [__webpack_require__(/*! ./tasks-page.component.scss */ "./src/app/tasks/pages/tasks-page/tasks-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]])
    ], TasksPageComponent);
    return TasksPageComponent;
}());



/***/ }),

/***/ "./src/app/tasks/services/tasks.service.ts":
/*!*************************************************!*\
  !*** ./src/app/tasks/services/tasks.service.ts ***!
  \*************************************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _shared_models_task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/task.model */ "./src/app/shared/models/task.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var TasksService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TasksService, _super);
    function TasksService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.tasksArray = new Array();
        return _this;
    }
    TasksService.prototype.getTasks = function () {
        var tasks = new rxjs__WEBPACK_IMPORTED_MODULE_4__["AsyncSubject"]();
        // this.httpGet(`${this.apiUrl}/tasks`).subscribe(result => {
        //   this.tasksArray = result;
        //   tasks.next(this.tasksArray);
        //   tasks.complete();
        // });
        //temp
        var array = [
            { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa" },
            { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa" },
            { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa" },
            { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa" },
            { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa" },
            { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa" },
            { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa" },
            { id: "2331", title: "task1", description: "12313231323", progress: "done", estimate: 12, user: "Aaaaaa" }
        ];
        tasks.next(array);
        tasks.complete();
        //temp
        return tasks;
    };
    TasksService.prototype.getTask = function (id) {
        var task = new rxjs__WEBPACK_IMPORTED_MODULE_4__["AsyncSubject"]();
        this.httpGet(this.apiUrl + "/tasks/" + id).subscribe(function (result) {
            task.next(result);
            task.complete();
        });
        return task;
    };
    TasksService.prototype.createTask = function (task) {
        var newTask = new rxjs__WEBPACK_IMPORTED_MODULE_4__["AsyncSubject"]();
        // this.httpPost(`${this.apiUrl}/tasks/`, task).subscribe(result => {
        //   this.tasksArray.push(result);
        //   newTask.next(result);
        //   newTask.complete();
        // });
        //temp
        var t = new _shared_models_task_model__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        t.id = 123;
        t.title = task.title;
        t.progress = "todo";
        t.estimate = task.estimate;
        t.description = task.description;
        this.tasksArray.push(t);
        newTask.next(t);
        newTask.complete();
        //temp
        return newTask;
    };
    TasksService.prototype.deleteTask = function (id) {
        var deletedTask = new rxjs__WEBPACK_IMPORTED_MODULE_4__["AsyncSubject"]();
        this.httpDelete(this.apiUrl + "/tasks/" + id).subscribe(function (result) {
            deletedTask.next(result);
            deletedTask.complete();
        });
        return deletedTask;
    };
    TasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TasksService);
    return TasksService;
}(_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));



/***/ }),

/***/ "./src/app/tasks/tasks-routing.ts":
/*!****************************************!*\
  !*** ./src/app/tasks/tasks-routing.ts ***!
  \****************************************/
/*! exports provided: TasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksRoutingModule", function() { return TasksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ "./src/app/tasks/pages/index.ts");




var appRoutes = [
    { path: 'tasks', component: _pages__WEBPACK_IMPORTED_MODULE_3__["TasksPageComponent"] },
    { path: 'create-task', component: _pages__WEBPACK_IMPORTED_MODULE_3__["CreateTaskPageComponent"] }
];
var TasksRoutingModule = /** @class */ (function () {
    function TasksRoutingModule() {
    }
    TasksRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], TasksRoutingModule);
    return TasksRoutingModule;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.module.ts":
/*!***************************************!*\
  !*** ./src/app/tasks/tasks.module.ts ***!
  \***************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ng-material.module */ "./src/app/ng-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tasks-table/tasks-table.component */ "./src/app/tasks/components/tasks-table/tasks-table.component.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages */ "./src/app/tasks/pages/index.ts");
/* harmony import */ var _tasks_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks-routing */ "./src/app/tasks/tasks-routing.ts");
/* harmony import */ var _pages_create_task_page_create_task_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/create-task-page/create-task-page.component */ "./src/app/tasks/pages/create-task-page/create-task-page.component.ts");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/tasks.service */ "./src/app/tasks/services/tasks.service.ts");










var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages__WEBPACK_IMPORTED_MODULE_6__["TasksPageComponent"],
                _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_5__["TasksTableComponent"],
                _pages_create_task_page_create_task_page_component__WEBPACK_IMPORTED_MODULE_8__["CreateTaskPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_material_module__WEBPACK_IMPORTED_MODULE_3__["NgMaterialModule"],
                _tasks_routing__WEBPACK_IMPORTED_MODULE_7__["TasksRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            exports: [
                _pages__WEBPACK_IMPORTED_MODULE_6__["TasksPageComponent"],
                _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_5__["TasksTableComponent"],
                _tasks_routing__WEBPACK_IMPORTED_MODULE_7__["TasksRoutingModule"]
            ],
            providers: [
                _services_tasks_service__WEBPACK_IMPORTED_MODULE_9__["TasksService"]
            ],
            bootstrap: []
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MyProjects\university\github\CourseWorkV2\teamloadmanagement-fe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map