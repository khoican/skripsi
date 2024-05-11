import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/user/fragments/navbar/Index';
import Footer from '../components/user/fragments/footer/Index';

const User = () => {
	return (
		<Fragment>
			<Navbar />

			<Outlet />

			<Footer />
		</Fragment>
	);
};

export default User;
