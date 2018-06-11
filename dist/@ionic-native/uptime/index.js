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
 * @name Uptime
 * @description
 * This plugin provides the time spent in milliseconds since boot (uptime).
 *
 * @usage
 * ```typescript
 * import { Uptime } from '@ionic-native/uptime';
 *
 * constructor(private uptime: Uptime) { }
 *
 * ...
 *
 * this.uptime.getUptime(includeDeepSleep)
 *   .then(uptime => console.log(uptime))
 *   .catch(error => console.log(error));
 *
 * ```
 */
var Uptime = (function (_super) {
    __extends(Uptime, _super);
    function Uptime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function return system uptime
     * @param {boolean} includeDeepSleep Set to true to include system deep sleep
     * @return {Promise<string>} Returns a promise that return the uptime in milliseconds
     */
    Uptime.prototype.getUptime = function (includeDeepSleep) {
        return;
    };
    Uptime.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Uptime.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], Uptime.prototype, "getUptime", null);
    Uptime = __decorate([
        Plugin({
            pluginName: 'Uptime',
            plugin: 'cordova-plugin-uptime',
            pluginRef: 'Uptime',
            repo: 'https://github.com/s1lviu/cordova-plugin-uptime',
            platforms: ['Android', 'iOS']
        })
    ], Uptime);
    return Uptime;
}(IonicNativePlugin));
export { Uptime };
//# sourceMappingURL=index.js.map