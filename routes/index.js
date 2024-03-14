var express = require('express');
var Product = require('../models/product'); // Import the Product model

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find()
    .then((products) => {      
      console.log(`Total products: ${products.length}`);
      res.render('index', { currentProducts: products }); // Pass products directly to the view
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


router.post('/addProduct', function(req, res, next) {
  const productName = req.body.productName;
  const description = req.body.description; // Get description from the request body
  const price = req.body.price; // Get price from the request body
  const createDate = Date.now();
  
  var product = new Product({
    productName: productName,
    description: description, // Add description field to the new product
    price: price, // Add price field to the new product
    createDate: createDate
  });
  console.log(`Adding a new product ${productName} - createDate ${createDate}`);

  product.save()
      .then(() => { 
        console.log(`Added new product ${productName} - createDate ${createDate}`);        
        res.redirect('/'); })
      .catch((err) => {
          console.log(err);
          res.send('Sorry! Something went wrong.');
      });
});

router.post('/deleteProduct', function(req, res, next) {
  const productId = req.body._id;
  Product.findByIdAndDelete(productId)
    .then(() => { 
      console.log(`Deleted product ${productId}`);      
      res.redirect('/'); }  )
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


module.exports = router;
