import React from "react";
import ReactDOM from "react-dom/client";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const root = ReactDOM.createRoot(document.getElementById("wrapper"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
