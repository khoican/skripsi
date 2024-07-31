import ReactFlagsSelect from 'react-flags-select';
import Input from '../../components/user/elements/input/Index';
import PhoneInput from 'react-phone-number-input/input';
import { useState } from 'react';
import Button from '../../components/user/elements/button/Index';
import { updateUserProfile } from '../../../helper/updateUserProfile';
import Alert from '../../components/user/elements/alert/Index';
import { decryptData } from '../../../helper/cryptoData';

const EditProfilePage = () => {
	const user = decryptData('user');
	const [phone, setPhone] = useState(user.phoneNumber);
	const [country, setCountry] = useState('ID');
	const [input, setInput] = useState({
		name: user.name,
		address: user.address,
	});

	const [status, setStatus] = useState('');

	const handleInput = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const data = {
		name: input.name,
		phoneNumber: phone,
		address: input.address,
	};

	const handleSubmit = async () => {
		const response = await updateUserProfile(user.id, data);

		setStatus(response);
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
				<h1 className="font-semibold text-lg md:text-xl">
					Edit Profile
				</h1>
				<p className=" text-xs md:text-sm mt-1 md:mt-2">
					Perbarui informasi pribadi anda untuk meningkatkan
					pengalaman berbelanja
				</p>

				<div className="mt-5">
					<Input
						text={'Nama Lengkap'}
						id={'name'}
						name={'name'}
						onChange={handleInput}
						value={input.name}
					/>

					<div className="mt-4">
						<label
							className=" text-xs md:text-sm font-semibold"
							htmlFor="phone"
						>
							Nomor Telepon
						</label>
						<div className="flex border border-primary rounded-md items-center overflow-hidden mt-2">
							<ReactFlagsSelect
								selected={country}
								onSelect={(code) => setCountry(code)}
								showSelectedLabel={false}
								showOptionLabel={false}
								selectedSize={15}
								className="pb-0 !important"
							/>
							<PhoneInput
								value={phone}
								onChange={setPhone}
								defaultCountry={country}
								id="phone"
								className="w-full border border-l-primary border-y-0 border-r-0 text-xs md:text-sm"
							/>
						</div>
					</div>
					<div className="mt-4">
						<label
							className=" text-xs md:text-sm font-semibold"
							htmlFor="address"
						>
							Alamat Lengkap
						</label>

						<textarea
							name="address"
							id="address"
							rows={3}
							value={input.address}
							onChange={handleInput}
							className="form-input w-full border border-primary rounded-md focus:border-primary mt-2 resize-none text-xs md:text-sm"
						></textarea>
					</div>

					<div className="mt-4 w-full flex justify-end">
						<div className="">
							<p className="text-xs md:text-sm text-end">
								Pastikan kembali data pribadi anda sesuai untuk
								menghindari kesalahan
							</p>
							<div className="flex justify-end">
								<Button
									style={
										'text-white bg-success hover:bg-primary mt-2 text-sm  text-xs md:text-sm'
									}
									text={'Simpan'}
									onClick={handleSubmit}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditProfilePage;
