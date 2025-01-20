import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <div className="d-flex justify-content-center align-items-center mt-5">
        <Button variant="primary" onClick={handleShow}>
          Click Here To Register
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Here..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="container mt-3">
      <form >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-3">
                <label htmlFor="projectImage">
                    upload Image
                    <input type="file" id='projectImage' className='d-none'   />
                        <img src='https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg' alt="No image" style={{width:"100px"}} />
                </label>
            </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="qualification" className="form-label">
            Qualification
          </label>
          <input
            type="text"
            className="form-control"
            id="qualification"
            placeholder="Enter your qualifications"
          />
        </div>
        <div className="mb-3">
                <label htmlFor="projectImage">
                    Upload Degree Certificate
                    <input type="file" id='projectImage' className='d-none'   />
                        <img src='https://media.istockphoto.com/id/1436405248/vector/upload-document-file-transfer-concept-backup-data-document-save-on-storage-technology-cloud.jpg?s=612x612&w=0&k=20&c=bvSNTz6L2WDldZiTFTMwxaL4X3Z7JflBbvkELlCcLEw=' alt="No image" style={{width:"100px"}} />
                </label>
            </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">
            Years of Experience
          </label>
          <input
            type="number"
            className="form-control"
            id="experience"
            placeholder="Enter years of experience"
          />
        </div>
        <div className="mb-3">
                <label htmlFor="projectImage">
                    Upload Experience Certificate
                    <input type="file" id='projectImage' className='d-none'   />
                        <img src='https://media.istockphoto.com/id/1436405248/vector/upload-document-file-transfer-concept-backup-data-document-save-on-storage-technology-cloud.jpg?s=612x612&w=0&k=20&c=bvSNTz6L2WDldZiTFTMwxaL4X3Z7JflBbvkELlCcLEw=' alt="No image" style={{width:"100px"}} />
                </label>
            </div>
        <div className="mb-3">
          <label htmlFor="specialization" className="form-label">
            Specialization
          </label>
          <input
            type="text"
            className="form-control"
            id="specialization"
            placeholder="Enter your area of specialization"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">
            Bio/Short Description
          </label>
          <textarea
            className="form-control"
            id="bio"
            placeholder="Write a short bio about yourself"
            rows="4"
          ></textarea>
        </div>
      </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>

      </div>

      
    </>
  )
}

export default AddProfile