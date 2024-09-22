const FrequentQuestion = require("../models/FaqModel")

module.exports.CreateFrequentQuestion = async (req, res, next) => {
    try {
        const faq = await FrequentQuestion.create(req.body);
        if (faq) {
            res.status(200).json({ message: "Frequent Question created  successfully", success: true, faq });
        } else {
            res.status(400).json({ message: "Bad Request", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.GetAllFrequentQuestions = async (req, res, next) => {
    try {
        const faqs = await FrequentQuestion.find();
        if (faqs) {
            res.status(200).json({ message: "Frequent Questions fetched successfully", success: true, faqs });
        } else {
            res.status(404).json({ message: "Empty Database", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.GetFrequentQuestionById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const faq = await FrequentQuestion.findById({ _id: id });
        if (faq) {
            res.status(200).json({ message: "Frequent Question fetched successfully", success: true, faq });
        } else {
            res.status(404).json({ message: "Frequent Question not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.UpdateFrequentQuestion = async (req, res, next) => {
    try {
        const { id } = req.params;
        const faq = await FrequentQuestion.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        if (faq) {
            res.status(200).json({ message: "Frequent Question updated successfully", success: true, faq });
        } else {
            res.status(404).json({ message: "Frequent Question not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.DeleteFrequentQuestion = async (req, res, next) => {
    try {
        const faq = await FrequentQuestion.findByIdAndDelete({ _id: req.params.id });
        if (faq) {
            res.status(200).json({ message: "Frequent Question deleted successfully", success: true, faq });
        } else {
            res.status(404).json({ message: "Frequent Question not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}
