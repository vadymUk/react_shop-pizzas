import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    cart: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findItem = state.cart.find(
                (obj) => obj.id === action.payload.id
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.cart.push(action.payload);
            }
            state.totalPrice = state.cart.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
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
        totalPricePlus: (state) => {
            state.totalPrice = state.cart.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
        },
        totalPriceMinus: (state, action) => {
            state.totalPrice = state.totalPrice - action.payload;
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((obj) => obj.id !== action.payload);
        },
    },
});

export const {
    addToCart,
    plusItem,
    minusItem,
    totalPricePlus,
    totalPriceMinus,
    removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
