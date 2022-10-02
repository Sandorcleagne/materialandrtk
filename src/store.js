import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { productAPi } from "./services/product.js";

export const store = configureStore({
  reducer: {
    [productAPi.reducerPath]: productAPi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPi.middleware),
});

setupListeners(store.dispatch);
