import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Dashboard/Elements/Button";
import Header from "../../components/Dashboard/Elements/Header";
import SearchInput from "../../components/Dashboard/Elements/SearchInput";
import Sidebar from "../../components/Dashboard/Elements/Sidebar";
import Table from "../../components/Dashboard/Elements/Table";

const columns = [
    {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
    },
    {
        name: "Email",
        selector: (row) => row.email,
        sortable: true,
    },
    {
        name: "Password",
        selector: (row) => row.password,
        sortable: true,
    },
    {
        name: "Address",
        selector: (row) => row.address,
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
        name: "John Doe",
        password: "this is a password",
        email: "jK5Jh@example.com",
        address: "123 Main St",
    },
    {
        id: 2,
        name: "Jane Doe",
        password: "this is a password",

        email: "jK5Jh@example.com",
        address: "123 Main St",
    },
    {
        id: 3,
        name: "Bob Smith",
        password: "this is a password",
        email: "jK5Jh@example.com",
        address: "123 Main St",
    },
    {
        id: 4,
        name: "Alice Johnson",
        password: "this is a password",
        email: "jK5Jh@example.com",
        address: "123 Main St",
    },
];

function DashboardUser() {
    return (
        <>
            <Sidebar />
            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-5">
                <Header title="User" linkPage="User" />
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

export default DashboardUser;
