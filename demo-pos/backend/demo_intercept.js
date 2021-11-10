const tokenIntercept = (req, res, next) => {
  if (req.query.token == "1234") {
    next();
  } else {
    res.end("invalid token");
  }
};

module.exports = tokenIntercept;
