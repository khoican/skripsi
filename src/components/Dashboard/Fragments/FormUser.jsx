import Button from '../Elements/Button';
import Input from '../Elements/Input';
import Textarea from '../Elements/Textarea';
import ModalUser from './ModalUser';
import {
	createNewUser,
	fetchUserById,
} from '../../../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { EyeIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FormUser = (props) => {
	const { title, id, openModal } = props;
	const dispatch = useDispatch();
	const [type, setType] = useState('password');
	const [icon, setIcon] = useState(<EyeIcon />);
	let userId = '';
	const checkId = id !== 'add';

	if (openModal && checkId) {
		userId = useSelector((state) => state.fetchUserById.users);

		useEffect(() => {
			dispatch(fetchUserById(id));
		}, [dispatch]);
	}
	console.log(userId);

	const [createUser, setCreateUser] = useState({
		name: '',
		username: '',
		password: '',
		phoneNumber: '',
		address: '',
	});

	const show = () => {
		type === 'password' ? setType('text') : setType('password');
		icon === <EyeIcon /> ? setIcon(<EyeIcon />) : setIcon(<EyeIcon />);
	};

	const handleChange = (e) => {
		setCreateUser({ ...createUser, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		dispatch(createNewUser(createUser));
	};

	return (
		<>
			<ModalUser title={title} id={id}>
				<div className="flex items-center justify-center pt-2 pb-2 gap-2">
					<Input
						variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
						type="text"
						name="name"
						placeholder="Insert Name"
						onChange={handleChange}
						value={userId.name}
					/>
					<Input
						variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
						type="text"
						name="username"
						placeholder="Insert Username"
						onChange={handleChange}
					/>
				</div>
				<div className="pt-2 pb-2 flex items-center justify-center">
					<Input
						variants="rounded-lg ring-1 border-0 w-[500px] ring-primary focus:outline-none focus:ring-1 focus:ring-success transition-all ease-in-out 5s py-2 px-3"
						type={type}
						name="password"
						placeholder="Insert Password"
						onChange={handleChange}
					/>
					<Button
						type="button"
						variants="relative w-5 right-8 hover:text-success transition-all ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:rounded-lg hover:shadow-xl duration-300"
						onClick={show}
					>
						{icon}
					</Button>
					<Input
						variants="rounded-lg ring-1 border-0 w-[500px] ring-primary focus:outline-none focus:ring-1 focus:ring-success transition-all ease-in-out 5s py-2 px-3"
						type="number"
						name="phoneNumber"
						placeholder="Insert Phone Number"
						onChange={handleChange}
					/>
				</div>
				<div className="pt-2 pb-2 flex items-center justify-center">
					<Textarea
						name="address"
						rows="4"
						cols="50"
						variants="rounded-lg ring-1 border-0 ring-primary focus:outline-none focus:ring-1 focus:ring-success transition-all ease-in-out 5s"
						placeholder="Insert Address"
						onChange={handleChange}
					/>
				</div>
				<div className="flex items-center justify-end gap-2 pt-4">
					<Button variants="py-2 px-5 rounded-lg outline outline-1 outline-danger text-danger transition-all ease-in 3s hover:bg-red hover:outline-none hover:text-white btn">
						Cancel
					</Button>
					<Button
						type="submit"
						variants="py-2 px-6 rounded-lg bg-success text-white hover:bg-primary transition-all ease-in 3s"
						onClick={handleSubmit}
					>
						Submit
					</Button>
				</div>
			</ModalUser>
		</>
	);
};

export default FormUser;
