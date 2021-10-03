'use strict';


/**
 * Add a new category
 * 
 *
 * body Category Category object that needs to be added
 * no response value expected for this operation
 **/
exports.addCategory = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a category
 * 
 *
 * categoryId String ID of category that needs to be updated
 * no response value expected for this operation
 **/
exports.deleteCategory = function(categoryId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find category by ID
 * Returns a single category
 *
 * categoryId String ID of category to return
 * returns Category
 **/
exports.getCategoryById = function(categoryId) {
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
 * List all category
 * 
 *
 * page Integer The page number (optional)
 * limit Integer The numbers of items to return (optional)
 * sort String The field to be ordered (optional)
 * order String The sorting type (ascending or descending) (optional)
 * q String The text to filter category (optional)
 * returns Category
 **/
exports.listCategory = function(page,limit,sort,order,q) {
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
 * Updates a category with form data
 * Returns a single category
 *
 * categoryId String ID of category that needs to be updated
 * no response value expected for this operation
 **/
exports.updateCategoryWithForm = function(categoryId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

