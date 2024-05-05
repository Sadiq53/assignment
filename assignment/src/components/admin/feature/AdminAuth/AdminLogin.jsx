import { useFormik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ADMIN_API_URL } from '../../../../util/API_URL'
import { adminLogin } from '../../../../service/AdminService'

const AdminLogin = () => {

  let navigate = useNavigate();
  let [disableBtn, setDisableBtn] = useState(false)
  let [mail, setMail] = useState("")
  let [seconds, setSeconds] = useState(0)
  let [attempt, setAttempt] = useState(false)
  let [alertMsg, setAlertMsg] = useState("")
  let [alert, setAlert] = useState(false)
  let LoginForm = useFormik({
    initialValues : {
      email : "",
      password : "",
      device : ""
    },
    onSubmit : async(formData) =>{
      let userAgent = navigator.userAgent;
      formData.device = userAgent
      let response = await adminLogin(formData)
      if(response.status === 200){
        localStorage.setItem('admintoken', response.token)
        navigate(`/admin/dashboard`)
      }else if(response.status === 403){
        if(response.errType === 1){
          setAlert(true)
          setAlertMsg("Admin ID is Invalid")
          setTimeout(()=>{
            setAlert(false)
          }, 4000)
        }else if(response.errType === 2){
          setAlert(true)
          setAlertMsg("Your Password is Incorrect")
          setTimeout(()=>{
            setAlert(false)
          }, 4000)
        }
      } 
      if(response.timeout) {
        setAttempt(true)
        setTimeout(()=>{
          setAttempt(false)
        }, 60000)
        setSeconds(60)
        let interval = setInterval(()=>{
          setSeconds(prevSeconds => prevSeconds>0 ? prevSeconds - 1 : null)
        }, 1000)
        return () => clearInterval(interval)
      }
      LoginForm.resetForm()
    }
  })

  let checkeAttempt = async() =>{
    let response = await axios.get(`${ADMIN_API_URL}/check-attempt/${mail}`)
    if(response.data.success){
      setDisableBtn(true)
    }else{
      setDisableBtn(false)
    }
  }

  useEffect(()=>{
  checkeAttempt();
  })

  let Time = (sec) =>{
    let minutes = Math.floor(sec/60);
    let seconds = sec % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <>
      <div
  className="page-wrapper"
  id="main-wrapper"
  data-layout="vertical"
  data-sidebartype="full"
  data-sidebar-position="fixed"
  data-header-position="fixed"
>
  <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6 col-xxl-3">
          <div className="card mb-0">
            <div className="card-body">
              <a
                href="index.html"
                className="text-nowrap logo-img text-center d-block mb-5 w-100"
              >
                <img
                  src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg"
                  width={180}
                  alt=""
                />
              </a>
              {
                alert ? <div class="alert alert-danger">
                { alertMsg } <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
                </div> : null
              }
              {
                attempt ? (<div class="alert alert-danger">
                {`Login Attempt Fail! Wait...${ Time(seconds) }`} <button data-dismiss='alert' className='btn' style={{float : "right"}}>X</button>
                </div>) : null
              }
              <div className="row">
                <div className="col-6 mb-2 mb-sm-0">
                  <a
                    className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8"
                    href="javascript:void(0)"
                    role="button"
                  >
                    <img
                      src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/google-icon.svg"
                      alt=""
                      className="img-fluid me-2"
                      width={18}
                      height={18}
                    />
                    <span className="d-none d-sm-block me-1 flex-shrink-0">
                      Sign in with
                    </span>
                    Google
                  </a>
                </div>
                <div className="col-6">
                  <a
                    className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8"
                    href="javascript:void(0)"
                    role="button"
                  >
                    <img
                      src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/facebook-icon.svg"
                      alt=""
                      className="img-fluid me-2"
                      width={18}
                      height={18}
                    />
                    <span className="d-none d-sm-block me-1 flex-shrink-0">
                      Sign in with
                    </span>
                    FB
                  </a>
                </div>
              </div>
              <div className="position-relative text-center my-4">
                <p className="mb-0 fs-4 px-3 d-inline-block bg-white text-dark z-index-5 position-relative">
                  or sign in with
                </p>
                <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
              </div>
              <form onSubmit={LoginForm.handleSubmit}> 
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email Address
                  </label>
                  <input
                    
                    type="email"
                    name='email'
                    onChange={(event)=>{LoginForm.handleChange(event); setMail(event.target.value)}}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    
                    type="password"
                    name='password'
                    onChange={LoginForm.handleChange}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input primary"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckChecked"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="flexCheckChecked"
                    >
                      Remeber this Device
                    </label>
                  </div>
                  <a
                    className="text-primary fw-medium"
                    href="authentication-forgot-password.html"
                  >
                    Forgot Password ?
                  </a>
                </div>
                <button
                  disabled={disableBtn ? true : false}
                  type='submit'
                  className="btn btn-primary w-100 py-8 mb-4 rounded-2"
                >
                  Sign In 
                </button>
                <div className="d-flex align-items-center justify-content-center">
                  <p className="fs-4 mb-0 fw-medium">New to Modernize?</p>
                  <NavLink
                    className="text-primary fw-medium ms-2"
                    to="/usersignup"
                  >
                    Create an account
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default AdminLogin