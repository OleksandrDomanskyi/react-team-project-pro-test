import { createAsyncThunk } from "@reduxjs/toolkit";

import getTest from "../../shared/services/test";

export const fetchQuestions = createAsyncThunk(
  "test/fetch",
  async (type, { rejectWithValue }) => {
    try {
      const data = await getTest(type);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
