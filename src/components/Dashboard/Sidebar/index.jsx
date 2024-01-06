import LogoImage from "./Logo";
import Navigation from "./Navigation";

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
                    <Navigation />
                </div>
            </div>
        </>
    );
};

export default Sidebar;
