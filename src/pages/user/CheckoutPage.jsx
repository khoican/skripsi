import PhoneInput from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';
import Input from '../../components/user/elements/input/Index';
import { useEffect, useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Button from '../../components/user/elements/button/Index';
import { faStore, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { NumericFormat } from 'react-number-format';
import { postOrder } from '../../../helper/postOrder';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/user/fragments/modal/Index';
import { getCartByUserId } from '../../../services/cartProduct';
import { decryptData } from '../../../helper/cryptoData';
import LoadingScreen from '../../components/user/fragments/LoadingScreen/Index';

const CheckoutPage = () => {
	const user = decryptData('user');
	const navigate = useNavigate();
	const [phone, setPhone] = useState(user.phoneNumber);
	const [country, setCountry] = useState('ID');
	const [openAddress, setOpenAddress] = useState(false);
	const [carts, setCarts] = useState();
	const [openModal, setOpenModal] = useState(false);
	const [orderInput, setOrderInput] = useState({
		name: user.name,
		address: user.address,
		notes: '',
	});
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchCart = async () => {
			try {
				const response = await getCartByUserId(user.id);
				setCarts(response);
			} catch (error) {
				console.error('Failed to fetch cart:', error);
			}
		};

		fetchCart();
	}, [user.id]);

	useEffect(() => {
		let totalPrice = 0;
		carts &&
			carts.forEach((item) => {
				totalPrice += item.product.price * item.quantity;
			});
		setTotal(totalPrice);
	}, [carts]);

	const input = (e) => {
		setOrderInput({
			...orderInput,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async () => {
		const data = {
			name: orderInput.name,
			address: openAddress ? orderInput.address : 'Ambil di toko',
			phoneNumber: phone,
			notes: orderInput.notes,
			totalPrice: total,
		};

		setLoading(true);

		try {
			const response = await postOrder(data);
			navigate(`/invoice/${response.id}`);
		} catch (error) {
			console.error('Failed to submit order:', error);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return <LoadingScreen />;
	}

	return (
		<>
			{openModal && (
				<Modal
					title={'Konfirmasi Pesanan'}
					onClose={() => setOpenModal(false)}
					onSave={handleSubmit}
				>
					<p className="text-xs md:text-sm">
						Klik lanjutkan jika semua data pemesanan sudah benar
					</p>
				</Modal>
			)}

			<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-5 md:px-20 gap-5 md:mt-5">
				<div className="mb-10">
					<h1 className="font-semibold text-xl md:text-2xl">
						Formulir Pemesanan
					</h1>
					<p className="text-xs md:text-base">
						Isi formulir pemesanan dibawah ini dengan benar guna
						meminimalisir kesalahan
					</p>
				</div>

				<div className="flex flex-col md:flex-row justify-between">
					<div className="w-full md:w-6/12 flex flex-col gap-3 md:gap-6">
						<Input
							text={'Nama Lengkap'}
							id={'email'}
							name={'name'}
							onChange={input}
							value={orderInput.name}
						/>

						<div>
							<label
								className="text-xs md:text-sm font-semibold"
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
									className="w-full border border-l-primary border-y-0 border-r-0 text-xs md:text-base"
								/>
							</div>
							<p className="text-xs">
								<span className="text-red-600 font-bold mr-1">
									*
								</span>
								Disarankan menggunakan nomor whatsapp aktif
							</p>
						</div>

						<div>
							<p className="text-sm font-semibold">
								Metode Pengiriman
							</p>
							<div className="flex gap-3">
								<Button
									text={'Antar Sesuai Alamat'}
									style={
										'border border-primary text-primary hover:bg-primary hover:text-white mt-2 text-xs md:text-base'
									}
									icon={faTruckFast}
									onClick={() => setOpenAddress(true)}
									active={openAddress}
								/>
								<Button
									text={'Ambil di Toko'}
									style={
										'border border-primary text-primary hover:bg-primary hover:text-white mt-2 text-xs md:text-base'
									}
									icon={faStore}
									onClick={() => setOpenAddress(false)}
									active={!openAddress}
								/>
							</div>

							{openAddress && (
								<div className="mt-4">
									<label
										className="text-sm font-semibold"
										htmlFor="address"
									>
										Alamat Lengkap
									</label>

									<textarea
										name="address"
										id="address"
										rows={5}
										onChange={input}
										value={orderInput.address}
										className="form-input w-full border border-primary rounded-md focus:border-primary mt-2 resize-none text-xs md:text-base"
									></textarea>
									<p className="text-xs">
										<span className="text-red-600 font-bold mr-1">
											*
										</span>
										Mohon isi dengan alamat lengkap anda
										(Nomor Rumah, Jalan, Kode Pos, dll)
									</p>
								</div>
							)}
						</div>

						<Input
							text={'Catatan'}
							id={'note'}
							note={'Catatan tambahan untuk penjual'}
							name={'notes'}
							onChange={input}
						/>
					</div>

					<div className="w-full md:w-5/12 mt-16 md:mt-0">
						<h2 className="text-md font-semibold">Daftar Produk</h2>

						<table className="w-full mt-3">
							<thead className="border-b border-collapse border-black">
								<tr className="text-center text-sm">
									<th className="w-1/12 pb-2">No</th>
									<th className="w-5/12 pb-2">Nama produk</th>
									<th className="w-2/12 pb-2">Qty</th>
									<th className="w-4/12 pb-2">Total</th>
								</tr>
							</thead>
							<tbody>
								{carts &&
									carts.map((carts, index) => (
										<tr
											className="text-center border-collapse border-b border-gray-400 text-sm"
											key={index}
										>
											<th className="py-2">
												{index + 1}
											</th>
											<td className="py-2 pl-5 text-start">
												{carts.product.name}
											</td>
											<td className="py-2">
												{carts.quantity}
											</td>
											<td className="py-2">
												<NumericFormat
													value={
														carts.product.price *
														carts.quantity
													}
													displayType={'text'}
													thousandSeparator={true}
													prefix={'Rp. '}
												/>
											</td>
										</tr>
									))}

								<tr className="text-danger">
									<td
										colSpan={3}
										className="text-end font-semibold uppercase"
									>
										Total Bayar
									</td>
									<td className="py-2 text-center">
										<NumericFormat
											value={total}
											displayType={'text'}
											thousandSeparator={true}
											prefix={'Rp. '}
										/>
									</td>
								</tr>
							</tbody>
						</table>

						<p className="text-xs font-light mt-5 md:ms-20 text-justify">
							Pastikan semua data sudah benar sebelum melanjutkan
							pesanan. Jika data sudah benar, silahkan klik tombol
							dibawah untuk memesan produk
						</p>

						<div className="flex justify-end">
							<Button
								text={loading ? 'Memproses...' : 'Pesan'}
								style={
									'bg-success text-white hover:bg-primary mt-5 text-sm md:text-base'
								}
								onClick={() => !loading && setOpenModal(true)}
								disabled={loading}
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default CheckoutPage;
