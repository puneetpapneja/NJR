import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    message: "",
    title: "",
    variant: ""
}

export const notificationSlice = createSlice({
    name:"notification",
    initialState,
    reducers: {
        setMessage: (state, action) => {
    const { title, message, variant } = action.payload;
    state.title = title;
    state.message = message;
    state.variant = variant;
  }
}    
})

export const {setMessage} = notificationSlice.actions;
export default notificationSlice.reducer;