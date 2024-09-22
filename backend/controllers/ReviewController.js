const Review = require("../models/ReviewModel");

module.exports.CreateReview = async (req, res, next) => {
    try {
        const review = await Review.create(req.body);
        if (review) {
            res.status(200).json({ message: "Review created successfully", success: true, review });
        } else {
            res.status(400).json({ message: "Bad Request", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.GetAllReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find();
        if (reviews.length > 0) {
            res.status(200).json({ message: "Reviews fetched successfully", success: true, reviews });
        } else {
            res.status(404).json({ message: "No reviews found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.GetReviewById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const review = await Review.findById(id);
        if (review) {
            res.status(200).json({ message: "Review fetched successfully", success: true, review });
        } else {
            res.status(404).json({ message: "Review not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.UpdateReview = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedReview = await Review.findByIdAndUpdate(id, req.body, { new: true });
        if (updatedReview) {
            res.status(200).json({ message: "Review updated successfully", success: true, review: updatedReview });
        } else {
            res.status(404).json({ message: "Review not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.DeleteReview = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedReview = await Review.findByIdAndDelete(id);
        if (deletedReview) {
            res.status(200).json({ message: "Review deleted successfully", success: true, review: deletedReview });
        } else {
            res.status(404).json({ message: "Review not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}
