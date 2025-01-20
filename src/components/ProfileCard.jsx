import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ProfileCard() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
           <style>{`.card-container {transition: transform 0.3s ease;}.card-container:hover {transform: scale(1.1);}`}</style>
        <Card style={{ width: '100%' }} className='shadow border-0 mt-5 card-container'>
              <Card.Img onClick={handleShow} style={{height:"200px"}} variant="top" src='' className='w-100' />
              <Card.Body>
                  <Card.Title className='text-center'>Name</Card.Title>
              </Card.Body>
          </Card>

          <Modal show={show} onHide={handleClose} centered size='lg' >
              <Modal.Header closeButton>
                  <Modal.Title>Name</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-6">
                              <img style={{height:"200px"}} src='' alt="No image" className='w-100' />
                          </div>
                          <div className="col-md-6">
                              <h3>Specialization</h3>
                              <p>Child Care</p>
                              <h3>Education</h3>
                              <p>Bsc Nursing</p>
                              <h3>Experience</h3>
                              <p>3 year experience</p>
                              <h3>Mobile</h3>
                              <p>9077366536</p>
                          </div>
                      </div>
                  </div>
              </Modal.Body>
              <Modal.Footer>
                  <Link to='' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='fa-2x me-3 ms-3' /></Link>
                  <Link to='' target='_blank'><FontAwesomeIcon icon={faWhatsapp} className='fa-2x me-3' /></Link>
              </Modal.Footer>
          </Modal>
    </>
  )
}

export default ProfileCard