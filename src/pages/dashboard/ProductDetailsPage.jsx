import Header from "../../components/Dashboard/Header";
import Sidebar from "../../components/Dashboard/Sidebar/index";
import Input from "../../components/Dashboard/Input";
import Label from "../../components/Dashboard/Input/Label";
import Select from "../../components/Dashboard/Select";
import Option from "../../components/Dashboard/Select/option";
import Textarea from "../../components/Dashboard/Textarea";
import ImageProduct from "../../../public/images/Rectangle 11.png";

const CategoryData = [
    {
        id: 1,
        name: "Category 1",
    },
    {
        id: 2,
        name: "Category 2",
    },
    {
        id: 3,
        name: "Category 3",
    },
    {
        id: 4,
        name: "Category 4",
    },
];

const SubCategoryData = [
    {
        id: 1,
        name: "Sub Category 1",
    },
    {
        id: 2,
        name: "Sub Category 2",
    },
    {
        id: 3,
        name: "Sub Category 3",
    },
    {
        id: 4,
        name: "Sub Category 4",
    },
];

function DashboardProductDetails() {
    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-5">
                <Header
                    title="Product Details"
                    linkPage="Product / Product Details"
                />
                <div className="flex justify-between py-6 items-stretch px-3">
                    <div className="w-2/4 gap-2 bg-purple-500 rounded-lg shadow-md">
                        <Label
                            variants="font-semibold"
                            htmlFor="productname"
                            title="Product Name"
                        />
                        <div className="pt-2">
                            <Input
                                className="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                type="text"
                                name="productname"
                                placeholder="Insert Product Name"
                            />
                        </div>
                        <div className="flex justify-start gap-2 pt-2">
                            <div className="w-full">
                                <Label
                                    variants="font-semibold"
                                    htmlFor="category"
                                    title="Category"
                                />
                                <div className="pt-2">
                                    <Select
                                        variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                        name="category"
                                        title="Category">
                                        <Option
                                            value="Choose Category"
                                            title="Choose Category"
                                        />
                                        {CategoryData.map((item) => (
                                            <Option
                                                key={item}
                                                value={item.id}
                                                title={item.name}
                                            />
                                        ))}
                                    </Select>
                                </div>
                            </div>
                            <div className="w-full">
                                <Label
                                    variants="font-semibold"
                                    htmlFor="subcategory"
                                    title="Sub Category"
                                />
                                <div className="pt-2 pb-2">
                                    <Select
                                        variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                        name="category"
                                        title="Category">
                                        <Option
                                            value="Choose Sub Category"
                                            title="Choose Sub Category"
                                        />
                                        {SubCategoryData.map((item) => (
                                            <Option
                                                key={item}
                                                value={item.id}
                                                title={item.name}
                                            />
                                        ))}
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <Label
                            variants="font-semibold pb-2"
                            htmlFor="productdescription"
                            title="Description"
                        />
                        <div className="pt-2">
                            {/* <Input
                                className="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                type="text"
                                name="productdescription"
                                placeholder="Description about product"
                            /> */}
                            <Textarea
                                className="resize-none rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                name="productdescription"
                                cols="70"
                                rows="10"
                            />
                        </div>
                    </div>
                    <div className="bg-purple-500 w-2/5">
                        <div className="flex justify-center">
                            <img src={ImageProduct} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardProductDetails;
