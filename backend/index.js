const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoutes");
const authRoute = require("./routes/authRoutes");
const AdminRoute = require("./routes/adminRoutes");
const BusRoute = require("./routes/BusRoutes");
const locationRoute = require("./routes/locationRoutes");
const reviewRoute = require("./routes/reviewRoutes");
const seatMapRoute = require("./routes/seatMapsRoutes");
const ticketRoute = require("./routes/ticketRoutes");
const operatorRoute = require("./routes/OperatorRoutes");

require("dotenv").config();

const { MONGO_URL, PORT } = process.env;
const app = express();

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:4000", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cors());

app.use("/users", userRoute);
app.use("/admin", AdminRoute);
app.use("/buses", BusRoute);
app.use("/location", locationRoute);
app.use("/review", reviewRoute);
app.use("/seat-map", seatMapRoute);
app.use("/ticket", ticketRoute);
app.use("/operators", operatorRoute);
app.use("/auth", authRoute);



// app.use("/filter", filterRoute);
// app.use("/faq", faqRoute);
//app.use("/route-map", routeMapRoute);
