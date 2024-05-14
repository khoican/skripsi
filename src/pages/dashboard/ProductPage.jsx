import { PlusIcon } from '@heroicons/react/24/solid';
import TrashIcon from '../../assets/img/icon/TrashIcon';
import PencilIcon from '../../assets/img/icon/PencilIcon';
import Header from '../../components/Dashboard/Elements/Header';
import Button from '../../components/Dashboard/Elements/Button';
import SearchInput from '../../components/Dashboard/Elements/SearchInput';
import Table from '../../components/Dashboard/Elements/Table';
import { Link } from 'react-router-dom';
import ModalProduct from '../../components/Dashboard/Fragments/ModalProduct';

const columns = [
	{
		name: 'Product',
		selector: (row) => row.product,
		sortable: true,
	},
	{
		name: 'Price',
		selector: (row) => row.price,
		sortable: true,
	},
	{
		name: 'Sold',
		selector: (row) => row.sold,
		sortable: true,
	},
	{
		name: 'Stock',
		selector: (row) => row.stock,
		sortable: true,
	},
	{
		name: 'Actions',
		cell: () => (
			<>
				<Link to={'/Dashboard/Product/ProductDetails'}>
					<Button type="button" variants="focus:outline-none">
						<img
							src={PencilIcon}
							className="w-7 pl-2"
							alt="pencilicon"
						/>
					</Button>
				</Link>
				<Button
					type="button"
					variants="focus:outline-none"
					onClick={() =>
						document.getElementById('delete').showModal()
					}
				>
					<img src={TrashIcon} className="w-6 pl-2" alt="trashicon" />
				</Button>
			</>
		),
	},
];

const data = [
	{
		id: 1,
		product: 'Product 1',
		price: 'Rp. 100.000,-',
		sold: '1',
		stock: '11',
	},
	{
		id: 2,
		product: 'Product 2',
		price: 'Rp. 200.000,-',
		sold: '2',
		stock: '15',
	},
	{
		id: 3,
		product: 'Product 3',
		price: 'Rp. 300.000,-',
		sold: '3',
		stock: '22',
	},
	{
		id: 4,
		product: 'Product 4',
		price: 'Rp. 400.000,-',
		sold: '4',
		stock: '20',
	},
	{
		id: 5,
		product: 'Product 5',
		price: 'Rp. 500.000,-',
		sold: '5',
		stock: '10',
	},
	{
		id: 6,
		product: 'Product 6',
		price: 'Rp. 600.000,-',
		sold: '6',
		stock: '12',
	},
	{
		id: 7,
		product: 'Product 7',
		price: 'Rp. 700.000,-',
		sold: '7',
		stock: '17',
	},
	{
		id: 8,
		product: 'Product 8',
		price: 'Rp. 800.000,-',
		sold: '8',
		stock: '18',
	},
];

function DashboardProduct() {
	return (
		<>
			<div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
				<Header title="Product" linkPage="Product" />
				<div className="flex justify-between mt-5 px-7">
					<div className="my-auto w-2/4">
						<SearchInput
							name="productname"
							placeholder="Product Name"
						/>
					</div>

					<div className="flex">
						<Link to={'/Dashboard/Product/ProductDetails'}>
							<Button
								type="button"
								variants="flex bg-success rounded-md py-2 px-3 text-white"
							>
								Add Product
								<PlusIcon className="w-8 pl-2 mx-auto" />
							</Button>
						</Link>
					</div>
				</div>
				<div className="my-10 px-7">
					<div className="mt-2 w-full bg-white shadow-lg px-2">
						<Table data={data} columns={columns} />
						<ModalProduct id="delete" />
					</div>
				</div>
			</div>
		</>
	);
}

export default DashboardProduct;
