var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @paid
 * @name TealiumInstallReferrer
 * @description
 * This module depends on the [Tealium Cordova Plugin](https://github.com/tealium/cordova-plugin). Without it, this module will not do anything.
 * Implements a Broadcast Receiver for the INSTALL_REFERRER intent.
 *
 * @usage
 * ```
 * import { TealiumInstallReferrer } from '@ionic-native/tealium-installreferrer';
 *
 *
 * constructor(private installReferrer: TealiumInstallReferrer) { }
 *
 *
 * this.installReferrer.setPersistent("main");
 * this.installReferrer.setVolatile("main");
 *
 *
 *
 * ```
 */
var TealiumInstallReferrer = (function (_super) {
    __extends(TealiumInstallReferrer, _super);
    function TealiumInstallReferrer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function stores the install referrer information as persistent data
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    TealiumInstallReferrer.prototype.setPersistent = function (instanceName) {
        return;
    };
    /**
     * This function stores the install referrer information as volatile data
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    TealiumInstallReferrer.prototype.setVolatile = function (instanceName) {
        return;
    };
    TealiumInstallReferrer.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TealiumInstallReferrer.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], TealiumInstallReferrer.prototype, "setPersistent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], TealiumInstallReferrer.prototype, "setVolatile", null);
    TealiumInstallReferrer = __decorate([
        Plugin({
            pluginName: 'TealiumInstallReferrer',
            plugin: 'tealium-cordova-installreferrer',
            pluginRef: 'window.tealiumInstallReferrer',
            repo: 'https://github.com/Tealium/cordova-plugin',
            platforms: ['Android'],
            install: '',
        })
    ], TealiumInstallReferrer);
    return TealiumInstallReferrer;
}(IonicNativePlugin));
export { TealiumInstallReferrer };
//# sourceMappingURL=index.js.map