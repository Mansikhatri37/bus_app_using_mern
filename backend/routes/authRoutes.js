const {
    Signup,
    Login,
    UserVerification,
    ForgotPassword,
    ResetPassword,
    LoginWithGoogle,
    LoginWithOTP,
} = require("../controllers/Authcontroller");

const router = require("express").Router();

router.post("/signup", Signup);

// TODO:Functionalities to be implemented
router.post('/login', Login)
router.post('/user-verification', UserVerification)
router.post('/forgot-password', ForgotPassword)
router.post('/reset-password', ResetPassword)
router.post('/login-with-google', LoginWithGoogle)
router.post('/login-with-otp', LoginWithOTP)


module.exports = router;

