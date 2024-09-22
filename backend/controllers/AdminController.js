const Admin = require("../models/AdminModel");

module.exports.CreateAdmin = async (req, res, next) => {
    try {
        const admin = await Admin.create(req.body);
        if (admin) {
            res.status(200).json({ message: "Admin created successfully", success: true, admin });
        } else {
            res.status(400).json({ message: "Bad Request", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.GetAllAdmins = async (req, res, next) => {
    try {
        const admins = await Admin.find();
        if (admins.length > 0) {
            res.status(200).json({ message: "Admins fetched successfully", success: true, admins });
        } else {
            res.status(404).json({ message: "No admins found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.GetAdminById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findById(id);
        if (admin) {
            res.status(200).json({ message: "Admin fetched successfully", success: true, admin });
        } else {
            res.status(404).json({ message: "Admin not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.UpdateAdmin = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedAdmin = await Admin.findByIdAndUpdate(id, req.body, { new: true });
        if (updatedAdmin) {
            res.status(200).json({ message: "Admin updated successfully", success: true, admin: updatedAdmin });
        } else {
            res.status(404).json({ message: "Admin not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.DeleteAdmin = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedAdmin = await Admin.findByIdAndDelete(id);
        if (deletedAdmin) {
            res.status(200).json({ message: "Admin deleted successfully", success: true, admin: deletedAdmin });
        } else {
            res.status(404).json({ message: "Admin not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}
