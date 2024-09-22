const { CreateUser,
    GetAllUsers,
    GetUserById,
    UpdateUser,
    DeleteUser } = require('../controllers/UserController');

const router = require("express").Router();


router.post("/create-user", CreateUser);
router.get('/get-all-users', GetAllUsers)
router.get('/user-by-id/:id', GetUserById)
router.put('/update-by-id/:id', UpdateUser)
router.delete('/delete-by-id/:id', DeleteUser)

module.exports = router;