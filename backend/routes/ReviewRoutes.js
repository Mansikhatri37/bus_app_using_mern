const {
  CreateReview,
  GetAllReviews,
  GetReviewById,
  UpdateReview,
  DeleteReview,
} = require("../controllers/ReviewController");
const router = require("express").Router();

router.post("/create-review", CreateReview);
router.get("/get-all-reviews", GetAllReviews);
router.get("/review-by-id/:id", GetReviewById);
router.put("/update-review-by-id/:id", UpdateReview);
router.delete("/delete-review-by-id/:id", DeleteReview);

module.exports = router;
