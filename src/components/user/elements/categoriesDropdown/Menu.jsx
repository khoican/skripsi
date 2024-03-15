import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { getAllSubCategories } from '../../../../../services/category';

const CategoryMenu = (props) => {
	const [subCategories, setSubCategories] = useState([]);
	const { slug } = props;

	useEffect(() => {
		getAllSubCategories((data) => {
			console.log(data.data);
			setSubCategories(data.data);
		});
	});

	return (
		<>
			{/* {subCategories.filter(category.slug == slug).map((item, index) => (
				
			))} */}
		</>
	);
};

export default CategoryMenu;
