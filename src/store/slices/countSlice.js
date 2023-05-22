import { createSlice } from "@reduxjs/toolkit";

const countReducer = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, action) {
      state.count = state.count + 1;
    },
    subtract(state, action) {
      state.count = state.count - 1;
    },
  },
});

export const { add, subtract } = countReducer.actions;
export default countReducer.reducer;
