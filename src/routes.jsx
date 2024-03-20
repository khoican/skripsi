import { createBrowserRouter } from 'react-router-dom';
import User from './layouts/User';
import HomePage from './pages/user/HomePage';
import ProductPage from './pages/user/ProductsPage';

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
		],
	},
]);
