const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;