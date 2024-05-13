import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={configureStore}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
