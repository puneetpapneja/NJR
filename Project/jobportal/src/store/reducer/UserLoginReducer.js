// loginSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/constants";

const initialState = {
  loggingInStatus: "idle",
  user: null,
  error: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loggingInStatus = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loggingInStatus = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loggingInStatus = "failed";
        state.error = action.payload;
      });
  },
});

export const { loginSuccess, loginFailure } = loginSlice.actions;

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}user/login`, userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export default loginSlice.reducer;