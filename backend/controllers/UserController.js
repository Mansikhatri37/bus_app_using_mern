const User = require("../models/UserModel");

module.exports.CreateUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        if (user) {
            res.status(200).json({ message: "User created  successfully", success: true, user });
        } else {
            res.status(400).json({ message: "Bad Request", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.GetAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        if (users) {
            res.status(200).json({ message: "Users fetched successfully", success: true, users });
        } else {
            res.status(404).json({ message: "Empty Database", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.GetUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById({ _id: id });
        if (user) {
            res.status(200).json({ message: "User fetched successfully", success: true, user });
        } else {
            res.status(404).json({ message: "User not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.UpdateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        if (user) {
            res.status(200).json({ message: "User updated successfully", success: true, user });
        } else {
            res.status(404).json({ message: "User not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}

module.exports.DeleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete({ _id: req.params.id });
        if (user) {
            res.status(200).json({ message: "User deleted successfully", success: true, user });
        } else {
            res.status(404).json({ message: "User not found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
}