import React from 'react'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Navbarlight from '../components/Navbarlight'

export default function Contact() {
  return (
    <>
        <Navbarlight />

        {/* Hero */}
        <section className="dark-mode position-relative pt-5" style={{backgroundColor: '#151922'}}>
            {/* Content */}
            <div className="container position-relative zindex-2 pt-5 pb-2 pb-md-0">
                <div className="row justify-content-center pt-3 mt-3">
                    <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
                        <h1 className="mb-4">Get in Touch</h1>
                        <p className="fs-lg pb-3 mb-3">Got something you want to talk about?<br />contact us directly and let us know how we can help.</p>
                        <div className="d-flex justify-content-center">
                            <a href="https://www.facebook.com/irepdwec" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-secondary btn-facebook rounded-circle mx-2">
                            <i className="bx bxl-facebook" />
                            </a>
                            <a href="https://www.instagram.com/dwecng" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-secondary btn-instagram rounded-circle mx-2">
                            <i className="bx bxl-instagram" />
                            </a>
                            <a href="https://www.twitter.com/dwecng" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-secondary btn-twitter rounded-circle mx-2">
                            <i className="bx bxl-twitter" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom shape */}
            <div className="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n5" style={{color: '#151922'}}>
                <div className="position-relative start-50 translate-middle-x flex-shrink-0 mt-n5 mt-md-n3 mt-lg-n1" style={{width: '3788px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={3788} height={144} viewBox="0 0 3788 144"><path fill="currentColor" d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z" /></svg>
                </div>
            </div>
        </section>

        <section className="container py-5 my-md-2 my-lg-4 my-xl-5">
            <div className="row justify-content-center pt-5 pb-1 pb-sm-2 pb-md-3">
            <div className="col-xxl-8 col-xl-9 col-lg-10 pt-sm-2 pt-md-5">
                <div className="d-sm-flex">
                <div className="d-flex flex-column w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5 pb-3 pb-sm-0 mb-4 mb-sm-0">
                    <div className="card-body p-0">
                    <div className="d-inline-block bg-secondary text-primary rounded-circle fs-3 lh-1 p-3 mb-3">
                        <i className="bx bx-envelope" />
                    </div>
                    <p className="pb-2 pb-sm-3 mb-3">Please feel free to drop us a line. We will respond as soon as possible.</p>
                    </div>
                    <div className="card-footer border-0 p-0">
                    <a href="mailto:dwecwinery@gmail.com" className="btn btn-lg btn-primary">Send email</a>
                    </div>
                </div>
                <div className="vr text-border d-none d-sm-inline-block m-4" />
                <div className="card w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5">
                    <div className="card-body p-0">
                    <div className="d-inline-block bg-secondary text-primary rounded-circle fs-3 lh-1 p-3 mb-3">
                        <i className="bx bx-phone-call" />
                    </div>
                    <p className="pb-2 pb-sm-3 mb-3">If you need immediate assistance feel free to call us any time.</p>
                    </div>
                    <div className="card-footer border-0 p-0">
                    <a href="tel:+2348058232688" className="btn btn-lg btn-primary">Call us</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <Cta />

        <Footer />
    </>
  )
}
