'use strict';

var utils = require('../utils/writer.js');
var Item = require('../service/ItemService');

module.exports.addItem = function addItem (req, res, next) {
  var body = req.swagger.params['body'].value;
  Item.addItem(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteItem = function deleteItem (req, res, next) {
  var itemId = req.swagger.params['itemId'].value;
  Item.deleteItem(itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getItemById = function getItemById (req, res, next) {
  var itemId = req.swagger.params['itemId'].value;
  Item.getItemById(itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listItem = function listItem (req, res, next) {
  var page = req.swagger.params['page'].value;
  var limit = req.swagger.params['limit'].value;
  var sort = req.swagger.params['sort'].value;
  var order = req.swagger.params['order'].value;
  var q = req.swagger.params['q'].value;
  Item.listItem(page,limit,sort,order,q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateItemWithForm = function updateItemWithForm (req, res, next) {
  var itemId = req.swagger.params['itemId'].value;
  Item.updateItemWithForm(itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
