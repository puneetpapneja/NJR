import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL, JOB_RECRUITER } from "../../utils/utils";
const initialState = {
  isValidUser: false,
  hasRecruiter: false,
  isLoading: false
};

export const validateUser = createAsyncThunk("user/validateUser", async (params, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}user/validateUser`, params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const createuser = createAsyncThunk("user/create", async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}user/create`, userData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createuser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createuser.rejected, (state, action) => {
       state.isLoading = false;
      })
      .addCase(createuser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        console.log("payload", payload);
      })
      .addCase(validateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(validateUser.rejected, (state) => {
       state.isLoading = false;
      })
      .addCase(validateUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isValidUser = payload?.status === "Valid" ? true : false;        
        state.hasRecuriter = payload?.type === JOB_RECRUITER ? true : false;
      });
  },
});

export default userSlice.reducer;