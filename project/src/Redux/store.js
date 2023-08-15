import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/UserReducer";




const store = configureStore({
    reducer:{
        UserConnexion: UserReducer
    }
})



export default store