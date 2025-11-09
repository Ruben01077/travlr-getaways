var express = require("express")
var router = express.Router()
var controllers = require("../controllers/user")

//GET travel page

router.get("/", controllers.user)

module.exports = router