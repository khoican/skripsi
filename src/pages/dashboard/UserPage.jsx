import { PlusIcon } from '@heroicons/react/24/solid';
import Button from '../../components/Dashboard/Elements/Button';
import Header from '../../components/Dashboard/Elements/Header';
import SearchInput from '../../components/Dashboard/Elements/SearchInput';
import { Link } from 'react-router-dom';
import ModalUser from '../../components/Dashboard/Fragments/ModalUser';
import TableUser from '../../components/Dashboard/Fragments/TableUser';

const DashboardUser = () => {
	return (
		<>
			<div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
				<Header title="User" linkPage="User" />
				<div className="flex justify-between mt-5 px-7">
					<div className="my-auto w-2/4">
						<SearchInput name="username" placeholder="User name" />
					</div>

					<div className="flex">
						<Link to="/Dashboard/User/UserDetails">
							<Button
								type="button"
								variants="bg-success rounded-md py-2 px-3 text-white flex hover:bg-primary transition-all ease-in 5s"
							>
								Add User
								<PlusIcon className="w-8 pl-2 mx-auto" />
							</Button>
						</Link>
					</div>
				</div>
				<div className="my-10 px-7">
					<div className="mt-2 w-full bg-white shadow-lg px-2">
						<TableUser />
						<ModalUser id="delete" />
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardUser;
