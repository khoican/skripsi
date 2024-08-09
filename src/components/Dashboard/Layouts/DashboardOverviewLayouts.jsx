import { CurrencyDollarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { getAppUrl } from '../../../../config/app';
import { NumericFormat } from 'react-number-format';
import {
	fetchProductCount,
	fetchBestSeller,
} from '../../../redux/actions/productsAction';
import {
	fetchOrderCount,
	fetchOrderOmzet,
} from '../../../redux/actions/orderAction';
import BestSellerImage from '../../../assets/img/Logo Image.png';
import Chart from '../Fragments/Chart';
import TableOrder from '../Fragments/TableOrder';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const DashboardOverview = () => {
	const dispatch = useDispatch();
	const productCount = useSelector(
		(state) => state.fetchProductCount.product,
	);
	const orderCount = useSelector((state) => state.fetchOrderCount.order);
	const orderOmzet = useSelector((state) => state.fetchOrderOmzet.omzet);
	const bestSeller = useSelector((state) => state.fetchBestSeller.products);

	useEffect(() => {
		dispatch(fetchProductCount());
		dispatch(fetchOrderCount());
		dispatch(fetchOrderOmzet());
		dispatch(fetchBestSeller());
	}, [dispatch]);

	return (
		<>
			<div className="lg:flex gap-4 items-stretch px-7 my-10">
				<div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 ring-primary ring-2 mb-4 lg:mb-0 shadow-md shadow-primary lg:w-[35%]">
					<div className="flex justify-between h-full">
						<div className="m-auto">
							<p className="font-semibold py-2">Products</p>
							<p className="text-3xl font-bold text-primary pb-2">
								{productCount === null ? '0' : productCount}
							</p>
						</div>
						<div className="m-auto">
							<ShoppingBagIcon className="w-10 text-primary" />
						</div>
					</div>
				</div>
				<div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 ring-secondary ring-2 mb-4 lg:mb-0 shadow-md shadow-secondary lg:w-[35%]">
					<div className="flex justify-between h-full">
						<div className="m-auto">
							<p className="font-semibold py-2">Orders</p>
							<h2 className="text-3xl font-bold text-secondary pb-2">
								{orderCount === null ? '0' : orderCount}
							</h2>
						</div>
						<div className="m-auto">
							<ShoppingBagIcon className="w-10 text-secondary" />
						</div>
					</div>
				</div>
				<div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 ring-danger ring-2 mb-4 lg:mb-0 shadow-md shadow-danger lg:w-[35%]">
					<div className="flex justify-between h-full">
						<div className="m-auto">
							<p className="font-semibold py-2">Omzet</p>
							<h2 className="text-3xl font-bold text-danger pb-2">
								{orderOmzet === null ? (
									'0'
								) : (
									<NumericFormat
										value={orderOmzet}
										displayType={'text'}
										thousandSeparator={true}
										prefix={'Rp. '}
									/>
								)}
							</h2>
						</div>
						<div className="m-auto">
							<CurrencyDollarIcon className="w-10 text-danger" />
						</div>
					</div>
				</div>
			</div>

			<div className="mt-5 gap-6 flex justify-center items-stretch px-7 my-10">
				<Chart />

				<div className="p-4 bg-white shadow-lg rounded-lg w-2/3">
					<div className="pb-5">
						<h1 className="font-bold text-2xl">Best Seller</h1>
					</div>
					{bestSeller.map((product, index) => (
						<div
							className="flex justify-between gap-5 pb-5"
							key={index}
						>
							<div className="gap-5 flex justify-center">
								<div className="m-auto">
									<img
										src={
											product.images.length > 0
												? `${getAppUrl()}${product.images[0].image}`
												: BestSellerImage
										}
										className="w-20"
										alt="ProductImage"
									/>
								</div>
								<div className="m-auto">
									<h2 className="font-semibold text-lg">
										{product.name}
									</h2>
									<p className="font-semibold text-light-red text-xl">
										Rp. {product.price}
									</p>
								</div>
							</div>
							<div className="my-auto">
								<p className="font-semibold text-xl">
									{product.totalSold}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="px-7 my-10">
				<div className="bg-white rounded-lg p-4 shadow-lg">
					<div className="pb-4">
						<h2 className="font-bold text-2xl">Order</h2>
					</div>
					<TableOrder />
				</div>
			</div>
		</>
	);
};

export default DashboardOverview;
