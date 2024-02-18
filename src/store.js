import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import loadingReducer from "./features/loader/loaderSlice";
import localStorageMiddleware from "./features/user/localStorageMiddleware"; // Import your custom middleware

const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware), // Add your custom middleware
});

export default store;
