import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";
import { setMessage } from "./notificationSlices";
const initialState = {
    Status:"",
    Error:"",
    isvalidUser:false,
    hasRecruiter:false,
    isLoading:false
}

export const registerUser = createAsyncThunk("user/create", async(userData,thunkAPI)=>{
    try {
    const { data } = await axios.post(`${API_URL}user/create`, userData);
    const { status, msg } = data;
    if (status === "ok") {
      console.log("enter into if");
      const successPayload = {
        title: "Success",
        message: msg,
        variant: "success"
      };
      thunkAPI.dispatch(setMessage(successPayload));
      return data;
    } else {
      const errorPayload = {
        title: "Fail",
        message: msg,
        variant: "error"
      };
      
      thunkAPI.dispatch(setMessage(errorPayload));
      throw new Error(msg); 
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const loginValidation = createAsyncThunk("user/loginValidation",async (loginData,ThunkAPI)=>{
    try{
       const response = await axios.post(`${API_URL}user/loginValidation`, loginData);
    return response.data; 
      
    }
    catch(error){
        return ThunkAPI.rejectWithValue(error.response.data)
    }
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
            state.Error = action.payload.data.error;
            state.Status = action.payload.data.status;
            state.isLoading = false;
        })
        .addCase(registerUser.fulfilled, (state,action)=>{
            state.Status = action.payload.data.status;
            state.Error = "";
            state.isLoading = false;
        })
        .addCase(loginValidation.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(loginValidation.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(loginValidation.fulfilled, (state,action)=>{
             const payload = action.payload;
             state.isvalidUser = payload?.status === "valid" ? true : false;
            state.firstName = payload?.firstName;
            state.lastName = payload?.lastName;
            state.emailId = payload?.data?.emailId;
            state._id = payload?.data?._id;
            state.companyName = payload?.data?.companyName;
            state.hasRecruiter = payload?.data?.type === "Job Recruiter"?true:false;
            state.isLoading = false;
        })
    }
});


export const {reset} = userSlice.actions;
export default userSlice.reducer;