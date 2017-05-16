"use strict";

module.exports = function(){

}

//Catch 404 and forward to Error Handler
const catch404 = function(req, res, next){
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
};

//Error Handler
const errorHandler = function(err, req, res, next){
  res.status(err.status || 500);
  res.send(err.message);
};
