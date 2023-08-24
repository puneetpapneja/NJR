import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";

const initialState = {
    jobs: [],
    appliedJobs: [],
    isLoading: false
}

export const postJob = createAsyncThunk("job/create", async (jobData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}job/create`, jobData); // Adjust the endpoint
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });

export const getAllJobs = createAsyncThunk("job/getAll",async(params, thunkAPI)=>{
    return axios.get(`${API_URL}job/getAll`)
    //axios.post("",params);
});

export const deleteById = createAsyncThunk("job/deleteById", async (jobId, thunkAPI) => {
    try {
        await axios.delete(`${API_URL}job/${jobId}`); // Adjust the endpoint
        return jobId;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        reset: ()=> initialState,
        applyForJob: (state, action) => {
          state.appliedJobs.push(action.payload);
        }
        
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
          .addCase(postJob.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(postJob.rejected, (state) => {
            state.isLoading = false;
          })
          .addCase(postJob.fulfilled, (state, { payload }) => {
            // Handle the successful job posting if needed
            state.isLoading = false;
          })
          .addCase(deleteById.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(deleteById.rejected, (state) => {
            state.isLoading = false;
          })
          .addCase(deleteById.fulfilled, (state, { payload }) => {
            state.jobs = state.jobs.filter(job => job._id !== payload);
            state.isLoading = false;
          });
      }
    });

export const {reset, applyForJob }  = jobSlice.actions;


export default jobSlice.reducer;