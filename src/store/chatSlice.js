import { createSlice } from "@reduxjs/toolkit";



const chatSlice=createSlice({
    name:"chat",
    initialState:{
        meassage:[],
    },
    reducers:{
        addMesaage:(state,action)=>{
            state.meassage.push(action.payload);
        }
    }
})


export const {addMesaage}=chatSlice.actions;
export default chatSlice.reducer;