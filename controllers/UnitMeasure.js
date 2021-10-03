'use strict';

var utils = require('../utils/writer.js');
var UnitMeasure = require('../service/UnitMeasureService');

module.exports.addUnitMeasure = function addUnitMeasure (req, res, next) {
  var body = req.swagger.params['body'].value;
  UnitMeasure.addUnitMeasure(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUnitMeasure = function deleteUnitMeasure (req, res, next) {
  var unitMeasureId = req.swagger.params['unitMeasureId'].value;
  UnitMeasure.deleteUnitMeasure(unitMeasureId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUnitMeasureById = function getUnitMeasureById (req, res, next) {
  var unitMeasureId = req.swagger.params['unitMeasureId'].value;
  UnitMeasure.getUnitMeasureById(unitMeasureId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listUnitMeasure = function listUnitMeasure (req, res, next) {
  var page = req.swagger.params['page'].value;
  var limit = req.swagger.params['limit'].value;
  var sort = req.swagger.params['sort'].value;
  var order = req.swagger.params['order'].value;
  var q = req.swagger.params['q'].value;
  UnitMeasure.listUnitMeasure(page,limit,sort,order,q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUnitMeasureWithForm = function updateUnitMeasureWithForm (req, res, next) {
  var unitMeasureId = req.swagger.params['unitMeasureId'].value;
  UnitMeasure.updateUnitMeasureWithForm(unitMeasureId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
