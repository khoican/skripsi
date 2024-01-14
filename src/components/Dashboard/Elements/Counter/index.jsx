import { useState } from "react";
import Button from "../Elements/Button";

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
            <div className="flex border px-10">
                <Button onClick={decreaseCount} variants="p">
                    -
                </Button>
                <div className="px-2">
                    <p>{count}</p>
                </div>
                <Button onClick={increaseCount}>+</Button>
            </div>
        </>
    );
};

export default Counter;
