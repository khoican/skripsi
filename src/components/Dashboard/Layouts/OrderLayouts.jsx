import FormOrder from '../Fragments/FormOrder';
import { getAllOrderByUserId } from '../../../../services/orderProduct';
import { useEffect, useState } from 'react';

const OrderLayouts = () => {
	let [orderHistory, setOrderHistory] = useState([]);

	const getOrderHistory = async () => {
		const response = await getAllOrderByUserId();
		return response.data;
	};

	useEffect(() => {
		const fetchOrderHistory = async () => {
			const data = await getOrderHistory();
			setOrderHistory(data);
		};
		fetchOrderHistory();
	}, []);

	return (
		<>
			<div className="py-6 items-stretch px-7">
				<div className="px-4">
					{orderHistory.map((order, index) => (
						<FormOrder
							key={order.id}
							no={index + 1}
							invoice={order.invoice}
							fullName={order.name}
							phoneNumber={order.phoneNumber}
							userAddress={order.user.address}
							orderAddress={order.address}
							description={order.description}
							status={order.status}
							date={order.createdAt}
							// productName={order.productName}
							qty={order.qty}
							// price={order.price}
							totalPrice={order.totalPrice}
						/>
					))}
					{/* <FormOrder /> */}
				</div>
			</div>
		</>
	);
};

export default OrderLayouts;
