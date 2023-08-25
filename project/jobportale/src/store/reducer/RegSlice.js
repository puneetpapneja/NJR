import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";
const initialState={
    user:[],
    isValiduser:false,
    isLoading:false
} 

export const createReg=createAsyncThunk("createReg",async(params,thunkAPI)=>{
    const res= await axios.post(`${API_URL}user/create`,params)
    return res.data
})

 const RegSlice= createSlice({
    name:"createReg",
    initialState,
    reducers:{
        reset:()=>initialState
    },
    extrareducer:(builder)=>{
        builder
        .addCase(createReg.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(createReg.rejected, (state,payload)=> {
            console.log(payload)
            state.isLoading = false;
        })
        .addCase(createReg.fulfilled, (state, {payload})=>{
            state.createReg = payload.data;
            console.log(payload)
            state.isLoading = false;
        })
    }
}
)

export const{reset}=RegSlice.actions

export default RegSlice.reducer



