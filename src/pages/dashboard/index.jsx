import Header from "../../components/Dashboard/Elements/Header";
import DashboardOverviewLayouts from "../../components/Dashboard/Layouts/DashboardOverviewLayouts";

function Dashboard() {
    return (
        <>
            <div className="bg-white lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
                <Header title="Dashboard" linkPage="Dashboard" />
                <DashboardOverviewLayouts />

            </div>
        </>
    );
}

export default Dashboard;
