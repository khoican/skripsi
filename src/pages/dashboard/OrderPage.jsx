import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Dashboard/Elements/Button";
import Header from "../../components/Dashboard/Elements/Header";
import SearchInput from "../../components/Dashboard/Elements/SearchInput";
import Sidebar from "../../components/Dashboard/Elements/Sidebar";

function DashboardOrder() {
    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-5">
                <Header title="User" linkPage="User" />
                <div className="flex justify-between mt-5 px-7">
                    <div className="my-auto w-2/4">
                        <SearchInput name="order" placeholder="Order" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardOrder;
