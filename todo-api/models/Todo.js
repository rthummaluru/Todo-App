const mongoose = require('mongoose');

// Define the schema for the Todo model
const TodoSchema = new mongoose.Schema({
  // The text content of the todo item
  text: { type: String, required: true },
  // Whether the todo item is completed or not
  completed: { type: Boolean, default: false },
  // The date and time when the todo item was created
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Todo', TodoSchema);