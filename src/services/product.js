import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPi = createApi({
  reducerPath: "productAPi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://fakestoreapi.com/` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({ url: `/products`, method: "GET" }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productAPi;
