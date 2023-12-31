/* eslint-disable no-unused-vars */
import { getCategory } from '../../../../services/getCategory.js';
import CategoryDropdown from './CategoryDropdown';
import { useEffect, useState } from 'react';

const Category = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategory((data) => {
			setCategories(data)
		})
	}, [])

	return (
		<div className="w-64">
			<div className="w-full px-4 py-4 bg-slate-300 rounded-t-md">
				<h1 className="font-montserrat font-semibold">KATEGORI</h1>
			</div>
			{ categories.length > 0 && categories.map((category, index) => (
				<div key={index}>
					<CategoryDropdown category={category.categoryName}>
						{ category.subCategories.map((subCategory, indexes) => (
							<CategoryDropdown.SubCategory key={indexes} subCategory={subCategory.subCategoryName} />
						))}
					</CategoryDropdown>
				</div>
			))}
			
		</div>
	);
};

export default Category;
