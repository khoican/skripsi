import Header from '../../components/Dashboard/Elements/Header';
import OrderLayouts from '../../components/Dashboard/Layouts/OrderLayouts';

const OrderDetailsPage = () => {
	return (
		<>
			<div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
				<Header
					title="Order Details"
					linkPage="Order / Order Details"
				/>
				<OrderLayouts />
			</div>
		</>
	);
};

export default OrderDetailsPage;
