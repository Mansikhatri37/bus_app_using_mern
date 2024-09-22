const Location = require("../models/LocationModel");

module.exports.CreateLocation = async (req, res, next) => {
    try {
        const location = await Location.create(req.body);
        if (location) {
            res.status(200).json({ message: "Location created successfully", success: true, location });
        } else {
            res.status(400).json({ message: "Bad Request", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.GetAllLocations = async (req, res, next) => {
    try {
        const locations = await Location.find();
        if (locations.length > 0) {
            res.status(200).json({ message: "Locations fetched successfully", success: true, locations });
        } else {
            res.status(404).json({ message: "No locations found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.GetLocationById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const location = await Location.findById(id);
        if (location) {
            res.status(200).json({ message: "Location fetched successfully", success: true, location });
        } else {
            res.status(404).json({ message: "Location not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.UpdateLocation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedLocation = await Location.findByIdAndUpdate(id, req.body, { new: true });
        if (updatedLocation) {
            res.status(200).json({ message: "Location updated successfully", success: true, location: updatedLocation });
        } else {
            res.status(404).json({ message: "Location not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.DeleteLocation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedLocation = await Location.findByIdAndDelete(id);
        if (deletedLocation) {
            res.status(200).json({ message: "Location deleted successfully", success: true, location: deletedLocation });
        } else {
            res.status(404).json({ message: "Location not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}
