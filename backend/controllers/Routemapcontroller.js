const RouteMap = require("../models/RouteMapModel");

module.exports.CreateRouteMap = async (req, res, next) => {
  try {
    const routeMap = await RouteMap.create(req.body);
    if (routeMap) {
      res
        .status(200)
        .json({
          message: "Route map created successfully",
          success: true,
          routeMap,
        });
    } else {
      res.status(400).json({ message: "Bad Request", success: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Internal Server Error ${error.message}`,
        success: false,
      });
  }
};

module.exports.GetAllRouteMaps = async (req, res, next) => {
  try {
    const routeMaps = await RouteMap.find();
    if (routeMaps.length > 0) {
      res
        .status(200)
        .json({
          message: "Route maps fetched successfully",
          success: true,
          routeMaps,
        });
    } else {
      res.status(404).json({ message: "No route maps found", success: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Internal Server Error ${error.message}`,
        success: false,
      });
  }
};

module.exports.GetRouteMapById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const routeMap = await RouteMap.findById(id);
    if (routeMap) {
      res
        .status(200)
        .json({
          message: "Route map fetched successfully",
          success: true,
          routeMap,
        });
    } else {
      res.status(404).json({ message: "Route map not found", success: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Internal Server Error ${error.message}`,
        success: false,
      });
  }
};

module.exports.UpdateRouteMap = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedRouteMap = await RouteMap.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedRouteMap) {
      res
        .status(200)
        .json({
          message: "Route map updated successfully",
          success: true,
          routeMap: updatedRouteMap,
        });
    } else {
      res.status(404).json({ message: "Route map not found", success: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Internal Server Error ${error.message}`,
        success: false,
      });
  }
};

module.exports.DeleteRouteMap = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedRouteMap = await RouteMap.findByIdAndDelete(id);
    if (deletedRouteMap) {
      res
        .status(200)
        .json({
          message: "Route map deleted successfully",
          success: true,
          routeMap: deletedRouteMap,
        });
    } else {
      res.status(404).json({ message: "Route map not found", success: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Internal Server Error ${error.message}`,
        success: false,
      });
  }
};
