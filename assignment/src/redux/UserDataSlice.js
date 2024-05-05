import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_API_URL } from '../util/API_URL'

let userData = createAsyncThunk("userData", async(ID)=>{
    let response = await axios.get(`${USER_API_URL}/${ID}`, { headers : { Authorization : ID } });
    return response.data.result;
})

let allUserData = createAsyncThunk("allUserData", async()=>{
    let response = await axios.get(`${USER_API_URL}`);
    return response.data;
})

let blockUser = createAsyncThunk("blockUser", async(ID)=>{
    let response = await axios.post(`${USER_API_URL}/block/${ID}`)
    return ID
})
let unBlockUser = createAsyncThunk("unBlockUser", async(ID)=>{
    let response = await axios.post(`${USER_API_URL}/unblock/${ID}`)
    return ID
})

let UserDataSlice = createSlice({
    name : "userData",
    initialState : [],
    extraReducers : builder =>{
        builder.addCase(userData.fulfilled, (state, action)=>{
            return action.payload;
        });
        builder.addCase(allUserData.fulfilled, (state, action)=>{
            return action.payload
        });
        builder.addCase(blockUser.fulfilled, (state, action)=>{
            let index = state.findIndex(value=>value._id === action.payload);
            if(index !== -1){
                return state.map((user, i)=>{
                    if(i === index){
                        return {...user, block : true};
                    }else{
                        return user;
                    }
                })
            }else{
                return state
            }
        });
        builder.addCase(unBlockUser.fulfilled, (state, action)=>{
            let index = state.findIndex(value=>value._id === action.payload);
            if(index !== -1){
                return state.map((user, i)=>{
                    if(i === index){
                        return {...user, block : false};
                    }else{
                        return user;
                    }
                })
            }else{
                return state
            }
        });
    }
})

export default UserDataSlice.reducer;
export {userData, allUserData, blockUser, unBlockUser}