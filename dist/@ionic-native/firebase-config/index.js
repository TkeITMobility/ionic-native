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
 * @name Firebase Config
 * @description
 * Cordova plugin for Firebase Config
 *
 * @usage
 * ```typescript
 * import { FirebaseConfig } from '@ionic-native/firebase-config';
 *
 *
 * constructor(private firebaseConfig: FirebaseConfig) { }
 *
 * ...
 *
 *
 * this.firebaseConfig.getBoolean('my_key')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var FirebaseConfig = (function (_super) {
    __extends(FirebaseConfig, _super);
    function FirebaseConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Fetches remote config values with appropriate TTL and then activates them.
     *
     * @param {number} ttlSeconds
     * @returns {Promise<null>}
     */
    FirebaseConfig.prototype.update = function (ttlSeconds) {
        return;
    };
    /**
     * Fetches a boolean configuration value from RemoteConfig
     *
     * @param {string} key
     * @param {string} [namespace]
     * @returns {Promise<boolean>}
     */
    FirebaseConfig.prototype.getBoolean = function (key, namespace) {
        return;
    };
    /**
     * Fetches a string configuration value from RemoteConfig
     *
     * @param {string} key
     * @param {string} [namespace]
     * @returns {Promise<boolean>}
     */
    FirebaseConfig.prototype.getString = function (key, namespace) {
        return;
    };
    /**
     * Fetches a numeric configuration value from RemoteConfig
     *
     * @param {string} key
     * @param {string} [namespace]
     * @returns {Promise<boolean>}
     */
    FirebaseConfig.prototype.getNumber = function (key, namespace) {
        return;
    };
    /**
     * Fetches an array of bytes configuration value from RemoteConfig
     *
     * @param {string} key
     * @param {string} [namespace]
     * @returns {Promise<boolean>}
     */
    FirebaseConfig.prototype.getBytes = function (key, namespace) {
        return;
    };
    FirebaseConfig.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FirebaseConfig.ctorParameters = function () { return []; };
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], FirebaseConfig.prototype, "update", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], FirebaseConfig.prototype, "getBoolean", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], FirebaseConfig.prototype, "getString", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], FirebaseConfig.prototype, "getNumber", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], FirebaseConfig.prototype, "getBytes", null);
    FirebaseConfig = __decorate([
        Plugin({
            pluginName: 'FirebaseConfig',
            plugin: 'cordova-plugin-firebase-config',
            pluginRef: 'cordova.plugins.firebase.config',
            repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-config',
            platforms: ['Android', 'iOS']
        })
    ], FirebaseConfig);
    return FirebaseConfig;
}(IonicNativePlugin));
export { FirebaseConfig };
//# sourceMappingURL=index.js.map