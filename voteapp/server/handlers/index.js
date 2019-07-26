module.exports.notFound = (req, res, next) => {
  const err = new Err("Not found");
  err.status = 404;
  next(err);
};

module.exports.errors = (err, req, res, next) => {
  res.status(err.status || 500).json({
    err: err.message || "SOmething went wrong"
  });
};