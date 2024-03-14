import { Fragment } from 'react';
import Button from '../../elements/button/Index';

const CategoryButton = () => {
	return (
		<Fragment>
			<Button />

			<div className="p-3 bg-gray-100 absolute mt-2">
				<p>Dropdown</p>
			</div>
		</Fragment>
	);
};

export default CategoryButton;
