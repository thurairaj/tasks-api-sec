const express = require("express");

const {
  listTasks,
  createTask,
  getTaskById,
  updateTask,
} = require("../controllers/tasks.controller");
const router = express.Router();

router.route("/").get(listTasks).post(createTask);
router.route("/:id").get(getTaskById).put(updateTask);

module.exports = router;
