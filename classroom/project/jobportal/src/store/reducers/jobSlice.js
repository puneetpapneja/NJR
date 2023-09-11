import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";

const initialState = {
    jobs: [
    ],
    isLoading: false
}

export const getAllJobs = createAsyncThunk("jobs/getAll",async(params, thunkAPI)=>{
    return axios.get(`${API_URL}job/getAll`)
    //axios.post("",params);
})

export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        reset: ()=> initialState
    },
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

export const {reset }  = jobSlice.actions;

export default jobSlice.reducer;