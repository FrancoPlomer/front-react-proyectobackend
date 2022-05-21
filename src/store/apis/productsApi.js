import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://backend-ecommerce-coder.herokuapp.com/api/products`
  }),

  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: () => ({ 
        url: "/",
      })
    })

  })
});


export const { useGetAllProductsQuery } = productsApi;

