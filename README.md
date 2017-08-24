# Shoe Catalogue API

This API can be used for storing and retrieving shoe data.

# Consumer Section

The RESTful API is hosted at ` https://shoe-catalogue-api-codex.herokuapp.com/api `. Therefore, all calls to the API
should be made to that base URL, after appending any of the following URIs, depending on your intentions:

## Retrieving

__1. Want to get all shoes currently stored in the database?__
  * __Request Type:__ ` GET `
  
  * __URI:__ ` /shoes `
  
## Filtering
  
__1. Want to filter shoes based on their brand?__
  * __Request Type:__ ` GET `
  
  * __URI:__ ` /shoes/brand/<brand name> `
  
  * __Example:__ 
  ```
  https://shoe-catalogue-api-codex.herokuapp.com/api/shoes/brand/Nike
  ```
  
__2. Want to filter shoes based on their size?__
  * __Request Type:__ ` GET `
  
  * __URI:__ ` /shoes/size/<size> `
  
  * __Example:__ 
  ```
  https://shoe-catalogue-api-codex.herokuapp.com/api/shoes/size/9
  ```
  
__3. Want to filter shoes based on their color?__
  * __Request Type:__ ` GET `
  
  * __URI:__ ` /shoes/color/<color> `
  
  * __Example:__ 
  ```
  https://shoe-catalogue-api-codex.herokuapp.com/api/shoes/color/blue
  ```
  
__4. Want to filter shoes based on a combination of properties?__
  * __Request Type:__ ` GET `
  
  * __URI:__ 
  ```
  The order of the URI for filtering follows the structure of instructions 1 - 3, including their
  sequence. Brand has priority in terms of sequence over both size and color. Size has second priority, 
  and color URI structure is always the final element in the sequence. Always brand followed by size
  followed by color.
  ```
  
  * __Example:__ 
  ```
  https://shoe-catalogue-api-codex.herokuapp.com/api/shoes/brand/Nike/size/11/color/red 
  ```
  
__5. Want to find a shoe based on its ID?__
  * Request Type: ` GET `
  
  * __URI:__ ` /shoes/id/<id> `
  
  * __Example:__ 
  ```
  https://shoe-catalogue-api-codex.herokuapp.com/api/shoes/id/592400e0c9c4f40004754d40
  ```
## Updating stock

__1. Want to add a new shoe to the database?__
  * __Request Type:__ ` POST `
  
  * __Data Type:__ ` JSON `
  
  * __Data Format:__
  ```
  A single JSON object representing a shoe.
  
    {
      brand : String,
      size : Integer,
      color : String,
      in_stock : Integer // number of shoes to add to the stock
      price : Integer
    }
  ```
  * __URI:__ ` /shoes `
  
  * __Example:__ 
  ```
  {
    brand : 'Nike',
    size : 10,
    color : 'blue',
    in_stock : 10,
    price : 1200
  }
  ```
  
__2. Want to decrement shoe stock (after a sale, for example)?__

  * __Request Type:__ ` POST `
  
  * __Data Type:__ ` JSON `
  
  * __Data Format:__
  ```
  An array of object(s) representing shoes.
  
    [
      {       
        _id : String,
        qty : Integer // number of shoes sold
      },
    ];
  ```
  * __URI:__ ` /shoes/sold `
  
  * __Example:__ 
  ```
  [
    {
      _id : '592400e0c9c4f40004754d40',
      qty : 4
    },
  ]
  ```
  
# Developer Section

Want to contribute to and/or extend the application? Then this section's for you!


## Prerequisites

* [Node & npm](https://nodejs.org/en/) must be installed.
* [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) must be installed.

## Installation Guide

1. Fork the repository.

2. Clone the repository onto your dev machine.

3. Navigate to the project root directory.

4. Run ``` npm install ``` in the project root. This will install all dependencies that are included in the package.json.

  Tools that are included in this app are:
  * Mongoose
  * ExpressJS
  * Body Parser

5. To run tests, you will need to install [Mocha.](https://mochajs.org/#installation). This will allow you to run the ` mocha `
command in the terminal in order to run your unit tests.

6. Run ``` npm install nodemon ``` to install nodemon. This will allow you to run the express server by using the command 
` nodemon ` in your terminal while in the project's root.


# Additional Notes

__I have created a front-end application that uses this API. Consumers and developers alike may be interested in having a look at it as an example. You can find it here:__

```
https://github.com/ggsbv/shoe-catalogue-api-frontend
```
