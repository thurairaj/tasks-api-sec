const { tasks, nextId } = require("../data/tasks.store");

// get all the tasks
function listTasks(req, res) {
  res.status(200).json({ data: tasks });
}

module.exports = {
  listTasks,
};
