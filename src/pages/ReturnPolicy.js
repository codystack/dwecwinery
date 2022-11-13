import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function ReturnPolicy() {
  return (
    <>
        <Navbar />

        <div className='container-fluid p-0 pt-3 mt-5'>
            <div className="ignore-dark-mode overflow-hidden">
                <div className="row align-items-center g-0">
                    <div className="col-12 text-center">
                        <div className="py-5">
                            <h1 className="fs-xl mb-0 pt-3 pt-md-0" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>Return Policy</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr />

        <section className="container">
            <div className="row pt-5 mt-n2 mt-sm-0 mt-md-2 mt-lg-4 mt-xl-5 mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>Returns and returns approval</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg">You can return your product as long as:</p>
                    <p className="fs-lg">You contact Customer Support within 24 hours of delivery, as stated in 8.1 a call must be placed
                        immediately stating the complaint and not hours later. This is because we cannot vouch for the
                        customer's storage methods after delivery has been made.</p>
                    <p className="fs-lg">You have proof of purchase (receipt).</p>
                    <p className="fs-lg">The goods must be in an ‘as new’ condition and returned in the original, undamaged packaging
                        along with the accessories.</p>
                    <p className="fs-lg">The product must not have been used or opened.</p>
                    <p className="fs-lg">All sealed items must not be opened otherwise it would not be accepted on return. DWEC Winery will only accept unsealed items in cases where maggots, insects or moulds are found in the item.</p>
                    <p className="fs-lg">Return Approval of All returned items are subject to inspection and approval by the authorized
                        representative of DWEC Winery . For a returned item to be approved for return, it must be in an ‘as
                        new’ condition and returned in the original, undamaged packaging along with the accessories received
                        with it. Items that are not returned in the above condition will be sent back to you and payment will not be
                        refunded.</p>
                    <p className="fs-lg">Items returned will be replaced with another of the same product, refunded to the account linked to your debit card (if
                        you paid by debit card) or refunded by bank transfer (if you paid by bank deposit or cash only).</p>
                    <p className="fs-lg">You will be asked to choose one of the following options:<br />
                        The shipping will be free if return is due to Incorrect Delivery. Otherwise, you’ll need to pay for the cost of
                        shipping goods back to DWEC Winery. The period of refund will not exceed 10 working days from
                        receipt of returned goods to us and the accompanying documents, if approval of your application for the
                        return of the goods is granted.</p>
                </div>
            </div>

        </section>

        <Footer />
    </>
  )
}
