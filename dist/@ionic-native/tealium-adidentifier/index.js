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
 * @name TealiumAdIdentifier
 * @description
 * This module depends on the [Tealium Cordova Plugin](https://github.com/tealium/cordova-plugin). Without it, this module will not do anything.
 * Makes the IDFA and Google Ad Identifier available in the Tealium data layer.
 *
 * @usage
 * ```
 * import { TealiumAdIdentifier } from '@ionic-native/tealium-adidentifier';
 *
 *
 * constructor(private adIdentifier: TealiumAdIdentifier) { }
 *
 * ...
 *
 *
 * this.adIdentifier.setPersistent("main");
 * this.adIdentifier.setVolatile("main");
 *
 * ```
 */
var TealiumAdIdentifier = (function (_super) {
    __extends(TealiumAdIdentifier, _super);
    function TealiumAdIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function stores the ad identifier information as persistent data
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    TealiumAdIdentifier.prototype.setPersistent = function (instanceName) {
        return;
    };
    /**
     * This function stores the ad identifier information as volatile data
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    TealiumAdIdentifier.prototype.setVolatile = function (instanceName) {
        return;
    };
    TealiumAdIdentifier.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TealiumAdIdentifier.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], TealiumAdIdentifier.prototype, "setPersistent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], TealiumAdIdentifier.prototype, "setVolatile", null);
    TealiumAdIdentifier = __decorate([
        Plugin({
            pluginName: 'TealiumAdIdentifier',
            plugin: 'tealium-cordova-adidentifier',
            pluginRef: 'window.tealiumAdIdentifier',
            repo: 'https://github.com/Tealium/cordova-plugin',
            platforms: ['Android', 'iOS'],
            install: '',
        })
    ], TealiumAdIdentifier);
    return TealiumAdIdentifier;
}(IonicNativePlugin));
export { TealiumAdIdentifier };
//# sourceMappingURL=index.js.map