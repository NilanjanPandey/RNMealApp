import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    _id: [],
  },
  reducers: {
    _addFavourite: (state, action) => {
      state._id.push(action.payload.id);
    },
    _removeFavourite: (state, action) => {
      state._id.splice(state._id.indexOf(action.payload.id), 1);
    },
  },
});

export default favouriteSlice.reducer;
export const addFavouriteAction = favouriteSlice.actions._addFavourite;
export const removeFavouriteAction = favouriteSlice.actions._removeFavourite;
