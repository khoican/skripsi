import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const CategoryMenu = (props) => {
	const { id } = props;

	return (
		<>
			{id.length > 0 ? (
				id.map((item, index) => (
					<Link
						to={`/products?category=${item.categoryId}&subCategory=${item.id}`}
						key={index}
						className="flex items-center gap-5 ms-8 me-5 p-3 border-b border-gray-300"
					>
						<FontAwesomeIcon icon={faCircle} className="text-xs" />
						<p className="capitalize">{item.name}</p>
					</Link>
				))
			) : (
				<div className="flex items-center gap-5 ms-8 me-5 p-3 border-b border-gray-300">
					<FontAwesomeIcon icon={faCircle} className="text-xs" />
					<p className="capitalize">Belum ada sub kategori</p>
				</div>
			)}
		</>
	);
};

export default CategoryMenu;
