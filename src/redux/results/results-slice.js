import { createSlice } from "@reduxjs/toolkit";
import getResults from "./results-operations";

const initialState = {
  result: "",
  loading: false,
  error: false,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  extraReducers: {
    [getResults.pending]: (store) => {
      store.loading = true;
      store.error = false;
    },
    [getResults.fulfilled]: (store, { payload }) => {
      store.result = payload;
      store.loading = false;
    },
    [getResults.rejected]: (store) => {
      store.loading = false;
      store.error = true;
    },
  },
});

export default resultSlice.reducer;
