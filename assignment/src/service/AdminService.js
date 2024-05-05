import axios from 'axios'
import {ADMIN_API_URL} from '../util/API_URL'

let adminLogin = async(formData) =>{
    let response = await axios.post(`${ADMIN_API_URL}`, formData)
    return response.data
}   

let adminLogout = async(ID, userAgent) =>{
    let response = await axios.post(`${ADMIN_API_URL}/logout`, { id : ID, device : userAgent })
    return response.data
}

let adminData = async(ID) =>{
    let response = await axios.get(`${ADMIN_API_URL}/${ID}`)
    return response.data
}

export {adminLogin, adminLogout, adminData}