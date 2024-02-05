import TrashIcon from "../../../assets/img/icon/TrashIcon/TrashIcon.png";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import Input from "../Elements/Input";
import Label from "../Elements/Input/Label";
import Select from "../Elements/Select";
import Option from "../Elements/Select/option";
import Textarea from "../Elements/Textarea";
import ImageProduct from "../../../../public/images/Rectangle 11.png";
import Button from "../Elements/Button";
import Counter from "../Elements/Counter";
import ModalProduct from "./ModalProduct";

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

const FormProduct = () => {
    return (
        <form action="">
            <div className="flex justify-between">
                <div className="w-2/4">
                    <Label variants="font-semibold" htmlFor="productname">
                        Product Name
                    </Label>
                    <div className="pt-2">
                        <Input
                            variants="rounded-lg ring-1 border-0 w-full ring-dark-green focus:ring-1 focus:outline-none focus:ring-light-green transition ease-in-out 5s py-2 px-3"
                            type="text"
                            name="productname"
                            placeholder="Insert Product Name"
                        />
                    </div>
                    <div className="flex justify-start gap-2 ">
                        <div className="w-full pt-4">
                            <Label variants="font-semibold" htmlFor="category">
                                Category
                            </Label>
                            <div className="pt-2">
                                <Select
                                    variants="rounded-lg ring-1 border-0 w-full ring-dark-green focus:ring-1 focus:outline-none focus:ring-light-green transition ease-in-out 5s py-2 px-3"
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
                        <div className="w-full pt-4">
                            <Label
                                variants="font-semibold"
                                htmlFor="subcategory"
                                title="Sub Category">
                                Sub Category
                            </Label>
                            <div className="pt-2 pb-2">
                                <Select
                                    variants="rounded-lg ring-1 border-0 w-full ring-dark-green focus:ring-1 focus:outline-none focus:ring-light-green transition ease-in-out 5s py-2 px-3"
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
                    <div className="pt-4">
                        <div className="pb-3">
                            <Label
                                variants="font-semibold pb-2"
                                htmlFor="productdescription">
                                Description
                            </Label>
                        </div>
                        <div className="pb-3">
                            <Textarea
                                variants="resize-none border border-dark-green rounded-lg w-full"
                                name="productdescription"
                                cols="66"
                                rows="10"
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="pt-3 mr-2">
                            <Label
                                htmlFor="productstock"
                                variants="font-semibold">
                                Stock
                            </Label>
                            <div className="pt-3">
                                <Counter />
                            </div>
                        </div>
                        <div className="w-full pt-3 ml-2">
                            <Label
                                htmlFor="productprice"
                                variants="font-semibold">
                                Price
                            </Label>
                            <div className="pt-3 ">
                                <Input
                                    type="number"
                                    variants="w-full rounded-lg border border-dark-green px-3 py-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/5">
                    <div className="flex justify-center">
                        <img src={ImageProduct} alt="" />
                    </div>
                    <div className="py-7">
                        <div className="pb-1">
                            <Label htmlFor="thumbnail" variants="font-semibold">
                                Thumbnail
                            </Label>
                        </div>
                        <div className="pt-1 pb-1">
                            <Input
                                type="file"
                                variants="rounded-lg ring-1 ring-black border-0 w-full py-2 px-3"
                                name="thumbnail"
                                placeholder="Choose Image"
                            />
                            <p className="flex text-slate-500">
                                <p className="text-light-red pr-2">*</p>
                                Please input file with jpg, jpeg, png, gif
                                extension
                            </p>
                            <div className="pt-4">
                                <div className="rounded-lg py-2 px-3 flex justify-center">
                                    <DocumentTextIcon className="w-9 pr-2" />
                                    <p>assakinah-22-3-23-145601.jpg</p>
                                    <img
                                        src={TrashIcon}
                                        alt=""
                                        className="h-5 my-auto pl-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pb-1 pt-4">
                            <Label
                                htmlFor="imageproduct"
                                variants="font-semibold">
                                Photo Product
                            </Label>
                        </div>
                        <div className="pt-1 pb-1">
                            <Input
                                type="file"
                                variants="rounded-lg ring-1 ring-black border-0 w-full py-2 px-3"
                                name="imageproduct"
                                placeholder="Choose Image"
                            />
                            <p className="flex text-slate-500">
                                <p className="text-light-red pr-2">*</p>
                                Please input file with jpg, jpeg, png, gif
                                extension
                            </p>
                            <div className="pt-4">
                                <div className="rounded-lg py-2 px-3 flex justify-center">
                                    <DocumentTextIcon className="w-9 pr-2" />
                                    <p>assakinah-22-3-23-145601.jpg</p>
                                    <img
                                        src={TrashIcon}
                                        alt=""
                                        className="h-5 my-auto pl-2"
                                    />
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="rounded-lg py-2 px-3 flex justify-center">
                                    <DocumentTextIcon className="w-9 pr-2" />
                                    <p>assakinah-22-3-23-145601.jpg</p>
                                    <img
                                        src={TrashIcon}
                                        alt=""
                                        className="h-5 my-auto pl-2"
                                    />
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="rounded-lg py-2 px-3 flex justify-center">
                                    <DocumentTextIcon className="w-9 pr-2" />
                                    <p>assakinah-22-3-23-145601.jpg</p>
                                    <img
                                        src={TrashIcon}
                                        alt=""
                                        className="h-5 my-auto pl-2"
                                    />
                                </div>
                            </div>
                            <div className="pt-2">
                                <p className="flex justify-center py-4">
                                    Double check the data you entered before add
                                    action for this product
                                </p>
                                <div className="flex justify-end">
                                    <div className="px-2">
                                        <Button
                                            type="submit"
                                            variants="py-2 px-5 rounded-lg bg-light-orange text-white">
                                            Cancel
                                        </Button>
                                    </div>
                                    <div className="px-2">
                                        <Button
                                            type="button"
                                            variants="py-2 px-5 rounded-lg bg-light-red text-white"
                                            onClick={() =>
                                                document
                                                    .getElementById("delete")
                                                    .showModal()
                                            }>
                                            Delete
                                        </Button>
                                        <ModalProduct></ModalProduct>
                                    </div>
                                    <div className="px-2">
                                        <Button
                                            type="submit"
                                            variants="py-2 px-5 rounded-lg bg-light-green text-white">
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormProduct;
