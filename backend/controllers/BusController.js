const Bus = require("../models/BusModel");

module.exports.CreateBus = async (req, res, next) => {
  try {
    const bus = await Bus.create(req.body);
    if (bus) {
      res
        .status(200)
        .json({ message: "Bus created successfully", success: true, bus });
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

module.exports.GetAllBuses = async (req, res, next) => {
  try {
    const buses = await Bus.find();
    if (buses.length > 0) {
      res
        .status(200)
        .json({ message: "Buses fetched successfully", success: true, buses });
    } else {
      res.status(404).json({ message: "No buses found", success: false });
    }
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error ${error.message}`,
      success: false,
    });
  }
};

module.exports.GetBusById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bus = await Bus.findById(id);
    if (bus) {
      res
        .status(200)
        .json({ message: "Bus fetched successfully", success: true, bus });
    } else {
      res.status(404).json({ message: "Bus not found", success: false });
    }
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error ${error.message}`,
      success: false,
    });
  }
};

module.exports.UpdateBus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBus = await Bus.findByIdAndUpdate(id, req.body, { new: true });
    if (updatedBus) {
      res.status(200).json({
        message: "Bus updated successfully",
        success: true,
        bus: updatedBus,
      });
    } else {
      res.status(404).json({ message: "Bus not found", success: false });
    }
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error ${error.message}`,
      success: false,
    });
  }
};

module.exports.DeleteBus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBus = await Bus.findByIdAndDelete(id);
    if (deletedBus) {
      res.status(200).json({
        message: "Bus deleted successfully",
        success: true,
        bus: deletedBus,
      });
    } else {
      res.status(404).json({ message: "Bus not found", success: false });
    }
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error ${error.message}`,
      success: false,
    });
  }
};

module.exports.SearchBus = async (req, res) => {
  const { from, to } = req.params;

  console.log(`Searching for buses: from = ${from}, to = ${to}`);

  try {
    const buses = await Bus.find({
      departure: from,
      arrival: to,
    });

    if (buses.length === 0) {
      return res
        .status(404)
        .json({ message: "No buses found", success: false });
    }

    res.status(200).json({ buses, success: true });
  } catch (error) {
    console.error(`Error fetching buses: ${error.message}`);
    res.status(500).json({
      message: `Error fetching buses: ${error.message}`,
      success: false,
    });
  }
};
