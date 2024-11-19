import { createSlice } from "@reduxjs/toolkit";


const searchSlice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResult:(state,action)=>{
            // console.log("ac", {...action.payload})
            // return {...action.payload,...state}
            state=Object.assign(state,action.payload);
        }
    }
})


export const {cacheResult}=searchSlice.actions
export default searchSlice.reducer;



// here we can give intial state in array form....but time complexity will be O(n);
// more optimize way is give it in object it will optimized to o(1);