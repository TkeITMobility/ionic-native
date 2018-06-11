import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class FirebaseConfig extends IonicNativePlugin {
    /**
     * Fetches remote config values with appropriate TTL and then activates them.
     *
     * @param {number} ttlSeconds
     * @returns {Promise<null>}
     */
    update(ttlSeconds: number): Promise<null>;
    /**
     * Fetches a boolean configuration value from RemoteConfig
     *
     * @param {string} key
     * @param {string} [namespace]
     * @returns {Promise<boolean>}
     */
    getBoolean(key: string, namespace?: string): Promise<boolean>;
    /**
     * Fetches a string configuration value from RemoteConfig
     *
     * @param {string} key
     * @param {string} [namespace]
     * @returns {Promise<boolean>}
     */
    getString(key: string, namespace?: string): Promise<string>;
    /**
     * Fetches a numeric configuration value from RemoteConfig
     *
     * @param {string} key
     * @param {string} [namespace]
     * @returns {Promise<boolean>}
     */
    getNumber(key: string, namespace?: string): Promise<number>;
    /**
     * Fetches an array of bytes configuration value from RemoteConfig
     *
     * @param {string} key
     * @param {string} [namespace]
     * @returns {Promise<boolean>}
     */
    getBytes(key: string, namespace?: string): Promise<any[]>;
}
