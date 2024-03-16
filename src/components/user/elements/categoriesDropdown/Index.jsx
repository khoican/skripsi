import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getAllSubCategories } from '../../../../../services/category';
import CategoryMenu from './Menu';

const CategoriesDropdown = (props) => {
	const [open, setOpen] = useState(false);
	const [subCategories, setSubCategories] = useState([]);
	const { name, id } = props;

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<>
			<div
				onClick={handleOpen}
				className="mx-5 p-3 flex justify-between items-center border-b border-gray-300"
			>
				<div className="flex items-center gap-5">
					<FontAwesomeIcon icon={faList} />
					<p className="capitalize">{name}</p>
				</div>
				<FontAwesomeIcon
					icon={faChevronDown}
					className={`cursor-pointer transition-all ${
						open ? 'rotate-180' : ''
					}`}
				/>
			</div>

			{open && <CategoryMenu id={id} />}
		</>
	);
};

export default CategoriesDropdown;
