import React from 'react'

export default function OrderModal() {
  return (
    <>
        <div className="modal fade" id="orderModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{backgroundColor: '#fdf1f1'}}>
                <div className="modal-body mt-4 text-center">
                    <img src='assets/img/notification-bell.png' width={100} alt='alert' />
                    <p className='mt-3 fs-xll'>Kindly note that deliveries within <span className='text-primary fw-medium'>Port Harcourt</span> metropolis are processed and delivered within the <span className='text-primary fw-medium'>hours after payment has been confirmed</span>.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Understood</button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
