import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";  

export const registerUser = createAsyncThunk("user/register", async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL} user/register`, userData);  
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const initialState = {
  isValidUser: false,
  isLoading: false

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        // console.log("payload", payload);
      });
  },
});

export const selectRegistrationStatus = (state) => state.user.registrationStatus;
export const selectRegistrationError = (state) => state.user.registrationError;

export default userSlice.reducer;