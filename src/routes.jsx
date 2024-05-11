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
import { createBrowserRouter } from 'react-router-dom';
import User from './layouts/User';
import HomePage from './pages/user/HomePage';
import ProductPage from './pages/user/ProductsPage';
import ProductDetail from './pages/user/ProductDetail';
import CartPage from './pages/user/CartPage';
import CheckoutPage from './pages/user/CheckoutPage';
import LoginPage from './pages/user/auth/LoginPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <User />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/products',
				element: <ProductPage />,
			},
			{
				path: '/products/:id',
				element: <ProductPage />,
			},
			{
				path: '/products/show/:id',
				element: <ProductDetail />,
			},
			{
				path: '/cart',
				element: <CartPage />,
			},
			{
				path: '/checkout',
				element: <CheckoutPage />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
]);
