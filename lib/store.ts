import { configureStore } from '@reduxjs/toolkit'
import exampleSlice from './features/example/exampleSlice'
export const Store =  configureStore({
    reducer: {
      example:exampleSlice
    },
  })

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch