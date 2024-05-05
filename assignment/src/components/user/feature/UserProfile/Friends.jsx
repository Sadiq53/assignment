import React from 'react'

const Friends = () => {
  return (
    <>
        <div className="tab-pane fade" id="pills-friends" role="tabpanel" aria-labelledby="pills-friends-tab" tabIndex={0}>
      <div className="d-sm-flex align-items-center justify-content-between mt-3 mb-4">
        <h3 className="mb-3 mb-sm-0 fw-semibold d-flex align-items-center">Friends <span className="badge text-bg-secondary fs-2 rounded-4 py-1 px-2 ms-2">20</span></h3>
        <form className="position-relative">
          <input type="text" className="form-control search-chat py-2 ps-5" id="text-srh" placeholder="Search Friends" />
          <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y text-dark ms-3" />
        </form>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-1.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Betty Adams</h5>
              <span className="text-dark fs-2">Medical Secretary</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-2.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Inez Lyons</h5>
              <span className="text-dark fs-2">Medical Technician</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-3.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Lydia Bryan</h5>
              <span className="text-dark fs-2">Preschool Teacher</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-4.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Carolyn Bryant</h5>
              <span className="text-dark fs-2">Legal Secretary</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-5.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Paul Benson</h5>
              <span className="text-dark fs-2">Safety Engineer</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-6.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Robert Francis</h5>
              <span className="text-dark fs-2">Nursing Administrator</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-7.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Billy Rogers</h5>
              <span className="text-dark fs-2">Legal Secretary</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-8.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Rosetta Brewer</h5>
              <span className="text-dark fs-2">Comptroller</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-9.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Patrick Knight</h5>
              <span className="text-dark fs-2">Retail Store Manager</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-10.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Francis Sutton</h5>
              <span className="text-dark fs-2">Astronomer</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-1.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Bernice Henry</h5>
              <span className="text-dark fs-2">Security Consultant</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-2.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Estella Garcia</h5>
              <span className="text-dark fs-2">Lead Software Test Engineer</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-3.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Norman Moran</h5>
              <span className="text-dark fs-2">Engineer Technician</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-4.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Jessie Matthews</h5>
              <span className="text-dark fs-2">Lead Software Engineer</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-5.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Elijah Perez</h5>
              <span className="text-dark fs-2">Special Education Teacher</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-6.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Robert Martin</h5>
              <span className="text-dark fs-2">Transportation Manager</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-7.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Elva Wong</h5>
              <span className="text-dark fs-2">Logistics Manager</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-8.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Edith Taylor</h5>
              <span className="text-dark fs-2">Union Representative</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-9.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Violet Jackson</h5>
              <span className="text-dark fs-2">Agricultural Inspector</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card hover-img">
            <div className="card-body p-4 text-center border-bottom">
              <img src="/src/assets/dist/images/profile/user-10.jpg" alt className="rounded-circle mb-3" width={80} height={80} />
              <h5 className="fw-semibold mb-0">Phoebe Owens</h5>
              <span className="text-dark fs-2">Safety Engineer</span>
            </div>
            <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
              <li className="position-relative">
                <a className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold" href="javascript:void(0)">
                  <i className="ti ti-brand-facebook" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-instagram" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-github" />
                </a>
              </li>
              <li className="position-relative">
                <a className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold " href="javascript:void(0)">
                  <i className="ti ti-brand-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Friends