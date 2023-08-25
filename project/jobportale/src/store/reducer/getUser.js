import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_URL } from "../../utils/constants"
import axios from "axios"

const initialState={
    user:[],
    isLoading:false
}
const userdtl=createAsyncThunk("userDtl",async(params,thunkAPI)=>{
    const res=await axios.get(`${API_URL}user/getAll`)
    return res
})
const userSlice=createSlice({
    name:"getuser",
    initialState,
    reducer : {
        treset:()=>initialState
    }
    ,extraReducers:(builder)=>{
        builder
        .addCase(userdtl.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(userdtl.rejected,(state)=>{
            state.isLoading=false
        })
        .addCase(userdtl.fulfilled,(state,payload)=>{
            console.log(payload)
            state.getuser=payload
            state.isLoading=false
        })
    }

}
)

export default userSlice.reducer