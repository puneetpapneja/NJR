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
        setMessage: (state, payload)=>{
            console.log("payload from notification", payload);
            const {title, message, variant} = payload;
            state.title = title;
            state.message = message;
            state.variant = variant;
        }
    }    
})

export const {setMessage} = notificationSlice.actions;
export default notificationSlice.reducer;