import { configureStore } from '@reduxjs/toolkit'
import  CounterSlice  from './slices/CounterSclice'

export const store = configureStore({
  reducer: {
    counter: CounterSlice
  },
})

