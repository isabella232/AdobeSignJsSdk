/**
*  Copyright 2019 Adobe Systems Incorporated. All rights reserved.
*  This file is licensed to you under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License. You may obtain a copy
*  of the License at http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software distributed under
*  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
*  OF ANY KIND, either express or implied. See the License for the specific language
*  governing permissions and limitations under the License.
*
*
**/


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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/agreements/DocumentImageUrlsInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentImageUrlsInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.DocumentsImageUrlsInfo = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.DocumentImageUrlsInfo);
  }
}(this, function(ApiClient, DocumentImageUrlsInfo) {
  'use strict';




  /**
   * The DocumentsImageUrlsInfo model module.
   * @module model/agreements/DocumentsImageUrlsInfo
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>DocumentsImageUrlsInfo</code>.
   * @alias module:model/agreements/DocumentsImageUrlsInfo
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DocumentsImageUrlsInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/DocumentsImageUrlsInfo} obj Optional instance to populate.
   * @return {module:model/agreements/DocumentsImageUrlsInfo} The populated <code>DocumentsImageUrlsInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('originalDocumentsImageUrlsInfo')) {
        obj['originalDocumentsImageUrlsInfo'] = ApiClient.convertToType(data['originalDocumentsImageUrlsInfo'], [DocumentImageUrlsInfo]);
      }
      if (data.hasOwnProperty('supportingDocumentsImageUrlsInfo')) {
        obj['supportingDocumentsImageUrlsInfo'] = ApiClient.convertToType(data['supportingDocumentsImageUrlsInfo'], [DocumentImageUrlsInfo]);
      }
    }
    return obj;
  }

  /**
   * A list of original document image URLs info.
   * @member {Array.<module:model/agreements/DocumentImageUrlsInfo>} originalDocumentsImageUrlsInfo
   */
  exports.prototype['originalDocumentsImageUrlsInfo'] = undefined;
  /**
   * A list of supporting document image URLs info.
   * @member {Array.<module:model/agreements/DocumentImageUrlsInfo>} supportingDocumentsImageUrlsInfo
   */
  exports.prototype['supportingDocumentsImageUrlsInfo'] = undefined;



  return exports;
}));


