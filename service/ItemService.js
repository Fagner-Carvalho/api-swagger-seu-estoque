'use strict';


/**
 * Add a new item
 * 
 *
 * body Item Item object that needs to be added
 * no response value expected for this operation
 **/
exports.addItem = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a item
 * 
 *
 * itemId String ID of item that needs to be updated
 * no response value expected for this operation
 **/
exports.deleteItem = function(itemId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find item by ID
 * Returns a single item
 *
 * itemId String ID of item to return
 * returns Item
 **/
exports.getItemById = function(itemId) {
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
 * List all item
 * 
 *
 * page Integer The page number (optional)
 * limit Integer The numbers of items to return (optional)
 * sort String The field to be ordered (optional)
 * order String The sorting type (ascending or descending) (optional)
 * q String The text to filter item (optional)
 * returns Item
 **/
exports.listItem = function(page,limit,sort,order,q) {
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
 * Updates a item with form data
 * Returns a single item
 *
 * itemId String ID of item that needs to be updated
 * no response value expected for this operation
 **/
exports.updateItemWithForm = function(itemId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

