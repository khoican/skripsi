import { useDispatch, useSelector } from 'react-redux';
import CategoriesDropdown from '../../elements/categoriesDropdown/Index';
import { useEffect } from 'react';
import { fetchCategories } from '../../../../actions/categoryAction';

const CategoriesMenu = () => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.fetchCategories.category);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	return (
		<div className="w-1/4 overflow-hidden h-full rounded-xl shadow">
			<h1 className="bg-gray-200 px-5 py-3 font-semibold text-lg uppercase tracking-widest">
				Kategori
			</h1>
			{categories.length > 0 &&
				categories.map((item, index) => (
					<CategoriesDropdown
						key={index}
						name={item.name}
						id={item.id}
					/>
				))}
		</div>
	);
};

export default CategoriesMenu;
