import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../redux/actions/userAction';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PencilIcon from '../../../assets/img/icon/PencilIcon/index';
import TrashIcon from '../../../assets/img/icon/TrashIcon/index';
import Button from '../Elements/Button';
import { Spinner } from 'flowbite-react';
import FormUser from './FormUser';

const TableUser = (props) => {
	const { id } = props;
	const dispatch = useDispatch();
	const [pending, setPending] = useState(true);
	const hideData = true;
	const users = useSelector((state) => state.fetchUsers.users);
	const [modal, setModal] = useState(false);

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
			name: 'Id',
			selector: (row) => row.id,
			sortable: true,
			omit: hideData == true,
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
					{/* <Link> */}
					<Button
						onClick={() => {
							setModal(true);
							document.getElementById(row.id).showModal();
						}}
					>
						<img
							src={PencilIcon}
							className="w-7 pl-2 cursor-pointer transition-all ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:rounded-lg hover:shadow-xl duration-300"
							alt="pencilicon"
						/>
					</Button>

					<FormUser id={row.id} title="Edit User" openModal={modal} />

					<Button onClick={() => handleEditSubCategory(row.no)}>
						<img
							src={TrashIcon}
							className="w-6 pl-2 cursor-pointer transition-all ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:rounded-lg hover:shadow-xl duration-300"
							alt="trashicon"
						/>
					</Button>
					{/* </Link> */}
				</>
			),
		},
	];

	const datas = users.map((user, index) => {
		return {
			no: index + 1,
			id: user.id,
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
