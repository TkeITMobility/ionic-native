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
 * @name Tealium
 * @description
 * This plugin provides a TypeScript wrapper around the [Tealium](https://www.tealium.com) Cordova plugin for Ionic Native.
 *
 * For full documentation, see [https://community.tealiumiq.com/t5/Mobile-Libraries/Tealium-for-Cordova/ta-p/17618](https://community.tealiumiq.com/t5/Mobile-Libraries/Tealium-for-Cordova/ta-p/17618)
 * @usage
 * ```
 * import { Tealium, TealConfig } from '@ionic-native/tealium';
 *
 *
 * constructor(private tealium: Tealium) { }
 *
 * ...
 *
 * let tealConfig: TealConfig = {
 *  account: "<your-account>",
 *  profile: "<your-profile>",
 *  environment: "<your-environment>", // usually "dev", "qa" or "prod"
 *  isLifecycleEnabled: "true", // pass "false" to disable lifecycle tracking
 *  isCrashReporterEnabled: "false", // pass "true" to enable crash reporter (Android only)
 *  instance: "<your-instance-name" // an arbitrary instance name. use the same instance name for all subsequent API calls
 * }
 *
 * this.tealium.init(tealConfig).then(()=>{
 *   this.tealium.trackView({"screen_name": "homescreen"});
 * });
 *
 * ```
 * @interfaces
 * TealConfig
 */
var Tealium = (function (_super) {
    __extends(Tealium, _super);
    function Tealium() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function initializes the Tealium Cordova plugin.
     * This should usually be done inside the "deviceReady" handler.
     * @param config {TealConfig}
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Tealium.prototype.init = function (config) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function tracks a view event in the Tealium Cordova plugin
     * @param dataObject {any} The JSON data object containing your key-value pairs
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Tealium.prototype.trackView = function (dataObject, instanceName) {
        return;
    };
    /**
     * This function tracks a link event in the Tealium Cordova plugin
     * @param dataObject {any} The JSON data object containing your key-value pairs
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Tealium.prototype.trackEvent = function (dataObject, instanceName) {
        return;
    };
    /**
     * This function tracks a custom event in the Tealium Cordova plugin
     * @param eventType {string} The event type, link or view
     * @param dataObject {any} The JSON data object containing your key-value pairs
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Tealium.prototype.track = function (eventType, dataObject, instanceName) {
        return;
    };
    /**
     * This function adds data to the Tealium persistent data store
     * @param keyName {string} The key name that this data will be stored under for later retrieval
     * @param value {any} The value to be stored as persistent data
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Tealium.prototype.addPersistent = function (keyName, value, instanceName) {
        return;
    };
    /**
     * This function adds data to the Tealium volatile data store
     * @param keyName {string} The key name that this data will be stored under for later retrieval
     * @param value {any} The value to be stored as volatile data
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Tealium.prototype.addVolatile = function (keyName, value, instanceName) {
        return;
    };
    /**
     * This function removes data from the Tealium volatile data store
     * @param keyName {string} The key name that this data will removed from the Tealium data store
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Tealium.prototype.removeVolatile = function (keyName, instanceName) {
        return;
    };
    /**
     * This function removes data from the Tealium persistent data store
     * @param keyName {string} The key name that this data will removed from the Tealium data store
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Tealium.prototype.removePersistent = function (keyName, instanceName) {
        return;
    };
    /**
     * This function retrieves a value from the Tealium Persistent data store
     * @param keyName {string} The key name that this data will retrieved from the Tealium data store
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @param callback {any} A callback function that will be called when the data has been retrieved
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Tealium.prototype.getPersistent = function (keyName, instanceName, callback) {
        return;
    };
    /**
       * This function retrieves a value from the Tealium Volatile data store
       * @param keyName {string} The key name that this data will retrieved from the Tealium data store
       * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
       * @param callback {any} A callback function that will be called when the data has been retrieved
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    Tealium.prototype.getVolatile = function (keyName, instanceName, callback) {
        return;
    };
    /**
    * This function adds a remote command for later execution
    * @param commandName {string} The command name for this Remote Command
    * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
    * @param callback {any} A callback function that will be called when the data has been retrieved
    * @return {Promise<any>} Returns a promise that resolves when something happens
    */
    Tealium.prototype.addRemoteCommand = function (commandName, instanceName, callback) {
        return;
    };
    /**
     * This function retrieves the Tealium Visitor ID
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Tealium.prototype.getVisitorId = function () {
        return;
    };
    Tealium.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Tealium.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Tealium.prototype, "init", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String]),
        __metadata("design:returntype", Promise)
    ], Tealium.prototype, "trackView", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String]),
        __metadata("design:returntype", Promise)
    ], Tealium.prototype, "trackEvent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, String]),
        __metadata("design:returntype", Promise)
    ], Tealium.prototype, "track", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, String]),
        __metadata("design:returntype", Promise)
    ], Tealium.prototype, "addPersistent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, String]),
        __metadata("design:returntype", Promise)
    ], Tealium.prototype, "addVolatile", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], Tealium.prototype, "removeVolatile", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], Tealium.prototype, "removePersistent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], Tealium.prototype, "getPersistent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], Tealium.prototype, "getVolatile", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], Tealium.prototype, "addRemoteCommand", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Tealium.prototype, "getVisitorId", null);
    Tealium = __decorate([
        Plugin({
            pluginName: 'Tealium',
            plugin: 'tealium-cordova-plugin',
            pluginRef: 'window.tealium',
            repo: 'https://github.com/Tealium/cordova-plugin',
            platforms: ['Android', 'iOS'],
            install: '',
        })
    ], Tealium);
    return Tealium;
}(IonicNativePlugin));
export { Tealium };
//# sourceMappingURL=index.js.map