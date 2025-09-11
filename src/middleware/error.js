function errorHandler(err, req, res, next) {
  console.log(`⚠️ Error: ${err}`);
  res.status(500).send({
    error: err.message || "Internal server error",
  });
  next();
}

module.exports = { errorHandler };
