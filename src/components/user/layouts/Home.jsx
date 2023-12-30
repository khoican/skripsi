import { Fragment } from 'react';
import Category from '../elements/Category/Index';

const Home = () => {
	return (
		<Fragment>
			<main className="flex gap-20 px-28 mt-10">
				<Category />

				<h1>Home</h1>
			</main>
		</Fragment>
	);
};

export default Home;
