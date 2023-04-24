import React from 'react'

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <input type="checkbox" id="modal-service" className="modal-toggle" />
      <label htmlFor="modal-service" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {children}
        </label>
      </label>
    </>
  )
}

export default Modal
