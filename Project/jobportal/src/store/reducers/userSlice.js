import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL, JOB_RECURITER, JOB_SEEKER } from "../../utils/constants";
const initialState = {
  isValidUser: false,
  hasRecuriter: false,
  isLoading: false,
  doneRegister: false,
};

export const validateUser = createAsyncThunk(
  "user/validateUser",
  async (params, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}user/validateUser`, params);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createuser = createAsyncThunk(
  "user/create",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}user/create`, userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const users = createAsyncThunk(
  "users/create",
  async (params, thunkAPI) => {
    return axios.post(`${API_URL}user/create`, params);
  }
);
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
      .addCase(createuser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.doneRegister = true;
        console.log("payload", payload);
      })
      .addCase(validateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(validateUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(validateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isValidUser = payload?.status === "valid" ? true : false;
        state.hasRecuriter = payload?.type === JOB_RECURITER ? true : false;
      });
  },
});

export default userSlice.reducer;
