import React from 'react'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
        <Navbar />

        {/* Hero */}
        <section className="container py-5 mt-5 mt-md-4 mb-md-3 mb-lg-4 mb-xl-5">
            <div className="row align-items-center align-items-lg-stretch mb-2 mb-sm-3">
            {/* Parallax gfx */}
            <div className="col-xl-7 col-md-6 d-flex justify-content-center justify-content-md-end overflow-hidden order-md-2 mt-n5 mt-sm-n4 mt-md-0">
                <div className="position-relative mt-5" style={{maxWidth: '660px'}}>
                <div className="bg-gradient-primary position-absolute start-0 bottom-0 w-100 rounded-3 opacity-15" style={{height: '95%'}} />
                <div className="parallax zindex-2">
                    <div className="parallax-layer zindex-2 mb-n3" data-depth="0.1">
                    <img src="assets/img/landing/app-showcase/hero/layer01.png" alt="Device" />
                    </div>
                </div>
                </div>
            </div>
            {/* Text */}
            <div className="col-xl-5 col-md-6 d-flex flex-column order-md-1">
                <div className="text-center text-md-start pt-4 pt-sm-5 pt-xl-0 mt-2 mt-sm-0 mt-lg-auto">
                    <h1 className="display-3 mb-4">Get the <br /><span className='text-primary'>DWEC Winery</span> Mobile App</h1>
                    <p className="fs-lg mb-0 d-md-none d-xl-block">Looking for where to buy champagne for your events or occasion? DWEC Winery has the best prices compared to any other drink distributor in Nigeria.</p>
                    <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start pt-2 mt-4 mt-md-5">
                        <a href="/" className="btn btn-dark btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3">
                        <img src="assets/img/market/appstore-light.svg" className="light-mode-img" width={124} alt="App Store" />
                        <img src="assets/img/market/appstore-dark.svg" className="dark-mode-img" width={124} alt="App Store" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.dwecwinery.app" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-lg px-3 py-2 mb-3">
                        <img src="assets/img/market/googleplay-light.svg" className="light-mode-img" width={139} alt="Google Play" />
                        <img src="assets/img/market/googleplay-dark.svg" className="dark-mode-img" width={139} alt="Google Play" />
                        </a>
                    </div>
                </div>
                <div className="d-sm-flex d-md-none d-lg-flex justify-content-center justify-content-md-start mt-auto pt-3 pt-md-0" />
            </div>
            </div>
        </section>

        <section className="dark-mode bg-dark position-relative pt-5 pb-4 py-md-5">
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary" />
            <div className="container position-relative zindex-3 py-lg-4 pt-md-2 py-xl-5">
                <div className="row justify-content-center text-center pb-4 mb-2">
                    <div className="col-xl-6 pt-2">
                        <h2 className="h1 mb-4">Why DWEC Winery?</h2>
                        <p className="fs-lg mb-0">Aside from being the most affordable drink distributor in Nigeria, we promise you a wide range of quality drinks and liquors as we also relieve you of the stress of going to buy drinks from physical stores as we’ll deliver to your doorstep.
                            Why undergo stress when you can get your favourite drinks from DWEC Winery and get it delivered to your doorstep with just one click.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* How it works */}
        <section className="container py-5 my-lg-5">
            <div className="text-center pb-4 mb-3 mx-auto" style={{maxWidth: '530px'}}>
            <h2 className="h1">How Does It Work?</h2>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat mollis egestas nam luctus facilisis ultrices</p>
            </div>
            <div className="row align-items-center">
            <div className="col-md-6 pb-4 pb-md-0 mb-2 mb-md-0">
                {/* Swiper tabs */}
                <div className="position-relative px-5">
                <div className="swiper-tabs zindex-2 mx-auto" style={{maxWidth: '384px'}}>
                    <div id="screen-1" className="swiper-tab active">
                    <img src="assets/img/landing/app-showcase/screens/05.png" alt="App screen" />
                    </div>
                    <div id="screen-2" className="swiper-tab">
                    <img src="assets/img/landing/app-showcase/screens/06.png" alt="App screen" />
                    </div>
                    <div id="screen-3" className="swiper-tab">
                    <img src="assets/img/landing/app-showcase/screens/07.png" alt="App screen" />
                    </div>
                </div>
                <div className="bg-gradient-primary position-absolute start-0 bottom-0 w-100 opacity-15 rounded-3" style={{height: '86.5%'}} />
                </div>
            </div>
            <div className="col-md-6 col-lg-5 offset-lg-1">
                <div className="ps-md-4 ps-lg-0">
                {/* Swiper slider */}
                <div className="swiper text-center text-md-start mt-auto" data-swiper-options="{
                    &quot;spaceBetween&quot;: 30,
                    &quot;loop&quot;: true,
                    &quot;tabs&quot;: true,
                    &quot;navigation&quot;: {
                    &quot;prevEl&quot;: &quot;#prev-screen&quot;,
                    &quot;nextEl&quot;: &quot;#next-screen&quot;
                    }
                }">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide" data-swiper-tab="#screen-1">
                        <div className="fs-xll text-muted mb-3 mb-lg-4">step 1</div>
                        <h3 className="mb-lg-4">Create your account</h3>
                        <p>Tellus est ullamcorper diam phasellus. Commodo acine pharetra quam lacinia fames quam nibh in elementum pulvinar consectetur adipiscing. Et viverra maecenas quis cras sed gravida volutpat, cursus enim enim ut nulla netus porta lacus.</p>
                    </div>
                    <div className="swiper-slide" data-swiper-tab="#screen-2">
                        <div className="fs-xll text-muted mb-3 mb-lg-4">step 2</div>
                        <h3 className="mb-lg-4">Set up payment details</h3>
                        <p>Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. Enim ut nulla netus porta lacus diam. Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam.</p>
                    </div>
                    <div className="swiper-slide" data-swiper-tab="#screen-3">
                        <div className="fs-xll text-muted mb-3 mb-lg-4">step 3</div>
                        <h3 className="mb-lg-4">Start trading</h3>
                        <p>Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. Enim ut nulla netus porta.</p>
                    </div>
                    </div>
                </div>
                {/* Slider controls (Prev / next) */}
                <div className="d-flex justify-content-center justify-content-md-start pt-2 pt-lg-3">
                    <button type="button" id="prev-screen" className="btn btn-prev btn-icon btn-sm me-2">
                    <i className="bx bx-chevron-left" />
                    </button>
                    <button type="button" id="next-screen" className="btn btn-next btn-icon btn-sm ms-2">
                    <i className="bx bx-chevron-right" />
                    </button>
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
