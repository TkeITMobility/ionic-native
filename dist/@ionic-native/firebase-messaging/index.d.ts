import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface IFirebaseMessage {
    aps: any;
    gcm: any;
}
/**
 * @beta
 * @name Firebase Messaging
 * @description
 * Cordova plugin for Firebase Messaging
 *
 * @usage
 * ```typescript
 * import { FirebaseMessaging } from '@ionic-native/firebase-messaging';
 *
 *
 * constructor(private firebaseMessaging: FirebaseMessaging) { }
 *
 * ...
 *
 *
 * this.firebaseMessaging.logEvent('page_view', {page: "dashboard"})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 * @interfaces
 * IFirebaseMessage
 */
export declare class FirebaseMessaging extends IonicNativePlugin {
    /**
     * Called when a push message received while app is in foreground.
     *
     * @returns {Observable<any>}
     */
    onMessage(): Observable<any>;
    /**
     * Called when a push message received while app is in background.
     *
     * @returns {Observable<any>}
     */
    onBackgroundMessage(): Observable<any>;
    /**
     * Grant permission to recieve push notifications (will trigger prompt on iOS).
     *
     * @returns {Promise<string>}
     */
    requestPermission(): Promise<string>;
    /**
     * Returns a promise that fulfills with the current FCM token
     *
     * @returns {Promise<string>}
     */
    getToken(): Promise<string>;
    /**
     * Triggers every time when FCM token updated.
     * You should usually call getToken to get an updated token and send it to server.
     *
     * @returns {Observable<void>}
     */
    onTokenRefresh(): Observable<void>;
    /**
     * Subscribe to topic in background.
     *
     * @param {string} topic
     * @returns {Promise<null>}
     */
    subscribe(topic: string): Promise<null>;
    /**
     * Unsubscribe from topic in background.
     *
     * @param {string} topic
     * @returns {Promise<null>}
     */
    unsubscribe(topic: string): Promise<null>;
    /**
     * Reads current badge number (if supported).
     *
     * @returns {Promise<number>}
     */
    getBadge(): Promise<number>;
    /**
     * Sets current badge number (if supported).
     *
     * @param {number} value
     * @returns {Promise<null>}
     */
    setBadge(value: number): Promise<null>;
}
