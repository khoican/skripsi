import { Fragment } from "react";
import Navbar from '../../components/user/fragments/Navbar/Index';
import Footer from '../../components/user/fragments/Footer/Index';
import CartLayout from "../../components/user/layouts/CartLayout";

const CartPage = () => {
	return (
		<Fragment>
			<Navbar />

			<CartLayout />

			<Footer />
		</Fragment>
	)
};

export default CartPage;
