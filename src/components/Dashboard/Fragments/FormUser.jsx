import { Link } from 'react-router-dom';
import Button from '../Elements/Button';
import Input from '../Elements/Input';
import Label from '../Elements/Input/Label';
import Select from '../Elements/Select';
import Option from '../Elements/Select/option';
import Textarea from '../Elements/Textarea';
import ModalUser from './ModalUser';

const RoleData = [
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
		name: 'Guest',
	},
];

const FormUser = () => {
	return (
		<>
			<form action="" method="">
				<div className="w-2/4 rounded-md shadow-md m-auto">
					<div className="flex items-center gap-2 pt-2">
						<div className="w-full px-3">
							<Label variants="font-semibold" htmlFor="name">
								Name
							</Label>
							<div className="pt-2">
								<Input
									variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-7"
									type="text"
									name="name"
									placeholder="Insert Name"
								/>
							</div>
						</div>
						<div className="w-full px-3">
							<Label variants="font-semibold" htmlFor="username">
								Username
							</Label>
							<div className="pt-2">
								<Input
									variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-7"
									type="text"
									name="username"
									placeholder="Insert Username"
								/>
							</div>
						</div>
					</div>
					<div className="pt-3 px-3">
						<Label variants="font-semibold" htmlFor="password">
							Password
						</Label>
					</div>
					<div className="pt-2 px-3">
						<Input
							variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
							type="password"
							name="password"
							placeholder="********"
						/>
					</div>
					<div className="pt-3 px-3">
						<Label variants="font-semibold" htmlFor="role">
							Role
						</Label>
					</div>
					<div className="pt-2 px-3">
						<Select
							variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
							name="role"
							title="Role"
						>
							<Option value="role" title="Choose Role" />
							{RoleData.map((item) => (
								<Option
									key={item}
									value={item.id}
									title={item.name}
								/>
							))}
						</Select>
					</div>
					<div className="pt-3 px-3">
						<Label variants="font-semibold" htmlFor="phonenumber">
							Phone Number
						</Label>
					</div>
					<div className="pt-2 px-3">
						<Input
							type="number"
							name="phonenumber"
							variants="w-full rounded-lg border border-primary px-3 py-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						/>
					</div>
					<div className="pt-3 px-3">
						<Label variants="font-semibold" htmlFor="address">
							Address
						</Label>
					</div>
					<div className="pt-3 px-3">
						<Textarea
							variants="resize-none border border-primary rounded-lg w-full"
							name="address"
							cols="66"
							rows="10"
						/>
					</div>
					<div className="py-3 flex justify-end">
						<div className="px-2">
							<Link to="/Dashboard/User">
								<Button
									type="submit"
									variants="py-2 px-5 rounded-lg bg-secondary text-white"
								>
									Cancel
								</Button>
							</Link>
						</div>
						<div className="px-2">
							<Button
								type="button"
								variants="py-2 px-5 rounded-lg bg-danger text-white"
								onClick={() =>
									document
										.getElementById('delete')
										.showModal()
								}
							>
								Delete
							</Button>
							<ModalUser></ModalUser>
						</div>
						<div className="px-2">
							<Button
								type="submit"
								variants="py-2 px-5 rounded-lg bg-success text-white"
							>
								Save
							</Button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default FormUser;
