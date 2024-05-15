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

	if (!categories && !subCategories) {
		return <p>Loading....</p>;
	}

	return (
		<div className="w-full">
			{categories.map((category, index) => (
				<CategoryDropdown
					id={category.id}
					key={index}
					categories={category.name}
				>
					{subCategories &&
						subCategories
							.filter(
								(subCategory) =>
									subCategory.categoryId === category.id,
							)
							.map((subCategory, index) => (
								<CategoryDropdown.SubCategory
									key={index}
									subCategories={subCategory.name}
									id={subCategory.id}
								/>
							))}

					<CategoryDropdown.AddSubCategory id={category.id} />
				</CategoryDropdown>
			))}
		</div>
	);
};

export default Category;
