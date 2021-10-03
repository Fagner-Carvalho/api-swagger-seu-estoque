'use strict';


/**
 * Add a new inventoryMovements
 * 
 *
 * body InventoryMovements InventoryMovements object that needs to be added
 * no response value expected for this operation
 **/
exports.addInventoryMovements = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a inventoryMovements
 * 
 *
 * inventoryMovementId String ID of inventoryMovements that needs to be updated
 * no response value expected for this operation
 **/
exports.deleteInventoryMovements = function(inventoryMovementId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find inventoryMovements by ID
 * Returns a single inventoryMovements
 *
 * inventoryMovementId String ID of inventoryMovements to return
 * returns InventoryMovements
 **/
exports.getInventoryMovementsById = function(inventoryMovementId) {
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
 * List all inventoryMovements
 * 
 *
 * page Integer The page number (optional)
 * limit Integer The numbers of items to return (optional)
 * sort String The field to be ordered (optional)
 * order String The sorting type (ascending or descending) (optional)
 * q String The text to filter inventoryMovements (optional)
 * returns InventoryMovements
 **/
exports.listInventoryMovements = function(page,limit,sort,order,q) {
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

