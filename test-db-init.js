"use strict";

const Models = require('./models');

const models = Models("mongodb://localhost/TEST-t-sc-api");

const fs = require('fs');

function removeAllShoesFromDB(){
  models.Shoe
    .remove({})
    .then(function(result){
      console.log("removed all entries from test-db");
    })
    .catch(function(err){
      if(err) console.log(err);
    });
};

function addShoe(db_data){
    removeAllShoesFromDB();

    var file = fs.readFileSync(db_data, "utf-8");

    JSON.parse(file).forEach((shoe) => {
      var newShoe = new models.Shoe(shoe);

      newShoe
        .save()
        .then(function(shoe){
          console.log(shoe);
        })
        .catch(function(err){
          if(err) return (err);
        });
    });
};

addShoe("./test-db-data.js");
