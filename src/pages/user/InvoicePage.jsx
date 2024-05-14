import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link, useParams } from 'react-router-dom';
import {
	getOrderHistoryProduct,
	getOrderProduct,
} from '../../../services/orderProduct';

const InvoicePage = () => {
	const id = useParams().id;
	const [order, setOrder] = useState(null);
	const [products, setProducts] = useState(null);

	useEffect(() => {
		const fetchOrder = async () => {
			try {
				const response = await getOrderProduct(id);
				setOrder(response.data);
			} catch (error) {
				console.error('Failed to fetch order:', error);
			}
		};
		const fetchProducts = async () => {
			try {
				const response = await getOrderHistoryProduct(id);
				setProducts(response.data);
			} catch (error) {
				console.error('Failed to fetch order:', error);
			}
		};

		fetchOrder();
		fetchProducts();
	}, [id]);

	if (!products) {
		return <div>Loading...</div>;
	}

	return (
		<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-40 gap-5 mt-5">
			<div className="mb-10">
				<h1 className="font-semibold text-2xl">Invoice</h1>

				<div className="mt-10 w-1/2 px-5 flex flex-col text-md gap-3">
					<div className="flex w-full">
						<p className="w-2/6 font-semibold">ID Invoice</p>
						<p className="w-1/6 text-end pe-5">:</p>
						<p className="w-3/6">{order.invoice}</p>
					</div>
					<div className="flex w-full">
						<p className="w-2/6 font-semibold">Nama Lengkap</p>
						<p className="w-1/6 text-end pe-5">:</p>
						<p className="w-3/6 capitalize">{order.name}</p>
					</div>
					<div className="flex w-full">
						<p className="w-2/6 font-semibold">Nomor Telepon</p>
						<p className="w-1/6 text-end pe-5">:</p>
						<p className="w-3/6">{order.phoneNumber}</p>
					</div>
					<div className="flex w-full">
						<p className="w-2/6 font-semibold">Pengiriman</p>
						<p className="w-1/6 text-end pe-5">:</p>
						<p className="w-3/6">{order.address}</p>
					</div>
					<div className="flex w-full">
						<p className="w-2/6 font-semibold">Catatan</p>
						<p className="w-1/6 text-end pe-5">:</p>
						<p className="w-3/6">{order.notes}</p>
					</div>
				</div>

				<div className="mt-20 w-full px-5">
					<h2 className="text-lg font-semibold">Daftar Produk</h2>

					<table className="w-full mt-5">
						<thead className="border-b border-collapse border-black text-md">
							<tr className="text-center">
								<th className="w-1/12 pb-2">No</th>
								<th className="w-5/12 pb-2">Nama produk</th>
								<th className="w-2/12 pb-2">Qty</th>
							</tr>
						</thead>
						<tbody>
							{products &&
								products.map((products, index) => (
									<tr
										className="text-center border-collapse border-b border-gray-400 text-md"
										key={index}
									>
										<th className="py-2">{index + 1}</th>
										<td className="py-2 pl-5 text-start">
											{products.productName}
										</td>
										<td className="py-2">
											{products.quantity}
										</td>
									</tr>
								))}

							<tr className="text-danger text-md">
								<td
									colSpan={2}
									className="text-end font-semibold uppercase"
								>
									Total Bayar
								</td>
								<td className="py-2 text-center">
									<NumericFormat
										value={order.totalPrice}
										displayType={'text'}
										thousandSeparator={true}
										prefix={'Rp. '}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="mt-10 w-full flex justify-end 	px-5">
					<div className="w-2/3">
						<p className="text-end text-md">
							Halaman ini sebagai bukti pembelian yang bisa anda
							tunjukkan kepada kurir atau admin kami. Jika anda
							mengalami kesulitan dapat hubungi admin
						</p>

						<div className="flex justify-end mt-5">
							<Link
								to="/"
								className="bg-success p-3 text-sm text-white font-semibold rounded-md shadow-md"
							>
								Kembali ke Beranda
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default InvoicePage;
