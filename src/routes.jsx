import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layouts/Admin";
import Dashboard from "./pages/dashboard/index";
import DashboardUser from "./pages/dashboard/UserPage";
import DashboardUserDetails from "./pages/dashboard/UserDetailsPage";
import DashboardProduct from "./pages/dashboard/ProductPage";
import DashboardProductDetails from "./pages/dashboard/ProductDetailsPage";
import DashboardOrder from "./pages/dashboard/OrderPage";
import DashboardCategory from "./pages/dashboard/CategoryPage";
import DashboardRole from "./pages/dashboard/RolePage";
import DashboardProfile from "./pages/dashboard/ProfilePage";
import Auth from "./pages/dashboard/LoginPage";
import OrderDetailsPage from "./pages/dashboard/OrderDetailsPage";

export const router = createBrowserRouter([
    {
        path: "/Auth",
        element: <Auth />,
    },
    {
        path: "/Dashboard",
        element: <AdminLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "User",
                element: <DashboardUser />,
            },
            {
                path: "Profile",
                element: <DashboardProfile />,
            },

            {
                path: "User/UserDetails",
                element: <DashboardUserDetails />,
            },
            {
                path: "Product",
                element: <DashboardProduct />,
            },
            {
                path: "Product/ProductDetails",
                element: <DashboardProductDetails />,
            },
            {
                path: "Order",
                element: <DashboardOrder />,
            },
            {
                path: "Order/OrderDetails",
                element: <OrderDetailsPage />,
            },
            {
                path: "Category",
                element: <DashboardCategory />,
            },
            {
                path: "Role",
                element: <DashboardRole />,
            },
        ],
    },
]);
