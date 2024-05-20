import { useState } from 'react';
import Button from '../Elements/Button';
import Input from '../Elements/Input';
import Label from '../Elements/Input/Label';
import { EyeIcon } from '@heroicons/react/24/outline';

const FormLogin = () => {
	const [type, setType] = useState('password');
	const [icon, setIcon] = useState(<EyeIcon />);

	const show = () => {
		type === 'password' ? setType('text') : setType('password');
		icon === <EyeIcon /> ? setIcon(<EyeIcon />) : setIcon(<EyeIcon />);
	};
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="rounded-lg shadow-lg sm:w-[500px] lg:w-[900px] flex justify-center sm:pr-10 lg:pr-0 pl-10 mx-auto sm:gap-0 lg:gap-10">
				<div>
					<h1 className="font-semibold text-2xl text-primary pb-3 pt-10">
						Login
					</h1>
					<div className="text-sm">
						<p>
							Welcome to Admin Panel E-Catalogue "AS-SAKINAH
							MART",
						</p>
						<p>
							before you can access feature in this page, please
							login first
						</p>
					</div>
					<div className="pt-6">
						<div>
							<Label htmlFor="username" variants="font-semibold">
								Username
							</Label>
						</div>
						<div className="pt-2">
							<Input
								variants="rounded-lg sm:w-[400px] md:w-[400px] lg:w-[370px] ring-1 ring-primary focus:ring-1 focus:outline-none focus:ring-success transition-all ease-in-out 5s py-2"
								type="text"
								name="username"
								placeholder="Your Username"
							/>
						</div>
						<div className="pt-4">
							<Label htmlFor="password" variants="font-semibold">
								Password
							</Label>
						</div>
						<div className="pt-2 flex">
							<Input
								variants="rounded-lg ring-1 w-full ring-primary focus:outline-none focus:ring-1 focus:ring-success transition-all ease-in-out 5s py-2 px-3"
								type={type}
								name="password"
								placeholder="**********"
							/>
							<Button
								type="button"
								variants="relative w-5 right-8 hover:text-success transition-all ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:rounded-lg hover:shadow-xl duration-300"
								onClick={show}
							>
								{icon}
							</Button>
						</div>
					</div>
					<div className="pt-6 grid ">
						<div className="pt-2 text-sm text-right">
							<p>
								Please check your username and password again
								before <br /> continuing the login process
							</p>
						</div>
						<div className="pt-4 pb-4 text-right">
							<Button
								type="submit"
								variants="py-1 px-5 rounded-sm bg-success text-white hover:bg-primary hover:rounded-lg transition-all ease-in 3s"
							>
								Login
							</Button>
						</div>
					</div>
				</div>
				<div className="sm:hidden md:hidden lg:block xl:block">
					<img
						src="/public/images/AuthLogo.png"
						className="h-full rounded-r-lg"
						alt="AuthLogo"
					/>
				</div>
			</div>
		</div>
	);
};

export default FormLogin;
