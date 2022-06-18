import { createReducer } from "@reduxjs/toolkit";
import testType from "./test-actions";

const testReducer = createReducer([], {
  [testType]: (_, { payload }) => {
    return payload;
  },
});

export default testReducer;
