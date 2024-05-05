import React from 'react'

const Customizer = () => {
  return (
    <>
        <>
  {/*  Customizer */}
  <button
    className="btn btn-primary p-3 rounded-circle d-flex align-items-center justify-content-center customizer-btn"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample"
    aria-controls="offcanvasExample"
  >
    <i
      className="ti ti-settings fs-7"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      data-bs-title="Settings"
    />
  </button>

  <div
  className="offcanvas offcanvas-end customizer"
  tabIndex={-1}
  id="offcanvasExample"
  aria-labelledby="offcanvasExampleLabel"
  data-simplebar=""
>
  <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
    <h4 className="offcanvas-title fw-semibold" id="offcanvasExampleLabel">
      Settings
    </h4>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    />
  </div>
  <div className="offcanvas-body p-4">
    <div className="theme-option pb-4">
      <h6 className="fw-semibold fs-4 mb-1">Theme Option</h6>
      <div className="d-flex align-items-center gap-3 my-3">
        <a
          href="javascript:void(0)"
          onclick="toggleTheme('../../dist/css/style.min.css')"
          className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 light-theme text-dark"
        >
          <i className="ti ti-brightness-up fs-7 text-primary" />
          <span className="text-dark">Light</span>
        </a>
        <a
          href="javascript:void(0)"
          onclick="toggleTheme('../../dist/css/style-dark.min.css')"
          className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 dark-theme text-dark"
        >
          <i className="ti ti-moon fs-7 " />
          <span className="text-dark">Dark</span>
        </a>
      </div>
    </div>
    <div className="theme-direction pb-4">
      <h6 className="fw-semibold fs-4 mb-1">Theme Direction</h6>
      <div className="d-flex align-items-center gap-3 my-3">
        <a
          href="index.html"
          className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2"
        >
          <i className="ti ti-text-direction-ltr fs-6 text-primary" />
          <span className="text-dark">LTR</span>
        </a>
        <a
          href="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/html/rtl/index.html"
          className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2"
        >
          <i className="ti ti-text-direction-rtl fs-6 text-dark" />
          <span className="text-dark">RTL</span>
        </a>
      </div>
    </div>
    <div className="theme-colors pb-4">
      <h6 className="fw-semibold fs-4 mb-1">Theme Colors</h6>
      <div className="d-flex align-items-center gap-3 my-3">
        <ul className="list-unstyled mb-0 d-flex gap-3 flex-wrap change-colors">
          <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
            <a
              href="javascript:void(0)"
              className="rounded-circle position-relative d-block customizer-bgcolor skin1-bluetheme-primary active-theme "
              onclick="toggleTheme('../../dist/css/style.min.css')"
              data-color="blue_theme"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="BLUE_THEME"
            >
              <i className="ti ti-check text-white d-flex align-items-center justify-content-center fs-5" />
            </a>
          </li>
          <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
            <a
              href="javascript:void(0)"
              className="rounded-circle position-relative d-block customizer-bgcolor skin2-aquatheme-primary "
              onclick="toggleTheme('../../dist/css/style-aqua.min.css')"
              data-color="aqua_theme"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="AQUA_THEME"
            >
              <i className="ti ti-check  text-white d-flex align-items-center justify-content-center fs-5" />
            </a>
          </li>
          <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
            <a
              href="javascript:void(0)"
              className="rounded-circle position-relative d-block customizer-bgcolor skin3-purpletheme-primary"
              onclick="toggleTheme('../../dist/css/style-purple.min.css')"
              data-color="purple_theme"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="PURPLE_THEME"
            >
              <i className="ti ti-check  text-white d-flex align-items-center justify-content-center fs-5" />
            </a>
          </li>
          <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
            <a
              href="javascript:void(0)"
              className="rounded-circle position-relative d-block customizer-bgcolor skin4-greentheme-primary"
              onclick="toggleTheme('../../dist/css/style-green.min.css')"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="GREEN_THEME"
            >
              <i className="ti ti-check  text-white d-flex align-items-center justify-content-center fs-5" />
            </a>
          </li>
          <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
            <a
              href="javascript:void(0)"
              className="rounded-circle position-relative d-block customizer-bgcolor skin5-cyantheme-primary"
              onclick="toggleTheme('../../dist/css/style-cyan.min.css')"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="CYAN_THEME"
            >
              <i className="ti ti-check  text-white d-flex align-items-center justify-content-center fs-5" />
            </a>
          </li>
          <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
            <a
              href="javascript:void(0)"
              className="rounded-circle position-relative d-block customizer-bgcolor skin6-orangetheme-primary"
              onclick="toggleTheme('../../dist/css/style-orange.min.css')"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="ORANGE_THEME"
            >
              <i className="ti ti-check  text-white d-flex align-items-center justify-content-center fs-5" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="layout-type pb-4">
      <h6 className="fw-semibold fs-4 mb-1">Layout Type</h6>
      <div className="d-flex align-items-center gap-3 my-3">
        <a
          href="index.html"
          className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2"
        >
          <i className="ti ti-layout-sidebar fs-6 text-primary" />
          <span className="text-dark">Vertical</span>
        </a>
        <a
          href="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/html/horizontal/index.html"
          className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2"
        >
          <i className="ti ti-layout-navbar fs-6 text-dark" />
          <span className="text-dark">Horizontal</span>
        </a>
      </div>
    </div>
    <div className="container-option pb-4">
      <h6 className="fw-semibold fs-4 mb-1">Container Option</h6>
      <div className="d-flex align-items-center gap-3 my-3">
        <a
          href="javascript:void(0)"
          className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 boxed-width text-dark"
        >
          <i className="ti ti-layout-distribute-vertical fs-7 text-primary" />
          <span className="text-dark">Boxed</span>
        </a>
        <a
          href="javascript:void(0)"
          className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 full-width text-dark"
        >
          <i className="ti ti-layout-distribute-horizontal fs-7" />
          <span className="text-dark">Full</span>
        </a>
      </div>
    </div>
    <div className="sidebar-type pb-4">
      <h6 className="fw-semibold fs-4 mb-1">Sidebar Type</h6>
      <div className="d-flex align-items-center gap-3 my-3">
        <a
          href="javascript:void(0)"
          className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 fullsidebar"
        >
          <i className="ti ti-layout-sidebar-right fs-7" />
          <span className="text-dark">Full</span>
        </a>
        <a
          href="javascript:void(0)"
          className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center text-dark sidebartoggler gap-2"
        >
          <i className="ti ti-layout-sidebar fs-7" />
          <span className="text-dark">Collapse</span>
        </a>
      </div>
    </div>
    <div className="card-with pb-4">
      <h6 className="fw-semibold fs-4 mb-1">Card With</h6>
      <div className="d-flex align-items-center gap-3 my-3">
        <a
          href="javascript:void(0)"
          className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 text-dark cardborder"
        >
          <i className="ti ti-border-outer fs-7" />
          <span className="text-dark">Border</span>
        </a>
        <a
          href="javascript:void(0)"
          className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 cardshadow"
        >
          <i className="ti ti-border-none fs-7" />
          <span className="text-dark">Shadow</span>
        </a>
      </div>
    </div>
  </div>
</div>

</>

    </>
  )
}

export default Customizer