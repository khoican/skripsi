import { Fragment } from 'react';
import Navbar from '../../components/user/fragments/Navbar/Index';
import Home from '../../components/user/layouts/Home';
import Footer from '../../components/user/fragments/Footer/Index';

const HomePage = () => {
	return (
		<Fragment>
			<Navbar />

			<Home />

			<Footer />
		</Fragment>
	);
};

export default HomePage;
