import { Link } from 'react-router-dom';
import Button from '../../components/user/elements/button/Index';
import CartProduct from '../../components/user/fragments/cartProduct/Index';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { deleteCart } from '../../../helper/deleteCart';
import Modal from '../../components/user/fragments/modal/Index';
import Alert from '../../components/user/elements/alert/Index';

const CartPage = () => {
	const [total, setTotal] = useState(0);
	const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
	const [openModal, setOpenModal] = useState(false);
	const [idDelete, setIdDelete] = useState(null);
	const [status, setStatus] = useState('');

	useEffect(() => {
		let totalPrice = 0;
		cart &&
			cart.forEach((item) => {
				totalPrice += item.product.price * item.quantity;
			});
		setTotal(totalPrice);
	}, [cart]);

	const handleDeleteCart = async (id) => {
		const response = await deleteCart(id);

		if (response.status === 200) {
			handleStatus(response);
			const updatedCart = cart.filter((item) => item.id !== id);
			localStorage.setItem('cart', JSON.stringify(updatedCart));
			setCart(updatedCart);
		} else {
			handleStatus(response);
		}
		setOpenModal(false);
	};

	const handleStatus = (message) => {
		setStatus(message);

		setTimeout(() => {
			setStatus('');
		}, 5000);
	};

	if (!cart || cart.length === 0) {
		return (
			<>
				{status && (
					<Alert
						message={status.message}
						onSuccess={status.status}
						success={200}
						onClick={() => setStatus('')}
					/>
				)}
				<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-20 gap-5 mt-5">
					<div className="mb-10 text-center">
						<h1 className="font-semibold text-2xl">
							Keranjang Kosong
						</h1>
						<p>
							Segera cari barang yang anda inginkan di{' '}
							<Link to="/products" className="text-primary">
								sini
							</Link>
						</p>
					</div>
				</main>
			</>
		);
	}

	const handleOpenModal = (id) => () => {
		setOpenModal(true);
		setIdDelete(id);
	};

	return (
		<>
			{openModal && (
				<Modal
					title={'Hapus Keranjang'}
					onClose={() => setOpenModal(false)}
					onDelete={() => handleDeleteCart(idDelete.id)}
				>
					<p className="text-sm">
						Apakah anda yakin akan menghapus{' '}
						<span className="font-semibold capitalize">
							{idDelete.name}
						</span>{' '}
						dari keranjang anda?
					</p>
				</Modal>
			)}

			{status && (
				<Alert
					message={status.message}
					onSuccess={status.status}
					success={200}
					onClick={() => setStatus('')}
				/>
			)}
			<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-20 gap-5 mt-5">
				<div className="mb-10">
					<h1 className="font-semibold text-2xl">Keranjang Anda</h1>
					<p>Segera checkout barang anda sebelum kehabisan</p>
				</div>

				<div className="flex justify-between gap-6">
					<div className="w-9/12 flex flex-col gap-3">
						{cart &&
							cart.map((item, index) => (
								<CartProduct
									key={index}
									id={item.id}
									name={item.product.name}
									quantity={item.quantity}
									note={item.notes}
									price={item.product.price}
									productId={item.productId}
									onClick={handleOpenModal({
										id: item.id,
										name: item.product.name,
									})}
								/>
							))}
					</div>
					<div className="w-3/12">
						<h1 className="text-2xl font-bold mb-1">
							Total Belanja
						</h1>
						<p className="text-sm">Total yang harus anda bayar</p>

						<h3 className="text-2xl text-danger mt-3 mb-8 font-semibold">
							<NumericFormat
								value={total}
								displayType={'text'}
								prefix={'Rp. '}
								thousandSeparator={true}
							/>
						</h3>

						<Link to={'/checkout'}>
							<Button
								style={'bg-success text-white hover:bg-primary'}
								text={'Pesan'}
								icon={faBox}
							/>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
};

export default CartPage;
