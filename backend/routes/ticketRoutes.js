const {
    CreateTicket,
    GetAllTickets,
    GetTicketById,
    UpdateTicket,
    DeleteTicket,
  } = require("../controllers/TicketController");
  const router = require("express").Router();
  
  router.post("/create-ticket", CreateTicket);
  router.get("/get-all-ticket", GetAllTickets);
  router.get("/ticket-by-id/:id", GetTicketById);
  router.put("/update-ticket-by-id/:id", UpdateTicket);
  router.delete("/delete-ticket-by-id/:id", DeleteTicket);
  
  module.exports = router;
  