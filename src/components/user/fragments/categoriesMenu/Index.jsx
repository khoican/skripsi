import { useDispatch, useSelector } from 'react-redux';
import CategoriesDropdown from '../../elements/categoriesDropdown/Index';
import { useEffect } from 'react';
import { fetchCategories } from '../../../../redux/actions/categoryAction';
import { fetchSubCategories } from '../../../../redux/actions/subCategoryAction';

const CategoriesMenu = () => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.fetchCategories.category);
	const subCategories = useSelector(
		(state) => state.fetchSubCategories.category,
	);

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchSubCategories());
	}, [dispatch]);

	return (
		<div className="hidden md:block w-1/4 overflow-hidden h-full rounded-xl shadow">
			<h1 className="bg-gray-200 px-5 py-3 font-semibold text-lg uppercase tracking-widest">
				Kategori
			</h1>
			{categories.length > 0 &&
				categories.map((item, index) => {
					const filteredSubCategories = subCategories
						? subCategories.filter(
								(sub) => sub.categoryId === item.id,
							)
						: [];

					return (
						<CategoriesDropdown
							key={index}
							name={item.name}
							id={item.id}
							sub={filteredSubCategories}
						/>
					);
				})}
		</div>
	);
};

export default CategoriesMenu;
