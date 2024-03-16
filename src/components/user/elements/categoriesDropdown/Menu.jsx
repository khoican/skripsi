import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { getAllSubCategories } from '../../../../../services/category';

const CategoryMenu = (props) => {
	const [subCategories, setSubCategories] = useState([]);
	const { id } = props;

	useEffect(() => {
		getAllSubCategories((data) => {
			setSubCategories(
				data.data.map((subCategory) => ({
					id: subCategory.id,
					name: subCategory.name,
					slug: subCategory.slug,
					categoryId: subCategory.category.id,
				})),
			);
		});
	}, []);

	let handleSubCategory = subCategories.filter(
		(subCategory) => subCategory.categoryId == id,
	);

	return (
		<>
			{handleSubCategory.length > 0 ? (
				handleSubCategory.map((item, index) => (
					<div
						key={index}
						className="flex items-center gap-5 ms-8 me-5 p-3 border-b border-gray-300"
					>
						<FontAwesomeIcon icon={faCircle} className="text-xs" />
						<p className="capitalize">{item.name}</p>
					</div>
				))
			) : (
				<div className="flex items-center gap-5 ms-8 me-5 p-3 border-b border-gray-300">
					<FontAwesomeIcon icon={faCircle} className="text-xs" />
					<p className="capitalize">Belum ada sub kategori</p>
				</div>
			)}

			{/* {!subCategories ? (
				<div className="flex items-center gap-5 ms-8 me-5 p-3 border-b border-gray-300">
					<FontAwesomeIcon icon={faCircle} className="text-xs" />
					<p className="capitalize">Belum ada sub kategori</p>
				</div>
			) : (
				subCategories
					.filter((subCategory) => subCategory.categoryId == id)
					.map((item, index) => (
						<div
							key={index}
							className="flex items-center gap-5 ms-8 me-5 p-3 border-b border-gray-300"
						>
							<FontAwesomeIcon
								icon={faCircle}
								className="text-xs"
							/>
							<p className="capitalize">{item.name}</p>
						</div>
					))
			)} */}
		</>
	);
};

export default CategoryMenu;
