import React from 'react'
import { Link } from 'react-router-dom'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
        <Navbar />
            <section className="position-relative pt-5">

                <div className="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0" style={{backgroundImage: 'url(assets/img/about/hero-bg.svg)'}}>
                    <div className="d-lg-none" style={{height: '960px'}} />
                    <div className="d-none d-lg-block" style={{height: '768px'}} />
                </div>
                
                <div className="container position-relative zindex-5 pt-5">
                    <div className="row">
                        <div className="col-lg-7">
                            {/* Text */}
                            <h1 className="pb-2 pb-md-3 pt-5">About Dwec Winery</h1>
                            <p className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3">Looking for where to buy champagne for your events or occasion? DWECwinery has the best prices compared to any other drink distributor in Nigeria. We also have a vast selection of domestic and imported brandy, whiskey, and mixers from around the world, perfect for stocking up your minibar at home or in the office. We’ve mastered the business of beer, spirit, and wine distribution in Nigeria, this enables us to serve you better, whether it’s red wine, white wine, or rose wine, we offer same-day delivery of your favorite drinks in selected states around Nigeria.</p>
                            <Link className='btn btn-primary btn-lg'><i className="bx bx-chat fs-5 lh-1 me-1" />
                                &nbsp;Contact Us</Link>
                        </div>
                        
                        <div className="col-lg-5 mt-xl-3 pt-5 pt-lg-4 text-center">
                            <img src="assets/img/dwecapp.png" width={350} alt="MobileApp" />
                        </div>
                    </div>
                </div>
            </section>
        
        <Cta />

        <Footer />
    </>
  )
}
