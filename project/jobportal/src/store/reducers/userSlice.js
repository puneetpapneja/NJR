import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { API_URL, JOB_RECRUITER } from "../../utils/constants"

const initialState={
    isValidUser: false,
    hasRecruiter: false,
    loading: false,
    isRegistered: false,
    error:"",
    applied:[]
}

export const registerUser= createAsyncThunk("/user/create",async(params,thunkAPI)=>{
    return axios.put(`${API_URL}/user/create`,params);
})
// export const userLogin= createAsyncThunk("/user/find",async(params,thunkAPI)=>{
//     return axios.post(`${API_URL}/user/find`,params);
// })
export const validateUser = createAsyncThunk("/user/validateUser", async (params, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/user/validateUser`, params);
    //   console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });
  export const appliedjobs= createAsyncThunk("/user/addedjobs",async(params,thunkAPI)=>{
    return axios.post(`${API_URL}/user/addedjobs`,params);
})
export const showapplied= createAsyncThunk("/user/showapplied",async(params,thunkAPI)=>{
    // console.log(params)
    return axios.post(`${API_URL}/user/showapplied`,params);
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
            state.isRegistered=true;
        })
        .addCase(validateUser.pending,(state,action)=>{
            state.loading= true;
            state.error="";
        })
        .addCase(validateUser.rejected, (state,action)=> {
            state.loading = false;
            state.error=action.payload;
        })
        .addCase(validateUser.fulfilled, (state,{payload})=>{
            state.loading = false;
            console.log(payload.status);
            state.isValidUser = payload?.status === "valid" ? true : false;        
            state.hasRecruiter = payload?.type === JOB_RECRUITER ? true : false;
            state.companyName=payload?.companyName;
            state.email=payload?.emailId;
            state.id=payload?._id;
            state.firstname=payload?.firstname;
            state.lastname=payload?.lastname;
            state.appliedjobs=payload?.applied_jobs;
        } 
        )
        .addCase(appliedjobs.pending,(state,action)=>{
            state.loading= true;
        })
        .addCase(appliedjobs.rejected, (state,action)=> {
            state.loading = false;
            // state.error=action.payload.error;
        })
        .addCase(appliedjobs.fulfilled, (state,action)=>{
            state.loading = false;
        })
        .addCase(showapplied.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(showapplied.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(showapplied.fulfilled, (state, {payload})=>{
            state.applied = payload.data;
            console.log(payload);
            state.isLoading = false;
        })
    }
})
export const {reset}= userSlice.actions
export default userSlice.reducer;
