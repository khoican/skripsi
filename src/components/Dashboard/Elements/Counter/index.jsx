import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {
//     incrementCount,
//     decrementCount,
//     updateCount,
// } from "../../../../state/actions/counter";
import {
    increment,
    decrement,
    updateAmount,
} from "../../../../redux/slices/counterSlices";
import Button from "../Button";
import Input from "../Input";

const Counter = () => {
    const dispatch = useDispatch();
    const amount = useSelector((state) => state.counter.amount);
    const [amountInput, setAmountInput] = useState(amount);

    const handleIncrement = () => {
        dispatch(increment(1));
        setAmountInput(amount + 1);
    };

    const handleDecrement = () => {
        dispatch(decrement(1));
        setAmountInput(Math.max(0, amount - 1));
    };

    const handleAmountUpdate = (e) => {
        const newAmount = parseInt(e.target.value);
        dispatch(updateAmount(newAmount));
        setAmountInput(newAmount);
    };
    return (
        <>
            <div className="flex rounded-lg border-0 ring-dark-green ring-1 focus:ring-1 focus:outline-none focus:ring-light-green transition ease-in-out 5s">
                <Button
                    type="button"
                    onClick={handleDecrement}
                    variants="px-2 font-bold text-2xl">
                    -
                </Button>
                <div className="px-2 py-1">
                    <Input
                        type="number"
                        variants="w-[50px] text-center focus:outline-none text-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        value={amountInput}
                        onChange={(e) => setAmountInput(e.target.value)}
                        onKeyPress={handleAmountUpdate}
                    />
                </div>
                <Button
                    type="button"
                    onClick={handleIncrement}
                    variants="px-2 font-semibold text-2xl">
                    +
                </Button>
            </div>
        </>
    );
};

export default Counter;
