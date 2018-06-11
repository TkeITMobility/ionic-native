import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class GoogleNearby extends IonicNativePlugin {
    /**
     * Publish a message
     * @param message {string} Message to publish
     * @return {Promise<any>} Returns a promise that resolves when the message got published
     */
    publish(message: string): Promise<any>;
    /**
       * Subscribe to recieve messages
       * @return {Observable<any>} Returns an observable that emits recieved messages
       */
    subscribe(): Observable<any>;
}
