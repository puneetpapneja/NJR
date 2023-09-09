import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants.js";
const initialState = {
    jobs: [
    ],
    isLoading: false
}

export const getAllJobs = createAsyncThunk("jobs/getAll",async(params, thunkAPI)=>{
    return axios.get(`${API_URL}job/getAll`)
    
})

export const postJob=createAsyncThunk("job/create",async(params,thunkAPI)=>{
    try{
        const response=await axios.post(`${API_URL}job/create`, params)
        console.log(response);
        return response.data;

    }
    catch(error){
       return thunkAPI.rejectWithValue(error.response.data);
    }
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
        .addCase(postJob.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(postJob.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(postJob.fulfilled, (state, {payload})=>{
            console.log(payload);
            state.isLoading = false;
        })
    }
});

export const {reset }  = jobSlice.actions;


export default jobSlice.reducer;
    