"use strict";

var express = require("express");
var app = express();

const jsonParser = require("body-parser").json;
app.use(jsonParser());

const Models = require("./models");
const Routes = require("./routes");
const errorHandler = require("./error-handler");

const models = Models("mongodb://localhost/TEST-t-sc-api");
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

//GET /api/shoes/color/:color
//List all shoes by color
app.get("/api/shoes/color/:color", routes.shoeByColor);

//GET
//List shoes by requested /:brandname & /:size
app.get("/api/shoes/brand/:brandname/size/:size", routes.shoeByBrandAndSize);

//GET /api/shoes/size/:size/color/:color
//List all shoes by size and color
app.get("/api/shoes/size/:size/color/:color", routes.shoeBySizeAndColor);

//PUT
//Update shoe stock when shoe is sold
app.put("/api/shoes/sold/:id", routes.shoeSale);

errorHandler(app);

var port = process.env.PORT || 3006;

app.listen(port, function(){
  console.log("application is running on port ", port);
});
