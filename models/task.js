const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  catagory: {
    type: String,
    trim: true,
  },
  createDate: Date,
  completedDate: Date,
  completed: Boolean,
  price: {
    type: String,
    trim: true,
  },
  pID: {
    type: String,
    trim: true,
  }
});

module.exports = mongoose.model('Task', taskSchema);