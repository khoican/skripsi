import Header from "../../components/Dashboard/Elements/Header";
import ProductLayouts from "../../components/Dashboard/Layouts/ProductLayouts";

function DashboardProductDetails() {
    return (
        <>
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
