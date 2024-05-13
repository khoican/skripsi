import { Link } from 'react-router-dom';
import Header from '../../components/Dashboard/Elements/Header';
import SearchInput from '../../components/Dashboard/Elements/SearchInput';
import Button from '../../components/Dashboard/Elements/Button';
import { PlusIcon, UserIcon } from '@heroicons/react/24/solid';
import TrashIcon from '../../assets/img/icon/TrashIcon';
import PencilIcon from '../../assets/img/icon/PencilIcon';
import ModalRole from '../../components/Dashboard/Fragments/ModalRole';
import Input from '../../components/Dashboard/Elements/Input';

const DataRole = [
	{
		id: 1,
		name: 'Admin',
	},
	{
		id: 2,
		name: 'Member',
	},
	{
		id: 3,
		name: 'User',
	},
];

const DashboardRolePage = () => {
	return (
		<>
			<div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
				<Header title="Role" linkPage="Role" />
				<div className="flex justify-between mt-5 px-7">
					<div className="my-auto w-2/4">
						<SearchInput
							name="searchrole"
							htmlFor="searchrole"
							id="searchrole"
							placeholder="Role"
						/>
					</div>
					<Button
						type="button"
						variants="bg-success rounded-md py-2 px-3 text-white flex"
						onClick={() =>
							document.getElementById('add').showModal()
						}
					>
						Add Role
						<PlusIcon className="w-8 pl-2 mx-auto" />
					</Button>
					<ModalRole
						variants="bg-success"
						id="add"
						title="Add Role"
						btn="Save"
					>
						<Input
							variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
							type="text"
							name="name"
							placeholder="Insert Role Name"
						/>
					</ModalRole>
				</div>
				<div className="my-10 px-7">
					<div className="ps-10 pe-4 text-slate-700 cursor-pointer ">
						{DataRole.map((item) => (
							<div
								key={item}
								className="px-2.5 py-2.5 border-b border-b-slate-300 "
							>
								<div className="py-2.5 px-2.5 w-full border rounded-lg hover:bg-success transition-all 3s ease-in shadow-lg flex items-center justify-between">
									<Link className="flex items-center gap-2.5">
										<UserIcon className="w-5 h-5" />
										<p>{item.name}</p>
									</Link>

									<div className="flex gap-2">
										<Button
											type="button"
											variants="focus:outline-none"
											onClick={() =>
												document
													.getElementById('edit')
													.showModal()
											}
										>
											<img
												src={PencilIcon}
												className="w-7 pl-2 focus:outline-none"
												alt="pencilicon"
											/>
										</Button>
										<ModalRole
											id="edit"
											title="Edit Role"
											btn="Save"
											variants="bg-success"
										>
											<Input
												type="text"
												name="subcategory"
												placeholder="Insert a Role"
												variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
											/>
										</ModalRole>
										<Button
											type="button"
											variants="focus:outline-none"
											onClick={() =>
												document
													.getElementById('delete')
													.showModal()
											}
										>
											<img
												src={TrashIcon}
												className="w-6 pl-2"
												alt="trashicon"
											/>
										</Button>
										<ModalRole
											id="delete"
											title="Alert!"
											btn="Delete"
											variants="bg-light-red hover:bg-red-700 transition ease-in-out 5s"
										>
											<p className="flex text-black">
												Are you sure you want to delete
												this
												<p className="font-semibold pl-1">
													"Role ?"
												</p>
											</p>
										</ModalRole>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardRolePage;
