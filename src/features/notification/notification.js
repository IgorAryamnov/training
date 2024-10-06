import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notifications: [],
  },
  reducers: {
    addNotification(state, action) {
      state.notifications.push(action.payload);
    },
    deleteNotification(state) {
      state.notifications.splice(0, 1);
    },
  },
});

export const { addNotification, deleteNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
