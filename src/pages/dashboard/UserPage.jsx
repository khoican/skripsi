import Header from "../../components/Dashboard/Header";
import Sidebar from "../../components/Dashboard/Sidebar";

function DashboardUser() {
    return (
        <>
            <Sidebar />
            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-5">
                <Header title="User" linkPage="User" />
            </div>
        </>
    );
}

export default DashboardUser;
