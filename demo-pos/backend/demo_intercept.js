const tokenIntercept1 = (req, res, next) => {
  if (req.query.token1 == "1234") {
    next();
  } else {
    res.end("invalid token 1");
  }
};

const tokenIntercept2 = (req, res, next) => {
  if (req.query.token2 == "4321") {
    next();
  } else {
    res.end("invalid token 2");
  }
};

module.exports = { tokenIntercept1, tokenIntercept2 };
