import { Fragment } from 'react';
import Navbar from '../../components/user/fragments/Navbar/Index';
import Footer from '../../components/user/fragments/Footer/Index';
import ProductLayouts from '../../components/user/layouts/ProductLayouts';

const ProductPage = () => {
	return (
		<Fragment>
			<Navbar />

			<ProductLayouts />
			
			<Footer />
		</Fragment>
	);
};

export default ProductPage;
