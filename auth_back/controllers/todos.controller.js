const Todo = require("../moduls/Todo.model");
const jwt = require("jsonwebtoken");

module.exports.todoControllers = {
  getAllTodos: async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
  },

  deleteTodo: async (req, res) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findById(id);
      if (todo.user.toString() === req.user.id) {
        await Todo.findByIdAndDelete(id);
        return res.json("Delete");
      }
      return res.status(401).json("Нет доступа");
    } catch (e) {
      return res.status(401).json("Неверный токен");
    }
  },

  getTodo: async (req, res) => {
    try {
      const data = await Todo.find({});
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  addTodo: async (req, res) => {
    const { text } = req.body;
    try {
      const todo = await Todo.create({
        user: req.user.id,
        text,
      });
      return res.json(todo);
    } catch (e) {
      return res.status(401).json("Неверный токен");
    }
  },

  getTodo: async (req, res) => {
    try {
      const data = await Todo.find({});
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
};
