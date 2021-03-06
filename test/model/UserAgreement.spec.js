/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 6.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerJsClient);
  }
}(this, function(expect, SwaggerJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerJsClient.UserAgreement();
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

  describe('UserAgreement', function() {
    it('should create an instance of UserAgreement', function() {
      // uncomment below and update the code to test UserAgreement
      //var instane = new SwaggerJsClient.UserAgreement();
      //expect(instance).to.be.a(SwaggerJsClient.UserAgreement);
    });

    it('should have the property displayDate (base name: "displayDate")', function() {
      // uncomment below and update the code to test the property displayDate
      //var instane = new SwaggerJsClient.UserAgreement();
      //expect(instance).to.be();
    });

    it('should have the property displayParticipantSetInfos (base name: "displayParticipantSetInfos")', function() {
      // uncomment below and update the code to test the property displayParticipantSetInfos
      //var instane = new SwaggerJsClient.UserAgreement();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SwaggerJsClient.UserAgreement();
      //expect(instance).to.be();
    });

    it('should have the property esign (base name: "esign")', function() {
      // uncomment below and update the code to test the property esign
      //var instane = new SwaggerJsClient.UserAgreement();
      //expect(instance).to.be();
    });

    it('should have the property hidden (base name: "hidden")', function() {
      // uncomment below and update the code to test the property hidden
      //var instane = new SwaggerJsClient.UserAgreement();
      //expect(instance).to.be();
    });

    it('should have the property latestVersionId (base name: "latestVersionId")', function() {
      // uncomment below and update the code to test the property latestVersionId
      //var instane = new SwaggerJsClient.UserAgreement();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SwaggerJsClient.UserAgreement();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new SwaggerJsClient.UserAgreement();
      //expect(instance).to.be();
    });

  });

}));
