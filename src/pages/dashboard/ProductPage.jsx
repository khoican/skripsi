import { PlusIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/solid";
import Header from "../../components/Dashboard/Header";
import Sidebar from "../../components/Dashboard/Sidebar/index";
import Button from "../../components/Dashboard/Button";
import SearchInput from "../../components/Dashboard/SearchInput";
import Table from "../../components/Dashboard/Table";

const columns = [
    {
        name: "Product",
        selector: (row) => row.product,
        sortable: true,
    },
    {
        name: "Price",
        selector: (row) => row.price,
        sortable: true,
    },
    {
        name: "Sold",
        selector: (row) => row.sold,
        sortable: true,
    },
    {
        name: "Stock",
        selector: (row) => row.stock,
        sortable: true,
    },
    {
        name: "Actions",
        cell: (row) => (
            <>
                <Button onClick={() => handleEdit(row.id)}>
                    <PencilIcon className="w-8 pr-2" />
                </Button>
                <Button onClick={() => handleDelete(row.id)}>
                    <TrashIcon className="w-8 pl-2" />
                </Button>
            </>
        ),
    },
];

const data = [
    {
        id: 1,
        product: "Product 1",
        price: "Rp. 100.000,-",
        sold: "1",
        stock: "11",
    },
    {
        id: 2,
        product: "Product 2",
        price: "Rp. 200.000,-",
        sold: "2",
        stock: "15",
    },
    {
        id: 3,
        product: "Product 3",
        price: "Rp. 300.000,-",
        sold: "3",
        stock: "22",
    },
    {
        id: 4,
        product: "Product 4",
        price: "Rp. 400.000,-",
        sold: "4",
        stock: "20",
    },
    {
        id: 5,
        product: "Product 5",
        price: "Rp. 500.000,-",
        sold: "5",
        stock: "10",
    },
    {
        id: 6,
        product: "Product 6",
        price: "Rp. 600.000,-",
        sold: "6",
        stock: "12",
    },
    {
        id: 7,
        product: "Product 7",
        price: "Rp. 700.000,-",
        sold: "7",
        stock: "17",
    },
    {
        id: 8,
        product: "Product 8",
        price: "Rp. 800.000,-",
        sold: "8",
        stock: "18",
    },
];

function DashboardProduct() {
    // const [edit, setEdit] = useState(false);
    // const [deleteId, setDeleteId] = useState(null);

    // const handleEdit = (id) => {
    //     setEdit(true);
    //     setDeleteId(id);
    // };

    // const handleDelete = () => {
    //     // Implement the delete logic here
    //     setEdit(false);
    // };

    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-5">
                <Header title="Product" linkPage="Product" />
                <div className="flex justify-between mt-5 px-7">
                    <div className="my-auto w-2/4">
                        <SearchInput />
                    </div>

                    <div className="flex">
                        <Button
                            type="button"
                            variants="bg-light-green rounded-md py-2 px-3 text-white flex">
                            Add Product{" "}
                            <PlusIcon className="w-8 pl-2 mx-auto" />
                        </Button>
                    </div>
                </div>
                <div className="my-10 px-7">
                    <div className="mt-2 w-full bg-white shadow-lg px-2">
                        <Table data={data} columns={columns} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardProduct;
