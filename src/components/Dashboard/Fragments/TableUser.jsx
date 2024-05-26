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
import ModalOrder from './ModalOrder';
import { deleteUser } from '../../../../services/user';

const TableUser = (props) => {
	const { id } = props;
	const dispatch = useDispatch();
	const [pending, setPending] = useState(true);
	const [getDeleteId, setGetDeleteId] = useState();
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

	const handleDelete = () => {
		deleteUser(getDeleteId).then((res) => {
			window.location.reload();
		});
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

export default TableUser;
