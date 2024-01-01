import { Fragment } from 'react';
import Category from '../elements/Category/Index';
import Product from '../fragments/Product/Index';

const Home = () => {
	return (
		<Fragment>
			<main className="flex gap-14 px-28 mt-10">
				<Category />

				<main className='w-9/12'>
					<h1 className='text-montserrat font-bold text-xl mb-5'>Produk Terlaris</h1>
					<Product />
				</main>
			</main>
		</Fragment>
	);
};

export default Home;
