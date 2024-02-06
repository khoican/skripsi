import { useSelector, useDispatch } from "react-redux";
import {
    incrementCount,
    decrementCount,
    updateCount,
} from "../../../../state/actions/counter";
import Button from "../Button";
import Input from "../Input";

const Counter = () => {
    const { amount } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCount());
    };
    const handleDecrement = () => {
        dispatch(decrementCount());
    };

    const handleAmountUpdate = (e) => {
        const newAmount = parseInt(e.target.value);
        dispatch(updateCount(newAmount));
    };

    return (
        <>
            <div className="flex rounded-lg border-0 ring-dark-green ring-1 focus:ring-1 focus:outline-none focus:ring-light-green transition ease-in-out 5s">
                <Button
                    type="button"
                    onClick={handleDecrement}
                    variants="px-4 font-bold text-2xl">
                    -
                </Button>
                <div className="px-2 py-1">
                    <Input
                        type="number"
                        variants="w-[15px] focus:outline-none text-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        value={amount}
                        onChange={handleAmountUpdate}
                    />
                    {/* <p className="font-semibold text-2xl">{amount}</p> */}
                </div>
                <Button
                    type="button"
                    onClick={handleIncrement}
                    variants="px-4 font-semibold text-2xl">
                    +
                </Button>
            </div>
        </>
    );
};

export default Counter;
