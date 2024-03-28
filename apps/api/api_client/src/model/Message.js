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
 * The Message model module.
 * @module model/Message
 * @version 0.1.0
 */
class Message {
    /**
     * Constructs a new <code>Message</code>.
     * @alias module:model/Message
     * @param sessionId {String} 
     * @param profileId {String} 
     * @param content {String} 
     */
    constructor(sessionId, profileId, content) { 
        
        Message.initialize(this, sessionId, profileId, content);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sessionId, profileId, content) { 
        obj['session_id'] = sessionId;
        obj['profile_id'] = profileId;
        obj['content'] = content;
    }

    /**
     * Constructs a <code>Message</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Message} obj Optional instance to populate.
     * @return {module:model/Message} The populated <code>Message</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Message();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('session_id')) {
                obj['session_id'] = ApiClient.convertToType(data['session_id'], 'String');
            }
            if (data.hasOwnProperty('profile_id')) {
                obj['profile_id'] = ApiClient.convertToType(data['profile_id'], 'String');
            }
            if (data.hasOwnProperty('sender_id')) {
                obj['sender_id'] = ApiClient.convertToType(data['sender_id'], 'String');
            }
            if (data.hasOwnProperty('recipient_id')) {
                obj['recipient_id'] = ApiClient.convertToType(data['recipient_id'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Message</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Message</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Message.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['session_id'] && !(typeof data['session_id'] === 'string' || data['session_id'] instanceof String)) {
            throw new Error("Expected the field `session_id` to be a primitive type in the JSON string but got " + data['session_id']);
        }
        // ensure the json data is a string
        if (data['profile_id'] && !(typeof data['profile_id'] === 'string' || data['profile_id'] instanceof String)) {
            throw new Error("Expected the field `profile_id` to be a primitive type in the JSON string but got " + data['profile_id']);
        }
        // ensure the json data is a string
        if (data['sender_id'] && !(typeof data['sender_id'] === 'string' || data['sender_id'] instanceof String)) {
            throw new Error("Expected the field `sender_id` to be a primitive type in the JSON string but got " + data['sender_id']);
        }
        // ensure the json data is a string
        if (data['recipient_id'] && !(typeof data['recipient_id'] === 'string' || data['recipient_id'] instanceof String)) {
            throw new Error("Expected the field `recipient_id` to be a primitive type in the JSON string but got " + data['recipient_id']);
        }
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }

        return true;
    }


}

Message.RequiredProperties = ["session_id", "profile_id", "content"];

/**
 * @member {String} id
 */
Message.prototype['id'] = undefined;

/**
 * @member {String} session_id
 */
Message.prototype['session_id'] = undefined;

/**
 * @member {String} profile_id
 */
Message.prototype['profile_id'] = undefined;

/**
 * @member {String} sender_id
 */
Message.prototype['sender_id'] = undefined;

/**
 * @member {String} recipient_id
 */
Message.prototype['recipient_id'] = undefined;

/**
 * @member {String} content
 */
Message.prototype['content'] = undefined;

/**
 * @member {String} role
 * @default 'user'
 */
Message.prototype['role'] = 'user';

/**
 * @member {Date} created_at
 */
Message.prototype['created_at'] = undefined;






export default Message;

