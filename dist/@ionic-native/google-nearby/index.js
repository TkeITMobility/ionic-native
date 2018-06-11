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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Google Nearby
 * @description
 * This plugin adds support for the Google Nearby Messages API.
 *
 * @usage
 * ```typescript
 * import { GoogleNearby } from '@ionic-native/google-nearby';
 *
 *
 * constructor(private googleNearby: GoogleNearby) { }
 *
 * this.googleNearby.publish('Hello')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.googleNearby.subscribe()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * ```
 */
var GoogleNearby = (function (_super) {
    __extends(GoogleNearby, _super);
    function GoogleNearby() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Publish a message
     * @param message {string} Message to publish
     * @return {Promise<any>} Returns a promise that resolves when the message got published
     */
    GoogleNearby.prototype.publish = function (message) {
        return;
    };
    /**
       * Subscribe to recieve messages
       * @return {Observable<any>} Returns an observable that emits recieved messages
       */
    GoogleNearby.prototype.subscribe = function () {
        return;
    };
    GoogleNearby.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GoogleNearby.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], GoogleNearby.prototype, "publish", null);
    __decorate([
        Cordova({
            observable: true,
            clearFunction: 'unsubscribe'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], GoogleNearby.prototype, "subscribe", null);
    GoogleNearby = __decorate([
        Plugin({
            pluginName: 'GoogleNearby',
            plugin: 'cordova-plugin-google-nearby',
            pluginRef: 'window.nearby',
            repo: 'https://github.com/hahahannes/cordova-plugin-google-nearby',
            install: 'ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY="123456789"',
            installVariables: ['API_KEY'],
            platforms: ['Android']
        })
    ], GoogleNearby);
    return GoogleNearby;
}(IonicNativePlugin));
export { GoogleNearby };
//# sourceMappingURL=index.js.map