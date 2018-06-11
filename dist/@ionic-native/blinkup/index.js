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
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
/**
 * @name BlinkUp
 * @description
 * Electric Imp BlinkUp ionic plugin.
 *
 * @usage
 * ```typescript
 * import { BlinkUp } from '@ionic-native/blinkup';
 *
 * const options = <BlinkUpWifiOptions>{
 *    apiKey: 'API_KEY',
 *    timeoutMs: 60000,
 *    ssid: 'MY_SSID',
 *    password: 'MY_PASSWORD'
 *  }
 *  BlinkUp.flashWifiBlinkUp(options).subscribe(
 *     (result) => console.log('Done'),
 *     (error) => console.log(error)
 *   )
 * ```
 */
var BlinkUp = (function (_super) {
    __extends(BlinkUp, _super);
    function BlinkUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * startBlinkUp - starts the blinkup process
     * @param {module:blinkup.BlinkUpOptions} options BlinkUp Options
     * @return {Observable<any>} Returns an Observable
     */
    BlinkUp.prototype.startBlinkUp = function (options) { return; };
    /**
     * flashWifiBlinkUp - invokes the flash wifi process
     * @param {module:blinkup.BlinkUpWifiOptions} options BlinkUp Wifi Options
     * @return {Observable<any>} Returns an Observable
     */
    BlinkUp.prototype.flashWifiBlinkUp = function (options) { return; };
    /**
     * flashWPSBlinkUp - invokes the flash wps process
     * @param {module:blinkup.BlinkUpWPSOptions} options BlinkUp WPS Options
     * @return {Observable<any>} Returns an Observable
     */
    BlinkUp.prototype.flashWPSBlinkUp = function (options) { return; };
    /**
     * abortBlinkUp - abort blinkup process
     * @return {Observable<any>} Returns an Observable
     */
    BlinkUp.prototype.abortBlinkUp = function () { return; };
    /**
     * clearBlinkUpData - clear wifi data
     * @return {Observable<any>} Returns an Observable
     */
    BlinkUp.prototype.clearBlinkUpData = function () { return; };
    BlinkUp.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BlinkUp.ctorParameters = function () { return []; };
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], BlinkUp.prototype, "startBlinkUp", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], BlinkUp.prototype, "flashWifiBlinkUp", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], BlinkUp.prototype, "flashWPSBlinkUp", null);
    __decorate([
        Cordova({
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], BlinkUp.prototype, "abortBlinkUp", null);
    __decorate([
        Cordova({
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], BlinkUp.prototype, "clearBlinkUpData", null);
    BlinkUp = __decorate([
        Plugin({
            pluginName: 'BlinkUp',
            plugin: 'cordova-plugin-blinkup',
            pluginRef: 'blinkup',
            repo: 'https://github.com/SensorShare/cordova-plugin-blinkup',
            platforms: ['Android', 'iOS']
        })
    ], BlinkUp);
    return BlinkUp;
}(IonicNativePlugin));
export { BlinkUp };
//# sourceMappingURL=index.js.map