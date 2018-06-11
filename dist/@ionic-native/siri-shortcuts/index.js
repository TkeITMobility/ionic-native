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
 * @beta
 * @name Siri Shortcuts
 * @description
 * This plugin only works when your app is built with XCode 10 Beta. Shortcuts will only appear on iOS-versions >= 12.0
 *
 * This plugin enables the use of Siri shortcuts in Cordova. Siri Shortcuts enable the user to perform certain actions by adding them to Siri.
 * After you have donated a shortcut to Siri, it will appear in the settings menu, after which the user is able to add the action. You can check
 * whether the user launched your app through a shortcut by calling `getActivatedShortcut()` when the app is resumed. It will return `null`
 * if it has not been launched by Siri, and if it did, it will return an object with `SiriShortcut` properties.
 *
 * @usage
 * ```typescript
 * import { SiriShortcuts } from '@ionic-native/siri-shortcuts';
 *
 *
 * constructor(private siriShortcuts: SiriShortcuts) { }
 *
 * ...
 *
 *
 * this.siriShortcuts.donate({
 *       persistentIdentifier: 'open-my-app',
 *       title: 'Open my app',
 *       suggestedInvocationPhrase: 'Open my app',
 *       userInfo: { username: 'username' },
 *       isEligibleForSearch: true,
 *       isEligibleForPrediction: true,
 *   })
 *   .then(() => console.log('Shortcut donated.'))
 *   .catch((error: any) => console.error(error));
 *
 * this.siriShortcuts.present({
 *       persistentIdentifier: 'open-my-app',
 *       title: 'Open my app',
 *       suggestedInvocationPhrase: 'Open my app',
 *       userInfo: { username: 'username' },
 *   })
 *   .then(() => console.log('Shortcut added.'))
 *   .catch((error: any) => console.error(error));
 *
 * this.siriShortcuts.remove('open-my-app')
 *   .then(() => console.log('Shortcut removed.'))
 *   .catch((error: any) => console.error(error));
 *
 * this.siriShortcuts.removeAll()
 *   .then(() => console.log('All shortcuts removed removed.'))
 *   .catch((error: any) => console.error(error));
 *
 * this.siriShortcuts.getActivatedShortcut()
 *   .then((data: SiriShortcut|null) => console.log(data))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 *
 * @interfaces
 * SiriShortcut
 * SiriShortcutOptions
 */
var SiriShortcuts = (function (_super) {
    __extends(SiriShortcuts, _super);
    function SiriShortcuts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Donate shortcut to Siri
     * @param {SiriShortcutOptions} options Options to specify for the donation
     * @param {string} options.persistentIdentifier Specify an identifier to uniquely identify the shortcut, in order to be able to remove it
     * @param {string} options.title Specify a title for the shortcut, which is visible to the user as the name of the shortcut
     * @param {string} options.suggestedInvocationPhrase Specify the phrase to give the user some inspiration on what the shortcut to call
     * @param {object} options.userInfo Provide a key-value object that contains information about the shortcut, this will be returned in the getActivatedShortcut method. It is not possible to use the persistentIdentifier key, it is used internally
     * @param {boolean} options.isEligibleForSearch This value defaults to true, set this value to make it searchable in Siri
     * @param {boolean} options.isEligibleForPrediction This value defaults to true, set this value to set whether the shortcut eligible for prediction
     * @return Promise<void>
     */
    SiriShortcuts.prototype.donate = function (options) {
        return;
    };
    /**
     * Present shortcut to the user, will popup a view controller asking the user to add it to Siri
     * @param {SiriShortcutOptions} options Options to specify for the donation
     * @param {string} options.persistentIdentifier Specify an identifier to uniquely identify the shortcut, in order to be able to remove it
     * @param {string} options.title Specify a title for the shortcut, which is visible to the user as the name of the shortcut
     * @param {string} options.suggestedInvocationPhrase Specify the phrase to give the user some inspiration on what the shortcut to call
     * @param {object} options.userInfo Provide a key-value object that contains information about the shortcut, this will be returned in the getActivatedShortcut method. It is not possible to use the persistentIdentifier key, it is used internally
     * @param {boolean} options.isEligibleForSearch This value defaults to true, set this value to make it searchable in Siri
     * @param {boolean} options.isEligibleForPrediction This value defaults to true, set this value to set whether the shortcut eligible for prediction
     * @return Promise<void>
     */
    SiriShortcuts.prototype.present = function (options) {
        return;
    };
    /**
     * Remove shortcuts based on identifiers
     * @param {string|string[]} persistentIdentifiers Specify which shortcut(s) to delete by their persistent identifiers
     * @return Promise<void>
     */
    SiriShortcuts.prototype.remove = function (persistentIdentifiers) {
        return;
    };
    /**
     * Remove all shortcuts from the application
     * @return Promise<void>
     */
    SiriShortcuts.prototype.removeAll = function () {
        return;
    };
    /**
     * Get the current clicked user activity, and return `null` if none
     * @return Promise<SiriShortcut|null>
     */
    SiriShortcuts.prototype.getActivatedShortcut = function () {
        return;
    };
    SiriShortcuts.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SiriShortcuts.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SiriShortcuts.prototype, "donate", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SiriShortcuts.prototype, "present", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SiriShortcuts.prototype, "remove", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], SiriShortcuts.prototype, "removeAll", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], SiriShortcuts.prototype, "getActivatedShortcut", null);
    SiriShortcuts = __decorate([
        Plugin({
            pluginName: 'SiriShortcuts',
            plugin: 'cordova-plugin-siri-shortcuts',
            pluginRef: 'cordova.plugins.SiriShortcuts',
            repo: 'https://github.com/bartwesselink/cordova-plugin-siri-shortcuts',
            platforms: ['iOS']
        })
    ], SiriShortcuts);
    return SiriShortcuts;
}(IonicNativePlugin));
export { SiriShortcuts };
//# sourceMappingURL=index.js.map