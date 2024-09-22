const {
    CreateBus,
    GetAllBuses,
    GetBusById,
    UpdateBus,
    DeleteBus,
    SearchBus
} = require("../controllers/BusController");
const router = require("express").Router();

router.post("/create-bus", CreateBus);
router.get("/get-all-bus", GetAllBuses);
router.get("/bus-by-id/:id", GetBusById);
router.put("/update-bus-by-id/:id", UpdateBus);
router.delete("/delete-bus-by-id/:id", DeleteBus);
router.get("/search", SearchBus);

module.exports = router;
