import { Observable } from 'rxjs/Observable';
export interface ThreeDeeTouchQuickAction {
    /**
     * Type that can be used in the onHomeIconPressed callback
     */
    type?: string;
    /**
     * Title
     */
    title: string;
    /**
     * Subtitle
     */
    subtitle?: string;
    /**
     * Icon type. Case insensitive
     */
    iconType?: string;
    /**
     * Icon template
     */
    iconTemplate?: string;
}
export interface ThreeDeeTouchForceTouch {
    /**
     * Touch force
     */
    force: number;
    /**
     * Timestamp of action
     */
    timestamp: number;
    /**
     * X coordinate of action
     */
    x: number;
    /**
     * Y coordinate of action
     */
    y: number;
}
/**
 * @name 3DTouch
 * @description
 * @usage
 * Please do refer to the original plugin's repo for detailed usage. The usage example here might not be sufficient.
 * ```
 * import { ThreeDeeTouch } from 'ionic-native';
 *
 * // import for type completion on variables
 * import { ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from 'ionic-native';
 * ...
 *
 * ThreeDeeTouch.isAvailable().then(isAvailable => console.log("3D Touch available? " + isAvailable));
 *
 * ThreeDeeTouch.watchForceTouches()
 *   .subscribe(
 *     (data: ThreeDeeTouchForceTouch) => {
 *       console.log("Force touch %" + data.force);
 *       console.log("Force touch timestamp: " + data.timestamp);
 *       console.log("Force touch x: " + data.x);
 *       console.log("Force touch y: " + data.y);
 *     }
 *   );
 *
 *
 * let actions: Array<ThreeDeeTouchQuickAction> = [
 *   {
 *     type: 'checkin',
 *     title: 'Check in',
 *     subtitle: 'Quickly check in',
 *     iconType: 'Compose'
 *   },
 *   {
 *     type: 'share',
 *     title: 'Share',
 *     subtitle: 'Share like you care',
 *     iconType: 'Share'
 *   },
 *   {
 *     type: 'search',
 *     title: 'Search',
 *     iconType: 'Search'
 *   },
 *   {
 *     title: 'Show favorites',
 *     iconTemplate: 'HeartTemplate'
 *   }
 * ];
 * ThreeDeeTouch.configureQuickActions(actions);
 *
 * ThreeDeeTouch.onHomeIconPressed().subscribe(
 *  (payload) => {
 *    // returns an object that is the button you presed
 *    console.log('Pressed the ${payload.title} button')
 *    console.log(payload.type)
 *
 *  }
 * )
 * ```
 * @interfaces
 * ThreeDeeTouchQuickAction
 * ThreeDeeTouchForceTouch
 */
export declare class ThreeDeeTouch {
    /**
     * You need an iPhone 6S or some future tech to use the features of this plugin, so you can check at runtime if the user's device is supported.
     * @returns {Promise<boolean>} returns a promise that resolves with a boolean that indicates whether the plugin is available or not
     */
    static isAvailable(): Promise<boolean>;
    /**
     * You can get a notification when the user force touches the webview. The plugin defines a Force Touch when at least 75% of the maximum force is applied to the screen. Your app will receive the x and y coordinates, so you have to figure out which UI element was touched.
     * @returns {Observable<ThreeDeeTouchForceTouch>} Returns an observable that sends a `ThreeDeeTouchForceTouch` object
     */
    static watchForceTouches(): Observable<ThreeDeeTouchForceTouch>;
    /**
     * setup the 3D-touch actions, takes an array of objects with the following
     * @param {string} type (optional) A type that can be used `onHomeIconPressed` callback
     * @param {string} title Title for your action
     * @param {string} subtitle (optional) A short description for your action
     * @param {string} iconType (optional) Choose between Prohibit, Contact, Home, MarkLocation, Favorite, Love, Cloud, Invitation, Confirmation, Mail, Message, Date, Time, CapturePhoto, CaptureVideo, Task, TaskCompleted, Alarm, Bookmark, Shuffle, Audio, Update
     * @param {string} iconTemplate (optional) Can be used to provide your own icon
     */
    static configureQuickActions(quickActions: Array<ThreeDeeTouchQuickAction>): void;
    /**
     * When a home icon is pressed, your app launches and this JS callback is invoked.
     * @returns {Observable<any>} returns an observable that notifies you when he user presses on the home screen icon
     */
    static onHomeIconPressed(): Observable<any>;
    /**
     * Enable Link Preview.
     * UIWebView and WKWebView (the webviews powering Cordova apps) don't allow the fancy new link preview feature of iOS9.
     */
    static enableLinkPreview(): void;
    /**
     * Disabled the link preview feature, if enabled.
     */
    static disableLinkPreview(): void;
}
