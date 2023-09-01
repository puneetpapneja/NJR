import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";

const initialState ={
    jobs:[],
    isLoading:false,
    status:false
}
export const deleteJob = createAsyncThunk("job/delete", async(params,ThunkAPI)=>{
    return axios.delete(`${API_URL}job/delete`,params)
})
export const getAllJobs = createAsyncThunk("job/getAll",async(params, thunkAPI)=>{
    return axios.get(`${API_URL}job/getAll`)
})
export const createJob = createAsyncThunk("job/create",async(params,thunkAPI)=>{
    return axios.post(`${API_URL}job/create`,params)
})
export const getByFilters = createAsyncThunk("job/getByFilters",async (params,thunkAPI)=>{
    // console.log("params",params)
    return axios.post(`${API_URL}job/getByFilters`,params)
})
export const getByEmail = createAsyncThunk("job/getByEmail", async (params,thunkAPI)=>{
    return axios.post(`${API_URL}job/getByEmail`,params)
})

export const apply = createAsyncThunk("job/apply", async (params,ThunkAPI)=>{
    return axios.put(`${API_URL}job/apply`,params)
})
export const getAllForUser = createAsyncThunk("user/getAllForUser", async (params,ThunkAPI)=>{
    return axios.post(`${API_URL}user/getAllForUser`,params);
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
        .addCase(getAllForUser.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getAllForUser.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(getAllForUser.fulfilled, (state, {payload})=>{
            state.jobs = payload.data;
            state.isLoading = false;
        })
        .addCase(createJob.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(createJob.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(createJob.fulfilled, (state, {payload})=>{
            state.status = payload?.data?.status==="ok"?true:false;
            state.id = payload?.data?.data
            // console.log(state.id);
            state.isLoading = false;
        })
        .addCase(apply.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(apply.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(apply.fulfilled, (state, {payload})=>{
            state.status = payload?.data?.status==="ok"?true:false;
            state.isLoading = false;
        })
        .addCase(getByFilters.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getByFilters.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(getByFilters.fulfilled, (state, {payload})=>{
            // console.log("payload",payload)
            state.jobs = payload.data;
            state.isLoading = false;
        })
        .addCase(getByEmail.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getByEmail.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(getByEmail.fulfilled, (state, {payload})=>{
            state.jobs = payload.data;
            state.isLoading = false;
        })
        .addCase(deleteJob.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(deleteJob.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(deleteJob.fulfilled, (state)=>{
            state.isLoading = false;
        })
    }
});
export const {reset}  = jobSlice.actions;
export default jobSlice.reducer;