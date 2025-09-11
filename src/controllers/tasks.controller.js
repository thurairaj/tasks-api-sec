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
  const task = _getTask(Number(req.params.id));
  res.status(200).json({ data: task });
}

function updateTask(req, res) {
  const task = _getTask(Number(req.params.id));
  const indexTask = _getTaskIndex(task.id);
  const { title = task.title, completed = task.completed } = req.body;
  tasks[indexTask] = {
    id: task.id,
    title,
    completed,
  };

  res.status(200).json({ data: tasks[indexTask] });
}

function deleteTask(req, res) {
  const id = Number(req.params.id);
  const [removedTask] = tasks.splice(_getTaskIndex(id), 1);
  res.status(200).json({ data: removedTask });
}

function _getTask(id) {
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    throw new Error(`Task with id ${id} not found`);
  }

  return task;
}

function _getTaskIndex(id) {
  const taskIndex = tasks.findIndex((dbTask) => dbTask.id === id);
  if (taskIndex < 0) {
    throw new Error(`Task with id ${id} not found`);
  }
  return taskIndex;
}

module.exports = {
  listTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
