import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: [],
  length: 0,
};

export const cartsSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    addToCart: (state, action) => {
      console.log({ newState: action.payload });
      state.carts.push(action.payload);
      state.length += 1;
    },
    removeFromCart: (state, action) => {
      const newState = state.carts.filter((cart) => cart.id !== action.payload);
      state.carts = newState;
      state.length -= 1;
    },
  },
});

export const { addToCart, removeFromCart, reset } = cartsSlice.actions;
export default cartsSlice.reducer;
