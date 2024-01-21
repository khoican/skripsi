import Sidebar from "../../components/Dashboard/Elements/Sidebar";
import Header from "../../components/Dashboard/Elements/Header";
import DashboardOverviewLayouts from "../../components/Dashboard/Layouts/DashboardOverviewLayouts";

function Dashboard() {
    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">
                <Header title="Dashboard" linkPage="Dashboard" />
                <DashboardOverviewLayouts />
            </div>
        </>
    );
}

export default Dashboard;
