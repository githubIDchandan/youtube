import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice"
import searchSlice from "./searchSlice"
import chatSlcie from "./chatSlice"
const appStore=configureStore({
    reducer:{
        menu:menuSlice,
        search:searchSlice,
        chat:chatSlcie
        
    }
})


export default appStore