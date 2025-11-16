const express = require("express")
const router = express.Router()
const controllers = require("../controllers/travel")

//GET travel page

router.get("/", controllers.travel)

module.exports = router