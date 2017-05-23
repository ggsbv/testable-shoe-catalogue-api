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
    console.log(req.body);
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

  //GET /api/shoes/color/:color
  //List all shoes by color
  const shoeByColor = function(req, res, next){
    const color = req.params.color;

    models.Shoe
      .find({ color : color })
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
    const size = req.params.size;

    models.Shoe
      .find({
          brand : brandName,
          size  : size
        })
      .then(function(shoes){
        res.json(shoes);
      })
      .catch(function(err){
        return next(err);
      });
  };

  //GET /api/shoes/size/:size/color/:color
  //List all shoes by size and color
  const shoeBySizeAndColor = function(req, res, next){
    const size = req.params.size;
    const color = req.params.color;

    models.Shoe
      .find({
        size  : size,
        color : color
      })
      .then(function(shoes){
        res.json(shoes);
      })
      .catch(function(err){
        return next(err);
      });
  };

  //PUT /api/shoes/sold/:id
  const shoeSale = function(req, res, next){
    var shoeId = req.params.id;

    models.Shoe
      .update(
        { _id  : shoeId },
        { $inc : { in_stock : -1 } })
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
    shoeByColor,
    shoeBySizeAndColor
  }
};
