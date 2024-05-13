import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSubCategories } from '../../../../redux/actions/subCategoryAction';

const CategoryMenu = (props) => {
	const { id } = props;
	const dispatch = useDispatch();
	const subCategories = useSelector(
		(state) => state.fetchSubCategories.category,
	);

	useEffect(() => {
		dispatch(fetchSubCategories());
	}, [dispatch]);

	const handleSubCategory = subCategories.filter(
		(item) => item.categoryId === id,
	);

	console.log(handleSubCategory);

	return (
		<>
			{handleSubCategory.length > 0 ? (
				handleSubCategory.map((item, index) => (
					<Link
						to={`/products/${item.id}`}
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
