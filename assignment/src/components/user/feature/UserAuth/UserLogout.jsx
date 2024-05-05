import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { userLogout } from '../../../../service/UserService'

const UserLogout = () => {

  let navigate = useNavigate();
  let [errMsg, setErrMsg] = useState("")
  let pageLoad = async() =>{
    let ID = localStorage.getItem('usertoken')
    let userAgent = navigator.userAgent;
    let response = await userLogout(ID, userAgent);
    if(response.success === true){
        localStorage.removeItem('usertoken')
        navigate(`/userlogin`)
      }else{
        setErrMsg("Wating for Server to Response")
      }
    }
    useEffect(()=>{
      pageLoad();
    })

  return (
  <div className="container">
    <h3>{errMsg}</h3>
  </div>
  )
}

export default UserLogout