import { Squares2X2Icon, ShoppingBagIcon, ShoppingCartIcon, ListBulletIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import LogoIMG from "../../components/SidebarDashboard/Logo"
import SidebarMenu from "../../components/SidebarDashboard/listMenu"
import DropdownMenu from "../../components/DropdownProfileMenu/Dropdown"

function Dashboard() {
    return (
        <>
            <div
                id="sideNav"
                className="lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none">
                <div className="pt-4 pr-4 pl-4">
                    <div className="flex justify-center pb-4">
                        <LogoIMG />
                    </div>
                    <h2 className="text-center font-bold text-lg">AS-SAKINAH MART</h2>
                    <p className="text-center font-bold text-sm">KOPWAN AISIYAH JEMBER</p>
                </div>
                <div className="p-4 space-y-4">
                    <SidebarMenu menu="Dashboard" icon={<Squares2X2Icon className='w-5'/>} variants="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-dark-green active:bg-dark-green" />
                    <SidebarMenu menu="Product" icon={<ShoppingBagIcon className='w-5'/>} variants="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray"/>
                    <SidebarMenu menu="Order" icon={<ShoppingCartIcon className='w-5'/>} variants="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray"/>
                    <SidebarMenu menu="Category" icon={<ListBulletIcon className='w-5'/>} variants="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray"/>
                </div>
            </div>

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

                <div className="bg-white rounded-lg p-4 shadow-md my-4">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left border-b-2 w-full">
                                    <h2 className="text-ml font-bold text-gray-600">
                                        Transacciones
                                    </h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b w-full">
                                <td className="px-4 py-2 text-left align-top w-1/2">
                                    <div>
                                        <h2>Comercio</h2>
                                        <p>24/07/2023</p>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                                    <p>
                                        <span>150$</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className="border-b w-full">
                                <td className="px-4 py-2 text-left align-top w-1/2">
                                    <div>
                                        <h2>Comercio</h2>
                                        <p>24/06/2023</p>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                                    <p>
                                        <span>15$</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className="border-b w-full">
                                <td className="px-4 py-2 text-left align-top w-1/2">
                                    <div>
                                        <h2>Comercio</h2>
                                        <p>02/05/2023</p>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                                    <p>
                                        <span>50$</span>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
