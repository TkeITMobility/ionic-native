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
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name App Center Push
 * @description
 *
 * For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/push/cordova
 *
 * @usage
 * ```typescript
 * import { AppCenterPush } from '@ionic-native/app-center-push';
 *
 *
 * constructor(private appCenterPush: AppCenterPush) { }
 *
 * ...
 *
 * this.appCenterPush.setEnabled(true).then(() => {
 *    this.appCenterPush.addEventListener('My Event').subscribe(pushNotification => {
 *        console.log('Recived push notification', pushNotification);
 *    });
 * });
 *
 * ```
 */
var AppCenterPush = (function (_super) {
    __extends(AppCenterPush, _super);
    function AppCenterPush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Subscribe to an event
     * @param  {string} eventName Event name
     * @returns {Observable<any>}
     */
    AppCenterPush.prototype.addEventListener = function (eventName) {
        return;
    };
    /**
     * Check if App Center Push is enabled
     * @returns {Promise<boolean>}
     */
    AppCenterPush.prototype.isEnabled = function () {
        return;
    };
    /**
     * Enable or disable App Center Push at runtime
     * @param  {boolean} shouldEnable Set value
     * @returns {Promise<void>}
     */
    AppCenterPush.prototype.setEnabled = function (shouldEnable) {
        return;
    };
    AppCenterPush.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AppCenterPush.ctorParameters = function () { return []; };
    __decorate([
        Cordova({
            observable: true,
            clearFunction: 'removeEventListener'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Observable)
    ], AppCenterPush.prototype, "addEventListener", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppCenterPush.prototype, "isEnabled", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], AppCenterPush.prototype, "setEnabled", null);
    AppCenterPush = __decorate([
        Plugin({
            pluginName: 'AppCenterPush',
            plugin: 'cordova-plugin-appcenter-push',
            pluginRef: 'AppCenter.Push',
            repo: 'https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push',
            platforms: ['Android', 'iOS']
        })
    ], AppCenterPush);
    return AppCenterPush;
}(IonicNativePlugin));
export { AppCenterPush };
//# sourceMappingURL=index.js.map