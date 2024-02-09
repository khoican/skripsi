import Header from "../../components/Dashboard/Elements/Header";
import Sidebar from "../../components/Dashboard/Elements/Sidebar/";
import ProductLayouts from "../../components/Dashboard/Layouts/ProductLayouts";

function DashboardProductDetails() {
    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
                <Header
                    title="Product Details"
                    linkPage="Product / Product Details"
                />
                <ProductLayouts />
            </div>
        </>
    );
}

export default DashboardProductDetails;
