import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Input from "../Input";

const SearchBar = () => {
    return (
        <>
            <form action="">
                <Input
                    variants="w-3/4 px-5 py-1 rounded-lg ring-1 ring-dark-green"
                    type="text"
                    name="productname"
                    placeholder="Product Name"
                />

                <button className="relative right-8">
                    <MagnifyingGlassIcon className="w-6 h-5 pt-1" />
                </button>
            </form>
        </>
    );
};

export default SearchBar;
