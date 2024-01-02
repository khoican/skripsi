import {
    Squares2X2Icon,
    ShoppingBagIcon,
    ShoppingCartIcon,
    ListBulletIcon,
} from "@heroicons/react/24/solid";
import SidebarListMenu from "./listMenu";
import LogoImage from "./Logo";

const Sidebar = () => {
    return (
        <>
            <div
                id="sideNav"
                className="lg:block hidden bg-white w-64 h-screen fixed rounded-none shadow-lg">
                <div className="pt-4 pr-4 pl-4">
                    <div className="flex justify-center pb-4">
                        <LogoImage />
                    </div>
                    <h2 className="text-center font-bold text-lg">
                        AS-SAKINAH MART
                    </h2>
                    <p className="text-center font-bold text-sm">
                        KOPWAN AISIYAH JEMBER
                    </p>
                </div>
                <div className="p-4 space-y-4">
                    <SidebarListMenu
                        menu="Dashboard"
                        icon={<Squares2X2Icon className="w-5" />}
                        variants="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-dark-green active:bg-dark-green"
                    />
                    <SidebarListMenu
                        menu="Product"
                        icon={<ShoppingBagIcon className="w-5" />}
                        variants="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray"
                    />
                    <SidebarListMenu
                        menu="Order"
                        icon={<ShoppingCartIcon className="w-5" />}
                        variants="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray"
                    />
                    <SidebarListMenu
                        menu="Category"
                        icon={<ListBulletIcon className="w-5" />}
                        variants="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-gray"
                    />
                </div>
            </div>
        </>
    );
};

export default Sidebar;
