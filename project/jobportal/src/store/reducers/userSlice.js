import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";

const initialState ={
    registrationError:"",
    registrationStatus:"",
    isloading:false
};

export const registerdata = createAsyncThunk("user/create",async(params, thunkAPI)=>{
    return axios.post(`${API_URL}user/create`)
})

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        reset: ()=> initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerdata.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(registerdata.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(registerdata.fulfilled, (state, {payload})=>{
            state.jobs = payload.data;
            state.isLoading = false;
        })
    }
  });
  
  export const { reset } = registrationSlice.actions;
  export default registrationSlice.reducer;