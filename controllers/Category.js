'use strict';

var utils = require('../utils/writer.js');
var Category = require('../service/CategoryService');

module.exports.addCategory = function addCategory (req, res, next) {
  var body = req.swagger.params['body'].value;
  Category.addCategory(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCategory = function deleteCategory (req, res, next) {
  var categoryId = req.swagger.params['categoryId'].value;
  Category.deleteCategory(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCategoryById = function getCategoryById (req, res, next) {
  var categoryId = req.swagger.params['categoryId'].value;
  Category.getCategoryById(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listCategory = function listCategory (req, res, next) {
  var page = req.swagger.params['page'].value;
  var limit = req.swagger.params['limit'].value;
  var sort = req.swagger.params['sort'].value;
  var order = req.swagger.params['order'].value;
  var q = req.swagger.params['q'].value;
  Category.listCategory(page,limit,sort,order,q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCategoryWithForm = function updateCategoryWithForm (req, res, next) {
  var categoryId = req.swagger.params['categoryId'].value;
  Category.updateCategoryWithForm(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
