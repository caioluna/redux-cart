import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
  products: [
    // {
    //   id: 1,
    //   title: "The 7th Voyage of Sinbad",
    //   price: 7.99,
    //   description: "The 7th Voyage of Sinbad is a 1958 fantasy film directed by Nathan Juran and starring Kerwin Mathews, Kathryn Grant, Torin Thatcher, and Richard Eyer.",
    //   quantity: 3
    // },
    // {
    //   id: 2,
    //   title: "The princess and the frog",
    //   price: 9.67,
    //   description: "The Princess and the Frog is a 2009 American animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.",
    //   quantity: 2
    // },
  ],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      state.products.push({ ...action.payload, quantity: 1 })
    }
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer