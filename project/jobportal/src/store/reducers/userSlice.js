import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL ,JOB_RECRUITER, JOB_SEEKER} from "../../utils/constants.js";

const initialState = {
    user:[],
    isvalidUser:"",
    isLoading: false, 
    hasRecruiter:false,
    doneRegister:false,
    userExist:false,
    emailId:"",
    firstName:"",
    LastName:"",
    companyName:""
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
export const profile=createAsyncThunk("user/update", async(params,thunkAPI)=>{
    try{
    const response=await axios.put(`${API_URL}user/update`,params);
    
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
            state.doneRegister=true;
            console.log("payload", payload);
            state.emailId=payload.data.data.emailId;
            
            //  console.log("payload", payload.data.msg);
            state.userExist=payload?.data.msg==="already exist"?true:false;
           
        })
        .addCase(validateUser.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(validateUser.rejected, (state)=> {
            state.isLoading = false;    
        })
        .addCase(validateUser.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            console.log(payload);
            state.isvalidUser=payload?.status==="valid"?true:false;
            state.hasRecruiter=payload?.type===JOB_RECRUITER?true:false;
        })
        .addCase(profile.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(profile.rejected, (state)=> {
            state.isLoading = false;    
        })
        .addCase(profile.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            console.log(payload);
      
        })
    }
});

export const {reset }  = userSlice.actions;


export default userSlice.reducer;
    