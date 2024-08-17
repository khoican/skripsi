import { Link } from 'react-router-dom';
import Button from '../../components/user/elements/button/Index';
import CartProduct from '../../components/user/fragments/cartProduct/Index';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { deleteCart } from '../../../helper/deleteCart';
import Modal from '../../components/user/fragments/modal/Index';
import Alert from '../../components/user/elements/alert/Index';
import { getCartByUserId } from '../../../services/cartProduct';
import { decryptData } from '../../../helper/cryptoData';
import logo from '/logo.png';

const CartPage = () => {
	const user = localStorage.getItem('user') && decryptData('user');
	const [total, setTotal] = useState(0);
	const [cart, setCart] = useState();
	const [openModal, setOpenModal] = useState(false);
	const [idDelete, setIdDelete] = useState(null);
	const [status, setStatus] = useState('');

	if (!user) {
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
							Anda Belum Login
						</h1>
						<p>
							Silahkan login terlebih dahulu untuk merasakan
							kenyamanan saat berbelanja{' '}
							<Link
								to="/login"
								className="text-primary underline"
							>
								disini
							</Link>
						</p>
					</div>
				</main>
			</>
		);
	}

	useEffect(() => {
		const fetchCart = async () => {
			try {
				const response = await getCartByUserId(user.id);

				setCart(response);
			} catch (error) {
				console.error('Failed to fetch cart:', error);
			}
		};

		fetchCart();
	}, [user.id]);

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
					<div className="mb-5 text-sm text-primary flex gap-1">
						<Link to={'/'}>Beranda</Link>
						<p>/</p>
						<Link to={'/cart'}>keranjang</Link>
					</div>
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

	const isMobile = window.innerWidth <= 768;

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
			<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-5 md:px-20 gap-5 md:mt-5">
				<div className="mb-10">
					<h1 className="font-semibold text-2xl">Keranjang Anda</h1>
					<p>Segera checkout barang anda sebelum kehabisan</p>
				</div>

				<div className="mb-5 text-sm text-primary flex gap-1">
					<Link to={'/'}>Beranda</Link>
					<p>/</p>
					<Link to={'/cart'}>keranjang</Link>
				</div>

				<div className="flex justify-between gap-6">
					<div className="w-full md:w-9/12 flex flex-col gap-3">
						{cart &&
							cart.map((item, index) => (
								<CartProduct
									key={index}
									id={item.id}
									name={item.product.name}
									quantity={item.quantity}
									note={item.notes}
									image={
										item.product.images.length > 0
											? item.product.images[0].image
											: null
									}
									price={item.product.price}
									productId={item.productId}
									onClick={handleOpenModal({
										id: item.id,
										name: item.product.name,
									})}
								/>
							))}
					</div>

					{!isMobile && (
						<div className="w-3/12">
							<h1 className="text-2xl font-bold mb-1">
								Total Belanja
							</h1>
							<p className="text-sm">
								Total yang harus anda bayar
							</p>

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
									style={
										'bg-success text-white hover:bg-primary'
									}
									text={'Pesan'}
									icon={faBox}
								/>
							</Link>
						</div>
					)}

					{isMobile && (
						<div className="fixed bottom-0 left-0 w-full p-5 shadow-sm flex justify-between items-center bg-white drop-shadow-top">
							<div className="w-8/12">
								<h1 className="text-xs font-semibold mb-1">
									Total Belanja
								</h1>

								<h3 className="text-xl text-danger font-semibold">
									<NumericFormat
										value={total}
										displayType={'text'}
										prefix={'Rp. '}
										thousandSeparator={true}
									/>
								</h3>
							</div>

							<div className="w-4/12">
								<Link to={'/checkout'}>
									<Button
										style={
											'bg-success text-white hover:bg-primary text-sm'
										}
										text={'Pesan'}
										icon={faBox}
									/>
								</Link>
							</div>
						</div>
					)}
				</div>
			</main>
		</>
	);
};

export default CartPage;
