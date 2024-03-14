var express = require('express');
var Product = require('../models/product'); // Import the Product model

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find()
    .then((products) => {      
      // Assuming completed field doesn't exist for products
      const currentProducts = products;

      console.log(`Total products: ${products.length}`);
      res.render('index', { currentProducts: currentProducts });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


router.post('/addProduct', function(req, res, next) {
  const productName = req.body.productName;
  const createDate = Date.now();
  
  var product = new Product({
    productName: productName,
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
