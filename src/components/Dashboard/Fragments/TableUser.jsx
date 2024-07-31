import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../redux/actions/userAction';
import { useEffect, useState } from 'react';
import PencilIcon from '../../../assets/img/icon/PencilIcon/index';
import TrashIcon from '../../../assets/img/icon/TrashIcon/index';
import Button from '../Elements/Button';
import { Spinner } from 'flowbite-react';
import { deleteUser, getUserById, editUser } from '../../../../services/user';
import ModalUser from './ModalUser';
import Input from '../Elements/Input';
import { EyeIcon } from '@heroicons/react/24/outline';
import Textarea from '../Elements/Textarea';

const TableUser = () => {
	const dispatch = useDispatch();
	const [pending, setPending] = useState(true);
	const [getDeleteId, setGetDeleteId] = useState();
	const [getEditId, setGetEditId] = useState();
	const [type, setType] = useState('password');
	const [icon, setIcon] = useState(<EyeIcon />);
	const hideData = true;
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const users = useSelector((state) => state.fetchUsers.users);
	const [editUserData, setEditUserData] = useState({
		name: '',
		username: '',
		password: '',
		phoneNumber: '',
		address: '',
		role: '',
	});

	const getUserDetail = async () => {
		const data = await getUserById();
		return data;
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(fetchUsers());
			setPending(false);
		}, 1500);

		if (getEditId !== undefined) {
			getUserDetail().then((data) => {
				console.log(data);
				setEditUserData({
					name: data.name,
					username: data.username,
					password: data.password,
					phoneNumber: data.phoneNumber,
					address: data.address,
					role: data.role,
				});
			});
		}
		return () => clearTimeout(timeout);
	}, [dispatch, getEditId]);

	const show = () => {
		type === 'password' ? setType('text') : setType('password');
		icon === <EyeIcon /> ? setIcon(<EyeIcon />) : setIcon(<EyeIcon />);
	};

	const handleOpenEditModal = async (id) => {
		setGetEditId(id);
		const userData = await getUserById(id);
		setEditUserData({ ...userData });
		document.getElementById('edit').showModal();
		setIsEditModalOpen(true);
	};

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
					<Button
						onClick={() => {
							console.log(getEditId);
							handleOpenEditModal(row.id);
						}}
					>
						<img
							src={PencilIcon}
							className="w-7 pl-2 cursor-pointer transition-all ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:rounded-lg hover:shadow-xl duration-300"
							alt="pencilicon"
						/>
					</Button>

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

	const handleEdit = () => {
		const userData = {
			name: editUserData.name,
			username: editUserData.username,
			password: editUserData.password,
			phoneNumber: editUserData.phoneNumber,
			address: editUserData.address,
			role: editUserData.role,
		};
		editUser(getEditId, userData).then(() => {
			window.location.reload();
		});
	};

	const handleDelete = () => {
		deleteUser(getDeleteId).then(() => {
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

			<ModalUser
				title="Edit User"
				id={'edit'}
				open={isEditModalOpen}
				onClose={() => setIsEditModalOpen(false)}
			>
				<div className="flex items-center justify-center pt-2 pb-2 gap-5">
					<Input
						variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
						type="text"
						name="name"
						placeholder="Insert Name"
						value={editUserData.name}
						onChange={(e) =>
							setEditUserData({
								...editUserData,
								name: e.target.value,
							})
						}
					/>
					<Input
						variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
						type="text"
						name="username"
						placeholder="Insert Username"
						value={editUserData.username}
						onChange={(e) =>
							setEditUserData({
								...editUserData,
								username: e.target.value,
							})
						}
					/>
				</div>
				<div className="pt-2 pb-2 flex items-center justify-center">
					<div className="flex">
						<Input
							variants="rounded-lg ring-1 w-full border-0 ring-primary focus:outline-none focus:ring-1 focus:ring-success transition-all ease-in-out 5s py-2 px-3"
							type={type}
							name="password"
							placeholder="Insert Password"
							onChange={(e) =>
								setEditUserData({
									...editUserData,
									password: e.target.value,
								})
							}
						/>
						<Button
							type="button"
							variants="relative w-5 right-8 hover:text-success transition-all ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:rounded-lg hover:shadow-xl duration-300"
							onClick={show}
						>
							{icon}
						</Button>
					</div>
					<Input
						variants="rounded-lg ring-1 border-0 w-[205px] ring-primary focus:outline-none focus:ring-1 focus:ring-success transition-all ease-in-out 5s py-2 px-3"
						type="number"
						name="phoneNumber"
						placeholder="Insert Phone Number"
						value={editUserData.phoneNumber}
						onChange={(e) =>
							setEditUserData({
								...editUserData,
								phoneNumber: e.target.value,
							})
						}
					/>
				</div>
				{/* <div className="pt-2 pb-2 flex items-center justify-center">
					<Select
						variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
						name="role"
						title="Role"
						value={editUserData.role}
					>
						<Option value="Choose Role" title="Choose Role" />
						<Option value="ADMIN" title="ADMIN" />
						<Option value="USER" title="USER" />
					</Select>+213122
				</div> */}
				<div className="pt-2 pb-2 flex items-center justify-center">
					<Textarea
						name="address"
						rows="4"
						cols="50"
						variants="rounded-lg ring-1 border-0 ring-primary focus:outline-none focus:ring-1 focus:ring-success transition-all ease-in-out 5s"
						placeholder="Insert Address"
						value={editUserData.address}
						onChange={(e) =>
							setEditUserData({
								...editUserData,
								address: e.target.value,
							})
						}
					/>
				</div>
				<div className="flex items-center justify-end gap-2 pt-4">
					<Button variants="py-2 px-5 rounded-lg outline outline-1 outline-danger text-danger transition-all ease-in 3s hover:bg-red hover:outline-none hover:text-white btn">
						Cancel
					</Button>
					<Button
						type="submit"
						variants="py-2 px-6 rounded-lg bg-success text-white hover:bg-primary transition-all ease-in 3s"
						onClick={handleEdit}
					>
						Submit
					</Button>
				</div>
			</ModalUser>

			<ModalUser id={'delete'} title="Delete User">
				<p>Are you sure you want to delete this user?</p>
				<div className="flex pt-4 justify-end pb-4">
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
			</ModalUser>
		</>
	);
};

export default TableUser;
