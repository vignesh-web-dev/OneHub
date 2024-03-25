"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTextHover: false,
  isContrast: false,
  isButtonHover: false,
};

export const cursorSlice = createSlice({
  name: "cursor",
  initialState,
  reducers: {
    modelText: (state, action) => {
      state.isTextHover = action.payload;
    },
    modelContrast: (state, action) => {
      state.isContrast = action.payload;
    },
    modelButton: (state, action) => {
      state.isButtonHover = action.payload;
    },
  },
});

export const { modelText, modelContrast, modelButton } = cursorSlice.actions;

export default cursorSlice.reducer;
