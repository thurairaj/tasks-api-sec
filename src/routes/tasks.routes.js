const express = require("express");

const {
  listTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");
const router = express.Router();

router.route("/").get(listTasks).post(createTask);
router.route("/:id").get(getTaskById).put(updateTask).delete(deleteTask);

module.exports = router;
