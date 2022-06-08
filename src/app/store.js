import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postReducer } from "../features";

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});

export { store };
