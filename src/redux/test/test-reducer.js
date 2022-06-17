import { createReducer } from "@reduxjs/toolkit";
import testType from "./test-actions";

const testReducer = createReducer([], {
  [testType]: (store, { payload }) => {
    return (store = payload);
  },
});

export default testReducer;
