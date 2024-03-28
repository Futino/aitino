/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class SessionStatus.
* @enum {}
* @readonly
*/
export default class SessionStatus {
    
        /**
         * value: "running"
         * @const
         */
        "running" = "running";

    
        /**
         * value: "finished"
         * @const
         */
        "finished" = "finished";

    
        /**
         * value: "idle"
         * @const
         */
        "idle" = "idle";

    

    /**
    * Returns a <code>SessionStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SessionStatus} The enum <code>SessionStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

