import { useState } from 'react';
import Button from '../../components/user/elements/button/Index';
import Input from '../../components/user/elements/input/Index';
import Alert from '../../components/user/elements/alert/Index';
import { updateUserProfile } from '../../../helper/updateUserProfile';
import { decryptData } from '../../../helper/cryptoData';

const ChangePasswordPage = () => {
	const user = decryptData('user');
	const [input, setInput] = useState('');
	const [status, setStatus] = useState('');

	const handleInput = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async () => {
		if (input.newPassword === input.confirmPassword) {
			const response = await updateUserProfile(user.id, {
				oldPassword: input.oldPassword,
				newPassword: input.newPassword,
			});

			if (response.status === 'success') {
				setStatus({
					status: 'success',
					message: 'Password anda berhasil diperbarui',
				});
			} else {
				setStatus({
					status: 'error',
					message: 'Ganti password gagal',
				});
			}
		} else {
			setStatus({
				status: 'error',
				message: 'Konfirmasi password tidak sesuai',
			});
		}
	};

	return (
		<>
			{status && (
				<Alert
					message={status.message}
					onSuccess={status.status}
					success="success"
					onClick={() => setStatus('')}
				/>
			)}
			<div className="pe-5">
				<h1 className="font-semibold text-xl">Ganti Password</h1>
				<p className="text-sm mt-2">
					Perbarui kata sandi anda secara berkala agar akun anda lebih
					aman
				</p>

				<div className="mt-5 flex flex-col gap-3">
					<Input
						text={'Password Lama'}
						id={'oldPassword'}
						name={'oldPassword'}
						password={true}
						onChange={handleInput}
					/>
					<Input
						text={'Password Baru'}
						id={'newPassword'}
						name={'newPassword'}
						password={true}
						note={'Password minimal memiliki panjang 8 karakter'}
						onChange={handleInput}
					/>
					<Input
						text={'Konfirmasi Password'}
						id={'confirmPassword'}
						name={'confirmPassword'}
						password={true}
						note={'Ketikkan kembali password baru anda'}
						onChange={handleInput}
					/>
				</div>

				<div className="mt-4 w-full flex justify-end">
					<div className="">
						<p className="text-sm text-end">
							Pastikan anda dapat mengingat dengan mudah kata
							sandi baru anda
						</p>
						<div className="flex justify-end">
							<Button
								style={
									'text-white bg-success hover:bg-primary mt-2 text-sm'
								}
								text={'Simpan'}
								onClick={handleSubmit}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChangePasswordPage;
