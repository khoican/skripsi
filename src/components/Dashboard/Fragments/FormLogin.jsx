import Button from "../Elements/Button";
import Input from "../Elements/Input";
import Label from "../Elements/Input/Label";

const FormLogin = () => {
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
                                    variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
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
                            <div className="pt-2">
                                <Input
                                    variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                                    type="password"
                                    name="password"
                                    placeholder="**********"
                                />
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
