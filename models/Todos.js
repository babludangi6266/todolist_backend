const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Todo", todoSchema);
