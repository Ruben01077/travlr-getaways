const express = require("express");
const router = express.Router();
const controllers = require("../controllers/main")


//Get Home page

router.get("/", controllers.index);


module.exports = router