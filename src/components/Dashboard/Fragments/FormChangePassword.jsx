import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import Label from "../Elements/Input/Label";
import { EyeIcon } from "@heroicons/react/24/outline";

function FormChangePassword() {
    return (
        <>
            <div className="w-48 mx-auto">
                <img src="/public/images/Logo Image.png" alt="" />
            </div>
            <div className="mt-5 text-center font-bold">
                <p className="text-xl">AS-SAKINAH MART</p>
                <p className="text-">KOPWAN ‘AISIYAH JEMBER</p>
            </div>
            <div className="mt-3 w-[500px] text-justify text-sm">
                <p className="">
                    If you feel that your password is no longer secure, please
                    update it immediately. Make sure the password has a variety
                    of uppercase letters (A-Z) and lowercase letters (a-z),
                    symbols, numbers (0-9), and has a minimum length of 8
                    characters
                </p>
            </div>
            <form action="">
                <div className="mt-4 mb-2">
                    <Label htmlFor="password" variants="font-semibold">
                        Old Password
                    </Label>
                </div>
                <div className="flex">
                    <Input
                        variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                        type="password"
                        name="password"
                        placeholder="********"
                    />
                    <Button variants="relative w-5 right-8 hover:text-light-green transition ease-in 5s  pointer">
                        <EyeIcon />
                    </Button>
                </div>
                <div className="mt-4 mb-2">
                    <Label htmlFor="password" variants="font-semibold">
                        New Password
                    </Label>
                </div>
                <div className="mb-2">
                    <div className="flex">
                        <Input
                            variants="rounded-lg ring-1 border-0 w-full ring-inset ring-dark-green focus:ring-1 focus:ring-inset focus:ring-dark-green py-2 px-3"
                            type="password"
                            name="password"
                            placeholder="********"
                        />
                        <Button variants="relative w-5 right-8 hover:text-light-green transition ease-in 5s  pointer">
                            <EyeIcon />
                        </Button>
                    </div>

                    <p className="flex text-slate-500 w-[500px] text-sm mt-2 text-justify">
                        <p className="text-light-red pr-2">*</p>
                        Password must have variety of uppercase latters (A-Z),
                        lowercase letters (a-z), symbol, numbers (0-9), and has
                        minimum lenght of 8 character
                    </p>
                </div>
                <div className="flex justify-end mt-7 items-center">
                    <div className="px-2">
                        <Link
                            to="/Dashboard"
                            className="py-2 px-5 rounded-lg border border-light-red text-light-red font-semibold">
                            Cancel
                        </Link>
                    </div>
                    <div className="px-2">
                        <Button
                            type="submit"
                            variants="py-2 px-5 rounded-lg bg-light-green text-white font-semibold">
                            Change
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default FormChangePassword;
