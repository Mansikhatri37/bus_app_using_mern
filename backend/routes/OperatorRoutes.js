const {
  CreateOperator,
  GetAllOperator,
  GetOperatorById,
  UpdateOperator,
  DeleteOperator,
} = require("../controllers/OperatorController");

const router = require("express").Router();

router.post("/create-operator", CreateOperator);
router.get("/get-all-operators", GetAllOperator);
router.get("/operator-by-id/:id", GetOperatorById);
router.put("/update-by-id/:id", UpdateOperator);
router.delete("/delete-by-id/:id", DeleteOperator);

module.exports = router;
