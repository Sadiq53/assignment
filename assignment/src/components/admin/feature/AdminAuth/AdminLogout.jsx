import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { adminLogout } from '../../../../service/AdminService';

const AdminLogout = () => {
  
    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("")
    let pageLoad = async() =>{
    let ID = localStorage.getItem('admintoken')
    let userAgent = navigator.userAgent;
    let response = await adminLogout(ID, userAgent);
    if(response.success === true){
        localStorage.removeItem('admintoken')
        navigate(`/adminlogin`)
    }else{
        setErrMsg("Wating for Server to Response")
        }
    }
    useEffect(()=>{
        pageLoad();
    })

    return (
    <>
    <div className="container">
        <h3>{errMsg}</h3>
    </div>
    </>
  )
}

export default AdminLogout