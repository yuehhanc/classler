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

/***/ "./src/app/ads-view/ads-view.component.html":
/*!**************************************************!*\
  !*** ./src/app/ads-view/ads-view.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"inner cover\">\n  <h1 class=\"cover-heading\">Code with Classler.</h1>\n  <p class=\"lead\">Classler is the best coding-skill learning website for users with no related experience. Featuring fasinating course, carefully designed problem set and real human interview practicing within a single interface.</p>\n  <p class=\"lead\">\n    <a routerLink=\"/courses\" class=\"btn btn-lg btn-secondary\">Learn more</a>\n  </p>\n\n\n\n</main>"

/***/ }),

/***/ "./src/app/ads-view/ads-view.component.scss":
/*!**************************************************!*\
  !*** ./src/app/ads-view/ads-view.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fkcy12aWV3L2Fkcy12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ads-view/ads-view.component.ts":
/*!************************************************!*\
  !*** ./src/app/ads-view/ads-view.component.ts ***!
  \************************************************/
/*! exports provided: AdsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsViewComponent", function() { return AdsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdsViewComponent = /** @class */ (function () {
    function AdsViewComponent() {
    }
    AdsViewComponent.prototype.ngOnInit = function () {
    };
    AdsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ads-view',
            template: __webpack_require__(/*! ./ads-view.component.html */ "./src/app/ads-view/ads-view.component.html"),
            styles: [__webpack_require__(/*! ./ads-view.component.scss */ "./src/app/ads-view/ads-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdsViewComponent);
    return AdsViewComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        //baseUrl = "http://127.0.0.1:8000";
        this.baseUrl = "http://18.222.175.39:8000";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" });
    }
    ApiService.prototype.getAllCourses = function () {
        return this.http.get(this.baseUrl + "/courses/", { headers: this.httpHeaders });
    };
    ApiService.prototype.getOneCourse = function (id) {
        return this.http.get(this.baseUrl + "/courses/" + id + "/", { headers: this.httpHeaders });
    };
    ApiService.prototype.getAllProblems = function () {
        return this.http.get(this.baseUrl + "/problems/", { headers: this.httpHeaders });
    };
    ApiService.prototype.getOneProblem = function (id) {
        return this.http.get(this.baseUrl + "/problems/" + id + "/", { headers: this.httpHeaders });
    };
    ApiService.prototype.submitCode = function (problem_name, code_str) {
        var body = { name: problem_name, code: code_str };
        return this.http.post(this.baseUrl + "/submit_code/", body, { headers: this.httpHeaders });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_view_course_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-view/course-view.component */ "./src/app/course-view/course-view.component.ts");
/* harmony import */ var _problem_view_problem_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./problem-view/problem-view.component */ "./src/app/problem-view/problem-view.component.ts");
/* harmony import */ var _problem_detail_view_problem_detail_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./problem-detail-view/problem-detail-view.component */ "./src/app/problem-detail-view/problem-detail-view.component.ts");
/* harmony import */ var _interview_view_interview_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interview-view/interview-view.component */ "./src/app/interview-view/interview-view.component.ts");
/* harmony import */ var _ads_view_ads_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ads-view/ads-view.component */ "./src/app/ads-view/ads-view.component.ts");
/* harmony import */ var _course_detail_view_course_detail_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-detail-view/course-detail-view.component */ "./src/app/course-detail-view/course-detail-view.component.ts");









var routes = [
    { path: 'courses', component: _course_view_course_view_component__WEBPACK_IMPORTED_MODULE_3__["CourseViewComponent"] },
    { path: 'problems', component: _problem_view_problem_view_component__WEBPACK_IMPORTED_MODULE_4__["ProblemViewComponent"] },
    { path: '', component: _ads_view_ads_view_component__WEBPACK_IMPORTED_MODULE_7__["AdsViewComponent"] },
    { path: 'interview', component: _interview_view_interview_view_component__WEBPACK_IMPORTED_MODULE_6__["InterviewViewComponent"] },
    { path: 'problems/:name', component: _problem_detail_view_problem_detail_view_component__WEBPACK_IMPORTED_MODULE_5__["ProblemDetailViewComponent"] },
    { path: 'courses/:id', component: _course_detail_view_course_detail_view_component__WEBPACK_IMPORTED_MODULE_8__["CourseDetailViewComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center\">\n\n  <div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column\">\n    <header class=\"masthead mb-auto\">\n      <div class=\"inner\">\n        <h3 class=\"masthead-brand\" routerLink=\"/\">{{ title }}</h3>\n        <nav class=\"nav nav-masthead justify-content-center\">\n          <a class=\"nav-link\" routerLink=\"/\">Home</a>\n          <a class=\"nav-link\" routerLink=\"/courses\">Courses</a>\n          <a class=\"nav-link\" routerLink=\"/problems\">Problems</a>\n          <a class=\"nav-link\" routerLink=\"/interview\">Interview</a>\n          <a class=\"nav-link\"> Login </a>\n        </nav>\n      </div>\n    </header>\n\n\n\n    <router-outlet></router-outlet>\n\n    <footer class=\"mastfoot mt-auto\">\n      <div class=\"inner\">\n        <p>\n          <a routerLink=\"/\">Blog</a> |\n          <a routerLink=\"/\">About Us</a> |\n          <a routerLink=\"/\">FAQ</a> |\n          <a routerLink=\"/\">Contact Us</a> |\n          <a routerLink=\"/\">Terms</a> |\n          <a routerLink=\"/\">Privacy Policy</a>\n        </p>\n      </div>\n    </footer>\n  </div>\n\n</body>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\n/*\n * Globals\n */\n/* Links */\na,\na:focus,\na:hover {\n  color: #fff; }\n/* Custom default button */\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none;\n  /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff; }\n/*\n * Base structure\n */\nhtml,\nbody {\n  height: 100vh;\n  background-color: #333; }\nbody {\n  display: flex;\n  color: #fff;\n  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);\n  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5); }\n.cover-container {\n  max-width: 45em; }\n/*\n * Header\n */\n.masthead {\n  margin-bottom: 2rem; }\n.masthead-brand {\n  margin-bottom: 0; }\n.nav-masthead .nav-link {\n  padding: .25rem 0;\n  font-weight: 700;\n  color: white;\n  background-color: transparent;\n  border-bottom: .25rem solid transparent; }\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n.nav-masthead .nav-link + .nav-link {\n  margin-left: 1rem; }\n.nav-masthead .active {\n  color: #fff;\n  /* border-bottom-color: #fff; */\n  /* border-bottom-color: rgba(255, 255, 255, 0.25); */\n  background-color: rgba(255, 255, 255, 0.25); }\n@media (min-width: 48em) {\n  .masthead-brand {\n    float: left; }\n  .nav-masthead {\n    float: right; } }\n/*\n * Cover\n */\n.cover {\n  padding: 0 1.5rem; }\n.cover .btn-lg {\n  padding: .75rem 1.25rem;\n  font-weight: 700; }\n/*\n * Footer\n */\n.mastfoot {\n  color: rgba(255, 255, 255, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2xhbmQvRGVza3RvcC9Qcm9ncmFtX0RldmVsb3BtZW50L2NsYXNzbGVyL2Zyb250ZW5kL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQUE7QUFFQTs7RUNDRTtBREdGLFVBQUE7QUFDQTs7O0VBR0UsV0FBVyxFQUFBO0FBR2IsMEJBQUE7QUFDQTs7O0VBR0UsV0FBVztFQUNYLGlCQUFpQjtFQUFFLG9DQUFBO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUIsRUFBQTtBQUkzQjs7RUNGRTtBRE1GOztFQUVFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtBQUd4QjtFQUVFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0RBQTZDO0VBQzdDLDZDQUE0QyxFQUFBO0FBRzlDO0VBQ0UsZUFBZSxFQUFBO0FBSWpCOztFQ1BFO0FEVUY7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsdUNBQXVDLEVBQUE7QUFHekM7O0VBRUUsOENBQThDLEVBQUE7QUFHaEQ7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLFdBQVc7RUFDWCwrQkFBQTtFQUNBLG9EQUFBO0VBQ0EsMkNBQTJDLEVBQUE7QUFHN0M7RUFDRTtJQUNFLFdBQVcsRUFBQTtFQUViO0lBQ0UsWUFBWSxFQUFBLEVBQ2I7QUFJSDs7RUNqQkU7QURvQkY7RUFDRSxpQkFBaUIsRUFBQTtBQUVuQjtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0IsRUFBQTtBQUlsQjs7RUNuQkU7QURzQkY7RUFDRSwrQkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuXG4vKlxuICogR2xvYmFsc1xuICovXG5cbi8qIExpbmtzICovXG5hLFxuYTpmb2N1cyxcbmE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogQ3VzdG9tIGRlZmF1bHQgYnV0dG9uICovXG4uYnRuLXNlY29uZGFyeSxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyLFxuLmJ0bi1zZWNvbmRhcnk6Zm9jdXMge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1zaGFkb3c6IG5vbmU7IC8qIFByZXZlbnQgaW5oZXJpdGFuY2UgZnJvbSBgYm9keWAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAuMDVyZW0gc29saWQgI2ZmZjtcbn1cblxuXG4vKlxuICogQmFzZSBzdHJ1Y3R1cmVcbiAqL1xuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIC4wNXJlbSAuMXJlbSByZ2JhKDAsIDAsIDAsIC41KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVyZW0gcmdiYSgwLCAwLCAwLCAuNSk7XG59XG5cbi5jb3Zlci1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDQ1ZW07XG59XG5cblxuLypcbiAqIEhlYWRlclxuICovXG4ubWFzdGhlYWQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ubWFzdGhlYWQtYnJhbmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayB7XG4gIHBhZGRpbmc6IC4yNXJlbSAwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IC4yNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbms6aG92ZXIsXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluazpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbi5uYXYtbWFzdGhlYWQgLm5hdi1saW5rICsgLm5hdi1saW5rIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5uYXYtbWFzdGhlYWQgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmOyAqL1xuICAvKiBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAubWFzdGhlYWQtYnJhbmQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC5uYXYtbWFzdGhlYWQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuXG5cbi8qXG4gKiBDb3ZlclxuICovXG4uY292ZXIge1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbn1cbi5jb3ZlciAuYnRuLWxnIHtcbiAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cblxuLypcbiAqIEZvb3RlclxuICovXG4ubWFzdGZvb3Qge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG59XG4iLCIvKiBBcHBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi8qXG4gKiBHbG9iYWxzXG4gKi9cbi8qIExpbmtzICovXG5hLFxuYTpmb2N1cyxcbmE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjsgfVxuXG4vKiBDdXN0b20gZGVmYXVsdCBidXR0b24gKi9cbi5idG4tc2Vjb25kYXJ5LFxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIsXG4uYnRuLXNlY29uZGFyeTpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgLyogUHJldmVudCBpbmhlcml0YW5jZSBmcm9tIGBib2R5YCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IC4wNXJlbSBzb2xpZCAjZmZmOyB9XG5cbi8qXG4gKiBCYXNlIHN0cnVjdHVyZVxuICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IH1cblxuYm9keSB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMC4wNXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLmNvdmVyLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNDVlbTsgfVxuXG4vKlxuICogSGVhZGVyXG4gKi9cbi5tYXN0aGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07IH1cblxuLm1hc3RoZWFkLWJyYW5kIHtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayB7XG4gIHBhZGRpbmc6IC4yNXJlbSAwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7IH1cblxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbms6aG92ZXIsXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluazpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7IH1cblxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbmsgKyAubmF2LWxpbmsge1xuICBtYXJnaW4tbGVmdDogMXJlbTsgfVxuXG4ubmF2LW1hc3RoZWFkIC5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgLyogYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjsgKi9cbiAgLyogYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAubWFzdGhlYWQtYnJhbmQge1xuICAgIGZsb2F0OiBsZWZ0OyB9XG4gIC5uYXYtbWFzdGhlYWQge1xuICAgIGZsb2F0OiByaWdodDsgfSB9XG5cbi8qXG4gKiBDb3ZlclxuICovXG4uY292ZXIge1xuICBwYWRkaW5nOiAwIDEuNXJlbTsgfVxuXG4uY292ZXIgLmJ0bi1sZyB7XG4gIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbi8qXG4gKiBGb290ZXJcbiAqL1xuLm1hc3Rmb290IHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxuIl19 */"

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
        this.title = 'Classler';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm5/ctrl-ngx-codemirror.js");
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/mode/python/python */ "./node_modules/codemirror/mode/python/python.js");
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _course_view_course_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-view/course-view.component */ "./src/app/course-view/course-view.component.ts");
/* harmony import */ var _problem_view_problem_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./problem-view/problem-view.component */ "./src/app/problem-view/problem-view.component.ts");
/* harmony import */ var _interview_view_interview_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interview-view/interview-view.component */ "./src/app/interview-view/interview-view.component.ts");
/* harmony import */ var _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-popup/login-popup.component */ "./src/app/login-popup/login-popup.component.ts");
/* harmony import */ var _signup_popup_signup_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup-popup/signup-popup.component */ "./src/app/signup-popup/signup-popup.component.ts");
/* harmony import */ var _ads_view_ads_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ads-view/ads-view.component */ "./src/app/ads-view/ads-view.component.ts");
/* harmony import */ var _problem_detail_view_problem_detail_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./problem-detail-view/problem-detail-view.component */ "./src/app/problem-detail-view/problem-detail-view.component.ts");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./course.service */ "./src/app/course.service.ts");
/* harmony import */ var _problem_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./problem.service */ "./src/app/problem.service.ts");
/* harmony import */ var _code_submission_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./code-submission.service */ "./src/app/code-submission.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _course_detail_view_course_detail_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./course-detail-view/course-detail-view.component */ "./src/app/course-detail-view/course-detail-view.component.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _ads_view_ads_view_component__WEBPACK_IMPORTED_MODULE_12__["AdsViewComponent"],
                _course_view_course_view_component__WEBPACK_IMPORTED_MODULE_7__["CourseViewComponent"],
                _interview_view_interview_view_component__WEBPACK_IMPORTED_MODULE_9__["InterviewViewComponent"],
                _problem_view_problem_view_component__WEBPACK_IMPORTED_MODULE_8__["ProblemViewComponent"],
                _signup_popup_signup_popup_component__WEBPACK_IMPORTED_MODULE_11__["SignupPopupComponent"],
                _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_10__["LoginPopupComponent"],
                _problem_detail_view_problem_detail_view_component__WEBPACK_IMPORTED_MODULE_13__["ProblemDetailViewComponent"],
                _course_detail_view_course_detail_view_component__WEBPACK_IMPORTED_MODULE_19__["CourseDetailViewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_5__["CodemirrorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_20__["CollapseModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_21__["TabsModule"].forRoot(),
            ],
            providers: [
                _course_service__WEBPACK_IMPORTED_MODULE_14__["CourseService"],
                _problem_service__WEBPACK_IMPORTED_MODULE_15__["ProblemService"],
                _code_submission_service__WEBPACK_IMPORTED_MODULE_16__["CodeSubmissionService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code-submission.service.ts":
/*!********************************************!*\
  !*** ./src/app/code-submission.service.ts ***!
  \********************************************/
/*! exports provided: CodeSubmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSubmissionService", function() { return CodeSubmissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CodeSubmissionService = /** @class */ (function () {
    function CodeSubmissionService(http) {
        this.http = http;
        //baseUrl = "http://127.0.0.1:8000/classler/";
        this.baseUrl = "http://18.222.175.39:8000/classler/";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" });
    }
    CodeSubmissionService.prototype.submit = function (problem_name, code_str) {
        var body = { name: problem_name, code: code_str };
        return this.http.post(this.baseUrl + "problems/" + problem_name + "/code-submit", body, { headers: this.httpHeaders });
    };
    CodeSubmissionService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    CodeSubmissionService.prototype.log = function (message) {
        console.log("Code Submission Service: " + message);
    };
    CodeSubmissionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CodeSubmissionService);
    return CodeSubmissionService;
}());



/***/ }),

/***/ "./src/app/course-detail-view/course-detail-view.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/course-detail-view/course-detail-view.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-container d-flex w-100 h-100 p-1 mx-auto flex-column\">\n  <h1>{{ topic }}</h1>\n  <div>\n    <tabset>\n      <tab heading=\"Course\" id=\"tab1\">\n        <iframe width=\"640\" height=\"360\" [src]=\"video_src\" frameborder=\"0\"\n          allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      </tab>\n      <tab heading=\"Content\">\n        <div [innerHTML]=\"content\" align=center style=\"width: 600px\"></div>\n      </tab>\n      <tab heading=\"Exercise\">Basic content 2</tab>\n    </tabset>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-detail-view/course-detail-view.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/course-detail-view/course-detail-view.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  font-size: 1em;\n  color: white; }\n\na:focus,\na:hover {\n  color: rgba(255, 255, 255, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2xhbmQvRGVza3RvcC9Qcm9ncmFtX0RldmVsb3BtZW50L2NsYXNzbGVyL2Zyb250ZW5kL3NyYy9hcHAvY291cnNlLWRldGFpbC12aWV3L2NvdXJzZS1kZXRhaWwtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxZQUE0QixFQUFBOztBQUdoQzs7RUFFSSwrQkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1kZXRhaWwtdmlldy9jb3Vyc2UtZGV0YWlsLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbmE6Zm9jdXMsXG5hOmhvdmVyIHtcbiAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/course-detail-view/course-detail-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/course-detail-view/course-detail-view.component.ts ***!
  \********************************************************************/
/*! exports provided: CourseDetailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailViewComponent", function() { return CourseDetailViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var CourseDetailViewComponent = /** @class */ (function () {
    function CourseDetailViewComponent(api, route, sanitizer) {
        var _this = this;
        this.api = api;
        this.route = route;
        this.sanitizer = sanitizer;
        this.id = "-1";
        this.topic = "Data Structure Intro";
        this.link = "https://www.youtube.com/embed/FXoP4ZpJaZY";
        this.getVideoUrl = function () {
            _this.resource_url = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.link);
        };
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
    }
    CourseDetailViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getOneCourse(this.id).subscribe(function (data) {
            _this.topic = data.topic;
            _this.content = _this.sanitizer.bypassSecurityTrustHtml(data.content);
            _this.video_src = _this.sanitizer.bypassSecurityTrustResourceUrl(data.link);
        }, function (error) {
            console.log(error);
        });
        this.getVideoUrl();
    };
    CourseDetailViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-detail-view',
            template: __webpack_require__(/*! ./course-detail-view.component.html */ "./src/app/course-detail-view/course-detail-view.component.html"),
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
            styles: [__webpack_require__(/*! ./course-detail-view.component.scss */ "./src/app/course-detail-view/course-detail-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], CourseDetailViewComponent);
    return CourseDetailViewComponent;
}());



/***/ }),

/***/ "./src/app/course-view/course-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-view/course-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card-deck mb-3 text-center\">\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"card-header\">\n        <h4 class=\"my-0 font-weight-normal\">Course Topics</h4>\n      </div>\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled mt-3 mb-4\">\n          <li *ngFor='let course of course_names'>\n            <div routerLink=\"/courses/{{ course.id }}\">\n              {{ course.topic }}\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- <div class=\"card mb-4 shadow-sm\">\n      <div class=\"card-header\">\n        <h4 class=\"my-0 font-weight-normal\">Problem Solving</h4>\n      </div>\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled mt-3 mb-4\">\n          <li *ngFor='let course of course_names'>\n            <div routerLink=\"/courses/{{course}}\">\n              {{course}}\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div> -->\n  </div>"

/***/ }),

/***/ "./src/app/course-view/course-view.component.scss":
/*!********************************************************!*\
  !*** ./src/app/course-view/course-view.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-deck .card {\n  min-width: 220px;\n  width: 50%; }\n\n.my-0 {\n  color: black; }\n\nli {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  color: black;\n  margin: .5em;\n  padding: .3em 0;\n  height: 2em;\n  font-size: 1.5em;\n  border-radius: 4px; }\n\nli:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em; }\n\n.card-body {\n  height: 50vh;\n  overflow-y: scroll;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2xhbmQvRGVza3RvcC9Qcm9ncmFtX0RldmVsb3BtZW50L2NsYXNzbGVyL2Zyb250ZW5kL3NyYy9hcHAvY291cnNlLXZpZXcvY291cnNlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBQTs7QUFJWjtFQUNFLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsV0FBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY291cnNlLXZpZXcvY291cnNlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmNhcmQtZGVjayAuY2FyZCB7XG4gICAgbWluLXdpZHRoOiAyMjBweDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuICAubXktMCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IC41ZW07XG4gICAgcGFkZGluZzogLjNlbSAwO1xuICAgIGhlaWdodDogMmVtO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gICBcbiAgbGk6aG92ZXIge1xuICAgIGNvbG9yOiAjNjA3RDhCO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gICAgbGVmdDogLjFlbTtcbiAgfVxuICBcbiAgXG4gIC5jYXJkLWJvZHkge1xuICAgIGhlaWdodDo1MHZoO1xuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xuICAgIHdpZHRoOjEwMCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/course-view/course-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-view/course-view.component.ts ***!
  \******************************************************/
/*! exports provided: CourseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewComponent", function() { return CourseViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CourseViewComponent = /** @class */ (function () {
    function CourseViewComponent(api, router) {
        var _this = this;
        this.api = api;
        this.router = router;
        // id should be some sort of hash value created by the backend instead of just number
        this.course_names = ["Data Structure Intro", "topic2", "topic3"];
        this.getCourses = function () {
            _this.api.getAllCourses().subscribe(function (data) {
                _this.course_names = data;
            }, function (error) {
                console.log(error);
            });
        };
    }
    // async operation in init instead of constructor so nothing is blocked
    CourseViewComponent.prototype.ngOnInit = function () {
        this.getCourses();
    };
    CourseViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-view',
            template: __webpack_require__(/*! ./course-view.component.html */ "./src/app/course-view/course-view.component.html"),
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
            styles: [__webpack_require__(/*! ./course-view.component.scss */ "./src/app/course-view/course-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CourseViewComponent);
    return CourseViewComponent;
}());



/***/ }),

/***/ "./src/app/course.service.ts":
/*!***********************************!*\
  !*** ./src/app/course.service.ts ***!
  \***********************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseService = /** @class */ (function () {
    function CourseService() {
    }
    CourseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/interview-view/interview-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/interview-view/interview-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  interview-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/interview-view/interview-view.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/interview-view/interview-view.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVydmlldy12aWV3L2ludGVydmlldy12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/interview-view/interview-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/interview-view/interview-view.component.ts ***!
  \************************************************************/
/*! exports provided: InterviewViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewViewComponent", function() { return InterviewViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InterviewViewComponent = /** @class */ (function () {
    function InterviewViewComponent() {
    }
    InterviewViewComponent.prototype.ngOnInit = function () {
    };
    InterviewViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interview-view',
            template: __webpack_require__(/*! ./interview-view.component.html */ "./src/app/interview-view/interview-view.component.html"),
            styles: [__webpack_require__(/*! ./interview-view.component.scss */ "./src/app/interview-view/interview-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InterviewViewComponent);
    return InterviewViewComponent;
}());



/***/ }),

/***/ "./src/app/login-popup/login-popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login-popup works!\n</p>\n"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.scss":
/*!********************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBvcHVwL2xvZ2luLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.ts ***!
  \******************************************************/
/*! exports provided: LoginPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPopupComponent", function() { return LoginPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginPopupComponent = /** @class */ (function () {
    function LoginPopupComponent() {
    }
    LoginPopupComponent.prototype.ngOnInit = function () {
    };
    LoginPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-popup',
            template: __webpack_require__(/*! ./login-popup.component.html */ "./src/app/login-popup/login-popup.component.html"),
            styles: [__webpack_require__(/*! ./login-popup.component.scss */ "./src/app/login-popup/login-popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginPopupComponent);
    return LoginPopupComponent;
}());



/***/ }),

/***/ "./src/app/mock-problem.ts":
/*!*********************************!*\
  !*** ./src/app/mock-problem.ts ***!
  \*********************************/
/*! exports provided: MOCKPROBLEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCKPROBLEMS", function() { return MOCKPROBLEMS; });
var MOCKPROBLEMS = [
    {
        info: { id: 1, name: 'Two Sum' },
        description: "<p>Given an array of integers, return <b>indices</b> of the two numbers such that they add up to a specific target.</p>\n\n<p>You may assume that each input would have <b><i>exactly</i></b> one solution, and you may not use the same element twice.</p>\n\n<p><b>Example:</b></p>\n\nblablabla\n"
    },
    {
        info: { id: 2, name: 'Add Two Numbers' },
        description: "<pre><code class=\"python language-python\">class ListNode(object):\n   def __init__(self, data):\n       self.data = data\n       self.next = None\n\nnode_1 = ListNode(2)\nnode_2 = ListNode(5)\nnode_1.next = node_2\n</code></pre>\n\n<h2 id=\"hi\">HI</h2>"
    },
    {
        info: { id: 3, name: 'Longest Substring Without Repeating Characters' },
        description: "<h4 id=\"whycanpythonliststoredifferentelementtypes\">Why can Python list store different element types?</h4>\n\n<ul>\n<li>Because Python lists are composed of discontiguous blocks of memory.</li>\n\n<li>Because Python lists actually store the address of these elements(pointers).</li>\n\n<li>There is a tradeoff such that its retrieval/update time is no longer O(1).</li>\n\n<li>All elements in Python takes up same blocks of memory, regardless of its type.</li>\n</ul>\n\n<p>In this section, we are going to walk through some excercises that will help you get familiar with the Python list APIs.</p>\n\n<p>Let's implement a book keeping app with <code>add_new_record</code>, <code>update</code>, and <code>get_window_total methods</code>.<br>\nThe app will be initialized with <code>window_size</code>, which indicates the number of most recent days we will be keeping track of. <br>\nFor the <code>add_new_record</code> method, you'll be given an amount spent to add to your book keeping app.<br>\nFor the <code>update</code> method, you'll be given the day and new amount to update. In this excercise, we only update previous days within the window size. If the day to be updated, falls out this range, then simply return False.<br>\nFor the <code>get_window_total</code> method, you need to return the total amount spend in the current window.<br></p>\n\n<p><strong>Example 1</strong>:<br>\nmyApp = App(7)<br>\nInput: <code>add_new_record</code>(10), Output: Null<br>\nInput: <code>add_new_record</code>(20), Output: Null<br>\nInput: <code>add_new_record</code>(30), Output: Null<br>\nInput: <code>get_window_total</code>(), Output: 60<br>\nInput: <code>updat</code>e(0, 0), Output: True<br>\nInput: <code>update</code>(7, 0), Output: False<br>\nInput: <code>get_window_total</code>(), Output: 50<br></p>\n\n<p><strong>Note</strong>:<br>\nYou may assume that the window size will be valid, positive integers.<br>\nPlease remember to reset your class variables declared in class <code>App</code>, as static/class variables are persisted across multiple test cases. <br></p>\n\n<pre><code class=\"python language-python\">class App:\n    def __init__(self, window_size):\n        \"\"\"\n        Initialize your data structure here.\n        :type window_size: int\n        \"\"\"\n\n    def add_new_record(self, amount):\n        \"\"\"\n        Record the amount spent \n        :type amount: int\n        :rtype: void\n        \"\"\"\n\n    def update(self, day_k, amount):\n        \"\"\"\n        Update the amount spent of day_k\n        :type day_k: int\n        :type amount: int\n        :rtype: boolean\n        \"\"\"\n\n    def get_window_total(self):\n        \"\"\"\n        Return the total amount spent of the current window\n        :rtype: int\n        \"\"\"\n</code></pre>\n\n<h3 id=\"solution\">Solution</h3>\n\n<pre><code class=\"python language-python\">class App:\n    def __init__(self, window_size):\n        self.daily_cost = [] # list to store costs\n        self.day = 0 # variable to keep track of current day\n        self.window_size = window_size # specified window size\n        self.accum = 0 # variable to keep track of total cost within window\n\n    def add_new_record(self, amount):\n        self.daily_cost.append(amount)\n        self.accum += amount\n        # pop first day if cost number exceeds window size\n        if len(self.daily_cost) &gt; self.window_size:\n            self.accum -= self.daily_cost.pop(0)\n        self.day += 1\n\n    def update(self, day_k, amount):\n        # return False if day to be updated is outside the window\n        if day_k &gt; self.day or self.day - day_k &gt;= window_size:\n            return False\n        # update corresponding index with the given amount\n        diff = self.day - day_k\n        self.daily_cost[-1-diff] = amount\n        return True\n\n    def get_window_total(self):\n        return self.accum\n</code></pre>\n\n<h3 id=\"questionstothinkabout\">Questions to think about.</h3>\n\n<p>What is the time complexity of each function?</p>\n\n<ol>\n<li><strong><code>add_new_record</code></strong>: O(k). Once <code>daily_cost</code> reach the window size, we will have to pop the first element whenever adding a new record. The pop(0) operation is O(k), where k is the window size.</li>\n\n<li><strong><code>update</code></strong>: O(1). Retrieving and updating list elements are both O(1).</li>\n\n<li><strong><code>get_window_total</code></strong>: O(1). </li>\n</ol>\n\n<h4 id=\"whatisthebottleneckofthisprogram\">What is the bottleneck of this program?</h4>\n\n<p>From the time complexity we can see that the most expensive function is <code>add_new_record</code>. And it is bounded by the pop operation when exceeding the <code>window_size</code>.</p>\n\n<h4 id=\"howcouldweimprovethetimecomplexityoftheadd_new_recordfunction\">How could we improve the time complexity of the <code>add_new_record</code> function?</h4>\n\n<p>Instead of popping the first element, we could use a pointer to keep track of the starting index of the current window. We could simply increment the start pointer to indicate the current window.</p>\n\n<pre><code class=\"python language-python\">class App:\n    def __init__(self, window_size):\n        self.daily_cost = []\n        self.day = 0\n        self.window_size = window_size\n        self.accum = 0\n        self.start = 0 # stores the starting index of the current window\n\n    def add_new_record(self, amount):\n        self.daily_cost.append(amount)\n        self.accum += amount\n        if len(self.daily_cost) &gt; self.window_size:\n            self.accum -= self.daily_cost[self.start]\n            start += 1 # increment start index to indicate window shifts\n        self.day += 1\n\n    def update(self, day_k, amount):\n        if day_k &gt; self.day or self.day - day_k &gt;= window_size:\n            return False\n        diff = self.day - day_k\n        self.daily_cost[-1-diff] = amount\n        return True\n\n    def get_window_total(self):\n        return self.accum\n</code></pre>\n\n<h4 id=\"whatwouldbethetimecomplexityfortheadd_new_recordfunction\">What would be the time complexity for the <code>add_new_record</code> function?</h4>\n\n<p>The time complexity would be O(1) as we get rid of the pop operation. However, we are trading space complexity with time complexity. As we no longer pop elements from the list, the space complexity of this program would be O(n), where n is the number of transactions that took place.</p>\n\n<h4 id=\"whichmethodisbetter\">Which method is better?</h4>\n\n<p>There is no definite answer of which implementation is strictly better than the other. However, based on the usage and resource constraints of your program, you might prefer one over the other. For example, if you only have limited memory, then you would probably compromise higher time complexity. On the other hand, say that the new records are added very frequently, then you may compromise higher space complexity to achieve constant time complexity.</p>"
    },
    {
        info: { id: 4, name: 'Median of Two Sorted Arrays' },
        description: "LALALAL"
    },
    {
        info: { id: 5, name: 'Longest Palindromic Substring' },
        description: "LALALAL"
    },
    {
        info: { id: 6, name: 'ZigZag Conversion' },
        description: "LALALAL"
    },
    {
        info: { id: 7, name: 'Reverse Integer' },
        description: "LALALAL"
    },
    {
        info: { id: 8, name: 'String to Integer (atoi)' },
        description: "LALALAL"
    },
    {
        info: { id: 9, name: 'Palindrome Number' },
        description: "LALALAL"
    },
    {
        info: { id: 10, name: 'Regular Expression Matching' },
        description: "LALALAL"
    },
    {
        info: { id: 11, name: 'Container With Most Water' },
        description: "LALALAL"
    },
    {
        info: { id: 12, name: 'Integer to Roman' },
        description: "LALALAL"
    },
    {
        info: { id: 13, name: 'Roman to Integer' },
        description: "LALALAL"
    },
];


/***/ }),

/***/ "./src/app/problem-detail-view/problem-detail-view.component.html":
/*!************************************************************************!*\
  !*** ./src/app/problem-detail-view/problem-detail-view.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedProblem\">\n\n  <h1>{{selectedProblem.info.id}}. {{selectedProblem.info.name}}</h1>\n  <div>\n    <tabset>\n      <tab heading=\"Problem\">\n        <div [innerHTML]=\"selectedProblem.description\" align=left style=\"width: 600px\"></div>\n        <h4>Code:</h4>\n        <div class=\"ngx-codemirror mb-1\" align=left style=\"width: 700px\">\n          <ngx-codemirror [ngModel]=\"options.value\" [options]=\"options\" [autoFocus]=false [preserveScrollPosition]=true\n            (ngModelChange)=\"handleChange($event)\"></ngx-codemirror>\n        </div>\n        <div>\n          <button (click)=\"submit()\">Submit</button>\n        </div>\n        <div *ngIf=\"userCode\">\n          <h4>Result</h4>\n          <p>\n              {{submitResult.result}}<br>\n              {{submitResult.num_test_passed}}<br>\n              {{submitResult.runtime}}<br>\n          </p>\n        </div>\n      </tab>\n      <tab heading=\"Solution\">Basic content 1</tab>\n      <tab heading=\"Video\">\n        <iframe width=\"640\" height=\"360\" [src]=\"resource_url\" frameborder=\"0\"\n          allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      </tab>\n      <tab heading=\"Discussion\">Basic content 2</tab>\n      <tab heading=\"History\">Basic content 2</tab>\n    </tabset>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/problem-detail-view/problem-detail-view.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/problem-detail-view/problem-detail-view.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  font-size: 1.3em;\n  margin-top: 1;\n  padding-top: 1;\n  color: #039be5; }\n\nh4 {\n  font-size: 1em;\n  margin-top: 1;\n  padding-top: 1;\n  color: #999; }\n\n@font-face {\n  font-family: octicons-link;\n  src: url(data:font/woff;charset=utf-8;base64,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) format(\"woff\"); }\n\n.markdown-body .octicon {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom; }\n\n.markdown-body .anchor {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px; }\n\n.markdown-body .anchor:focus {\n  outline: none; }\n\n.markdown-body h1 .octicon-link,\n.markdown-body h2 .octicon-link,\n.markdown-body h3 .octicon-link,\n.markdown-body h4 .octicon-link,\n.markdown-body h5 .octicon-link,\n.markdown-body h6 .octicon-link {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden; }\n\n.markdown-body h1:hover .anchor,\n.markdown-body h2:hover .anchor,\n.markdown-body h3:hover .anchor,\n.markdown-body h4:hover .anchor,\n.markdown-body h5:hover .anchor,\n.markdown-body h6:hover .anchor {\n  text-decoration: none; }\n\n.markdown-body h1:hover .anchor .octicon-link,\n.markdown-body h2:hover .anchor .octicon-link,\n.markdown-body h3:hover .anchor .octicon-link,\n.markdown-body h4:hover .anchor .octicon-link,\n.markdown-body h5:hover .anchor .octicon-link,\n.markdown-body h6:hover .anchor .octicon-link {\n  visibility: visible; }\n\n.markdown-body {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  color: #24292e;\n  line-height: 1.5;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word; }\n\n.markdown-body .pl-c {\n  color: #6a737d; }\n\n.markdown-body .pl-c1,\n.markdown-body .pl-s .pl-v {\n  color: #005cc5; }\n\n.markdown-body .pl-e,\n.markdown-body .pl-en {\n  color: #6f42c1; }\n\n.markdown-body .pl-s .pl-s1,\n.markdown-body .pl-smi {\n  color: #24292e; }\n\n.markdown-body .pl-ent {\n  color: #22863a; }\n\n.markdown-body .pl-k {\n  color: #d73a49; }\n\n.markdown-body .pl-pds,\n.markdown-body .pl-s,\n.markdown-body .pl-s .pl-pse .pl-s1,\n.markdown-body .pl-sr,\n.markdown-body .pl-sr .pl-cce,\n.markdown-body .pl-sr .pl-sra,\n.markdown-body .pl-sr .pl-sre {\n  color: #032f62; }\n\n.markdown-body .pl-smw,\n.markdown-body .pl-v {\n  color: #e36209; }\n\n.markdown-body .pl-bu {\n  color: #b31d28; }\n\n.markdown-body .pl-ii {\n  background-color: #b31d28;\n  color: #fafbfc; }\n\n.markdown-body .pl-c2 {\n  background-color: #d73a49;\n  color: #fafbfc; }\n\n.markdown-body .pl-c2:before {\n  content: \"^M\"; }\n\n.markdown-body .pl-sr .pl-cce {\n  color: #22863a;\n  font-weight: 700; }\n\n.markdown-body .pl-ml {\n  color: #735c0f; }\n\n.markdown-body .pl-mh,\n.markdown-body .pl-mh .pl-en,\n.markdown-body .pl-ms {\n  color: #005cc5;\n  font-weight: 700; }\n\n.markdown-body .pl-mi {\n  color: #24292e;\n  font-style: italic; }\n\n.markdown-body .pl-mb {\n  color: #24292e;\n  font-weight: 700; }\n\n.markdown-body .pl-md {\n  background-color: #ffeef0;\n  color: #b31d28; }\n\n.markdown-body .pl-mi1 {\n  background-color: #f0fff4;\n  color: #22863a; }\n\n.markdown-body .pl-mc {\n  background-color: #ffebda;\n  color: #e36209; }\n\n.markdown-body .pl-mi2 {\n  background-color: #005cc5;\n  color: #f6f8fa; }\n\n.markdown-body .pl-mdr {\n  color: #6f42c1;\n  font-weight: 700; }\n\n.markdown-body .pl-ba {\n  color: #586069; }\n\n.markdown-body .pl-sg {\n  color: #959da5; }\n\n.markdown-body .pl-corl {\n  color: #032f62;\n  text-decoration: underline; }\n\n.markdown-body details {\n  display: block; }\n\n.markdown-body summary {\n  display: list-item; }\n\n.markdown-body a {\n  background-color: transparent; }\n\n.markdown-body a:active,\n.markdown-body a:hover {\n  outline-width: 0; }\n\n.markdown-body strong {\n  font-weight: inherit;\n  font-weight: bolder; }\n\n.markdown-body h1 {\n  font-size: 2em;\n  margin: .67em 0; }\n\n.markdown-body img {\n  border-style: none; }\n\n.markdown-body code,\n.markdown-body kbd,\n.markdown-body pre {\n  font-family: monospace,monospace;\n  font-size: 1em; }\n\n.markdown-body hr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\n.markdown-body input {\n  font: inherit;\n  margin: 0; }\n\n.markdown-body input {\n  overflow: visible; }\n\n.markdown-body [type=checkbox] {\n  box-sizing: border-box;\n  padding: 0; }\n\n.markdown-body * {\n  box-sizing: border-box; }\n\n.markdown-body input {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\n.markdown-body a {\n  color: #0366d6;\n  text-decoration: none; }\n\n.markdown-body a:hover {\n  text-decoration: underline; }\n\n.markdown-body strong {\n  font-weight: 600; }\n\n.markdown-body hr {\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden; }\n\n.markdown-body hr:before {\n  content: \"\";\n  display: table; }\n\n.markdown-body hr:after {\n  clear: both;\n  content: \"\";\n  display: table; }\n\n.markdown-body table {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.markdown-body td,\n.markdown-body th {\n  padding: 0; }\n\n.markdown-body details summary {\n  cursor: pointer; }\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.markdown-body h1 {\n  font-size: 32px; }\n\n.markdown-body h1,\n.markdown-body h2 {\n  font-weight: 600; }\n\n.markdown-body h2 {\n  font-size: 24px; }\n\n.markdown-body h3 {\n  font-size: 20px; }\n\n.markdown-body h3,\n.markdown-body h4 {\n  font-weight: 600; }\n\n.markdown-body h4 {\n  font-size: 16px; }\n\n.markdown-body h5 {\n  font-size: 14px; }\n\n.markdown-body h5,\n.markdown-body h6 {\n  font-weight: 600; }\n\n.markdown-body h6 {\n  font-size: 12px; }\n\n.markdown-body p {\n  margin-bottom: 10px;\n  margin-top: 0; }\n\n.markdown-body blockquote {\n  margin: 0; }\n\n.markdown-body ol,\n.markdown-body ul {\n  margin-bottom: 0;\n  margin-top: 0;\n  padding-left: 0; }\n\n.markdown-body ol ol,\n.markdown-body ul ol {\n  list-style-type: lower-roman; }\n\n.markdown-body ol ol ol,\n.markdown-body ol ul ol,\n.markdown-body ul ol ol,\n.markdown-body ul ul ol {\n  list-style-type: lower-alpha; }\n\n.markdown-body dd {\n  margin-left: 0; }\n\n.markdown-body code,\n.markdown-body pre {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;\n  font-size: 12px; }\n\n.markdown-body pre {\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.markdown-body input::-webkit-inner-spin-button,\n.markdown-body input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0; }\n\n.markdown-body .border {\n  border: 1px solid #e1e4e8 !important; }\n\n.markdown-body .border-0 {\n  border: 0 !important; }\n\n.markdown-body .border-bottom {\n  border-bottom: 1px solid #e1e4e8 !important; }\n\n.markdown-body .rounded-1 {\n  border-radius: 3px !important; }\n\n.markdown-body .bg-white {\n  background-color: #fff !important; }\n\n.markdown-body .bg-gray-light {\n  background-color: #fafbfc !important; }\n\n.markdown-body .text-gray-light {\n  color: #6a737d !important; }\n\n.markdown-body .mb-0 {\n  margin-bottom: 0 !important; }\n\n.markdown-body .my-2 {\n  margin-bottom: 8px !important;\n  margin-top: 8px !important; }\n\n.markdown-body .pl-0 {\n  padding-left: 0 !important; }\n\n.markdown-body .py-0 {\n  padding-bottom: 0 !important;\n  padding-top: 0 !important; }\n\n.markdown-body .pl-1 {\n  padding-left: 4px !important; }\n\n.markdown-body .pl-2 {\n  padding-left: 8px !important; }\n\n.markdown-body .py-2 {\n  padding-bottom: 8px !important;\n  padding-top: 8px !important; }\n\n.markdown-body .pl-3,\n.markdown-body .px-3 {\n  padding-left: 16px !important; }\n\n.markdown-body .px-3 {\n  padding-right: 16px !important; }\n\n.markdown-body .pl-4 {\n  padding-left: 24px !important; }\n\n.markdown-body .pl-5 {\n  padding-left: 32px !important; }\n\n.markdown-body .pl-6 {\n  padding-left: 40px !important; }\n\n.markdown-body .f6 {\n  font-size: 12px !important; }\n\n.markdown-body .lh-condensed {\n  line-height: 1.25 !important; }\n\n.markdown-body .text-bold {\n  font-weight: 600 !important; }\n\n.markdown-body:before {\n  content: \"\";\n  display: table; }\n\n.markdown-body:after {\n  clear: both;\n  content: \"\";\n  display: table; }\n\n.markdown-body > :first-child {\n  margin-top: 0 !important; }\n\n.markdown-body > :last-child {\n  margin-bottom: 0 !important; }\n\n.markdown-body a:not([href]) {\n  color: inherit;\n  text-decoration: none; }\n\n.markdown-body blockquote,\n.markdown-body dl,\n.markdown-body ol,\n.markdown-body p,\n.markdown-body pre,\n.markdown-body table,\n.markdown-body ul {\n  margin-bottom: 16px;\n  margin-top: 0; }\n\n.markdown-body hr {\n  background-color: #e1e4e8;\n  border: 0;\n  height: .25em;\n  margin: 24px 0;\n  padding: 0; }\n\n.markdown-body blockquote {\n  border-left: .25em solid #dfe2e5;\n  color: #6a737d;\n  padding: 0 1em; }\n\n.markdown-body blockquote > :first-child {\n  margin-top: 0; }\n\n.markdown-body blockquote > :last-child {\n  margin-bottom: 0; }\n\n.markdown-body kbd {\n  background-color: #fafbfc;\n  border: 1px solid #c6cbd1;\n  border-bottom-color: #959da5;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #959da5;\n  color: #444d56;\n  display: inline-block;\n  font-size: 11px;\n  line-height: 10px;\n  padding: 3px 5px;\n  vertical-align: middle; }\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6 {\n  font-weight: 600;\n  line-height: 1.25;\n  margin-bottom: 16px;\n  margin-top: 24px; }\n\n.markdown-body h1 {\n  font-size: 2em; }\n\n.markdown-body h1,\n.markdown-body h2 {\n  border-bottom: 1px solid #eaecef;\n  padding-bottom: .3em; }\n\n.markdown-body h2 {\n  font-size: 1.5em; }\n\n.markdown-body h3 {\n  font-size: 1.25em; }\n\n.markdown-body h4 {\n  font-size: 1em; }\n\n.markdown-body h5 {\n  font-size: .875em; }\n\n.markdown-body h6 {\n  color: #6a737d;\n  font-size: .85em; }\n\n.markdown-body ol,\n.markdown-body ul {\n  padding-left: 2em; }\n\n.markdown-body ol ol,\n.markdown-body ol ul,\n.markdown-body ul ol,\n.markdown-body ul ul {\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.markdown-body li {\n  word-wrap: break-all; }\n\n.markdown-body li > p {\n  margin-top: 16px; }\n\n.markdown-body li + li {\n  margin-top: .25em; }\n\n.markdown-body dl {\n  padding: 0; }\n\n.markdown-body dl dt {\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n  margin-top: 16px;\n  padding: 0; }\n\n.markdown-body dl dd {\n  margin-bottom: 16px;\n  padding: 0 16px; }\n\n.markdown-body table {\n  display: block;\n  overflow: auto;\n  width: 100%; }\n\n.markdown-body table th {\n  font-weight: 600; }\n\n.markdown-body table td,\n.markdown-body table th {\n  border: 1px solid #dfe2e5;\n  padding: 6px 13px; }\n\n.markdown-body table tr {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1; }\n\n.markdown-body table tr:nth-child(2n) {\n  background-color: #f6f8fa; }\n\n.markdown-body img {\n  background-color: #fff;\n  box-sizing: content-box;\n  max-width: 100%; }\n\n.markdown-body img[align=right] {\n  padding-left: 20px; }\n\n.markdown-body img[align=left] {\n  padding-right: 20px; }\n\n.markdown-body code {\n  background-color: rgba(27, 31, 35, 0.05);\n  border-radius: 3px;\n  font-size: 85%;\n  margin: 0;\n  padding: .2em .4em; }\n\n.markdown-body pre {\n  word-wrap: normal; }\n\n.markdown-body pre > code {\n  background: transparent;\n  border: 0;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  white-space: pre;\n  word-break: normal; }\n\n.markdown-body .highlight {\n  margin-bottom: 16px; }\n\n.markdown-body .highlight pre {\n  margin-bottom: 0;\n  word-break: normal; }\n\n.markdown-body .highlight pre,\n.markdown-body pre {\n  background-color: #f6f8fa;\n  border-radius: 3px;\n  font-size: 85%;\n  line-height: 1.45;\n  overflow: auto;\n  padding: 16px; }\n\n.markdown-body pre code {\n  background-color: transparent;\n  border: 0;\n  display: inline;\n  line-height: inherit;\n  margin: 0;\n  max-width: auto;\n  overflow: visible;\n  padding: 0;\n  word-wrap: normal; }\n\n.markdown-body .commit-tease-sha {\n  color: #444d56;\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;\n  font-size: 90%; }\n\n.markdown-body .blob-wrapper {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n.markdown-body .blob-wrapper-embedded {\n  max-height: 240px;\n  overflow-y: auto; }\n\n.markdown-body .blob-num {\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n  color: rgba(27, 31, 35, 0.3);\n  cursor: pointer;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  min-width: 50px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: right;\n  user-select: none;\n  vertical-align: top;\n  white-space: nowrap;\n  width: 1%; }\n\n.markdown-body .blob-num:hover {\n  color: rgba(27, 31, 35, 0.6); }\n\n.markdown-body .blob-num:before {\n  content: attr(data-line-number); }\n\n.markdown-body .blob-code {\n  line-height: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: relative;\n  vertical-align: top; }\n\n.markdown-body .blob-code-inner {\n  color: #24292e;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;\n  font-size: 12px;\n  overflow: visible;\n  white-space: pre;\n  word-wrap: normal; }\n\n.markdown-body .pl-token.active,\n.markdown-body .pl-token:hover {\n  background: #ffea7f;\n  cursor: pointer; }\n\n.markdown-body kbd {\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-bottom-color: #c6cbd1;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #c6cbd1;\n  color: #444d56;\n  display: inline-block;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;\n  line-height: 10px;\n  padding: 3px 5px;\n  vertical-align: middle; }\n\n.markdown-body :checked + .radio-label {\n  border-color: #0366d6;\n  position: relative;\n  z-index: 1; }\n\n.markdown-body .tab-size[data-tab-size=\"1\"] {\n  -moz-tab-size: 1;\n  -o-tab-size: 1;\n     tab-size: 1; }\n\n.markdown-body .tab-size[data-tab-size=\"2\"] {\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n     tab-size: 2; }\n\n.markdown-body .tab-size[data-tab-size=\"3\"] {\n  -moz-tab-size: 3;\n  -o-tab-size: 3;\n     tab-size: 3; }\n\n.markdown-body .tab-size[data-tab-size=\"4\"] {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4; }\n\n.markdown-body .tab-size[data-tab-size=\"5\"] {\n  -moz-tab-size: 5;\n  -o-tab-size: 5;\n     tab-size: 5; }\n\n.markdown-body .tab-size[data-tab-size=\"6\"] {\n  -moz-tab-size: 6;\n  -o-tab-size: 6;\n     tab-size: 6; }\n\n.markdown-body .tab-size[data-tab-size=\"7\"] {\n  -moz-tab-size: 7;\n  -o-tab-size: 7;\n     tab-size: 7; }\n\n.markdown-body .tab-size[data-tab-size=\"8\"] {\n  -moz-tab-size: 8;\n  -o-tab-size: 8;\n     tab-size: 8; }\n\n.markdown-body .tab-size[data-tab-size=\"9\"] {\n  -moz-tab-size: 9;\n  -o-tab-size: 9;\n     tab-size: 9; }\n\n.markdown-body .tab-size[data-tab-size=\"10\"] {\n  -moz-tab-size: 10;\n  -o-tab-size: 10;\n     tab-size: 10; }\n\n.markdown-body .tab-size[data-tab-size=\"11\"] {\n  -moz-tab-size: 11;\n  -o-tab-size: 11;\n     tab-size: 11; }\n\n.markdown-body .tab-size[data-tab-size=\"12\"] {\n  -moz-tab-size: 12;\n  -o-tab-size: 12;\n     tab-size: 12; }\n\n.markdown-body .task-list-item {\n  list-style-type: none; }\n\n.markdown-body .task-list-item + .task-list-item {\n  margin-top: 3px; }\n\n.markdown-body .task-list-item input {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle; }\n\n.markdown-body hr {\n  border-bottom-color: #eee; }\n\n.markdown-body .pl-0 {\n  padding-left: 0 !important; }\n\n.markdown-body .pl-1 {\n  padding-left: 4px !important; }\n\n.markdown-body .pl-2 {\n  padding-left: 8px !important; }\n\n.markdown-body .pl-3 {\n  padding-left: 16px !important; }\n\n.markdown-body .pl-4 {\n  padding-left: 24px !important; }\n\n.markdown-body .pl-5 {\n  padding-left: 32px !important; }\n\n.markdown-body .pl-6 {\n  padding-left: 40px !important; }\n\n.markdown-body .pl-7 {\n  padding-left: 48px !important; }\n\n.markdown-body .pl-8 {\n  padding-left: 64px !important; }\n\n.markdown-body .pl-9 {\n  padding-left: 80px !important; }\n\n.markdown-body .pl-10 {\n  padding-left: 96px !important; }\n\n.markdown-body .pl-11 {\n  padding-left: 112px !important; }\n\n.markdown-body .pl-12 {\n  padding-left: 128px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2xhbmQvRGVza3RvcC9Qcm9ncmFtX0RldmVsb3BtZW50L2NsYXNzbGVyL2Zyb250ZW5kL3NyYy9hcHAvcHJvYmxlbS1kZXRhaWwtdmlldy9wcm9ibGVtLWRldGFpbC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdsQjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHYjtFQUNFLDBCQUEwQjtFQUMxQixxdEVBQXF0RSxFQUFBOztBQUd2dEU7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjs7Ozs7O0VBTUUsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHcEI7Ozs7OztFQU1FLHFCQUFxQixFQUFBOztBQUd2Qjs7Ozs7O0VBTUUsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtJQUFrSTtFQUNsSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7O0VBRUUsY0FBYyxFQUFBOztBQUdoQjs7RUFFRSxjQUFjLEVBQUE7O0FBR2hCOztFQUVFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7Ozs7OztFQU9FLGNBQWMsRUFBQTs7QUFHaEI7O0VBRUUsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSx5QkFBeUI7RUFDekIsY0FB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RUFBQTs7QUFHdkI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLDBCQUF5QixFQUFBOztBQUczQjtFQUNFLDRCQUEyQixFQUFBOztBQUc3QjtFQUNFLDRCQUEyQixFQUFBOztBQUc3QjtFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLDhCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvYmxlbS1kZXRhaWwtdmlldy9wcm9ibGVtLWRldGFpbC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgbWFyZ2luLXRvcDogMTtcbiAgICBwYWRkaW5nLXRvcDogMTtcbiAgICBjb2xvcjogIzAzOWJlNTtcbiAgfVxuICBcbmg0IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbi10b3A6IDE7XG4gIHBhZGRpbmctdG9wOiAxO1xuICBjb2xvcjogIzk5OTtcbn1cbiAgXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG9jdGljb25zLWxpbms7XG4gIHNyYzogdXJsKGRhdGE6Zm9udC93b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdSZ0FCQUFBQUFBWndBQkFBQUFBQUNGUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCRVUwbEhBQUFHYUFBQUFBZ0FBQUFJQUFBQUFVZFRWVUlBQUFaY0FBQUFDZ0FBQUFvQUFRQUFUMU12TWdBQUF5UUFBQUJKQUFBQVlGWUVVM1JqYldGd0FBQURjQUFBQUVVQUFBQ0FBSlRodm1OMmRDQUFBQVRrQUFBQUJBQUFBQVFBQUFBQVpuQm5iUUFBQTdnQUFBQ3lBQUFCQ1VNKzhJaG5ZWE53QUFBR1RBQUFBQkFBQUFBUUFCb0FJMmRzZVdZQUFBRnNBQUFCUEFBQUFad2NFcTl0YUdWaFpBQUFBc2dBQUFBMEFBQUFOZ2g0YTkxb2FHVmhBQUFEQ0FBQUFCb0FBQUFrQ0E4RFJHaHRkSGdBQUFMOEFBQUFEQUFBQUF3R0FBQ2ZiRzlqWVFBQUFzQUFBQUFJQUFBQUNBQmlBVEJ0WVhod0FBQUNxQUFBQUJnQUFBQWdBQThBU201aGJXVUFBQVRvQUFBQlFnQUFBbFh1NzNzT2NHOXpkQUFBQml3QUFBQWVBQUFBTUUzUXBPQndjbVZ3QUFBRWJBQUFBSFlBQUFCL2FGR3BrM2phVFk2eGE4SkFHTVcvTzYyQkRpMHRKTFlRaW5jWEV5cFlJaUdKalNnSG5pUTZ1bVRzVUV5TG01QlY2TkRCUDhUcHRzNkYwditrLzBhbjJpK2l0SER3M3YyKzkrREJLVHpzSk5uV0pOVGdIRXk0QmdHM0VNSTlEQ0VET0dFWHpEQURVNWhCS01JZ05QWnFvRDNTaWxWYVhaQ0VSMy9JN0F0eEVKTHR6enVaZkkrVlZrcHJ4VGxYU2hXS2IzVEJlY0cxMXJ3b05sbW1uMVAyV1ljSmN6bDMyZXRTcEtuemlDN2xReVdlMXNtVlB5L0x0N0tjKzB2V1kvZ0FnSUlFcUFOOXdlMHB3S1hyZWlNYXN4dmFiRFFNTTRyaU8rcXhNMm9nd0RHT1pUWHh3eERpeWNRSWNvWUZCTGo1SzNFSWFTY3RBcTJrVFlpdyt5bWhjZTd2d005alNxTzhKeVZkNVJIOWd5VHQyK0oveVVtWWxJUjBzMDRuNis3Vm0xb3plelVlTEVhVWpoYURTdVhId1ZSZ3ZMSm4xdFE3eGl1VnYvb2NUUkY0Mm1OZ1pHQmdZR2J3Wk9CaUFBRkdKQklNQUFpekFGb0FBQUJpQUdJQXpuamFZMkJrWUdBQTRpbjh6d1hpK1cyK01qQ3pNSURBcFN3dlh6Qzk3WjRJZzhOL0J4WUdaZ2NnbDUyQkNTUUtBQTNqQ1Y4Q0FBQmZBQUFBQUFRQUFFQjQybU5nWkdCZzRmM3ZBQ1FaUUFCSU1qS2dBbVlBS0VnQlhnQUFlTnBqWUdZNndUaUJnWldCZzJrbVV4b0RBNE1QaEdaTVl6QmkxQUh5Z1ZMWVFVQ2Fhd3FEQTRQQ2h4aG1oLzhPRERFc3ZBd0hnTUtNSURuR0wweDdnSlFDQXdNQUpkNE1Gd0FBQUhqYVkyQmdZR2FBNERBR1JnWVFrQUh5R01GOE5nWXJJTTNKSUFHVllZRFQrQUVqQXd1REZwQm1BOUtNREV3TUNoOWkvdjhIOHNIMC80ZFFjMWlBbUFrQUxhVUtMZ0FBQUhqYVRZOUxEc0lnRUlidGdxSFVQcERpM2dQb0JWeVJUbVRkZE9tcVRYVGhFWHFyb2IyZ1ExRmp3cER2ZndDQmRtZFhDNUFWS0Z1M2U1TWZORkoyOUtUUVQ0OE9iOS9scVl3T0daeGVVZWxOMlUyUjYrY0FyZ3RDSnBhdVc3VVFCcW5Ga1VzakFZL2tPVTFjUCtEQWd2eHduMWNoWkR3VWJkNkNGaW1HWHd6d0Y2dFBiRkljakVsK3Z2bU0vYnlBNDhlNnRXcktBcm00WkpsQ2Jkc3J4a3NMMUF3V24veUJTSktwWWJxOEFYYWFUYjhBQUhqYTI4akF3T0MwMFpyQmVRTkRRT1dPLy9zZEJCZ1lHUmlZV1lBRUVMRXdNVEU0dXpvNVp6bzViMkJ4ZG5GT2NBTHhOakE2YjJCeVRzd0M4all3ZzBWbE51b0NUV0FNcU56TXpzb0sxckVoTnFCeUV5ZXJnNVBNSmxZdVZ1ZUVUS2NkLzg5dUJwbnB2SUVWb21lSExvTXNBQWUxSWQ0QUFBQUFBQUI0Mm9XUVQwN0NRQlRHdjBKQmhhZ2s3SFF6S3hjYTJzSkNFMWhEdDRRRis5Sk9TMG5iYWFZRENRZndDSjdBdTNBSGorTE8xM0ZNbW02Y2w3Nzg1dnZlbjBrQmpIQ0JoZnBZdU5hNVBoMWMwZTJYdTNqRXZXRzdVZFBETFo0Tjkybk9tK0VCWHVBYkhtSU1TUk1zKzRhVUVkNE5kM0NIRDhOZHZPTFRzQTJHTDhNOVBPRGJjTCtoRDdDMXhvYUhlTEpTRWFvMEZFVzE0Y2t4QytUVThUeHZzWTZYMGVMUG1SaHJ5MldWaW9McGtyYnA4NExMUVBHSTdjNnNPaVV6cFdJV1M1R3psU2dVenpMQlNpa09QRlRPWHFseTdycXgwWjFRNUJBSW9aQlNGaWhRWVFPT0JFZGtDT2dYVE9IQTA3SEFHakdXaUlqYVBaTlcxMy8rbG02UzlGVDdyTEhGSjZmUWJrQVRPRzFqMk9GTXVjS0pKc3hJVmZRT1JsKzlKeWRhNlNsMWRVWWhTQ20xZHlDbGZvZUR2ZTRxTVlkTEViZnFIZjNPL0FkRHVtc2pBQUI0Mm1OZ1lvQUFaUVlqQm15QUdZUVptZGhMOHpMZERFeWRBUmZvQXFJQUFBQUJBQU1BQndBS0FCTUFCLy8vQUE4QUFRQUFBQUFBQUFBQUFBQUFBQUFCQUFBQUFBPT0pIGZvcm1hdCgnd29mZicpO1xufVxuXG4ubWFya2Rvd24tYm9keSAub2N0aWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmlsbDogY3VycmVudENvbG9yO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5cbi5tYXJrZG93bi1ib2R5IC5hbmNob3Ige1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG4ubWFya2Rvd24tYm9keSAuYW5jaG9yOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1hcmtkb3duLWJvZHkgaDEgLm9jdGljb24tbGluayxcbi5tYXJrZG93bi1ib2R5IGgyIC5vY3RpY29uLWxpbmssXG4ubWFya2Rvd24tYm9keSBoMyAub2N0aWNvbi1saW5rLFxuLm1hcmtkb3duLWJvZHkgaDQgLm9jdGljb24tbGluayxcbi5tYXJrZG93bi1ib2R5IGg1IC5vY3RpY29uLWxpbmssXG4ubWFya2Rvd24tYm9keSBoNiAub2N0aWNvbi1saW5rIHtcbiAgY29sb3I6ICMxYjFmMjM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm1hcmtkb3duLWJvZHkgaDE6aG92ZXIgLmFuY2hvcixcbi5tYXJrZG93bi1ib2R5IGgyOmhvdmVyIC5hbmNob3IsXG4ubWFya2Rvd24tYm9keSBoMzpob3ZlciAuYW5jaG9yLFxuLm1hcmtkb3duLWJvZHkgaDQ6aG92ZXIgLmFuY2hvcixcbi5tYXJrZG93bi1ib2R5IGg1OmhvdmVyIC5hbmNob3IsXG4ubWFya2Rvd24tYm9keSBoNjpob3ZlciAuYW5jaG9yIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWFya2Rvd24tYm9keSBoMTpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmssXG4ubWFya2Rvd24tYm9keSBoMjpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmssXG4ubWFya2Rvd24tYm9keSBoMzpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmssXG4ubWFya2Rvd24tYm9keSBoNDpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmssXG4ubWFya2Rvd24tYm9keSBoNTpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmssXG4ubWFya2Rvd24tYm9keSBoNjpob3ZlciAuYW5jaG9yIC5vY3RpY29uLWxpbmsge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ubWFya2Rvd24tYm9keSB7XG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIGNvbG9yOiAjMjQyOTJlO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLWMge1xuICBjb2xvcjogIzZhNzM3ZDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLWMxLFxuLm1hcmtkb3duLWJvZHkgLnBsLXMgLnBsLXYge1xuICBjb2xvcjogIzAwNWNjNTtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLWUsXG4ubWFya2Rvd24tYm9keSAucGwtZW4ge1xuICBjb2xvcjogIzZmNDJjMTtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLXMgLnBsLXMxLFxuLm1hcmtkb3duLWJvZHkgLnBsLXNtaSB7XG4gIGNvbG9yOiAjMjQyOTJlO1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtZW50IHtcbiAgY29sb3I6ICMyMjg2M2E7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC1rIHtcbiAgY29sb3I6ICNkNzNhNDk7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC1wZHMsXG4ubWFya2Rvd24tYm9keSAucGwtcyxcbi5tYXJrZG93bi1ib2R5IC5wbC1zIC5wbC1wc2UgLnBsLXMxLFxuLm1hcmtkb3duLWJvZHkgLnBsLXNyLFxuLm1hcmtkb3duLWJvZHkgLnBsLXNyIC5wbC1jY2UsXG4ubWFya2Rvd24tYm9keSAucGwtc3IgLnBsLXNyYSxcbi5tYXJrZG93bi1ib2R5IC5wbC1zciAucGwtc3JlIHtcbiAgY29sb3I6ICMwMzJmNjI7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC1zbXcsXG4ubWFya2Rvd24tYm9keSAucGwtdiB7XG4gIGNvbG9yOiAjZTM2MjA5O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtYnUge1xuICBjb2xvcjogI2IzMWQyODtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLWlpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzMWQyODtcbiAgY29sb3I6ICNmYWZiZmM7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC1jMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNzNhNDk7XG4gIGNvbG9yOiAjZmFmYmZjO1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtYzI6YmVmb3JlIHtcbiAgY29udGVudDogXCJeTVwiO1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtc3IgLnBsLWNjZSB7XG4gIGNvbG9yOiAjMjI4NjNhO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtbWwge1xuICBjb2xvcjogIzczNWMwZjtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLW1oLFxuLm1hcmtkb3duLWJvZHkgLnBsLW1oIC5wbC1lbixcbi5tYXJrZG93bi1ib2R5IC5wbC1tcyB7XG4gIGNvbG9yOiAjMDA1Y2M1O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtbWkge1xuICBjb2xvcjogIzI0MjkyZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtbWIge1xuICBjb2xvcjogIzI0MjkyZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLW1kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWVmMDtcbiAgY29sb3I6ICNiMzFkMjg7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC1taTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmY0O1xuICBjb2xvcjogIzIyODYzYTtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLW1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJkYTtcbiAgY29sb3I6ICNlMzYyMDk7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC1taTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1Y2M1O1xuICBjb2xvcjogI2Y2ZjhmYTtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLW1kciB7XG4gIGNvbG9yOiAjNmY0MmMxO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtYmEge1xuICBjb2xvcjogIzU4NjA2OTtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLXNnIHtcbiAgY29sb3I6ICM5NTlkYTU7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC1jb3JsIHtcbiAgY29sb3I6ICMwMzJmNjI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubWFya2Rvd24tYm9keSBkZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYXJrZG93bi1ib2R5IHN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi5tYXJrZG93bi1ib2R5IGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgYTphY3RpdmUsXG4ubWFya2Rvd24tYm9keSBhOmhvdmVyIHtcbiAgb3V0bGluZS13aWR0aDogMDtcbn1cblxuLm1hcmtkb3duLWJvZHkgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5tYXJrZG93bi1ib2R5IGgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogLjY3ZW0gMDtcbn1cblxuLm1hcmtkb3duLWJvZHkgaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4ubWFya2Rvd24tYm9keSBjb2RlLFxuLm1hcmtkb3duLWJvZHkga2JkLFxuLm1hcmtkb3duLWJvZHkgcHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSxtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4ubWFya2Rvd24tYm9keSBociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ubWFya2Rvd24tYm9keSBpbnB1dCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1hcmtkb3duLWJvZHkgaW5wdXQge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLm1hcmtkb3duLWJvZHkgW3R5cGU9Y2hlY2tib3hdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1hcmtkb3duLWJvZHkgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYXJrZG93bi1ib2R5IGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IGEge1xuICBjb2xvcjogIzAzNjZkNjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWFya2Rvd24tYm9keSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5tYXJrZG93bi1ib2R5IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYXJrZG93bi1ib2R5IGhyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmUyZTU7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYXJrZG93bi1ib2R5IGhyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ubWFya2Rvd24tYm9keSBocjphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLm1hcmtkb3duLWJvZHkgdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm1hcmtkb3duLWJvZHkgdGQsXG4ubWFya2Rvd24tYm9keSB0aCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYXJrZG93bi1ib2R5IGRldGFpbHMgc3VtbWFyeSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hcmtkb3duLWJvZHkgaDEsXG4ubWFya2Rvd24tYm9keSBoMixcbi5tYXJrZG93bi1ib2R5IGgzLFxuLm1hcmtkb3duLWJvZHkgaDQsXG4ubWFya2Rvd24tYm9keSBoNSxcbi5tYXJrZG93bi1ib2R5IGg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm1hcmtkb3duLWJvZHkgaDEge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5tYXJrZG93bi1ib2R5IGgxLFxuLm1hcmtkb3duLWJvZHkgaDIge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWFya2Rvd24tYm9keSBoMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLm1hcmtkb3duLWJvZHkgaDMge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYXJrZG93bi1ib2R5IGgzLFxuLm1hcmtkb3duLWJvZHkgaDQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWFya2Rvd24tYm9keSBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1hcmtkb3duLWJvZHkgaDUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXJrZG93bi1ib2R5IGg1LFxuLm1hcmtkb3duLWJvZHkgaDYge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWFya2Rvd24tYm9keSBoNiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1hcmtkb3duLWJvZHkgcCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5tYXJrZG93bi1ib2R5IG9sLFxuLm1hcmtkb3duLWJvZHkgdWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5tYXJrZG93bi1ib2R5IG9sIG9sLFxuLm1hcmtkb3duLWJvZHkgdWwgb2wge1xuICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLXJvbWFuO1xufVxuXG4ubWFya2Rvd24tYm9keSBvbCBvbCBvbCxcbi5tYXJrZG93bi1ib2R5IG9sIHVsIG9sLFxuLm1hcmtkb3duLWJvZHkgdWwgb2wgb2wsXG4ubWFya2Rvd24tYm9keSB1bCB1bCBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItYWxwaGE7XG59XG5cbi5tYXJrZG93bi1ib2R5IGRkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5tYXJrZG93bi1ib2R5IGNvZGUsXG4ubWFya2Rvd24tYm9keSBwcmUge1xuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLENvdXJpZXIsbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYXJrZG93bi1ib2R5IHByZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5tYXJrZG93bi1ib2R5IGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuLm1hcmtkb3duLWJvZHkgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWU0ZTghaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAuYm9yZGVyLTAge1xuICBib3JkZXI6IDAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAuYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlNGU4IWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnJvdW5kZWQtMSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAuYmctZ3JheS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmMhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAudGV4dC1ncmF5LWxpZ2h0IHtcbiAgY29sb3I6ICM2YTczN2QhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAubWItMCB7XG4gIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAubXktMiB7XG4gIG1hcmdpbi1ib3R0b206IDhweCFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDhweCFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC0wIHtcbiAgcGFkZGluZy1sZWZ0OiAwIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnB5LTAge1xuICBwYWRkaW5nLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLTEge1xuICBwYWRkaW5nLWxlZnQ6IDRweCFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC0yIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHghaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucHktMiB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHghaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogOHB4IWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLTMsXG4ubWFya2Rvd24tYm9keSAucHgtMyB7XG4gIHBhZGRpbmctbGVmdDogMTZweCFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5weC0zIHtcbiAgcGFkZGluZy1yaWdodDogMTZweCFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC00IHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4IWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLTUge1xuICBwYWRkaW5nLWxlZnQ6IDMycHghaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtNiB7XG4gIHBhZGRpbmctbGVmdDogNDBweCFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5mNiB7XG4gIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5saC1jb25kZW5zZWQge1xuICBsaW5lLWhlaWdodDogMS4yNSFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5tYXJrZG93bi1ib2R5OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ubWFya2Rvd24tYm9keT46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHk+Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgYTpub3QoW2hyZWZdKSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGUsXG4ubWFya2Rvd24tYm9keSBkbCxcbi5tYXJrZG93bi1ib2R5IG9sLFxuLm1hcmtkb3duLWJvZHkgcCxcbi5tYXJrZG93bi1ib2R5IHByZSxcbi5tYXJrZG93bi1ib2R5IHRhYmxlLFxuLm1hcmtkb3duLWJvZHkgdWwge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubWFya2Rvd24tYm9keSBociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWU0ZTg7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAuMjVlbTtcbiAgbWFyZ2luOiAyNHB4IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGUge1xuICBib3JkZXItbGVmdDogLjI1ZW0gc29saWQgI2RmZTJlNTtcbiAgY29sb3I6ICM2YTczN2Q7XG4gIHBhZGRpbmc6IDAgMWVtO1xufVxuXG4ubWFya2Rvd24tYm9keSBibG9ja3F1b3RlPjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGU+Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubWFya2Rvd24tYm9keSBrYmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzZjYmQxO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjOTU5ZGE1O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwICM5NTlkYTU7XG4gIGNvbG9yOiAjNDQ0ZDU2O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tYXJrZG93bi1ib2R5IGgxLFxuLm1hcmtkb3duLWJvZHkgaDIsXG4ubWFya2Rvd24tYm9keSBoMyxcbi5tYXJrZG93bi1ib2R5IGg0LFxuLm1hcmtkb3duLWJvZHkgaDUsXG4ubWFya2Rvd24tYm9keSBoNiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4ubWFya2Rvd24tYm9keSBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4ubWFya2Rvd24tYm9keSBoMSxcbi5tYXJrZG93bi1ib2R5IGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVjZWY7XG4gIHBhZGRpbmctYm90dG9tOiAuM2VtO1xufVxuXG4ubWFya2Rvd24tYm9keSBoMiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5tYXJrZG93bi1ib2R5IGgzIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbi5tYXJrZG93bi1ib2R5IGg0IHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5tYXJrZG93bi1ib2R5IGg1IHtcbiAgZm9udC1zaXplOiAuODc1ZW07XG59XG5cbi5tYXJrZG93bi1ib2R5IGg2IHtcbiAgY29sb3I6ICM2YTczN2Q7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG59XG5cbi5tYXJrZG93bi1ib2R5IG9sLFxuLm1hcmtkb3duLWJvZHkgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbn1cblxuLm1hcmtkb3duLWJvZHkgb2wgb2wsXG4ubWFya2Rvd24tYm9keSBvbCB1bCxcbi5tYXJrZG93bi1ib2R5IHVsIG9sLFxuLm1hcmtkb3duLWJvZHkgdWwgdWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubWFya2Rvd24tYm9keSBsaSB7XG4gIHdvcmQtd3JhcDogYnJlYWstYWxsO1xufVxuXG4ubWFya2Rvd24tYm9keSBsaT5wIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm1hcmtkb3duLWJvZHkgbGkrbGkge1xuICBtYXJnaW4tdG9wOiAuMjVlbTtcbn1cblxuLm1hcmtkb3duLWJvZHkgZGwge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWFya2Rvd24tYm9keSBkbCBkdCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYXJrZG93bi1ib2R5IGRsIGRkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4ubWFya2Rvd24tYm9keSB0YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXJrZG93bi1ib2R5IHRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1hcmtkb3duLWJvZHkgdGFibGUgdGQsXG4ubWFya2Rvd24tYm9keSB0YWJsZSB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmUyZTU7XG4gIHBhZGRpbmc6IDZweCAxM3B4O1xufVxuXG4ubWFya2Rvd24tYm9keSB0YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzZjYmQxO1xufVxuXG4ubWFya2Rvd24tYm9keSB0YWJsZSB0cjpudGgtY2hpbGQoMm4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmYTtcbn1cblxuLm1hcmtkb3duLWJvZHkgaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLm1hcmtkb3duLWJvZHkgaW1nW2FsaWduPXJpZ2h0XSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLm1hcmtkb3duLWJvZHkgaW1nW2FsaWduPWxlZnRdIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLm1hcmtkb3duLWJvZHkgY29kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsMzEsMzUsLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDg1JTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAuMmVtIC40ZW07XG59XG5cbi5tYXJrZG93bi1ib2R5IHByZSB7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG4ubWFya2Rvd24tYm9keSBwcmU+Y29kZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5oaWdobGlnaHQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubWFya2Rvd24tYm9keSAuaGlnaGxpZ2h0IHByZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLmhpZ2hsaWdodCBwcmUsXG4ubWFya2Rvd24tYm9keSBwcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZhO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogODUlO1xuICBsaW5lLWhlaWdodDogMS40NTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5tYXJrZG93bi1ib2R5IHByZSBjb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICBtYXgtd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwYWRkaW5nOiAwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLmNvbW1pdC10ZWFzZS1zaGEge1xuICBjb2xvcjogIzQ0NGQ1NjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLENvdXJpZXIsbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDkwJTtcbn1cblxuLm1hcmtkb3duLWJvZHkgLmJsb2Itd3JhcHBlciB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubWFya2Rvd24tYm9keSAuYmxvYi13cmFwcGVyLWVtYmVkZGVkIHtcbiAgbWF4LWhlaWdodDogMjQwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tYXJrZG93bi1ib2R5IC5ibG9iLW51bSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgY29sb3I6IHJnYmEoMjcsMzEsMzUsLjMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sQ291cmllcixtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxJTtcbn1cblxuLm1hcmtkb3duLWJvZHkgLmJsb2ItbnVtOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjcsMzEsMzUsLjYpO1xufVxuXG4ubWFya2Rvd24tYm9keSAuYmxvYi1udW06YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLWxpbmUtbnVtYmVyKTtcbn1cblxuLm1hcmtkb3duLWJvZHkgLmJsb2ItY29kZSB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLmJsb2ItY29kZS1pbm5lciB7XG4gIGNvbG9yOiAjMjQyOTJlO1xuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLENvdXJpZXIsbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLXRva2VuLmFjdGl2ZSxcbi5tYXJrZG93bi1ib2R5IC5wbC10b2tlbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmVhN2Y7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hcmtkb3duLWJvZHkga2JkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmJmYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2M2Y2JkMTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAjYzZjYmQxO1xuICBjb2xvcjogIzQ0NGQ1NjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250OiAxMXB4IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxDb3VyaWVyLG1vbm9zcGFjZTtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tYXJrZG93bi1ib2R5IDpjaGVja2VkKy5yYWRpby1sYWJlbCB7XG4gIGJvcmRlci1jb2xvcjogIzAzNjZkNjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cIjFcIl0ge1xuICAtbW96LXRhYi1zaXplOiAxO1xuICB0YWItc2l6ZTogMTtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XCIyXCJdIHtcbiAgLW1vei10YWItc2l6ZTogMjtcbiAgdGFiLXNpemU6IDI7XG59XG5cbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVwiM1wiXSB7XG4gIC1tb3otdGFiLXNpemU6IDM7XG4gIHRhYi1zaXplOiAzO1xufVxuXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cIjRcIl0ge1xuICAtbW96LXRhYi1zaXplOiA0O1xuICB0YWItc2l6ZTogNDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XCI1XCJdIHtcbiAgLW1vei10YWItc2l6ZTogNTtcbiAgdGFiLXNpemU6IDU7XG59XG5cbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVwiNlwiXSB7XG4gIC1tb3otdGFiLXNpemU6IDY7XG4gIHRhYi1zaXplOiA2O1xufVxuXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cIjdcIl0ge1xuICAtbW96LXRhYi1zaXplOiA3O1xuICB0YWItc2l6ZTogNztcbn1cblxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XCI4XCJdIHtcbiAgLW1vei10YWItc2l6ZTogODtcbiAgdGFiLXNpemU6IDg7XG59XG5cbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVwiOVwiXSB7XG4gIC1tb3otdGFiLXNpemU6IDk7XG4gIHRhYi1zaXplOiA5O1xufVxuXG4ubWFya2Rvd24tYm9keSAudGFiLXNpemVbZGF0YS10YWItc2l6ZT1cIjEwXCJdIHtcbiAgLW1vei10YWItc2l6ZTogMTA7XG4gIHRhYi1zaXplOiAxMDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnRhYi1zaXplW2RhdGEtdGFiLXNpemU9XCIxMVwiXSB7XG4gIC1tb3otdGFiLXNpemU6IDExO1xuICB0YWItc2l6ZTogMTE7XG59XG5cbi5tYXJrZG93bi1ib2R5IC50YWItc2l6ZVtkYXRhLXRhYi1zaXplPVwiMTJcIl0ge1xuICAtbW96LXRhYi1zaXplOiAxMjtcbiAgdGFiLXNpemU6IDEyO1xufVxuXG4ubWFya2Rvd24tYm9keSAudGFzay1saXN0LWl0ZW0ge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5tYXJrZG93bi1ib2R5IC50YXNrLWxpc3QtaXRlbSsudGFzay1saXN0LWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5tYXJrZG93bi1ib2R5IC50YXNrLWxpc3QtaXRlbSBpbnB1dCB7XG4gIG1hcmdpbjogMCAuMmVtIC4yNWVtIC0xLjZlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1hcmtkb3duLWJvZHkgaHIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWVlO1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtMCB7XG4gIHBhZGRpbmctbGVmdDogMCFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC0xIHtcbiAgcGFkZGluZy1sZWZ0OiA0cHghaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtMiB7XG4gIHBhZGRpbmctbGVmdDogOHB4IWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLTMge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHghaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtNCB7XG4gIHBhZGRpbmctbGVmdDogMjRweCFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC01IHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4IWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLTYge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHghaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtNyB7XG4gIHBhZGRpbmctbGVmdDogNDhweCFpbXBvcnRhbnQ7XG59XG5cbi5tYXJrZG93bi1ib2R5IC5wbC04IHtcbiAgcGFkZGluZy1sZWZ0OiA2NHB4IWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLTkge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHghaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDk2cHghaW1wb3J0YW50O1xufVxuXG4ubWFya2Rvd24tYm9keSAucGwtMTEge1xuICBwYWRkaW5nLWxlZnQ6IDExMnB4IWltcG9ydGFudDtcbn1cblxuLm1hcmtkb3duLWJvZHkgLnBsLTEyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMjhweCFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/problem-detail-view/problem-detail-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/problem-detail-view/problem-detail-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProblemDetailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemDetailViewComponent", function() { return ProblemDetailViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _problem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../problem.service */ "./src/app/problem.service.ts");
/* harmony import */ var _code_submission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../code-submission.service */ "./src/app/code-submission.service.ts");





var ProblemDetailViewComponent = /** @class */ (function () {
    function ProblemDetailViewComponent(route, problemService, codeSubmissionService) {
        this.route = route;
        this.problemService = problemService;
        this.codeSubmissionService = codeSubmissionService;
        this.readOnly = false;
        this.mode = 'python';
        this.options = {
            lineNumbers: true,
            mode: 'python',
            indentUnit: 4,
            smartIndent: true,
            theme: 'neat',
            indentWithTabs: true,
            tabSize: 4,
            value: "class Solution():\n\tdef __init__(self):\n\t\tpass\n\tdef run(self):\n",
        };
        this.userCode = '';
        this.submitResult = '';
    }
    ProblemDetailViewComponent.prototype.ngOnInit = function () {
        this.getProblem();
        this.userCode = this.options.value;
    };
    ProblemDetailViewComponent.prototype.getProblem = function () {
        var _this = this;
        var name = this.route.snapshot.paramMap.get('name');
        this.problemService.getProblem(name)
            .subscribe(function (item) { return _this.selectedProblem = item; });
    };
    ProblemDetailViewComponent.prototype.submit = function () {
        var _this = this;
        //console.log('User Code: \n' + this.userCode);
        var name = this.route.snapshot.paramMap.get('name');
        this.codeSubmissionService.submit(name, this.userCode)
            .subscribe(function (item) { return _this.submitResult = item; });
    };
    ProblemDetailViewComponent.prototype.handleChange = function ($event) {
        this.userCode = $event;
    };
    ProblemDetailViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-problem-detail-view',
            template: __webpack_require__(/*! ./problem-detail-view.component.html */ "./src/app/problem-detail-view/problem-detail-view.component.html"),
            styles: [__webpack_require__(/*! ./problem-detail-view.component.scss */ "./src/app/problem-detail-view/problem-detail-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _problem_service__WEBPACK_IMPORTED_MODULE_3__["ProblemService"],
            _code_submission_service__WEBPACK_IMPORTED_MODULE_4__["CodeSubmissionService"]])
    ], ProblemDetailViewComponent);
    return ProblemDetailViewComponent;
}());



/***/ }),

/***/ "./src/app/problem-view/problem-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/problem-view/problem-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Problems </h2>\n<div>\n  <label>\n    <input (keyup)=\"onKey($event)\" placeholder=\"Search problem titles or IDs\" />\n  </label>\n</div>\n\n<ul class=\"topics\">\n  <li *ngFor=\"let item of selectedProblems\">\n    <a routerLink=\"/problems/{{item.name}}\">\n      <span class=\"badge\">{{item.id}}</span> {{item.name}}\n    </a>\n\n  </li>\n</ul>\n\n<div *ngIf=\"noMatched\">\n  <h4>Can't find any matched problem...</h4>\n</div>"

/***/ }),

/***/ "./src/app/problem-view/problem-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/problem-view/problem-view.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  font-size: 1.3em;\n  margin-top: 1;\n  padding-top: 1;\n  color: #039be5; }\n\nh4 {\n  font-size: 1.3em;\n  margin-top: 1;\n  padding-top: 1;\n  color: #999; }\n\np:hover {\n  color: #888; }\n\n.topics {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 30em;\n  text-align: left; }\n\n.topics li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n\n.topics li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em; }\n\n.topics a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block; }\n\n.topics a:hover {\n  color: #607D8B; }\n\n.topics .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px; }\n\nlabel {\n  display: inline-block;\n  margin: 0.5em 0;\n  color: #607D8B;\n  font-weight: bold; }\n\ninput {\n  width: 25em;\n  height: 2em;\n  font-size: 1em;\n  padding-left: 0.4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2xhbmQvRGVza3RvcC9Qcm9ncmFtX0RldmVsb3BtZW50L2NsYXNzbGVyL2Zyb250ZW5kL3NyYy9hcHAvcHJvYmxlbS12aWV3L3Byb2JsZW0tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsY0FBYSxFQUFBOztBQUdmO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvYmxlbS12aWV3L3Byb2JsZW0tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIG1hcmdpbi10b3A6IDE7XG4gICAgcGFkZGluZy10b3A6IDE7XG4gICAgY29sb3I6ICMwMzliZTU7XG4gIH1cbiAgXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIG1hcmdpbi10b3A6IDE7XG4gICAgcGFkZGluZy10b3A6IDE7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cbiAgXG4gIHA6aG92ZXIge1xuICAgIGNvbG9yOiAjODg4O1xuICB9XG4gIFxuICAudG9waWNzIHtcbiAgICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMzBlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC50b3BpY3MgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgICBtYXJnaW46IC41ZW07XG4gICAgcGFkZGluZzogLjNlbSAwO1xuICAgIGhlaWdodDogMS42ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gICBcbiAgLnRvcGljcyBsaTpob3ZlciB7XG4gICAgY29sb3I6ICM2MDdEOEI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgICBsZWZ0OiAuMWVtO1xuICB9XG4gICBcbiAgLnRvcGljcyBhIHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgfVxuICAgXG4gIC50b3BpY3MgYTpob3ZlciB7XG4gICAgY29sb3I6IzYwN0Q4QjtcbiAgfVxuICAgXG4gIC50b3BpY3MgLmJhZGdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgdG9wOiAtNHB4O1xuICAgIGhlaWdodDogMS44ZW07XG4gICAgbWluLXdpZHRoOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgfVxuICBcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAuNWVtIDA7XG4gICAgY29sb3I6ICM2MDdEOEI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgaW5wdXQge1xuICAgIHdpZHRoOiAyNWVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogMC40ZW07XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/problem-view/problem-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/problem-view/problem-view.component.ts ***!
  \********************************************************/
/*! exports provided: ProblemViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemViewComponent", function() { return ProblemViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _problem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../problem.service */ "./src/app/problem.service.ts");



var ProblemViewComponent = /** @class */ (function () {
    function ProblemViewComponent(problemService) {
        this.problemService = problemService;
    }
    ProblemViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.problemService.getProblemInfos()
            .subscribe(function (infos) { return _this.allProblems = _this.selectedProblems = infos; });
        this.searchStr = "";
    };
    ProblemViewComponent.prototype.onSelect = function (subtopic) {
    };
    ProblemViewComponent.prototype.onKey = function (event) {
        this.searchStr = event.target.value.toLowerCase();
        if (this.searchStr != "") {
            this.selectedProblems = [];
            for (var i in this.allProblems) {
                if (this.allProblems[i].name.toLowerCase().match(this.searchStr) || this.allProblems[i].id.toString().startsWith(this.searchStr)) {
                    this.selectedProblems.push(this.allProblems[i]);
                }
            }
        }
        else {
            this.selectedProblems = this.allProblems;
        }
        this.noMatched = this.selectedProblems.length == 0;
    };
    ProblemViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-problem-view',
            template: __webpack_require__(/*! ./problem-view.component.html */ "./src/app/problem-view/problem-view.component.html"),
            styles: [__webpack_require__(/*! ./problem-view.component.scss */ "./src/app/problem-view/problem-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_problem_service__WEBPACK_IMPORTED_MODULE_2__["ProblemService"]])
    ], ProblemViewComponent);
    return ProblemViewComponent;
}());



/***/ }),

/***/ "./src/app/problem.service.ts":
/*!************************************!*\
  !*** ./src/app/problem.service.ts ***!
  \************************************/
/*! exports provided: ProblemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemService", function() { return ProblemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_problem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-problem */ "./src/app/mock-problem.ts");




var ProblemService = /** @class */ (function () {
    function ProblemService() {
    }
    ProblemService.prototype.getProblemInfos = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_problem__WEBPACK_IMPORTED_MODULE_3__["MOCKPROBLEMS"].map(function (el) { return el.info; }));
    };
    ProblemService.prototype.getProblem = function (name) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_problem__WEBPACK_IMPORTED_MODULE_3__["MOCKPROBLEMS"].find(function (item) { return item.info.name === name; }));
    };
    ProblemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProblemService);
    return ProblemService;
}());



/***/ }),

/***/ "./src/app/signup-popup/signup-popup.component.html":
/*!**********************************************************!*\
  !*** ./src/app/signup-popup/signup-popup.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signup-popup works!\n</p>\n"

/***/ }),

/***/ "./src/app/signup-popup/signup-popup.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/signup-popup/signup-popup.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1wb3B1cC9zaWdudXAtcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signup-popup/signup-popup.component.ts":
/*!********************************************************!*\
  !*** ./src/app/signup-popup/signup-popup.component.ts ***!
  \********************************************************/
/*! exports provided: SignupPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPopupComponent", function() { return SignupPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupPopupComponent = /** @class */ (function () {
    function SignupPopupComponent() {
    }
    SignupPopupComponent.prototype.ngOnInit = function () {
    };
    SignupPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-popup',
            template: __webpack_require__(/*! ./signup-popup.component.html */ "./src/app/signup-popup/signup-popup.component.html"),
            styles: [__webpack_require__(/*! ./signup-popup.component.scss */ "./src/app/signup-popup/signup-popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupPopupComponent);
    return SignupPopupComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/roland/Desktop/Program_Development/classler/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map