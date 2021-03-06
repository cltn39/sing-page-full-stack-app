const router = require("express").Router();
const controller = require("../../controller/controller");

// Matches with "/api/posts"
router.route("/").get(controller.findAllPost);
// Matches with "/api/posts/new"
router.route("/new").post(controller.createNewPost);
module.exports = router;
