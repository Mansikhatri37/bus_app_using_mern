const {
  CreateFilter,
  GetAllFilters,
  GetFilterById,
  UpdateFilter,
  DeleteFilter,
} = require("../controllers/FaqController");
const router = require("express").Router();

router.post("/create-filter", CreateFilter);
router.get("/get-all-filters", GetAllFilters);
router.get("/filter-by-id/:id", GetFilterById);
router.put("/update-filter-by-id/:id", UpdateFilter);
router.delete("/delete-filter-by-id/:id", DeleteFilter);

module.exports = router;
