import Header from "../../components/Dashboard/Elements/Header";
import Sidebar from "../../components/Dashboard/Elements/Sidebar";
import ProfileLayouts from "../../components/Dashboard/Layouts/ProfileLayouts";

function DashboardProfilePage() {
    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
                <Header title="Change Password" linkPage="Profile" />
                <div className="mx-auto mt-5 px-7">
                    <ProfileLayouts />
                </div>
            </div>
        </>
    );
}

export default DashboardProfilePage;
