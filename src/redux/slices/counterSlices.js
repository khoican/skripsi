import { createSlice } from "@reduxjs/toolkit"


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        amount: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.amount += action.payload
        },
        decrement: (state, action) => {
            state.amount = Math.max(0, state.amount - action.payload)
        },
        updateAmount:(state, action) => {
            state.amount = action.payload
        }
    }
})

export const { increment, decrement, updateAmount } = counterSlice.actions
export default counterSlice.reducer