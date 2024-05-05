import React from 'react'

const BreadCrumb = () => {
  return (
    <>
        <div className="col-9">
          <h4 className="fw-semibold mb-8">User Profile</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-muted " href="index.html">Dashboard</a></li>
              <li className="breadcrumb-item" aria-current="page">User Profile</li>
            </ol>
          </nav>
        </div>
    </>
  )
}

export default BreadCrumb