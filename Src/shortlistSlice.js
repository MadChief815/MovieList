import { createSlice } from '@reduxjs/toolkit';

const initialState = { shortlist: [] };

const shortlistSlice = createSlice({
  name: 'shortlist',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      if (!state.shortlist.some(movie => movie.id === action.payload.id)) {
        state.shortlist.push(action.payload);
      }
    },
    removeMovie: (state, action) => {
      state.shortlist = state.shortlist.filter(movie => movie.id !== action.payload);
    }
  }
});

export const { addMovie, removeMovie } = shortlistSlice.actions;
export default shortlistSlice.reducer;