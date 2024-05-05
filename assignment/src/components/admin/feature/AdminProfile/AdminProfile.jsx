import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blockUser, unBlockUser } from '../../../../redux/UserDataSlice';

const AdminProfile = () => {

    let dispatch = useDispatch();
    let getUserData = useSelector(state=>state.UserDataSlice)
    // console.log(getUserData)
    let getData = useSelector(state=>state.AdminDataSlice)
    let {username, email, basic_info} = getData;
    let device = basic_info && basic_info.length >= 2 ? basic_info[basic_info.length - 2] : null;
    let BlockUser = (id) =>{
        // console.log(id)
        dispatch(blockUser(id))
    }
    let UnBlockUser = (id) =>{
        dispatch(unBlockUser(id))
    }

  return (
    <>
        <div className="container-fluid">
  <div className="card bg-light-info shadow-none position-relative overflow-hidden">
    <div className="card-body px-4 py-3">
      <div className="row align-items-center">
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
      <ul className="nav nav-pills user-profile-tab" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link position-relative rounded-0 active d-flex align-items-center justify-content-center bg-transparent fs-3 py-4" id="pills-account-tab" data-bs-toggle="pill" data-bs-target="#pills-account" type="button" role="tab" aria-controls="pills-account" aria-selected="true">
                  <i className="ti ti-user-circle me-2 fs-6"></i>
                  <span className="d-none d-md-block">Account</span> 
                </button>
              </li>
              {/* <li className="nav-item" role="presentation">
                <button className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-4" id="pills-notifications-tab" data-bs-toggle="pill" data-bs-target="#pills-notifications" type="button" role="tab" aria-controls="pills-notifications" aria-selected="false">
                  <i className="ti ti-bell me-2 fs-6"></i>
                  <span className="d-none d-md-block">Notifications</span> 
                </button>
              </li> */}
              <li className="nav-item" role="presentation">
                <button className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-4" id="pills-bills-tab" data-bs-toggle="pill" data-bs-target="#pills-bills" type="button" role="tab" aria-controls="pills-bills" aria-selected="false">
                  <i className="ti ti-article me-2 fs-6"></i>
                  <span className="d-none d-md-block">About User</span> 
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-4" id="pills-security-tab" data-bs-toggle="pill" data-bs-target="#pills-security" type="button" role="tab" aria-controls="pills-security" aria-selected="false">
                  <i className="ti ti-lock me-2 fs-6"></i>
                  <span className="d-none d-md-block">Security</span> 
                </button>
              </li>
            </ul>
    </div>
  </div>
  <div className="card-body">
  <div className="tab-content" id="pills-tabContent">
    <div
      className="tab-pane fade show active"
      id="pills-account"
      role="tabpanel"
      aria-labelledby="pills-account-tab"
      tabIndex={0}
    >
      <div className="row">
        <div className="col-lg-6 d-flex align-items-stretch">
          <div className="card w-100 position-relative overflow-hidden">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold">Admin Data</h5>
              <p className="card-subtitle mb-4">
                Admin data Details
              </p>
              <div className="my-3">
                <div className="d-flex  my-4 gap-3">
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
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-stretch">
          <div className="card w-100 position-relative overflow-hidden">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold">Change Password</h5>
              <p className="card-subtitle mb-4">
                To change your password please confirm here
              </p>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label fw-semibold"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    defaultValue={12345678910}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label fw-semibold"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    defaultValue={12345678910}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label fw-semibold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    defaultValue={12345678910}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card w-100 position-relative overflow-hidden mb-0">
            <div className="card-body p-4">
              <h5 className="card-title fw-semibold">Personal Details</h5>
              <p className="card-subtitle mb-4">
                To change your personal detail , edit and save from here
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label fw-semibold"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputtext"
                        placeholder="Mathew Anderson"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label fw-semibold"
                      >
                        Location
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected="">United Kingdom</option>
                        <option value={1}>United States</option>
                        <option value={2}>United Kingdom</option>
                        <option value={3}>India</option>
                        <option value={3}>Russia</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label fw-semibold"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputtext"
                        placeholder="info@modernize.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label fw-semibold"
                      >
                        Store Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputtext"
                        placeholder="Maxima Studio"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label fw-semibold"
                      >
                        Currency
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected="">India (INR)</option>
                        <option value={1}>US Dollar ($)</option>
                        <option value={2}>United Kingdom (Pound)</option>
                        <option value={3}>India (INR)</option>
                        <option value={3}>Russia (Ruble)</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label fw-semibold"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputtext"
                        placeholder="+91 12345 65478"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label fw-semibold"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputtext"
                        placeholder="814 Howard Street, 120065, India"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center justify-content-end mt-4 gap-3">
                      <button className="btn btn-primary">Save</button>
                      <button className="btn btn-light-danger text-danger">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div
      className="tab-pane fade"
      id="pills-notifications"
      role="tabpanel"
      aria-labelledby="pills-notifications-tab"
      tabIndex={0}
    >
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="card">
            <div className="card-body p-4">
              <h4 className="fw-semibold mb-3">Notification Preferences</h4>
              <p>
                Select the notificaitons ou would like to receive via email.
                Please note that you cannot opt out of receving service
                messages, such as payment, security or legal notifications.
              </p>
              <form className="mb-7">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label fw-semibold"
                >
                  Email Address*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputtext"
                  placeholder=""
                  required=""
                />
                <p className="mb-0">Required for notificaitons.</p>
              </form>
              <div className="">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                      <i
                        className="ti ti-article text-dark d-block fs-7"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div>
                      <h5 className="fs-4 fw-semibold">Our newsletter</h5>
                      <p className="mb-0">
                        We'll always let you know about important changes
                      </p>
                    </div>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                      <i
                        className="ti ti-checkbox text-dark d-block fs-7"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div>
                      <h5 className="fs-4 fw-semibold">Order Confirmation</h5>
                      <p className="mb-0">
                        You will be notified when customer order any product
                      </p>
                    </div>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      defaultChecked=""
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                      <i
                        className="ti ti-clock-hour-4 text-dark d-block fs-7"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div>
                      <h5 className="fs-4 fw-semibold">Order Status Changed</h5>
                      <p className="mb-0">
                        You will be notified when customer make changes to the
                        order
                      </p>
                    </div>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      defaultChecked=""
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                      <i
                        className="ti ti-truck-delivery text-dark d-block fs-7"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div>
                      <h5 className="fs-4 fw-semibold">Order Delivered</h5>
                      <p className="mb-0">
                        You will be notified once the order is delivered
                      </p>
                    </div>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                      <i
                        className="ti ti-mail text-dark d-block fs-7"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div>
                      <h5 className="fs-4 fw-semibold">Email Notification</h5>
                      <p className="mb-0">
                        Turn on email notificaiton to get updates through email
                      </p>
                    </div>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      defaultChecked=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="card">
            <div className="card-body p-4">
              <h4 className="fw-semibold mb-3">Date &amp; Time</h4>
              <p>Time zones and calendar display settings.</p>
              <div className="d-flex align-items-center justify-content-between mt-7">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                    <i
                      className="ti ti-clock-hour-4 text-dark d-block fs-7"
                      width={22}
                      height={22}
                    />
                  </div>
                  <div>
                    <p className="mb-0">Time zone</p>
                    <h5 className="fs-4 fw-semibold">
                      (UTC + 02:00) Athens, Bucharet
                    </h5>
                  </div>
                </div>
                <a
                  className="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                  href="javascript:void(0)"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Download"
                >
                  <i className="ti ti-download" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="card">
            <div className="card-body p-4">
              <h4 className="fw-semibold mb-3">Ignore Tracking</h4>
              <div className="d-flex align-items-center justify-content-between mt-7">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                    <i
                      className="ti ti-player-pause text-dark d-block fs-7"
                      width={22}
                      height={22}
                    />
                  </div>
                  <div>
                    <h5 className="fs-4 fw-semibold">
                      Ignore Browser Tracking
                    </h5>
                    <p className="mb-0">Browser Cookie</p>
                  </div>
                </div>
                <div className="form-check form-switch mb-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-end gap-3">
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-light-danger text-danger">Cancel</button>
          </div>
        </div>
      </div>
    </div> */}
    <div
      className="tab-pane fade"
      id="pills-bills"
      role="tabpanel"
      aria-labelledby="pills-bills-tab"
      tabIndex={0}
    >
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="card">
            <div className="card-body">
            <div className="card-body">
  <h4 className="card-title">Active Users</h4>
  <div className="mailbox">
    <div
      className="
                  message-center
                  contact-widget
                  position-relative
                "
      style={{ height: 450 }}
    >
    {
        getUserData ? getUserData?.map((value)=>{
            return(
                <a
                value={value?._id}
        href="javascript:void(0)"
        className="
                    message-item
                    d-flex
                    align-items-center
                    border-bottom
                    p-3
                  "
      >
        <span className="user-img position-relative d-inline-block">
          <img
            src="../../dist/images/profile/user-1.jpg"
            alt="user"
            className="rounded-circle w-100 round-40"
          />
          <span className="profile-status rounded-circle online" />
        </span>
        <div className="w-75 d-inline-block v-middle ps-3">
        <div className="row">
            <div className="col-md-8">
            <h5 className="message-title mb-0 mt-1 fs-4">{value.username}</h5>
          <span
            className="
                        fs-2
                        text-nowrap
                        d-block
                        time
                        text-truncate text-muted
                      "
          >
            {value.email}<br/>
            Device : {value?.basic_info[value.basic_info?.length-1]?.device}<br/>
            Last Seen : {value?.basic_info[value.basic_info?.length-1]?.logout}
          </span>
            </div>
            <div className="col-md-4">
               {
                value.block ?  <button className='btn btn-success'
                onClick={()=>{UnBlockUser(value._id)}}
                >Unblock User</button> :
                <button className='btn btn-danger'
                onClick={()=>{BlockUser(value._id)}}
                >Block User</button>
               }
            </div>
        </div>
        </div>
      </a>
            )
        })
      : "Fetching Data......"
    }
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
        {/* <div className="col-lg-9">
          <div className="card">
            <div className="card-body p-4">
              <h4 className="fw-semibold mb-3">
                Current Plan : <span className="text-success">Executive</span>
              </h4>
              <p>
                Thanks for being a premium member and supporting our
                development.
              </p>
              <div className="d-flex align-items-center justify-content-between mt-7 mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                    <i
                      className="ti ti-package text-dark d-block fs-7"
                      width={22}
                      height={22}
                    />
                  </div>
                  <div>
                    <p className="mb-0">Current Plan</p>
                    <h5 className="fs-4 fw-semibold">750.000 Monthly Visits</h5>
                  </div>
                </div>
                <a
                  className="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                  href="javascript:void(0)"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Add"
                >
                  <i className="ti ti-circle-plus" />
                </a>
              </div>
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-primary">Change Plan</button>
                <button className="btn btn-outline-danger">Reset Plan</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="card">
            <div className="card-body p-4">
              <h4 className="fw-semibold mb-3">Payment Method</h4>
              <p>On 26 December, 2023</p>
              <div className="d-flex align-items-center justify-content-between mt-7">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                    <i
                      className="ti ti-credit-card text-dark d-block fs-7"
                      width={22}
                      height={22}
                    />
                  </div>
                  <div>
                    <h5 className="fs-4 fw-semibold">Visa</h5>
                    <p className="mb-0 text-dark">*****2102</p>
                  </div>
                </div>
                <a
                  className="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                  href="javascript:void(0)"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Edit"
                >
                  <i className="ti ti-pencil-minus" />
                </a>
              </div>
              <p className="my-2">
                If you updated your payment method, it will only be dislpayed
                here after your next billing cycle.
              </p>
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-outline-danger">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-end gap-3">
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-light-danger text-danger">Cancel</button>
          </div>
        </div> */}
      </div>
    </div>
    <div
      className="tab-pane fade"
      id="pills-security"
      role="tabpanel"
      aria-labelledby="pills-security-tab"
      tabIndex={0}
    >
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body p-4">
              <h4 className="fw-semibold mb-3">Two-factor Authentication</h4>
              <div className="d-flex align-items-center justify-content-between pb-7">
                <p className="mb-0">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis sapiente sunt earum officiis laboriosam ut.
                </p>
                <button className="btn btn-primary">Enable</button>
              </div>
              <div className="d-flex align-items-center justify-content-between py-3 border-top">
                <div>
                  <h5 className="fs-4 fw-semibold mb-0">Authentication App</h5>
                  <p className="mb-0">Google auth app</p>
                </div>
                <button className="btn btn-light-primary text-primary">
                  Setup
                </button>
              </div>
              <div className="d-flex align-items-center justify-content-between py-3 border-top">
                <div>
                  <h5 className="fs-4 fw-semibold mb-0">Another e-mail</h5>
                  <p className="mb-0">E-mail to send verification link</p>
                </div>
                <button className="btn btn-light-primary text-primary">
                  Setup
                </button>
              </div>
              <div className="d-flex align-items-center justify-content-between py-3 border-top">
                <div>
                  <h5 className="fs-4 fw-semibold mb-0">SMS Recovery</h5>
                  <p className="mb-0">Your phone number or something</p>
                </div>
                <button className="btn btn-light-primary text-primary">
                  Setup
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body p-4">
              <div className="bg-light rounded-1 p-6 d-inline-flex align-items-center justify-content-center mb-3">
                <i
                  className="ti ti-device-laptop text-primary d-block fs-7"
                  width={22}
                  height={22}
                />
              </div>
              <h5 className="fs-5 fw-semibold mb-0">Devices</h5>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Rem.
              </p>
              <button className="btn btn-primary mb-4">
                Sign out from all devices
              </button>
              {/* <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                <div className="d-flex align-items-center gap-3">
                  <i
                    className="ti ti-device-mobile text-dark d-block fs-7"
                    width={26}
                    height={26}
                  />
                  <div>
                    <h5 className="fs-4 fw-semibold mb-0">iPhone 14</h5>
                    <p className="mb-0">London UK, Oct 23 at 1:15 AM</p>
                  </div>
                </div>
                <a
                  className="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-dots-vertical" />
                </a>
              </div> */}
              <div className="d-flex align-items-center justify-content-between py-3">
                <div className="d-flex align-items-center gap-3">
                  <i
                    className="ti ti-device-laptop text-dark d-block fs-7"
                    width={26}
                    height={26}
                  />
                  <div>
                    <h5 className="fs-4 fw-semibold mb-0">{device?.device}</h5>
                    <p className="mb-0">{device?.login}</p>
                  </div>
                </div>
                <a
                  className="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-dots-vertical" />
                </a>
              </div>
              <button className="btn btn-light-primary text-primary w-100 py-1">
                Need Help ?
              </button>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-end gap-3">
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-light-danger text-danger">Cancel</button>
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

export default AdminProfile