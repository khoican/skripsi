import { Link } from 'react-router-dom';
import Button from '../../components/user/elements/button/Index';
import CartProduct from '../../components/user/fragments/cartProduct/Index';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';

const CartPage = () => {
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		setCart(JSON.parse(localStorage.getItem('cart')));
	}, []);

	useEffect(() => {
		let totalPrice = 0;
		cart.forEach((item) => {
			totalPrice += item.product.price * item.quantity;
		});
		setTotal(totalPrice);
	}, [cart]);

	if (!cart) {
		return <p>Loading...</p>;
	}

	return (
		<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-20 gap-5 mt-5">
			<div className="mb-10">
				<h1 className="font-semibold text-2xl">Keranjang Anda</h1>
				<p>Segera checkout barang anda sebelum kehabisan</p>
			</div>

			<div className="flex justify-between gap-6">
				<div className="w-9/12 flex flex-col gap-3">
					{cart ? (
						cart.map((item, index) => (
							<CartProduct
								key={index}
								id={item.id}
								name={item.product.name}
								quantity={item.quantity}
								note={item.notes}
								price={item.product.price}
							/>
						))
					) : (
						<p className="text-center">
							Keranjang anda masih kosong
						</p>
					)}
				</div>
				<div className="w-3/12">
					<h1 className="text-2xl font-bold mb-1">Total Belanja</h1>
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
	);
};

export default CartPage;
