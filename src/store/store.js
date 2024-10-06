import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cart";
import notificationReducer from "../features/notification/notification";

export default configureStore({
  reducer: {
    cart: cartReducer,
    notification: notificationReducer,
  },
});
