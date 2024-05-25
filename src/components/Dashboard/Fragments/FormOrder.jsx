import { useParams } from 'react-router-dom';
import Button from '../Elements/Button';
import { useEffect, useState } from 'react';
import { editOrder } from '../../../../services/order';
import { editProduct } from '../../../../services/product';
import moment from 'moment/moment';

const FormOrder = (props) => {
	const {
		no,
		invoice,
		fullName,
		phoneNumber,
		userAddress,
		orderAddress,
		description,
		status,
		date,
		productName,
		qty,
		price,
		totalPrice,
	} = props;
	const getDate = moment(date);
	const formattedDate = getDate.locale('id').format('DD MMMM YYYY');

	const orderId = useParams();
	const [orderStatus, setOrderStatus] = useState({
		status: '',
	});

	const getOrderId = async () => {
		const data = await editOrder(orderId.id);
		return data;
	};

	useEffect(() => {
		getOrderId().then((data) => setOrderStatus(data));
	}, [orderId.id]);

	const handleChangeStatus = (e) => {
		setOrderStatus({ ...orderStatus, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		const status = {
			status: orderStatus.status,
		};
		editProduct(orderId.id, status);
		console.log(status);
	};
	return (
		<>
			<div className="flex justify-between">
				<p className="font-bold text-2xl">#{invoice}</p>
				<div className="bg-light-orange px-2 py-1 rounded-md items-center">
					<p className="font-semibold text-black text-xl">{status}</p>
				</div>
			</div>
			<div className="py-8">
				<div className="flex">
					<p className="text-md font-semibold">Full Name</p>
					<p className="pl-44 pr-8 font-semibold">:</p>
					<p className="font-semibold">{fullName}</p>
				</div>
				<div className="flex mt-3 items-center">
					<p className="text-md font-semibold">Phone Number</p>
					<p className="pl-[8.7rem] pr-5 font-semibold">:</p>
					<button>
						<img
							className="block"
							src="/public/images/WALogo.png"
							alt="Wa Logo"
						/>
					</button>
					<p className="font-semibold">{phoneNumber}</p>
				</div>
				<div className="flex mt-3">
					<p className="text-md font-semibold">Address</p>
					<p className="pl-48 pr-8 font-semibold">:</p>
					<p className="font-semibold">{userAddress}</p>
				</div>
				<div className="flex mt-5">
					<p className="text-md font-semibold">Note</p>
					<p className="pl-[13.4rem] pr-8 font-semibold">:</p>
					<p className="font-semibold">{orderAddress}</p>
				</div>
				<div className="flex mt-5">
					<p className="text-md font-semibold">Order Time</p>
					<p className="pl-[10.6rem] pr-8 font-semibold">:</p>
					<p className="font-semibold">{formattedDate}</p>
				</div>
			</div>
			<div className="py-2">
				<p className="font-bold text-lg">Details Order</p>
				<table className="w-full border-b-[1px] border-black">
					<thead>
						<tr className="font-bold border-b-2 border-black">
							<td className="py-2">No</td>
							<td>Product</td>
							<td>Qty</td>
							<td>Total</td>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b-[1px] border-black">
							<td className="py-2">{no}</td>
							<td>{productName}</td>
							<td>{qty}</td>
							<td>Rp. {price}</td>
						</tr>
						<tr className="border-b-[1px] border-black">
							<td className="text-sm py-2">
								Note: {description}
							</td>
						</tr>
					</tbody>
				</table>
				<div className="mt-4 flex items-center justify-end pr-[5.1rem]">
					<p className="text-lg text-light-red pr-10">Total</p>
					<p className="text-lg font-bold text-light-red">
						Rp. {totalPrice}
					</p>
				</div>
				<div className="mt-6 flex items-center justify-end gap-3 pb-3">
					<Button variants="ring-1 ring-danger py-2 px-4 rounded-md text-red transition-all ease-in 3s hover:bg-red hover:text-white">
						Cancel
					</Button>
					<Button variants="bg-success py-2 px-4 rounded-md text-white transition-all ease-in 3s hover:bg-primary">
						Success
					</Button>
				</div>
				<hr />
			</div>
		</>
	);
};

export default FormOrder;
