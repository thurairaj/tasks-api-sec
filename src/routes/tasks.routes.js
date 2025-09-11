const express = require("express");

const {
  listTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");
const { validateTask } = require("../middleware/validator");
const router = express.Router();

router.route("/").get(listTasks).post(validateTask, createTask);
router
  .route("/:id")
  .get(getTaskById)
  .put(validateTask, updateTask)
  .delete(deleteTask);

module.exports = router;
