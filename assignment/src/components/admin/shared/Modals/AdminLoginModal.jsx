import React from 'react'

const AdminLoginModal = () => {
  return (
    <>
        <div id="login-modal" className="modal fade" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable modal-lg">
    <div className="modal-content">
      <div className="modal-body">
        <div className="text-center mt-2 mb-4">
          <a href="index.html" className="text-success">
            <span>
              <img
                src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/favicon.ico"
                className="me-3"
                width={80}
                alt=""
              />
            </span>
          </a>
        </div>
        <form action="#" className="ps-3 pr-3">
          <div className="mb-3">
            <label htmlFor="emailaddress1">Email address</label>
            <input
              className="form-control"
              type="email"
              id="emailaddress1"
              required=""
              placeholder="john@deo.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password1">Password</label>
            <input
              className="form-control"
              type="password"
              required=""
              id="password1"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck2"
              />
              <label className="form-check-label" htmlFor="customCheck2">
                Remember me
              </label>
            </div>
          </div>
          <div className="mb-3 text-center">
            <button
              className="btn btn-rounded btn-light-info text-info font-medium"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* /.modal-content */}
  </div>
  {/* /.modal-dialog */}
</div>

    </>
  )
}

export default AdminLoginModal