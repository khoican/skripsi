import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Dashboard/Button";
import Header from "../../components/Dashboard/Header";
import SearchInput from "../../components/Dashboard/SearchInput";
import Sidebar from "../../components/Dashboard/Sidebar";
import Table from "../../components/Dashboard/Table";

const columns = [
    {
        name: "Name",
        selector: (row) => row.name,
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
        name: "Category 1",
    },
    {
        id: 2,
        name: "Category 2",
    },
    {
        id: 3,
        name: "Category 3",
    },
    {
        id: 4,
        name: "Category 4",
    },
];

function DashboardCategory() {
    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-5">
                <Header title="Category" linkPage="Category" />
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

export default DashboardCategory;
