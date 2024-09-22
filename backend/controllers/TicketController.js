const Ticket = require("../models/TicketModel");

module.exports.CreateTicket = async (req, res, next) => {
    try {
      const ticket = await Ticket.create(req.body);
      if (ticket) {
        res.status(200).json({ message: "Ticket created  successfully", success: true, ticket });
      } else {
        res.status(400).json({ message: "Bad Request", success: false });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
  }

  module.exports.GetAllTickets = async (req, res, next) => {
    try {
      const tickets = await Ticket.find();
      if (tickets) {
        res.status(200).json({ message: "Tickets fetched successfully", success: true, tickets });
      } else {
        res.status(404).json({ message: "Empty Database", success: false });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
  }

  module.exports.GetTicketById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const ticket = await Ticket.findById({ _id: id });
      if (ticket) {
        res.status(200).json({ message: "Ticket fetched successfully", success: true, ticket });
      } else {
        res.status(404).json({ message: "Ticket not found", success: false });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
  }

  module.exports.UpdateTicket = async (req, res, next) => {
    try {
      const { id } = req.params;
      const ticket = await Ticket.findByIdAndUpdate({ _id: id }, req.body, { new: true });
      if (ticket) {
        res.status(200).json({ message: "Ticket updated successfully", success: true, ticket });
      } else {
        res.status(404).json({ message: "Ticket not found", success: false });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
  }

  module.exports.DeleteTicket = async (req, res, next) => {
    try {
      const ticket = await Ticket.findByIdAndDelete({ _id: req.params.id });
      if (ticket) {
        res.status(200).json({ message: "Ticket deleted successfully", success: true, ticket });
      } else {
        res.status(404).json({ message: "Ticket not found", success: false });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error ${error.message}`, success: false });
    }
  }