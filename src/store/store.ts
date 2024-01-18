import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		// Add other reducers here if needed
	},
});

export type RootState = ReturnType<typeof store.getState>;