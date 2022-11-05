import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPi = createApi({
  reducerPath: "productAPi", // cache will be store in this reducer path
  baseQuery: fetchBaseQuery({ baseUrl: `https://fakestoreapi.com/` }), // base url for api
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({ url: `/products`, method: "GET" }), // builder.mutation is for updation and deletion and builder.query is for getting data
    }), // by default method is get
    getProductById: builder.query({
      query: (id) => ({ url: `/products/${id}`, method: "GET" }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({ url: `/products/${id}`, method: "DELETE" }),
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/products`,
        method: "POST",
        body: newProduct,
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
} = productAPi; //useGetAllProductsQuery this hook is automatically generated
