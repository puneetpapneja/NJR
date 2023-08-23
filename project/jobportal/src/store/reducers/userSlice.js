import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";

const initialState = {
    Status:"",
    Error:"",
    isLoading:false
}

export const registerUser = createAsyncThunk("user/create", async(userData,ThunkAPI)=>{
    return axios.post(`${API_URL}user/create`,userData)
})

export const loginValidation = createAsyncThunk("user/login",async (loginData,ThunkAPI)=>{
    return axios.get(`${API_URL}user/login`,loginData);
})

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        reset:()=>initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(registerUser.rejected, (state,action)=> {
            state.Error = action.payload;
            state.isLoading = false;
        })
        .addCase(registerUser.fulfilled, (state,action)=>{
            state.Status = action.payload;
            state.Error = "";
            state.isLoading = false;
        })
        .addCase(loginValidation.pending,(state)=>{
            state.isLoading = true;
            console.log("pending");
        })
        .addCase(loginValidation.rejected, (state,action)=> {
            state.Error = action.payload;
            state.isLoading = false;
            console.log("rejected");
        })
        .addCase(loginValidation.fulfilled, (state,action)=>{
            state.Status = action.payload;
            state.Error = "";
            state.isLoading = false;
            console.log("fulfilled");
        })
    }
})


export const {reset} = userSlice.actions;
export default userSlice.reducer;