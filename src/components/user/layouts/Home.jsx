import { Fragment } from 'react';
import Category from '../elements/Category/Index';
import Product from '../fragments/Product/Index';

const Home = () => {
	return (
		<Fragment>
			<main className="flex gap-20 px-28 mt-10">
				<Category />

				<Product />
			</main>
		</Fragment>
	);
};

export default Home;
