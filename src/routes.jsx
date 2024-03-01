import { createBrowserRouter } from 'react-router-dom';
import User from './layouts/User';
import HomePage from './pages/user/HomePage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <User />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
		],
	},
]);
