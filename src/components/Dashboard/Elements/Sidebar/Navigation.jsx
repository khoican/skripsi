import { Link, useLocation } from "react-router-dom";
import {
    Squares2X2Icon,
    ShoppingBagIcon,
    ShoppingCartIcon,
    ListBulletIcon,
    UserGroupIcon,
    UserIcon,
} from "@heroicons/react/24/solid";

const Navigation = () => {
    const isActive = useLocation().pathname;

    return (
        <>
            <Link
                to="/Dashboard"
                className={`relative px-4 py-3 flex items-center rounded-lg space-x-4 ${
                    isActive == "/Dashboard"
                        ? "bg-dark-green text-white"
                        : "text-gray"
                } `}>
                <span>{<Squares2X2Icon className="w-6" />}</span>
                <p className="-mr-1 font-medium">Dashboard</p>
            </Link>
            <Link
                to="/Dashboard/User"
                className={`relative px-4 py-3 flex rounded-lg space-x-4  ${
                    isActive == "/Dashboard/User"
                        ? "bg-dark-green text-white"
                        : "text-gray" &&
                          isActive == "/Dashboard/User/UserDetails"
                        ? "bg-dark-green text-white"
                        : "text-gray"
                } `}>
                <span>{<UserGroupIcon className="w-6" />}</span>
                <p className="-mr-1 font-medium">User</p>
            </Link>
            <Link
                to="/Dashboard/Product"
                className={`relative px-4 py-3 flex rounded-lg space-x-4  ${
                    isActive == "/Dashboard/Product"
                        ? "bg-dark-green text-white"
                        : "text-gray" &&
                          isActive == "/Dashboard/Product/ProductDetails"
                        ? "bg-dark-green text-white"
                        : "text-gray"
                } `}>
                <span>{<ShoppingBagIcon className="w-6" />}</span>
                <p className="-mr-1 font-medium">Product</p>
            </Link>
            <Link
                to="/Dashboard/Order"
                className={`relative px-4 py-3 flex rounded-lg space-x-4  ${
                    isActive == "/Dashboard/Order"
                        ? "bg-dark-green text-white"
                        : "text-gray"
                } `}>
                <span>{<ShoppingCartIcon className="w-6" />}</span>
                <p className="-mr-1 font-medium">Order</p>
            </Link>
            <Link
                to="/Dashboard/Category"
                className={`relative px-4 py-3 flex rounded-lg space-x-4  ${
                    isActive == "/Dashboard/Category"
                        ? "bg-dark-green text-white"
                        : "text-gray"
                } `}>
                <span>{<ListBulletIcon className="w-6" />}</span>
                <p className="-mr-1 font-medium">Category</p>
            </Link>
            <Link
                to="/Dashboard/Role"
                className={`relative px-4 py-3 flex rounded-lg space-x-4  ${
                    isActive == "/Dashboard/Role"
                        ? "bg-dark-green text-white"
                        : "text-gray"
                } `}>
                <span>{<UserIcon className="w-6" />}</span>
                <p className="-mr-1 font-medium">Role</p>
            </Link>
        </>
    );
};

export default Navigation;
