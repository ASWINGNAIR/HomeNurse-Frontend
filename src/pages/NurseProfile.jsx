import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import EditProfile from '../components/EditProfile';
import Header from '../components/Header';
import { getNurseProfileApi } from '../Service/allApi'
import { serverUrl } from '../Service/serviceUrl';


function NurseProfile() {
  
  const [nurseProfile , setNurseProfile] = useState([])

  const getNurseProfile =async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getNurseProfileApi(reqHeader)
      // console.log(result.data);
      setNurseProfile(result.data)
    }
  }
  console.log(nurseProfile);
  


  useEffect(()=>{
    getNurseProfile()
  },[])

  return (
    <>
      <Header />
      <h1 className='text-center text-danger fw-bold' style={{ marginTop: "100px" }}>My Profile</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            {nurseProfile?.map((item)=>(
              <Card style={{ width: '100%', marginTop: "50px" }} className='align-items-center' >
              {item.profile?
                <Card.Img variant="top" src={`${serverUrl}/upload/${item.profile}`} style={{ height: "200px", width: "200px", borderRadius: "50%", marginTop: "30px" }} />
                :
                <Card.Img variant="top" src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" style={{ height: "400px", width: "400px", marginTop: "30px" }} />    
              }
              <Card.Body className='text-center'>
                <Card.Title className='fs-3' >{item.username}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <h3>Specialization</h3>
                <p>{item.specialization}</p>
                <h3>Qualification</h3>
                <p>{item?.qualification}</p>
                <h3>Experience</h3>
                <p>{item.experience} Years</p>
                <h3>Mobile</h3>
                <p>{item.mobile}</p>
                <h3>Email</h3>
                <p>{item.email}</p>
              </ListGroup>
              <Card.Body>
                <div >
                  <Card.Link href={`${serverUrl}/upload/${item.degCertificate}`} target='_blank' style={{ textDecoration: "none" }}>Degree Certificate</Card.Link>
                  <Card.Link href={`${serverUrl}/upload/${item.expCertificate}`} target='_blank' style={{ textDecoration: "none" }}>Experience Certificate</Card.Link>
                </div>
                <br />
                <div className='d-flex mt-2 justify-content-between'>

                  <EditProfile profiles={item} />

                  <FontAwesomeIcon icon={faTrash} className=' text-success fa-2x' />
                </div>
              </Card.Body>
            </Card>
            ))
              }
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  )
}

export default NurseProfile
