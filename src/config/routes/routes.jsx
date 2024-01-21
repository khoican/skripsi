import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../pages/dashboard/";
import DashboardUser from "../../pages/dashboard/UserPage";
import DashboardUserDetails from "../../pages/dashboard/UserDetailsPage";
import DashboardProduct from "../../pages/dashboard/ProductPage";
import DashboardProductDetails from "../../pages/dashboard/ProductDetailsPage";
import DashboardOrder from "../../pages/dashboard/OrderPage";
import DashboardCategory from "../../pages/dashboard/CategoryPage";
import DashboardRole from "../../pages/dashboard/RolePage";
import LoginPage from "../../pages/dashboard/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/Auth",
        element: <LoginPage />,
    },
    {
        path: "/Dashboard",
        element: <Dashboard />,
    },
    {
        path: "/Dashboard/User",
        element: <DashboardUser />,
    },
    {
        path: "/Dashboard/User/UserDetails",
        element: <DashboardUserDetails />,
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
        path: "/Dashboard/Role",
        element: <DashboardRole />,
    },
]);
