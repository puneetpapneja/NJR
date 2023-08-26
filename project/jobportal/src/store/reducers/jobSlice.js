import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";

const initialState = {
    jobs: [],
    isLoading: false,
    jobposted: false,
    postedjob:[]
}
export const getAllJobs = createAsyncThunk("job/find",async(params, thunkAPI)=>{
    return axios.get(`${API_URL}/job/find`);
    //axios.post("",params);
})
export const postjob= createAsyncThunk("/job/create",async(params,thunkAPI)=>{
    return axios.post(`${API_URL}/job/create`,params);
})
export const postedjobs=createAsyncThunk("/job/findposted",async(params,thunkAPI)=>{
    return axios.post(`${API_URL}/job/findposted`,params);
})
export const searchedjob= createAsyncThunk("/job/findspecified",async(params,thunkAPI)=>{
    return axios.post(`${API_URL}/job/findspecified`,params);
})
export const deletejob= createAsyncThunk("/job/remove",async(params,thunkAPI)=>{
    return axios.post(`${API_URL}/job/remove`,params);
})
export const appliedcandidates= createAsyncThunk("/job/addapplied",async(params,thunkAPI)=>{
    return axios.post(`${API_URL}/job/addapplied`,params);
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
        .addCase(postjob.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(postjob.rejected, (state)=> {
            state.isLoading = false;
            state.jobposted=false;
        })
        .addCase(postjob.fulfilled, (state, {payload})=>{
            state.jobposted = true;
            state.isLoading = false;
        })
        .addCase(postedjobs.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(postedjobs.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(postedjobs.fulfilled, (state, {payload})=>{
            console.log("hello",payload);
            state.postedjob=payload.data;
            state.isLoading = false;
        })
        .addCase(searchedjob.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(searchedjob.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(searchedjob.fulfilled, (state, {payload})=>{
            console.log("hello",payload);
            state.jobs=payload.data;
            state.isLoading = false;
        })
        .addCase(deletejob.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(deletejob.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(deletejob.fulfilled, (state, {payload})=>{
            console.log("hello",payload);
            // state.jobs=payload.data;
            state.isLoading = false;
        })
        .addCase(appliedcandidates.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(appliedcandidates.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(appliedcandidates.fulfilled, (state)=>{
            // console.log("hello",payload);
            // state.jobs=payload.data;
            state.isLoading = false;
        })
    }
});
export const {reset }  = jobSlice.actions;
export default jobSlice.reducer;