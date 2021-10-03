'use strict';

var utils = require('../utils/writer.js');
var InventoryMovements = require('../service/InventoryMovementsService');

module.exports.addInventoryMovements = function addInventoryMovements (req, res, next) {
  var body = req.swagger.params['body'].value;
  InventoryMovements.addInventoryMovements(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteInventoryMovements = function deleteInventoryMovements (req, res, next) {
  var inventoryMovementId = req.swagger.params['inventoryMovementId'].value;
  InventoryMovements.deleteInventoryMovements(inventoryMovementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInventoryMovementsById = function getInventoryMovementsById (req, res, next) {
  var inventoryMovementId = req.swagger.params['inventoryMovementId'].value;
  InventoryMovements.getInventoryMovementsById(inventoryMovementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listInventoryMovements = function listInventoryMovements (req, res, next) {
  var page = req.swagger.params['page'].value;
  var limit = req.swagger.params['limit'].value;
  var sort = req.swagger.params['sort'].value;
  var order = req.swagger.params['order'].value;
  var q = req.swagger.params['q'].value;
  InventoryMovements.listInventoryMovements(page,limit,sort,order,q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
