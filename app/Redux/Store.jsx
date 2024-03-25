"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cursorReducer from "./Cursor/cursorSlice";
import corporateSlice from "./Corporate/corporateSlice";

const rootReducer = combineReducers({
  cursor: cursorReducer,
  corporate: corporateSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
