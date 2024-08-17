import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import CategoryMenu from './Menu';
import { Link } from 'react-router-dom';

const CategoriesDropdown = (props) => {
	const [open, setOpen] = useState(false);
	const { name, id, sub } = props;

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<>
			{sub.length > 0 ? (
				<>
					<div
						onClick={handleOpen}
						className="mx-5 p-3 flex justify-between items-center border-b border-gray-300 cursor-pointer"
					>
						<div className="flex items-center gap-5">
							<FontAwesomeIcon icon={faList} />
							<p className="capitalize">{name}</p>
						</div>
						<FontAwesomeIcon
							icon={faChevronDown}
							className={`transition-all ${open ? 'rotate-180' : ''}`}
						/>
					</div>
					{open && <CategoryMenu id={sub} />}
				</>
			) : (
				<>
					<Link
						to={`/products?category=${id}`}
						className="mx-5 p-3 flex justify-between items-center border-b border-gray-300 cursor-pointer"
					>
						<div className="flex items-center gap-5">
							<FontAwesomeIcon icon={faList} />
							<p className="capitalize">{name}</p>
						</div>
					</Link>
				</>
			)}
		</>
	);
};

export default CategoriesDropdown;
