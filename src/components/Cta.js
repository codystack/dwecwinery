import React from 'react'

export default function Cta() {
  return (
    <>
        {/* App download CTA */}
        <section className="container py-5" id='appDownload'>
            <div className="bg-secondary rounded-3 overflow-hidden py-5 px-4 ps-lg-0 pe-md-5 pe-lg-0">
                <div className="row align-items-center py-sm-2">
                    {/* Parallax gfx */}
                    <div className="col-md-7 col-lg-6 offset-xl-1">
                    <div className="position-relative mx-auto mb-5 m-md-0" style={{maxWidth: '526px'}}>
                        <img src="assets/img/device.png" className="d-block" alt="Device" />
                        <div className="rellax d-block position-absolute top-0 end-0 w-100 mt-md-4 me-md-n5" alt="App Screen" data-rellax-percentage="0.5" data-rellax-vertical-scroll-axis="xy" data-rellax-horizontal-speed="0.6" data-rellax-vertical-speed="-0.6" data-disable-parallax-down="md">
                            <img src="assets/img/screen.png" alt='app screen'/>
                        </div>
                    </div>
                    </div>
                    {/* Text + Download buttons */}
                    <div className="col-xl-4 col-md-5 mt-n2 mt-md-0">
                    <h2 className="h1 text-center text-md-start mb-4 mb-lg-5">Download the <span className='text-primary'>DWEC Winery</span> Mobile App</h2>
                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start pt-2 mt-4 mt-md-5">
                            <a href="/" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-lg px-3 py-2 me-sm-3 me-lg-4 mb-3">
                                <img src="assets/img/market/appstore-light.svg" className="light-mode-img" width={124} alt="App Store" />
                                <img src="assets/img/market/appstore-dark.svg" className="dark-mode-img" width={124} alt="App Store" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.dwecwinery.app" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-lg px-3 py-2 mb-3">
                                <img src="assets/img/market/googleplay-light.svg" className="light-mode-img" width={139} alt="Google Play" />
                                <img src="assets/img/market/googleplay-dark.svg" className="dark-mode-img" width={139} alt="Google Play" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
