import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { API_URL } from "../../utils/constants"

const initialState={
    token:"",
    loading: false,
    error:""
}

export const registerUser= createAsyncThunk("/user/create",async(params,thunkAPI)=>{
    return axios.post(`${API_URL}/user/create`,params);
})
export const userLogin= createAsyncThunk("/user/find",async(params,thunkAPI)=>{
    return axios.post(`${API_URL}/user/find`,params);
})

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers:{
        reset: ()=>initialState
    },
    extraReducers: (builder)=>{
        builder
        .addCase(registerUser.pending,(state,action)=>{
            state.loading= true;
        })
        .addCase(registerUser.rejected, (state,action)=> {
            state.loading = false;
            state.error=action.payload.error;
        })
        .addCase(registerUser.fulfilled, (state,action)=>{
            state.loading = false;
            state.token="succeed";
        })
        .addCase(userLogin.pending,(state,action)=>{
            state.loading= true;
            state.error="";
        })
        .addCase(userLogin.rejected, (state,action)=> {
            state.loading = false;
            state.error=action.payload;
            state.token="";
        })
        .addCase(userLogin.fulfilled, (state,action)=>{
        if(action.payload.data.status==="fail"){
            state.loading = false;
            state.error="invalid user";
            state.token="";}
        else{
            state.loading = false;
            state.error="";
            state.token="succeed";}
        }
        )
    }
})
export const {reset}= userSlice.actions
export default userSlice.reducer;
