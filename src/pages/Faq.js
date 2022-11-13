import React from 'react'
import { Link } from 'react-router-dom'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Faq() {
  return (
    <>
        <Navbar />

            {/* FAQ */}
            <section className="container py-5 mb-lg-2 mt-5 pt-lg-6">
                <div className="row py-2 py-md-4 py-lg-5">
                    <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
                        <h2 className="pb-3 mb-1 mb-lg-3">Any questions? <br className="d-none d-md-inline" />Check out the FAQs</h2>
                        <p className="fs-lg pb-3 mb-2 mb-lg-3">Still have unanswered questions and need to get in touch?</p>
                        <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
                            <div className="col">
                                <div className="card card-hover">
                                    <div className="card-body pb-3">
                                        <i className="bx bxs-phone-call d-block fs-2 text-primary mb-2 py-1" />
                                        <p className="fs-sm mb-2">Still have  questions?</p>
                                        <a href="tel:+2347036254646" className="btn btn-link stretched-link px-0">
                                            Call us
                                            <i className="bx bx-right-arrow-alt fs-xl ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card card-hover">
                                    <div className="card-body pb-3">
                                        <i className="bx bx-envelope d-block fs-2 text-success mb-2 py-1" />
                                        <p className="fs-sm mb-2">Still have  questions?</p>
                                        <a href="mailto:dwecwinery@gmail.com" className="btn btn-link text-success stretched-link px-0">
                                            Email us
                                            <i className="bx bx-right-arrow-alt fs-xl ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7 offset-xl-1">
                        <div className="accordion" id="faq">
                            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                <h2 className="accordion-header" id="q1-heading">
                                    <button className="accordion-button shadow-none rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#q1" aria-expanded="true" aria-controls="q1">
                                        How do I place an order?
                                    </button>
                                </h2>
                                <div id="q1" className="accordion-collapse collapse show" aria-labelledby="q1-heading" data-bs-parent="#faq">
                                    <div className="accordion-body fs-sm pt-0">
                                        <p className='mb-0'>Download the DWEC Winery App, create an account and simply add products to your shopping cart and follow the checkout procedure to place your order. If you experience any technical issues, please call us and we’ll take your order over the phone.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                <h2 className="accordion-header" id="q2-heading">
                                    <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q2" aria-expanded="false" aria-controls="q2">
                                        Can I order by telephone or email?
                                    </button>
                                </h2>
                                <div id="q2" className="accordion-collapse collapse" aria-labelledby="q2-heading" data-bs-parent="#faq">
                                    <div className="accordion-body fs-sm pt-0">
                                        <p className='mb-0'>It is best to use the DWEC Winery App to place your orders, but we understand that sometimes you may like to speak to someone or there may be technical issues. You can always contact our customer services team if you would like to place an order over the phone or send your order <Link to='/contact' className='fw-bold'>CLICK HERE</Link>.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                <h2 className="accordion-header" id="q3-heading">
                                    <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q3" aria-expanded="false" aria-controls="q3">
                                        Can I cancel my order once it has been placed?
                                    </button>
                                </h2>
                                <div id="q3" className="accordion-collapse collapse" aria-labelledby="q3-heading" data-bs-parent="#faq">
                                    <div className="accordion-body fs-sm pt-0">
                                        <p className="mb-0">You may cancel your order once it has been placed. You have up to 24 hours to cancel your order. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                <h2 className="accordion-header" id="q4-heading">
                                    <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q4" aria-expanded="false" aria-controls="q4">
                                        Are my transactions secure?
                                    </button>
                                </h2>
                                <div id="q4" className="accordion-collapse collapse" aria-labelledby="q4-heading" data-bs-parent="#faq">
                                    <div className="accordion-body fs-sm pt-0">
                                        <p className="mb-0">Yes! Your transactions are secure. Your payment information is not made visible or accessible to the outside world as all payment information are maintained and hosted and secured by <a href="http://paystack.com/" target="_blank" rel="noopener noreferrer">Paystack</a>.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                <h2 className="accordion-header" id="q5-heading">
                                    <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q5" aria-expanded="false" aria-controls="q5">
                                        What payment methods do you accept?
                                    </button>
                                </h2>
                                <div id="q5" className="accordion-collapse collapse" aria-labelledby="q5-heading" data-bs-parent="#faq">
                                    <div className="accordion-body fs-sm pt-0">
                                        <p className="mb-0">We accept all major credit and debit cards using <a href="http://paystack.com/" target="_blank" rel="noopener noreferrer">Paystack</a> payment gateway. You can also pay for drinks via bank transfer.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                <h2 className="accordion-header" id="q6-heading">
                                    <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q6" aria-expanded="false" aria-controls="q6">
                                        Can I return drinks that I ordered?
                                    </button>
                                </h2>
                                <div id="q6" className="accordion-collapse collapse" aria-labelledby="q6-heading" data-bs-parent="#faq">
                                    <div className="accordion-body fs-sm pt-0">
                                        <p className="mb-0">Please view our <Link to='/return-policy'>Return Policy</Link> for further details.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item border-0 rounded-3 shadow-sm">
                                <h2 className="accordion-header" id="q7-heading">
                                    <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q7" aria-expanded="false" aria-controls="q7">
                                        Who will deliver my order?
                                    </button>
                                </h2>
                                <div id="q7" className="accordion-collapse collapse" aria-labelledby="q7-heading" data-bs-parent="#faq">
                                    <div className="accordion-body fs-sm pt-0">
                                        <p className="mb-0">We work with any dispatch company or your choice and also recommend delivery company's for orders outside the state. Delivery agreement is reached after order has been made and payment confirmed.</p>
                                    </div>
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
