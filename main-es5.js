function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/start/start.component */
    "./src/app/components/start/start.component.ts");
    /* harmony import */


    var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/skills/skills.component */
    "./src/app/components/skills/skills.component.ts");
    /* harmony import */


    var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/projects/projects.component */
    "./src/app/components/projects/projects.component.ts");
    /* harmony import */


    var _components_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/certificates/certificates.component */
    "./src/app/components/certificates/certificates.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'source';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 42,
      vars: 0,
      consts: [["mode", "over", "closed", "", 1, "text-center"], ["sidenav", ""], [1, "display-4"], ["href", "#overview"], ["mat-raised-button", "", "color", "primary"], ["href", "#skills"], ["href", "#projects"], ["href", "#certificates"], ["mat-raised-button", "", "color", "primary", "id", "sidenavbutton", 1, "p-3", 3, "click"], [1, "container"], ["id", "overview"], ["id", "skills"], ["id", "projects"], ["id", "certificates"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Welcome to my Card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "my name is Robert and here you can find all sort of things i do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Click on the buttons to get to each section ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " or just scroll trough this page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Skills and Tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Certificates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "In case you want to learn more about me just write me an email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " or follow me and my works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "main", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-start", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-skills", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-projects", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-certificates", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _components_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _components_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_6__["CertificatesComponent"]],
      styles: ["mat-sidenav[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    min-width: 30vw;\r\n}\r\n\r\nmat-sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n}\r\n\r\nmat-sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n}\r\n\r\nmat-sidenav-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\n#sidenavbutton[_ngcontent-%COMP%] {\r\n    writing-mode: vertical-lr;\r\n    -webkit-text-orientation: upright;\r\n            text-orientation: upright;\r\n    float: left;\r\n    position: fixed;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztBQUNYOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwdnc7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxubWF0LXNpZGVuYXYgbGkge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jc2lkZW5hdmJ1dHRvbiB7XHJcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgdGV4dC1vcmllbnRhdGlvbjogdXByaWdodDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _components_start_start_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/start/start.component */
    "./src/app/components/start/start.component.ts");
    /* harmony import */


    var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/projects/projects.component */
    "./src/app/components/projects/projects.component.ts");
    /* harmony import */


    var _components_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/certificates/certificates.component */
    "./src/app/components/certificates/certificates.component.ts");
    /* harmony import */


    var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/skills/skills.component */
    "./src/app/components/skills/skills.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_start_start_component__WEBPACK_IMPORTED_MODULE_11__["StartComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"], _components_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_13__["CertificatesComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_start_start_component__WEBPACK_IMPORTED_MODULE_11__["StartComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"], _components_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_13__["CertificatesComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/certificates/certificates.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/certificates/certificates.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CertificatesComponent */

  /***/
  function srcAppComponentsCertificatesCertificatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CertificatesComponent", function () {
      return CertificatesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _certificates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./certificates */
    "./src/app/components/certificates/certificates.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CertificatesComponent_mat_grid_tile_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var certificate_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("cert-container ", certificate_r1.category, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "../../../assets/Zertifikate/", certificate_r1.category, "/", certificate_r1.title, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](certificate_r1.title);
      }
    }

    var CertificatesComponent = /*#__PURE__*/function () {
      function CertificatesComponent() {
        _classCallCheck(this, CertificatesComponent);

        this.certificates = _certificates__WEBPACK_IMPORTED_MODULE_1__["CERTIFICATES"];
      }

      _createClass(CertificatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CertificatesComponent;
    }();

    CertificatesComponent.ɵfac = function CertificatesComponent_Factory(t) {
      return new (t || CertificatesComponent)();
    };

    CertificatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CertificatesComponent,
      selectors: [["app-certificates"]],
      decls: 17,
      vars: 1,
      consts: [[1, "content-container", "bg-info", "text-white", 2, "border-radius", "20px"], [1, "my-3", "text-center"], [2, "color", "#ffffff"], [2, "color", "#020077"], [1, "mb-5", "lead", "text-center"], ["cols", "4", "rowHeight", "1:1"], [3, "class", 4, "ngFor", "ngForOf"], ["id", "myModal", 1, "modal"], [1, "close"], ["id", "modalImage1", 1, "modal-content"], [1, "cert-img", 3, "src"], [1, "overlay"]],
      template: function CertificatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ertifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\"What is a piece of paper else a note in time?\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-list", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CertificatesComponent_mat_grid_tile_12_Template, 4, 6, "mat-grid-tile", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certificates);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"]],
      styles: [".cert-img[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    background: rgb(0, 0, 0);\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: #f1f1f1;\r\n    width: 100%;\r\n    transition: .5s ease;\r\n    opacity: 0;\r\n    color: white;\r\n    font-size: 15px;\r\n    padding: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.cert-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: none;\r\n    \r\n    position: fixed;\r\n    \r\n    z-index: 1;\r\n    \r\n    padding-top: 100px;\r\n    \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    \r\n    height: 100%;\r\n    \r\n    overflow: auto;\r\n    \r\n    background-color: rgb(0, 0, 0);\r\n    \r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    \r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: block;\r\n    width: 80%;\r\n    max-width: 700px;\r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%], #caption[_ngcontent-%COMP%] {\r\n    -webkit-animation-name: zoom;\r\n    -webkit-animation-duration: 0.6s;\r\n    animation-name: zoom;\r\n    animation-duration: 0.6s;\r\n}\r\n\r\n@-webkit-keyframes zoom {\r\n    from {\r\n        -webkit-transform: scale(0)\r\n    }\r\n    to {\r\n        -webkit-transform: scale(1)\r\n    }\r\n}\r\n\r\n@keyframes zoom {\r\n    from {\r\n        transform: scale(0)\r\n    }\r\n    to {\r\n        transform: scale(1)\r\n    }\r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 35px;\r\n    color: #f1f1f1;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    transition: 0.3s;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: #bbb;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jZXJ0aWZpY2F0ZXMvY2VydGlmaWNhdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxxQkFBcUI7QUFDekI7O0FBR0EsMEJBQTBCOztBQUUxQjtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFHQSxrQkFBa0I7O0FBRWxCOztJQUVJLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0FBQ0o7O0FBR0EscUJBQXFCOztBQUVyQjtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NlcnRpZmljYXRlcy9jZXJ0aWZpY2F0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZXJ0LWltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNlcnQtY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICAgIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQgKGltYWdlKSAqL1xyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxufVxyXG5cclxuXHJcbi8qIEFkZCBBbmltYXRpb24gKi9cclxuXHJcbi5tb2RhbC1jb250ZW50LFxyXG4jY2FwdGlvbiB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgICBhbmltYXRpb24tbmFtZTogem9vbTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb20ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApXHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApXHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG5cclxuLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHJpZ2h0OiAzNXB4O1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-certificates',
          templateUrl: './certificates.component.html',
          styleUrls: ['./certificates.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/certificates/certificates.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/certificates/certificates.ts ***!
    \*********************************************************/

  /*! exports provided: CERTIFICATES */

  /***/
  function srcAppComponentsCertificatesCertificatesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CERTIFICATES", function () {
      return CERTIFICATES;
    });

    var CERTIFICATES = [{
      title: "Full Stack WebDev",
      category: "adv"
    }, {
      title: "Responsive WebDesign",
      category: "adv"
    }, {
      title: "HTML5 Champion",
      category: "adv"
    }, {
      title: "Advanced SQL Analytics",
      category: "adv"
    }, {
      title: "DSGVO Certified",
      category: "adv"
    }, {
      title: "MySQl for Data Analysis",
      category: "adv"
    }, {
      title: "Basic HTML",
      category: "web"
    }, {
      title: "CakePHP",
      category: "web"
    }, {
      title: "Dynamic Web Forms with validation",
      category: "web"
    }, {
      title: "GitHub Grundlagen",
      category: "web"
    }, {
      title: "HTML5",
      category: "web"
    }, {
      title: "HTML Bootcamp",
      category: "web"
    }, {
      title: "Web Development Crash Course",
      category: "web"
    }, {
      title: "HTML5 and CSS3",
      category: "web"
    }, {
      title: "InfiniteScroll AJAX",
      category: "web"
    }, {
      title: "Landing Page Hacks",
      category: "web"
    }, {
      title: "HTML5 and CSS3 by Coding",
      category: "web"
    }, {
      title: "Learn HTML5",
      category: "web"
    }, {
      title: "Make Ecommerce Website Front-End",
      category: "web"
    }, {
      title: "PHP&MySQL",
      category: "web"
    }, {
      title: "PSD Frontend",
      category: "web"
    }, {
      title: "Telegram Bot with Python",
      category: "web"
    }, {
      title: "XHTML-01",
      category: "web"
    }, {
      title: "XHTML-02",
      category: "web"
    }, {
      title: "XHTML-03",
      category: "web"
    }, {
      title: "XHTML-04",
      category: "web"
    }, {
      title: "XHTML-05",
      category: "web"
    }, {
      title: "XHTML-06",
      category: "web"
    }, {
      title: "XHTML-07",
      category: "web"
    }, {
      title: "Yii PHP Framework",
      category: "web"
    }, {
      title: "Amazon FBA",
      category: "other"
    }, {
      title: "eBay Dropshipping",
      category: "other"
    }, {
      title: "Exel 2010 Productivity",
      category: "other"
    }, {
      title: "Godot Game Engine",
      category: "other"
    }, {
      title: "Google Sheets",
      category: "other"
    }, {
      title: "Google Docs",
      category: "other"
    }, {
      title: "Grundlagen Vermögensverwaltung",
      category: "other"
    }, {
      title: "Landschaftsfotografie",
      category: "other"
    }, {
      title: "Microsoft Exel Pivot",
      category: "other"
    }, {
      title: "Startup & Business",
      category: "other"
    }, {
      title: "Visual Studio Code Hacks",
      category: "other"
    }, {
      title: "Robocup 2014",
      category: "robotic"
    }, {
      title: "Robocup 2015",
      category: "robotic"
    }, {
      title: "Robocup 2016",
      category: "robotic"
    }, {
      title: "Robotik",
      category: "robotic"
    }, {
      title: "Mechatronik Seminar",
      category: "robotic"
    }, {
      title: "146. Jugend Presse Kongress",
      category: "newspaper"
    }, {
      title: "150. Jugend Presse Kongress",
      category: "newspaper"
    }, {
      title: "Multimedia Workshop",
      category: "newspaper"
    }];
    /***/
  },

  /***/
  "./src/app/components/projects/projects.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/projects/projects.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppComponentsProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./projects */
    "./src/app/components/projects/projects.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ProjectsComponent_div_22_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProjectsComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_22_a_8_Template, 3, 1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.link);
      }
    }

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);

        this.projects = _projects__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"];
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 23,
      vars: 1,
      consts: [[1, "content-container", "bg-info", "text-white", 2, "border-radius", "20px"], [1, "my-3", "text-center"], [1, "text-muted"], [2, "color", "#ffffff"], [2, "color", "#020077"], [1, "mb-5", "lead", "text-center"], ["class", "project row", 4, "ngFor", "ngForOf"], [1, "project", "row"], [1, "col-12", "col-md-3"], [1, "col-12", "col-md-8"], [1, "col-12", "col-md-1"], [3, "href", 4, "ngIf"], [1, "col-9", "py-4", "m-auto"], [3, "href"], ["color", "accent"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "rojects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "and");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "W");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "orks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\"Do what you love and work is a hobby\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectsComponent_div_22_Template, 10, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: [".project-folder[_ngcontent-%COMP%] {\r\n    background-color: #8cf5f5;\r\n    color: #1e3332;\r\n    border: 1px solid grey;\r\n}\r\n\r\n.project-head[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    background-color: #548f8f;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWZvbGRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGNmNWY1O1xyXG4gICAgY29sb3I6ICMxZTMzMzI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG4ucHJvamVjdC1oZWFkIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ4ZjhmO1xyXG59XHJcblxyXG4ucHJvamVjdCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/projects/projects.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/projects/projects.ts ***!
    \*************************************************/

  /*! exports provided: PROJECTS */

  /***/
  function srcAppComponentsProjectsProjectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PROJECTS", function () {
      return PROJECTS;
    });

    var PROJECTS = [{
      title: "RoboCup participants",
      description: "With a team up to four we build and programmed multiple robots to play football against each other or 2v2.With much fun and learning we worked together for several years and remain our friendships.",
      link: "https://robocupgermanopen.de/de/junior/soccer"
    }, {
      title: "Student newspaper",
      description: "A bit late i joined the schools newspaper and ranked up quickly with articles and proofleading.",
      link: "https://passwort-sz.jimdofree.com/"
    }, {
      title: "UNIKAT",
      description: "My first club at University of Ilmenau: UNIKAT, the makerspace for students and scholars.Here i worked for nearly three years on 3d - printers, CNC - milling - machines and much more.Each semester we also made a workshop week and gave our knowledge to further students.I retired at the end of 2019 but am still visiting and sometimes working there.",
      link: "https://www.tu-ilmenau.de/unikat"
    }, {
      title: "Robocup Volunteer",
      description: "After school my university didn't have a robotics contest so i am currently volunteering as referee and helping hand for the organizers.",
      link: "https://robocupgermanopen.de/de"
    }, {
      title: "Engineers without borders ",
      description: "Who are we? Engineering students! What are we doing ? Helping other people! As some of us are planning and working on projects down in africa i am responsible for the repair cafe to keep things running.",
      link: "https://ingenieure-ohne-grenzen.org/de/ilmenau"
    }, {
      title: "Python Intro",
      description: "I am programming for many years now and want to start making cheatsheets and introductions to several programming languages.Python wasn't my first language but i think is for most the easiest to begin with. Therefor i started this Project on Github.",
      link: "https://github.com/wieerwill/Python-Intro"
    }, {
      title: "BI Student Club",
      description: "Mainly because of the music i joined this club on my campus.With good old(and new) metal and rock we got some of the hardest partys and best members you can imageine.After some time i am one of our head technicans.Currently i am responsible for our cultural programm and association communication.",
      link: "http://www.bi-club.de"
    }, {
      title: "Project management",
      description: "Working with a team you get to know that nobody has that much of a overview what tools you can use to work and participate.This bilingual sheet is a short overview of tools and programms to make your cooperations and projects easier.",
      link: "https://github.com/wieerwill/Project-Management"
    }, {
      title: "Business card",
      description: "You want to be seen and show people what you do? This page is an example of my business card project.Feel free to use it for your own.A description on how to get free webspace included.",
      link: "https://github.com/wieerwill/wieerwill.github.io"
    }, {
      title: "NodeJS Boilerplate",
      description: "Start your NodeJS Project today with my simple but structured boilerplate.Don't get anything confused with this organized project map and documentation.",
      link: "https://github.com/wieerwill/nodejs-boilerplate"
    }, {
      title: "Discord Bot",
      description: "With corona virus pandemia we shipped our weekly club meeting to discord.For management, fun and more interactivity we created a discord bot with several functions.",
      link: null
    }];
    /***/
  },

  /***/
  "./src/app/components/skills/skills.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/skills/skills.component.ts ***!
    \*******************************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppComponentsSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./skills */
    "./src/app/components/skills/skills.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SkillsComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r1.name, "\xA0");
      }
    }

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);

        this.skills = _skills__WEBPACK_IMPORTED_MODULE_1__["SKILLS"];
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 21,
      vars: 1,
      consts: [[1, "content-container", "bg-info", "text-white", 2, "border-radius", "20px"], [1, "my-3", "display-1", "text-center"], [2, "color", "#ffffff"], [2, "color", "#020077"], [1, "text-muted"], [1, "mb-5", "lead", "text-center"], ["class", "float-left", 4, "ngFor", "ngForOf"], [1, "float-left"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "kills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "&");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "T");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "With the right kind of tools, everything is possible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "This List will be beautified soon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SkillsComponent_div_20_Template, 3, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/skills/skills.ts":
  /*!*********************************************!*\
    !*** ./src/app/components/skills/skills.ts ***!
    \*********************************************/

  /*! exports provided: SKILLS */

  /***/
  function srcAppComponentsSkillsSkillsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SKILLS", function () {
      return SKILLS;
    });

    var SKILLS = [{
      name: "Inkscape",
      kategory: "Grafik",
      logo: "incscape.jpg",
      link: "https://inkscape.org",
      description: "Das Vector-Grafikprogramm Inkscape ist ein Open-Source-Zeichenprogramm mit dem Logos, Banner, Poster und vieles mehr entworfen werden können. Das Programm ist zum SVG-Format kompatibel, kann aber auch EPS-, Postscript-, JPG-, PNG-, BMP- oder TIF-Bilder importieren und nach PNG oder anderen vektorbasierten Formaten exportieren. Sogar Direktbearbeitung von XML-Codes im XML-Editor ist möglich."
    }, {
      name: "GIMP",
      kategory: "Grafik",
      logo: "gimp.jpg",
      link: "https://www.gimp.org",
      description: "GIMP (GNU Image Manipulation Program) ist ein pixelbasiertes Grafikprogramm, das Funktionen zur Bildbearbeitung und zum digitalen Malen von Rastergrafiken beinhaltet. GIMP unterstützt mehr als dreißig Dateiformate."
    }, {
      name: "Adobe Photoshop",
      kategory: "Grafik",
      logo: "photoshop.jpg",
      link: "https://www.adobe.com/de/products/photoshop.html",
      description: "Adobe Photoshop ist ein Bildbearbeitungsprogramm für Pixelgrafiken des US-amerikanischen Softwarehauses Adobe Inc. Im Bereich der Bildbearbeitung und Druckvorstufe ist das Programm Weltmarktführer und marktbeherrschend."
    }, {
      name: "Blender",
      kategory: "Grafik",
      logo: "blender.png",
      link: "https://www.blender.org",
      description: "Blender gehört zu den besten unter den Open-Source-Programmen, da sie kaum Wünsche offen lässt. Das Entwerfen und Modellieren von 3D-Objekten sowie Animationen ist kein Problem, sodass sich Blender für Videos, Bilder oder Games einsetzen lässt. An Funktionen bietet Blender unter anderem Objekt- und Figuren-Sculpting, Modellierung mit N-Gon- und Skript-Unterstützung, Rigging für die Bewegungsmöglichkeiten von Figuren, Animation mit Sound-Synchronisierung und automatisch oder individuell definierten Bewegungen. Komplexe Partikel-Simulationen, eine komplette Spiel-Engine sowie ein Videoschnitt- und Effekte-Tool ergänzen dies."
    }, {
      name: "OpenSCAD",
      kategory: "Grafik",
      logo: "openscad.jpg",
      link: "http://openscad.org",
      description: "In der freien CAD Software werden mit einer textbasierten Beschreibungssprache 3D-Modelle erzeugt. Die Objekte bestehen aus einfachen geometrischen Grundkörpern und werden mit Transformationen und Modifikationen zu einem komplexen 3D-Modell vereinigt. Die Modellierung basiert auf der CSG-Technik. Mit OpenSCAD können auch Animationen realisiert werden."
    }, {
      name: "Anime.js",
      kategory: "Grafik",
      logo: "animejs.gif",
      link: "https://animejs.com",
      description: "Anime.js ist eine leichtgewichtige JavaScript Animations Bibiliothek mit einer einfachen aber starken API. Mithilfe von CSS-Eigenschaften, SVG, DOM Attributen und Javascript Objekten können schnell komplexe Webseiten Animationen und bewegte Grafiken erstellt werden."
    }, {
      name: "HTML",
      kategory: "einfache Webseiten",
      logo: "html.png",
      link: "https://de.wikipedia.org/wiki/Hypertext_Markup_Language",
      description: "Die Hypertext Markup Language, abgekürzt HTML, ist eine textbasierte Auszeichnungssprache zur Strukturierung elektronischer Dokumente wie Texte mit Hyperlinks, Bildern und anderen Inhalten. HTML-Dokumente sind die Grundlage des World Wide Web und werden von Webbrowsern dargestellt."
    }, {
      name: "CSS",
      kategory: "einfache Webseiten",
      logo: "css.png",
      link: "https://de.wikipedia.org/wiki/Cascading_Style_Sheets",
      description: "Cascading Style Sheets, kurz CSS genannt, ist eine Stylesheet-Sprache für elektronische Dokumente und zusammen mit HTML und DOM eine der Kernsprachen des World Wide Webs."
    }, {
      name: "JavaScript",
      kategory: "einfache Webseiten",
      logo: "javascript.png",
      link: "https://de.wikipedia.org/wiki/JavaScript",
      description: "JavaScript ist eine Skriptsprache, die ursprünglich 1995 von Netscape für dynamisches HTML in Webbrowsern entwickelt wurde, um Benutzerinteraktionen auszuwerten, Inhalte zu verändern, nachzuladen oder zu generieren und so die Möglichkeiten von HTML und CSS zu erweitern. Heute findet JavaScript auch außerhalb von Browsern Anwendung, so etwa auf Servern und in Microcontrollern."
    }, {
      name: "Markdown",
      kategory: "einfache Webseiten",
      logo: "markdown.png",
      link: "https://markdown.de",
      description: "Markdown ist ein einfacher Syntax, um HTML-Code aus Textdokumenten zu generieren, angelehnt an die Formatierung von nur-Text E-Mails. Ein Ziel von Markdown ist, dass schon die Ausgangsform ohne weitere Konvertierung leicht lesbar ist."
    }, {
      name: "Bootstrap",
      kategory: "Frontend Technologien",
      logo: "bootstrap.jpg",
      link: "https://getbootstrap.com",
      description: "Bootstrap, ein umfangreiches und dennoch schlankes Mobile-First Frond-End-Framework für einfachere und schnellere Entwicklung im Web."
    }, {
      name: "Materialize",
      kategory: "Frontend Technologien",
      logo: "materialize.jpg",
      link: "https://materializecss.com",
      description: "Ein modernes responsives Front-End-Framework basierend auf dem Material Design"
    }, {
      name: "Semantic UI",
      kategory: "Frontend Technologien",
      logo: "semantic.png",
      link: "https://semantic-ui.com",
      description: "Semantic ist ein Entwicklung Framework das hilft schöne ansprechende Layouts mit menschenfreundlichem HTML zu erstellen. Prägnante HTML-Klassen verwenden Syntax aus natürlichen Sprachen wie Substantiv/Modifikator-Beziehungen, Wortfolge und Pluralität, um Konzepte intuitiv zu verbinden."
    }, {
      name: "React",
      kategory: "Frontend Technologien",
      logo: "react.png",
      link: "https://reactjs.org",
      description: "React ist eine JavaScript-Softwarebibliothek, die ein Grundgerüst für die Ausgabe von User-Interface-Komponenten von Webseiten zur Verfügung stellt."
    }, {
      name: "Angular",
      kategory: "Frontend Technologien",
      logo: "angular.png",
      link: "https://angular.io",
      description: "Angular ist ein TypeScript-basiertes Front-End-Webapplikationsframework. Erreichen Sie die maximale Geschwindigkeit, die auf der Webplattform heute möglich ist, und bringen Sie sie mit Hilfe von Web Workern und serverseitigem Rendering weiter."
    }, {
      name: "SQL",
      kategory: "Backend Technologien",
      logo: "sql.png",
      link: "https://de.wikipedia.org/wiki/SQL",
      description: "SQL ist eine Datenbanksprache zur Definition von Datenstrukturen in relationalen Datenbanken sowie zum Bearbeiten und Abfragen von darauf basierenden Datenbeständen. MySQL und NoSQL sind zwei der weltweit verbreitetsten relationalen Datenbankverwaltungssysteme."
    }, {
      name: "MongoDB",
      kategory: "Backend Technologien",
      logo: "mongodb.png",
      link: "https://www.mongodb.com",
      description: "MongoDB ist eine dokumentenorientierte NoSQL-Datenbank, die in der Programmiersprache C++ geschrieben ist. Da die Datenbank dokumentenorientiert ist, kann sie Sammlungen von JSON-ähnlichen Dokumenten verwalten."
    }, {
      name: "PHP",
      kategory: "Backend Technologien",
      logo: "php.png",
      link: "https://php.net",
      description: "PHP ist eine Skriptsprache mit einer an C und Perl angelehnten Syntax, die hauptsächlich zur Erstellung dynamischer Webseiten oder Webanwendungen verwendet wird. PHP wird als freie Software unter der PHP-Lizenz verbreitet. NorthScorp verwendet sowohl PHP Version 5 und Version 7 und neben selbst entwickelten Frameworks auch Laravel."
    }, {
      name: "NodeJs",
      kategory: "Backend Technologien",
      logo: "nodejs.jpg",
      link: "https://nodejs.org",
      description: "Node.js ist eine serverseitige Plattform in der Softwareentwicklung zum Betrieb von Netzwerkanwendungen. Insbesondere lassen sich Webserver damit realisieren."
    }, {
      name: "Django",
      kategory: "Backend Technologien",
      logo: "django.png",
      link: "https://www.djangoproject.com",
      description: "Django ist ein hochleveliges Python Web-Framework, das eine schnelle Entwicklung und ein sauberes, pragmatisches Design fördert. Von erfahrenen Programmieren entwickelt, kümmert es sich um einen Großteil des Ärgers der Webentwicklung, so dass wir uns auf das Schreiben Ihrer App konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source."
    }, {
      name: "GatsbyJS",
      kategory: "Backend Technologien",
      logo: "gatsby.png",
      link: "https://www.gatsbyjs.org",
      description: "GatsbyJS wurde im Mai 2015 als einfacher Weg geboren, um eine Website mit React zu erstellen. In den letzten drei Jahren haben Zehntausende von Entwicklern Gatsby genutzt, um Websites von Blogs und Portfolio-Seiten über Firmenhomepages bis hin zu E-Commerce-Anwendungen zu erstellen."
    }, {
      name: "Magento",
      kategory: "Shop Systeme",
      logo: "magento.jpg",
      link: "https://magento.com",
      description: "Magento ist eine Onlineshop-Software und wurde 2008 als Open-Source-E-Commerce-Plattform veröffentlicht. Magento wird auf 1,3 % aller Websites eingesetzt und ist damit die meistverwendete reine Onlineshopsoftware."
    }, {
      name: "OpenCart",
      kategory: "Shop Systeme",
      logo: "opencart.jpg",
      link: "https://www.opencart.com",
      description: "Der OpenCart Marktplatz bietet über 13000 Module und Themen, um Ihren Shop zu starten, zu wachsen und zu erweitern. Hier finden Sie schöne Themen für nahezu jede Branche, Service Integrationen, Zahlungsanbieter, Versandarten, Social Media, Marketing, Buchhaltung, Reporting, Vertrieb sowie Sprachpakete."
    }, {
      name: "PayPal",
      kategory: "Shop Systeme",
      logo: "paypal.png",
      link: "https://paypal.com",
      description: "PayPal ist ein börsennotierter Betreiber eines Online-Bezahldienstes, der zur Begleichung von Mittel- und Kleinbeträgen zum Beispiel beim Ein- und Verkauf im Online-Handel genutzt werden kann."
    }, {
      name: "WooCommerce",
      kategory: "Shop Systeme",
      logo: "woo.png",
      link: "https://woocommerce.com/",
      description: "WooCommerce ist ein freies Plug-in für WordPress, welches das Content-Management-System um die Funktionalität eines Onlineshops ergänzt. Es wurde insgesamt mehr als 15 Millionen Mal heruntergeladen."
    }, {
      name: "C",
      kategory: "Programmieren",
      logo: "code_c.png",
      link: "https://de.wikipedia.org/wiki/C_(Programmiersprache)",
      description: "C ist eine imperative und prozedurale Programmiersprache, die der Informatiker Dennis Ritchie in den frühen 1970er Jahren an den Bell Laboratories entwickelte. Seitdem ist sie eine der am weitesten verbreiteten Programmiersprachen."
    }, {
      name: "C++",
      kategory: "Programmieren",
      logo: "c++.jpg",
      link: "https://de.wikipedia.org/wiki/C%2B%2B",
      description: "C++ ermöglicht sowohl die effiziente und maschinennahe Programmierung als auch eine Programmierung auf hohem Abstraktionsniveau. Der Standard definiert auch eine Standardbibliothek, zu der verschiedene Implementierungen existieren."
    }, {
      name: "C#",
      kategory: "Programmieren",
      logo: "code_csharp.jpg",
      link: "https://de.wikipedia.org/wiki/C-Sharp",
      description: "C# ist eine typsichere, objektorientierte Allzweck-Programmiersprache. Die Sprache ist an sich plattformunabhängig, wurde aber im Rahmen der .NET-Strategie entwickelt, ist auf diese optimiert und meist in deren Kontext zu finden."
    }, {
      name: "Java",
      kategory: "Programmieren",
      logo: "java.jpg",
      link: "https://de.wikipedia.org/wiki/Java_(Programmiersprache)",
      description: "Die Programmiersprache Java dient innerhalb der Java-Technologie vor allem zum Formulieren von Programmen. Der Java-Compiler, der Teil des Entwicklungswerkzeugs ist, übersetzt dem Programm Quellcode in den maschinenverständlichen Java-Bytecode um ihn später auszuführen."
    }, {
      name: "Phyton",
      kategory: "Programmieren",
      logo: "phyton.jpg",
      link: "https://www.python.org",
      description: "Python ist eine dynamische, objektorientierte Programmiersprache für Skripte und Rapid Application Development. Python bietet einen umfangreichen Support für die Integration anderer Sprachen sowie Tools und enthält zahlreiche Standard-Bibliotheken."
    }];
    /***/
  },

  /***/
  "./src/app/components/start/start.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/start/start.component.ts ***!
    \*****************************************************/

  /*! exports provided: StartComponent */

  /***/
  function srcAppComponentsStartStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
      return StartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var StartComponent = /*#__PURE__*/function () {
      function StartComponent() {
        _classCallCheck(this, StartComponent);
      }

      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StartComponent;
    }();

    StartComponent.ɵfac = function StartComponent_Factory(t) {
      return new (t || StartComponent)();
    };

    StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StartComponent,
      selectors: [["app-start"]],
      decls: 115,
      vars: 0,
      consts: [[1, "content-container", "bg-info", "text-white", 2, "border-radius", "20px"], [1, "my-3", "display-1", "text-center"], [2, "color", "#ffffff"], [2, "color", "#020077"], [1, "mb-5", "lead", "text-center"], [1, "row"], [1, "col-md-3"], ["src", "../../../assets/pic.png", "alt", "ProfilBild", 1, "card-image"], [1, "col-md-5"], [1, "card-text", "mx-3"], ["href", "http://www.tu-ilmenau.de"], ["href", "https://www.bi-club.de"], ["href", "https://ingenieure-ohne-grenzen.org/"], ["href", "https://www.northscorp.de"], ["href", "https://www.robocup.org/"], [1, "col-md-4"], [1, "mb-3", "text-center"], ["id", "pro", 1, "text-center"], [1, "imgcent", "text-center", "text-muted"], ["id", "pro1", 1, "show_first"], ["data-period", "2000", "data-rotate", "[ \"C\", \"C#\", \"C++\", \"Python\", \"Java\" ]", 1, "txt-rotate"], ["id", "pro2", 1, "show_hover", "text-center", "m-auto"], ["src", "../../../assets/icons/code_c.png", "alt", "C", 1, "skill", "mx-1"], ["src", "../../../assets/icons/code_csharp.png", "alt", "C#", 1, "skill", "mx-1"], ["src", "../../../assets/icons/c++.png", "alt", "C++", 1, "skill", "mx-1"], ["src", "../../../assets/icons/Python.png", "alt", "Phyton", 1, "skill", "mx-1"], ["src", "../../../assets/icons/java.png", "alt", "Java", 1, "skill", "mx-1"], ["id", "full", 1, "text-center"], ["id", "full1", 1, "show_first"], ["data-period", "2000", "data-rotate", "[ \"HTML5\", \"CSS\", \"JavaScript\", \"PHP\", \"NodeJS\", \"SQL\", \"MongoDB\" ]", 1, "txt-rotate"], ["id", "full2", 1, "show_hover", "text-center", "m-auto"], ["src", "../../../assets/icons/html.png", "alt", "HTML5", 1, "skill", "mx-1"], ["src", "../../../assets/icons/css.png", "alt", "CSS", 1, "skill", "mx-1"], ["src", "../../../assets/icons/javascript.png", "alt", "JavaScript", 1, "skill", "mx-1"], ["src", "../../../assets/icons/php.png", "alt", "PHP", 1, "skill", "mx-1"], ["src", "../../../assets/icons/nodejs.png", "alt", "NodeJS", 1, "skill", "mx-1"], ["src", "../../../assets/icons/sql.png", "alt", "SQL", 1, "skill", "mx-1"], ["src", "../../../assets/icons/mongodb.png", "alt", "MongoDB", 1, "skill", "mx-1"], ["id", "cad", 1, "text-center"], ["id", "cad1", 1, "show_first"], ["data-period", "2000", "data-rotate", "[ \"Inventor\", \"OpenSCAD\", \"Photoshop\", \"Gimp\", \"Bootstrap\" ]", 1, "txt-rotate"], ["id", "cad2", 1, "show_hover", "text-center", "m-auto"], ["src", "../../../assets/icons/Inventor.png", "alt", "Inventor", 1, "skill", "mx-1"], ["src", "../../../assets/icons/openscad.png", "alt", "OpenSCAD", 1, "skill", "mx-1"], ["src", "../../../assets/icons/photoshop.png", "alt", "Photoshop", 1, "skill", "mx-1"], ["src", "../../../assets/icons/gimp.png", "alt", "Gimp", 1, "skill", "mx-1"], ["src", "../../../assets/icons/bootstrap.png", "alt", "Bootstrap", 1, "skill", "mx-1"], [1, "text-center"], [1, "list-inline-item", "justify-content-around"], [1, "list-inline-item", "mx-3"], ["href", "mailto:jeutter@northscorp.de", "target", "_blank", "matTooltip", "E-Mail", "matTooltipPosition", "above"], ["href", "http://www.github.com/wieerwill", "target", "_blank", "matTooltip", "Github", "matTooltipPosition", "above"], ["href", "http://www.northscorp.de", "target", "_blank", "matTooltip", "NorthScorp", "matTooltipPosition", "above"], ["href", "http://www.tu-ilmenau.de", "target", "_blank", "matTooltip", "University", "matTooltipPosition", "above"], ["href", "https://www.udemy.com/user/robert-jeutter/", "target", "_blank", "matTooltip", "Udemy", "matTooltipPosition", "above"], ["href", "https://www.freecodecamp.org/robert-jeutter", "target", "_blank", "matTooltip", "FreeCodeCamp", "matTooltipPosition", "above"], ["href", "https://www.instagram.com/northscorp/", "target", "_blank", "matTooltip", "Instagram", "matTooltipPosition", "above"]],
      template: function StartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "obert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "J");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "eutter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Inventor \xB7 Entrepreneur \xB7 Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Welcome to my Card,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " currently I am studying at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Technical University of Ilmenau");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " in the fields of Computer Sience and Biomechatronics.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " In addition i am an active member of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "student club");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Engineers without Borders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " and building up my own business ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "NorthScorp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " My Hobbies include Programming, building Robots ever since my ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "RoboCup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Qualifications and electromechanical Machines. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Skilltree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Progamming ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Web Development ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "CAD, Graphic & Design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-card-actions", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ul", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "science");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "school");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "cast_for_education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "emoji_people");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: [".skill[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n}\r\n\r\n.show_first[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.show_hover[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.card-image[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-height: 80%;\r\n    max-width: 80%;\r\n    border-radius: 20%;\r\n    border-style: solid;\r\n}\r\n\r\n.card-image[_ngcontent-%COMP%]:hover {\r\n    transform: scaleX(-1);\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n    text-transform: uppercase;\r\n    color: #b3b3b3;\r\n    font-weight: 600;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #2fff00;\r\n    text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFydC9zdGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBRUkscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbCB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5zaG93X2ZpcnN0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2hvd19ob3ZlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2FyZC1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4uY2FyZC1pbWFnZTpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjYjNiM2IzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogIzJmZmYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-start',
          templateUrl: './start.component.html',
          styleUrls: ['./start.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\NorthScorp\20_Webseiten\60_github\wieerwill.github.io\source\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map