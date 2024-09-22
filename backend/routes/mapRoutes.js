const {
  CreateRouteMap,
  GetAllRouteMaps,
  GetRouteMapById,
  UpdateRouteMap,
  DeleteRouteMap,
} = require("../controllers/RouteMapController");
const router = require("express").Router();

router.post("/create-map", CreateRouteMap);
router.get("/get-all-maps", GetAllRouteMaps);
router.get("/map-by-id/:id", GetRouteMapById);
router.put("/update-map-by-id/:id", UpdateRouteMap);
router.delete("/delete-map-by-id/:id", DeleteRouteMap);

module.exports = router;
