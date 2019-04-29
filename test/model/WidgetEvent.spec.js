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
    instance = new SwaggerJsClient.WidgetEvent();
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

  describe('WidgetEvent', function() {
    it('should create an instance of WidgetEvent', function() {
      // uncomment below and update the code to test WidgetEvent
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be.a(SwaggerJsClient.WidgetEvent);
    });

    it('should have the property actingUserEmail (base name: "actingUserEmail")', function() {
      // uncomment below and update the code to test the property actingUserEmail
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property actingUserIpAddress (base name: "actingUserIpAddress")', function() {
      // uncomment below and update the code to test the property actingUserIpAddress
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property actingUserName (base name: "actingUserName")', function() {
      // uncomment below and update the code to test the property actingUserName
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property deviceLocation (base name: "deviceLocation")', function() {
      // uncomment below and update the code to test the property deviceLocation
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property devicePhoneNumber (base name: "devicePhoneNumber")', function() {
      // uncomment below and update the code to test the property devicePhoneNumber
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property digitalSignatureInfo (base name: "digitalSignatureInfo")', function() {
      // uncomment below and update the code to test the property digitalSignatureInfo
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property initiatingUserEmail (base name: "initiatingUserEmail")', function() {
      // uncomment below and update the code to test the property initiatingUserEmail
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property initiatingUserName (base name: "initiatingUserName")', function() {
      // uncomment below and update the code to test the property initiatingUserName
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property participantEmail (base name: "participantEmail")', function() {
      // uncomment below and update the code to test the property participantEmail
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property participantId (base name: "participantId")', function() {
      // uncomment below and update the code to test the property participantId
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property participantRole (base name: "participantRole")', function() {
      // uncomment below and update the code to test the property participantRole
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property synchronizationId (base name: "synchronizationId")', function() {
      // uncomment below and update the code to test the property synchronizationId
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property vaultEventId (base name: "vaultEventId")', function() {
      // uncomment below and update the code to test the property vaultEventId
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property vaultProviderName (base name: "vaultProviderName")', function() {
      // uncomment below and update the code to test the property vaultProviderName
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

    it('should have the property versionId (base name: "versionId")', function() {
      // uncomment below and update the code to test the property versionId
      //var instane = new SwaggerJsClient.WidgetEvent();
      //expect(instance).to.be();
    });

  });

}));
