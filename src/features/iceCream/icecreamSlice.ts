type InitialState = {
  numOfIcecream: number;
};

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrder } from "../cakes/cakeSlice";

const initialState: InitialState = {
  numOfIcecream: 10,
};

const iceCreamSlice = createSlice({
  name: "ice cream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIcecream += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIcecream--;
  //   },
  // }

  extraReducers: (builder) => {
    builder.addCase(cakeOrder, (state) => {
      state.numOfIcecream--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
