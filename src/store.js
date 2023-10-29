import { configureStore } from '@reduxjs/toolkit'
import cartReduser from './features/cart/cartSlice'
import modalSlice from './features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    cart: cartReduser,
    modal: modalSlice,
  },
})
