// import "/@assets/styles/base.css";
import "../public/assets/styles/base.css";
import { AppProvider } from "@providers";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
