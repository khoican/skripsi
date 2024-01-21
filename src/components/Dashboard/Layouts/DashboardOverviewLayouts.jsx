import { CurrencyDollarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import ListBestSellerProduct from "../Elements/ListBestSellerProduct";
import Table from "../Elements/Table";
import Button from "../Elements/Button";

const columns = [
    {
        name: "Invoice",
        selector: (row) => row.invoice,
        sortable: true,
    },
    {
        name: "Customer Name",
        selector: (row) => row.customerName,
        sortable: true,
    },
    {
        name: "Status",
        selector: (row) => row.status,
        sortable: true,
    },
    {
        name: "Action",
        cell: (row) => (
            <>
                <Button onClick={() => handleEdit(row.id)}>Details</Button>
            </>
        ),
    },
];

const data = [
    {
        id: 1,
        invoice: "#10435634",
        customerName: "John Doe",
        status: "Pending",
    },
    {
        id: 2,
        invoice: "#10435634",
        customerName: "Jane Doe",
        status: "Paid",
    },
    {
        id: 3,
        invoice: "#10435634",
        customerName: "John Doe",
        status: "Pending",
    },
    {
        id: 4,
        invoice: "#10435634",
        customerName: "Jane Doe",
        status: "Paid",
    },
];

const DashboardOverview = () => {
    return (
        <>
            <div className="lg:flex gap-4 items-stretch px-7 my-10">
                <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 ring-dark-green ring-2 mb-4 lg:mb-0 shadow-md shadow-dark-green lg:w-[35%]">
                    <div className="flex justify-between h-full">
                        <div className="m-auto">
                            <p className="font-semibold py-2">Products</p>
                            <p className="text-3xl font-bold text-dark-green pb-2">
                                20
                            </p>
                        </div>
                        <div className="m-auto">
                            <ShoppingBagIcon className="w-10 text-dark-green" />
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
                            <ShoppingBagIcon className="w-10 text-light-orange" />
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
                            <CurrencyDollarIcon className="w-10 text-light-red" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 gap-6 flex justify-center items-stretch px-7 my-10">
                <div className="bg-white shadow-lg rounded-md w-full">
                    <h1 className="font-bold text-lg">Chart</h1>
                </div>

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
                    <Table data={data} columns={columns} />
                </div>
            </div>
        </>
    );
};

export default DashboardOverview;
