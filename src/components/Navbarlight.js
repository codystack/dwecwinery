import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbarlight() {
  return (
    <>
        {/* Navbar */}
        <header className="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky">
            <div className="container px-3">
                <Link to='/' className="navbar-brand pe-3">
                    <img src="assets/img/logolight1.svg" width={180} alt="Logo" />
                </Link>
                <div id="navbarNav" className="offcanvas offcanvas-end bg-dark">
                    <div className="offcanvas-header border-bottom border-light">
                        <h5 className="offcanvas-title text-white">Menu</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body mx-auto">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link">About Dwec</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/faq' className="nav-link">FAQs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="offcanvas-header border-top border-light">
                        <a href="#appDownload" className="btn btn-light w-100">
                            <i className="bx bx-download fs-4 lh-1 me-1" />
                            &nbsp;Download App
                        </a>
                    </div>      
                </div>
                <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a href="#appDownload" className="btn btn-light btn-sm fs-sm rounded d-none d-lg-inline-flex">
                    <i className="bx bx-download fs-5 lh-1 me-1" />
                    &nbsp;Download App
                </a>
            </div>
        </header>
    </>
  )
}
