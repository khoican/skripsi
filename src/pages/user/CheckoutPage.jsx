import PhoneInput from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';
import Input from '../../components/user/elements/input/Index';
import { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Button from '../../components/user/elements/button/Index';
import { faStore, faTruckFast } from '@fortawesome/free-solid-svg-icons';

const CheckoutPage = () => {
	const [phone, setPhone] = useState();
	const [country, setCountry] = useState('ID');
	const [openAddress, setOpenAddress] = useState(false);

	const handleOpenAddress = () => {
		setOpenAddress(true);
	};
	const handleCloseAddress = () => {
		setOpenAddress(false);
	};

	return (
		<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-20 gap-5 mt-5">
			<div className="mb-10">
				<h1 className="font-semibold text-2xl">Formulir Pemesanan</h1>
				<p>
					Isi formulir pemesanan dibawah ini dengan benar guna
					meminimalisir kesalahan
				</p>
			</div>

			<div className="flex justify-between">
				<div className="w-6/12 flex flex-col gap-6">
					<Input text={'Nama Lengkap'} id={'email'} />

					<div>
						<label
							className="text-md font-semibold"
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
								className="w-full border border-l-primary border-y-0 border-r-0"
							/>
						</div>
						<p className="text-xs">
							{' '}
							<span className="text-red-600 font-bold mr-1">
								*
							</span>
							Disarankan menggunakan nomor whatsapp aktif
						</p>
					</div>

					<div>
						<p className="text-md font-semibold">
							Metode Pengiriman
						</p>
						<div className="flex gap-3">
							<Button
								text={'Antar Sesuai Alamat'}
								style={
									'border border-primary text-primary hover:bg-primary hover:text-white mt-2'
								}
								icon={faTruckFast}
								onClick={handleOpenAddress}
								active={openAddress ? true : false}
							/>
							<Button
								text={'Ambil di Toko'}
								style={
									'border border-primary text-primary hover:bg-primary hover:text-white mt-2'
								}
								icon={faStore}
								onClick={handleCloseAddress}
								active={!openAddress ? true : false}
							/>
						</div>

						{openAddress === true && (
							<div className="mt-4">
								<label
									className="text-md font-semibold"
									htmlFor="address"
								>
									Alamat Lengkap
								</label>

								<textarea
									name="address"
									id="address"
									rows={5}
									className="form-input w-full border border-primary rounded-md focus:border-primary mt-2 resize-none"
								></textarea>
								<p className="text-xs">
									{' '}
									<span className="text-red-600 font-bold mr-1">
										*
									</span>
									Mohon isi dengan alamat lengkap anda (Nomor
									Rumah, Jalan, Kode Pos, dll)
								</p>
							</div>
						)}
					</div>

					<Input
						text={'Catatan'}
						id={'note'}
						note={'Catatan tambahan untuk penjual'}
					/>
				</div>

				<div className="w-5/12">
					<h2 className="text-lg font-semibold">Daftar Produk</h2>

					<table className="w-full mt-3">
						<thead className="border-b border-collapse border-black">
							<tr className="text-center">
								<th className="w-1/12 pb-2">No</th>
								<th className="w-5/12 pb-2">Nama produk</th>
								<th className="w-2/12 pb-2">Qty</th>
								<th className="w-4/12 pb-2">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-center border-collapse border-b border-gray-400">
								<th className="py-2">1</th>
								<td className="py-2 pl-5 text-start">
									Produk 1
								</td>
								<td className="py-2">1</td>
								<td className="py-2">Rp. 100.000</td>
							</tr>
							<tr className="text-center border-collapse border-b border-gray-400">
								<th className="py-2">1</th>
								<td className="py-2 pl-5 text-start">
									Produk 1
								</td>
								<td className="py-2">1</td>
								<td className="py-2">Rp. 100.000</td>
							</tr>
							<tr className="text-danger">
								<td
									colSpan={3}
									className="text-end font-semibold uppercase"
								>
									Total Bayar
								</td>
								<td className="py-2 text-center">
									Rp. 100.000
								</td>
							</tr>
						</tbody>
					</table>

					<p className="text-xs font-light mt-5 ms-20 text-justify">
						Pastikan semua data sudah benar sebelum melanjutkan
						pesanan. Jika data sudah benar, silahkan klik tombol
						dibawah untuk memesan produk
					</p>

					<div className="flex justify-end">
						<Button
							text={'Pesan'}
							style={
								'bg-success text-white hover:bg-primary mt-5'
							}
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default CheckoutPage;
