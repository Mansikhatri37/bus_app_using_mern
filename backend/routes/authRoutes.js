const { Signup, SignIn } = require("../controllers/Authcontroller");

const router = require("express").Router();

router.post("/signup", Signup);
router.post("/signin", SignIn);

module.exports = router;
