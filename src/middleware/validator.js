function validateTask(req, res, next) {
  const { title, completed } = req.body;

  if (typeof title !== "string" || title.trim().length < 1) {
    return res.status(400).send({
      error: "Invalid title format",
    });
  }

  if (typeof completed !== "undefined" && typeof completed !== "boolean") {
    return res.status(400).send({
      error: "Invalid completed format",
    });
  }

  req.body.title = title.trim();
  next();
}

module.exports = { validateTask };
