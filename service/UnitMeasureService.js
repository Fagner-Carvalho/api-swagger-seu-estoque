'use strict';


/**
 * Add a new unitMeasure
 * 
 *
 * body UnitMeasure UnitMeasure object that needs to be added
 * no response value expected for this operation
 **/
exports.addUnitMeasure = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a unitMeasure
 * 
 *
 * unitMeasureId String ID of unitMeasure that needs to be updated
 * no response value expected for this operation
 **/
exports.deleteUnitMeasure = function(unitMeasureId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find unitMeasure by ID
 * Returns a single unitMeasure
 *
 * unitMeasureId String ID of unitMeasure to return
 * returns UnitMeasure
 **/
exports.getUnitMeasureById = function(unitMeasureId) {
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
 * List all unitMeasure
 * 
 *
 * page Integer The page number (optional)
 * limit Integer The numbers of items to return (optional)
 * sort String The field to be ordered (optional)
 * order String The sorting type (ascending or descending) (optional)
 * q String The text to filter unitMeasure (optional)
 * returns UnitMeasure
 **/
exports.listUnitMeasure = function(page,limit,sort,order,q) {
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
 * Updates a unitMeasure with form data
 * Returns a single unitMeasure
 *
 * unitMeasureId String ID of unitMeasure that needs to be updated
 * no response value expected for this operation
 **/
exports.updateUnitMeasureWithForm = function(unitMeasureId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

