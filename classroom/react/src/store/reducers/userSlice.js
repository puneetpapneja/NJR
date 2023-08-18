import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    users: [
        {item: "bottle", brand:"Cello", price: 115}
    ]
}
export const getAllUsers = createAsyncThunk('user/getAll',async(params, thunkAPI)=> {
    return axios.get("http://localhost:5000/user/getAll", {});
});


export const userSlice = createSlice({
    name:"user",
    initialState,
    isLoading: false,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(getAllUsers.pending,(state)=>{
            state.isLoading = true;
        } )
        .addCase(getAllUsers.rejected,(state)=>{
            state.isLoading = false;
        } )
        .addCase(getAllUsers.fulfilled,(state, {payload})=>{
            console.log("payload", payload);
            state.isLoading = false;
            state.users = payload.data;
        } )
    }
})

export default userSlice.reducer;