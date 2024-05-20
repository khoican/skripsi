import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../redux/actions/userAction';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PencilIcon from '../../../assets/img/icon/PencilIcon/index';
import TrashIcon from '../../../assets/img/icon/TrashIcon/index';
import Button from '../Elements/Button';
import { Spinner } from 'flowbite-react';

const TableUser = () => {
	const dispatch = useDispatch();
	const [pending, setPending] = useState(true);
	const users = useSelector((state) => state.fetchUsers.users);

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(fetchUsers());
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
			name: 'Role',
			selector: (row) => row.role,
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
						<Button onClick={() => handleEditSubCategory(row.no)}>
							<img
								src={TrashIcon}
								className="w-6 pl-2 cursor-pointer transition-all ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:rounded-lg hover:shadow-xl duration-300"
								alt="trashicon"
							/>
						</Button>
					</Link>
				</>
			),
		},
	];

	const datas = users.map((user, index) => {
		return {
			no: index + 1,
			name: user.name,
			phonenumber: user.phoneNumber,
			address: user.address,
			role: user.role,
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
				title="User List"
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

export default TableUser;
