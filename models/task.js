const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    trim: true,
  },
  createDate: {
    type: Date,
    default: Date.now
  },
  completedDate: Date,
  completed: {
    type: Boolean,
    default: false
  }
});
