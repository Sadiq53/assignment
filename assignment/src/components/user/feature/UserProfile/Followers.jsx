import React from 'react'

const Followers = () => {
  return (
    <>
        <div className="tab-pane fade" id="pills-followers" role="tabpanel" aria-labelledby="pills-followers-tab" tabIndex={0}>
      <div className="d-sm-flex align-items-center justify-content-between mt-3 mb-4">
        <h3 className="mb-3 mb-sm-0 fw-semibold d-flex align-items-center">Followers <span className="badge text-bg-secondary fs-2 rounded-4 py-1 px-2 ms-2">20</span></h3>
        <form className="position-relative">
          <input type="text" className="form-control search-chat py-2 ps-5" id="text-srh" placeholder="Search Followers" />
          <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y text-dark ms-3" />
        </form>
      </div>
      <div className="row">
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-1.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Betty Adams</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Sint Maarten</span>
              </div>
              <button className="btn btn-outline-primary py-1 px-2 ms-auto">Follow</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-2.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Virginia Wong</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Tunisia</span>
              </div>
              <button className="btn btn-outline-primary py-1 px-2 ms-auto">Follow</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-3.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Birdie Burgess</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Algeria</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-4.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Steven Lindsey</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Malaysia</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-5.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Hannah Rhodes</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Grenada</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-6.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Effie Gross</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Azerbaijan</span>
              </div>
              <button className="btn btn-outline-primary py-1 px-2 ms-auto">Follow</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-7.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Mark Barton</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />French Southern Territories</span>
              </div>
              <button className="btn btn-outline-primary py-1 px-2 ms-auto">Follow</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-8.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Carolyn Knight</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Nauru</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-9.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Elizabeth Malone</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Djibouti</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-10.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Jon Cohen</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />United States</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-1.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Mary Hernandez</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Equatorial Guinea</span>
              </div>
              <button className="btn btn-outline-primary py-1 px-2 ms-auto">Follow</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-2.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Willie Peterson</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Solomon Islands</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-3.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Harvey Baldwin</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Uruguay</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-4.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Alice George</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Madagascar</span>
              </div>
              <button className="btn btn-outline-primary py-1 px-2 ms-auto">Follow</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-5.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Beulah Simpson</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Bahrain</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-6.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Francis Barber</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Colombia</span>
              </div>
              <button className="btn btn-outline-primary py-1 px-2 ms-auto">Follow</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-7.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Christian Morales</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Maldives</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-8.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Laura Nelson</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />St. Helena</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-9.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Blanche Strickland</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />South Africa</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body p-4 d-flex align-items-center gap-3">
              <img src="/src/assets/dist/images/profile/user-10.jpg" alt className="rounded-circle" width={40} height={40} />
              <div>
                <h5 className="fw-semibold mb-0">Adam Washington</h5>
                <span className="fs-2 d-flex align-items-center"><i className="ti ti-map-pin text-dark fs-3 me-1" />Suriname</span>
              </div>
              <button className="btn btn-primary py-1 px-2 ms-auto">Followed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Followers