type InitialState = {
  numOfCake: number;
};

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialState = {
  numOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCake--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
