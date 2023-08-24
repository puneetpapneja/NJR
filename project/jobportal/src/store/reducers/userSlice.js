import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";

const initialState = {
    Status:"",
    Error:"",
    isLoading:false,
    isValidUser:false,
}

export const registerUser = createAsyncThunk("user/create", async(userData,ThunkAPI)=>{
    return axios.post(`${API_URL}user/create`,userData)
})

export const loginValidation = createAsyncThunk("user/login",async (loginData,ThunkAPI)=>{
    return axios.post(`${API_URL}user/login`,loginData); 
    // console.log("response", response)

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
        .addCase(registerUser.fulfilled, (state,{payload})=>{
            console.log("payload", payload)
            state.isLoading = false;
        })
        .addCase(loginValidation.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(loginValidation.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(loginValidation.fulfilled, (state, {payload})=>{
            console.log("payload",payload);
            state.Error = "";
            state.isLoading = false;
            state.isValidUser = payload?.data?.status === 'ok' ? true : false;    
            console.log(state.isValidUser);
        })
    }
})


export const {reset} = userSlice.actions;
export default userSlice.reducer;