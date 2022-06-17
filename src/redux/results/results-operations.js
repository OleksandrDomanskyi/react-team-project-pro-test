import { createAsyncThunk } from "@reduxjs/toolkit";
import getResult from "../../shared/services/results";

const getResults = createAsyncThunk(
  "test/getResult",
  async (answers, { rejectWithValue }) => {
    try {
      const result = await getResult(answers);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export default getResults;
