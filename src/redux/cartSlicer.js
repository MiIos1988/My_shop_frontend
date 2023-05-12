import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalCount: 0,
    totalPrice: 0
}

const cartSlicer = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart(state, action) {
            let exist = state.cart.find(el => {
                return el.id === action.payload.id
            })

            if (!exist) {
                let copyArray = [...state.cart];
                copyArray.push(action.payload)
                state.cart = [...copyArray];
                state.totalCount = state.cart.length
            } else {
                let allQuantity = action.payload.quantity;
                state.cart.map(el => el.id === action.payload.id && (el.quantity = allQuantity))
            }
        },
        removeProduct(state, action) {
            let index = state.cart.findIndex(el => el.id === action.payload)
            state.cart.splice(index, 1);
        },
        changeQuantity(state, action) {
            state.cart.map(el => el.id === action.payload.id && (el.quantity = action.payload.quantityCart))
        },
        addTotalPrice(state, action){
            state.totalPrice = action.payload
        }

    }
});

export const { addToCart, removeProduct, changeQuantity, addTotalPrice } = cartSlicer.actions;
export default cartSlicer.reducer;