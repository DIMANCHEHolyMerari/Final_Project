import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"


export const connexion = createAsyncThunk("/SignIn", async (signInUser)=>{
    return axios.post("http://localhost:9000/SignIn", signInUser)
    .then(res => {return res.data})
    .catch(err => console.log(err))
})

const UserSlice = createSlice({
    name:"user",
    initialState:{
        User:{},
        statut:"",
        erreur:""
    },

    reducers:{

    },

    extraReducers:(builder)=>{
        builder.addCase(connexion.fulfilled, (state, action)=>{
            state.User = action.playload
            state.statut = "accepted"
        })
        .addCase(connexion.rejected, (state, action)=>{
            state.statut = "rejected"
            state.erreur = action.playload
        })
        .addCase(connexion.pending, (state)=>{
            state.statut = "pending"
        })
    }
})


export default UserSlice.reducer