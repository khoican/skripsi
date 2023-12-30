import { HomeIcon, ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"
import Logo from "../../elements/Logo/Index"
import SearchInput from "../../elements/SearchInput/Index"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="px-28 py-5 flex justify-between items-center border-b border-b-slate-500 shadow-lg">
            <Logo />
            <SearchInput />

            <div className="flex justify-between w-1/6">
                <Link to="/">
                    <HomeIcon className="w-8 h-8 hover:text-green" />
                </Link>
                <Link to="/products">
                    <ShoppingBagIcon  className="w-8 h-8 hover:text-green" />
                </Link>
                <Link to="/cart">
                    <ShoppingCartIcon className="w-8 h-8 hover:text-green" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar