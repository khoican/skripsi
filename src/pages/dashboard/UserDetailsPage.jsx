import Header from "../../components/Dashboard/Elements/Header";
import UserLayouts from "../../components/Dashboard/Layouts/UserLayouts";

function DashboardUserDetails() {
    return (
        <>
            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
                <Header title="User Details" linkPage="User / User Details" />
                <UserLayouts />
            </div>
        </>
    );
}

export default DashboardUserDetails;
