import React from 'react'

const Row1 = () => {
  return (
    <>
        <div className="row">
        <div className="col-lg-8 d-flex align-items-strech">
          <div className="card w-100">
            <div className="card-body">
              <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title fw-semibold">Revenue Updates</h5>
                  <p className="card-subtitle mb-0">Overview of Profit</p>
                </div>
                <div>
                  <select className="form-select">
                    <option value={1}>March 2023</option>
                    <option value={2}>April 2023</option>
                    <option value={3}>May 2023</option>
                    <option value={4}>June 2023</option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-8">
                  <div id="chart" />
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="d-flex align-items-center mb-4 pb-1">
                    <div className="p-8 bg-light-primary rounded-1 me-3 d-flex align-items-center justify-content-center">
                      <i className="ti ti-grid-dots text-primary fs-6" />
                    </div>
                    <div>
                      <h4 className="mb-0 fs-7 fw-semibold">$63,489.50</h4>
                      <p className="fs-3 mb-0">Total Earnings</p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-baseline mb-4">
                      <span className="round-8 bg-primary rounded-circle me-6" />
                      <div>
                        <p className="fs-3 mb-1">Earnings this month</p>
                        <h6 className="fs-5 fw-semibold mb-0">$48,820</h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline mb-4 pb-1">
                      <span className="round-8 bg-secondary rounded-circle me-6" />
                      <div>
                        <p className="fs-3 mb-1">Expense this month</p>
                        <h6 className="fs-5 fw-semibold mb-0">$26,498</h6>
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-primary w-100">
                        View Full Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-12">
              {/* Yearly Breakup */}
              <div className="card overflow-hidden">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h5 className="card-title mb-9 fw-semibold">
                        Yearly Breakup
                      </h5>
                      <h4 className="fw-semibold mb-3">$36,358</h4>
                      <div className="d-flex align-items-center mb-3">
                        <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                          <i className="ti ti-arrow-up-left text-success" />
                        </span>
                        <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                        <p className="fs-3 mb-0">last year</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="me-4">
                          <span className="round-8 bg-primary rounded-circle me-2 d-inline-block" />
                          <span className="fs-2">2023</span>
                        </div>
                        <div>
                          <span className="round-8 bg-light-primary rounded-circle me-2 d-inline-block" />
                          <span className="fs-2">2023</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-center">
                        <div id="breakup" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6 col-sm-12">
              {/* Monthly Earnings */}
              <div className="card">
                <div className="card-body">
                  <div className="row alig n-items-start">
                    <div className="col-8">
                      <h5 className="card-title mb-9 fw-semibold">
                        {" "}
                        Monthly Earnings{" "}
                      </h5>
                      <h4 className="fw-semibold mb-3">$6,820</h4>
                      <div className="d-flex align-items-center pb-1">
                        <span className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                          <i className="ti ti-arrow-down-right text-danger" />
                        </span>
                        <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                        <p className="fs-3 mb-0">last year</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="d-flex justify-content-end">
                        <div className="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                          <i className="ti ti-currency-dollar fs-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="earning" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Row1