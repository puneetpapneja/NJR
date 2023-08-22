import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";


export const createReg=createAsyncThunk("user/create",async(params,thunkAPI)=>{
    return axios.get(`${API_URL}user/create`,)
})



