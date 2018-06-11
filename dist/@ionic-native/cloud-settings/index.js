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
 * @name Cloud Settings
 * @description
 * Stores app settings in cloud storage so if the user re-installs the app or installs it on a different device, the settings will be restored and available in the new installation.
 *
 * @usage
 * ```typescript
 * import { CloudSettings } from '@ionic-native/cloud-settings';
 *
 *
 * constructor(private cloudSettings: CloudSettings) { }
 *
 * ...
 *
 * this.cloudSettings.exists()
 *   .then((exists: boolean) => console.log("Saved settings exist: " + exists) )
 *
 * this.cloudSettings.load()
 *   .then((settings: any) => this.settings = settings)
 *   .catch((error: any) => console.error(error));
 *
 * this.cloudSettings.save(this.settings)
 *   .then((savedSettings: any) => console.log("Saved settings: " + JSON.stringify(savedSettings)))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var CloudSettings = (function (_super) {
    __extends(CloudSettings, _super);
    function CloudSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Indicates if any stored cloud settings currently exist for the current user.
     * @return {Promise<boolean>} Will be passed a boolean flag which indicates whether an store settings exist for the user.
     */
    CloudSettings.prototype.exists = function () {
        return;
    };
    /**
     * Saves the settings to cloud backup.
     * @param {object} settings - a JSON structure representing the user settings to save to cloud backup.
     * @param {boolean} [overwrite] - (optional) if true, existing settings will be replaced rather than updated. Defaults to false.
     * If false, existing settings will be merged with the new settings passed to this function.
     * @return {Promise<any>} Will be passed a single object argument which contains the saved settings as a JSON object.
     */
    CloudSettings.prototype.save = function (settings, overwrite) {
        return;
    };
    /**
     * Loads the current settings.
     * @return {Promise<any>} Will be passed a single object argument which contains the saved settings as a JSON object.
     */
    CloudSettings.prototype.load = function () {
        return;
    };
    /**
     * Registers a function which will be called if/when settings on the device have been updated from the cloud.
     * @param {Function} handler - callback function to invoke when device settings have been updated from the cloud.
     */
    CloudSettings.prototype.onRestore = function (handler) { };
    /**
     * Outputs verbose log messages from the native plugin components to the JS console.
     * @return {Promise<void>}
     */
    CloudSettings.prototype.enableDebug = function () {
        return;
    };
    CloudSettings.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CloudSettings.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CloudSettings.prototype, "exists", null);
    __decorate([
        Cordova({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Boolean]),
        __metadata("design:returntype", Promise)
    ], CloudSettings.prototype, "save", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CloudSettings.prototype, "load", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], CloudSettings.prototype, "onRestore", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CloudSettings.prototype, "enableDebug", null);
    CloudSettings = __decorate([
        Plugin({
            pluginName: 'CloudSettings',
            plugin: 'cordova-plugin-cloud-settings',
            pluginRef: 'cordova.plugin.cloudsettings',
            repo: 'https://github.com/dpa99c/cordova-plugin-cloud-settings',
            install: 'ionic cordova plugin add cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey',
            installVariables: ['ANDROID_BACKUP_SERVICE_KEY'],
            platforms: ['Android', 'iOS']
        })
    ], CloudSettings);
    return CloudSettings;
}(IonicNativePlugin));
export { CloudSettings };
//# sourceMappingURL=index.js.map