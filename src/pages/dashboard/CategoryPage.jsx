import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Dashboard/Elements/Button";
import Header from "../../components/Dashboard/Elements/Header";
import SearchInput from "../../components/Dashboard/Elements/SearchInput";
import Category from "../../components/Dashboard/Elements/Category";
import ModalCategory from "../../components/Dashboard/Fragments/ModalCategory";
import Input from "../../components/Dashboard/Elements/Input";
import { useEffect, useState } from "react";
// import axios from "axios";
import { postCategory } from "../../config/services/category";

function DashboardCategory() {
    const [category, setCategory] = useState("");

    function handleCategory(e) {
        setCategory(e.target.value);
    }

    console.log(category);

    function handleSubmit() {
        postCategory({
            name: category,
        });
    }

    return (
        <>
            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
                <Header title="Category" linkPage="Category" />
                <div className="flex justify-between mt-5 px-7">
                    <div className="my-auto w-2/4">
                        <SearchInput name="category" placeholder="Category" />
                    </div>

                    <Button
                        type="button"
                        variants="bg-light-green rounded-md py-2 px-3 text-white flex"
                        onClick={() =>
                            document.getElementById("add").showModal()
                        }>
                        Add Category
                        <PlusIcon className="w-8 pl-2 mx-auto" />
                    </Button>
                    <ModalCategory
                        variants="bg-light-green hover:bg-dark-green transition ease-in-out 5s"
                        id="add"
                        title="Add Category"
                        btn="Save">
                        <Input
                            variants="rounded-lg ring-1 border-0 w-full  ring-dark-green focus:ring-1 focus:outline-none focus:ring-light-green transition ease-in-out 5s py-2 px-3"
                            type="text"
                            name="categoryname"
                            placeholder="Insert Category Name"
                            onChange={handleCategory}
                        />
                        <div className="">
                            <Button
                                type="submit"
                                variants="mr-2 px-4 py-2 border border-light-red hover:text-red-700 hover:border-red-700 transition ease-in-out 5s rounded-lg text-light-red">
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variants="px-4 py-2 rounded-lg bg-light-green text-white"
                                onClick={handleSubmit}>
                                Save
                            </Button>
                        </div>
                    </ModalCategory>
                </div>
                <div className="my-10 px-7">
                    <div className="py-4 px-4 w-full border rounded-lg bg-white shadow-lg ">
                        <Category />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardCategory;
