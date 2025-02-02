import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProfile() {

  const [show, setShow] = useState(false);

  const [profileDetails, setProfileDetails] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    qualification: "",
    experience: "",
    specialization: "",
    description: "",
    profile: "",
    degCertificate: "",
    expCertificate: ""
  })
  console.log(profileDetails);


  const handleClose = () => {
    setShow(false)

  }
  const handleShow = () => setShow(true);

  const handleRegister = async () => {
    const { username, email, password, mobile, qualification, experience, specialization, description, profile, degCertificate, expCertificate } = profileDetails
    if (!username || !email || !mobile || !qualification || !experience || !specialization || !description || !profile || !degCertificate || !expCertificate) {
      toast.info('Please Fill The Form Completely')
    }
    else {
      const reqBody = new FormData
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("password", password)
      reqBody.append("mobile", mobile)
      reqBody.append("qualification", qualification)
      reqBody.append("experience", experience)
      reqBody.append("specialization", specialization)
      reqBody.append("description", description)
      reqBody.append("profile", profile)
      reqBody.append("degCertificate", degCertificate)
      reqBody.append("expCertificate", expCertificate)

      const token = sessionStorage.getItem("token")

      if (preview) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await addProfileApi(reqBody, reqHeader)
        console.log(result);


        if (result.status == 200) {

          toast.success('Profile added successfully')
          sessionStorage.setItem("existingNurses", JSON.stringify(result.data))
          setTimeout(() => {
            handleClose()
            navigate('/NurseProfile')
          }, 2000);
        }
        else if (result.status == 406) {
          toast.warning(result.response.data)
        }
        else {
          toast.error('Something Went Wrong')
          handleClose()
        }

      }
      else {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await addProfileApi(reqBody, reqHeader)
        console.log(result);

        if (result.status == 200) {

          toast.success('Profile added successfully')
          sessionStorage.setItem("existingNurses", JSON.stringify(result.data))
          setTimeout(() => {
            handleClose()
            navigate('/NurseProfile')
          }, 2000);
        }
        else if (result.status == 406) {
          toast.warning(result.response.data)
        }
        else {
          toast.error('Something Went Wrong')
          handleClose()
        }
      }
    }
  }


  return (
    <>

      <div className=" btn btn-primary text-light px-3 py-2 mt-3">
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
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
                </div>


                <div className="mb-3">
                  <label htmlFor="profileImage">Upload Profile Image
                    <input type="file" id="profileImage" className="d-none" />
                    <p className="mt-2">Uploaded: </p>
                    <img src='https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg' alt="No image" style={{ width: "100px" }} />
                  </label>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label"> Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="qualification" className="form-label">Qualification</label>
                  <input type="text" className="form-control" id="qualification" placeholder="Enter your qualifications" />
                </div>


                <div className="mb-3">
                  <label htmlFor="degCertificate">Upload Degree Certificate
                    <input type="file" id="degCertificate" className="d-none " />

                    <p className="mt-2">Uploaded: </p>

                    <img src='https://media.istockphoto.com/id/1436405248/vector/upload-document-file-transfer-concept-backup-data-document-save-on-storage-technology-cloud.jpg?s=612x612&w=0&k=20&c=bvSNTz6L2WDldZiTFTMwxaL4X3Z7JflBbvkELlCcLEw=' alt="No image" style={{ width: "100px" }} />

                  </label>
                </div>

                <div className="mb-3">
                  <label htmlFor="experience" className="form-label">Years of Experience</label>
                  <input type="number" className="form-control" id="experience" placeholder="Enter years of experience" />
                </div>


                <div className="mb-3">
                  <label htmlFor="expCertificate">Upload Experience Certificate
                    <input type="file" id="expCertificate" className="d-none" />

                    <p className="mt-2">Uploaded: </p>

                    <img src='https://media.istockphoto.com/id/1436405248/vector/upload-document-file-transfer-concept-backup-data-document-save-on-storage-technology-cloud.jpg?s=612x612&w=0&k=20&c=bvSNTz6L2WDldZiTFTMwxaL4X3Z7JflBbvkELlCcLEw=' alt="No image" style={{ width: "100px" }} />

                  </label>
                </div>

                <div className="mb-3">
                  <label htmlFor="specialization" className="form-label">Specialization</label>
                  <input onChange={(e) => setProfileDetails({ ...profileDetails, specialization: e.target.value })} value={profileDetails.specialization} type="text" className="form-control" id="specialization" placeholder="Enter your area of specialization" />
                </div>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">Bio/Short Description</label>
                  <textarea className="form-control" id="bio" placeholder="Write a short bio about yourself" rows="4" ></textarea>
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" >Cancel</Button>
            <Button variant="primary" >Register</Button>
            <div className='pe-5 ps-5 md:ps-0'>
              <p className='mt-3'>Already a User?click Here to<button>Login</button></p>
            </div>
          </Modal.Footer>
        </Modal>

      </div>

      <ToastContainer position='top-center' autoClose={2000} theme='colored' />
    </>
  )
}

export default AddProfile
































