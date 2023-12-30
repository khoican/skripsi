import Header from "../../components/Dashboard/Header";
import Input from "../../components/Dashboard/Input";
import Label from "../../components/Dashboard/Input/Label";
import Sidebar from "../../components/Dashboard/Sidebar/index";
import Select from "../../components/Dashboard/Select";
import Option from "../../components/Dashboard/Select/option";

const Data = [
    {
        id: 1,
        name: "Category 1",
    },
    {
        id: 2,
        name: "Category 1",
    },
    {
        id: 3,
        name: "Category 1",
    },
    {
        id: 4,
        name: "Category 1",
    },
];

function DashboardProduct() {
    return (
        <>
            <Sidebar />

            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">
                <Header
                    title="Product Detail"
                    linkPage="Product / Product Detail"
                />
                <div className="flex justify-between gap-5 py-6 items-stretch">
                    <div className="w-2/4 bg-green-300 rounded-lg shadow-md">
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
                                        {/* <Option
                                            value="1"
                                            title="Category 1"
                                            disabled
                                        />
                                        <Option
                                            value="2"
                                            title="Category 2"
                                            disabled
                                        />
                                        <Option
                                            value="3"
                                            title="Category 3"
                                            disabled
                                        />
                                        <Option
                                            value="4"
                                            title="Category 4"
                                            disabled
                                        /> */}

                                        {Data.map((item) => (
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
                                <div className="pt-2">
                                    <Select
                                        variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                        name="category"
                                        title="Category">
                                        <Option
                                            value="1"
                                            title="Sub Category 1"
                                            disabled
                                        />
                                        <Option
                                            value="2"
                                            title="Sub Category 2"
                                            disabled
                                        />
                                        <Option
                                            value="3"
                                            title="Sub Category 3"
                                            disabled
                                        />
                                        <Option
                                            value="4"
                                            title="Sub Category 4"
                                            disabled
                                        />
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-500">
                        <Label title="Image" />
                        <div className="">
                            <Input />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardProduct;
