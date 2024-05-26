import { CurrencyDollarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import ListBestSellerProduct from '../Elements/ListBestSellerProduct';
import Chart from '../Fragments/Chart';
import TableOrder from '../Fragments/TableOrder';

const DashboardOverview = () => {
	return (
		<>
			<div className="lg:flex gap-4 items-stretch px-7 my-10">
				<div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 ring-primary ring-2 mb-4 lg:mb-0 shadow-md shadow-primary lg:w-[35%]">
					<div className="flex justify-between h-full">
						<div className="m-auto">
							<p className="font-semibold py-2">Products</p>
							<p className="text-3xl font-bold text-primary pb-2">
								20
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
								548
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
								Rp. 10.000.000
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
					<ListBestSellerProduct />
					<ListBestSellerProduct />
					<ListBestSellerProduct />
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
