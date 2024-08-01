import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link, useParams } from 'react-router-dom';
import {
	getOrderHistoryProduct,
	getOrderProduct,
} from '../../../services/orderProduct';
import moment from 'moment/moment';
import 'moment/locale/id';
import Loading from '../../components/user/fragments/loading/Index';
import LoadingScreen from '../../components/user/fragments/LoadingScreen/Index';
import { Helmet } from 'react-helmet';

const InvoicePage = () => {
	const id = useParams().id;
	const [order, setOrder] = useState(null);
	const [products, setProducts] = useState(null);
	const [loading, setLoading] = useState(true);

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

	if (!order) {
		return <LoadingScreen />;
	}

	const getDate = order && moment(order.createdAt);
	const formattedDate =
		getDate && getDate.locale('id').format('DD MMMM YYYY');

	return (
		<>
			<Helmet>
				<title>Invoice - #{order.invoice}</title>
			</Helmet>
			<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-5 md:px-40 gap-5 mt-5">
				<div className="mb-10">
					<h1 className="font-semibold text-2xl">Invoice</h1>

					<div className="mt-10 w-full md:w-1/2 px-5 flex flex-col text-md gap-3 text-xs md:text-base">
						<div className="flex w-full">
							<p className="w-2/6 font-semibold">ID Invoice</p>
							<p className="w-1/6 text-end pe-5">:</p>
							<p className="w-3/6 font-semibold">
								#{order.invoice}
							</p>
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
						<div className="flex w-full">
							<p className="w-2/6 font-semibold">
								Tanggal Dibuat
							</p>
							<p className="w-1/6 text-end pe-5">:</p>
							<p className="w-3/6">{formattedDate}</p>
						</div>
					</div>

					<div className="mt-20 w-full px-5">
						<h2 className="text-md md:text-lg font-semibold">
							Daftar Produk
						</h2>

						<table className="w-full mt-5">
							<thead className="border-b border-collapse border-black text-xs md:text-md">
								<tr className="text-center">
									<th className="w-1/12 pb-2">No</th>
									<th className="w-4/12 pb-2">Nama produk</th>
									<th className="w-3/12 pb-2">Harga</th>
									<th className="w-1/12 pb-2">Qty</th>
									<th className="w-3/12 pb-2">Total</th>
								</tr>
							</thead>
							<tbody>
								{products &&
									products.map((products, index) => (
										<tr
											className="text-center border-collapse border-b border-gray-400 text-xs md:text-md"
											key={index}
										>
											<th className="py-2">
												{index + 1}
											</th>
											<td className="py-2 pl-5 text-start">
												{products.productName}
											</td>
											<td className="py-2 pl-5">
												<NumericFormat
													value={products.price}
													displayType="text"
													thousandSeparator={true}
													prefix={'Rp. '}
												/>
											</td>
											<td className="py-2">
												{products.quantity}
											</td>
											<td className="py-2">
												<NumericFormat
													value={products.totalPrice}
													displayType="text"
													thousandSeparator={true}
													prefix={'Rp. '}
												/>
											</td>
										</tr>
									))}

								<tr className="text-danger text-sm md:text-md">
									<td
										colSpan={4}
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
						<div className="w-full md:w-2/3">
							<p className="text-end text-xs md:text-md">
								Halaman ini sebagai bukti pembelian yang bisa
								anda tunjukkan kepada kurir atau admin kami.
								Jika anda mengalami kesulitan dapat hubungi
								admin
							</p>

							<div className="flex justify-end mt-5">
								<Link
									to="/"
									className="bg-success p-3 text-xs md:text-sm text-white font-semibold rounded-md shadow-md"
								>
									Kembali ke Beranda
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default InvoicePage;
