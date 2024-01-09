import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Dashboard/Button";
import Header from "../../components/Dashboard/Header";
import SearchInput from "../../components/Dashboard/SearchInput";
import Sidebar from "../../components/Dashboard/Sidebar";

function DashboardOrder() {
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
            </div>
        </>
    );
}

export default DashboardOrder;
