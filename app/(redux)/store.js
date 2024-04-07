import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/app/(redux)/features/authSlice";

export const store = configureStore({
  reducer: {
    authReducer,
  },
});
