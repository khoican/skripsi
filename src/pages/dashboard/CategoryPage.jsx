import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Dashboard/Elements/Button";
import Header from "../../components/Dashboard/Elements/Header";
import SearchInput from "../../components/Dashboard/Elements/SearchInput";
import Sidebar from "../../components/Dashboard/Elements/Sidebar";
import Category from "../../components/Dashboard/Elements/Category";
import ModalCategory from "../../components/Dashboard/Fragments/ModalCategory";
import Input from "../../components/Dashboard/Elements/Input";

function DashboardCategory() {
    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-5">
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
                        />
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
