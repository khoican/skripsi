import InvoiceOrder from '../Fragments/InvoiceOrder';
import { getOrderProduct } from '../../../../services/orderProduct';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderLayouts = () => {
	const orderId = useParams();
	const [orderHistory, setOrderHistory] = useState([{}]);

	const getOrderInvoice = async () => {
		const response = await getOrderProduct(orderId.id);
		console.log(response);
		return response.data.data;
	};

	useEffect(() => {
		const fetchOrderHistory = async () => {
			const data = await getOrderInvoice();
			setOrderHistory(data);
		};
		fetchOrderHistory();
	}, []);

	return (
		<>
			<div className="py-6 items-stretch px-7">
				<div className="px-4">
					<InvoiceOrder />
				</div>
			</div>
		</>
	);
};

export default OrderLayouts;
