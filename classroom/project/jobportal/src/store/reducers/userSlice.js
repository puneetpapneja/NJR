import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/constants";

const initialState = {
  Status: "",
  Error: "",
  isvalidUser: false,
  hasRecruiter: false,
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  "user/create",
  async (userData, ThunkAPI) => {
    return axios.post(`${API_URL}user/create`, userData);
  }
);
export const updateProfile = createAsyncThunk(
  "user/update",
  async (data, ThunkAPI) => {
    // console.log(data);
    // return axios.post(`${API_URL}user/update`, data);
    try {
      // Create a new FormData object to send all form data, including the file
      const formData = new FormData();
      formData.append("id", data.id);
      formData.append("firstName", data.fields.firstName);
      formData.append("lastName", data.fields.lastName);
      formData.append("emailId", data.fields.emailId);
      formData.append("fileCV", data.fields.fileCV);

      const response = await axios.post(`${API_URL}user/update`, formData);

      // Handle the response as needed
      if (response.status === 200) {
        return response.data; // You can return any relevant data from the response
      } else {
        // Handle errors here if needed
        return ThunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginValidation = createAsyncThunk(
  "user/loginValidation",
  async (loginData, ThunkAPI) => {
    try {
      return axios.post(`${API_URL}user/loginValidation`, loginData);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.Error = action.payload.data.error;
        state.Status = action.payload.data.status;
        state.isLoading = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.Status = action.payload.data.status;
        state.Error = "";
        state.isLoading = false;
      })
      .addCase(loginValidation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginValidation.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loginValidation.fulfilled, (state, { payload }) => {
        // console.log("login payload",payload);
        state.isvalidUser = payload?.data?.status === "valid" ? true : false;
        state.firstName = payload?.data?.firstName;
        state.lastName = payload?.data?.lastName;
        state.emailId = payload?.data?.emailId;
        state._id = payload?.data?._id;
        state.companyName = payload?.data?.companyName;
        state.hasRecruiter =
          payload?.data?.type === "Job Recruiter" ? true : false;
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.Error = action.payload.data.error;
        state.Status = action.payload.data.status;
        state.isLoading = false;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.Status = action.payload.data.status;
        state.Error = "";
        state.isLoading = false;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
