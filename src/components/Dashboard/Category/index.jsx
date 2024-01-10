import CategoryDropdown from "./CategoryDropdown";

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
