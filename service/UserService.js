'use strict';


/**
 * Add a new user
 * 
 *
 * body User User object that needs to be added
 * no response value expected for this operation
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a user
 * 
 *
 * userId String ID of user that needs to be updated
 * no response value expected for this operation
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find user by ID
 * Returns a single user
 *
 * userId String ID of user to return
 * returns User
 **/
exports.getUserById = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List all users
 * 
 *
 * page Integer The page number (optional)
 * limit Integer The numbers of items to return (optional)
 * sort String The field to be ordered (optional)
 * order String The sorting type (ascending or descending) (optional)
 * q String The text to filter user (optional)
 * returns User
 **/
exports.listUsers = function(page,limit,sort,order,q) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a user with form data
 * Returns a single user
 *
 * userId String ID of user that needs to be updated
 * no response value expected for this operation
 **/
exports.updateUserWithForm = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

