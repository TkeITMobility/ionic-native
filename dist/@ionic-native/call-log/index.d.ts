import { IonicNativePlugin } from '@ionic-native/core';
export interface CallLogObject {
    name: string;
    value: string | Array<string>;
    operator: '==' | '!=' | '>' | '>=' | '<' | '<=' | 'like';
}
/**
 * @name Call Log
 * @description
 * This plugin access the call history on a device and that can be filtered
 *
 * @usage
 * ```typescript
 * import { CallLog } from '@ionic-native/call-log';
 *
 *
 * constructor(private callLog: CallLog) { }
 *
 * ````
 * @interfaces
 * CallLogObject
 *
 */
export declare class CallLog extends IonicNativePlugin {
    /**
     * This function return the call logs
     * @param {CallLogObject[]} filters array of object to filter the query
     * @return {Promise<any>}
     */
    getCallLog(filters: CallLogObject[]): Promise<any>;
    /**
     * Check permission
     * @returns {Promise<any>}
     */
    hasReadPermission(): Promise<any>;
    /**
     * Request permission
     * @returns {Promise<any>}
     */
    requestReadPermission(): Promise<any>;
}
