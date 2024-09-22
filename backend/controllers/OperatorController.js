const Operator = require("../models/OperatorModel");

module.exports.CreateOperator = async (req, res, next) => {
  try {
    const operator = await Operator.create(req.body);
    if (operator) {
      res.status(200).json({
        message: "Operator created  successfully",
        success: true,
        operator,
      });
    } else {
      res.status(400).json({ message: "Bad Request", success: false });
    }
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error ${error.message}`,
      success: false,
    });
  }
};

module.exports.GetAllOperator = async (req, res, next) => {
  try {
    const operator = await Operator.find();
    if (operator) {
      res.status(200).json({
        message: "Operator fetched successfully",
        success: true,
        operator,
      });
    } else {
      res.status(404).json({ message: "Empty Database", success: false });
    }
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error ${error.message}`,
      success: false,
    });
  }
};

module.exports.GetOperatorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const operator = await Operator.findById({ _id: id });
    if (operator) {
      res.status(200).json({
        message: "Operator fetched successfully",
        success: true,
        operator,
      });
    } else {
      res.status(404).json({ message: "Operator not found", success: false });
    }
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error ${error.message}`,
      success: false,
    });
  }
};

module.exports.UpdateOperator = async (req, res, next) => {
  try {
    const { id } = req.params;
    const operator = await Operator.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (operator) {
      res.status(200).json({
        message: "Operator updated successfully",
        success: true,
        operator,
      });
    } else {
      res.status(404).json({ message: "Operator not found", success: false });
    }
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error ${error.message}`,
      success: false,
    });
  }
};

module.exports.DeleteOperator = async (req, res, next) => {
  try {
    const operator = await Operator.findByIdAndDelete({ _id: req.params.id });
    if (operator) {
      res.status(200).json({
        message: "Operator deleted successfully",
        success: true,
        operator,
      });
    } else {
      res.status(404).json({ message: "Operator not found", success: false });
    }
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error ${error.message}`,
      success: false,
    });
  }
};
