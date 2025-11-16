const express = require("express")
const router = express.Router()
const controllers = require("../controllers/user")

//GET travel page

router.get("/", controllers.user)

module.exports = router