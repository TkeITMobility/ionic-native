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
 * @name App Center Crashes
 * @description
 * App Center Analytics helps you understand user behavior and customer engagement to improve your app.
 * The SDK automatically captures session count and device properties like model, OS version, etc.
 * You can define your own custom events to measure things that matter to you.
 * All the information captured is available in the App Center portal for you to analyze the data.
 *
 * For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/crashes/cordova
 *
 * @usage
 * ```typescript
 * import { AppCenterCrashes } from '@ionic-native/app-center-crashes';
 *
 *
 * constructor(private AppCenterCrashes: AppCenterCrashes) { }
 *
 * ...
 *
 * this.AppCenterCrashes.setEnabled(true).then(() => {
 *    this.AppCenterCrashes.lastSessionCrashReport().then(report => {
 *        console.log('Crash report', report);
 *    });
 * });
 *
 * ```
 * @interfaces
 * AppCenterCrashReport
 * AppCenterCrashReportDevice
 */
var AppCenterCrashes = (function (_super) {
    __extends(AppCenterCrashes, _super);
    function AppCenterCrashes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * App Center Crashes provides you with an API to generate a test crash for easy testing of the SDK.
     * This API can only be used in test/beta apps and won't do anything in production apps.
     * @returns void
     */
    AppCenterCrashes.prototype.generateTestCrash = function () { };
    /**
     * At any time after starting the SDK, you can check if the app crashed in the previous launch
     * @returns {Promise<boolean>}
     */
    AppCenterCrashes.prototype.hasCrashedInLastSession = function () {
        return;
    };
    /**
     * Details about the last crash
     * @returns {Promise<AppCenterCrashReport>}
     */
    AppCenterCrashes.prototype.lastSessionCrashReport = function () {
        return;
    };
    /**
     * Check if App Center Crashes is enabled
     * @returns {Promise<boolean>}
     */
    AppCenterCrashes.prototype.isEnabled = function () {
        return;
    };
    /**
     * Enable or disable App Center Crashes at runtime
     * @param  {boolean} shouldEnable Set value
     * @returns {Promise<void>}
     */
    AppCenterCrashes.prototype.setEnabled = function (shouldEnable) {
        return;
    };
    AppCenterCrashes.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AppCenterCrashes.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppCenterCrashes.prototype, "generateTestCrash", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppCenterCrashes.prototype, "hasCrashedInLastSession", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppCenterCrashes.prototype, "lastSessionCrashReport", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppCenterCrashes.prototype, "isEnabled", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], AppCenterCrashes.prototype, "setEnabled", null);
    AppCenterCrashes = __decorate([
        Plugin({
            pluginName: 'AppCenterCrashes',
            plugin: 'cordova-plugin-appcenter-crashes',
            pluginRef: 'AppCenter.Crashes',
            repo: 'https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes',
            platforms: ['Android', 'iOS']
        })
    ], AppCenterCrashes);
    return AppCenterCrashes;
}(IonicNativePlugin));
export { AppCenterCrashes };
//# sourceMappingURL=index.js.map