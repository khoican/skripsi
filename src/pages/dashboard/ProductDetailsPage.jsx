import Header from "../../components/Dashboard/Elements/Header";
import Sidebar from "../../components/Dashboard/Elements/Sidebar/";
import Input from "../../components/Dashboard/Elements/Input";
import Label from "../../components/Dashboard/Elements/Input/Label";
import Select from "../../components/Dashboard/Elements/Select";
import Option from "../../components/Dashboard/Elements/Select/option";
import Textarea from "../../components/Dashboard/Elements/Textarea";
import ImageProduct from "../../../public/images/Rectangle 11.png";
import FormProduct from "../../components/Dashboard/Fragments/FormProduct";
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
