import Header from "../../components/Dashboard/Elements/Header";
import Sidebar from "../../components/Dashboard/Elements/Sidebar";
import UserLayouts from "../../components/Dashboard/Layouts/UserLayouts";

function DashboardUserDetails() {
    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-5">
                <Header title="User Details" linkPage="User / User Details" />
                <UserLayouts />
            </div>
        </>
    );
}

export default DashboardUserDetails;
