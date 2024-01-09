import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import DashboardProduct from "./pages/dashboard/ProductPage";
import DashboardProductDetails from "./pages/dashboard/ProductDetailsPage";
import DashboardUser from "./pages/dashboard/UserPage";
import DashboardOrder from "./pages/dashboard/OrderPage";
import DashboardCategory from "./pages/dashboard/CategoryPage";
import DashboardSubCategory from "./pages/dashboard/SubCategoryPage";

const router = createBrowserRouter([
    {
        path: "/Dashboard",
        element: <Dashboard />,
    },
    {
        path: "/Dashboard/User",
        element: <DashboardUser />,
    },
    {
        path: "/Dashboard/Product",
        element: <DashboardProduct />,
    },
    {
        path: "/Dashboard/Product/ProductDetails",
        element: <DashboardProductDetails />,
    },
    {
        path: "/Dashboard/Order",
        element: <DashboardOrder />,
    },
    {
        path: "/Dashboard/Category",
        element: <DashboardCategory />,
    },
    {
        path: "/Dashboard/SubCategory",
        element: <DashboardSubCategory />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
