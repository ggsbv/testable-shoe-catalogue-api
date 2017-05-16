"use strict";

var express = require("express");
var app = express();

const Models = require("./models");
const Routes = require('./routes');
const models = Models("mongodb://localhost/t-sc-api");
const routes = Routes(models);

//GET
//Lists all shoes in stock
app.get("/api/shoes/", routes.allShoes);

//POST
//Create a new shoe
app.post("/api/shoes", routes.addShoe);

//GET
//List shoes by requested /:brandname
app.get("/api/shoes/brand/:brandname", routes.shoeByBrand);

//GET
//List shoes by requested /:size
app.get("/api/shoes/size/:size", routes.shoeBySize);

//GET
//List shoes by requested /:brandname & /:size
app.get("/api/shoes/brand/:brandname/size/:size", routes.shoeByBrandAndSize);

//PUT
//Update shoe stock when shoe is sold
app.put("/api/shoes/sold/:id", routes.shoeSale);

//Catch 404 and forward to error handler
app.use(routes.catch404);

//Error handler
app.use(routes.errorHandler);

var port = process.env.PORT || 3006;

app.listen(port, function(){
  console.log("application is running on port ", port);
});
