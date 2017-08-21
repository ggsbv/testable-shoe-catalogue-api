"use strict";

var express = require("express");
var app = express();

const jsonParser = require("body-parser").json;
app.use(jsonParser());

const Models = require("./models");
const Routes = require("./routes");
const errorHandler = require("./error-handler");
const cors = require('./cors');

const mongoUrl = process.env.MONGO_DB_URL || "mongodb://localhost/t-sc-api";


const models =  Models(mongoUrl);
const routes = Routes(models);

//CORS, Access Control
app.use(cors);

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

//GET /api/shoes/brand/:brandname/size/:size/color/:color
//List all shoes by brand, size and color
app.get("/api/shoes/brand/:brandname/size/:size/color/:color", routes.shoeByBrandSizeAndColor);

//GET /api/shoes/brand/:brandname/color/:color
//List all shoes by size and color
app.get("/api/shoes/brand/:brandname/color/:color", routes.shoeByBrandAndColor);

//GET /api/shoes/id/:id
app.get("/api/shoes/id/:id", routes.shoeById);

//PUT
//Update shoe stock when shoe is sold
app.post("/api/shoes/sold", routes.shoeSale);

errorHandler(app);

var port = process.env.PORT || 3006;

app.listen(port, function(){
  console.log("application is running on port ", port);
});
