const SeatMap = require("../models/SeatMapModel");

module.exports.CreateSeatMap = async (req, res, next) => {
    try {
        const seatMap = await SeatMap.create(req.body);
        if (seatMap) {
            res.status(200).json({ message: "Seat map created successfully", success: true, seatMap });
        } else {
            res.status(400).json({ message: "Bad Request", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.GetAllSeatMaps = async (req, res, next) => {
    try {
        const seatMaps = await SeatMap.find();
        if (seatMaps.length > 0) {
            res.status(200).json({ message: "Seat maps fetched successfully", success: true, seatMaps });
        } else {
            res.status(404).json({ message: "No seat maps found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.GetSeatMapById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const seatMap = await SeatMap.findById(id);
        if (seatMap) {
            res.status(200).json({ message: "Seat map fetched successfully", success: true, seatMap });
        } else {
            res.status(404).json({ message: "Seat map not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.UpdateSeatMap = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedSeatMap = await SeatMap.findByIdAndUpdate(id, req.body, { new: true });
        if (updatedSeatMap) {
            res.status(200).json({ message: "Seat map updated successfully", success: true, seatMap: updatedSeatMap });
        } else {
            res.status(404).json({ message: "Seat map not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.DeleteSeatMap = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedSeatMap = await SeatMap.findByIdAndDelete(id);
        if (deletedSeatMap) {
            res.status(200).json({ message: "Seat map deleted successfully", success: true, seatMap: deletedSeatMap });
        } else {
            res.status(404).json({ message: "Seat map not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}
