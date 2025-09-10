const express = require("express");

const { listTasks } = require("../controllers/tasks.controller");
const router = express.Router();

router.route("/").get(listTasks);

module.exports = router;
