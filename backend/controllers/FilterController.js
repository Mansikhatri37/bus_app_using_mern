const Filter = require("../models/FilterModel");

module.exports.CreateFilter = async (req, res, next) => {
    try {
      const filter = await Filter.create(req.body);
      if (filter) {
        res.status(200).json({ message: "Filter created  successfully", success: true, filter });
      } else {
        res.status(400).json({ message: "Bad Request", success: false });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
  }

  module.exports.GetAllFilters = async (req, res, next) => {
    try {
      const filters = await Filter.find();
      if (filters) {
        res.status(200).json({ message: "Filters fetched successfully", success: true, filters });
      } else {
        res.status(404).json({ message: "Empty Database", success: false });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
  }

  module.exports.GetFilterById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const filter = await Filter.findById({ _id: id });
      if (filter) {
        res.status(200).json({ message: "Filter fetched successfully", success: true, filter });
      } else {
        res.status(404).json({ message: "Filter not found", success: false });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
  }

  module.exports.UpdateFilter = async (req, res, next) => {
    try {
      const { id } = req.params;
      const filter = await Filter.findByIdAndUpdate({ _id: id }, req.body, { new: true });
      if (filter) {
        res.status(200).json({ message: "Filter updated successfully", success: true, filter });
      } else {
        res.status(404).json({ message: "Filter not found", success: false });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
  }

  module.exports.DeleteFilter = async (req, res, next) => {
    try {
      const filter = await Filter.findByIdAndDelete({ _id: req.params.id });
      if (filter) {
        res.status(200).json({ message: "Filter deleted successfully", success: true, filter });
      } else {
        res.status(404).json({ message: "Filter not found", success: false });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
  }