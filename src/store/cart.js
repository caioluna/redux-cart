import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
  products: [],
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const product = action.payload
      const productInCart = state.products.find(item => item.id === product.id)
      state.totalQuantity++

      if (!productInCart) {
        state.products.push({
          id: product.id,
          title: product.title,
          price: product.price,
          descriptions: product.description,
          quantity: 1,
          totalPrice: product.price
        })
      } else {
        productInCart.quantity++
        productInCart.totalPrice = productInCart.price * productInCart.quantity
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload
      const currentProduct = state.products.find(item => item.id === id)
      state.totalQuantity--

      if (currentProduct.quantity === 1) {
        state.products = state.products.filter(item => item.id !== id)
      } else {
        currentProduct.quantity--
        currentProduct.totalPrice = currentProduct.totalPrice - currentProduct.price
      }
    }
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer