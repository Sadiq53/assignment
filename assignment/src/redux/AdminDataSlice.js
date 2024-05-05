import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { ADMIN_API_URL } from '../util/API_URL'

let adminData = createAsyncThunk("adminData", async(ID)=>{
    let response = await axios.get(`${ADMIN_API_URL}/${ID}`, { headers : { Authorization : ID } });
    return response.data.result;
})



let AdminDataSlice = createSlice({
    name : "adminData",
    initialState : [],
    extraReducers : builder =>{
        builder.addCase(adminData.fulfilled, (state, action)=>{
            return action.payload;
        });
    }
})

export default AdminDataSlice.reducer;
export {adminData}