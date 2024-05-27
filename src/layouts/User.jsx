import { Fragment, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/user/fragments/navbar/Index';
import Footer from '../components/user/fragments/footer/Index';
import { Helmet } from 'react-helmet';

const User = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

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
