import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/constants";

const initialState = {
  jobs: [],
  isLoading: false,
  status: false,
};

export const getAllJobs = createAsyncThunk(
  "job/getAll",
  async (params, thunkAPI) => {
    const response = await axios.get(`${API_URL}job/getAll`);
    return response.data; // Return only serializable data
  }
);
export const createJob = createAsyncThunk(
  "job/create",
  async (params, thunkAPI) => {
    const response = await axios.post(`${API_URL}job/create`, params);
    return response.data; // Return only serializable data
  }
);

export const jobSlice = createSlice({
  name: "Job",
  initialState,
  reducers: {
    reset: () => initialState,
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
        state.jobs = payload.data;
        state.isLoading = false;
      })
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createJob.fulfilled, (state, { payload }) => {
        console.log(payload.data.status);
        state.status = payload?.data?.status === "ok" ? true : false;
        state.isLoading = false;
      });
  },
});
export const { reset } = jobSlice.actions;
export default jobSlice.reducer;