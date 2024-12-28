const Todo = require("../models/Todos");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.id });  
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

// Add a new todo
exports.addTodo = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newTodo = new Todo({
      name,
      description,
      userId: req.user.id,  
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ error: "Error adding todo" });
  }
};


exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { name, description, completed },
      { new: true }
    );
    if (!updatedTodo) return res.status(404).json({ error: "Todo not found" });
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: "Error updating todo" });
  }
};


exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) return res.status(404).json({ error: "Todo not found" });
    res.status(200).json({ message: "Todo deleted" });
  } catch (err) {
    res.status(400).json({ error: "Error deleting todo" });
  }
};
