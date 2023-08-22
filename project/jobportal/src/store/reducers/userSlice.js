import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from "../../utils/constants";
const initialState = {
  isValidUser: false,
  isLoading: false
};

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
      });
  },
});

export default userSlice.reducer;
