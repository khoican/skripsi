import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/actions/productsAction';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PencilIcon from '../../../assets/img/icon/PencilIcon/index';
import TrashIcon from '../../../assets/img/icon/TrashIcon/index';
import Button from '../Elements/Button';

const TableProduct = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.fetchProducts.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const columns = [
		{
			name: 'No',
			selector: (row) => row.no,
			sortable: true,
		},
		{
			name: 'Name',
			selector: (row) => row.name,
			sortable: true,
		},
		{
			name: 'Stock',
			selector: (row) => row.stock,
			sortable: true,
		},
		{
			name: 'Price',
			selector: (row) => row.price,
			sortable: true,
		},
		{
			name: 'Category',
			selector: (row) => row.category,
			sortable: true,
		},
		{
			name: 'Sub Category',
			selector: (row) => row.subCategory,
			sortable: true,
		},
		{
			name: 'Action',
			cell: (row) => (
				<>
					<Link>
						<Button onClick={() => handleEditSubCategory(row.no)}>
							<img
								src={PencilIcon}
								className="w-7 pl-2"
								alt="pencilicon"
							/>
						</Button>
					</Link>
					<Button onClick={() => handleDeleteSubCategory(row.no)}>
						<img
							src={TrashIcon}
							className="w-6 pl-2"
							alt="trashicon"
						/>
					</Button>
				</>
			),
		},
	];

	const datas = products.map((product, index) => {
		return {
			no: index + 1,
			name: product.name,
			stock: product.stock,
			price: product.price,
			category: product.subCategory.category.name,
			subCategory: product.subCategory.name,
		};
	});

	console.log(datas);

	const columnsDefs = [
		{
			className: 'text-center',
		},
	];
	return (
		<>
			<DataTable
				columns={columns}
				data={datas}
				pagination
				responsive
				columnsDefs={columnsDefs}
			/>
		</>
	);
};

export default TableProduct;
