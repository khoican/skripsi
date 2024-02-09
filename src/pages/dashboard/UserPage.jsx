import { PlusIcon } from "@heroicons/react/24/solid";
import TrashIcon from "../../assets/img/icon/TrashIcon";
import PencilIcon from "../../assets/img/icon/PencilIcon";
import Button from "../../components/Dashboard/Elements/Button";
import Header from "../../components/Dashboard/Elements/Header";
import SearchInput from "../../components/Dashboard/Elements/SearchInput";
import Sidebar from "../../components/Dashboard/Elements/Sidebar";
import Table from "../../components/Dashboard/Elements/Table";
import { Link } from "react-router-dom";
import ModalUser from "../../components/Dashboard/Fragments/ModalUser";

const columns = [
    {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
    },
    {
        name: "Username",
        selector: (row) => row.username,
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
        name: "Phone Number",
        selector: (row) => row.phonenumber,
        sortable: true,
    },
    {
        name: "Role",
        selector: (row) => row.role,
        sortable: true,
    },
    {
        name: "Token",
        selector: (row) => row.token,
        sortable: true,
    },
    {
        name: "Actions",
        cell: (row) => (
            <>
                <Link to="/Dashboard/User/UserDetails">
                    <Button
                        type="button"
                        variants="focus:outline-none"
                        onClick={() => handleEdit(row.id)}>
                        <img
                            src={PencilIcon}
                            className="w-7 pl-2"
                            alt="pencilicon"
                        />
                    </Button>
                </Link>
                <Button
                    type="button"
                    variants="focus:outline-none"
                    onClick={() =>
                        document.getElementById("delete").showModal()
                    }>
                    <img src={TrashIcon} className="w-6 pl-2" alt="trashicon" />
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
        username: "this is username",
        address: "123 Main St",
        phonenumber: "082312512312",
        role: "Admin",
        token: "this is a token",
    },
    {
        id: 2,
        name: "Jane Doe",
        password: "this is a password",
        username: "this is username",
        address: "123 Main St",
        phonenumber: "082312512312",
        role: "Admin",
        token: "this is a token",
    },
    {
        id: 3,
        name: "Bob Smith",
        password: "this is a password",
        username: "this is username",
        address: "123 Main St",
        phonenumber: "082312512312",
        role: "Guest",
        token: "this is a token",
    },
    {
        id: 4,
        name: "Alice Johnson",
        password: "this is a password",
        username: "this is username",
        address: "123 Main St",
        phonenumber: "082312512312",
        role: "Member",
        token: "this is a token",
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
                        <SearchInput name="username" placeholder="User name" />
                    </div>

                    <div className="flex">
                        <Link to="/Dashboard/User/UserDetails">
                            <Button
                                type="button"
                                variants="bg-light-green rounded-md py-2 px-3 text-white flex">
                                Add User
                                <PlusIcon className="w-8 pl-2 mx-auto" />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="my-10 px-7">
                    <div className="mt-2 w-full bg-white shadow-lg px-2">
                        <Table data={data} columns={columns} />
                        <ModalUser id="delete" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardUser;
