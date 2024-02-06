import { increment, decrement, update_amount } from "../../actions/index.types";

const initialState = {
    amount: 0,
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case increment:
            return {
                amount: action.count,
            };
        case decrement:
            return {
                amount: action.count,
            };
        case update_amount:
            return {
                amount: action.count,
            };
        default:
            return state;
    }
};

export default counter;
