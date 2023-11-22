import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        plusItem: (state, action) => {
            const findItem = state.cart.find(
                (obj) => obj.id === action.payload
            );

            if (findItem) {
                findItem.count++;
            }
        },
        minusItem: (state, action) => {
            const findItem = state.cart.find(
                (obj) => obj.id === action.payload
            );

            if (findItem.count === 1) return;

            if (findItem) {
                findItem.count--;
            }
        },
    },
});

export const { addToCart, plusItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
