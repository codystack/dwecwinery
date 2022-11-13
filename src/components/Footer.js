import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        {/* Footer */}
        <footer className="footer dark-mode bg-dark pt-5 pb-4 pb-lg-5">
            <div className="container text-center pt-lg-3">
            <div className="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
                <img src="assets/img/logolight.svg" className="me-2" width={200} alt="Logo" />
            </div>
            <ul className="nav justify-content-center pt-3 pb-4 pb-lg-5">
                <li className="nav-item"><Link to='/terms' className="nav-link">Terms & Conditions</Link></li>
                <li className="nav-item"><Link to='/privacy-policy' className="nav-link">Privacy Policy</Link></li>
                <li className="nav-item"><Link to='/return-policy' className="nav-link">Return Policy</Link></li>
            </ul>
            <div className="d-flex flex-column flex-sm-row justify-content-center">
                <a href="/" className="btn btn-dark btn-lg px-3 py-2 me-sm-4 mb-3" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/market/appstore-light.svg" className="light-mode-img" width={124} alt="App Store" />
                    <img src="assets/img/market/appstore-dark.svg" className="dark-mode-img" width={124} alt="App Store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.dwecwinery.app" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-lg px-3 py-2 mb-3">
                    <img src="assets/img/market/googleplay-light.svg" className="light-mode-img" width={139} alt="Google Play" />
                    <img src="assets/img/market/googleplay-dark.svg" className="dark-mode-img" width={139} alt="Google Play" />
                </a>
            </div>
            <div className="d-flex justify-content-center pt-4 mt-lg-3">
                <a href="https://www.facebook.com/irepdwec" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-secondary btn-facebook mx-2">
                    <i className="bx bxl-facebook" />
                </a>
                <a href="https://www.instagram.com/dwecng" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-secondary btn-instagram mx-2">
                    <i className="bx bxl-instagram" />
                </a>
                <a href="https://www.twitter.com/dwecng" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-secondary btn-twitter mx-2">
                    <i className="bx bxl-twitter" />
                </a>
            </div>
            <p className="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
                <span className="opacity-80">© {(new Date().getFullYear())} Dwec Winery. All rights reserved.</span>
            </p>
            </div>
        </footer>
    </>
  )
}
