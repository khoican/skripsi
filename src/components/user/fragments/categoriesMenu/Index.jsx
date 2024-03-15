import { useEffect, useState } from 'react';
import CategoriesDropdown from '../../elements/categoriesDropdown/Index';
import { getAllCategories } from '../../../../../services/category';

const CategoriesMenu = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getAllCategories((data) => {
			setCategories(
				data.data.map((category) => ({
					id: category.id,
					name: category.name,
				})),
			);
		});
	});

	return (
		<div className="w-1/4 overflow-hidden h-full rounded-xl shadow">
			<h1 className="bg-gray-200 px-5 py-3 font-semibold text-lg uppercase tracking-widest">
				Kategori
			</h1>
			{categories.map((item, index) => (
				<CategoriesDropdown key={index} name={item.name} id={item.id} />
			))}
		</div>
	);
};

export default CategoriesMenu;
