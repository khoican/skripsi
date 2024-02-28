import { createBrowserRouter } from 'react-router-dom';
import User from './layouts/User';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <User />,
		children: [
			{
				path: '/',
				element: <h1>User</h1>,
			},
		],
	},
]);
