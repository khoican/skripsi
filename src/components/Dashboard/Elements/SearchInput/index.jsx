import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Input from "../Input";

const SearchInput = (props) => {
    const { placeholder, name } = props;
    return (
        <>
            <form action="">
                <Input
                    variants="w-3/4 px-5 py-1 rounded-lg ring-1 ring-dark-green"
                    type="text"
                    name={name}
                    placeholder={placeholder}
                />

                <button className="relative right-8">
                    <MagnifyingGlassIcon className="w-6 h-5 pt-1" />
                </button>
            </form>
        </>
    );
};

export default SearchInput;
