import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../utils/constant";



const chatSlice=createSlice({
    name:"chat",
    initialState:{
        meassage:[],
    },
    reducers:{
        addMesaage:(state,action)=>{
            if(state.meassage.length>OFFSET_LIVE_CHAT)state.meassage.splice(0,1)
           
            state.meassage.push(action.payload);
        }
    }
})


export const {addMesaage}=chatSlice.actions;
export default chatSlice.reducer;