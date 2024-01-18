import { useState } from "react";
import Button from "../Button";

const Counter = () => {
    const [count, setCount] = useState(0);

    const decreaseCount = (e) => {
        e.preventDefault();
        setCount(Math.max(0, count - 1));
    };

    const increaseCount = (e) => {
        e.preventDefault();
        setCount(count + 1);
    };

    return (
        <>
            <div className="flex border rounded-lg border-black">
                <Button
                    onClick={decreaseCount}
                    variants="px-4 font-bold text-2xl">
                    -
                </Button>
                <div className="px-2 py-1">
                    <p className="font-semibold text-2xl">{count}</p>
                </div>
                <Button
                    onClick={increaseCount}
                    variants="font-semibold text-2xl px-4">
                    +
                </Button>
            </div>
        </>
    );
};

export default Counter;
