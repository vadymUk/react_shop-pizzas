import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slice/cardSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
    reducer: {
        card: cardSlice,
        cart: cartSlice,
    },
});
