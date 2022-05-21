import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/products'
import { productsApi } from './apis/productsApi'
import { userApi } from './apis/userApi'
import { cartApi } from './apis/cartApi'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer ,

    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,

  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( productsApi.middleware, userApi.middleware, cartApi.middleware )
})
