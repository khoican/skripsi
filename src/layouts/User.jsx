import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/user/fragments/navbar/Index';
import Footer from '../components/user/fragments/footer/Index';
import { Helmet } from 'react-helmet';

const User = () => {
	return (
		<Fragment>
			<Helmet>
				<title>As-Sakinah Mart</title>
			</Helmet>
			<Navbar />

			<Outlet />

			<Footer />
		</Fragment>
	);
};

export default User;
