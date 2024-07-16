import { createSlice } from '@reduxjs/toolkit';
const exampleSlice = createSlice({
  name: 'profile',
  initialState: {
    name: null
  },
  reducers: {
    SET_NAME: (state, action) => {
      state.name = action.payload;
    }
  }
});
export const { SET_NAME } = exampleSlice.actions;
export default exampleSlice.reducer;