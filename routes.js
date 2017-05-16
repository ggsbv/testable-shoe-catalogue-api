"use strict";

module.exports = function(models){

  //GET /api/shoes
  //Lists all shoes in stock
  const allShoes = function(req, res, next){
    models.Shoe
      .find({})
      .then(function(shoes){
        res.json(shoes);
      })
      .catch(function(err){
        return next(err);
      });
  };

  //POST /api/shoes
  //Route for adding shoes to stock
  const addShoe = function(req, res, next){
    var newShoe = new models.Shoe(req.body);

    newShoe
      .save()
      .then(function(shoe){
        res.status(201);
        res.json(shoe);
      })
      .catch(function(err){
        if(err) return next(err);
      });
  };

  //GET /api/shoes/brand/:brandname
  //List all shoes by brand name
  const shoeByBrand = function(req, res, next){
    const brandName = req.params.brandname;

    models.Shoe
      .find({ brand : brandName })
      .then(function(shoes){
        res.json(shoes);
      })
      .catch(function(err){
        return next(err);
      });
  };

  //GET /api/shoes/size/:size
  //List all shoes by size
  const shoeBySize = function(req, res, next){
    const size = req.params.size;

    models.Shoe
      .find({ size : size })
      .then(function(shoes){
        res.json(shoes);
      })
      .catch(function(err){
        return next(err);
      });
  };

  //GET /api/shoes/brand/:brandname/size/:size
  //List all shoes by brand name and size
  const shoeByBrandAndSize = function(req, res, next){
    const brandName = req.params.brandname;
    console.log(brandName);
    const size = req.params.size;
    console.log(size);

    models.Shoe
      .find({ brand : brandName })
      .where("size").equals(size)
      .then(function(shoes){
        res.json(shoes);
      })
      .catch(function(err){
        return next(err);
      });
  };

  //PUT /api/shoes/sold/:id
  const shoeSale = function(req, res, next){
    req.shoe
      .sale({ $inc : { in_stock : -1 } })
      .then(function(result){
        res.json(result);
      })
      .catch(function(err){
        return next(err);
      });
  };

  return {
    allShoes,
    addShoe,
    shoeByBrand,
    shoeBySize,
    shoeByBrandAndSize,
    shoeSale,
    catch404,
    errorHandler
  }
};
