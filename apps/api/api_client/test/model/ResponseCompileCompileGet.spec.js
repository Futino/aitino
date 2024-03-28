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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FastApi);
  }
}(this, function(expect, FastApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FastApi.ResponseCompileCompileGet();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ResponseCompileCompileGet', function() {
    it('should create an instance of ResponseCompileCompileGet', function() {
      // uncomment below and update the code to test ResponseCompileCompileGet
      //var instance = new FastApi.ResponseCompileCompileGet();
      //expect(instance).to.be.a(FastApi.ResponseCompileCompileGet);
    });

    it('should have the property receiverId (base name: "receiver_id")', function() {
      // uncomment below and update the code to test the property receiverId
      //var instance = new FastApi.ResponseCompileCompileGet();
      //expect(instance).to.be();
    });

    it('should have the property delegatorId (base name: "delegator_id")', function() {
      // uncomment below and update the code to test the property delegatorId
      //var instance = new FastApi.ResponseCompileCompileGet();
      //expect(instance).to.be();
    });

    it('should have the property agents (base name: "agents")', function() {
      // uncomment below and update the code to test the property agents
      //var instance = new FastApi.ResponseCompileCompileGet();
      //expect(instance).to.be();
    });

    it('should have the property subCrews (base name: "sub_crews")', function() {
      // uncomment below and update the code to test the property subCrews
      //var instance = new FastApi.ResponseCompileCompileGet();
      //expect(instance).to.be();
    });

  });

}));
