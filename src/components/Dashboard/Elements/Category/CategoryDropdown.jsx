import {
    ChevronDownIcon,
    HashtagIcon,
    ListBulletIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Modal from "../Modal";
import Input from "../Input";
import ModalCategory from "../../Fragments/ModalCategory";

const CategoryDropdown = (props) => {
    const { category, children } = props;

    const [open, setOpen] = useState(false);
    const handleDropdown = () => setOpen(!open);

    return (
        <>
            <div
                className={`px-4 text-slate-700 cursor-pointer hover:bg-light-green hover:text-white ${
                    open && "bg-light-green text-white"
                }`}
                onClick={handleDropdown}>
                <div
                    className={`flex justify-between items-center px-2.5 py-2.5 border-b border-b-slate-300 hover:border-b ${
                        open && "bg-light-green text-white border-b-primary"
                    }`}>
                    <div className="flex items-center gap-2.5">
                        <ListBulletIcon className="w-5 h-5" />
                        <p>{category}</p>
                    </div>
                    {/* <ChevronDownIcon className="w-3 h-3" /> */}
                    <div className="flex gap-2">
                        <Button
                            onClick={() =>
                                document.getElementById("edit").showModal()
                            }>
                            <PencilIcon className="w-5" />
                        </Button>
                        <ModalCategory
                            id="edit"
                            title="Edit Category"
                            btn="Save"
                            variants="bg-light-green">
                            <Input
                                type="text"
                                name="category"
                                placeholder="Insert a New Category"
                                variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                            />
                        </ModalCategory>
                        <Button
                            onClick={() =>
                                document.getElementById("delete").showModal()
                            }>
                            <TrashIcon className="w-5" />
                        </Button>
                        <ModalCategory
                            id="delete"
                            title="Delete Category"
                            btn="Delete"
                            variants="bg-light-red">
                            <p className="flex">
                                Are you sure you want to delete
                                <p className="font-semibold pl-1">
                                    "this Category ?"
                                </p>
                            </p>
                        </ModalCategory>
                    </div>
                </div>
            </div>
            {open && children}
        </>
    );
};

const SubCategory = (props) => {
    const { subCategory = "Sub Kategori", id } = props;

    return (
        <>
            <div className="ps-10 pe-4 text-slate-700 cursor-pointer hover:bg-light-green hover:text-white">
                <div className="flex justify-between items-center px-2.5 py-2.5 border-b border-b-slate-300 hover:border-b-green">
                    <Link
                        // to={`/products/${id}`}
                        className="flex items-center gap-2.5">
                        <HashtagIcon className="w-5 h-5" />
                        <p>{subCategory}</p>
                    </Link>

                    <Link>
                        <div className="flex gap-2">
                            <Button
                                onClick={() =>
                                    document
                                        .getElementById("editSub")
                                        .showModal()
                                }>
                                <PencilIcon className="w-5" />
                            </Button>
                            <ModalCategory
                                id="editSub"
                                title="Edit Sub Category"
                                btn="Save"
                                variants="bg-light-green">
                                <Input
                                    type="text"
                                    name="subcategory"
                                    placeholder="Insert a New Sub Category"
                                    variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                />
                            </ModalCategory>

                            <Button
                                onClick={() =>
                                    document
                                        .getElementById("deleteSub")
                                        .showModal()
                                }>
                                <TrashIcon className="w-5" />
                            </Button>
                            <ModalCategory
                                id="deleteSub"
                                title="Delete Sub Category"
                                btn="Delete"
                                variants="bg-light-red">
                                <p className="flex">
                                    Are you sure you want to delete
                                    <p className="font-semibold pl-1">
                                        "this Sub Category ?"
                                    </p>
                                </p>
                            </ModalCategory>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="ps-10 pe-4 text-slate-700 cursor-pointer hover:bg-light-green hover:text-white">
                <div className="px-2.5 py-2.5 border-b border-b-slate-300 hover:border-b-green">
                    <div className="flex items-center gap-2.5">
                        <Button
                            type="button"
                            variants="flex items-center gap-2"
                            onClick={() =>
                                document.getElementById("addSub").showModal()
                            }>
                            <PlusIcon className="w-5 h-5" />
                            Add Sub Category
                        </Button>
                        <ModalCategory
                            id="addSub"
                            title="Add Sub Category"
                            btn="Save"
                            variants="bg-light-green">
                            <Input
                                type="text"
                                name="subcategory"
                                variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                placeholder="Insert Sub Category Name"
                            />
                        </ModalCategory>
                    </div>
                </div>
            </div>
        </>
    );
};

CategoryDropdown.SubCategory = SubCategory;

export default CategoryDropdown;
