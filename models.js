"use strict";

const mongoose = require("mongoose");

module.exports = function(mongoUrl){
  mongoose.connect(mongoUrl);

  var db = mongoose.connection;

  db.on("error", function(err){
    console.error(err);
  });

  db.once("open", function(){
    console.log("connection successful");
  });

  const Schema = mongoose.Schema;

  const ShoeSchema = new Schema({
    brand   : String,
    color   : String,
    size    : Number,
    price   : Number,
    in_stock: Number
  });

  const Shoe = mongoose.model("Shoe", ShoeSchema);

  return {
    Shoe
  };
};
