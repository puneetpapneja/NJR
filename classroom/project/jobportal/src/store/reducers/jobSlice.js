import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";

const initialState = {
  jobs: [],
  isLoading: false
};

export const getAllJobs = createAsyncThunk("jobs/getAll", async (params, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}job/getAll`); // Added 'await'
    return response.data;
  } catch (error) {
    // Handle error appropriately
    throw error;
  }
});

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    reset: (state) => initialState // Updated reset reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.jobs = payload; // Removed '.data' from payload
        state.isLoading = false;
      });
  }
});

export const { reset } = jobSlice.actions;

export default jobSlice.reducer;
