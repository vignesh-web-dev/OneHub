"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  filter: [],
  filterButtonDisable: true,
  previous: false,
};

export const corporateSlice = createSlice({
  name: "corporate",
  initialState,
  reducers: {
    modelPage: (state, action) => {
      state.page = action.payload;
    },
    modelFilter: (state, action) => {
      state.filter = action.payload;
    },
    modelFilterButton: (state, action) => {
      state.filterButtonDisable = action.payload;
    },
    previousPath: (state, action) => {
      state.previous = action.payload;
    },
  },
});

export const { modelPage, modelFilter, modelFilterButton, previousPath } =
  corporateSlice.actions;

export default corporateSlice.reducer;
