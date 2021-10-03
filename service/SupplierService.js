'use strict';


/**
 * Add a new supplier
 * 
 *
 * body Supplier Supplier object that needs to be added
 * no response value expected for this operation
 **/
exports.addSupplier = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a supplier
 * 
 *
 * supplierId String ID of supplier that needs to be updated
 * no response value expected for this operation
 **/
exports.deleteSupplier = function(supplierId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find supplier by ID
 * Returns a single supplier
 *
 * supplierId String ID of supplier to return
 * returns Supplier
 **/
exports.getSupplierById = function(supplierId) {
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
 * List all supplier
 * 
 *
 * page Integer The page number (optional)
 * limit Integer The numbers of items to return (optional)
 * sort String The field to be ordered (optional)
 * order String The sorting type (ascending or descending) (optional)
 * q String The text to filter supplier (optional)
 * returns Supplier
 **/
exports.listSupplier = function(page,limit,sort,order,q) {
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
 * Updates a supplier with form data
 * Returns a single supplier
 *
 * supplierId String ID of supplier that needs to be updated
 * no response value expected for this operation
 **/
exports.updateSupplierWithForm = function(supplierId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

