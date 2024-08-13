import { useEffect, useState } from 'react';
import CategoryDropdown from './CategoryDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../../redux/actions/categoryAction';
import { fetchSubCategories } from '../../../../redux/actions/subCategoryAction';
import { Spinner } from 'flowbite-react';

const Category = () => {
	const dispatch = useDispatch();
	const [pending, setPending] = useState(true);
	const [loading, setLoading] = useState(false);
	const categories = useSelector((state) => state.fetchCategories.category);
	const subCategories = useSelector(
		(state) => state.fetchSubCategories.category,
	);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setPending(false);
			dispatch(fetchCategories());
			dispatch(fetchSubCategories());
			setLoading(true);
		}, 500);
		return () => clearTimeout(timeout);
	}, [dispatch]);

	if (!categories && !subCategories) {
		return <p>Loading....</p>;
	}
	return (
		<div className="w-full">
			<div className="text-center" hidden={loading}>
				<Spinner
					className="text-center"
					aria-labelledby="Extra large spinner example"
					color="warning"
					size="xl"
				/>
			</div>
			{categories.map((category, index) => (
				<CategoryDropdown
					id={category.id}
					key={index}
					categories={category.name}
					pending={pending}
					hidden={pending}
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
