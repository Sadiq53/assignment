import axios from 'axios'
import {USER_API_URL} from '../util/API_URL'

let userLogin = async(formData) =>{
    let response = await axios.post(`${USER_API_URL}`, formData)
    return response.data
}   

let userSignup = async(formData) =>{
    let response = await axios.post(`${USER_API_URL}/signup`, formData)
    return response.data
}

let userLogout = async(ID, userAgent) =>{
    let response = await axios.post(`${USER_API_URL}/logout`, { id : ID, device : userAgent })
    return response.data
}

let userData = async(ID) =>{
    let response = await axios.get(`${USER_API_URL}/${ID}`)
    return response.data
}

export {userLogin, userSignup, userLogout, userData}