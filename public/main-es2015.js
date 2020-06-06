(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\n\n<div class=\"wrapper\">\n  <div class=\"wrapper-container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-container\">\n  <app-generic-card [title]=\"title\">\n    <app-form #appForm [formConfig]=\"formConfig\">\n      <button #loginButton mat-button (click)=\"handleLogin()\">\n        Logar\n      </button>\n\n      <button mat-button routerLink=\"/register\">\n        Registrar\n      </button>\n    </app-form>\n  </app-generic-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>post works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/profile.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/profile.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading [loading]=\"loading\"></app-loading>\n\n<section *ngIf=\"!loading\">\n  <div class=\"profile-header\">\n    <div class=\"profile-header-item__avatar\">\n      <img class=\"img-profile\" src=\"{{ userData.imageUrl }}\" />\n    </div>\n    <div class=\"profile-header-item__name\">\n      {{ userData.name }}\n    </div>\n\n    <div class=\"profile-header-item__tag\">\n      <mat-chip *ngIf=\"settingsService.isPesquisador()\" color=\"primary\" selected\n        >Pesquisador</mat-chip\n      >\n      <mat-chip *ngIf=\"!settingsService.isPesquisador()\" color=\"accent\" selected\n        >Aluno</mat-chip\n      >\n    </div>\n\n    <div *ngIf=\"userData.myProfile\" (click)=\"showSettings = !showSettings\">\n      <button mat-button>\n        <mat-icon>settings</mat-icon>\n        <span>Editar</span>\n      </button>\n    </div>\n    <div class=\"follow-unfollow\" *ngIf=\"!userData.myProfile\">\n      <button mat-button [matMenuTriggerFor]=\"menu\">\n        <mat-icon>more_horiz</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button\n          [disabled]=\"loadingFollow\"\n          mat-menu-item\n          (click)=\"handleFollow()\"\n          *ngIf=\"!userData.following\"\n        >\n          Seguir\n        </button>\n        <button\n          [disabled]=\"loadingFollow\"\n          mat-menu-item\n          (click)=\"handleUnFollow()\"\n          *ngIf=\"userData.following\"\n        >\n          Deixar de seguir\n        </button>\n      </mat-menu>\n    </div>\n  </div>\n\n  <app-settings\n    *ngIf=\"showSettings\"\n    (onSubmitChange)=\"onSubmitChange()\"\n  ></app-settings>\n\n  <div *ngIf=\"settingsService.isPesquisador()\">\n    {{ userData?.details || \"Nenhuma informação adicionada pelo pesquisador.\" }}\n  </div>\n\n  <app-new-post\n    *ngIf=\"userData.myProfile\"\n    (onHandlePostSubmit)=\"onHandlePostSubmit($event)\"\n  ></app-new-post>\n\n  <app-post-container [posts]=\"myPosts\"></app-post-container>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/settings/settings.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/settings/settings.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-generic-card [title]=\"'Configuração'\">\n    <app-form\n      #appForm\n      [formConfig]=\"formConfig\"\n      [loadData]=\"settingsService.load()\"\n    >\n      <button mat-button #updateButton (click)=\"handleUpdateSubmit()\">\n        Atualizar\n      </button>\n    </app-form>\n  </app-generic-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/register/register.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/register/register.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-container\">\n  <app-generic-card [title]=\"title\">\n    <app-form #appForm [formConfig]=\"formConfig\">\n      <button #registerButton mat-button (click)=\"handleRegister()\">\n        Registrar\n      </button>\n\n      <button mat-button routerLink=\"/login\">\n        Acessar\n      </button>\n    </app-form>\n  </app-generic-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/search.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/search.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading [loading]=\"loading\"></app-loading>\n\n<div class=\"text\" *ngIf=\"users.length > 0\">Filtro por {{ filter }}</div>\n\n<app-generic-card *ngFor=\"let user of users\" routerLink=\"/{{ user.name }}\">\n  <div class=\"users-container\">\n    <img src=\"{{ user.imageUrl }}\" />\n    <p class=\"name\">{{ user.name }}</p>\n  </div>\n</app-generic-card>\n\n<div *ngIf=\"users.length === 0\">\n  Nenhum resultado encontrado para {{ filter }}\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-dialog/confirm-dialog.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-dialog/confirm-dialog.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-content>\n  <p>{{ data.message }}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"false\">Não</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>\n    Sim\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/feed/feed.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/feed/feed.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <app-new-post (onHandlePostSubmit)=\"onHandlePostSubmit()\"></app-new-post>\n</div>\n\n<div\n  class=\"container timeline-news\"\n  *ngIf=\"feedPostsWait.length > 0\"\n  (click)=\"handleShowNewPosts()\"\n>\n  {{ feedPostsWait.length }} nova(s) publicações\n</div>\n\n<!-- <app-follow-sugestion> </app-follow-sugestion> -->\n\n<app-post-container\n  [loading]=\"loading\"\n  [posts]=\"feedPosts\"\n></app-post-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/follow-sugestion/follow-sugestion.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/follow-sugestion/follow-sugestion.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-generic-card>\n  <div class=\"sugestion-container\">\n    <div class=\"sugestion-container__title\">\n      Mais populares\n    </div>\n    <div class=\"sugestion-container__content\">\n      <div class=\"user-sugestion\" *ngFor=\"let item of items\">\n        <div class=\"user-sugestion__avatar\">\n          <img class=\"img-profile2\" src=\"{{ item.imageUrl }}\" />\n        </div>\n        <div>\n          {{ item.name }}\n        </div>\n      </div>\n    </div>\n  </div>\n</app-generic-card>\n\n<script></script>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/form/form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/form/form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading [loading]=\"loading\"></app-loading>\n\n<form [formGroup]=\"_formGroup\">\n  <mat-form-field *ngFor=\"let field of _config\">\n    <mat-label>{{ field.label }}</mat-label>\n\n    <mat-select\n      *ngIf=\"field.type === 'combobox'\"\n      formControlName=\"{{ field.name }}\"\n    >\n      <mat-option *ngFor=\"let value of field.values\" [value]=\"value.value\">\n        {{ value.label }}\n      </mat-option>\n    </mat-select>\n\n    <textarea\n      *ngIf=\"field.type === 'textarea'\"\n      matInput\n      formControlName=\"{{ field.name }}\"\n    >\n    </textarea>\n\n    <input\n      *ngIf=\"\n        field.type === 'text' ||\n        field.type === 'password' ||\n        field.type === 'email'\n      \"\n      matInput\n      type=\"{{ field.type }}\"\n      formControlName=\"{{ field.name }}\"\n    />\n\n    <mat-error *ngFor=\"let validator of field.validators\">\n      <span *ngIf=\"formError(field.name, validator)\">{{\n        getErrorMessage(validator)\n      }}</span></mat-error\n    >\n  </mat-form-field>\n\n  <ng-content></ng-content>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/generic-card/generic-card.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/generic-card/generic-card.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-header *ngIf=\"title\"\n    ><span>{{ title }}</span></mat-card-header\n  >\n  <mat-card-content>\n    <ng-content></ng-content>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/menu.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/menu.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"toolbar\">\n  <div class=\"toolbar-title\" routerLink=\"/\">\n    Feed\n  </div>\n  <div class=\"toolbar-search\">\n    <mat-form-field>\n      <mat-label>Busca</mat-label>\n      <input\n        matInput\n        type=\"text\"\n        [(ngModel)]=\"searchService.filter\"\n        (keyup)=\"handleKeyUp($event)\"\n      />\n      <button mat-icon-button matSuffix (click)=\"searchService.handleSearch()\">\n        <mat-icon>search</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n  <div>\n    <img\n      class=\"img-profile\"\n      [matMenuTriggerFor]=\"menu\"\n      src=\"{{ settingsService.userData.imageUrl }}\"\n      alt=\"User Avatar\"\n    />\n  </div>\n</mat-card>\n\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item routerLink=\"/{{ settingsService.userData.name }}\">\n    <mat-icon>account_circle</mat-icon>\n    <span>Meu perfil</span>\n  </button>\n\n  <button mat-menu-item (click)=\"authService.logout()\">\n    <mat-icon>exit_to_app</mat-icon>\n    <span>Sair</span>\n  </button>\n</mat-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/new-post/new-post.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/new-post/new-post.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card *ngIf=\"hasPermission()\">\n  <mat-card-content>\n    <form>\n      <app-text-area\n        #postComment\n        autofocus\n        [name]=\"'postComment'\"\n        [preventEnter]=\"false\"\n        [placeholder]=\"'Publique seu artigo aqui!'\"\n      ></app-text-area>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button #postButton mat-button (click)=\"handlePostSubmit()\">\n      Publicar\n    </button>\n  </mat-card-actions>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/post-card/post-card.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/post-card/post-card.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"card\">\n  <mat-card-header>\n    <img\n      mat-card-avatar\n      src=\"{{ post.user.imageUrl }}\"\n      routerLink=\"/{{ post.user.name }}\"\n    />\n    <div class=\"data\">\n      <mat-card-title routerLink=\"/{{ post.user.name }}\">{{\n        post.user.name\n      }}</mat-card-title>\n      <mat-card-subtitle>{{\n        post.date | date: \"dd/MM/yyyy HH:mm:ss\"\n      }}</mat-card-subtitle>\n    </div>\n\n    <div *ngIf=\"post.canEdit\" style=\"cursor: pointer;\">\n      <mat-icon (click)=\"handleDeletePost()\">close</mat-icon>\n    </div>\n  </mat-card-header>\n  <mat-card-content class=\"post-text\">\n    {{ post.text }}\n  </mat-card-content>\n  <hr />\n  <mat-card-content class=\"post-info\">\n    <div>{{ post.likesLength }} curtidas</div>\n    <div *ngIf=\"post.commentLength > 0\">\n      {{ post.commentLength }} comentários\n    </div>\n  </mat-card-content>\n  <hr />\n  <mat-card-actions>\n    <button mat-button (click)=\"handleLike()\" [ngClass]=\"{ liked: post.liked }\">\n      <mat-icon>thumb_up</mat-icon> &nbsp; Curtir\n    </button>\n    <button mat-button (click)=\"handleShowComments()\">\n      <mat-icon>comments</mat-icon> &nbsp; Comentar\n    </button>\n  </mat-card-actions>\n\n  <mat-card-content *ngIf=\"post.showComments\">\n    <app-text-area\n      #postComment\n      [placeholder]=\"'Escreva um comentário'\"\n      (onEnterPress)=\"handleSubmitComment()\"\n    >\n    </app-text-area>\n    <app-loading [loading]=\"loadingComments\"></app-loading>\n    <div class=\"post-comments\" *ngFor=\"let comment of post.comments\">\n      <img class=\"img-profile\" src=\"{{ comment.user.imageUrl }}\" />\n      &nbsp;\n      <span class=\"comment-text\">\n        {{ comment.text }}\n      </span>\n    </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/post-container/post-container.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/post-container/post-container.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading [loading]=\"loading\"></app-loading>\n\n<div class=\"container\">\n  <app-post-card\n    *ngFor=\"let post of posts\"\n    [post]=\"post\"\n    (onDeletePost)=\"onDeletePost($event)\"\n  ></app-post-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/text-area/text-area.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/text-area/text-area.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n  <textarea\n    #textarea\n    matInput\n    rows=\"1\"\n    (keydown)=\"resizeTextArea($event)\"\n    autofocus\n    name=\"{{ name }}\"\n    placeholder=\"{{ placeholder }}\"\n  ></textarea>\n</mat-form-field>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/profile/profile.component */ "./src/app/modules/profile/profile.component.ts");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/login/login.component */ "./src/app/modules/login/login.component.ts");
/* harmony import */ var _shared_guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/guard/logged-in.guard */ "./src/app/shared/guard/logged-in.guard.ts");
/* harmony import */ var _shared_guard_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/guard/not-logged-in.guard */ "./src/app/shared/guard/not-logged-in.guard.ts");
/* harmony import */ var _shared_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/feed/feed.component */ "./src/app/shared/components/feed/feed.component.ts");
/* harmony import */ var _modules_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/register/register.component */ "./src/app/modules/register/register.component.ts");
/* harmony import */ var _modules_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/search/search.component */ "./src/app/modules/search/search.component.ts");











const routes = [
    {
        path: "login",
        component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        canActivate: [_shared_guard_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["NotLoggedInGuard"]],
    },
    {
        path: "register",
        component: _modules_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        canActivate: [_shared_guard_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["NotLoggedInGuard"]],
    },
    {
        path: "",
        component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_shared_guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_6__["LoggedInGuard"]],
        children: [
            {
                path: "",
                component: _shared_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_8__["FeedComponent"],
            },
            {
                path: ":name",
                component: _modules_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
            },
            {
                path: "search/profile",
                component: _modules_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
            },
        ],
    },
    { path: "*", redirectTo: "/login", pathMatch: "full" },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    ngOnInit() { }
    constructor() { }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/menu/menu.component */ "./src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/components/post-card/post-card.component */ "./src/app/shared/components/post-card/post-card.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _shared_components_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/new-post/new-post.component */ "./src/app/shared/components/new-post/new-post.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modules_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/profile/profile.component */ "./src/app/modules/profile/profile.component.ts");
/* harmony import */ var _modules_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/profile/settings/settings.component */ "./src/app/modules/profile/settings/settings.component.ts");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/login/login.component */ "./src/app/modules/login/login.component.ts");
/* harmony import */ var _shared_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/components/feed/feed.component */ "./src/app/shared/components/feed/feed.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_post_post_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/post/post.component */ "./src/app/modules/post/post.component.ts");
/* harmony import */ var _modules_register_register_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/register/register.component */ "./src/app/modules/register/register.component.ts");
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/components/loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _shared_components_post_container_post_container_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/components/post-container/post-container.component */ "./src/app/shared/components/post-container/post-container.component.ts");
/* harmony import */ var _shared_components_form_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/components/form/form.component */ "./src/app/shared/components/form/form.component.ts");
/* harmony import */ var _shared_components_generic_card_generic_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/components/generic-card/generic-card.component */ "./src/app/shared/components/generic-card/generic-card.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _shared_components_follow_sugestion_follow_sugestion_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/components/follow-sugestion/follow-sugestion.component */ "./src/app/shared/components/follow-sugestion/follow-sugestion.component.ts");
/* harmony import */ var _shared_components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/components/text-area/text-area.component */ "./src/app/shared/components/text-area/text-area.component.ts");
/* harmony import */ var _modules_search_search_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modules/search/search.component */ "./src/app/modules/search/search.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");








































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
            _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_16__["PostCardComponent"],
            _shared_components_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_18__["NewPostComponent"],
            _modules_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
            _modules_profile_settings_settings_component__WEBPACK_IMPORTED_MODULE_21__["SettingsComponent"],
            _modules_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
            _shared_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_23__["FeedComponent"],
            _modules_post_post_component__WEBPACK_IMPORTED_MODULE_26__["PostComponent"],
            _modules_register_register_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"],
            _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_28__["LoadingComponent"],
            _shared_components_post_container_post_container_component__WEBPACK_IMPORTED_MODULE_30__["PostCcontainerComponent"],
            _shared_components_form_form_component__WEBPACK_IMPORTED_MODULE_31__["FormComponent"],
            _shared_components_generic_card_generic_card_component__WEBPACK_IMPORTED_MODULE_32__["GenericCardComponent"],
            _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmDialogComponent"],
            _shared_components_follow_sugestion_follow_sugestion_component__WEBPACK_IMPORTED_MODULE_35__["FollowSugestionComponent"],
            _shared_components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_36__["TextAreaComponent"],
            _modules_search_search_component__WEBPACK_IMPORTED_MODULE_37__["SearchComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_38__["MatSelectModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__["MatChipsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ServiceWorkerModule"].register("ngsw-worker.js", {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].production,
            }),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.wrapper .wrapper-container {\n  width: 33%;\n  padding: 5px;\n  min-width: 500px;\n}\n/*Mobile cfg*/\n@media only screen and (max-width: 700px) {\n  .wrapper-container {\n    width: 100% !important;\n    min-width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL0M6XFxVc2Vyc1xcR3VzdGF2byBNdXJhdG9yaW9cXE9uZURyaXZlXFzDgXJlYSBkZSBUcmFiYWxob1xccHJvamV0b1xcZnJvbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURDRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREdBLGFBQUE7QUFDQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSwwQkFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICB9XG59XG5cbi8qTW9iaWxlIGNmZyovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi53cmFwcGVyIC53cmFwcGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMyU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxuLypNb2JpbGUgY2ZnKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var src_app_shared_services_push_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/push-notification.service */ "./src/app/shared/services/push-notification.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







const VAPID_PUBLIC = "BDx9P20VhKgshsm7SkdpQ9odpOL1z2XYaGpyfXA58_4W_8yV87D2QKbCGuj2OQ3V2B_HWVEDIm3vT9vxScHuil4";
let HomeComponent = class HomeComponent {
    constructor(router, settingsService, swPush, pushService) {
        this.router = router;
        this.settingsService = settingsService;
        this.swPush = swPush;
        this.pushService = pushService;
    }
    ngOnInit() {
        console.log("Push Notification", this.swPush.isEnabled ? "online" : "offline");
        this.swPush.notificationClicks.subscribe((options) => {
            if (options.notification.data)
                window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].website + options.notification.data);
        });
        window.addEventListener("notificationclick", (event) => { });
        if (this.swPush.isEnabled) {
            Notification.requestPermission((permission) => {
                if (permission) {
                    this.swPush
                        .requestSubscription({
                        serverPublicKey: VAPID_PUBLIC,
                    })
                        .then((subscription) => {
                        this.pushService.sendSubscriptionToTheServer(subscription);
                    })
                        .catch(console.error);
                }
            });
        }
        this.settingsService.load().subscribe();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["SwPush"] },
    { type: src_app_shared_services_push_notification_service__WEBPACK_IMPORTED_MODULE_5__["PushNotificationService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/login/login.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var src_app_shared_components_form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/form/form.component */ "./src/app/shared/components/form/form.component.ts");




let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = "Acesso";
        this.formConfig = [
            {
                label: "E-mail",
                name: "email",
                type: "email",
                validators: ["email", "required"],
            },
            {
                label: "Password",
                name: "password",
                type: "password",
                validators: ["required"],
            },
        ];
    }
    handleLogin() {
        if (this.appForm.invalid)
            return;
        this.loginButton.nativeElement.disabled = true;
        this.authService
            .login(this.appForm.value)
            .subscribe()
            .add(() => (this.loginButton.nativeElement.disabled = false));
    }
    ngOnInit() { }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("appForm", { static: false, read: src_app_shared_components_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] })
], LoginComponent.prototype, "appForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("loginButton", { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], LoginComponent.prototype, "loginButton", void 0);
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/post/post.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/post/post.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/post/post.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/post/post.component.ts ***!
  \************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let PostComponent = class PostComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.params.subscribe((params) => {
            console.log(params.id);
        });
    }
};
PostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-post",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/post/post.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post.component.scss */ "./src/app/modules/post/post.component.scss")).default]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/modules/profile/profile.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/profile/profile.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-header {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: left;\n}\n.profile-header-item__avatar {\n  width: auto;\n  height: auto;\n}\n.profile-header-item__name {\n  width: 100%;\n  margin-left: 20px;\n  font-size: 25px;\n}\n.profile-header-item__tag {\n  width: 100%;\n  font-size: 25px;\n}\n.follow-unfollow {\n  width: 100%;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL0M6XFxVc2Vyc1xcR3VzdGF2byBNdXJhdG9yaW9cXE9uZURyaXZlXFzDgXJlYSBkZSBUcmFiYWxob1xccHJvamV0b1xcZnJvbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0RKO0FES0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuXG4gICYtaXRlbV9fYXZhdGFyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAmLWl0ZW1fX25hbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gICYtaXRlbV9fdGFnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn1cblxuLmZvbGxvdy11bmZvbGxvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiIsIi5wcm9maWxlLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cbi5wcm9maWxlLWhlYWRlci1pdGVtX19hdmF0YXIge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2ZpbGUtaGVhZGVyLWl0ZW1fX25hbWUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5wcm9maWxlLWhlYWRlci1pdGVtX190YWcge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZm9sbG93LXVuZm9sbG93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_services_permission_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/permission.service */ "./src/app/shared/services/permission.service.ts");








let ProfileComponent = class ProfileComponent {
    constructor(userService, settingsService, router, route, permissionService) {
        this.userService = userService;
        this.settingsService = settingsService;
        this.router = router;
        this.route = route;
        this.permissionService = permissionService;
        this.userData = {
            _id: "",
            imageUrl: "",
            name: "",
            myProfile: false,
            following: false,
            details: "",
        };
        this.loading = true;
        this.loadingFollow = false;
        this.showSettings = false;
    }
    ngOnInit() {
        this.loadUserProfile();
        this.routeSubs = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])
                this.loadUserProfile();
        });
    }
    ngOnDestroy() {
        this.routeSubs.unsubscribe();
    }
    loadUserProfile() {
        this.loading = true;
        this.route.params.subscribe((params) => {
            const name = params.name;
            this.userService
                .getUserProfile(name)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((e) => {
                this.router.navigate(["search/profile"], {
                    queryParams: { name: name },
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(e);
            }))
                .subscribe((profile) => {
                this.myPosts = profile.posts;
                this.userData = {
                    imageUrl: profile.data.imageUrl,
                    name: profile.data.name,
                    myProfile: profile.myProfile,
                    following: profile.following,
                    _id: profile.data._id,
                    details: profile.data.details,
                };
            })
                .add(() => (this.loading = false));
        });
    }
    onSubmitChange() {
        this.showSettings = false;
        this.userData.details = this.settingsService.userData.details;
    }
    onHandlePostSubmit(post) {
        this.userService.getUserPosts().subscribe((posts) => {
            this.myPosts = posts;
        });
    }
    handleFollow() {
        this.loadingFollow = true;
        this.userService
            .follow(this.userData._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => (this.userData.following = true)))
            .subscribe()
            .add(() => (this.loadingFollow = false));
    }
    handleUnFollow() {
        this.loadingFollow = true;
        this.userService
            .unfollow(this.userData._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => (this.userData.following = false)))
            .subscribe()
            .add(() => (this.loadingFollow = false));
    }
    profileType() {
        return this.permissionService.permission;
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_services_permission_service__WEBPACK_IMPORTED_MODULE_7__["PermissionService"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.scss */ "./src/app/modules/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/modules/profile/settings/settings.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/profile/settings/settings.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/profile/settings/settings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/profile/settings/settings.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
/* harmony import */ var src_app_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var src_app_shared_components_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/form/form.component */ "./src/app/shared/components/form/form.component.ts");





let SettingsComponent = class SettingsComponent {
    constructor(snack, settingsService) {
        this.snack = snack;
        this.settingsService = settingsService;
        this.loading = false;
        this.onSubmitChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formConfig = [
            {
                label: "Nome",
                name: "name",
                type: "text",
                validators: ["required"],
            },
            {
                label: "E-mail",
                name: "email",
                type: "email",
                validators: ["email", "required"],
            },
            {
                label: "Password",
                name: "password",
                type: "password",
                validators: [],
            },
            {
                label: "Image url",
                name: "imageUrl",
                type: "text",
                validators: [],
            },
        ];
    }
    handleUpdateSubmit() {
        if (this.appForm.invalid)
            return;
        this.updateButton.nativeElement.disabled = true;
        this.settingsService
            .update(this.appForm.value)
            .subscribe(() => {
            this.onSubmitChange.emit();
            this.snack.show({ message: "Dados alterados com sucesso.", type: "S" });
        })
            .add(() => (this.updateButton.nativeElement.disabled = false));
    }
    ngOnInit() {
        if (this.settingsService.isPesquisador()) {
            this.formConfig.push({
                label: "Details",
                name: "details",
                type: "textarea",
                validators: [],
            });
        }
    }
};
SettingsComponent.ctorParameters = () => [
    { type: src_app_shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__["SnackbarService"] },
    { type: src_app_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SettingsComponent.prototype, "onSubmitChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("appForm", { static: false, read: src_app_shared_components_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] })
], SettingsComponent.prototype, "appForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("updateButton", { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], SettingsComponent.prototype, "updateButton", void 0);
SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-settings",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/settings/settings.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.component.scss */ "./src/app/modules/profile/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/modules/register/register.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/register/register.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_shared_components_form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/form/form.component */ "./src/app/shared/components/form/form.component.ts");




let RegisterComponent = class RegisterComponent {
    constructor(userService) {
        this.userService = userService;
        this.title = "Registro";
        this.formConfig = [
            {
                label: "Nome",
                name: "name",
                type: "text",
                validators: ["required"],
            },
            {
                label: "E-mail",
                name: "email",
                type: "email",
                validators: ["email", "required"],
            },
            {
                label: "Password",
                name: "password",
                type: "password",
                validators: ["required"],
            },
            {
                label: "Tipo",
                name: "type",
                type: "combobox",
                values: [
                    {
                        value: "PESQUISADOR",
                        label: "Pesquisador",
                    },
                    {
                        value: "ALUNO",
                        label: "Aluno",
                    },
                ],
                validators: ["required"],
            },
        ];
    }
    handleRegister() {
        if (this.appForm.invalid)
            return;
        this.userService.register(this.appForm.value).subscribe();
    }
    ngOnInit() { }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("appForm", { static: false, read: src_app_shared_components_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] })
], RegisterComponent.prototype, "appForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("loginButton", { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], RegisterComponent.prototype, "registerButton", void 0);
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/register/register.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.scss */ "./src/app/modules/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/modules/search/search.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/search/search.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".users-container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  height: auto !important;\n  text-align: center;\n  align-items: center;\n  cursor: pointer;\n}\n\nimg {\n  width: 50px;\n  height: 50px;\n}\n\n.name {\n  padding-left: 20px;\n}\n\n.text {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  align-items: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvQzpcXFVzZXJzXFxHdXN0YXZvIE11cmF0b3Jpb1xcT25lRHJpdmVcXMOBcmVhIGRlIFRyYWJhbGhvXFxwcm9qZXRvXFxmcm9udC9zcmNcXGFwcFxcbW9kdWxlc1xcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4ubmFtZSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLnVzZXJzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5uYW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4udGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/search/search.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/search/search.component.ts ***!
  \****************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");




let SearchComponent = class SearchComponent {
    constructor(userService, route) {
        this.userService = userService;
        this.route = route;
        this.loading = false;
        this.users = [];
    }
    ngOnInit() {
        this.loading = true;
        this.route.queryParams.subscribe((params) => {
            const name = params.name;
            this.filter = name;
            this.userService
                .get(name)
                .subscribe((users) => {
                this.users = users;
            })
                .add(() => (this.loading = false));
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-search",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/search.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.component.scss */ "./src/app/modules/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");



let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() { }
};
ConfirmDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ConfirmDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-confirm-dialog",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-dialog/confirm-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmDialogComponent);



/***/ }),

/***/ "./src/app/shared/components/feed/feed.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/feed/feed.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".timeline-news {\n  width: 100%;\n  height: 50px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #d5d5d5;\n  border-radius: 5px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmVlZC9DOlxcVXNlcnNcXEd1c3Rhdm8gTXVyYXRvcmlvXFxPbmVEcml2ZVxcw4FyZWEgZGUgVHJhYmFsaG9cXHByb2pldG9cXGZyb250L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGZlZWRcXGZlZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mZWVkL2ZlZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUtbmV3cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNWQ1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi50aW1lbGluZS1uZXdzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/feed/feed.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/feed/feed.component.ts ***!
  \**********************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/shared/services/post.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/shared/services/socket.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/shared/services/session.service.ts");





let FeedComponent = class FeedComponent {
    constructor(postService, socket, sessionService) {
        this.postService = postService;
        this.socket = socket;
        this.sessionService = sessionService;
        this.feedPostsWait = [];
        this.loading = false;
    }
    ngOnInit() {
        this.load();
        this.socket.initSocket();
        this.socket.onEvent(_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketEvent"].ON_NEW_POST).subscribe((data) => {
            console.log("new post incomming");
            this.feedPostsWait.push(data[0]);
        });
        this.socket.emit(_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketEvent"].ON_SEND_SESSION_ID, this.sessionService.getToken());
    }
    ngOnDestroy() {
        this.socket.disconnect();
    }
    load() {
        this.loading = true;
        this.postService
            .getAll()
            .subscribe((posts) => {
            this.feedPosts = posts;
        })
            .add(() => (this.loading = false));
    }
    handleShowNewPosts() {
        this.feedPosts = [...this.feedPostsWait, ...this.feedPosts];
        this.feedPostsWait = [];
    }
    showWaitPosts() {
        this.feedPosts = this.feedPostsWait.concat(this.feedPosts);
    }
    onHandlePostSubmit() {
        this.load();
    }
};
FeedComponent.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] },
    { type: _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
FeedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-feed",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./feed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/feed/feed.component.html")).default,
        providers: [_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./feed.component.scss */ "./src/app/shared/components/feed/feed.component.scss")).default]
    })
], FeedComponent);



/***/ }),

/***/ "./src/app/shared/components/follow-sugestion/follow-sugestion.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/follow-sugestion/follow-sugestion.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sugestion-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.sugestion-container__title {\n  width: 100%;\n  margin-top: 10px;\n}\n.sugestion-container__content {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.sugestion-container__content .user-sugestion {\n  width: auto;\n  height: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.sugestion-container__content .user-sugestion__avatar img {\n  border-radius: 6px;\n}\n.img-profile2 {\n  width: 100%;\n  height: 150px;\n  flex-shrink: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9sbG93LXN1Z2VzdGlvbi9DOlxcVXNlcnNcXEd1c3Rhdm8gTXVyYXRvcmlvXFxPbmVEcml2ZVxcw4FyZWEgZGUgVHJhYmFsaG9cXHByb2pldG9cXGZyb250L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGZvbGxvdy1zdWdlc3Rpb25cXGZvbGxvdy1zdWdlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZvbGxvdy1zdWdlc3Rpb24vZm9sbG93LXN1Z2VzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FOO0FER1E7RUFDRSxrQkFBQTtBQ0RWO0FEUUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb2xsb3ctc3VnZXN0aW9uL2ZvbGxvdy1zdWdlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VnZXN0aW9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICZfX3RpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgIC51c2VyLXN1Z2VzdGlvbiB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcblxuICAgICAgJl9fYXZhdGFyIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmltZy1wcm9maWxlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4iLCIuc3VnZXN0aW9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN1Z2VzdGlvbi1jb250YWluZXJfX3RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc3VnZXN0aW9uLWNvbnRhaW5lcl9fY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnN1Z2VzdGlvbi1jb250YWluZXJfX2NvbnRlbnQgLnVzZXItc3VnZXN0aW9uIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uc3VnZXN0aW9uLWNvbnRhaW5lcl9fY29udGVudCAudXNlci1zdWdlc3Rpb25fX2F2YXRhciBpbWcge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5pbWctcHJvZmlsZTIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/follow-sugestion/follow-sugestion.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/follow-sugestion/follow-sugestion.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FollowSugestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowSugestionComponent", function() { return FollowSugestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FollowSugestionComponent = class FollowSugestionComponent {
    constructor() {
        this.items = [
            {
                name: "teste",
                imageUrl: "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-9/17553985_1526243427385722_566692696585513347_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_oc=AQnXixAmi_Ft0x0J6Os2UuWi4mrSCXmGoC1Kf0-yVZ_-sjgaKHzpgfGeOS7GAAwgrFWJL04YUYbYsHfnH_EBeJeD&_nc_ht=scontent.fgru5-1.fna&oh=1481f2e40adc5ecfadfd515cd8394e66&oe=5E9BC0BF"
            },
            {
                name: "teste",
                imageUrl: "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-9/17553985_1526243427385722_566692696585513347_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_oc=AQnXixAmi_Ft0x0J6Os2UuWi4mrSCXmGoC1Kf0-yVZ_-sjgaKHzpgfGeOS7GAAwgrFWJL04YUYbYsHfnH_EBeJeD&_nc_ht=scontent.fgru5-1.fna&oh=1481f2e40adc5ecfadfd515cd8394e66&oe=5E9BC0BF"
            },
            {
                name: "teste",
                imageUrl: "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-9/17553985_1526243427385722_566692696585513347_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_oc=AQnXixAmi_Ft0x0J6Os2UuWi4mrSCXmGoC1Kf0-yVZ_-sjgaKHzpgfGeOS7GAAwgrFWJL04YUYbYsHfnH_EBeJeD&_nc_ht=scontent.fgru5-1.fna&oh=1481f2e40adc5ecfadfd515cd8394e66&oe=5E9BC0BF"
            },
            {
                name: "teste",
                imageUrl: "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-9/17553985_1526243427385722_566692696585513347_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_oc=AQnXixAmi_Ft0x0J6Os2UuWi4mrSCXmGoC1Kf0-yVZ_-sjgaKHzpgfGeOS7GAAwgrFWJL04YUYbYsHfnH_EBeJeD&_nc_ht=scontent.fgru5-1.fna&oh=1481f2e40adc5ecfadfd515cd8394e66&oe=5E9BC0BF"
            },
            {
                name: "teste",
                imageUrl: "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-9/17553985_1526243427385722_566692696585513347_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_oc=AQnXixAmi_Ft0x0J6Os2UuWi4mrSCXmGoC1Kf0-yVZ_-sjgaKHzpgfGeOS7GAAwgrFWJL04YUYbYsHfnH_EBeJeD&_nc_ht=scontent.fgru5-1.fna&oh=1481f2e40adc5ecfadfd515cd8394e66&oe=5E9BC0BF"
            }
        ];
    }
    ngOnInit() { }
};
FollowSugestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-follow-sugestion",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./follow-sugestion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/follow-sugestion/follow-sugestion.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./follow-sugestion.component.scss */ "./src/app/shared/components/follow-sugestion/follow-sugestion.component.scss")).default]
    })
], FollowSugestionComponent);



/***/ }),

/***/ "./src/app/shared/components/form/form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/form/form.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/form/form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/form/form.component.ts ***!
  \**********************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let FormComponent = class FormComponent {
    constructor(fb) {
        this.fb = fb;
        this.loading = false;
        this._formGroup = this.fb.group({});
        this.dataLoaded = false;
    }
    set formConfig(config) {
        //console.log(config);
        this._config = config;
        if (config) {
            for (let field of config) {
                var validators = [];
                for (let validator of field.validators)
                    if (validator.toLocaleLowerCase() === "required")
                        validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                    else if (validator.toLocaleLowerCase() === "email")
                        validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email);
                this._formGroup.addControl(field.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](field.defaultValue || "", validators));
            }
        }
    }
    set loadData(funcao) {
        if (!this.dataLoaded) {
            funcao
                .subscribe((data) => {
                for (let field of this._config) {
                    if (!data[field.name])
                        data[field.name] = "";
                }
                Object.getOwnPropertyNames(data).forEach((attr) => {
                    if (!this._formGroup.contains(attr))
                        delete data[attr];
                });
                this._formGroup.setValue(data);
            })
                .add(() => (this.loading = false));
            this.dataLoaded = true;
        }
    }
    get invalid() {
        return this._formGroup.invalid;
    }
    get value() {
        return this._formGroup.value;
    }
    formError(controlName, validador) {
        let control = this._formGroup.controls[controlName];
        if (control && control.errors)
            return control.errors[validador];
        return false;
    }
    getErrorMessage(validator) {
        if (validator === "required") {
            return "Este campo é requerido.";
        }
        else if (validator === "email") {
            return "E-mail inválido.";
        }
        else {
            return "";
        }
    }
    ngOnInit() { }
};
FormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormComponent.prototype, "formConfig", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormComponent.prototype, "loadData", null);
FormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-form",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/form/form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form.component.scss */ "./src/app/shared/components/form/form.component.scss")).default]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/shared/components/generic-card/generic-card.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/generic-card/generic-card.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  padding: 2%;\n  margin-bottom: 25px;\n  height: auto !important;\n}\n\n.mat-card-header {\n  align-items: center !important;\n  margin-top: 25px !important;\n  margin-bottom: 25px !important;\n  font-weight: bold;\n}\n\nmat-card-content {\n  padding-left: 20px;\n  padding-right: 20px;\n  height: auto !important;\n}\n\n/*Mobile cfg*/\n\n@media only screen and (max-width: 700px) {\n  .container {\n    width: 90% !important;\n    min-width: 90% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2VuZXJpYy1jYXJkL0M6XFxVc2Vyc1xcR3VzdGF2byBNdXJhdG9yaW9cXE9uZURyaXZlXFzDgXJlYSBkZSBUcmFiYWxob1xccHJvamV0b1xcZnJvbnQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZ2VuZXJpYy1jYXJkXFxnZW5lcmljLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2dlbmVyaWMtY2FyZC9nZW5lcmljLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBLGFBQUE7O0FBQ0E7RUFDRTtJQUNFLHFCQUFBO0lBQ0EseUJBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2VuZXJpYy1jYXJkL2dlbmVyaWMtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMiU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDI1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4vKk1vYmlsZSBjZmcqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwibWF0LWNhcmQge1xuICBwYWRkaW5nOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi8qTW9iaWxlIGNmZyovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/generic-card/generic-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/generic-card/generic-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: GenericCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericCardComponent", function() { return GenericCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GenericCardComponent = class GenericCardComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GenericCardComponent.prototype, "title", void 0);
GenericCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-generic-card",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./generic-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/generic-card/generic-card.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./generic-card.component.scss */ "./src/app/shared/components/generic-card/generic-card.component.scss")).default]
    })
], GenericCardComponent);



/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LoadingComponent = class LoadingComponent {
    constructor() {
        this.loading = false;
    }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoadingComponent.prototype, "loading", void 0);
LoadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-loading",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./loading.component.scss */ "./src/app/shared/components/loading/loading.component.scss")).default]
    })
], LoadingComponent);



/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar {\n  width: 100%;\n  height: 60px;\n  display: flex !important;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 10px;\n  padding-top: 30px;\n}\n.toolbar-title {\n  cursor: pointer;\n  font-size: 20px;\n}\n.toolbar-search {\n  min-width: 300px;\n}\nimg {\n  cursor: pointer;\n}\n/*Mobile cfg*/\n@media only screen and (max-width: 700px) {\n  .toolbar-search {\n    min-width: 100px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9DOlxcVXNlcnNcXEd1c3Rhdm8gTXVyYXRvcmlvXFxPbmVEcml2ZVxcw4FyZWEgZGUgVHJhYmFsaG9cXHByb2pldG9cXGZyb250L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7QUNBSjtBRElBO0VBQ0UsZUFBQTtBQ0RGO0FESUEsYUFBQTtBQUNBO0VBRUk7SUFDRSwyQkFBQTtFQ0ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuXG4gICYtdGl0bGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAmLXNlYXJjaCB7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxufVxuXG5pbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qTW9iaWxlIGNmZyovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC50b29sYmFyIHtcbiAgICAmLXNlYXJjaCB7XG4gICAgICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCIudG9vbGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLnRvb2xiYXItdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi50b29sYmFyLXNlYXJjaCB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbmltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypNb2JpbGUgY2ZnKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnRvb2xiYXItc2VhcmNoIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/shared/services/search.service.ts");





let MenuComponent = class MenuComponent {
    constructor(authService, settingsService, searchService) {
        this.authService = authService;
        this.settingsService = settingsService;
        this.searchService = searchService;
    }
    ngOnInit() { }
    handleKeyUp($event) {
        if ($event.keyCode === 13)
            this.searchService.handleSearch();
    }
};
MenuComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
    { type: _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] }
];
MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-menu",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/menu.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu.component.scss */ "./src/app/shared/components/menu/menu.component.scss")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/shared/components/new-post/new-post.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/new-post/new-post.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  margin-top: 20px;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmV3LXBvc3QvQzpcXFVzZXJzXFxHdXN0YXZvIE11cmF0b3Jpb1xcT25lRHJpdmVcXMOBcmVhIGRlIFRyYWJhbGhvXFxwcm9qZXRvXFxmcm9udC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxuZXctcG9zdFxcbmV3LXBvc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25ldy1wb3N0L25ldy1wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmV3LXBvc3QvbmV3LXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4iLCJtYXQtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/new-post/new-post.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/new-post/new-post.component.ts ***!
  \******************************************************************/
/*! exports provided: NewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostComponent", function() { return NewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/shared/services/post.service.ts");
/* harmony import */ var _text_area_text_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text-area/text-area.component */ "./src/app/shared/components/text-area/text-area.component.ts");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/permission.service */ "./src/app/shared/services/permission.service.ts");





let NewPostComponent = class NewPostComponent {
    constructor(post, permissionService) {
        this.post = post;
        this.permissionService = permissionService;
        this.onHandlePostSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    handlePostSubmit() {
        const value = this.postComment.value;
        if (!value) {
            return;
        }
        this.postButton.nativeElement.disabled = true;
        this.post
            .publish({
            text: value,
        })
            .subscribe(() => {
            this.onHandlePostSubmit.emit(this.postComment.value);
            this.postComment.value = "";
            this.postComment.focus();
        })
            .add(() => {
            this.postButton.nativeElement.disabled = false;
        });
    }
    hasPermission() {
        return this.permissionService.permission === "PESQUISADOR";
    }
};
NewPostComponent.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NewPostComponent.prototype, "onHandlePostSubmit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("postComment", { static: false, read: _text_area_text_area_component__WEBPACK_IMPORTED_MODULE_3__["TextAreaComponent"] })
], NewPostComponent.prototype, "postComment", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("postButton", { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], NewPostComponent.prototype, "postButton", void 0);
NewPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-new-post",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/new-post/new-post.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-post.component.scss */ "./src/app/shared/components/new-post/new-post.component.scss")).default]
    })
], NewPostComponent);



/***/ }),

/***/ "./src/app/shared/components/post-card/post-card.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/post-card/post-card.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  margin-bottom: 20px;\n}\n.card-header-image {\n  background-size: cover;\n}\n.mat-card-header {\n  padding: 0 !important;\n  margin: 0 !important;\n  display: flex;\n  justify-content: space-between;\n}\n.mat-card-header img {\n  cursor: pointer;\n}\n.mat-card-header .data {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  cursor: pointer;\n}\n.post-comments {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.post-text {\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n.post-info {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.comment-text {\n  background-color: #d5d5d5;\n  width: 100%;\n  border-radius: 20px;\n  padding: 10px;\n  word-break: break-all;\n  line-height: 20px;\n}\n.liked {\n  color: #2078f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1jYXJkL0M6XFxVc2Vyc1xcR3VzdGF2byBNdXJhdG9yaW9cXE9uZURyaXZlXFzDgXJlYSBkZSBUcmFiYWxob1xccHJvamV0b1xcZnJvbnQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xccG9zdC1jYXJkXFxwb3N0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bvc3QtY2FyZC9wb3N0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxzQkFBQTtBQ0NKO0FER0E7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQUY7QURFRTtFQUNFLGVBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNESjtBREtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FES0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNGRjtBREtBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0ZGO0FES0E7RUFDRSxjQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wb3N0LWNhcmQvcG9zdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICYtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgaW1nIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuZGF0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5wb3N0LWNvbW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5wb3N0LXRleHQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wb3N0LWluZm8ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb21tZW50LXRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNWQ1O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmxpa2VkIHtcbiAgY29sb3I6IHJnYigzMiwgMTIwLCAyNDQpO1xufVxuIiwiLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNhcmQtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1hdC1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYXQtY2FyZC1oZWFkZXIgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1hdC1jYXJkLWhlYWRlciAuZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA5MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvc3QtY29tbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnBvc3QtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBvc3QtaW5mbyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbW1lbnQtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubGlrZWQge1xuICBjb2xvcjogIzIwNzhmNDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/post-card/post-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/post-card/post-card.component.ts ***!
  \********************************************************************/
/*! exports provided: PostCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardComponent", function() { return PostCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/comment.service */ "./src/app/shared/services/comment.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/shared/services/socket.service.ts");
/* harmony import */ var _text_area_text_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text-area/text-area.component */ "./src/app/shared/components/text-area/text-area.component.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/shared/services/post.service.ts");







let PostCardComponent = class PostCardComponent {
    constructor(commentService, socket, postService) {
        this.commentService = commentService;
        this.socket = socket;
        this.postService = postService;
        this.loadingComments = false;
        this.onDeletePost = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.processing = false;
    }
    handleSubmitComment() {
        if (this.processing || !this.postComment.value)
            return;
        this.processing = true;
        this.commentService
            .comment({
            post_id: this.post._id,
            text: this.postComment.value,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => (this.postComment.value = "")))
            .subscribe()
            .add(() => (this.processing = false));
    }
    handleShowComments() {
        this.post.showComments = !this.post.showComments;
        if (this.post.showComments) {
            this.loadComments();
            this.socket.initSocket();
            this.socket.emit(_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketEvent"].ON_POST_ID, this.post._id);
            this.socket.onEvent(_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketEvent"].ON_NEW_COMMENT).subscribe((data) => {
                this.post.commentLength += 1;
                this.post.comments = [data, ...this.post.comments];
            });
        }
        else
            this.socket.disconnect();
    }
    ngOnDestroy() {
        this.socket.disconnect();
    }
    loadComments() {
        this.loadingComments = true;
        this.commentService
            .loadComments(this.post._id)
            .subscribe((data) => {
            this.post.comments = data;
            this.post.commentLength = this.post.comments.length;
        })
            .add(() => (this.loadingComments = false));
    }
    handleKeyUp(event) {
        if (event.keyCode === 13)
            this.handleSubmitComment();
    }
    handleDeletePost() {
        this.onDeletePost.emit(this.post);
    }
    handleLike() {
        this.postService.like(this.post._id).subscribe(() => {
            this.post.liked ? this.post.likesLength-- : this.post.likesLength++;
            this.post.liked = !this.post.liked;
        });
    }
    ngOnInit() { }
};
PostCardComponent.ctorParameters = () => [
    { type: _services_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"] },
    { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostCardComponent.prototype, "post", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PostCardComponent.prototype, "onDeletePost", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("postComment", { static: false, read: _text_area_text_area_component__WEBPACK_IMPORTED_MODULE_5__["TextAreaComponent"] })
], PostCardComponent.prototype, "postComment", void 0);
PostCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-post-card",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/post-card/post-card.component.html")).default,
        providers: [_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post-card.component.scss */ "./src/app/shared/components/post-card/post-card.component.scss")).default]
    })
], PostCardComponent);



/***/ }),

/***/ "./src/app/shared/components/post-container/post-container.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/post-container/post-container.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bvc3QtY29udGFpbmVyL3Bvc3QtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/post-container/post-container.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/post-container/post-container.component.ts ***!
  \******************************************************************************/
/*! exports provided: PostCcontainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCcontainerComponent", function() { return PostCcontainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/shared/services/post.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");





let PostCcontainerComponent = class PostCcontainerComponent {
    constructor(postService, dialog) {
        this.postService = postService;
        this.dialog = dialog;
        this.loading = false;
        this.posts = [];
    }
    onDeletePost(post) {
        this.dialog
            .open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            data: {
                message: "Excluir publicação?",
            },
        })
            .afterClosed()
            .subscribe((result) => {
            if (result)
                this.postService.delete(post._id).subscribe(() => {
                    this.posts.splice(this.posts.indexOf(post), 1);
                });
        });
    }
    ngOnInit() { }
};
PostCcontainerComponent.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostCcontainerComponent.prototype, "loading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostCcontainerComponent.prototype, "posts", void 0);
PostCcontainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-post-container",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/post-container/post-container.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post-container.component.scss */ "./src/app/shared/components/post-container/post-container.component.scss")).default]
    })
], PostCcontainerComponent);



/***/ }),

/***/ "./src/app/shared/components/text-area/text-area.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/text-area/text-area.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RleHQtYXJlYS90ZXh0LWFyZWEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/text-area/text-area.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/text-area/text-area.component.ts ***!
  \********************************************************************/
/*! exports provided: TextAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaComponent", function() { return TextAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TextAreaComponent = class TextAreaComponent {
    constructor() {
        this.preventEnter = true;
        this.name = "textarea";
        this.onEnterPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    resizeTextArea($event) {
        const el = $event.target;
        const enter = 13;
        const ctrlEnter = $event.keyCode === enter && $event.ctrlKey;
        if (this.preventEnter) {
            if (ctrlEnter || $event.keyCode !== enter) {
                if (ctrlEnter)
                    el.value += "\n";
                this.change(el);
            }
            else {
                $event.preventDefault();
                this.onEnterPress.emit();
            }
        }
        else {
            if ($event.keyCode === enter)
                this.onEnterPress.emit();
            this.change(el);
        }
    }
    change(el) {
        el.style.height = "";
        el.style.height = Math.min(el.scrollHeight, 2000) + "px";
    }
    get value() {
        return this.textarea.nativeElement.value || "";
    }
    set value(value) {
        this.textarea.nativeElement.value = value;
    }
    focus() {
        this.textarea.nativeElement.focus();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextAreaComponent.prototype, "preventEnter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextAreaComponent.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextAreaComponent.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TextAreaComponent.prototype, "onEnterPress", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("textarea", { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], TextAreaComponent.prototype, "textarea", void 0);
TextAreaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-text-area",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./text-area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/text-area/text-area.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./text-area.component.scss */ "./src/app/shared/components/text-area/text-area.component.scss")).default]
    })
], TextAreaComponent);



/***/ }),

/***/ "./src/app/shared/guard/logged-in.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/guard/logged-in.guard.ts ***!
  \*************************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let LoggedInGuard = class LoggedInGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.auth.tokenIsValid().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(loggedIn => {
            //console.log("loggedIn", loggedIn);
            if (!loggedIn)
                this.router.navigate(["login"]);
            return loggedIn;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => {
            this.router.navigate(["login"]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(false);
        }));
    }
};
LoggedInGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoggedInGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], LoggedInGuard);



/***/ }),

/***/ "./src/app/shared/guard/not-logged-in.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/guard/not-logged-in.guard.ts ***!
  \*****************************************************/
/*! exports provided: NotLoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotLoggedInGuard", function() { return NotLoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let NotLoggedInGuard = class NotLoggedInGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.auth.tokenIsValid().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(loggedIn => {
            if (loggedIn)
                this.router.navigate(["/feed"]);
            return !loggedIn;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => {
            this.router.navigate(["login"]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(false);
        }));
    }
};
NotLoggedInGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NotLoggedInGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], NotLoggedInGuard);



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "./src/app/shared/services/rest.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _monitor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monitor.service */ "./src/app/shared/services/monitor.service.ts");
/* harmony import */ var _permission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./permission.service */ "./src/app/shared/services/permission.service.ts");









let AuthService = class AuthService {
    constructor(restService, router, sessionService, monitor, permissionService) {
        this.restService = restService;
        this.router = router;
        this.sessionService = sessionService;
        this.monitor = monitor;
        this.permissionService = permissionService;
    }
    logout() {
        this.monitor
            .watch(this.restService.post("auth/exit", {}))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => {
            this.sessionService.clearToken();
            this.router.navigate(["/login"]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => {
            this.sessionService.clearToken();
            this.router.navigate(["/login"]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
        }))
            .subscribe();
    }
    login(payload) {
        return this.monitor.watch(this.restService.post("auth", payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
            this.permissionService.permission = result.permission;
            this.sessionService.setToken(result.token);
            this.router.navigate(["/"]);
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => {
            this.sessionService.clearToken();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
        }));
    }
    tokenIsValid() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((subscribe) => {
            this.isLoggedIn().subscribe((result) => {
                if (!result)
                    this.sessionService.clearToken();
                subscribe.next(result);
            }, (err) => {
                this.sessionService.clearToken();
                subscribe.next(false);
                throw err;
            });
        });
    }
    isLoggedIn() {
        return this.restService.get("auth/loggedIn", {});
    }
};
AuthService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: _monitor_service__WEBPACK_IMPORTED_MODULE_7__["MonitorService"] },
    { type: _permission_service__WEBPACK_IMPORTED_MODULE_8__["PermissionService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/comment.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/comment.service.ts ***!
  \****************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "./src/app/shared/services/rest.service.ts");
/* harmony import */ var _monitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitor.service */ "./src/app/shared/services/monitor.service.ts");




let CommentService = class CommentService {
    constructor(rest, monitor) {
        this.rest = rest;
        this.monitor = monitor;
    }
    comment(payload) {
        return this.monitor.watch(this.rest.post("comment", payload));
    }
    loadComments(postId) {
        return this.monitor.watch(this.rest.get("comment", {
            post_id: postId
        }));
    }
};
CommentService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _monitor_service__WEBPACK_IMPORTED_MODULE_3__["MonitorService"] }
];
CommentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], CommentService);



/***/ }),

/***/ "./src/app/shared/services/monitor.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/monitor.service.ts ***!
  \****************************************************/
/*! exports provided: MonitorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorService", function() { return MonitorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let MonitorService = class MonitorService {
    constructor(snack) {
        this.snack = snack;
    }
    watch(observable) {
        return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => {
            this.snack.show({ message: e, type: "D" });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
        }));
    }
};
MonitorService.ctorParameters = () => [
    { type: _snackbar_service__WEBPACK_IMPORTED_MODULE_2__["SnackbarService"] }
];
MonitorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], MonitorService);



/***/ }),

/***/ "./src/app/shared/services/permission.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/permission.service.ts ***!
  \*******************************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PermissionService = class PermissionService {
    constructor() { }
    get permission() {
        return this._permission;
    }
    set permission(value) {
        this._permission = value;
    }
};
PermissionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], PermissionService);



/***/ }),

/***/ "./src/app/shared/services/post.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/post.service.ts ***!
  \*************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "./src/app/shared/services/rest.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _monitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monitor.service */ "./src/app/shared/services/monitor.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snackbar.service */ "./src/app/shared/services/snackbar.service.ts");







let PostService = class PostService {
    constructor(rest, monitor, snack) {
        this.rest = rest;
        this.monitor = monitor;
        this.snack = snack;
    }
    getAll() {
        return this.monitor.watch(this.rest.get("post")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((posts) => {
            return posts.map((post) => {
                post.showComments = false;
                return post;
            });
        }));
    }
    publish(payload) {
        return this.monitor.watch(this.rest.post("post", payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => {
            this.snack.show({ message: e, type: "D" });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
        }));
    }
    delete(postId) {
        return this.monitor.watch(this.rest.delete("post", { id: postId }));
    }
    like(postId) {
        return this.monitor.watch(this.rest.post("post/like", { id: postId }));
    }
};
PostService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _monitor_service__WEBPACK_IMPORTED_MODULE_4__["MonitorService"] },
    { type: _snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"] }
];
PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], PostService);



/***/ }),

/***/ "./src/app/shared/services/push-notification.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/push-notification.service.ts ***!
  \**************************************************************/
/*! exports provided: PushNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationService", function() { return PushNotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "./src/app/shared/services/rest.service.ts");



let PushNotificationService = class PushNotificationService {
    constructor(restService) {
        this.restService = restService;
    }
    sendSubscriptionToTheServer(subscription) {
        return this.restService
            .post("notification/subscription", subscription)
            .subscribe();
    }
};
PushNotificationService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
];
PushNotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], PushNotificationService);



/***/ }),

/***/ "./src/app/shared/services/rest.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/rest.service.ts ***!
  \*************************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let RestService = class RestService {
    constructor(http, sessionService, router) {
        this.http = http;
        this.sessionService = sessionService;
        this.router = router;
    }
    get(path, body, header) {
        let opts = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](),
            headers: this.createHeader(header),
        };
        if (body) {
            Object.getOwnPropertyNames(body).forEach((attr) => {
                opts.params = opts.params.append(attr, body[attr]);
            });
        }
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + path, opts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => this.catchRequestError(e)));
    }
    post(path, body, header) {
        //console.log(body);
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + path, body || {}, {
            headers: this.createHeader(header),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => this.catchRequestError(e)));
    }
    delete(path, body, header) {
        let opts = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](),
            headers: this.createHeader(header),
        };
        if (body) {
            Object.getOwnPropertyNames(body).forEach((attr) => {
                opts.params = opts.params.append(attr, body[attr]);
            });
        }
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + path, opts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => this.catchRequestError(e)));
    }
    put(path, body, header) {
        //console.log(body);
        return this.http
            .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + path, body || {}, {
            headers: this.createHeader(header),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => this.catchRequestError(e)));
    }
    catchRequestError(e) {
        if (e.status === 401) {
            this.router.navigate(["/login"]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])("");
        }
        var err = e.error.message || e.message;
        if (e.status === 0)
            err = "Servidor indisponível no momento.";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
    }
    createHeader(header) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "app-token": this.sessionService.getToken(),
        });
        if (header)
            Object.getOwnPropertyNames(header).forEach((attr) => {
                headers = headers.set(attr, header[attr]);
            });
        return headers;
    }
};
RestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
RestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], RestService);



/***/ }),

/***/ "./src/app/shared/services/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let SearchService = class SearchService {
    constructor(router) {
        this.router = router;
    }
    handleSearch() {
        if (!this.filter)
            return;
        this.router.navigate(["/search/profile"], {
            queryParams: { name: this.filter },
        });
        this.filter = "";
    }
};
SearchService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], SearchService);



/***/ }),

/***/ "./src/app/shared/services/session.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/session.service.ts ***!
  \****************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SessionService = class SessionService {
    clearToken() {
        localStorage.setItem("app-token", "");
    }
    setToken(token) {
        localStorage.setItem("app-token", token);
    }
    getToken() {
        return localStorage.getItem("app-token") || "";
    }
    constructor() { }
};
SessionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], SessionService);



/***/ }),

/***/ "./src/app/shared/services/settings.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/settings.service.ts ***!
  \*****************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "./src/app/shared/services/rest.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _monitor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monitor.service */ "./src/app/shared/services/monitor.service.ts");
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snackbar.service */ "./src/app/shared/services/snackbar.service.ts");







let SettingsService = class SettingsService {
    constructor(snack, restService, monitor) {
        this.snack = snack;
        this.restService = restService;
        this.monitor = monitor;
    }
    set userData(value) {
        delete value.password;
        this._userData = Object.assign({}, value);
    }
    get userData() {
        if (!this._userData)
            return {};
        return this._userData;
    }
    update(payload) {
        return this.monitor
            .watch(this.restService.put("user", {
            name: payload.name,
            password: payload.password,
            imageUrl: payload.imageUrl,
            details: payload.details,
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => {
            this.userData = payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => {
            this.snack.show({ message: e, type: "D" });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
        }));
    }
    load() {
        return this.monitor.watch(this.restService.get("user/settings")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => {
            this.userData = user;
            return user;
        }));
    }
    isPesquisador() {
        return this.userData.type === "PESQUISADOR";
    }
};
SettingsService.ctorParameters = () => [
    { type: _snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _monitor_service__WEBPACK_IMPORTED_MODULE_5__["MonitorService"] }
];
SettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], SettingsService);



/***/ }),

/***/ "./src/app/shared/services/snackbar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/snackbar.service.ts ***!
  \*****************************************************/
/*! exports provided: SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");



let SnackbarService = class SnackbarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    show(opts) {
        var panelClass = "";
        var duration = 2500;
        var action = "X";
        if (opts.type === "S") {
            action = undefined;
            panelClass = "snack-bar-success";
            duration = 1000;
        }
        else if (opts.type === "W") {
            panelClass = "snack-bar-warning";
            duration = 2500;
        }
        else {
            panelClass = "snack-bar-danger";
            duration = 3500;
        }
        if (!opts.message)
            return;
        this.snackBar.open(opts.message, action, {
            duration,
            verticalPosition: "top",
            horizontalPosition: "right",
            panelClass,
        });
    }
};
SnackbarService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
SnackbarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], SnackbarService);



/***/ }),

/***/ "./src/app/shared/services/socket.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/socket.service.ts ***!
  \***************************************************/
/*! exports provided: SocketEvent, SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketEvent", function() { return SocketEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var SocketEvent;
(function (SocketEvent) {
    SocketEvent["ON_POST_ID"] = "on_post_id";
    SocketEvent["ON_NEW_COMMENT"] = "on_new_comment";
    SocketEvent["ON_NEW_POST"] = "on_new_post";
    SocketEvent["ON_SEND_SESSION_ID"] = "on_send_session_id";
})(SocketEvent || (SocketEvent = {}));
let SocketService = class SocketService {
    initSocket() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host);
    }
    disconnect() {
        if (this.socket)
            this.socket.disconnect();
    }
    emit(event, data) {
        this.socket.emit(event, data);
    }
    onEvent(event) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on(event, data => observer.next(data));
        });
    }
};
SocketService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SocketService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest.service */ "./src/app/shared/services/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _monitor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monitor.service */ "./src/app/shared/services/monitor.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let UserService = class UserService {
    constructor(restService, monitor, router) {
        this.restService = restService;
        this.monitor = monitor;
        this.router = router;
    }
    get(name) {
        return this.monitor
            .watch(this.restService.get("user/search", { name: name }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((e) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(e);
        }));
    }
    follow(userId) {
        return this.monitor
            .watch(this.restService.post("user/follow", { userId: userId }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((e) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(e);
        }));
    }
    unfollow(userId) {
        return this.monitor.watch(this.restService.post("user/unfollow", { userId: userId }));
    }
    getUserProfile(name) {
        return this.restService.get("user/profile", { name: name }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((profile) => {
            profile.posts.map((post) => {
                post.showComments = false;
                return post;
            });
            return profile;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((e) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(e);
        }));
    }
    getUserPosts() {
        return this.monitor.watch(this.restService.get("post/user")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((posts) => {
            return posts.map((post) => {
                post.showComments = false;
                return post;
            });
        }));
    }
    register(payload) {
        return this.monitor.watch(this.restService.post("user", payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            this.router.navigate(["/login"]);
            return result;
        }));
    }
};
UserService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _monitor_service__WEBPACK_IMPORTED_MODULE_5__["MonitorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], UserService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    host: "http://localhost:3000/",
    website: "http://localhost:4200/",
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gustavo Muratorio\OneDrive\Área de Trabalho\projeto\front\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map