import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Elements/Sidebar";

const Admin = () => {
    return (
        <>
            <Sidebar />

            <Outlet />
        </>
    );
};

export default Admin;
