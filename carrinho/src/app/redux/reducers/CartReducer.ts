import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../../types/CartProduct";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

interface CartState {
    products: CartProduct[];
    disable: boolean;
    priceOfCart: number;
}

const initialState: CartState = {
    products: [],
    disable: true,
    priceOfCart: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    }
});

export const {  } = cartSlice.actions;

const persistConfig = {
    key: 'cart',
    storage
}

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);
export default persistedCartReducer;