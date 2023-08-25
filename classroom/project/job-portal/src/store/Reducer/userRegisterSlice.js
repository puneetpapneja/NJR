import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/constants";

const initialState = {
  postingStatus: "idle",
  error: null,
};

export const userRegistrationSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postNewUser.pending, (state) => {
        state.postingStatus = "loading";
      })
      .addCase(postNewUser.fulfilled, (state) => {
        state.postingStatus = "succeeded";
        state.error = null;
      })
      .addCase(postNewUser.rejected, (state, action) => {
        state.postingStatus = "failed";
        state.error = action.payload;
      });
  },
});

export const postNewUser = createAsyncThunk(
  "user/create",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}user/create`, userData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export default userRegistrationSlice.reducer;