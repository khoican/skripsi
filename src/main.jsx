import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/index";
import DashboardProduct from "./pages/dashboard/product";
import DashboardProductDetails from "./pages/dashboard/product/product-details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Dashboard",
        element: <Dashboard />,
    },
    {
        path: "/Dashboard/Product",
        element: <DashboardProduct />,
    },
    {
        path: "/Dashboard/Product/ProductDetails",
        element: <DashboardProductDetails />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
