import { Fragment } from 'react';
import Navbar from '../../components/user/fragments/Navbar/Index';
import HomeLayouts from '../../components/user/layouts/HomeLayouts';
import Footer from '../../components/user/fragments/Footer/Index';

const HomePage = () => {
	return (
		<Fragment>
			<Navbar />

			<HomeLayouts />

			<Footer />
		</Fragment>
	);
};

export default HomePage;
