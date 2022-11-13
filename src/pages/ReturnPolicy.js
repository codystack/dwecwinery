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
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>9. Returns and returns approval</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"> You can return your product as long as:</p>
                    <p className="fs-lg"> You contact Customer Support within the hours of delivery, as stated in 8.1 a call must be placed
                        immediately stating the complaint and not hours later. This is because we cannot vouch for the
                        customer's storage methods after delivery has been made.</p>
                    <p className="fs-lg"> You have proof of purchase (receipt).</p>
                    <p className='fs-lg'> We have strict return policies due to the sensitivity of our kind of business. We encourage our clients to double-check their deliveries in the presence of our dispatch riders before accepting either verbally or signing a goods acceptance form. Signing of this form or affirming that the dispatch guy can leave affirms that goods were supplied in good conditions and the same goods ordered is same as the goods delivered in the right quantity. In extremely rare cases where our customers are dissatisfied with the products delivered due to a mistake on our part, you can call any of our customer care lines and we would make adequate arrangement after an investigation is carried out.</p>
                </div>
            </div>

        </section>

        <Footer />
    </>
  )
}
