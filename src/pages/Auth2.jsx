import { faArrowLeft, faHouseMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { loginNurseApi, registerNurseApi } from '../Service/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginResponseContext } from '../Context/ContextShare'


function Auth2({ nurseRegister }) {

  const {setLoginResponse} = useContext(loginResponseContext)

  const navigate = useNavigate()

  const [key, setKey] = useState(1)

  const [preview, setPreview] = useState("")

  const [nurseDetails, setNurseDetails] = useState({
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
    expCertificate: "",
  })
  console.log(nurseDetails);

  const handleFile = (e, fieldName) => {
    setNurseDetails({ ...nurseDetails, [fieldName]: e.target.files[0] })
  }


  const handleCancel = () => {
    setNurseDetails({
      username: "",
      email: "",
      mobile: "",
      password: "",
      qualification: "",
      experience: "",
      specialization: "",
      description: "",
      profile: "",
      degCertificate: "",
      expCertificate: ""
    })
    setPreview("")

    if (key == 1) {
      setKey(0)
    }
    else {
      setKey(1)
    }
  }

  const handelRegister = async () => {
    const { username, email, password, mobile, qualification, experience, specialization, description, profile, degCertificate, expCertificate } = nurseDetails
    if (!username || !email || !password || !mobile || !qualification || !experience || !specialization || !description || !profile || !degCertificate || !expCertificate) {
      alert('Please Fill The Form Completely')
    }
    else {
      try {
        const formData = new FormData();

        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("mobile", mobile);
        formData.append("qualification", qualification);
        formData.append("experience", experience);
        formData.append("specialization", specialization);
        formData.append("description", description);
        formData.append("profile", profile);
        formData.append("degCertificate", degCertificate);
        formData.append("expCertificate", expCertificate);

        const reqHeader = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
        const result = await registerNurseApi(formData, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success('Registration Successfull')
          setNurseDetails({
            username: "",
            email: "",
            mobile: "",
            password: "",
            qualification: "",
            experience: "",
            specialization: "",
            description: "",
            profile: "",
            degCertificate: "",
            expCertificate: ""
          })
          navigate('/nurseLogin')
        }
      } catch (error) {
        console.error("Registration Error:", error);
      }

    }

  }




  const handleNurseLogin = async () => {
    const { email, password } = nurseDetails
    if (!email || !password) {
      toast.info('Fill Completely')
    }
    else {
      if (email === 'rolex@gmail.com' && password === 'rolex123') {
        toast.success('Admin Login Successful');
        // setLoginResponse(true)

        sessionStorage.setItem("role", "admin");
        sessionStorage.setItem("email", "rolex@gmail.com");
        sessionStorage.setItem("password", "rolex123");
       

        setNurseDetails({
          username: "",
          email: "",
          password: ""
        });

        setTimeout(() => {
          navigate('/Admin');
        }, 2000);
      }
      else {
        const result = await loginNurseApi({ email, password })
        console.log(result);
        if (result.status == 200) {
          toast.success('Login Successfull')
          setLoginResponse(true)

          sessionStorage.setItem("existingNurses", JSON.stringify(result.data.existingNurses))
          sessionStorage.setItem("token", result.data.token)

          setNurseDetails({
            username: "",
            email: "",
            password: ""
          })
          setTimeout(() => {
            navigate('/NurseProfile')
          }, 2000);
        }
        else if (result.status == 406) {
          toast.warning(result.response.status)
        }
        else {
          toast.error('Something Went Wrong')
        }
      }
    }
  }


  useEffect(() => {
    if (nurseDetails.profile) {
      setPreview(URL.createObjectURL(nurseDetails.profile))
    }
  }, [nurseDetails.profile])


  return (
    <>
      <Header />
      <div className='container'>
        <div className="row">

          <Link to={'/'} style={{ textDecoration: "none", marginTop: "100px" }}><p className='text-warning'><FontAwesomeIcon icon={faArrowLeft} className='me-3 ' />Back Home</p></Link>
          <div className='w-100 bg-transparent' style={{ height: "auto" }}>
            <div className="row">
              <div className="col-md-3"></div>

              <div className="col-md-6">
                <p className='fs-3 text-secondary text-center mt-5'><FontAwesomeIcon icon={faHouseMedical} className='me-3' />Care Partner</p>

                {!nurseRegister ? <p className='fs-4 text-center text-secondary'>Sign In to Your Account</p>
                  :
                  <p className='fs-4 text-center text-secondary'>Sign Up to Your Account</p>}

                {nurseRegister && <div className='mb-3 pe-5 ps-5 md:ps-0'>
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input onChange={(e) => setNurseDetails({ ...nurseDetails, username: e.target.value })} value={nurseDetails.username} type="text" placeholder='Username' className='form-control rounded-0' />
                </div>
                }


                <div className='mb-3 pe-5 ps-5 md:ps-0'>
                  <label htmlFor="name" className="form-label">Email ID</label>
                  <input onChange={(e) => setNurseDetails({ ...nurseDetails, email: e.target.value })} value={nurseDetails.email} type="text" placeholder='Email ID' className='form-control shadow rounded-0  ' />
                </div>

                <div className='mb-3 pe-5 ps-5 md:ps-0'>
                  <label htmlFor="name" className="form-label">Password</label>
                  <input onChange={(e) => setNurseDetails({ ...nurseDetails, password: e.target.value })} value={nurseDetails.password} type="password" placeholder='Password' className='form-control shadow  rounded-0' />
                </div>

                {/* -------------------------------------------------------- */}

                {nurseRegister && <div className="mb-3 pe-5 ps-5 md:ps-0">
                  <label htmlFor="name" className="form-label">Mobile</label>
                  <input onChange={(e) => setNurseDetails({ ...nurseDetails, mobile: e.target.value })} value={nurseDetails.mobile} type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                </div>}

                {nurseRegister && <div className="mb-3 pe-5 ps-5 md:ps-0">
                  <label htmlFor="profileImage">Upload Profile Image
                    <input onChange={(e) => handleFile(e, 'profile')} key={key} type="file" id="profileImage" className="d-none" />
                    <p className="mt-2">Uploaded:{nurseDetails.profile.name} </p>
                    <img src={preview ? preview : 'https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg'} alt="No image" style={{ width: "100px" }} />
                  </label>
                </div>}


                {nurseRegister && <div className="mb-3 pe-5 ps-5 md:ps-0">
                  <label htmlFor="qualification" className="form-label">Qualification</label>
                  <input onChange={(e) => setNurseDetails({ ...nurseDetails, qualification: e.target.value })} value={nurseDetails.qualification} type="text" className="form-control" id="qualification" placeholder="Enter your qualifications" />
                </div>}


                {nurseRegister && <div className="mb-3 pe-5 ps-5 md:ps-0">
                  <label htmlFor="degCertificate">Upload Degree Certificate
                    <input onChange={(e) => handleFile(e, 'degCertificate')} key={key} type="file" id="degCertificate" className="d-none " />
                    {nurseDetails.degCertificate ?
                      <p className="mt-2">Uploaded:{nurseDetails.degCertificate.name} </p>
                      :
                      <img src='https://media.istockphoto.com/id/1436405248/vector/upload-document-file-transfer-concept-backup-data-document-save-on-storage-technology-cloud.jpg?s=612x612&w=0&k=20&c=bvSNTz6L2WDldZiTFTMwxaL4X3Z7JflBbvkELlCcLEw=' alt="No image" style={{ width: "100px" }} />

                    }
                  </label>
                </div>}


                {nurseRegister && <div className="mb-3 pe-5 ps-5 md:ps-0">
                  <label htmlFor="experience" className="form-label">Years of Experience</label>
                  <input onChange={(e) => setNurseDetails({ ...nurseDetails, experience: e.target.value })} value={nurseDetails.experience} type="number" className="form-control" id="experience" placeholder="Enter years of experience" />
                </div>}


                {nurseRegister && <div className="mb-3 pe-5 ps-5 md:ps-0">
                  <label htmlFor="expCertificate">Upload Experience Certificate
                    <input onChange={(e) => handleFile(e, 'expCertificate')} key={key} type="file" id="expCertificate" className="d-none" />
                    {nurseDetails.expCertificate ?
                      <p className="mt-2">Uploaded:{nurseDetails.expCertificate.name} </p>
                      :
                      <img src='https://media.istockphoto.com/id/1436405248/vector/upload-document-file-transfer-concept-backup-data-document-save-on-storage-technology-cloud.jpg?s=612x612&w=0&k=20&c=bvSNTz6L2WDldZiTFTMwxaL4X3Z7JflBbvkELlCcLEw=' alt="No image" style={{ width: "100px" }} />
                    }
                  </label>
                </div>}

                {nurseRegister && <div className="mb-3 pe-5 ps-5 md:ps-0">
                  <label htmlFor="specialization" className="form-label">Specialization</label>
                  <input onChange={(e) => setNurseDetails({ ...nurseDetails, specialization: e.target.value })} value={nurseDetails.specialization} type="text" className="form-control" id="specialization" placeholder="Enter your area of specialization" />
                </div>}


                {nurseRegister && <div className="mb-3 pe-5 ps-5 md:ps-0">
                  <label htmlFor="bio" className="form-label">Bio/Short Description</label>
                  <textarea onChange={(e) => setNurseDetails({ ...nurseDetails, description: e.target.value })} value={nurseDetails.description} className="form-control" id="bio" placeholder="Write a short bio about yourself" rows="4" ></textarea>
                </div>}



                {/* ----------------------------------------------------------------- */}


                {!nurseRegister ? <div className='pe-5 mb-3 ps-5 md:ps-0'>
                  <style>{`.button {transition: transform 0.3s ease;}.button:hover {transform: scale(1.1)}`}</style>
                  <button onClick={handleNurseLogin} type='button' className='btn btn-warning form-control rounded-0 button'>Login</button>
                  <p className='mt-3 '>New User?click Here to <Link to={'/nurseRegister'} className='text-danger' >Register</Link></p>
                </div>
                  :
                  <div className='pe-5 ps-5 md:ps-0'>
                    <style>{`.button {transition: transform 0.3s ease;}.button:hover {transform: scale(1.1)}`}</style>
                    <div className='d-flex '>
                      <button onClick={handleCancel} type='button' className='btn btn-secondary form-control rounded button me-3' >Cancel</button>
                      <button onClick={handelRegister} type='button' className='btn btn-warning form-control rounded button ms-3' >Register</button>
                    </div>
                    <p className='mt-3'>Already a User?click Here to <Link to={'/nurseLogin'} className='text-danger' >Login</Link></p>
                  </div>}
              </div>

              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position='top-center' autoClose={2000} theme='colored' />


    </>
  )
}

export default Auth2


