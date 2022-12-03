import { configureStore } from "@reduxjs/toolkit";

import { Global } from "./reducers";

export const store = configureStore({
  reducer: {
    global: Global,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
