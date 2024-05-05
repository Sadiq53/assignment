import React from 'react'

const Row2 = () => {
  return (
    <>
        <div className="row">
        {/* Employee Salary */}
        <div className="col-lg-4 d-flex align-items-strech">
          <div className="card w-100">
            <div className="card-body">
              <div>
                <h5 className="card-title fw-semibold mb-1">Employee Salary</h5>
                <p className="card-subtitle mb-0">Every month</p>
                <div id="salary" className="mb-7 pb-8" />
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="bg-light-primary rounded me-8 p-8 d-flex align-items-center justify-content-center">
                      <i className="ti ti-grid-dots text-primary fs-6" />
                    </div>
                    <div>
                      <p className="fs-3 mb-0 fw-normal">Salary</p>
                      <h6 className="fw-semibold text-dark fs-4 mb-0">
                        $36,358
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-light rounded me-8 p-8 d-flex align-items-center justify-content-center">
                      <i className="ti ti-grid-dots text-muted fs-6" />
                    </div>
                    <div>
                      <p className="fs-3 mb-0 fw-normal">Profit</p>
                      <h6 className="fw-semibold text-dark fs-4 mb-0">
                        $5,296
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project */}
        <div className="col-lg-4">
          <div className="row">
            {/* Customers */}
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body pb-0 mb-xxl-4 pb-1">
                  <p className="mb-1 fs-3">Customers</p>
                  <h4 className="fw-semibold fs-7">36,358</h4>
                  <div className="d-flex align-items-center mb-3">
                    <span className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                      <i className="ti ti-arrow-down-right text-danger" />
                    </span>
                    <p className="text-dark fs-3 mb-0">+9%</p>
                  </div>
                </div>
                <div id="customers" />
              </div>
            </div>
            {/* Projects */}
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <p className="mb-1 fs-3">Projects</p>
                  <h4 className="fw-semibold fs-7">78,298</h4>
                  <div className="d-flex align-items-center mb-3">
                    <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                      <i className="ti ti-arrow-up-left text-success" />
                    </span>
                    <p className="text-dark fs-3 mb-0">+9%</p>
                  </div>
                  <div id="projects" />
                </div>
              </div>
            </div>
          </div>
          {/* Comming Soon */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-7 pb-2">
                <div className="me-3 pe-1">
                  <img
                    src="/src/assets/dist/images/profile/user-1.jpg"
                    className="shadow-warning rounded-2"
                    alt=""
                    width={72}
                    height={72}
                  />
                </div>
                <div>
                  <h5 className="fw-semibold fs-5 mb-2">
                    {" "}
                    Super awesome, Vue coming soon!{" "}
                  </h5>
                  <p className="fs-3 mb-0">22 March, 2023</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <ul className="hstack mb-0">
                  <li className="ms-n8">
                    <a href="javascript:void(0)" className="me-1">
                      <img
                        src="/src/assets/dist/images/profile/user-2.jpg"
                        className="rounded-circle border border-2 border-white"
                        width={44}
                        height={44}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="ms-n8">
                    <a href="javascript:void(0)" className="me-1">
                      <img
                        src="/src/assets/dist/images/profile/user-3.jpg"
                        className="rounded-circle border border-2 border-white"
                        width={44}
                        height={44}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="ms-n8">
                    <a href="javascript:void(0)" className="me-1">
                      <img
                        src="/src/assets/dist/images/profile/user-4.jpg"
                        className="rounded-circle border border-2 border-white"
                        width={44}
                        height={44}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="ms-n8">
                    <a href="javascript:void(0)" className="me-1">
                      <img
                        src="/src/assets/dist/images/profile/user-5.jpg"
                        className="rounded-circle border border-2 border-white"
                        width={44}
                        height={44}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="bg-light rounded py-1 px-8 d-flex align-items-center text-decoration-none"
                >
                  <i className="ti ti-message-2 fs-6 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Selling Products */}
        <div className="col-lg-4 d-flex align-items-strech">
          <div className="card bg-primary border-0 w-100">
            <div className="card-body pb-0">
              <h5 className="fw-semibold mb-1 text-white card-title">
                {" "}
                Best Selling Products{" "}
              </h5>
              <p className="fs-3 mb-3 text-white">Overview 2023</p>
              <div className="text-center mt-3">
                <img
                  src="/src/assets/dist/images/backgrounds/piggy.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="card mx-2 mb-2 mt-n2">
              <div className="card-body">
                <div className="mb-7 pb-1">
                  <div className="d-flex justify-content-between align-items-center mb-6">
                    <div>
                      <h6 className="mb-1 fs-4 fw-semibold">MaterialPro</h6>
                      <p className="fs-3 mb-0">$23,568</p>
                    </div>
                    <div>
                      <span className="badge bg-light-primary text-primary fw-semibold fs-3">
                        55%
                      </span>
                    </div>
                  </div>
                  <div
                    className="progress bg-light-primary"
                    style={{ height: 4 }}
                  >
                    <div
                      className="progress-bar w-50"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-6">
                    <div>
                      <h6 className="mb-1 fs-4 fw-semibold">Flexy Admin</h6>
                      <p className="fs-3 mb-0">$23,568</p>
                    </div>
                    <div>
                      <span className="badge bg-light-secondary text-secondary fw-bold fs-3">
                        20%
                      </span>
                    </div>
                  </div>
                  <div
                    className="progress bg-light-secondary"
                    style={{ height: 4 }}
                  >
                    <div
                      className="progress-bar bg-secondary w-25"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
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

export default Row2