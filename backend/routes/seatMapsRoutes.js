const {
    CreateSeatMap,
    GetAllSeatMaps,
    GetSeatMapById,
    UpdateSeatMap,
    DeleteSeatMap,
} = require("../controllers/SeatMapController");
const router = require("express").Router();

router.post("/create-seatMap", CreateSeatMap);
router.get("/get-all-seatMaps", GetAllSeatMaps);
router.get("/seatMap-by-id/:id", GetSeatMapById);
router.put("/update-seatMap-by-id/:id", UpdateSeatMap);
router.delete("/delete-seatMap-by-id/:id", DeleteSeatMap);

module.exports = router;
