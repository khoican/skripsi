import { useRef, useState } from 'react';
import Button from '../../../components/user/elements/button/Index';
import Input from '../../../components/user/elements/input/Index';
import logo from '/logo.png';
import { faClose, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { postLogin, postLoginAsGuest } from '../../../../helper/postLogin';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../../../components/user/fragments/loading/Index';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
	const passwordRef = useRef(null);
	const [inputLogin, setInputLogin] = useState({
		username: '',
		password: '',
	});
	const [status, setStatus] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleLogin = (e) => {
		setInputLogin({
			...inputLogin,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeFokus = (e) => {
		if (e.key === 'Enter') {
			passwordRef.current.focus();
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSubmitLogin(e);
		}
	};

	const handleSubmitLogin = async (e) => {
		localStorage.removeItem('user');
		localStorage.removeItem('cart');
		const login = await postLogin(inputLogin.username, inputLogin.password);

		if (login.status !== 'success') {
			setStatus(login.message);
		} else if (login.status === 'success' && login.role === 'ADMIN') {
			e.preventDefault();
			navigate('/dashboard');
		} else {
			e.preventDefault();
			navigate(-1);
		}
	};

	const handleAsGuest = async () => {
		setLoading(true);
		localStorage.removeItem('user');
		localStorage.removeItem('cart');
		const login = await postLoginAsGuest();

		if (login.status !== 'success') {
			setLoading(false);
			setStatus(login.message);
		} else {
			setLoading(false);
			navigate(-1);
		}
	};

	if (loading === true) {
		return <Loading />;
	}

	return (
		<>
			<Helmet>
				<title>Login</title>
			</Helmet>
			<main className="h-screen max-w-screen-2xl mx-auto flex">
				<div className="w-full md:w-5/12 h-full flex flex-col md:flex-row justify-center items-center">
					<div className="w-2/3">
						<h1 className="text-xl md:text-3xl font-semibold">
							Login
						</h1>
						<p className="text-xs md:text-sm mt-2">
							Pastikan anda sudah terdaftar sebagai anggota dari
							As-Sakinah Mart
						</p>

						{status && (
							<p className="text-sm bg-danger flex justify-between items-center text-white p-5 rounded-md mt-5">
								{status}
								<FontAwesomeIcon
									icon={faClose}
									onClick={() => setStatus('')}
								/>
							</p>
						)}

						<div className="mt-8 flex flex-col gap-2 md:gap-4 w-full">
							<Input
								text={'Username'}
								id={'username'}
								name={'username'}
								onChange={handleLogin}
								onKeyDown={handleChangeFokus}
							/>
							<Input
								text={'Password'}
								id={'password'}
								password={true}
								name={'password'}
								onChange={handleLogin}
								onKeyDown={handleKeyPress}
								refer={passwordRef}
							/>
							<div>
								<input
									id="remember"
									type="checkbox"
									className="appearance-none indeterminate:bg-gray-300 checked:bg-primary w-3 h-3 md:w-5 md:h-5"
								/>{' '}
								<label
									htmlFor="remember"
									className="text-xs md:text-base ms-1"
								>
									Remember me
								</label>
							</div>
							<div className="flex flex-col gap-3 mt-3">
								<Button
									text={'Login'}
									style={
										'bg-primary text-white hover:bg-primary w-full rounded-none tracking-wide'
									}
									onClick={handleSubmitLogin}
								/>
							</div>
							<div className="flex items-center justify-center text-xs md:text-base">
								<div className="w-full border-t border-gray-300"></div>
								<span className="text-gray-500 mx-2">atau</span>
								<div className="w-full border-t border-gray-300"></div>
							</div>
							<div>
								<Button
									text={'masuk sebagai tamu'}
									bold={'font-normal'}
									style={
										'border border-primary text-primary hover:text-white hover:bg-primary w-full rounded-none tracking-wide'
									}
									onClick={handleAsGuest}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="w-7/12 h-full hidden md:flex items-center justify-center">
					<div className="w-full flex flex-col items-center">
						<img src={logo} alt="" className="w-3/12" />

						<div className="mt-5 text-center">
							<h1 className="text-3xl font-bold">
								AS-SAKINAH MART
							</h1>
							<h2 className="text-lg font-semibold uppercase tracking-widest">
								Kopwan &#96;Aisiyah Jember
							</h2>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default LoginPage;
