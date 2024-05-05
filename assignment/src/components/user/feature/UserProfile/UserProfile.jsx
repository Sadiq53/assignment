import React, { useEffect, useState } from 'react'
import BreadCrumb from './BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'

const UserProfile = () => {

    let getData = useSelector(state=>state.UserDataSlice)
    let {username, email, basic_info} = getData
    let device = basic_info && basic_info.length >= 2 ? basic_info[basic_info.length - 2] : null;
    
  return (
    <>
 <div className="container-fluid">
  <div className="card bg-light-info shadow-none position-relative overflow-hidden">
    <div className="card-body px-4 py-3">
      <div className="row align-items-center">
        <BreadCrumb />
        <div className="col-3">
          <div className="text-center mb-n5">  
            <img src="/src/assets/dist/images/breadcrumb/ChatBc.png" alt className="img-fluid mb-n4" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="card overflow-hidden">
    <div className="card-body p-0">
      <img src="/src/assets/dist/images/backgrounds/profilebg.jpg" alt className="img-fluid" />
      <div className="row align-items-center">
        <div className="col-lg-4 order-lg-1 order-2">
          <div className="d-flex align-items-center justify-content-around m-4">
            <div className="text-center">
              <i className="ti ti-file-description fs-6 d-block mb-2" />
              <h4 className="mb-0 fw-semibold lh-1">938</h4>
              <p className="mb-0 fs-4">Posts</p>
            </div>
            <div className="text-center">
              <i className="ti ti-user-circle fs-6 d-block mb-2" />
              <h4 className="mb-0 fw-semibold lh-1">3,586</h4>
              <p className="mb-0 fs-4">Followers</p>
            </div>
            <div className="text-center">
              <i className="ti ti-user-check fs-6 d-block mb-2" />
              <h4 className="mb-0 fw-semibold lh-1">2,659</h4>
              <p className="mb-0 fs-4">Following</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-n3 order-lg-2 order-1">
          <div className="mt-n5">
            <div className="d-flex align-items-center justify-content-center mb-2">
              <div className="linear-gradient d-flex align-items-center justify-content-center rounded-circle" style={{width: 110, height: 110}}>
                <div className="border border-4 border-white d-flex align-items-center justify-content-center rounded-circle overflow-hidden" style={{width: 100, height: 100}}>
                  <img src="/src/assets/dist/images/profile/user-1.jpg" alt className="w-100 h-100" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h5 className="fs-5 mb-0 fw-semibold">{username}</h5>
              <p className="mb-0 fs-4">Designer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 order-last">
          <ul className="list-unstyled d-flex align-items-center justify-content-center justify-content-lg-start my-3 gap-3">
            <li className="position-relative">
              <a className="text-white d-flex align-items-center justify-content-center bg-primary p-2 fs-4 rounded-circle" href="javascript:void(0)" width={30} height={30}>
                <i className="ti ti-brand-facebook" />
              </a>
            </li>
            <li className="position-relative">
              <a className="text-white bg-secondary d-flex align-items-center justify-content-center p-2 fs-4 rounded-circle " href="javascript:void(0)">
                <i className="ti ti-brand-twitter" />
              </a>
            </li>
            <li className="position-relative">
              <a className="text-white bg-secondary d-flex align-items-center justify-content-center p-2 fs-4 rounded-circle " href="javascript:void(0)">
                <i className="ti ti-brand-dribbble" />
              </a>
            </li>
            <li className="position-relative">
              <a className="text-white bg-danger d-flex align-items-center justify-content-center p-2 fs-4 rounded-circle " href="javascript:void(0)">
                <i className="ti ti-brand-youtube" />
              </a>
            </li>
            <li><button className="btn btn-primary">Add To Story</button></li>
          </ul>
        </div>
      </div>
      {/* <ul className="nav nav-pills user-profile-tab justify-content-end mt-2 bg-light-info rounded-2" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link position-relative rounded-0 active d-flex align-items-center justify-content-center bg-transparent fs-3 py-6" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true">
            <i className="ti ti-user-circle me-2 fs-6" />
            <span className="d-none d-md-block">Profile</span> 
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6" id="pills-followers-tab" data-bs-toggle="pill" data-bs-target="#pills-followers" type="button" role="tab" aria-controls="pills-followers" aria-selected="false">
            <i className="ti ti-heart me-2 fs-6" />
            <span className="d-none d-md-block">Followers</span> 
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6" id="pills-friends-tab" data-bs-toggle="pill" data-bs-target="#pills-friends" type="button" role="tab" aria-controls="pills-friends" aria-selected="false">
            <i className="ti ti-user-circle me-2 fs-6" />
            <span className="d-none d-md-block">Friends</span> 
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6" id="pills-gallery-tab" data-bs-toggle="pill" data-bs-target="#pills-gallery" type="button" role="tab" aria-controls="pills-gallery" aria-selected="false">
            <i className="ti ti-photo-plus me-2 fs-6" />
            <span className="d-none d-md-block">Gallery</span> 
          </button>
        </li>
      </ul> */}
    </div>
  </div>
  <div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
      <div className="row">
        <div className="col-lg-4">
          <div className="card shadow-none border">
            <div className="card-body">
              <h4 className="fw-semibold mb-3">Introduction</h4>
              <p>Hello, I am {username}. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-center gap-3 mb-4">
                  <i className="ti ti-briefcase text-dark fs-6" />
                  <h6 className="fs-4 fw-semibold mb-0">Sir, P P Institute Of Science</h6>
                </li>
                <li className="d-flex align-items-center gap-3 mb-4">
                  <i className="ti ti-mail text-dark fs-6" />
                  <h6 className="fs-4 fw-semibold mb-0">{email}</h6>
                </li>
                <li className="d-flex align-items-center gap-3 mb-4">
                  <i className="ti ti-device-desktop text-dark fs-6" />
                  <h6 className="fs-4 fw-semibold mb-0">www.xyz.com</h6>
                </li>
                <li className="d-flex align-items-center gap-3 mb-2">
                  <i className="ti ti-map-pin text-dark fs-6" />
                  <h6 className="fs-4 fw-semibold mb-0">Noorani Nagar, Dhar Road,Indor</h6>
                </li>
                <li className="d-flex mt-4 align-items-center gap-3 mb-2">
                  {/* <i className="ti ti-map-pin text-dark fs-6" /> */}
                  <h6 className="fs-4 fw-semibold mb-0">Last Seen : <small>{device ? device?.login : "Fetching Data ..."}</small></h6>
                </li>
                {/* <li className="d-flex align-items-center gap-3 mb-2">
                  <i className="ti ti-map-pin text-dark fs-6" />
                  <h6 className="fs-4 fw-semibold mb-0">Noorani Nagar, Dhar Road,Indor</h6>
                </li> */} 
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card shadow-none border">
            <div className="card-body">
            <div className="card-body text-center">
                <div className="profile-pic mb-3 mt-3">
                    <img
                    src="/src/assets/dist/images/profile/user-1.jpg"
                    width={150}
                    className="rounded-circle"
                    alt="user"
                    />
                    <h4 className="mt-3 mb-0">{getData.username}</h4>
                    <a href="mailto:danielkristeen@gmail.com">{getData.email}</a>
                </div>
                <div
                    className="
                                badge
                                rounded-pill
                                bg-light-secondary
                                text-secondary
                                font-weight-medium
                                fs-4
                            "
                >
                    Dashboard
                </div>
                <div
                    className="
                                badge
                                rounded-pill
                                bg-light-secondary
                                text-secondary
                                font-weight-medium
                                fs-4
                            "
                >
                    UI
                </div>
                <div
                    className="
                                badge
                                rounded-pill
                                bg-light-secondary
                                text-secondary
                                font-weight-medium
                                fs-4
                            "
                >
                    UX
                </div>
                <div
                    className="badge rounded-pill bg-info fs-4"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-original-title="3 more"
                >
                    +3
                </div>
                </div>

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

export default UserProfile