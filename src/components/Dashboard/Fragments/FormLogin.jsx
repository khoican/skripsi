import { useState } from "react";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import Label from "../Elements/Input/Label";
import { EyeIcon } from "@heroicons/react/24/outline";

const FormLogin = () => {
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(<EyeIcon />);

    const show = () => {
        type === "password" ? setType("text") : setType("password");
        icon === <EyeIcon /> ? setIcon(<EyeIcon />) : setIcon(<EyeIcon />);
    };
    return (
        <form action="" method="">
            <div className="h-screen">
                <div className="rounded-lg shadow-lg sm:w-[500px] lg:w-[900px] flex justify-center sm:pr-10 lg:pr-0 pl-10 mx-auto xl:translate-y-[3%] lg:translate-y-[3%] sm:translate-y-[15%] md:translate-y-[15%]   sm:gap-0 lg:gap-10">
                    <div>
                        <h1 className="font-semibold text-2xl text-dark-green pb-3 pt-10">
                            Login
                        </h1>
                        <div className="text-sm">
                            <p>
                                Welcome to Admin Panel E-Catalogue "AS-SAKINAH
                                MART",
                            </p>
                            <p>
                                before you can access feature in this page,
                                please login first
                            </p>
                        </div>
                        <div className="pt-6">
                            <div>
                                <Label
                                    htmlFor="username"
                                    variants="font-semibold">
                                    Username
                                </Label>
                            </div>
                            <div className="pt-2">
                                <Input
                                    variants="rounded-lg md:w-[352px] lg:w-[345px] ring-1 ring-dark-green focus:ring-1 focus:outline-none focus:ring-light-green transition-all ease-in-out 5s py-2 px-3"
                                    type="text"
                                    name="username"
                                    placeholder="Your Username"
                                />
                            </div>
                            <div className="pt-4">
                                <Label
                                    htmlFor="password"
                                    variants="font-semibold">
                                    Password
                                </Label>
                            </div>
                            <div className="pt-2 flex">
                                <Input
                                    variants="rounded-lg ring-1 w-full ring-dark-green focus:outline-none focus:ring-1 focus:ring-light-green transition-all ease-in-out 5s py-2 px-3"
                                    type={type}
                                    name="password"
                                    placeholder="**********"
                                />
                                <Button
                                    type="button"
                                    variants="relative w-5 right-8 hover:text-light-green transition ease-in 5s"
                                    onClick={show}>
                                    {icon}
                                </Button>
                            </div>
                        </div>
                        <div className="pt-6 grid ">
                            <div className="pt-2 text-sm text-right">
                                <p>
                                    Please check your username and password
                                    again before <br /> continuing the login
                                    process
                                </p>
                            </div>
                            <div className="pt-4 pb-4 text-right">
                                <Button
                                    type="submit"
                                    variants="py-1 px-5 rounded-md bg-light-green text-white">
                                    Login
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="sm:hidden md:hidden lg:block xl:block">
                        <img
                            src="/public/images/AuthLogo.png"
                            className="h-full rounded-r-lg"
                            alt="AuthLogo"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormLogin;
