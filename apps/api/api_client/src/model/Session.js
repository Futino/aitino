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
import SessionStatus from './SessionStatus';

/**
 * The Session model module.
 * @module model/Session
 * @version 0.1.0
 */
class Session {
    /**
     * Constructs a new <code>Session</code>.
     * @alias module:model/Session
     * @param crewId {String} 
     * @param profileId {String} 
     * @param title {String} 
     */
    constructor(crewId, profileId, title) { 
        
        Session.initialize(this, crewId, profileId, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, crewId, profileId, title) { 
        obj['crew_id'] = crewId;
        obj['profile_id'] = profileId;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>Session</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Session} obj Optional instance to populate.
     * @return {module:model/Session} The populated <code>Session</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Session();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('crew_id')) {
                obj['crew_id'] = ApiClient.convertToType(data['crew_id'], 'String');
            }
            if (data.hasOwnProperty('profile_id')) {
                obj['profile_id'] = ApiClient.convertToType(data['profile_id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], SessionStatus);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Session</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Session</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Session.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['crew_id'] && !(typeof data['crew_id'] === 'string' || data['crew_id'] instanceof String)) {
            throw new Error("Expected the field `crew_id` to be a primitive type in the JSON string but got " + data['crew_id']);
        }
        // ensure the json data is a string
        if (data['profile_id'] && !(typeof data['profile_id'] === 'string' || data['profile_id'] instanceof String)) {
            throw new Error("Expected the field `profile_id` to be a primitive type in the JSON string but got " + data['profile_id']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}

Session.RequiredProperties = ["crew_id", "profile_id", "title"];

/**
 * @member {String} id
 */
Session.prototype['id'] = undefined;

/**
 * @member {String} crew_id
 */
Session.prototype['crew_id'] = undefined;

/**
 * @member {String} profile_id
 */
Session.prototype['profile_id'] = undefined;

/**
 * @member {String} title
 */
Session.prototype['title'] = undefined;

/**
 * @member {Date} created_at
 */
Session.prototype['created_at'] = undefined;

/**
 * @member {module:model/SessionStatus} status
 */
Session.prototype['status'] = undefined;






export default Session;
