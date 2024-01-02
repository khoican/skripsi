import DropdownMenu from "../DropdownProfileMenu";

const Header = (props) => {
    const { title, linkPage } = props;
    return (
        <>
            <div className="border-none pt-2 mb-2 px-3">
                <div className="flex justify-between">
                    <div className="justify-center">
                        <h1 className="font-bold text-3xl">{title}</h1>
                        <p className="text-gray-400">{linkPage}</p>
                    </div>

                    <div className="items-center pr-6">
                        <DropdownMenu />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
