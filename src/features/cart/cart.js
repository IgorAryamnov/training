import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      let checkRepetitions = state.itemsInCart.find(
        (value) => value.id === action.payload.id
      );

      if (checkRepetitions === undefined) {
        state.itemsInCart.push(action.payload);
      } else {
        checkRepetitions.count++;
      }
    },
    deleteProduct: (state, action) => {
      let index = state.itemsInCart.findIndex(
        (value) => value.id === action.payload.id
      );
      state.itemsInCart.splice(index, 1);
    },
    productCountIncrement: (state, action) => {
      let index = state.itemsInCart.findIndex(
        (value) => value.id === action.payload.id
      );
      state.itemsInCart[index].count++;
    },
    productCountDecrement: (state, action) => {
      let index = state.itemsInCart.findIndex(
        (value) => value.id === action.payload.id
      );
      if (state.itemsInCart[index].count > 0) {
        state.itemsInCart[index].count--;
      }
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  productCountIncrement,
  productCountDecrement,
} = cartSlice.actions;

export default cartSlice.reducer;
