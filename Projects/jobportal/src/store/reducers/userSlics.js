import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";

export const registerUser = createAsyncThunk("user/register", async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}user/register`, userData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const initialState = {
  registrationStatus: "",
  registrationError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registrationStatus = "loading";
        state.registrationError = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registrationStatus = "error";
        state.registrationError = action.payload.message;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.registrationStatus = "success";
        state.registrationError = null;
      });
  },
});

export const selectRegistrationStatus = (state) => state.user.registrationStatus;
export const selectRegistrationError = (state) => state.user.registrationError;

export default userSlice.reducer;