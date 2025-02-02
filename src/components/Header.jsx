import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';


function Header() {

  const [token , setToken] = useState("")

  const [loginResponse , setLoginResponse] = useState([])

  const navigate = useNavigate()


  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[loginResponse])

  const handleLogout=()=>{
    sessionStorage.removeItem("existingUsers")
    sessionStorage.removeItem("token")
    setLoginResponse(false)
    navigate('/')
  }


  return (
    <>
      <Navbar expand="md" className="bg-secondary p-3  fixed-top" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <span className='fs-3 text-light'><FontAwesomeIcon icon={faHouseMedical} className='me-3' />Care Partner</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">


              <Link to={'/login'}><Button className="btn btn-warning rounded-5 ms-md-3 my-2 my-md-0">Book Now</Button></Link>
              { token && <Button onClick={handleLogout} className="btn btn-primary text-light rounded-5 ms-2 my-2 my-md-0"><FontAwesomeIcon icon={faPowerOff} />Log Out</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
