const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const taskRouter = require("./routes/tasks.routes");

const app = express();

app.use(cors()); //
app.use(express.json());
app.use(morgan("dev"));
app.use("/tasks", taskRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

module.exports = app;
