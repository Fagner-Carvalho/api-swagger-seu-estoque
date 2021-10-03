'use strict';

var utils = require('../utils/writer.js');
var Supplier = require('../service/SupplierService');

module.exports.addSupplier = function addSupplier (req, res, next) {
  var body = req.swagger.params['body'].value;
  Supplier.addSupplier(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSupplier = function deleteSupplier (req, res, next) {
  var supplierId = req.swagger.params['supplierId'].value;
  Supplier.deleteSupplier(supplierId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSupplierById = function getSupplierById (req, res, next) {
  var supplierId = req.swagger.params['supplierId'].value;
  Supplier.getSupplierById(supplierId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listSupplier = function listSupplier (req, res, next) {
  var page = req.swagger.params['page'].value;
  var limit = req.swagger.params['limit'].value;
  var sort = req.swagger.params['sort'].value;
  var order = req.swagger.params['order'].value;
  var q = req.swagger.params['q'].value;
  Supplier.listSupplier(page,limit,sort,order,q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSupplierWithForm = function updateSupplierWithForm (req, res, next) {
  var supplierId = req.swagger.params['supplierId'].value;
  Supplier.updateSupplierWithForm(supplierId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
