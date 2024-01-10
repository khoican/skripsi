import CategoryDropdown from "./CategoryDropdown";
import { useState } from "react";

const categories = [
    {
        id: 1,
        name: "Kategori 1",
    },
    {
        id: 2,
        name: "Kategori 2",
    },
];
const subCategories = [
    {
        id: 1,
        name: "Sub Kategori 1",
        category: {
            id: 1,
            name: "Kategori 1",
        },
    },
    {
        id: 2,
        name: "Sub Kategori 2",
        category: {
            id: 2,
            name: "Kategori 2",
        },
    },
];

const Category = () => {
    return (
        <div className="w-full">
            {/* <div className="w-full px-4 py-4 bg-slate-300 rounded-t-md">
                <h1 className="font-montserrat font-semibold">KATEGORI</h1>
            </div> */}
            {categories.map((category, index) => (
                <CategoryDropdown key={index} category={category.name}>
                    {subCategories
                        .filter(
                            (subCategory) =>
                                subCategory.category.id === category.id
                        )
                        .map((item, index) => (
                            <CategoryDropdown.SubCategory
                                key={index}
                                subCategory={item.name}
                                id={item.id}
                            />
                        ))}
                </CategoryDropdown>
            ))}
        </div>
    );
};

export default Category;
