import React from 'react'
import Card from 'react-bootstrap/Card';

function OurServices() {
  return (
    <>
          <h1 className="mt-5 text-center">Our Major HealthCare Services</h1>
          <div className="container">
              <div className="row">

                  <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                      <style>{`.card-container {transition: transform 0.3s ease;}.card-container:hover {transform: scale(1.1);}`}</style>
                      <Card className="shadow card-container" style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://carevivehealthcare.com/wp-content/uploads/2022/02/subacute-nursing-care-haymsalomonhome.jpg" />
                          <Card.Body>
                              <Card.Title>Nursing Care</Card.Title>
                              <Card.Text>
                                  Experience swift, simple transitions with our empathetic care, excellent facilities, state-of-the-art equipment, and advanced techniques.
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                      <Card className="shadow card-container" style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://regencyhealthcare.in/wp-content/uploads/2018/06/How-physiotherapy-can-help-with-pain-relief-and-better-mobility-1-1200x800.png" />
                          <Card.Body>
                              <Card.Title>Physiotherapy</Card.Title>
                              <Card.Text>
                                  We provide a broad-gauged way of interventions to treat ailments. Regain your flexibility with our patient-centric, home-based Physiotherapy services.
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                      <Card className="shadow card-container" style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1663047392930-7c1c31d7b785?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhhcm1hY3l8ZW58MHx8MHx8fDA%3D" />
                          <Card.Body>
                              <Card.Title>Pharmacy</Card.Title>
                              <Card.Text>
                                  Our pharmacy services focus on the accurate dispensing of medicines with additional assistance such as prescription fills.
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </div>
              </div>
          </div>


    </>
  )
}

export default OurServices