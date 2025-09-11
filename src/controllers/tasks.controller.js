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

  if (!task) {
    res.status(404).json({ error: "Task not found" });
  } else {
    res.status(200).json({ data: task });
  }
}

function updateTask(req, res) {
  const task = _getTask(Number(req.params.id));
  if (!task) {
    res.status(404).json({ error: "Task not found" });
  } else {
    const indexTask = tasks.findIndex((dbTask) => dbTask.id === task.id);
    const { title = task.title, completed = task.completed } = req.body;
    tasks[indexTask] = {
      id: task.id,
      title,
      completed,
    };

    res.status(200).json({ data: tasks[indexTask] });
  }
}

function deleteTask(req, res) {
  const id = Number(req.params.id);
  const taskIndex = tasks.findIndex((dbTask) => dbTask.id === id);
  if (taskIndex < 0) {
    res.status(404).json({ error: "Task not found" });
  } else {
    const [removedTask] = tasks.splice(taskIndex, 1);
    res.status(200).json({ data: removedTask });
  }
}

function _getTask(id) {
  return tasks.find((task) => task.id === id);
}

module.exports = {
  listTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
