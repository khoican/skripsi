import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/user/HomePage';
import ProductPage from './pages/user/ProductPage';
import CartPage from './pages/user/CartPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/products',
		element: <ProductPage />,
	},
	{
		path: '/cart',
		element: <CartPage />,
	},
]);
