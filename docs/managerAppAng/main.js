(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alejandro_caputto/Documents/fullstack-education/proyectos/manager-app/managerAppAng/src/main.ts */"zUnb");


/***/ }),

/***/ "0/JQ":
/*!**********************************************************!*\
  !*** ./src/app/manager-app/pages/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_manager_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/manager-app.service */ "XpIn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = ["refModal"];
const _c1 = ["refOverlay"];
const _c2 = ["refModalInput"];
const _c3 = function () { return ["/v2/manager-app/home/workspaces"]; };
const _c4 = function () { return ["/v2/manager-app/home/search"]; };
const _c5 = function () { return ["/v2/manager-app/home/add"]; };
class HomeComponent {
    constructor(managerApp) {
        this.managerApp = managerApp;
        // this.getWorkspaces(`Bearer ${localStorage.getItem('bearer-todo')}`);
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_app_service__WEBPACK_IMPORTED_MODULE_1__["ManagerAppService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalInput = _t.first);
    } }, decls: 19, vars: 6, consts: [[1, "section-home"], [1, "main-dashboard"], [1, "main-content-dashboard"], [1, "sidebar"], [1, "sidebar-nav"], [1, "sidebar-nav__item"], ["routerLinkActive", "router-link-active", 1, "sidebar-nav__link", 3, "routerLink"], [1, "dashboard-outlet"], [1, "router__outlet"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "WORKSPACES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "FILTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ADD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "0zEo":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 2, vars: 0, template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "modal works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "22Ev":
/*!******************************************************************************!*\
  !*** ./src/app/manager-app/pages/workspaces-all/workspaces-all.component.ts ***!
  \******************************************************************************/
/*! exports provided: WorkspacesAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspacesAllComponent", function() { return WorkspacesAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_manager_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/manager-app.service */ "XpIn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function WorkspacesAllComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Manager App is a simple project that i've developed to put in practise different tecnologies and frameworks like Node, MongoDB, NoSql, Express, Mongoose, JavaScript, TypeScript, Angular & React. Please play around, the app is responsive and is connected to my API. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Adding a Workspace");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Create or click on a workspace if you have already created one. It will redirect you to your new Space. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "On your new Workspace");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " You can add cards. These cards works as an individual to do list. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " You can delete them, update them. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" WELCOME ", ctx_r0.user.name, ", ");
} }
const _c0 = function (a1) { return ["/v2/manager-app/workspace", a1]; };
function WorkspacesAllComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const space_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, space_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](space_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", space_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class WorkspacesAllComponent {
    constructor(managerAppService) {
        this.managerAppService = managerAppService;
        this.getWorkspaces();
    }
    get user() {
        return this.managerAppService._authenticatedUser;
    }
    get userId() {
        return this.managerAppService._authenticatedUser._id;
    }
    get workspaces() {
        return this.managerAppService._workspaces;
    }
    ngOnInit() {
    }
    getWorkspaces() {
        this.managerAppService.getWorkspace().subscribe((resp) => {
            this.managerAppService._workspaces = resp.workspace;
            // console.log(resp.workspace)
        }, (err) => {
            console.log(err);
        });
    }
}
WorkspacesAllComponent.ɵfac = function WorkspacesAllComponent_Factory(t) { return new (t || WorkspacesAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_app_service__WEBPACK_IMPORTED_MODULE_1__["ManagerAppService"])); };
WorkspacesAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkspacesAllComponent, selectors: [["app-workspaces-all"]], decls: 3, vars: 2, consts: [[1, "grid__workspace"], ["class", "workspace-empty", 4, "ngIf"], ["class", "workspace-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "workspace-empty"], [1, "welcome"], [1, "heading-secondary"], [1, "paragraph"], [1, "steps"], [1, "heading-tertiary", "steps--1"], [1, "paragraph", "steps--1-description"], [1, "heading-tertiary", "steps--2"], [1, "paragraph", "steps--2-description"], [1, "workspace-card", 3, "routerLink"], [1, "workspace-card__title"], ["alt", "", 1, "workspace-card__img", 3, "src"]], template: function WorkspacesAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkspacesAllComponent_div_1_Template, 17, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkspacesAllComponent_div_2_Template, 4, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.workspaces.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workspaces);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3Jrc3BhY2VzLWFsbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "74FE":
/*!***************************************************!*\
  !*** ./src/app/manager-app/manager-app.module.ts ***!
  \***************************************************/
/*! exports provided: ManagerAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppModule", function() { return ManagerAppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _manager_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manager-app-routing.module */ "IMd7");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "pVLz");
/* harmony import */ var _pages_workspace_view_workspace_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/workspace-view/workspace-view.component */ "Gyhy");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/profile/profile.component */ "MLiZ");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/settings/settings.component */ "VsXg");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "G9mM");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "0/JQ");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/search/search.component */ "a4wN");
/* harmony import */ var _pages_workspaces_all_workspaces_all_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/workspaces-all/workspaces-all.component */ "22Ev");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _components_todolist_card_todolist_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/todolist-card/todolist-card.component */ "bdy+");
/* harmony import */ var _pages_workspace_add_workspace_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/workspace-add/workspace-add.component */ "PGEv");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class ManagerAppModule {
}
ManagerAppModule.ɵfac = function ManagerAppModule_Factory(t) { return new (t || ManagerAppModule)(); };
ManagerAppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: ManagerAppModule });
ManagerAppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_pages_workspace_view_workspace_view_component__WEBPACK_IMPORTED_MODULE_4__["WorkspaceViewComponent"], _pages_workspaces_all_workspaces_all_component__WEBPACK_IMPORTED_MODULE_10__["WorkspacesAllComponent"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _manager_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManagerAppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](ManagerAppModule, { declarations: [_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _pages_workspace_view_workspace_view_component__WEBPACK_IMPORTED_MODULE_4__["WorkspaceViewComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _pages_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"], _pages_workspaces_all_workspaces_all_component__WEBPACK_IMPORTED_MODULE_10__["WorkspacesAllComponent"], _components_todolist_card_todolist_card_component__WEBPACK_IMPORTED_MODULE_12__["TodolistCardComponent"], _pages_workspace_add_workspace_add_component__WEBPACK_IMPORTED_MODULE_13__["WorkspaceAddComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _manager_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManagerAppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"]], exports: [_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _pages_workspace_view_workspace_view_component__WEBPACK_IMPORTED_MODULE_4__["WorkspaceViewComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _pages_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"], _pages_workspaces_all_workspaces_all_component__WEBPACK_IMPORTED_MODULE_10__["WorkspacesAllComponent"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetComponentScope"](_pages_workspace_view_workspace_view_component__WEBPACK_IMPORTED_MODULE_4__["WorkspaceViewComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _components_todolist_card_todolist_card_component__WEBPACK_IMPORTED_MODULE_12__["TodolistCardComponent"]], []);


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "G9mM":
/*!********************************************************************!*\
  !*** ./src/app/manager-app/pages/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Gyhy":
/*!******************************************************************************!*\
  !*** ./src/app/manager-app/pages/workspace-view/workspace-view.component.ts ***!
  \******************************************************************************/
/*! exports provided: WorkspaceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceViewComponent", function() { return WorkspaceViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_manager_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/manager-app.service */ "XpIn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function WorkspaceViewComponent_app_todolist_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-todolist-card", 7);
} if (rf & 2) {
    const todoList_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todoListID", todoList_r2._id)("dataName", todoList_r2.name)("dataTodos", todoList_r2.todos);
} }
class WorkspaceViewComponent {
    constructor(managerAppService, router, activatedRoute) {
        this.managerAppService = managerAppService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.getParam();
        this.getTodoList();
        this.getTheme();
        this.setNavbarLink();
    }
    get todoLists() {
        return [...this.managerAppService.globaltodoListTest];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.setNavbarLink();
    }
    getParam() {
        this.activatedRoute.params.subscribe(params => {
            this.workspaceID = params.id;
        });
    }
    getTheme() {
        if (this.managerAppService._workspaces.length) {
            const filterTheme = [...this.managerAppService._workspaces].filter(el => el._id === this.workspaceID);
            console.log(filterTheme[0].img);
            this.theme = filterTheme[0].img;
            localStorage.setItem('theme', this.theme);
        }
        else {
            this.theme = localStorage.getItem('theme');
        }
        // console.log(this.theme)
    }
    getTodoList() {
        this.managerAppService.getTodoListsByWorkspaceId(this.workspaceID).subscribe(resp => {
            // this.todoLists = resp.todoList;
            this.managerAppService.globaltodoListTest = resp.todoList;
        });
    }
    // addTodoList(val){
    // }
    addNewTodoList(val) {
        this.managerAppService.createTodoList(val, this.workspaceID).subscribe((resp) => {
            this.managerAppService.globaltodoListTest = [...this.managerAppService.globaltodoListTest, resp.newTodoList];
        });
    }
    setNavbarLink() {
        this.managerAppService.isRendered = !this.managerAppService.isRendered ? this.managerAppService.isRendered = true : this.managerAppService.isRendered = false;
    }
    styles() {
        return {
            'background-image': 'url(' + this.theme + ')',
            'background-size': 'cover',
            'background-position': 'top',
        };
    }
}
WorkspaceViewComponent.ɵfac = function WorkspaceViewComponent_Factory(t) { return new (t || WorkspaceViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_app_service__WEBPACK_IMPORTED_MODULE_1__["ManagerAppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
WorkspaceViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkspaceViewComponent, selectors: [["app-workspace-view"]], decls: 8, vars: 2, consts: [[1, "section-workspace", 3, "ngStyle"], [1, "todoList-wrapper"], ["class", "card-grid", 3, "todoListID", "dataName", "dataTodos", 4, "ngFor", "ngForOf"], [1, "add__card"], ["type", "text", "placeholder", "Add a new List", 3, "keyup.enter"], ["inputToDoList", ""], [1, "add__card__button", 3, "click"], [1, "card-grid", 3, "todoListID", "dataName", "dataTodos"]], template: function WorkspaceViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkspaceViewComponent_app_todolist_card_2_Template, 1, 3, "app-todolist-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function WorkspaceViewComponent_Template_input_keyup_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.addNewTodoList(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkspaceViewComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.addNewTodoList(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styles());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todoLists);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3Jrc3BhY2Utdmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "IMd7":
/*!***********************************************************!*\
  !*** ./src/app/manager-app/manager-app-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ManagerAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppRoutingModule", function() { return ManagerAppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "pVLz");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "0/JQ");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/profile/profile.component */ "MLiZ");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/search/search.component */ "a4wN");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/settings/settings.component */ "VsXg");
/* harmony import */ var _pages_workspace_add_workspace_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/workspace-add/workspace-add.component */ "PGEv");
/* harmony import */ var _pages_workspace_view_workspace_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/workspace-view/workspace-view.component */ "Gyhy");
/* harmony import */ var _pages_workspaces_all_workspaces_all_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/workspaces-all/workspaces-all.component */ "22Ev");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    {
        path: 'manager-app', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        children: [
            { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                children: [
                    { path: '', component: _pages_workspaces_all_workspaces_all_component__WEBPACK_IMPORTED_MODULE_8__["WorkspacesAllComponent"] },
                    { path: 'workspaces', component: _pages_workspaces_all_workspaces_all_component__WEBPACK_IMPORTED_MODULE_8__["WorkspacesAllComponent"] },
                    { path: 'search', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] },
                    { path: 'add', component: _pages_workspace_add_workspace_add_component__WEBPACK_IMPORTED_MODULE_6__["WorkspaceAddComponent"] }
                ]
            },
            { path: 'workspace/:id', component: _pages_workspace_view_workspace_view_component__WEBPACK_IMPORTED_MODULE_7__["WorkspaceViewComponent"] },
            { path: 'profile', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
            { path: 'settings', component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"] },
            { path: '**', redirectTo: 'manager-app/home' }
        ],
    },
    { path: '**', redirectTo: 'manager-app/home' }
];
class ManagerAppRoutingModule {
}
ManagerAppRoutingModule.ɵfac = function ManagerAppRoutingModule_Factory(t) { return new (t || ManagerAppRoutingModule)(); };
ManagerAppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ManagerAppRoutingModule });
ManagerAppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ManagerAppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "KgbS":
/*!*************************************************************!*\
  !*** ./src/app/shared/navbar-main/navbar-main.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarMainComponent", function() { return NavbarMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "N/25");
/* harmony import */ var src_app_manager_app_services_manager_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/manager-app/services/manager-app.service */ "XpIn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["refModal"];
const _c1 = ["refOverlay"];
const _c2 = ["refModalInput"];
const _c3 = function () { return ["/v2/manager-app/home/add"]; };
function NavbarMainComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New space");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
const _c4 = function () { return ["/v2/manager-app/home"]; };
const _c5 = function () { return ["/v2/manager-app/profile"]; };
class NavbarMainComponent {
    constructor(authService, managerAppService) {
        this.authService = authService;
        this.managerAppService = managerAppService;
        this.inputFlag = false;
    }
    get isRendered() {
        return this.managerAppService.isRendered;
    }
    get workspaces() {
        return this.managerAppService._workspaces;
    }
    get userData() {
        return this.managerAppService._authenticatedUser;
    }
    ngOnInit() {
    }
    logout() {
        this.authService.authLogOut();
    }
    onGetTitle(val) {
        const titleWorkspace = val.trim();
        if (!titleWorkspace.length) {
            this.inputFlag = true;
            return;
        }
        const inputVal = this.modalInput.nativeElement;
        const body = {
            title: inputVal.value
        };
        // this.todoApp.createWorkspace(val)
        this.managerAppService.createWorkspace(body).subscribe((resp) => {
            this.managerAppService._workspaces = [...this.workspaces, resp.workspace[resp.workspace.length - 1]];
        });
        inputVal.value = '';
        //CLOSE THE MODAL 
        // console.log(this.modalInput.nativeElement.value)
        this.closeModal();
    }
    closeModal() {
        const modalElement = this.modal.nativeElement;
        const overlay = this.overlay.nativeElement;
        modalElement.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    onAddWorkspace() {
        const modalElement = this.modal.nativeElement;
        const overlay = this.overlay.nativeElement;
        modalElement.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modalElement.classList.contains('hidden')) {
                this.closeModal();
            }
        });
    }
}
NavbarMainComponent.ɵfac = function NavbarMainComponent_Factory(t) { return new (t || NavbarMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_manager_app_services_manager_app_service__WEBPACK_IMPORTED_MODULE_2__["ManagerAppService"])); };
NavbarMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarMainComponent, selectors: [["app-navbar-main"]], viewQuery: function NavbarMainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalInput = _t.first);
    } }, decls: 12, vars: 6, consts: [[1, "navbar"], [1, "navbar__logo-box"], [1, "navbar__link", 3, "routerLink"], [1, "navbar__logo", "fab", "fa-pied-piper-square"], [1, "navbar__list"], ["class", "navbar__list-item", 4, "ngIf"], [1, "navbar__list-item"], ["routerLinkActive", "active-link", 1, "navbar__link", 3, "routerLink"], ["alt", "User photo", 1, "navbar__list-item-user-photo", 3, "src"], ["routerLinkActive", "active-link", 1, "navbar__link", 3, "click"], [1, "navbar__list-item-icon--logout", "fas", "fa-sign-out-alt"], [1, "navbar__link"], [1, "navbar__list-item-icon--settings", "fas", "fa-edit"], [1, "navbar-down-list"], ["routerLinkActive", "router-link-active", 1, "navbar-down-list__item", 3, "routerLink"]], template: function NavbarMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarMainComponent_div_5_Template, 6, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarMainComponent_Template_a_click_10_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRendered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.userData.img ? ctx.userData.img : "../../../../assets/img/user-img-default.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXItbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "LZTH":
/*!********************************************************!*\
  !*** ./src/app/manager-app/services/notify.service.ts ***!
  \********************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotifyService {
    constructor() {
        this.text = '';
        this.icon = '';
    }
    getMessage(action, text) {
        switch (action) {
            case 'registration':
                console.log(this.text);
                this.text = 'Succesfully registered';
                this.icon = 'far fa-check-circle';
                console.log(this.text);
                console.log(this.icon);
                return;
            case 'login':
                this.text = 'Succesfully Logged In';
                this.icon = 'far fa-check-circle';
                break;
            case 'update':
                this.text = `${text ? text : 'Succesfully Logged In'}`;
                this.icon = 'far fa-check-circle';
                break;
            case 'loading':
                this.text = 'Succesfully registered';
                this.icon = 'fas fa-sync fa-spin';
                break;
            case 'wuops':
                this.text = `${text ? text : 'there was a problem'}`;
                this.icon = 'fas fa-exclamation-circle';
                break;
            case 'registration':
                this.text = 'Searching';
                this.icon = 'fas fa-spinner fa-pulse';
                break;
            case 'create':
                this.text = 'Workspace sucesfully created!';
                this.icon = 'far fa-check-circle';
                break;
            default:
                break;
        }
    }
}
NotifyService.ɵfac = function NotifyService_Factory(t) { return new (t || NotifyService)(); };
NotifyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotifyService, factory: NotifyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MLiZ":
/*!****************************************************************!*\
  !*** ./src/app/manager-app/pages/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_manager_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/manager-app.service */ "XpIn");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notify.service */ "LZTH");
/* harmony import */ var src_app_shared_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/notifications/notifications.component */ "wBfi");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "N/25");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["profilePicInput"];
const _c1 = ["profilePic"];
function ProfileComponent_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_p_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The email adress is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_p_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The current password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_p_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The new password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_p_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The password confirmation doesnt match with the provided password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor(managerAppService, fb, notifyService, notifications, authService) {
        this.managerAppService = managerAppService;
        this.fb = fb;
        this.notifyService = notifyService;
        this.notifications = notifications;
        this.authService = authService;
        this.userProfileForm = this.fb.group({
            name: [this.userData.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]],
            email: [this.userData.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
        this.resetPassForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]],
            passwordReset: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]],
        });
    }
    get userData() {
        return this.managerAppService._authenticatedUser;
    }
    ngOnInit() {
        console.log(this.userData);
    }
    loadImagePrevUpload(e) {
        if (e.target.files) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (event) => {
                this.profileImg.nativeElement.src = `${event.target.result}`;
            };
            this.managerAppService.patchProfileImg(e.target.files[0]).subscribe((resp) => {
                console.log(resp);
                // this.managerAppService._authenticatedUser.img = resp
                this.managerAppService._authenticatedUser.img = resp.url;
            });
        }
    }
    isInvalid(input) {
        return this.userProfileForm.controls[input].errors
            && this.userProfileForm.controls[input].touched;
    }
    isInvalidReset(input) {
        return this.resetPassForm.controls[input].errors
            && this.resetPassForm.controls[input].touched;
    }
    sendFormUser() {
        console.log(this.userProfileForm.controls.password.value);
        if (this.userProfileForm.invalid) {
            this.userProfileForm.markAllAsTouched();
            return;
        }
        console.log(this.userProfileForm);
        console.log(this.userProfileForm.value);
        this.managerAppService.patchUserData(this.userProfileForm.value).subscribe((resp) => {
            console.log(resp);
            if (resp.status === 'success') {
                this.notifyService.getMessage('update', 'Your data was sucesfully updated');
                this.notifications.toggleNotification();
                setTimeout(() => {
                    this.notifications.toggleNotification();
                    this.managerAppService._authenticatedUser = resp.updatedUser;
                }, 1500);
                this.authService.checkToken().subscribe(resp => console.log(resp));
            }
        }, (error => {
            if (error) {
                console.log(error);
                this.notifyService.getMessage('wuops', error.error.message);
                this.notifications.toggleNotification();
                setTimeout(() => {
                    this.notifications.toggleNotification();
                }, 3000);
            }
        }));
        this.userProfileForm.controls.password.reset();
    }
    resetPasswordForm() {
        if (this.resetPassForm.invalid) {
            this.resetPassForm.markAllAsTouched();
            return;
        }
        console.log('hello');
        if (this.resetPassForm.valid && this.resetPassForm.controls.passwordReset.value !== this.resetPassForm.controls.passwordConfirm.value) {
            this.resetPassForm.controls.passwordReset.setValue('');
            this.resetPassForm.controls.passwordConfirm.setValue('');
            return;
        }
        this.managerAppService.resetUserPass(this.resetPassForm.value).subscribe(resp => {
            this.notifications.toggleNotification();
            this.notifyService.getMessage('update', 'Password sucesfully updated');
            setTimeout(() => {
                this.notifications.toggleNotification();
            }, 2000);
            this.authService.checkToken().subscribe(resp => console.log(resp));
        }, (error) => {
            if (error.error.message === "The password is not correct") {
                this.notifyService.getMessage('wuops', 'The current password is not correct');
            }
            else {
                this.notifyService.getMessage('wuops', 'The passwords doesnt match one with each other');
            }
            this.notifications.toggleNotification();
            setTimeout(() => {
                this.notifications.toggleNotification();
            }, 2000);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_manager_app_service__WEBPACK_IMPORTED_MODULE_2__["ManagerAppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], viewQuery: function ProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.profilePic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.profileImg = _t.first);
    } }, decls: 69, vars: 11, consts: [[1, "section-profile"], [1, "profile-menu"], [1, "sidebar-profile", "hidden"], [1, "sidebar-profile__list"], [1, "sidebar-profile__list__item"], ["href", "#", 1, "sidebar-profile__link"], [1, "profile-content"], [1, "profile-content-display"], [1, "profile-picture"], ["alt", "", 3, "src"], ["profilePic", ""], ["type", "file", 1, "profile-picture__file", 3, "change"], ["profilePicInput", ""], [1, "fas", "fa-camera"], [1, "profile-form"], [1, "profile-form__form", 3, "formGroup", "ngSubmit"], [1, "profile-form__form__group"], ["for", "name", 1, "profile-form__form__label"], ["formControlName", "name", "name", "name", "id", "name", "type", "text", 1, "profile-form__form__input", 3, "placeholder"], ["class", "error-form", 4, "ngIf"], ["for", "email", 1, "profile-form__form__label"], ["type", "text", "id", "email", "formControlName", "email", "name", "email", 1, "profile-form__form__input", 3, "placeholder"], ["for", "password", 1, "profile-form__form__label"], ["type", "password", "placeholder", "Password", "id", "password", "formControlName", "password", "name", "password", 1, "profile-form__form__input"], [1, "btn", "btn--red"], ["type", "password", "placeholder", "Password", "id", "passwordCurrent", "formControlName", "password", "name", "passwordCurrent", 1, "profile-form__form__input"], ["type", "password", "placeholder", "Password", "id", "passwordReset", "formControlName", "passwordReset", "name", "passwordReset", 1, "profile-form__form__input"], ["for", "passwordConfirm", 1, "profile-form__form__label"], ["type", "password", "placeholder", "Confirm Password", "formControlName", "passwordConfirm", "name", "passwordConfirm", "id", "passwordConfirm", 1, "profile-form__form__input"], [1, "error-form"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "USER DATA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_22_listener($event) { return ctx.loadImagePrevUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_26_listener() { return ctx.sendFormUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "PROFILE CONTENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ProfileComponent_p_33_Template, 2, 0, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ProfileComponent_p_38_Template, 2, 0, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ProfileComponent_p_43_Template, 2, 0, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "UPDATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_48_listener() { return ctx.resetPasswordForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "RESET PASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ProfileComponent_p_55_Template, 2, 0, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ProfileComponent_p_60_Template, 2, 0, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, ProfileComponent_p_65_Template, 2, 0, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "UPDATE PASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.userData.img ? ctx.userData.img : "assets/img/user-img-default.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userProfileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.userData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.userData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.resetPassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalidReset("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalidReset("passwordReset"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalidReset("passwordConfirm"));
    } }, directives: [src_app_shared_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "N/25":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_manager_app_services_manager_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/manager-app/services/manager-app.service */ "XpIn");





class AuthService {
    constructor(http, router, managerAppService) {
        this.http = http;
        this.router = router;
        this.managerAppService = managerAppService;
        // private token: string = `Bearer ${localStorage.getItem('bearer-todo')}`
        this.apiUrl = 'https://manager-app-v2.herokuapp.com/api/todoapp/v1/auth';
    }
    // public _token: string = `${localStorage.getItem('bearer-todo') === 'logout' ? 'logout' : `Bearer ${localStorage.getItem('bearer-todo')}`}`;
    get user() {
        return Object.assign({}, this._user);
    }
    authLogin(form) {
        const url = `${this.apiUrl}/login`;
        return this.http.post(url, form);
    }
    authRegister(form) {
        const url = `${this.apiUrl}/register`;
        return this.http.post(url, form);
    }
    authLogOut() {
        localStorage.setItem('bearer-todo', 'logout');
        localStorage.removeItem('work-active');
        // this.managerAppService.token = '';
        this.managerAppService._workspaces = [];
        this.router.navigate(['/auth/login']);
    }
    checkToken() {
        const url = `${this.apiUrl}/checkToken`;
        // const token = `Bearer ${localStorage.getItem('bearer-todo')}`
        const token = `${!this.managerAppService.token ? `${localStorage.getItem('bearer-todo')}` : this.managerAppService.token}`;
        // console.log(token)
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Authorization', token);
        this.managerAppService.headers = !this.managerAppService.headers ? headers : this.managerAppService.headers;
        return this.http.get(url, { headers });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_manager_app_services_manager_app_service__WEBPACK_IMPORTED_MODULE_3__["ManagerAppService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-main/navbar-main.component */ "KgbS");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal.component */ "0zEo");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications/notifications.component */ "wBfi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_2__["NavbarMainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_2__["NavbarMainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"]] }); })();


/***/ }),

/***/ "PGEv":
/*!****************************************************************************!*\
  !*** ./src/app/manager-app/pages/workspace-add/workspace-add.component.ts ***!
  \****************************************************************************/
/*! exports provided: WorkspaceAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceAddComponent", function() { return WorkspaceAddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_manager_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/manager-app.service */ "XpIn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notify.service */ "LZTH");
/* harmony import */ var src_app_shared_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/notifications/notifications.component */ "wBfi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["themeOptions"];
function WorkspaceAddComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class WorkspaceAddComponent {
    //THEME HOLDS THE URL FROM CLOUDINARY
    constructor(fb, managerAppService, activatedRoute, notifyService, notification) {
        this.fb = fb;
        this.managerAppService = managerAppService;
        this.activatedRoute = activatedRoute;
        this.notifyService = notifyService;
        this.notification = notification;
        this.workspaceForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]],
            theme: [this.theme]
        });
    }
    ngOnInit() {
    }
    sendForm() {
        console.log(this.workspaceForm);
        if (this.workspaceForm.invalid) {
            this.workspaceForm.markAllAsTouched();
            return;
        }
        this.managerAppService.createWorkspace(this.workspaceForm.value).subscribe((resp) => {
            if (resp.status === 'success') {
                this.managerAppService._workspaces = [...this.managerAppService._workspaces, resp.workspace[resp.workspace.length - 1]];
                this.notifyService.getMessage('create');
                this.notification.toggleNotification();
                setTimeout(() => {
                    this.activatedRoute.navigateByUrl('/v2/manager-app/home/workspaces');
                }, 1500);
            }
        }, (error) => {
            console.log(error);
        });
        this.workspaceForm.setValue({
            title: '',
            theme: 'patata defecto'
        });
        this.workspaceForm.markAsUntouched();
    }
    isInvalid(input) {
        return this.workspaceForm.controls[input].errors
            && this.workspaceForm.controls[input].touched;
    }
    setTheme(val, cardId) {
        if (!val) {
            this.workspaceForm.setValue({ title: this.workspaceForm.value.title, theme: 'https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284918/iksgsorgjrltr65cs8gq.jpg' });
        }
        else {
            this.workspaceForm.setValue({ title: this.workspaceForm.value.title, theme: val });
        }
        this.setOutline(cardId);
    }
    setOutline(cardId) {
        const cardCollection = document.querySelectorAll('.workspace-card');
        cardCollection.forEach((el) => {
            console.log('hello');
            el.classList.remove('selectedCard');
            if (el.id === cardId) {
                console.log(el.id);
                return el.classList.add('selectedCard');
            }
        });
    }
}
WorkspaceAddComponent.ɵfac = function WorkspaceAddComponent_Factory(t) { return new (t || WorkspaceAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_manager_app_service__WEBPACK_IMPORTED_MODULE_2__["ManagerAppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"])); };
WorkspaceAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkspaceAddComponent, selectors: [["app-workspace-add"]], viewQuery: function WorkspaceAddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.themeCard = _t.first);
    } }, decls: 25, vars: 2, consts: [[1, "grid__add"], [1, "grid___heading"], [1, ""], [1, "add__form"], ["autocomplete", "off", 1, "workspace-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "title", "type", "text", "placeholder", "Workspace's Name", 1, "workspace-form__title-input"], ["for", "title", 1, "workspace-form__title-label"], ["class", "error-form", 4, "ngIf"], [1, "grid__workspace", "grid__workspace--add"], ["themeOptions", ""], ["id", "iksgsorgjrltr65cs8gq", 1, "workspace-card", "workspace-card--1", 3, "click"], ["id", "ogjwagrcqyvf4xcphg64", 1, "workspace-card", "workspace-card--2", 3, "click"], ["id", "vg4ti2cc9b23yzyvxkom", 1, "workspace-card", "workspace-card--3", 3, "click"], ["id", "epdqoodzp24aecddjcjf", 1, "workspace-card", "workspace-card--4", 3, "click"], ["id", "dj3mofltuo74qnjcfsgj", 1, "workspace-card", "workspace-card--5", 3, "click"], ["id", "hdcfionelybyd10nexrw", 1, "workspace-card", "workspace-card--6", 3, "click"], [1, "btn", "btn--red", "btn--add"], [1, "error-form"]], template: function WorkspaceAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "CREATE A WORKSPACE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function WorkspaceAddComponent_Template_form_ngSubmit_6_listener() { return ctx.sendForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Workspace's Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, WorkspaceAddComponent_p_11_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Select a theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceAddComponent_Template_div_click_17_listener() { return ctx.setTheme("https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284918/iksgsorgjrltr65cs8gq.jpg", "iksgsorgjrltr65cs8gq"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceAddComponent_Template_div_click_18_listener() { return ctx.setTheme("https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284917/ogjwagrcqyvf4xcphg64.jpg", "ogjwagrcqyvf4xcphg64"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceAddComponent_Template_div_click_19_listener() { return ctx.setTheme("https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284917/vg4ti2cc9b23yzyvxkom.jpg", "vg4ti2cc9b23yzyvxkom"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceAddComponent_Template_div_click_20_listener() { return ctx.setTheme("https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284917/epdqoodzp24aecddjcjf.jpg", "epdqoodzp24aecddjcjf"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceAddComponent_Template_div_click_21_listener() { return ctx.setTheme("https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284917/dj3mofltuo74qnjcfsgj.jpg", "dj3mofltuo74qnjcfsgj"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkspaceAddComponent_Template_div_click_22_listener() { return ctx.setTheme("https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284917/hdcfionelybyd10nexrw.jpg", "hdcfionelybyd10nexrw"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "CREATE WORKSPACE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.workspaceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid("title"));
    } }, directives: [src_app_shared_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3Jrc3BhY2UtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'managerAppAng';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "VsXg":
/*!******************************************************************!*\
  !*** ./src/app/manager-app/pages/settings/settings.component.ts ***!
  \******************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 2, vars: 0, template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "XpIn":
/*!*************************************************************!*\
  !*** ./src/app/manager-app/services/manager-app.service.ts ***!
  \*************************************************************/
/*! exports provided: ManagerAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppService", function() { return ManagerAppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ManagerAppService {
    constructor(http) {
        this.http = http;
        this._workspaces = [];
        this.globaltodoListTest = [];
        //TOKEN FROM LOCALSTORAGE PREVIOUSLY STORED AT AUTH PROCESS 
        this.apiUrl = 'https://manager-app-v2.herokuapp.com/api/todoapp/v1';
        // private headers:HttpHeaders = new HttpHeaders().set('Authorization', this.token);
        this.isRendered = false;
    }
    //Get all the workspaces current user
    getWorkspace() {
        const url = `${this.apiUrl}/workspace`;
        return this.http.get(url, { headers: this.headers });
    }
    //Creates a workpacee at Sidebar.component
    createWorkspace(form) {
        console.log(form);
        const body = {
            title: form.title,
            img: form.theme
        };
        return this.http.post(`${this.apiUrl}/workspace`, body, { headers: this.headers });
    }
    getTodoListsByWorkspaceId(id) {
        //TODO. Must check the user first
        const url = `${this.apiUrl}/todoList/${id}`;
        return this.http.get(url);
    }
    getTodoListsByWorkspaceBoard(id) {
        //TODO. Must check the user first
        const url = `${this.apiUrl}/${id}/todoList/${id}`;
        return this.http.get(url);
    }
    createTodoList(nameTodoList, id) {
        const url = `${this.apiUrl}/todoList`;
        const body = {
            name: nameTodoList,
            project: id
        };
        return this.http.post(url, body, { headers: this.headers });
    }
    patchTodoListName(newName, id) {
        const url = `${this.apiUrl}/todoList/${id}`;
        const body = {
            name: newName
        };
        return this.http.patch(url, body, { headers: this.headers });
    }
    deleteTodoListByID(id) {
        const url = `${this.apiUrl}/todoList/${id}`;
        return this.http.delete(url, { headers: this.headers });
    }
    createTodo(todo, todoListId) {
        const url = `${this.apiUrl}/todo`;
        const body = {
            todo: todo,
            todoList: todoListId
        };
        return this.http.post(url, body, { headers: this.headers });
    }
    //TOGGLE TODO STATUS 
    changeIsDoneTodo(id) {
        const url = `${this.apiUrl}/todo/isDone/${id}`;
        return this.http.get(url, { headers: this.headers });
    }
    //UPDATES A TODO
    patchTodo(val, id) {
        const url = `${this.apiUrl}/todo/${id}`;
        const body = {
            todo: val
        };
        return this.http.patch(url, body, { headers: this.headers });
    }
    //DRAG DROP TODO
    dragDropTodo(idTodo, idTodoList) {
        const url = `${this.apiUrl}/todo/${idTodo}/${idTodoList}`;
        return this.http.patch(url, null, { headers: this.headers });
    }
    //UPDATE USER FIELDS
    patchUserData(form) {
        console.log(this._authenticatedUser);
        console.log(this.headers);
        console.log(form);
        const url = `${this.apiUrl}/users`;
        return this.http.patch(url, form, { headers: this.headers });
    }
    //UPDATE PICTURE
    patchProfileImg(file) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        const url = `${this.apiUrl}/upload/users`;
        return this.http.post(url, formData, { headers: this.headers });
    }
    //RESET PASSWORD 
    resetUserPass(form) {
        const url = `${this.apiUrl}/users/resetPass`;
        console.log(form);
        return this.http.patch(url, form, { headers: this.headers });
    }
}
ManagerAppService.ɵfac = function ManagerAppService_Factory(t) { return new (t || ManagerAppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ManagerAppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ManagerAppService, factory: ManagerAppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing.module */ "lm+D");
/* harmony import */ var _manager_app_manager_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manager-app/manager-app.module */ "74FE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _manager_app_manager_app_module__WEBPACK_IMPORTED_MODULE_5__["ManagerAppModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _manager_app_manager_app_module__WEBPACK_IMPORTED_MODULE_5__["ManagerAppModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"]] }); })();


/***/ }),

/***/ "a4wN":
/*!**************************************************************!*\
  !*** ./src/app/manager-app/pages/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_manager_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/manager-app.service */ "XpIn");
/* harmony import */ var _workspaces_all_workspaces_all_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workspaces-all/workspaces-all.component */ "22Ev");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = ["refModal"];
const _c1 = ["searchInput"];
function SearchComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This workspace doesn't exist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a1) { return ["/v2/manager-app/workspace", a1]; };
function SearchComponent_div_7_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const space_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, space_r6._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](space_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", space_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SearchComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_7_div_1_div_1_Template, 4, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", !ctx_r4.filteredWorkspaces.length ? ctx_r4.workspaces : ctx_r4.filteredWorkspaces);
} }
function SearchComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_7_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.notMatch);
} }
function SearchComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SearchComponent {
    constructor(managerAppService, workspaceAll) {
        this.managerAppService = managerAppService;
        this.workspaceAll = workspaceAll;
        this.searching = false;
        this.notMatch = false;
        this.filteredWorkspaces = this.workspaces;
        this.workspaceAll.getWorkspaces();
        // this.managerAppService.setWorkspace(this.workspaceAll.workspaces);
    }
    get workspaces() {
        return this.managerAppService._workspaces;
    }
    ngOnInit() {
    }
    search(val) {
        const query = val.trim().toLowerCase();
        console.log(query);
        this.notMatch = false;
        this.searching = true;
        this.filteredWorkspaces = this.workspaces.filter(el => el.title.toLowerCase().includes(query));
        console.log(this.filteredWorkspaces);
        if (this.searchInput.nativeElement.value === '') {
            this.filteredWorkspaces = this.workspaces;
        }
        else {
            this.filteredWorkspaces;
        }
        setTimeout(() => {
            this.searching = false;
        }, 1000);
        if (!this.filteredWorkspaces.length) {
            this.notMatch = true;
        }
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_app_service__WEBPACK_IMPORTED_MODULE_1__["ManagerAppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_workspaces_all_workspaces_all_component__WEBPACK_IMPORTED_MODULE_2__["WorkspacesAllComponent"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, decls: 9, vars: 3, consts: [[1, "grid__search"], [1, "search-group"], ["type", "text", "id", "search", "placeholder", "Search...", 1, "workspace-form__title-input", 3, "keyup"], ["searchInput", ""], ["for", "search", 1, "workspace-form__title-label"], ["class", "search__fail", 4, "ngIf"], ["class", "grid__workspace", 4, "ngIf"], [1, "search__fail"], [1, "grid__workspace"], [4, "ngIf"], ["class", "workspace-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "workspace-card", 3, "routerLink"], [1, "workspace-card__title"], ["alt", "", 1, "workspace-card__img", 3, "src"], [1, "loading"], [1, "fas", "fa-sync", "fa-spin"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchComponent_p_6_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!!ctx.searching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searching);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "bdy+":
/*!*********************************************************************************!*\
  !*** ./src/app/manager-app/components/todolist-card/todolist-card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TodolistCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistCardComponent", function() { return TodolistCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_manager_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/manager-app.service */ "XpIn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_workspace_view_workspace_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/workspace-view/workspace-view.component */ "Gyhy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["refModal"];
const _c1 = ["refOverlay"];
const _c2 = ["refModalInput"];
const _c3 = ["todoListCard"];
function TodolistCardComponent_div_27_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodolistCardComponent_div_27_i_5_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const todo_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.isDone(todo_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodolistCardComponent_div_27_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodolistCardComponent_div_27_i_6_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const todo_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.isDone(todo_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodolistCardComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragleave", function TodolistCardComponent_div_27_Template_div_dragleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.dragLeaveHandler($event); })("drop", function TodolistCardComponent_div_27_Template_div_drop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.dropHandler($event); })("dragover", function TodolistCardComponent_div_27_Template_div_dragover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.dragOverHandler($event); })("cdkDropListDropped", function TodolistCardComponent_div_27_Template_div_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.dragEndHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function TodolistCardComponent_div_27_Template_input_keyup_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const todo_r6 = ctx.$implicit; const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onChangeTodo(_r8.value, todo_r6._id); })("click", function TodolistCardComponent_div_27_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.handleIsActive(); })("dragstart", function TodolistCardComponent_div_27_Template_input_dragstart_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.dragStartHandler($event); })("dragend", function TodolistCardComponent_div_27_Template_input_dragend_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.dragEndHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodolistCardComponent_div_27_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodolistCardComponent_div_27_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", todo_r6.todo.length > 20 && !ctx_r4.isActive ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 4, todo_r6.todo, 0, 24) + "..." : todo_r6.todo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", todo_r6._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", todo_r6.done);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !todo_r6.done);
} }
class TodolistCardComponent {
    constructor(managerAppService, activatedRoute, workSpaceView) {
        this.managerAppService = managerAppService;
        this.activatedRoute = activatedRoute;
        this.workSpaceView = workSpaceView;
        this.isActive = false;
        this.name = '';
        this.todos = [];
        this.todoListID = '';
        this.workSpaceView.getParam();
    }
    get todoLists() {
        return this.managerAppService.globaltodoListTest;
    }
    ngOnInit() {
        this.scrollUp();
    }
    addTodoToList(todo) {
        const currentCard = todo.closest('.todoList-card');
        //TODO
        //Work around for an issue, dont like it must be refactired. 
        if (this.todos === undefined) {
            this.todos = [];
        }
        this.managerAppService.createTodo(todo.value, currentCard.id).subscribe((resp) => {
            console.log('hello');
            if (this.todos.length) {
                this.todos = [...this.todos, resp.newTodo];
            }
            if (!this.todos.length) {
                this.todos.push(resp.newTodo);
            }
        });
        todo.value = '';
    }
    // CHANGE STATUS TO DONE
    isDone(id) {
        this.managerAppService.changeIsDoneTodo(id).subscribe((resp) => {
            this.todos.forEach((todo, index) => {
                if (this.todos[index]['_id'] === id) {
                    todo.done = resp.todoDone.done;
                }
            });
        }, (error) => {
            console.log(error);
        });
    }
    onChangeTodo(val, idCard) {
        this.managerAppService.patchTodo(val, idCard).subscribe((resp) => {
            // console.log(resp)
        }, (error) => {
            console.log(error);
        });
        this.isActive = false;
    }
    handleIsActive() {
        this.isActive = true;
    }
    changeTodoListName(updateName) {
        // console.log(updateName)
        this.managerAppService.patchTodoListName(updateName, this.todoListID)
            .subscribe(resp => {
            console.log(resp);
        });
    }
    //DELETE TODOLIST & CLOSE MODAL
    deleteTodoList() {
        this.managerAppService.deleteTodoListByID(this.todoListID).subscribe((resp) => {
            console.log(this.todoLists);
            if (resp.status === 'success') {
                const filteredTodoLists = [...this.managerAppService.globaltodoListTest].filter(el => el._id !== this.todoListID);
                this.managerAppService.globaltodoListTest = filteredTodoLists;
                // this.managerAppService.todoListTest = filteredTodoLists
            }
        });
        this.closeModal();
    }
    closeModal() {
        const modalElement = this.modal.nativeElement;
        const overlay = this.overlay.nativeElement;
        modalElement.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    //OPEN MODAL
    todoListModal() {
        const modalElement = this.modal.nativeElement;
        const overlay = this.overlay.nativeElement;
        modalElement.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modalElement.classList.contains('hidden')) {
                this.closeModal();
            }
        });
    }
    scrollUp() {
        window.scrollTo(0, 0);
    }
    //DRAG
    dragStartHandler(event) {
        // console.log('drag start')
        const todoID = event.target.id;
        // SET THE TODO ID TO THE HANDLER
        event.dataTransfer.setData('text/plain', todoID);
        // ON MOVE
        event.dataTransfer.effectAllowed = 'move';
    }
    dragEndHandler(event) {
        // console.log(event)
        // console.log('drag end')
    }
    //DROP
    dragOverHandler(event) {
        //VALIDATES THE TYPE OF DATA 
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            // console.log('you are over me')
            this.todoListCard.nativeElement.classList.add('drop-drop');
        }
    }
    dragLeaveHandler(event) {
        this.todoListCard.nativeElement.classList.remove('drop-drop');
    }
    dropHandler(event) {
        // console.log('dropped');
        this.todoListCard.nativeElement.classList.remove('drop-drop');
        const todoID = event.dataTransfer.getData('text/plain');
        this.managerAppService.dragDropTodo(todoID, this.todoListID).subscribe((resp) => {
            // this.todos = [...this.todos, resp.updatedTodo];
            this.workSpaceView.getTodoList();
        }, (error) => {
            console.log(error);
        });
        // console.log(this.workspaceID)
    }
}
TodolistCardComponent.ɵfac = function TodolistCardComponent_Factory(t) { return new (t || TodolistCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_manager_app_service__WEBPACK_IMPORTED_MODULE_1__["ManagerAppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_workspace_view_workspace_view_component__WEBPACK_IMPORTED_MODULE_3__["WorkspaceViewComponent"])); };
TodolistCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodolistCardComponent, selectors: [["app-todolist-card"]], viewQuery: function TodolistCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.todoListCard = _t.first);
    } }, inputs: { name: ["dataName", "name"], todos: ["dataTodos", "todos"], todoListID: "todoListID" }, decls: 32, vars: 3, consts: [[1, "overlay", "hidden"], ["refOverlay", ""], [1, "modal", "hidden"], ["refModal", ""], [1, "modal-content"], [1, "modal__close"], [3, "click"], [1, "modal__title"], [1, "modal__heading"], [1, "modal__body"], [1, "modal__button"], [1, "btn", "modal__button--confirm", 3, "click"], [1, "btn", "modal__button--cancel", 3, "click"], [1, "todoList-card", 3, "id"], ["todoListCard", ""], [1, "todoList-card__head"], ["type", "text", 1, "todoList-card__head__title", 3, "value", "keyup.enter"], ["todoListName", ""], [1, "fas", "fa-trash-alt", 3, "click"], [1, "todoList-card__body"], ["class", "todoList-card__body__item", 3, "dragleave", "drop", "dragover", "cdkDropListDropped", 4, "ngFor", "ngForOf"], [1, "todoList-card__add-item"], ["type", "text", "placeholder", "Add a new todo", 1, "todoList-card__add-item__input", 3, "keyup.enter"], ["addTodoInput", ""], [1, "fas", "fa-pencil-alt"], [1, "todoList-card__body__item", 3, "dragleave", "drop", "dragover", "cdkDropListDropped"], ["arrTodos", ""], ["autocomplete", "off", "type", "text", "cols", "30", "rows", "1", "draggable", "true", 1, "todo", 3, "value", "id", "keyup.enter", "click", "dragstart", "dragend"], ["inputChange", ""], ["style", "color: green;", "class", "far fa-check-square checkbox", 3, "click", 4, "ngIf"], ["class", "far fa-square done checkbox", 3, "click", 4, "ngIf"], [1, "far", "fa-check-square", "checkbox", 2, "color", "green", 3, "click"], [1, "far", "fa-square", "done", "checkbox", 3, "click"]], template: function TodolistCardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodolistCardComponent_Template_i_click_7_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " THIS IS THE MODAAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "This is going to happen Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui rem dicta, libero dolores a pariatur excepturi aliquam deleniti alias?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodolistCardComponent_Template_button_click_16_listener() { return ctx.deleteTodoList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CONFIRM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodolistCardComponent_Template_button_click_18_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function TodolistCardComponent_Template_input_keyup_enter_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.changeTodoListName(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodolistCardComponent_Template_i_click_25_listener() { return ctx.todoListModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TodolistCardComponent_div_27_Template, 7, 8, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function TodolistCardComponent_Template_input_keyup_enter_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx.addTodoToList(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.todoListID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RvbGlzdC1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "lm+D":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_access_app_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/access-app.guard */ "xlKm");
/* harmony import */ var _guards_load_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/load-auth.guard */ "ulvu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(module => module.AuthModule),
        canActivate: [_guards_load_auth_guard__WEBPACK_IMPORTED_MODULE_2__["LoadAuthGuard"]],
        canLoad: [_guards_load_auth_guard__WEBPACK_IMPORTED_MODULE_2__["LoadAuthGuard"]]
    },
    {
        path: 'v2',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./manager-app/manager-app-routing.module */ "IMd7")).then(module => module.ManagerAppRoutingModule),
        canActivate: [_guards_access_app_guard__WEBPACK_IMPORTED_MODULE_1__["AccessAppGuard"]],
        canLoad: [_guards_access_app_guard__WEBPACK_IMPORTED_MODULE_1__["AccessAppGuard"]]
    },
    {
        path: '**',
        redirectTo: 'auth',
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "pVLz":
/*!********************************************************************!*\
  !*** ./src/app/manager-app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/navbar-main/navbar-main.component */ "KgbS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 3, vars: 0, consts: [[1, "manager-app"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_1__["NavbarMainComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".manager-app[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbmFnZXItYXBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"] });


/***/ }),

/***/ "ulvu":
/*!*******************************************!*\
  !*** ./src/app/guards/load-auth.guard.ts ***!
  \*******************************************/
/*! exports provided: LoadAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAuthGuard", function() { return LoadAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/services/auth.service */ "N/25");
/* harmony import */ var _manager_app_services_manager_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager-app/services/manager-app.service */ "XpIn");



class LoadAuthGuard {
    constructor(authService, managerAppService) {
        this.authService = authService;
        this.managerAppService = managerAppService;
    }
    canActivate() {
        if (!this.managerAppService._authenticatedUser) {
            return true;
        }
        if (localStorage.getItem('bearer-todo') === 'logout') {
            return true;
        }
        else {
            return false;
        }
    }
    canLoad() {
        if (!this.managerAppService._authenticatedUser) {
            return true;
        }
        if (localStorage.getItem('bearer-todo') === 'logout') {
            return true;
        }
        else {
            return false;
        }
    }
}
LoadAuthGuard.ɵfac = function LoadAuthGuard_Factory(t) { return new (t || LoadAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_manager_app_services_manager_app_service__WEBPACK_IMPORTED_MODULE_2__["ManagerAppService"])); };
LoadAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadAuthGuard, factory: LoadAuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "wBfi":
/*!*****************************************************************!*\
  !*** ./src/app/shared/notifications/notifications.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_manager_app_services_notify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/manager-app/services/notify.service */ "LZTH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function NotificationsComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.text);
} }
class NotificationsComponent {
    constructor(notifyService) {
        this.notifyService = notifyService;
    }
    get text() {
        return this.notifyService.text;
    }
    get icon() {
        return this.notifyService.icon;
    }
    ngOnInit() {
    }
    toggleNotification() {
        console.log('me dispare');
        // this.notify.nativeElement.classList.toggle('notification--hidden');
        const notification = document.querySelector('.notification');
        notification === null || notification === void 0 ? void 0 : notification.classList.toggle('notification--hidden');
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_manager_app_services_notify_service__WEBPACK_IMPORTED_MODULE_1__["NotifyService"])); };
NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 7, vars: 4, consts: [[1, "notification", "notification--hidden"], ["notification", ""], [1, "notification__action"], [1, "notifation__body"], [1, "notification__message"], [4, "ngIf"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotificationsComponent_p_6_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "xlKm":
/*!********************************************!*\
  !*** ./src/app/guards/access-app.guard.ts ***!
  \********************************************/
/*! exports provided: AccessAppGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessAppGuard", function() { return AccessAppGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/services/auth.service */ "N/25");
/* harmony import */ var _manager_app_services_manager_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager-app/services/manager-app.service */ "XpIn");




class AccessAppGuard {
    constructor(authService, managerAppService) {
        this.authService = authService;
        this.managerAppService = managerAppService;
    }
    canActivate() {
        return this.authService.checkToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((resp) => {
            if (resp.status === 'success') {
                this.managerAppService._authenticatedUser = resp.user;
                // console.log(this.managerAppService.token)
                return true;
            }
            else {
                return false;
            }
        }));
    }
    canLoad() {
        return this.authService.checkToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((resp) => {
            if (resp.status === 'success') {
                this.managerAppService._authenticatedUser = resp.user;
                return true;
            }
            else {
                return false;
            }
        }));
    }
}
AccessAppGuard.ɵfac = function AccessAppGuard_Factory(t) { return new (t || AccessAppGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_manager_app_services_manager_app_service__WEBPACK_IMPORTED_MODULE_3__["ManagerAppService"])); };
AccessAppGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccessAppGuard, factory: AccessAppGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map