import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import EditProfile from '../components/EditProfile';
import Header from '../components/Header';


function Dashboard() {
  return (
    <>
      <Header/>
        <h1 className='text-center text-danger fw-bold' style={{marginTop:"100px"}}>My Profile</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Card style={{ width: '100%',marginTop:"50px"}} className='align-items-center' >
              <Card.Img variant="top" src="https://media.istockphoto.com/id/1387079872/photo/shot-of-a-young-female-nurse-posing-against-a-studio-background.jpg?s=612x612&w=0&k=20&c=sjltYBa32GSAmEGzEke85SqmWiVOEojbZC4-D1QM6x4=" style={{height:"400px" ,width:"400px",marginTop:"30px"}} />
              <Card.Body className='text-center'>
                <Card.Title className='fs-3' >Catherine Francis</Card.Title>
                <Card.Text>
                Short Description
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <h3>Specialization</h3>
                <p>Child Care</p>
                <h3>Qualification</h3>
                <p>Bsc Nursing</p>
                <h3>Experience</h3>
                <p>3 year experience</p>
                <h3>Mobile</h3>
                <p>9077366536</p>
                <h3>Email</h3>
                <p>catherine@gmail.com</p>
              </ListGroup>
              <Card.Body>
                <div >
                  <Card.Link href="#" style={{textDecoration:"none"}}>Degree Certificate</Card.Link>
                  <Card.Link href="#" style={{textDecoration:"none"}}>Experience Certificate</Card.Link>
                </div>
                  <br />
                <div className='d-flex mt-2 '>
                    <EditProfile/>
                    <Link to='' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='fa-2x me-5 ms-3' /></Link>
                    <Link to='' target='_blank'><FontAwesomeIcon icon={faWhatsapp} className='fa-2x me-5' /></Link>
                    <FontAwesomeIcon icon={faTrash} className='me-5 text-success fa-2x' />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      
      
    </>
  )
}

export default Dashboard