import DropdownMenu from "../DropdownProfileMenu";

const Header = (props) => {
    const {title, linkPage} = props
    return (
        <>
            <div className="border-none p-3 mb-4 shadow-md">
                <div className="flex justify-between">
                    <div className="justify-center">
                        <h1 className="font-bold text-3xl">{title}</h1>
                        <p className="text-gray-400">{linkPage}</p>
                    </div>

                    <div className="items-center">
                        <DropdownMenu />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header