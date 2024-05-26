import { createBrowserRouter } from 'react-router-dom';
import User from './layouts/User';
import HomePage from './pages/user/HomePage';
import ProductPage from './pages/user/ProductsPage';
import ProductDetail from './pages/user/ProductDetail';
import CartPage from './pages/user/CartPage';
import CheckoutPage from './pages/user/CheckoutPage';
import LoginPage from './pages/user/auth/LoginPage';
import AdminLayout from './layouts/Admin';
import Dashboard from './pages/dashboard/index';
import DashboardUser from './pages/dashboard/UserPage';
import DashboardUserDetails from './pages/dashboard/UserDetailsPage';
import DashboardProduct from './pages/dashboard/ProductPage';
import DashboardProductDetails from './pages/dashboard/ProductDetailsPage';
import DashboardOrder from './pages/dashboard/OrderPage';
import DashboardCategory from './pages/dashboard/CategoryPage';
import DashboardProfile from './pages/dashboard/ProfilePage';
import Auth from './pages/dashboard/LoginPage';
import OrderDetailsPage from './pages/dashboard/OrderDetailsPage';
import InvoicePage from './pages/user/InvoicePage';
import EditProfilePage from './pages/user/EditProfilePage';
import EditProfile from './layouts/EditProfile';
import ChangePasswordPage from './pages/user/ChangePasswordPage';
import OrderHistoryPage from './pages/user/OrderHistoryPage';

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
				path: '/products?search=:query',
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
			{
				path: '/invoice/:id',
				element: <InvoicePage />,
			},
			{
				path: '',
				element: <EditProfile />,
				children: [
					{
						path: 'editprofile',
						element: <EditProfilePage />,
					},
					{
						path: 'changepassword',
						element: <ChangePasswordPage />,
					},
				],
			},
			{
				path: '/orderhistory',
				element: <OrderHistoryPage />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/Auth',
		element: <Auth />,
	},
	{
		path: '/dashboard',
		element: <AdminLayout />,
		children: [
			{
				path: '',
				element: <Dashboard />,
			},
			{
				path: 'profile',
				element: <DashboardProfile />,
			},
			{
				path: 'user',
				element: <DashboardUser />,
			},

			{
				path: 'user/userdetails/:id',
				element: <DashboardUserDetails />,
			},
			{
				path: 'product',
				element: <DashboardProduct />,
			},
			{
				path: 'product/productdetails',
				element: <DashboardProductDetails />,
			},
			{
				path: 'product/productdetails/:id',
				element: <DashboardProductDetails />,
			},
			{
				path: 'order',
				element: <DashboardOrder />,
			},
			{
				path: 'order/orderdetails/:id',
				element: <OrderDetailsPage />,
			},
			{
				path: 'category',
				element: <DashboardCategory />,
			},
		],
	},
]);
