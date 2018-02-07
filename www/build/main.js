webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cni_cni__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__acteNaissance_acteNaissance__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autorisationEntree_autorisationEntree__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__autorisationSejour_autorisationSejour__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carteSejour_carteSejour__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__passport_passport__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__permis_permis__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__visa_visa__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.showCni = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cni_cni__["a" /* CniPage */]);
    };
    HomePage.prototype.showPassport = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__passport_passport__["a" /* PassportPage */]);
    };
    HomePage.prototype.showCarteSejour = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__carteSejour_carteSejour__["a" /* CarteSejourPage */]);
    };
    HomePage.prototype.showVisa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__visa_visa__["a" /* VisaPage */]);
    };
    HomePage.prototype.showAutEntree = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__autorisationEntree_autorisationEntree__["a" /* AutorisationEntreePage */]);
    };
    HomePage.prototype.showAutSejour = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__autorisationSejour_autorisationSejour__["a" /* AutorisationSejourPage */]);
    };
    HomePage.prototype.showActe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__acteNaissance_acteNaissance__["a" /* ActeNaissancePage */]);
    };
    HomePage.prototype.showPermis = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__permis_permis__["a" /* PermisPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="cameroun">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title center>ID Found</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-content class="card-background-page">\n    <ion-card>\n      <img src="assets/imgs/card-centre.jpg"/>\n      <div class="card-title">ID found</div>\n      <div class="card-subtitle">41 Listings</div>\n    </ion-card>\n  </ion-content>\n\n\n  <ion-card class="bil1" (tap)="showCni()">\n    <!--<div class="rw">-->\n    <ion-row class="rw">\n      <ion-col col-2>\n          <ion-icon class="ic" name="id-found-cni" ></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n          <div class="card-title">RECUPERER CNI</div>\n          <div class="card-subtitle">Entrer pour plus de detail...</div>\n      </ion-col>\n    </ion-row>\n    <!--</div>-->\n  </ion-card>\n\n  <ion-card class="bil2" (tap)="showPassport()">\n    <!--<div class="rw">-->\n    <ion-row class="rw">\n      <ion-col col-2>\n        <ion-icon class="ic" name="id-found-passport" ></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <div class="card-title">RECUPERER PASSPORT</div>\n        <div class="card-subtitle">Retrouver votre passport</div>\n      </ion-col>\n    </ion-row>\n    <!--</div>-->\n  </ion-card>\n\n  <ion-card class="bil3" (tap)="showCarteSejour()">\n    <!--<div class="rw">--> \n    <ion-row class="rw">\n      <ion-col col-2>\n        <ion-icon class="ic" name="id-found-sejour" ></ion-icon>\n      </ion-col>\n      <ion-col col-10>   \n        <div class="card-title">CARTE DE SEJOUR</div>\n        <div class="card-subtitle">Retrouver votre carte de sejour</div>\n      </ion-col>\n    </ion-row>\n    <!--</div>-->\n  </ion-card>\n\n  <ion-card class="bil5" (tap)="showAutEntree()">\n    <!--<div class="rw">-->\n    <ion-row class="rw">\n      <ion-col col-2>\n        <ion-icon class="ic" name="id-found-entree" ></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <div class="card-title">AUTORISATION D\'ENTREE</div>\n        <div class="card-subtitle">Recupérer votre autorisation</div>\n      </ion-col>\n    </ion-row>\n    <!--</div>-->\n  </ion-card>\n\n  <ion-card class="bil6" (tap)="showAutSejour()">\n    <!--<div class="rw">-->\n    <ion-row class="rw">\n      <ion-col col-2>\n        <ion-icon class="ic" name="id-found-sortie" ></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <div class="card-title">AUTORISATION SEJOUR</div>\n        <div class="card-subtitle">Recupérer votre autorisation</div>\n      </ion-col>\n    </ion-row>\n    <!--</div>-->\n  </ion-card>\n\n  <ion-card class="bil7" (tap)="showActe()">\n    <!--<div class="rw">-->\n    <ion-row class="rw">\n      <ion-col col-2>\n        <ion-icon class="ic" name="id-found-acte" ></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <div class="card-title">ACTE DE NAISSANCE</div>\n        <div class="card-subtitle">Recupérer votre acte de naissance</div>\n      </ion-col>\n    </ion-row>\n    <!--</div>-->\n  </ion-card>\n\n  <ion-card class="bil8" (tap)="showPermis()">\n    <!--<div class="rw">-->\n    <ion-row class="rw">\n      <ion-col col-2>\n        <ion-icon class="ic" name="id-found-driver-license" ></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <div class="card-title">PERMIS DE CONDUIRE</div>\n        <div class="card-subtitle">Retrouver permis de conduire</div>\n      </ion-col>\n    </ion-row>\n    <!--</div>-->\n  </ion-card>\n\n  <ion-card class="bil4" (tap)="showVisa()">\n    <!--<div class="rw">-->\n    <ion-row class="rw">\n      <ion-col col-2>\n        <ion-icon class="ic" name="plane" ></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <div class="card-title">VISA</div>\n        <div class="card-subtitle">Recupérer votre Visa</div>\n      </ion-col>\n    </ion-row>\n    <!--</div>-->\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="cameroun"><ion-icon class="qr" name="id-found-qr-code"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CniPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CniPage = (function () {
    function CniPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CniPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cni',template:/*ion-inline-start:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\cni\cni.html"*/'<ion-header>\n\n    <ion-navbar color="cameroun">\n\n        <ion-title center>Rech. CNI</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n  \n\n<ion-content>\n\n    <ion-content class="card-background-page">\n\n        <ion-card>\n\n            <img src="assets/imgs/cni.jpg"/>\n\n        </ion-card>\n\n    </ion-content>\n\n   \n\n    <ion-card>\n\n        <h2>Rechercher Cni</h2>\n\n        <p>Bien Vouloir entrer le numero a neuf chiffre situer sur votre recepice de depot</p>\n\n        <ion-item>\n\n            <ion-label floating><ion-icon name="id-found-cni"></ion-icon> N° Recepicé depot</ion-label>\n\n            <ion-input type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="bout">\n\n            <button ion-button full color="cameroun">Rechercher</button>\n\n        </div>\n\n    </ion-card>\n\n    \n\n    <ion-fab right bottom>\n\n        <button ion-fab color="cameroun"><ion-icon name="id-found-qr-code"></ion-icon></button>\n\n    </ion-fab>\n\n        \n\n</ion-content>'/*ion-inline-end:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\cni\cni.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CniPage);
    return CniPage;
}());

//# sourceMappingURL=cni.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActeNaissancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActeNaissancePage = (function () {
    function ActeNaissancePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ActeNaissancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acteNaissance',template:/*ion-inline-start:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\acteNaissance\acteNaissance.html"*/'<ion-header>\n\n    <ion-navbar color="cameroun">\n\n        <ion-title center>Act. Naiss</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content>\n\n    <ion-card>\n\n        <div>\n\n            <img src="assets/imgs/adn.jpg" alt="">\n\n        </div>\n\n        <hr>\n\n        <h2>contenu Acte Naissance</h2>\n\n        <p>Le numero de recepice est un code a 9 chiffres qui \n\n            permet de retrouver votre piece dans la base de donnee \n\n            de tous les comissariats.\n\n        </p>\n\n        <ion-item>\n\n            <ion-label floating><ion-icon name="id-found-acte"></ion-icon> N° Recepicé</ion-label>\n\n            <ion-input type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="bout">\n\n            <button ion-button full color="cameroun">Rechercher</button>\n\n        </div>\n\n    </ion-card>\n\n    \n\n    <ion-fab right bottom>\n\n        <button ion-fab color="cameroun"><ion-icon name="id-found-qr-code"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\acteNaissance\acteNaissance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ActeNaissancePage);
    return ActeNaissancePage;
}());

//# sourceMappingURL=acteNaissance.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorisationEntreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutorisationEntreePage = (function () {
    function AutorisationEntreePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AutorisationEntreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-autorisationEntree',template:/*ion-inline-start:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\autorisationEntree\autorisationEntree.html"*/'<ion-header>\n\n    <ion-navbar color="cameroun">\n\n        <ion-title center>Aut. Entree</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content>\n\n    <ion-card>\n\n        <div>\n\n            <img src="assets/imgs/autoEntree.jpg" alt="">\n\n        </div>\n\n        <hr>\n\n        <h2>contenu Autorisation entree</h2>\n\n        <p>Le numero de recepice est un code a 9 chiffres qui \n\n            permet de retrouver votre piece dans la base de donnee \n\n            de tous les comissariats.\n\n        </p>\n\n        <ion-item>\n\n            <ion-label floating><ion-icon name="id-found-entree"></ion-icon> N° Recepicé</ion-label>\n\n            <ion-input type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="bout">\n\n            <button ion-button full color="cameroun">Rechercher</button>\n\n        </div>\n\n    </ion-card>\n\n    \n\n    <ion-fab right bottom>\n\n        <button ion-fab color="cameroun"><ion-icon name="id-found-qr-code"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\autorisationEntree\autorisationEntree.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AutorisationEntreePage);
    return AutorisationEntreePage;
}());

//# sourceMappingURL=autorisationEntree.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorisationSejourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutorisationSejourPage = (function () {
    function AutorisationSejourPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AutorisationSejourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-autorisationSejour',template:/*ion-inline-start:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\autorisationSejour\autorisationSejour.html"*/'<ion-header>\n\n    <ion-navbar color="cameroun">\n\n        <ion-title center>Aut. Sejour</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content>\n\n    <ion-card>\n\n        <div>\n\n            <img src="assets/imgs/autoEntree.jpg" alt="">\n\n        </div>\n\n        <hr>\n\n        <h2>contenu Autorisation sejour</h2>\n\n        <p>Le numero de recepice est un code a 9 chiffres qui \n\n            permet de retrouver votre piece dans la base de donnee \n\n            de tous les comissariats.\n\n        </p>\n\n        <ion-item>\n\n            <ion-label floating><ion-icon name="id-found-sortie"></ion-icon> N° Recepicé</ion-label>\n\n            <ion-input type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="bout">\n\n            <button ion-button full color="cameroun">Rechercher</button>\n\n        </div>\n\n    </ion-card>\n\n    \n\n    <ion-fab right bottom>\n\n        <button ion-fab color="cameroun"><ion-icon name="id-found-qr-code"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\autorisationSejour\autorisationSejour.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AutorisationSejourPage);
    return AutorisationSejourPage;
}());

//# sourceMappingURL=autorisationSejour.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarteSejourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarteSejourPage = (function () {
    function CarteSejourPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CarteSejourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carteSejour',template:/*ion-inline-start:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\carteSejour\carteSejour.html"*/'<ion-header>\n\n    <ion-navbar color="cameroun">\n\n        <ion-title center>Carte Sejour</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content>\n\n    <ion-content class="card-background-page">\n\n        <ion-card>\n\n            <img src="assets/imgs/sejour.jpg"/>\n\n        </ion-card>\n\n    </ion-content>\n\n\n\n    <ion-card>\n\n        <h2>Contenu Carte sejour</h2>\n\n        <p>Bien Vouloir entrer le numero a neuf chiffre situer sur votre recepice</p>\n\n        <ion-item>\n\n            <ion-label floating><ion-icon name="id-found-sejour"></ion-icon> N° Recepicé</ion-label>\n\n            <ion-input type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="bout">\n\n            <button ion-button full color="cameroun">Rechercher</button>\n\n        </div>\n\n    </ion-card>\n\n    \n\n    <ion-fab right bottom>\n\n        <button ion-fab color="cameroun"><ion-icon name="id-found-qr-code"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\carteSejour\carteSejour.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CarteSejourPage);
    return CarteSejourPage;
}());

//# sourceMappingURL=carteSejour.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PassportPage = (function () {
    function PassportPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PassportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-passport',template:/*ion-inline-start:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\passport\passport.html"*/'<ion-header>\n\n    <ion-navbar color="cameroun">\n\n        <ion-title center>Passport</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content>\n\n    <ion-content class="card-background-page">\n\n        <ion-card>\n\n            <img src="assets/imgs/pass.jpg"/>\n\n        </ion-card>\n\n    </ion-content>\n\n\n\n    <ion-card>\n\n        <h2>Rechercher Passport</h2>\n\n        <ion-item>\n\n            <ion-label floating><ion-icon name="id-found-passport"></ion-icon> N° Recepicé du passport</ion-label>\n\n            <ion-input type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="bout">\n\n            <button ion-button full color="cameroun">Rechercher</button>\n\n        </div>\n\n\n\n        <p>\n\n            Le numero de recepice obtenu durant l\'etablissement de votre passport \n\n            est un code situe sur votre recepisse compose de 9 chiffres. Ce numero \n\n            est unique et c\'est grace a ce numero que vous etes identifiable dans \n\n            les serveurs des differents comissariats.\n\n        </p>\n\n    </ion-card>\n\n   \n\n    <ion-fab right bottom>\n\n        <button ion-fab color="cameroun"><ion-icon name="id-found-qr-code"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\passport\passport.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], PassportPage);
    return PassportPage;
}());

//# sourceMappingURL=passport.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermisPage = (function () {
    function PermisPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PermisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-permis',template:/*ion-inline-start:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\permis\permis.html"*/'<ion-header>\n\n    <ion-navbar color="cameroun">\n\n        <ion-title center>Permis</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content>\n\n    <ion-content class="card-background-page">\n\n        <ion-card>\n\n            <img src="assets/imgs/pdc.jpg"/>\n\n        </ion-card>\n\n    </ion-content>\n\n\n\n    <ion-card>\n\n        <h2>Contenu permis de conduire</h2>\n\n        <p>Bien Vouloir entrer le numero a neuf chiffre situer sur votre recepice</p>\n\n        <ion-item>\n\n            <ion-label floating><ion-icon name="id-found-driver-license"></ion-icon> N° Recepicé</ion-label>\n\n            <ion-input type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="bout">\n\n            <button ion-button full color="cameroun">Rechercher</button>\n\n        </div>\n\n    </ion-card>\n\n    \n\n    <ion-fab right bottom>\n\n        <button ion-fab color="cameroun"><ion-icon name="id-found-qr-code"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\permis\permis.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], PermisPage);
    return PermisPage;
}());

//# sourceMappingURL=permis.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisaPage = (function () {
    function VisaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VisaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visa',template:/*ion-inline-start:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\visa\visa.html"*/'<ion-header>\n\n    <ion-navbar color="cameroun">\n\n        <ion-title center>Visa</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content>\n\n    <ion-content class="card-background-page">\n\n        <ion-card>\n\n            <img src="assets/imgs/visa.jpg"/>\n\n        </ion-card>\n\n    </ion-content>\n\n\n\n    <ion-card>\n\n        <h2>contenu Visa</h2>\n\n        <p>Bien Vouloir entrer le numero a neuf chiffre situer sur votre recepice</p>\n\n        <ion-item>\n\n        <ion-label floating><ion-icon name="plane"></ion-icon> N° Recepicé</ion-label>\n\n            <ion-input type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <div class="bout">\n\n            <button ion-button full color="cameroun">Rechercher</button>\n\n        </div>\n\n    </ion-card>\n\n    \n\n    <ion-fab right bottom>\n\n        <button ion-fab color="cameroun"><ion-icon name="id-foundqr-code"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\visa\visa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], VisaPage);
    return VisaPage;
}());

//# sourceMappingURL=visa.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cni_cni__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_acteNaissance_acteNaissance__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_autorisationEntree_autorisationEntree__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_autorisationSejour_autorisationSejour__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_carteSejour_carteSejour__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_passport_passport__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_permis_permis__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_visa_visa__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Pages












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_cni_cni__["a" /* CniPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_acteNaissance_acteNaissance__["a" /* ActeNaissancePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_autorisationEntree_autorisationEntree__["a" /* AutorisationEntreePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_autorisationSejour_autorisationSejour__["a" /* AutorisationSejourPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_carteSejour_carteSejour__["a" /* CarteSejourPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_passport_passport__["a" /* PassportPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_permis_permis__["a" /* PermisPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_visa_visa__["a" /* VisaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_cni_cni__["a" /* CniPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_acteNaissance_acteNaissance__["a" /* ActeNaissancePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_autorisationEntree_autorisationEntree__["a" /* AutorisationEntreePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_autorisationSejour_autorisationSejour__["a" /* AutorisationSejourPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_carteSejour_carteSejour__["a" /* CarteSejourPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_passport_passport__["a" /* PassportPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_permis_permis__["a" /* PermisPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_visa_visa__["a" /* VisaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\app\app.html"*/'<ion-menu [content]="content">\n  <!--<ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu ID found</ion-title>\n    </ion-toolbar>\n  </ion-header>-->\n\n  <ion-content class="bck">\n    <div class="logo">\n      <img src="assets/imgs/logoId.png" >\n    </div>\n    <ion-list no-lines>\n      <button menuClose class="bck" ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button class="bck" menuClose ion-item clear>\n        Mon Compte\n      </button>\n      <button class="bck" menuClose ion-item>\n        Personaliser\n      </button>\n      <button class="bck" menuClose ion-item>\n        Parametres\n      </button>\n      <button class="bck" menuClose ion-item>\n        Plus..\n      </button>\n      <button class="bck" menuClose ion-item>\n        A propos\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\STEPH_CYRILLE\BACKUP Projets\idFound(Master)\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map