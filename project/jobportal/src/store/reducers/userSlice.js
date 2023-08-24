import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants.js";

const initialState = {
    user:[],
    isLoading: false
}

export const users = createAsyncThunk("user/create",async(params, thunkAPI)=>{
    return axios.post(`${API_URL}user/create`)
    
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reset: ()=> initialState
    },
    extraReducers: (builder) => {   
        builder
        .addCase(users.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(users.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(users.fulfilled, (state, {payload})=>{
            state.user = payload.data;
            state.isLoading = false;
        })
    }
});

export const {reset }  = userSlice.actions;


export default userSlice.reducer;
    