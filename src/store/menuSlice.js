import { createSlice } from "@reduxjs/toolkit";



const menuSlice=createSlice({
    name:"menu",
    initialState:{
        menuBtn:false
    },
    reducers:{
        addHandleMenu:(state,action)=>{
            state.menuBtn=!state.menuBtn
        }
    }
})


export const {addHandleMenu}=menuSlice.actions
export default menuSlice.reducer;