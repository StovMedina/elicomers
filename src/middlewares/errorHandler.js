const logError = (err, req, res, next) => {
  console.log("ha ocurrido un error");
  console.error(err);
  next(err);
};

const errorHandler = (err, req, res) => {
  const { message } = err;
  res.status(500).json({ ok: false, message });
};

module.exports = {
  logError,
  errorHandler,
};
