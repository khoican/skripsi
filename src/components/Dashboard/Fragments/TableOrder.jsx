import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../redux/actions/orderAction';
import { deleteOrder } from '../../../../services/order';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PencilIcon from '../../../assets/img/icon/PencilIcon/index';
import TrashIcon from '../../../assets/img/icon/TrashIcon/index';
import Button from '../Elements/Button';
import { Spinner } from 'flowbite-react';
import ModalOrder from './ModalOrder';

const TableOrder = () => {
	const dispatch = useDispatch();
	const [pending, setPending] = useState(true);
	const [getDeleteId, setGetDeleteId] = useState();
	const orders = useSelector((state) => state.fetchOrders.orders);

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(fetchOrders());
			setPending(false);
		}, 500);
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
			name: 'ID',
			selector: (row) => row.id,
			omit: true,
		},
		{
			name: 'Invoice',
			selector: (row) => row.invoice,
			sortable: true,
		},
		{
			name: 'Name',
			selector: (row) => row.name,
			sortable: true,
		},
		{
			name: 'Phone Number',
			selector: (row) => row.phonenumber,
			sortable: true,
		},
		{
			name: 'Address',
			selector: (row) => row.address,
			sortable: true,
		},
		{
			name: 'Status',
			selector: (row) => row.status,
			sortable: true,
		},
		{
			name: 'Action',
			cell: (row) => (
				<>
					<Link to={`/dashboard/order/orderdetails/${row.id}`}>
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

	const datas = orders.map((order, index) => {
		return {
			no: index + 1,
			id: order.id,
			invoice: order.invoice,
			name: order.name,
			phonenumber: order.phoneNumber,
			address: order.address,
			status: order.status,
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
		deleteOrder(getDeleteId).then((res) => {
			window.location.reload();
		});
	};

	return (
		<>
			<DataTable
				title="Order List"
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

			<ModalOrder id={'delete'}>
				<div className="flex mt-2 justify-end pb-4">
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
			</ModalOrder>
		</>
	);
};

export default TableOrder;
