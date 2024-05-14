import { useEffect, useState } from 'react';
import CategoryDropdown from './CategoryDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../../redux/actions/categoryAction';
import { fetchSubCategories } from '../../../../redux/actions/subCategoryAction';

const Category = () => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.fetchCategories.category);
	const subCategories = useSelector(
		(state) => state.fetchSubCategories.category,
	);

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchSubCategories());
	}, [dispatch]);

	console.log(categories);
	console.log(subCategories);

	if (!categories && !subCategories) {
		return <p>Loading....</p>;
	}

	return (
		<div className="w-full">
			{categories.map((categories, index) => (
				<CategoryDropdown
					id={categories.id}
					key={index}
					categories={categories.name}
				>
					{subCategories &&
						subCategories
							.filter(
								(subCategories) =>
									subCategories.categoryId === categories.id,
							)
							.map((item, index) => (
								<CategoryDropdown.SubCategory
									key={index}
									subCategories={item.name}
									id={item.id}
								/>
							))}

					<CategoryDropdown.AddSubCategory />
				</CategoryDropdown>
			))}
		</div>
	);
};

export default Category;
