import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    jobs: [
    ],
    isLoading: false
}

export const getAllJobs = createAsyncThunk("jobs/getAll",async(params, thunkAPI)=>{
    return axios.get("http://localhost:5000/job/getAll")
})

export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllJobs.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getAllJobs.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(getAllJobs.fulfilled, (state, {payload})=>{
            state.jobs = payload.data;
            state.isLoading = false;
        })
    }
});


export default jobSlice.reducer;