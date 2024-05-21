import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../redux/actions/orderAction';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PencilIcon from '../../../assets/img/icon/PencilIcon/index';
import Button from '../Elements/Button';
import { Spinner } from 'flowbite-react';

const TableOrder = () => {
	const dispatch = useDispatch();
	const [pending, setPending] = useState(true);
	const orders = useSelector((state) => state.fetchOrders.orders);

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(fetchOrders());
			setPending(false);
		}, 1500);
		return () => clearTimeout(timeout);
	}, [dispatch]);

	const columns = [
		{
			name: 'No',
			selector: (row) => row.no,
			sortable: true,
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
					<Link>
						<Button onClick={() => handleEditSubCategory(row.no)}>
							<img
								src={PencilIcon}
								className="w-7 pl-2 cursor-pointer transition-all ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:rounded-lg hover:shadow-xl duration-300"
								alt="pencilicon"
							/>
						</Button>
					</Link>
				</>
			),
		},
	];

	const datas = orders.map((order, index) => {
		return {
			no: index + 1,
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
		</>
	);
};

export default TableOrder;
