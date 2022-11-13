import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Terms() {
  return (
    <>
        <Navbar />

        <div className='container-fluid p-0 pt-3 mt-5'>
            <div className="ignore-dark-mode overflow-hidden">
                <div className="row align-items-center g-0">
                    <div className="col-12 text-center">
                        <div className="py-5">
                            <h1 className="fs-xl mb-0 pt-3 pt-md-0" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>Terms & Conditions</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr />

        <section className="container">
            <div className="row pt-5 mt-n2 mt-sm-0 mt-md-2 mt-lg-4 mt-xl-5 mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>Introduction</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg">By using DWEC Winery Website/Mobile App services and tools (the "Website/Mobile App"), you ("you" or the "End User") agree
                        to the terms and conditions that we ("DWEC Winery") have provided. If you do not agree with the
                        outlined terms and conditions (the "Terms of Use" or "Agreement"), please refrain from using the Website/Mobile App.</p>
                    <p className="fs-lg">For the purpose of these terms of use, wherever the context requires, ‘You’ shall mean any natural or
                        legal person who has agreed to make use of the Website/Mobile App.</p>
                    <p className='fs-lg'>The Website/Mobile App reserves the right, to change, modify, add, or remove portions of these Terms and Conditions of
                        use at any time.</p>
                    <p className='fs-lg'>Please check these Terms and Conditions regularly for updates as changes will be made on the Website/Mobile App
                        with no notice provided.</p>
                    <p className='fs-lg'>These Terms & Conditions were most recently updated on 28th June 2022 and apply to sales to
                        consumers. Subsequent changes would be stated with the clauses inclusive.</p>
                    <p className='fs-lg'>Your continued use of the Website/Mobile App following the posting of changes to these Terms and Conditions of use
                        constitutes your acceptance of those changes.</p>
                    <p className='fs-lg'>If you are a business then different Terms & Conditions will apply to you, please call our call centre on
                    +2347036254646.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>1. General</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>1.1</b> This Agreement sets forth the terms and conditions that apply to the use of this Website/Mobile App by the End User.
                        By using this Website/Mobile App (other than to read this Agreement for the first time), End User agrees to comply with
                        all of the terms and conditions hereof. The right to use this Website/Mobile App is personal to End-User and is not
                        transferable to any other person or entity.</p>
                    <p className="fs-lg"><b>1.2</b> End User shall be responsible for protecting the confidentiality of End User's password(s), if any. End
                        User acknowledges that, although the Internet is often a secure environment, sometimes there are
                        interruptions in service or events that are beyond the control of DWEC Winery, and DWEC Winery shall
                        not be responsible for any data lost while transmitting information on the Internet. While it is DWEC Winery objective to make the Website/Mobile App accessible 24 hours per day, 7 days per week, the Website/Mobile App may be
                        unavailable from time to time for any reason including, without limitation, routine maintenance. You
                        understand and acknowledge that due to circumstances both within and outside of the control of
                        DWEC Winery, access to the Website/Mobile App may be interrupted, suspended or terminated from time to time.
                        DWEC Winery shall have the right at any time to change or discontinue any aspect or feature of DWEC Winery, including, but not limited to, content, hours of availability and equipment needed for access or use.
                        Further, DWEC Winery may discontinue disseminating any portion of information or category of
                        information, may change or eliminate any transmission method and may change transmission speeds or
                        other signal characteristics.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>2. User submission and privacy</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>2.1</b> Anything that you submit to the Website/Mobile App and/or provide to us, including but not limited to, questions,
                        reviews, comments, and suggestions (collectively, "Submissions") will become our sole and exclusive
                        property and shall not be returned to you.</p>
                    <p className="fs-lg"><b>2.2</b> In addition to the rights applicable to any Submission, when you post comments or reviews to the
                        Website/Mobile App, you also grant us the right to use the name that you submit, in connection with such review,
                        comment, or other content.</p>
                    <p className="fs-lg"><b>2.3</b> You shall not use a false e-mail address, pretend to be someone other than you or otherwise mislead
                        us or third parties as to the origin of any Submissions. We may, but shall not be obligated to, remove or
                        edit any Submissions.</p>
                    <p className="fs-lg"><b>2.4</b> We view protection of your privacy as a very important principle. We understand clearly that you and
                        Your Personal Information are one of our most important assets. We store and process Your Information
                        on computers that may be protected by physical as well as reasonable technological security measures
                        and procedures our current Privacy Policy is available at <Link to='/privacy-policy'>www.dwecwinery.com/privacy-policy</Link>. If you object
                        to your Information being transferred or used in this way please do not use DWEC Winery Website/Mobile App.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>3. Ordering and pricing</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>3.1</b> Once you have found the Goods you are looking for, you can buy them online by clicking the 'add to
                        cart' button for the selected Goods. You will then be directed to your ‘cart'. Remember, you can remove
                        Goods from your cart or stop the ordering process at any time. Please note that all prices are shown in
                        Nigerian Naira (NGN) and are inclusive of VAT, unless stated otherwise.</p>
                    <p className="fs-lg"><b>3.2</b> Please note that there are cases when an order cannot be processed for various reasons. The Website/Mobile App
                        reserves the right to refuse or cancel any order for any reason at any given time. You may be asked to
                        provide additional verifications or information, including but not limited to phone number and address,
                        before we accept the order.</p>
                    <p className="fs-lg"><b>3.3</b> We are determined to provide the most accurate pricing information on the Website/Mobile App to our users;
                        however, errors may still occur, such as cases when the price of an item is not displayed correctly on the
                        Website/Mobile App. If we discover an error in the price of goods you have ordered we will inform you as soon as
                        possible and give you the option of reconfirming your order at the correct price or cancelling it. If we are
                        unable to contact you we will treat the order as cancelled. If you cancel and you have already paid for the
                        goods, you will receive a full refund. As such, we reserve the right to refuse or cancel any order.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>4. Purchase contract</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>4.1</b> This Website/Mobile App is operated by DWEC Winery(RC: 3294323) ("we", "us" or "our"). By using DWEC Winery
                        Website/Mobile App you are bound by these Terms & Conditions. All use and purchases made on this Website/Mobile App are governed by these Terms & Conditions at any time although the Terms & Conditions governing any given
                        use or purchase will be those in effect at the date of your order or specific use. If you use or order goods
                        after we have published any changes you will be bound by those changes. Accordingly, you should
                        check prior to each use or order to ensure that you understand the precise Terms & Conditions
                        applicable to your Website/Mobile App visit or purchase. To assist you in determining whether the Terms & Conditions
                        have changed since your most recent order we will display the date when these Terms & Conditions
                        were most recently updated.</p>
                    <p className="fs-lg"><b>4.2</b> We sell goods only to end-users and wholesalers.</p>
                    <p className="fs-lg"><b>4.3</b> We will confirm your order whether placed directly by using DWEC Winery Website/Mobile App, the email,
                        customer care line, Whatsapp line, Social Media platforms and the live chat. This will occur either by
                        telephone calls or messages via these mediums.</p>
                    <p className="fs-lg"><b>4.4</b> Confirmation constitutes our acceptance of your order but order is completed when payment is
                        received.</p>
                    <p className="fs-lg"><b>4.5</b> To participate in our services, the customer must either complete the registration process or check
                        out as a guest. As a guest, customer must provide relevant information such as full name, phone number
                        and delivery address.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>5. Amendment of orders and cancellation rights</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>5.1</b> Any orders placed may be amended or cancelled by the customer at no charge, provided that this is
                        done 5 minutes after confirmation.</p>
                    <p className="fs-lg"><b>5.2</b> As stated above, the last time set out for amendment and cancellation is 5 minutes after the
                        confirmation.</p>
                    <p className="fs-lg"><b>5.3</b> Please note, for cancellation to be effective, an email should be sent to 
                    &nbsp;<a href="mailto:dwecwinery@gmail.com">dwecwinery@gmail.com</a> or a call placed through to +2347036254646 or any other customer care line
                        stated on the Website/Mobile App.</p>
                    <p className="fs-lg"><b>5.4</b> Any orders that have not been cancelled prior to the expiry of the 5 minutes, the customer would be
                        charged the cancellation fee which is equivalent to the delivery fee.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>6. Methods of payment</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>6.1</b> Payment may be made on the Website/Mobile App, and bank transfer. In the case of bank
                    transfers, a proof of payment MUST be sent to <a href="mailto:dwecwinery@gmail.com">dwecwinery@gmail.com</a> before order is
                    dispatched.</p>
                    <p className="fs-lg"><b>6.2</b> We only accept Nigerian Naira as payment currency.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>7. Delivery</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>7.1</b> Delivery days and times are Mondays - Saturdays 9am-6pm and Sunday 1pm-5pm. Delivery will be
                        made to the address specified by you when you register on the Website/Mobile App. You have the ability to change
                        this address through the "Account & Profile Details" feature on the Website/Mobile App, and you must do so if you
                        move locations so that we can deliver to the correct address. (Say something about public holidays) On
                        recognized public holidays, delivery times are subject to change.</p>
                    <p className="fs-lg"><b>7.2</b> We reserve the right to restrict deliveries in certain areas, and this includes the right to eliminate
                        certain areas from our delivery schedule altogether.</p>
                    <p className="fs-lg"><b>7.3</b> We cannot deliver to any location that is not contained on our Dispatch List.</p>
                    <p className="fs-lg"><b>7.4</b> DWEC Winery will be responsible for the delivery of the Goods you have ordered to your
                        address. Until the time that the Goods are delivered to you, the Goods shall remain the property of The
                        DWEC Winery and title (together with risk of loss and damage) will not pass to you until the goods are
                        delivered to the address provided that we have processed and received payment in full for the Goods.</p>
                    <p className="fs-lg"><b>7.5</b> We take special care to endeavour that deliveries are made within a short delivery slot and
                        accordingly, it is your responsibility to ensure that an appropriate person is available at the delivery
                        address at all times during the delivery slot. We may ask that an appropriate person signs for the goods
                        on delivery. If no one is at the address when the delivery is attempted the goods will be retained by us.
                        We will leave notification of delivery and will telephone to attempt to rearrange the delivery with a delivery
                        cost.</p>
                    <p className="fs-lg"><b>7.6</b> Please note adverse weather conditions or other events outside of our reasonable control may result
                        in the occasional late or cancelled delivery. If that is the case we will endeavour to contact you as soon
                        as we are able to in order to reschedule your delivery time and date. In any event that the order doesn't
                        get to you in time.</p>
                    <p className="fs-lg"><b>7.7</b> Should you fail to be present for your delivery, if you want it delivered to another location, a new cost
                        of delivery would be added.</p>
                    <p className="fs-lg"><b>7.8</b> DWEC Winery will ordinarily only make deliveries when an appropriate person is able to receive
                        the delivery.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>8. Defective goods and dissatisfaction</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>8.1</b> We guarantee the quality of our goods. You must inspect the goods and notify us immediately by
                        phoning our customer care centre numbers.</p>
                    <p className="fs-lg"><b>8.2</b> In the event that the Goods collected by you are damaged, defective, faulty or do not match their
                        description at the point of collection, you would be sent a replacement or a full refund will be made to
                        you. You are advised to check your goods for any defect, fault or damage before signing the delivery
                        note. If you discover a genuine fault, defect or damage after delivery, you will be required to return the
                        Goods to us (together with all relevant packaging)</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>9. Returns and returns approval</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>9.1</b> You can return your product as long as:</p>
                    <p className="fs-lg"><b>9.1.1</b> You contact Customer Support within the hours of delivery, as stated in 8.1 a call must be placed
                        immediately stating the complaint and not hours later. This is because we cannot vouch for the
                        customer's storage methods after delivery has been made.</p>
                    <p className="fs-lg"><b>9.1.2</b> You have proof of purchase (receipt).</p>
                    <p className='fs-lg'><b>9.2</b> We have strict return policies due to the sensitivity of our kind of business. We encourage our clients to double-check their deliveries in the presence of our dispatch riders before accepting either verbally or signing a goods acceptance form. Signing of this form or affirming that the dispatch guy can leave affirms that goods were supplied in good conditions and the same goods ordered is same as the goods delivered in the right quantity. In extremely rare cases where our customers are dissatisfied with the products delivered due to a mistake on our part, you can call any of our customer care lines and we would make adequate arrangement after an investigation is carried out.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>10. Customer complaints</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>10.1</b> Any Customer complaints should be addressed to DWEC Winery Customer Care Line
                        +2347036254646 or any other customer care line stated on the Website/Mobile App. An email should be sent to 
                        <a href="mailto:dwecwinery@gmail.com"> dwecwinery@gmail.com</a></p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>11. Special offers, promotions and competitions</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>11.1</b> From time to time, and in our complete discretion, purchases of goods may be subject to special
                        offers. In the event that such a special offer applies to your purchase, the terms of such special offer
                        shall be subject to these Terms & Conditions. If there is any conflict between the terms of a special offer
                        and these Terms & Conditions, these Terms & Conditions shall prevail unless specifically excluded.</p>
                    <p className="fs-lg"><b>11.2</b> We may change the terms of special offers, or withdraw them altogether, at any time and without
                        prior notice. We will honour at the offer price any order placed by you before an offer ends, or is
                        amended or withdrawn.</p>
                    <p className="fs-lg"><b>11.3</b> We reserve the right to offer in our complete discretion different customers different special offers,
                        promotions and the ability to enter different competitions.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>12. Cancellation of deliveries and suspension of your account</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>12.1</b> We reserve the right to cancel your delivery at any time if we suspect fraud, have reason to believe
                        you are in breach of these Terms and Conditions or any other terms and conditions relating to your order,
                        or if there is an outstanding payment for any account registered at your address.</p>
                    <p className="fs-lg"><b>12.2</b> In addition to our right to cancel your order, we reserve the right to suspend your account. Your
                        account will remain suspended until you contact our call centre on +2347036254646 and remedy any
                        breaches which are capable of remedy, or provide any information reasonably requested by our call
                        centre advisers to enable them to reactivate your account.</p>
                    <p className="fs-lg"><b>12.3</b> In the rare event that unforeseen operational or technical issues occur, we may need to cancel or
                        rearrange delivery. If this happens we will endeavour to contact you to arrange an alternative delivery
                        date.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>13. Copyright and trademarks</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>13.1</b> All intellectual property rights, whether registered or unregistered, in the Website/Mobile App, information content on
                        the Website/Mobile App and all the Website/Mobile App design, including, but not limited to, text, graphics, software, photos, video,
                        music, sound, and their selection and arrangement, and all software compilations, underlying source
                        code and software shall remain our property.</p>
                    <p className="fs-lg"><b>13.2</b> The entire contents of the Website/Mobile App also are protected by copyright as a collective work under Nigeria
                        copyright laws and international conventions. All rights are reserved.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>14. Applicable law and jusrisdiction</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>14.1</b> These Terms and Conditions shall be interpreted and governed by the laws in force in the Federal
                        Republic of Nigeria. The place of jurisdiction shall be Port Harcourt, Nigeria.</p>
                    <p className="fs-lg"><b>14.2</b> Unless otherwise specified, the material on DWEC Winery is presented solely for the purpose of
                        sale in Nigeria unless otherwise stated. DWEC Winery makes no representation that materials on the
                        Website/Mobile App are appropriate or available for use in other locations/Countries other than Nigeria unless otherwise
                        stated. Those who choose to access this Website/Mobile App from other locations/Countries other than Nigeria do so on
                        their own initiative and DWEC Winery is not responsible for supply of goods/refund for the goods
                        ordered from other locations/Countries other than Nigeria, compliance with local laws, if and to the extent
                        local laws are applicable.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>15. Termination</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg"><b>15.1</b> In addition to any other legal or equitable remedies, we may, without prior notice to you, immediately
                        terminate the Terms and Conditions or revoke any or all of your rights granted under the Terms and
                        Conditions.</p>
                    <p className="fs-lg"><b>15.2</b> Upon any termination of this Agreement, you shall immediately cease all access to and use of the
                        Website/Mobile App and we shall, in addition to any other legal or equitable remedies, immediately revoke all
                        password(s) and account identification issued to you and deny your access to and use of this Website/Mobile App in
                        whole or in part.</p>
                    <p className="fs-lg"><b>15.3</b> Any termination of this agreement shall not affect the respective rights and obligations (including
                        without limitation, payment obligations) of the parties arising before the date of termination. You
                        furthermore agree that the Website/Mobile App shall not be liable to you or to any other person as a result of any such
                        suspension or termination.</p>
                    <p className="fs-lg"><b>15.4</b> If you are dissatisfied with the Website/Mobile App or with any terms, conditions, rules, policies, guidelines, or
                        practices of DWEC Winery in operating the Website/Mobile App, your sole and exclusive remedy is to discontinue
                        using the Website/Mobile App.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>16. Product description</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg">16.1 DWEC Winery tries to be as accurate as possible. However, DWEC Winery does not
                        warrant that product description or other content of this Website/Mobile App is accurate, complete, reliable, current, or
                        error-free. If a product offered by DWEC Winery itself is not as described, your sole remedy is to
                        return it in unused condition within 24hours of receipt of goods.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>17. Limitation of liability</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg">17.1 IN NO EVENT SHALL DWEC Winery BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
                        INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND IN CONNECTION WITH THIS
                        AGREEMENT, EVEN IF DWEC Winery HAS BEEN INFORMED IN ADVANCE OF THE
                        POSSIBILITY OF SUCH DAMAGES.</p>
                    <p className="fs-lg">17.2 Our liability for losses you suffer as a result of us breaking this agreement is strictly limited to the
                        purchase price of the Goods you purchased.</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-4 col-lg-4">
                    <h2 className="" style={{fontFamily: 'pt-serif, serif', fontWeight: '700', fontStyle: 'normal'}}>18. Indemnity</h2>
                </div>
                <div className="col-md-8 col-xl-8">
                    <p className="fs-lg">18.1 You shall indemnify and hold harmless DWEC Winery, its owner's, licensee, affiliates,
                        subsidiaries, group companies (as applicable) and their respective officers, directors, agents, and
                        employees, from any claim or demand, or actions including reasonable attorneys' fees, made by any
                        third party or penalty imposed due to or arising out of your breach of this Terms of Use, privacy Policy
                        and other Policies, or your violation of any law, rules or regulations or the rights of a third party.</p>
                </div>
            </div>

        </section>

        <Footer />
    </>
  )
}
