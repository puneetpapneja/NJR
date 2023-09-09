import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/constants"; // Assuming you have the API URL defined
import axios from "axios";

const initialState = {
  isValid: false,
  isLoading: false,
  error: null,
};

export const validateUser = createAsyncThunk(
  "user/validateUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${API_URL}user/validateUser`,
        userData
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userValidationSlice = createSlice({
  name: "userValidation",
  initialState,
  reducers: (builder) => {
    builder
      .addCase(validateUser.pending, (state) => {
        state.postingStatus = "loading";
      })
      .addCase(validateUser.fulfilled, (state) => {
        state.postingStatus = "succeeded";
        state.error = null;
      })
      .addCase(validateUser.rejected, (state, action) => {
        state.postingStatus = "failed";
        state.error = action.payload;
      });
  },
});

export default userValidationSlice.reducer;