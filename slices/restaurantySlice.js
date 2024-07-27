import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restauranty: null,
}

export const restaurantySlice = createSlice({
  name: 'restauranty',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restauranty = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantySlice.actions;

export const selectRestaurant = state=> state.restauranty.restauranty;

export default restaurantySlice.reducer