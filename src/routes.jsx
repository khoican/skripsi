import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/user/HomePage';
import ProductPage from './pages/user/ProductPage';
import CartPage from './pages/user/CartPage';
import DetailProductPage from './pages/user/DetailProductPage';

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
		path: '/products/:id',
		element: <ProductPage />,
	},
	{
		path: '/products/details/:id',
		element: <DetailProductPage />,
	},
	{
		path: '/cart',
		element: <CartPage />,
	},
]);
