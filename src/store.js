import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { productAPi } from "./services/product.js";
import { cartReducer } from "./redux/CartSlice.js";
import storage from "redux-persist/lib/storage";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, cartReducer);
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productAPi.reducerPath]: productAPi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }).concat(productAPi.middleware), // this will provide advantage of caching
});

setupListeners(store.dispatch);
// export const persistor = persistStore(store);
