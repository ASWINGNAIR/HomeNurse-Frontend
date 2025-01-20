import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHouseMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
faHouseMedical

function Footer() {
  return (
    <div className='py-5 px-4 bg-secondary mt-5'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h4 className='text-white'><FontAwesomeIcon icon={faHouseMedical} className='me-3' />Home Nurse</h4>
            <p style={{ textAlign: 'justify' }} className='mt-3'>
              A Home Nurse Booking Platform is an online service that connects patients and families with qualified,professional nurses for in-home healthcare. It allows users to browse,book,and manage nursing services tailored to individual needs,such as post-operative care,elderly care,chronic illness support or specialized medical assistance.</p>
          </div>

          <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
            <div>
              <h4 className='text-white'>Guides</h4>
              <p className='mt-3'>React</p>
              <p>React Bootstrap</p>
              <p>Bootswatch</p>
            </div>
          </div>

          <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
            <div>
              <h4 className='text-white ' >Links</h4>
              <p className='mt-3'>Home</p>
              <p>Nurses</p>
              <p>Dashboard</p>
            </div>
          </div>

          <div className="text-white col-md-4 px-md-5 mt-4 mt-md-0">
            <h4>Contact Us</h4>
            <div className='d-flex mt-3'>
              <input type="text" placeholder='Email Id' className='form-control' />
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className="d-flex justify-content-between mt-3 text-dark">
              <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
              <FontAwesomeIcon icon={faXTwitter} className='fa-2x' />
              <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
              <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />
              <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer