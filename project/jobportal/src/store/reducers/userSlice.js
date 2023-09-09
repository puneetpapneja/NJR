import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL, JobRecruiter} from "../../utils/constants";
const initialState ={
    isvalidUser:false,
    hasRecruiter: false,
    isLoading:false
};

export const registerdata = createAsyncThunk("user/create",async(userdata, thunkAPI)=>{
    return axios.post(`${API_URL}user/create`,userdata)
})

export const loginValid = createAsyncThunk("user/hasValidUser",async (loginData,thunkAPI)=>{
    try{
        const response = await axios.post(`${API_URL}user/hasValidUser`, loginData);
    return response.data;
      
    }
    catch(error){
        return thunkAPI.rejectWithValue(error.response.data)
    }
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(registerdata.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(registerdata.rejected, (state,action)=> {
            state.isLoading = false;
        })
        .addCase(registerdata.fulfilled, (state, {payload})=>{
            state.user = payload.data;
            state.isLoading = false;
            console.log("payload", payload);
        })
        .addCase(loginValid.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(loginValid.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(loginValid.fulfilled, (state,{payload})=>{
            state.isLoading = false;
            state.isvalidUser = payload?.status === "valid" ? true : false;        
            state.hasRecruiter = payload?.type === JobRecruiter ? true :false;
            console.log("type",payload.type);
            state.firstName = payload?.data?.firstName;
            state.lastName = payload?.data?.lastName;
            state.emailId = payload?.data?.emailId;
            state._id = payload?.data?._id;
            state.companyName = payload?.data?.companyName;
            
            state.isLoading = false;
        })
    }
  });
  
  export default userSlice.reducer;