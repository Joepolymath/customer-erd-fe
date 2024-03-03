import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  userData: null,
};

export const authSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },

    login: (state, action) => {
      state.accessToken = action.payload.token;
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
