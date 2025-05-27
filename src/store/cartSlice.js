import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    search: '',
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { addToCart, removeFromCart, setSearch } = cartSlice.actions;
export default cartSlice.reducer;