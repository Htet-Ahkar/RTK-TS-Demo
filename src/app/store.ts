import { configureStore } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";

import cakeReducer from "../features/cakes/cakeSlice";
import icecreamReducer from "../features/iceCream/icecreamSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
