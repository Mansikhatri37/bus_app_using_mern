const {
  CreateLocation,
  GetAllLocations,
  GetLocationById,
  UpdateLocation,
  DeleteLocation,
} = require("../controllers/LocationController");
const router = require("express").Router();

router.post("/create-location", CreateLocation);
router.get("/get-all-locations", GetAllLocations);
router.get("/location-by-id/:id", GetLocationById);
router.put("/update-location-by-id/:id", UpdateLocation);
router.delete("/delete-location-by-id/:id", DeleteLocation);

module.exports = router;
