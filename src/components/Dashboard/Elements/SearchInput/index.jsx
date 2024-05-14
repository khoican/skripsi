import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Input from "../Input";
import Label from "../Input/Label";

const SearchInput = (props) => {
    const { id, placeholder, name, htmlFor } = props;
    return (
        <>
            <form action="">
                <div className="flex items-center">
                    <Input
                        variants="w-3/4 px-5 py-1 rounded-lg ring-1 ring-dark-green focus:outline-none focus:ring-light-green transition ease-in-out 5s"
                        type="text"
                        name={name}
                        id={id}
                        placeholder={placeholder}
                    />
                    <div className="relative right-8">
                        <Label htmlFor={htmlFor}>
                            <MagnifyingGlassIcon className="w-6 h-5 cursor-pointer" />
                        </Label>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SearchInput;
