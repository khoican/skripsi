import Header from "../../components/Dashboard/Elements/Header";
import Sidebar from "../../components/Dashboard/Elements/Sidebar/";
import ProductDetails from "../../components/Dashboard/Layouts/ProductDetails";

function DashboardProductDetails() {
    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-5">
                <Header
                    title="Product Details"
                    linkPage="Product / Product Details"
                />
                <ProductDetails />
            </div>
        </>
    );
}

export default DashboardProductDetails;
