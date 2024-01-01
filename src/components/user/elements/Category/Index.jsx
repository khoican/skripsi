/* eslint-disable no-unused-vars */
import { getCategory, getSubCategory } from '../../../../services/category.services.js';
import CategoryDropdown from './CategoryDropdown';
import { useEffect, useState } from 'react';

const Category = () => {
	const [categories, setCategories] = useState([]);
	const [subCategories, setSubCategories] = useState([]);

	useEffect(() => {
		getCategory((data) => {
			setCategories(data)
		})
	}, [])

	useEffect(() => {
		getSubCategory((data) => {
			setSubCategories(data)
		})
	}, []) 

	return (
		<div className="w-3/12">
			<div className="w-full px-4 py-4 bg-slate-300 rounded-t-md">
				<h1 className="font-montserrat font-semibold">KATEGORI</h1>
			</div>
			{ categories.length > 0 && categories.map((category, index) => (
				<CategoryDropdown key={index} category={category.name}>
					{ subCategories.filter((subCategory) => subCategory.category.id === category.id).map((item, index) => (
						<CategoryDropdown.SubCategory key={index} subCategory={item.name} />
					))}
				</CategoryDropdown>
			))}
			
		</div>
	);
};

export default Category;
