import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getAllSubCategories } from '../../../../../services/category';

const CategoriesDropdown = (props) => {
	const [open, setOpen] = useState(false);
	const [subCategories, setSubCategories] = useState([]);
	const { name, id } = props;

	const handleOpen = () => {
		setOpen(!open);
	};

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

	return (
		<>
			<div
				onClick={handleOpen}
				className="mx-5 p-3 flex justify-between items-center border-b border-gray-300"
			>
				<div className="flex items-center gap-5">
					<FontAwesomeIcon icon={faList} />
					<p>{name}</p>
				</div>
				<FontAwesomeIcon
					icon={faChevronDown}
					className="cursor-pointer"
				/>
			</div>

			{open &&
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
							<p>{item.name}</p>
						</div>
					))}
		</>
	);
};

export default CategoriesDropdown;
