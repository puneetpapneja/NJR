import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";

const initialState = {
    
    isLoading: false
}

export const getAllJobs = createAsyncThunk("job/getAll",async(params, thunkAPI)=>{
    return axios.get(`${API_URL}job/getAll`)
    //axios.post("",params);
})
export const createJobs = createAsyncThunk("job/Create",async(jobdata,thunkAPI)=>{
    return axios.post(`${API_URL}job/Create`)
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
        .addCase(createJobs.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(createJobs.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(createJobs.fulfilled, (state, {payload})=>{
            state.jobs = payload.data;
            state.isLoading = false;
        })
    }
});

export const {reset }  = jobSlice.actions;


export default jobSlice.reducer;