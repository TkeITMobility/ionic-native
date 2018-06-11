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
 * @name Call Directory
 * @description
 * This plugin can add phone numbers to an Callkit call directory extension. Call `reloadExtension` after using `addIdentification` and `removeIdentification`
 * to process the changes in the call directory extension.
 *
 * @usage
 * ```typescript
 * import { CallDirectory } from '@ionic-native/call-directory';
 *
 *
 * constructor(private callDirectory: CallDirectory) { }
 *
 *
 * let items = [{label: "Hello", number: "123"}];
 * this.callDirectory.addIdentification(items)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.callDirectory.reloadExtension()
 *   .then(res: string) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * ```
 */
var CallDirectory = (function (_super) {
    __extends(CallDirectory, _super);
    function CallDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if the call directory extension is available and enabled
     * @return {Promise<boolean>} Returns a promise with result
     */
    CallDirectory.prototype.isAvailable = function () {
        return;
    };
    /**
     * Add identification numbers
     * @param {Array<CallDirectoryItem>} items Set of numbers with labels
     * @return {Promise<any>} Returns a promise that resolves when numbers are added
     */
    CallDirectory.prototype.addIdentification = function (items) {
        return;
    };
    /**
     * Remove identification numbers
     * @param {Array<CallDirectoryItem>} items Set of numbers with arbitrary label
     * @return {Promise<any>} Returns a promise that resolves when numbers are removed
     */
    CallDirectory.prototype.removeIdentification = function (items) {
        return;
    };
    /**
     * Remove all items from call directory. Refreshes immediately.
     * @return {Promise<any>} Returns a promise after refresh with message
     */
    CallDirectory.prototype.removeAllIdentification = function () {
        return;
    };
    /**
     * Get all numbers and labels in call directory
     * @return {Array<CallDirectoryItem>} Returns a promise that resolves with an array of all items
     */
    CallDirectory.prototype.getAllItems = function () {
        return;
    };
    /**
     * Reload extension to process queued changes
     * @return {Promise<string>} Returns a promise after refresh with message
     */
    CallDirectory.prototype.reloadExtension = function () {
        return;
    };
    CallDirectory.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CallDirectory.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CallDirectory.prototype, "isAvailable", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], CallDirectory.prototype, "addIdentification", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Promise)
    ], CallDirectory.prototype, "removeIdentification", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CallDirectory.prototype, "removeAllIdentification", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CallDirectory.prototype, "getAllItems", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CallDirectory.prototype, "reloadExtension", null);
    CallDirectory = __decorate([
        Plugin({
            pluginName: 'CallDirectory',
            plugin: 'cordova-plugin-call-directory',
            pluginRef: 'CallDirectory',
            repo: 'https://github.com/GEDYSIntraWare/cordova-plugin-call-directory',
            install: 'cordova plugin add cordova-plugin-call-directory --variable EXT_NAME="Cordova-Directory" --variable ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES="NO"',
            installVariables: ['EXT_NAME', 'ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES'],
            platforms: ['iOS']
        })
    ], CallDirectory);
    return CallDirectory;
}(IonicNativePlugin));
export { CallDirectory };
//# sourceMappingURL=index.js.map