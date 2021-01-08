const router = require("express").Router();
const controller = require("../../controller/controller");

// Matches with "/api/nasa"
router
  .route("/")
  .get(controller.picOfTheDay)

module.exports = router;