import React, { useState } from 'react'
import SwiperCore, { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Controller]);

export default function HowItWorks() {

    // store swiper instances
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <>
        {/* How it works */}
        <section className="container py-5 my-lg-5">
            <div className="text-center pb-4 mb-3 mx-auto" style={{maxWidth: '530px'}}>
                <h2 className="h1">How Does It Work?</h2>
                <p className="mb-0">Start buying on your favourite drink online store<br /> in three(3) easy steps.</p>
            </div>
            <Swiper className="swiper mx-n2"
                // install Swiper modules
                modules={[Controller]}
                spaceBetween={8}
                slidesPerView={3}
                breakpoints={{
                    200: {
                        spaceBetween: 30,
                        slidesPerView: 1
                    },

                    300: {
                        spaceBetween: 30,
                        slidesPerView: 1
                    },

                    640: {
                        spaceBetween: 30,
                        slidesPerView: 1
                    },

                    1100: {
                        spaceBetween: 30,
                        slidesPerView: 1
                    },
                }}
                >
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-12 offset-lg-1">
                        <div className="ps-md-4 ps-lg-0">
                            {/* Swiper slider */}
                            <div className="swiper mt-auto">
                                <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className='row align-items-center text-center text-md-start'>
                                            <div className="col-md-6 pb-4 pb-md-0 mb-2 mb-md-0">
                                                {/* Swiper tabs */}
                                                <div className="position-relative px-5">
                                                    <div className="swiper-tabs zindex-2 mx-auto" style={{maxWidth: '384px'}}>
                                                        <div id="screen-2" className="swiper-tab active">
                                                            <img src="assets/img/landing/app-showcase/screens/05.png" alt="App screen" />
                                                        </div>
                                                    </div>
                                                    <div className="bg-gradient-primary position-absolute start-0 bottom-0 w-100 opacity-15 rounded-3" style={{height: '86.5%'}} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-5 pb-4 pb-md-0 mb-2 mb-md-0 ms-lg-5">
                                                <div className="swiper-slide" data-swiper-tab="#screen-1">
                                                    <div className="fs-xll text-muted mb-3 mb-lg-4">step 1</div>
                                                    <h3 className="mb-lg-4">Create your account</h3>
                                                    <p>Download the DWEC WInery App from the Andriod or IOS app store, create an account using your an active email and mobile number. Setup your profile with correct credentials and you're on your way.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='row align-items-center text-center text-md-start'>
                                            <div className="col-md-6 pb-4 pb-md-0 mb-2 mb-md-0">
                                                {/* Swiper tabs */}
                                                <div className="position-relative px-5">
                                                    <div className="swiper-tabs zindex-2 mx-auto" style={{maxWidth: '384px'}}>
                                                        <div id="screen-2" className="swiper-tab active">
                                                            <img src="assets/img/landing/app-showcase/screens/06.png" alt="App screen" />
                                                        </div>
                                                    </div>
                                                    <div className="bg-gradient-primary position-absolute start-0 bottom-0 w-100 opacity-15 rounded-3" style={{height: '86.5%'}} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-5 pb-4 pb-md-0 mb-2 mb-md-0 ms-lg-5">
                                                <div className="swiper-slide" data-swiper-tab="#screen-2">
                                                    <div className="fs-xll text-muted mb-3 mb-lg-4">step 2</div>
                                                    <h3 className="mb-lg-4">Shop your drink</h3>
                                                    <p>Glance through our categories and hundreds of drink while you shop for your favourite brands for that next big event. Make your choice the add your order to cart and also the quantity you wish to purchase.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='row align-items-center text-center text-md-start'>
                                            <div className="col-md-6 pb-4 pb-md-0 mb-2 mb-md-0">
                                                {/* Swiper tabs */}
                                                <div className="position-relative px-5">
                                                    <div className="swiper-tabs zindex-2 mx-auto" style={{maxWidth: '384px'}}>
                                                            <div id="screen-3" className="swiper-tab active">
                                                                <img src="assets/img/landing/app-showcase/screens/07.png" alt="App screen" />
                                                            </div>
                                                    </div>
                                                    <div className="bg-gradient-primary position-absolute start-0 bottom-0 w-100 opacity-15 rounded-3" style={{height: '86.5%'}} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-5 pb-4 pb-md-0 mb-2 mb-md-0 ms-lg-5">
                                                <div className="swiper-slide" data-swiper-tab="#screen-3">
                                                    <div className="fs-xll text-muted mb-3 mb-lg-4">step 3</div>
                                                    <h3 className="mb-lg-4">Checkout and pay</h3>
                                                    <p>Confirm your order and quantity, make payment using your most preffered payment method via Bank transfer or via Credit/Debit card. Once your payment is confirmed your order will be dispatched for delivery.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </div>
                            {/* Slider controls (Prev / next) */}
                            <div className="d-flex justify-content-center justify-content-md-start pt-2 pt-lg-3">
                                <Swiper onSwiper={setFirstSwiper} controller={{ control: secondSwiper }}>
                                    <button type="button" id="prev-screen" className="btn btn-prev btn-icon btn-sm me-2">
                                        <i className="bx bx-chevron-left" />
                                    </button>
                                </Swiper>
                                <Swiper onSwiper={setSecondSwiper} controller={{ control: firstSwiper }}>
                                    <button type="button" id="next-screen" className="btn btn-next btn-icon btn-sm ms-2">
                                        <i className="bx bx-chevron-right" />
                                    </button>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </Swiper>
        </section>
    </>
  )
}
