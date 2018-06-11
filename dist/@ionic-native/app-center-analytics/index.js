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
/**
 * @name App Center Analytics
 * @description
 * App Center Analytics helps you understand user behavior and customer engagement to improve your app.
 * The SDK automatically captures session count and device properties like model, OS version, etc.
 * You can define your own custom events to measure things that matter to you.
 * All the information captured is available in the App Center portal for you to analyze the data.
 *
 * For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/analytics/cordova
 *
 * @usage
 * ```typescript
 * import { AppCenterAnalytics } from '@ionic-native/app-center-analytics';
 *
 *
 * constructor(private appCenterAnalytics: AppCenterAnalytics) { }
 *
 * ...
 *
 * this.appCenterAnalytics.setEnabled(true).then(() => {
 *    this.appCenterAnalytics.trackEvent('My Event', { TEST: 'HELLO_WORLD' }).then(() => {
 *        console.log('Custom event tracked');
 *    });
 * });
 *
 * ```
 * @interfaces
 * StringMap
 */
var AppCenterAnalytics = (function (_super) {
    __extends(AppCenterAnalytics, _super);
    function AppCenterAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Tracks an custom event.
     * You can send up to 200 distinct event names. Also, there is a maximum limit of 256 characters per event name
     * and 64 characters per event property name and event property value.
     * @param  {string} eventName Event name
     * @param  {StringMap} properties Event properties
     * @returns {Promise<void>}
     */
    AppCenterAnalytics.prototype.trackEvent = function (eventName, properties) {
        return;
    };
    /**
     * Check if App Center Analytics is enabled
     * @returns {Promise<boolean>}
     */
    AppCenterAnalytics.prototype.isEnabled = function () {
        return;
    };
    /**
     * Enable or disable App Center Analytics at runtime
     * @param  {boolean} shouldEnable Set value
     * @returns {Promise<void>}
     */
    AppCenterAnalytics.prototype.setEnabled = function (shouldEnable) {
        return;
    };
    AppCenterAnalytics.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AppCenterAnalytics.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], AppCenterAnalytics.prototype, "trackEvent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppCenterAnalytics.prototype, "isEnabled", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], AppCenterAnalytics.prototype, "setEnabled", null);
    AppCenterAnalytics = __decorate([
        Plugin({
            pluginName: 'AppCenterAnalytics',
            plugin: 'cordova-plugin-appcenter-analytics',
            pluginRef: 'AppCenter.Analytics',
            repo: 'https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics',
            platforms: ['Android', 'iOS']
        })
    ], AppCenterAnalytics);
    return AppCenterAnalytics;
}(IonicNativePlugin));
export { AppCenterAnalytics };
//# sourceMappingURL=index.js.map