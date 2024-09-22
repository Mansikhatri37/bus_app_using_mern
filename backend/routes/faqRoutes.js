const {
  CreateFaq,
  GetAllFaqs,
  GetFaqById,
  UpdateFaq,
  DeleteFaq,
} = require("../controllers/FaqController");
const router = require("express").Router();

router.post("/create-faq", CreateFaq);
router.get("/get-all-faqs", GetAllFaqs);
router.get("/faq-by-id/:id", GetFaqById);
router.put("/update-faq-by-id/:id", UpdateFaq);
router.delete("/delete-faq-by-id/:id", DeleteFaq);

module.exports = router;
