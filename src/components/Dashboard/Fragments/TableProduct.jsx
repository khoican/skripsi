import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsDashboard } from '../../../redux/actions/productsAction';
import { deleteProduct } from '../../../../services/product';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PencilIcon from '../../../assets/img/icon/PencilIcon/index';
import TrashIcon from '../../../assets/img/icon/TrashIcon/index';
import Button from '../Elements/Button';
import { Spinner } from 'flowbite-react';
import ModalProduct from './ModalProduct';

const TableProduct = (props) => {
	// const { id } = props;
	const dispatch = useDispatch();
	const [pending, setPending] = useState(true);
	const [getDeleteId, setGetDeleteId] = useState();
	const products = useSelector(
		(state) => state.fetchProductsDashboard.products,
	);

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(fetchProductsDashboard());
			setPending(false);
		}, 1500);
		return () => clearTimeout(timeout);
	}, [dispatch]);

	const handleOpenDeleteModal = (id) => {
		setGetDeleteId(id);
		document.getElementById('delete').showModal();
	};

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
			name: 'Id',
			selector: (row) => row.id,
			sortable: true,
			omit: true,
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
			name: 'Harga Beli',
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
					<Link to={`/dashboard/product/productdetails/${row.id}`}>
						<Button onClick={() => console.log(row.id)} id={row.id}>
							<img
								src={PencilIcon}
								className="w-7 pl-2 cursor-pointer transition-all ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:rounded-lg hover:shadow-xl duration-300"
								alt="pencilicon"
							/>
						</Button>
					</Link>
					<Button
						onClick={() => {
							handleOpenDeleteModal(row.id);
						}}
					>
						<img
							src={TrashIcon}
							className="w-6 pl-2 cursor-pointer transition-all ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:rounded-lg hover:shadow-xl duration-300"
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
			id: product.id,
			stock: product.stock,
			price: product.price,
			category: product.subCategory.category.name,
			subCategory: product.subCategory.name,
		};
	});

	const customStyles = {
		headCells: {
			style: {
				fontWeight: 'bold',
			},
		},
	};

	const handleDelete = () => {
		deleteProduct(getDeleteId).then((res) => {
			window.location.reload();
		});
	};
	return (
		<>
			<DataTable
				title="Product List"
				columns={columns}
				data={datas}
				customStyles={customStyles}
				pagination
				responsive
				highlightOnHover
				pointerOnHover
				progressPending={pending}
				progressComponent={
					<Spinner
						className="mb-3"
						aria-labelledby="Extra large spinner example"
						color="warning"
						size="xl"
					/>
				}
			/>

			<ModalProduct id={'delete'}>
				<div className="flex mt-2 justify-end">
					<Button
						type="submit"
						variants="mr-2 px-4 py-2 border border-danger text-danger rounded-lg hover:text-red hover:border-red transition ease-in 5s "
					>
						Cancel
					</Button>
					<Button
						type="submit"
						variants="px-4 py-2 bg-danger rounded-lg text-white hover:bg-red transition ease-in 5s"
						onClick={handleDelete}
					>
						Delete
					</Button>
				</div>
			</ModalProduct>
		</>
	);
};

export default TableProduct;
