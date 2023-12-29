import { ShoppingBagIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import DropdownMenu from "../../components/Dashboard/DropdownProfileMenu"
import Sidebar from "../../components/Dashboard/Sidebar"
import ListBestSellerProduct from "../../components/Dashboard/ListBestSellerProduct"
import Table from '../../components/Dashboard/Table';

function Dashboard() {
    return (
        <>
            <Sidebar/>

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">
                <div className="border-none p-3 mb-4 shadow-md">
                    <div className="flex justify-between">
                        <div className="justify-center">
                            <h1 className="font-bold text-3xl">Dashboard</h1>
                            <p className="text-gray-400">Admin/Dashboard</p>
                        </div>

                        <div className="items-center">
                            <DropdownMenu/>
                        </div>
                    </div>
                </div>

                <div className="lg:flex gap-4 items-stretch">
                    <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 ring-dark-green ring-2 mb-4 lg:mb-0 shadow-md shadow-dark-green lg:w-[35%]">
                        <div className="flex justify-between h-full">
                            <div className="m-auto">
                                <p className="font-semibold py-2">Products</p>
                                <h2 className="text-3xl font-bold text-dark-green pb-2">
                                    20
                                </h2>
                            </div>
                            <div className="m-auto">
                                <ShoppingBagIcon className="w-10 text-dark-green"/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 ring-light-orange ring-2 mb-4 lg:mb-0 shadow-md shadow-light-orange lg:w-[35%]">
                        <div className="flex justify-between h-full">
                            <div className="m-auto">
                                <p className="font-semibold py-2">Orders</p>
                                <h2 className="text-3xl font-bold text-light-orange pb-2">
                                    548
                                </h2>
                            </div>
                            <div className="m-auto">
                                <ShoppingBagIcon className="w-10 text-light-orange"/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 ring-light-red ring-2 mb-4 lg:mb-0 shadow-md shadow-light-red lg:w-[35%]">
                        <div className="flex justify-between h-full">
                            <div className="m-auto">
                                <p className="font-semibold py-2">Omzet</p>
                                <h2 className="text-3xl font-bold text-light-red pb-2">
                                    Rp. 10.000.000
                                </h2>
                            </div>
                            <div className="m-auto">
                                <CurrencyDollarIcon className="w-10 text-light-red"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 gap-6 flex justify-center items-stretch">
                    <div className="bg-white shadow-md rounded-md w-full">
                        <h1 className="font-bold text-lg">Chart</h1>
                    </div>

                    <div className="p-4 bg-white shadow-md rounded-lg w-2/3">
                        <div className="pb-5">
                            <h1 className="font-bold text-2xl">Best Seller</h1>
                        </div>
                        <ListBestSellerProduct/>   
                        <ListBestSellerProduct/>   
                        <ListBestSellerProduct/>   
                    </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md my-4">
                    <div className="pb-4">
                        <h2 className="font-bold text-2xl">Order</h2>
                    </div>    
                    <Table/>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
