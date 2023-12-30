import CategoryDropdown from './CategoryDropdown';

const Category = () => {
	return (
		<div className="w-64">
			<div className="w-full px-4 py-4 bg-slate-300 rounded-t-md">
				<h1 className="font-montserrat font-semibold">KATEGORI</h1>
			</div>

			<CategoryDropdown />
		</div>
	);
};

export default Category;
