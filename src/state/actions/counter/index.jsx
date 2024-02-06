import {
    increment,
    decrement,
    update_amount,
} from "./../../actions/index.types";

let count = 0;

export const incrementCount = () => {
    return {
        type: increment,
        count: ++count,
        payload: count,
    };
};

export const decrementCount = () => {
    if (count > 0) {
        return {
            type: decrement,
            count: --count,
            payload: count,
        };
    } else {
        return {
            type: decrement,
            count: 0,
            payload: count,
        };
    }
};

export const updateCount = () => {
    return {
        type: update_amount,
        count: count,
        payload: count,
    };
};
