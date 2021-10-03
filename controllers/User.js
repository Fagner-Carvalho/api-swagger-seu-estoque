'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.addUser = function addUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.addUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  User.deleteUser(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserById = function getUserById (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  User.getUserById(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listUsers = function listUsers (req, res, next) {
  var page = req.swagger.params['page'].value;
  var limit = req.swagger.params['limit'].value;
  var sort = req.swagger.params['sort'].value;
  var order = req.swagger.params['order'].value;
  var q = req.swagger.params['q'].value;
  User.listUsers(page,limit,sort,order,q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUserWithForm = function updateUserWithForm (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  User.updateUserWithForm(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
