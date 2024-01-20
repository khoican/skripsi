import { Link } from "react-router-dom";
import Header from "../../components/Dashboard/Elements/Header";
import SearchInput from "../../components/Dashboard/Elements/SearchInput";
import Sidebar from "../../components/Dashboard/Elements/Sidebar";
import Button from "../../components/Dashboard/Elements/Button";
import {
    PencilIcon,
    PlusIcon,
    TrashIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import ModalRole from "../../components/Dashboard/Fragments/ModalRole";
import Input from "../../components/Dashboard/Elements/Input";

const DataRole = [
    {
        id: 1,
        name: "Admin",
    },
    {
        id: 2,
        name: "Member",
    },
    {
        id: 3,
        name: "User",
    },
];

function DashboardRolePage() {
    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-5">
                <Header title="Role" linkPage="Role" />
                <div className="flex justify-between mt-5 px-7">
                    <div className="my-auto w-2/4">
                        <SearchInput name="role" placeholder="Role" />
                    </div>
                    <div className="flex">
                        <Button
                            type="button"
                            variants="flex bg-light-green rounded-md py-2 px-3 text-white"
                            onClick={() =>
                                document.getElementById("add").showModal()
                            }>
                            Add Role
                            <PlusIcon className="w-8 pl-2 mx-auto" />
                        </Button>
                        <ModalRole
                            variants="bg-light-green"
                            id="add"
                            title="Add Role"
                            btn="Save">
                            <Input
                                variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                type="text"
                                name="role"
                                placeholder="Insert Role"
                            />
                        </ModalRole>
                    </div>
                </div>
                <div className="my-10 px-7">
                    <div className="">
                        <div className="ps-10 pe-4 text-slate-700 cursor-pointer ">
                            {DataRole.map((item) => (
                                <div
                                    key={item}
                                    className="px-2.5 py-2.5 border-b border-b-slate-300 ">
                                    <div className="py-2.5 px-2.5 w-full border rounded-lg hover:bg-light-green transition-all 3s ease-in shadow-lg flex items-center justify-between">
                                        <Link className="flex items-center gap-2.5">
                                            <UserIcon className="w-5 h-5" />
                                            <p>{item.name}</p>
                                        </Link>

                                        <Link>
                                            <div className="flex gap-2">
                                                <Button
                                                    onClick={() =>
                                                        document
                                                            .getElementById(
                                                                "edit"
                                                            )
                                                            .showModal()
                                                    }>
                                                    <PencilIcon className="w-5" />
                                                </Button>
                                                <ModalRole
                                                    id="edit"
                                                    title="Edit Role"
                                                    btn="Save"
                                                    variants="bg-light-green">
                                                    <Input
                                                        type="text"
                                                        name="subcategory"
                                                        placeholder="Insert a Role"
                                                        variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                                    />
                                                </ModalRole>
                                                <Button
                                                    onClick={() =>
                                                        document
                                                            .getElementById(
                                                                "delete"
                                                            )
                                                            .showModal()
                                                    }>
                                                    <TrashIcon className="w-5" />
                                                </Button>
                                                <ModalRole
                                                    id="delete"
                                                    title="Delete Role"
                                                    btn="Delete"
                                                    variants="bg-light-red">
                                                    <Input
                                                        type="text"
                                                        name="subcategory"
                                                        placeholder="Insert a Role"
                                                        variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-red focus:ring-1 focus:ring-inset focus:ring-dark-red py-2 px-3"
                                                    />
                                                </ModalRole>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardRolePage;
