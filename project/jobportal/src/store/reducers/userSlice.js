import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants.js";

const initialState = {
    user:[],
    isvalidUser:false ,
    isLoading: false
}

export const users = createAsyncThunk("users/create",async(params, thunkAPI)=>{
    return axios.post(`${API_URL}user/create` ,params)
    
});

export const validateUser=createAsyncThunk("user/validUser", async(params,thunkAPI)=>{
    try{
    const response=await axios.post(`${API_URL}user/validUser`,params);
    
    return response.data;
    }
    catch (error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // reset: ()=> initialState
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
            state.isLoading = false;
            console.log("payload", payload);
        })
        .addCase(validateUser.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(validateUser.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(validateUser.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            // console.log(payload);
            state.isvalidUser=payload?.status==="valid"?true:false;
        })
    }
});

export const {reset }  = userSlice.actions;


export default userSlice.reducer;
    