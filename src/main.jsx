import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./layouts/Index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </React.StrictMode>
);
