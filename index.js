const express = require("express");
const router = express.Router();
const MiddlewareController = require("./controllers/middleware.controller");

router.get("/middlewares/create/now", MiddlewareController.middleware);

module.exports = router;
