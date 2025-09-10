const { tasks, nextId } = require("../data/tasks.store");

// get all the tasks
function listTasks(req, res) {
  res.status(200).json({ data: tasks });
}

function createTask(req, res) {
  const { title, completed } = req.body;
  const newTask = { title, completed, id: nextId() };
  tasks.push(newTask);
  res.status(201).json(newTask);
}

function getTaskById(req, res) {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    res.status(404).json({ error: "Task not found" });
  }
  res.status(200).json({ data: task });
}

module.exports = {
  listTasks,
  createTask,
  getTaskById,
};
