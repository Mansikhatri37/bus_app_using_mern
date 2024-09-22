const {
    CreateAdmin,
    GetAllAdmins,
    GetAdminById,
    UpdateAdmin,
    DeleteAdmin,
} = require("../controllers/AdminController");
const router = require("express").Router();

router.post("/create-admin", CreateAdmin);
router.get("/get-all-admins", GetAllAdmins);
router.get("/admin-by-id/:id", GetAdminById);
router.put("/update-admin-by-id/:id", UpdateAdmin);
router.delete("/delete-admin-by-id/:id", DeleteAdmin);

module.exports = router;
