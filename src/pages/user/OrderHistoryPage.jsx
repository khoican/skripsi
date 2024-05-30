import { useEffect, useState } from 'react';
import Button from '../../components/user/elements/button/Index';
import CardOrderHitory from '../../components/user/fragments/cardOrderHistory/Index';
import { getAllOrderByUserId } from '../../../services/orderProduct';
import { decryptData } from '../../../helper/cryptoData';

const OrderHistoryPage = () => {
	const user = decryptData('user');
	let [orderHistory, setOrderHistory] = useState([]);
	const [status, setStatus] = useState('all');

	const getOrderHistory = async () => {
		const response = await getAllOrderByUserId(user.id);

		return response.data;
	};

	useEffect(() => {
		const fetchOrderHistory = async () => {
			const data = await getOrderHistory();
			setOrderHistory(data);
		};

		fetchOrderHistory();
	}, [user.id]);

	const handleStatus = (statusOrder) => {
		setStatus(statusOrder);
	};

	orderHistory =
		status === 'all'
			? orderHistory
			: orderHistory.filter((order) => order.status === status);

	return (
		<main className="min-h-[70vh] p-5 max-w-screen-xl mx-auto px-20 mt-5">
			<div className="flex justify-between items-center w-full">
				<h1 className="font-semibold text-2xl">Order History</h1>

				<div className="flex gap-3 mt-1">
					<Button
						text={'Semua Riwayat'}
						style={`border text-sm ${status === 'all' ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}`}
						onClick={() => handleStatus('all')}
					/>
					<Button
						text={'Sedang Diproses'}
						style={`border text-sm ${status === 'PROSES' ? 'bg-yellow-500 text-white' : 'border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'}`}
						onClick={() => handleStatus('PROSES')}
					/>
					<Button
						text={'Berhasil'}
						style={`border text-sm ${status === 'SUKSES' ? 'bg-success text-white' : 'border-success text-success hover:bg-success hover:text-white'}`}
						onClick={() => handleStatus('SUKSES')}
					/>
					<Button
						text={'Dibatalkan'}
						style={`border  text-sm ${status === 'BATAL' ? 'bg-danger text-white' : 'border-danger text-danger hover:bg-danger hover:text-white'}`}
						onClick={() => handleStatus('BATAL')}
					/>
				</div>
			</div>

			<div className="mt-5 flex flex-col gap-3 mb-5">
				{orderHistory.length > 0 ? (
					orderHistory.map((item) => (
						<CardOrderHitory
							key={item.id}
							invoice={item.invoice}
							date={item.createdAt}
							address={item.address}
							status={item.status}
							id={item.id}
						/>
					))
				) : (
					<p className="text-center font-semibold">
						Tidak ada riwayat transaksi
					</p>
				)}
			</div>
		</main>
	);
};

export default OrderHistoryPage;
