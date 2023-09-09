
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/constants";

const initialState = {
  postingStatus: "idle",
  error: null,
};

export const postNewJob = createAsyncThunk(
  "job/create",
  async (jobData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}job/create`, jobData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const postJobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postNewJob.pending, (state) => {
        state.postingStatus = "loading";
      })
      .addCase(postNewJob.fulfilled, (state) => {
        state.postingStatus = "succeeded";
        state.error = null;
      })
      .addCase(postNewJob.rejected, (state, action) => {
        state.postingStatus = "failed";
        state.error = action.payload;
      });
  },
});

export default postJobSlice.reducer;