import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import {userSignup} from '../../../../service/UserService'

const UserSignup = () => {


  let navigate = useNavigate();
  let [alertMsg, setAlertMsg] = useState("")
  let [alert, setAlert] = useState(false)
  let SignupForm = useFormik({
    initialValues : {
      username : "",
      email : "",
      password : "",
      device : ""
    },
    onSubmit : async(formData) =>{
      let userAgent = navigator.userAgent;
      formData.device = userAgent
      let response = await userSignup(formData)
      if(response.status === 200){
        localStorage.setItem('usertoken', response.token)
        navigate(`/user/dashboard`)
      }else if(response.status === 403){
        if(response.errType === 1){
          setAlert(true)
          setAlertMsg("Email ID Alredy Exist")
          setTimeout(()=>{
            setAlert(false)
          }, 4000)
        }
        }
      }
  })

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
                      Sign Up with
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
                      Sign Up with
                    </span>
                    FB
                  </a>
                </div>
              </div>
              <div className="position-relative text-center my-4">
                <p className="mb-0 fs-4 px-3 d-inline-block bg-white z-index-5 position-relative">
                  or sign Up with
                </p>
                <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
              </div>
              <form onSubmit={SignupForm.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='username'
                    onChange={SignupForm.handleChange}
                    id="exampleInputtext"
                    aria-describedby="textHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name='email'
                    onChange={SignupForm.handleChange}
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
                    onChange={SignupForm.handleChange}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button
                  type='submit'
                  className="btn btn-primary w-100 py-8 mb-4 rounded-2"
                >
                  Sign Up
                </button>
                <div className="d-flex align-items-center">
                  <p className="fs-4 mb-0 text-dark">
                    Already have an Account?
                  </p>
                  <NavLink
                    className="text-primary fw-medium ms-2"
                    to="/userlogin"
                  >
                    Sign In
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

export default UserSignup