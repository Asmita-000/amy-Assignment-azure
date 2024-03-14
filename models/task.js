const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    trim: true,
    required: true // Ensuring productName is required for a product
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true // Ensuring price is required for a product
  },
  createDate: {
    type: Date,
    default: Date.now // Setting a default value to the current date for createDate
  },
  // Assuming there might be additional fields specific to a product, you can add them here
});

module.exports = mongoose.model('Product', productSchema);
