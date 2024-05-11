import { useState } from 'react';
import Button from '../../../components/user/elements/button/Index';
import Input from '../../../components/user/elements/input/Index';
import logo from '/logo.png';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { postLogin } from '../../../../helper/postLogin';

const LoginPage = () => {
	const [inputLogin, setInputLogin] = useState({
		username: '',
		password: '',
	});
	const [status, setStatus] = useState('');

	const handleLogin = (e) => {
		setInputLogin({
			...inputLogin,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmitLogin = async () => {
		localStorage.removeItem('user');
		const login = await postLogin(inputLogin.username, inputLogin.password);

		if (login.status !== 'success') {
			setStatus(login.message);
		} else {
			window.location.href = '/';
		}
	};

	return (
		<main className="h-screen max-w-screen-2xl mx-auto flex">
			<div className="w-5/12 h-full flex justify-center items-center">
				<div className="mx-14">
					<h1 className="text-3xl font-semibold">Login</h1>

					{status && (
						<p className="text-sm bg-danger text-white p-5 rounded-md mt-5">
							{status}
						</p>
					)}

					<div className="mt-8 flex flex-col gap-4 w-full">
						<Input
							text={'Username'}
							id={'username'}
							name={'username'}
							onChange={handleLogin}
						/>
						<Input
							text={'Password'}
							id={'password'}
							password={true}
							name={'password'}
							onChange={handleLogin}
						/>

						<p className="text-sm">
							Pastikan isi username dan password dengan benar
						</p>

						<div className="flex justify-start">
							<Button
								text={'Login'}
								style={'bg-success text-white hover:bg-primary'}
								icon={faRightToBracket}
								onClick={handleSubmitLogin}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="w-7/12 h-full flex items-center justify-center">
				<div className="w-full flex flex-col items-center">
					<img src={logo} alt="" className="w-3/12" />

					<div className="mt-5 text-center">
						<h1 className="text-3xl font-bold">AS-SAKINAH MART</h1>
						<h2 className="text-lg font-semibold uppercase tracking-widest">
							Kopwan &#96;Aisiyah Jember
						</h2>
					</div>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
