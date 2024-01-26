import Header from "../../components/Dashboard/Elements/Header";
import Sidebar from "../../components/Dashboard/Elements/Sidebar";

function DashboardProfilePage() {
    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-5">
                <Header title="Change Password" linkPage="Profile" />
                <div className="flex justify-between mt-5 px-7"></div>
            </div>
        </>
    );
}

export default DashboardProfilePage;
