const express = require("express");
require("./db");

const router = express.Router();
router.use(require("./api_auth"));
router.use(require("./api_product"));
router.use(require("./api_transaction"));
module.exports = router;
