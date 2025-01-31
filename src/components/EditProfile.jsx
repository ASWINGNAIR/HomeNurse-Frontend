import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { serverUrl } from '../Service/serviceUrl';
import { updateNurseProfileApi } from '../Service/allApi';


function EditProfile({profiles}) {
    const [show, setShow] = useState(false);

    const [keys,setKeys] = useState(1)

    const [preview, setPreview] = useState("")

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
    
    const [nurseProfile , setNurseProfile] = useState({
      username:profiles.username,
      email:profiles.email,
      mobile:profiles.mobile,
      password:profiles.password,
      qualification:profiles.qualification,
      experience:profiles.experience,
      specialization:profiles.specialization,
      description:profiles.description,
      profile: '',
      degCertificate:profiles.degCertificate,
      expCertificate: profiles.expCertificate
  })
  console.log(nurseProfile);
  
  
  const handleFile = (e , fieldName)=>{
    setNurseProfile({...nurseProfile,[fieldName]:e.target.files[0]})
    
  }

  const handleCancel=()=>{
  setNurseProfile({
      username:profiles.username,
      email:profiles.email,
      mobile:profiles.mobile,
      password:profiles.password,
      qualification:profiles.qualification,
      experience:profiles.experience,
      specialization:profiles.specialization,
      description:profiles.description,
      profile:"",
      degCertificate:profiles.degCertificate,
      expCertificate: profiles.expCertificate
  })
  setPreview("")
  if (keys == 0) {
    setKeys(1)
  }
  else {
    setKeys(0)
  }
  }


  const handleupdate=async()=>{
    const {username , email , password , mobile , qualification , experience , specialization , description , profile , degCertificate , expCertificate} =nurseProfile
      if(!username || !email || !password || !mobile || !qualification || !experience || !specialization || !description || !degCertificate || !expCertificate){
        alert('Please Fill The Form Completely')
      }
      else{
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

        const token = sessionStorage.getItem("token")

        if (preview) {
          const reqHeader = {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
          const result = await updateNurseProfileApi(profiles._id , formData , reqHeader)
          console.log(result);
          
        }

        


        } catch (error) {
          console.error("updation Error:", error);
        }
      }
  }
  
  
  
  useEffect(() => {
          if (nurseProfile.profile ) {
            setPreview(URL.createObjectURL(nurseProfile.profile))
          }
        }, [nurseProfile.profile])

  return (
    <>
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} className='text-success me-5 fa-2x ' />

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="container mt-3">
      <form >

        <div className="mb-3">
          <label htmlFor="name" className="form-label"> Full Name </label>
          <input onChange={(e)=>setNurseProfile({...nurseProfile,username:e.target.value})} value={nurseProfile.username} type="text" className="form-control" id="name" placeholder="Enter your full name"/> 
          </div>

              <div className="mb-3">
                <label htmlFor="projectImage">
                  upload Image : 
                  <input onChange={(e) => handleFile(e,'profile')} key={keys} type="file" id='projectImage' className='d-none' />
                    <img src={preview ? preview : `${serverUrl}/upload/${profiles.profile}`} alt="No image" style={{width:"150px" , height:"150px"}} />
                </label>
              </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label"> Email Address </label>
          <input onChange={(e)=>setNurseProfile({...nurseProfile,email:e.target.value})} value={nurseProfile.email} type="email" className="form-control" id="email" placeholder="Enter your email"/>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label"> Phone Number</label>
          <input onChange={(e)=>setNurseProfile({...nurseProfile,mobile:e.target.value})} value={nurseProfile.mobile} type="tel"   className="form-control" id="phone" placeholder="Enter your phone number" />
        </div>

        <div className="mb-3">
          <label htmlFor="qualification" className="form-label"> Qualification </label>
          <input onChange={(e)=>setNurseProfile({...nurseProfile,qualification:e.target.value})} value={nurseProfile.qualification} type="text" className="form-control" id="qualification"  placeholder="Enter your qualifications" />
        </div>

        <div className="mb-3">
                <label htmlFor="projectImage">
                Upload Degree Certificate : 
                    <input onChange={(e) => handleFile(e, 'degCertificate')} type="file" id='projectImage' className='d-none'   />
                        
                    {nurseProfile.degCertificate || profiles.degCertificate ?
                      <a href={`${serverUrl}/upload/${profiles.degCertificate}`} target="_blank">Click to view File</a>
                      :
                      <img src='https://media.istockphoto.com/id/1436405248/vector/upload-document-file-transfer-concept-backup-data-document-save-on-storage-technology-cloud.jpg?s=612x612&w=0&k=20&c=bvSNTz6L2WDldZiTFTMwxaL4X3Z7JflBbvkELlCcLEw=' alt="No image" style={{ width: "100px" }} />

                    }
                </label>
            </div>



        <div className="mb-3">
          <label htmlFor="experience" className="form-label">Years of Experience </label>
          <input onChange={(e)=>setNurseProfile({...nurseProfile,experience:e.target.value})} value={nurseProfile.experience} type="number" className="form-control" id="experience" placeholder="Enter years of experience"  />
        </div>

        <div className="mb-3">
                <label htmlFor="projectImage">
                    Upload Experience Certificate : 
                    <input onChange={(e) => handleFile(e, 'expCertificate')} type="file" id='projectImage' className='d-none'   />
                    {nurseProfile.expCertificate || profiles.expCertificate ?
                      <a href={ `${serverUrl}/upload/${profiles.expCertificate}`} target="_blank">Click to view File</a>
                      :
                      <img src='https://media.istockphoto.com/id/1436405248/vector/upload-document-file-transfer-concept-backup-data-document-save-on-storage-technology-cloud.jpg?s=612x612&w=0&k=20&c=bvSNTz6L2WDldZiTFTMwxaL4X3Z7JflBbvkELlCcLEw=' alt="No image" style={{ width: "100px" }} />

                    }
                </label>
            </div>

        <div className="mb-3">
          <label htmlFor="specialization" className="form-label">Specialization</label>
          <input onChange={(e)=>setNurseProfile({...nurseProfile,specialization:e.target.value})} value={nurseProfile.specialization} type="text" className="form-control" id="specialization"  placeholder="Enter your area of specialization" />
        </div>

        <div className="mb-3">
          <label  htmlFor="bio" className="form-label">Bio/Short Description </label>
          <textarea onChange={(e)=>setNurseProfile({...nurseProfile,description:e.target.value})} value={nurseProfile.description} className="form-control" id="bio" placeholder="Write a short bio about yourself" rows="4" ></textarea>
        </div>

      </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleupdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default EditProfile
























// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { serverUrl } from '../Service/serviceUrl';


// function EditProfile({ profiles }) {
//   const [show, setShow] = useState(false);
//   const [keys, setKeys] = useState(1);
//   const [preview, setPreview] = useState("");
  
//   const [nurseProfile, setNurseProfile] = useState({
//     username: profiles.username || '',
//     email: profiles.email || '',
//     mobile: profiles.mobile || '',
//     password: profiles.password || '',
//     qualification: profiles.qualification || '',
//     experience: profiles.experience || '',
//     specialization: profiles.specialization || '',
//     description: profiles.description || '',
//     profile: '', // To handle file input for profile image
//     degCertificate: '', // To handle file input for degree certificate
//     expCertificate: '' // To handle file input for experience certificate
//   });

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleFile = (e, fieldName) => {
//     setNurseProfile({ ...nurseProfile, [fieldName]: e.target.files[0] });
//   };

//   useEffect(() => {
//     if (nurseProfile.profile) {
//       setPreview(URL.createObjectURL(nurseProfile.profile));
//     }
//   }, [nurseProfile.profile]);

//   return (
//     <>
//       <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} className='text-success me-5 fa-2x ' />

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Your Profile</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="container mt-3">
//             <form>
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Full Name</label>
//                 <input 
//                   onChange={(e) => setNurseProfile({ ...nurseProfile, username: e.target.value })} 
//                   value={nurseProfile.username} 
//                   type="text" 
//                   className="form-control" 
//                   id="name" 
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="projectImage">
//                   Upload Image
//                   <input 
//                     onChange={(e) => handleFile(e, 'profile')} 
//                     key={keys} 
//                     type="file" 
//                     id='projectImage' 
//                     className='d-none' 
//                   />
//                   {nurseProfile.profile || profiles.profile ? (
//                     <img 
//                       src={nurseProfile.profile ? preview : `${serverUrl}/upload/${profiles.profile}`} 
//                       alt="Profile Preview" 
//                       style={{ width: "100px" }} 
//                     />
//                   ) : (
//                     <img 
//                       src="https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg" 
//                       alt="No image" 
//                       style={{ width: "100px" }} 
//                     />
//                   )}
//                 </label>
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email Address</label>
//                 <input 
//                   onChange={(e) => setNurseProfile({ ...nurseProfile, email: e.target.value })} 
//                   value={nurseProfile.email} 
//                   type="email" 
//                   className="form-control" 
//                   id="email" 
//                   placeholder="Enter your email"
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="phone" className="form-label">Phone Number</label>
//                 <input 
//                   onChange={(e) => setNurseProfile({ ...nurseProfile, mobile: e.target.value })} 
//                   value={nurseProfile.mobile} 
//                   type="tel" 
//                   className="form-control" 
//                   id="phone" 
//                   placeholder="Enter your phone number" 
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="qualification" className="form-label">Qualification</label>
//                 <input 
//                   onChange={(e) => setNurseProfile({ ...nurseProfile, qualification: e.target.value })} 
//                   value={nurseProfile.qualification} 
//                   type="text" 
//                   className="form-control" 
//                   id="qualification" 
//                   placeholder="Enter your qualifications" 
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="projectImage">
//                   Upload Degree Certificate
//                   <input 
//                     onChange={(e) => handleFile(e, 'degCertificate')} 
//                     type="file" 
//                     id='projectImage' 
//                     className='d-none' 
//                   />
//                   {nurseProfile.degCertificate || profiles.degCertificate ? (
//                     <a href={nurseProfile.degCertificate ? URL.createObjectURL(nurseProfile.degCertificate) : `${serverUrl}/upload/${profiles.degCertificate}`} target="_blank" rel="noopener noreferrer">
//                       View Degree Certificate
//                     </a>
//                   ) : (
//                     <img 
//                       src="https://media.istockphoto.com/id/1436405248/vector/upload-document-file-transfer-concept-backup-data-document-save-on-storage-technology-cloud.jpg?s=612x612&w=0&k=20&c=bvSNTz6L2WDldZiTFTMwxaL4X3Z7JflBbvkELlCcLEw=" 
//                       alt="No document" 
//                       style={{ width: "100px" }} 
//                     />
//                   )}
//                 </label>
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="experience" className="form-label">Years of Experience</label>
//                 <input 
//                   onChange={(e) => setNurseProfile({ ...nurseProfile, experience: e.target.value })} 
//                   value={nurseProfile.experience} 
//                   type="number" 
//                   className="form-control" 
//                   id="experience" 
//                   placeholder="Enter years of experience" 
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="projectImage">
//                   Upload Experience Certificate
//                   <input 
//                     onChange={(e) => handleFile(e, 'expCertificate')} 
//                     type="file" 
//                     id='projectImage' 
//                     className='d-none' 
//                   />
//                   {nurseProfile.expCertificate || profiles.expCertificate ? (
//                     <a href={nurseProfile.expCertificate ? URL.createObjectURL(nurseProfile.expCertificate) : `${serverUrl}/upload/${profiles.expCertificate}`} target="_blank" rel="noopener noreferrer">
//                       View Experience Certificate
//                     </a>
//                   ) : (
//                     <img 
//                       src="https://media.istockphoto.com/id/1436405248/vector/upload-document-file-transfer-concept-backup-data-document-save-on-storage-technology-cloud.jpg?s=612x612&w=0&k=20&c=bvSNTz6L2WDldZiTFTMwxaL4X3Z7JflBbvkELlCcLEw=" 
//                       alt="No document" 
//                       style={{ width: "100px" }} 
//                     />
//                   )}
//                 </label>
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="specialization" className="form-label">Specialization</label>
//                 <input 
//                   onChange={(e) => setNurseProfile({ ...nurseProfile, specialization: e.target.value })} 
//                   value={nurseProfile.specialization} 
//                   type="text" 
//                   className="form-control" 
//                   id="specialization" 
//                   placeholder="Enter your area of specialization" 
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="bio" className="form-label">Bio/Short Description</label>
//                 <textarea 
//                   onChange={(e) => setNurseProfile({ ...nurseProfile, description: e.target.value })} 
//                   value={nurseProfile.description} 
//                   className="form-control" 
//                   id="bio" 
//                   placeholder="Write a short bio about yourself" 
//                   rows="4" 
//                 />
//               </div>
//             </form>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Close</Button>
//           <Button variant="primary" onClick={handleClose}>Update</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default EditProfile;

