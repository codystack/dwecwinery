import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbarlight() {
  return (
    <>
        {/* Navbar */}
        <header className="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky">
            <div className="container px-3">
            <Link to='/' className="navbar-brand pe-3">
                <img src="assets/img/logolight.svg" width={180} alt="Logo" />
            </Link>
            <div id="navbarNav" className="offcanvas offcanvas-end bg-dark">
                <div className="offcanvas-header border-bottom border-light">
                <h5 className="offcanvas-title text-white">Menu</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body mx-auto">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/about' className="nav-link">About Dwec</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/faq' className="nav-link">FAQs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/contact' className="nav-link">Contact Us</NavLink>
                    </li>
                </ul>
                </div>
                <div className="offcanvas-header border-top border-light">
                <a href="/" className="btn btn-primary w-100" target="_blank" rel="noopener">
                    <i className="bx bx-download fs-4 lh-1 me-1" />
                    &nbsp;Download App
                </a>
                </div>      
            </div>
            <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <a href="/" className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex" target="_blank" rel="noopener">
                <i className="bx bx-download fs-5 lh-1 me-1" />
                &nbsp;Download App
            </a>
            </div>
        </header>
    </>
  )
}
