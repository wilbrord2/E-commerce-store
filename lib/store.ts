import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice/authSlice'
import productSlice from './features/productSlice/productSlice'
export const Store =  configureStore({
    reducer: {
      auth:authSlice,
      product:productSlice
    },
  })

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch