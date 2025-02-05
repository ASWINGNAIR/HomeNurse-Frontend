import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container, Row, Col, Card, Button, Table, Nav } from "react-bootstrap";
import { approveNurseApi, getAllNurseProfileApi, rejectNurseApi } from "../Service/allApi";
import { serverUrl } from "../Service/serviceUrl";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin() {

  const [token, setToken] = useState("")

  const [allNurseProfile, setAllNurseProfile] = useState([])

  const [rejectStatus, setRejectStatus] = useState([])

  // get all nurse data

  const getAllNurseProfile = async () => {

    
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllNurseProfileApi(reqHeader)
      setAllNurseProfile(result.data)
    
  }

  console.log(allNurseProfile);


  // reject the nurse profile by admin

  const handleReject = async (id) => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem('token')

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await rejectNurseApi(id, reqHeader)
      console.log(result);

      if (result.status == 200) {
        setRejectStatus(result)

        toast.warning('The profile get rejected by the Admin')
      }
      else {
        toast.error('Something Went Wrong')
      }
    }
  }


  // approve the nurse profile by admin

  const handleApprove = async (id) => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem('token')

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };

      const result = await approveNurseApi(id, reqHeader)
      console.log(result);

      if (result.status === 200) {
        setAllNurseProfile((prevProfiles) =>
          prevProfiles.map((nurse) =>
            nurse._id === id ? { ...nurse, status: "Approved" } : nurse
          )
        );

        toast.success('Nurse has been approved')
      } else {
        toast.error('Something went wrong')
      }
    }
  };



  useEffect(() => {
    getAllNurseProfile()
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem('token'))
    }
  }, [rejectStatus])


  return (
    <>
      <Header />

      <div style={{ marginTop: "130px" }}>
        <div className="d-flex flex-column flex-md-row mt-5">
          {/* Sidebar */}
          <div
            className="d-md-block bg-dark text-light p-3"
            style={{ width: "250px", height: "235px" }}
          >
            <h3 className="text-center text-light">Admin Panel</h3>
            <Nav defaultActiveKey="/dashboard" className="flex-column mt-4">
              <Nav.Link href="/dashboard" className="text-light">
                Dashboard
              </Nav.Link>
              <Nav.Link href="/NurseProfile" className="text-light">
                Nurses
              </Nav.Link>
            </Nav>
          </div>

          {/* Main Content */}
          <div className="flex-grow-1 ">
            {/* Header */}
            <header className="bg-light p-3">
              <h4>Welcome, Admin</h4>
            </header>


            <Container fluid className="mt-4">
              <Row>



                <Col xs={12} md={6} lg={4} className="mb-4">
                  <Card className="shadow">
                    <Card.Body>
                      <Card.Title>Active Nurses</Card.Title>
                      <h3>{allNurseProfile?.length || 0}</h3>
                      <Link to={'/Dashboard'}>
                        <Button variant="primary" size="sm">View Details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Approval Table */}
              <Row>
                <Col>
                  <h3 className="text-center mb-4">Pending Nurse Approvals</h3>
                  <Card className="shadow">
                    <Card.Body>
                      <Table responsive bordered hover>
                        <thead className="table-dark">
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>mobile</th>
                            <th>Qualification</th>
                            <th>Experience</th>
                            <th>Degree Certificate</th>
                            <th>Experience Certificate</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allNurseProfile?.map((item, index) => (
                            <tr key={item._id}>
                              <td>{index + 1}</td>
                              <td>{item?.username}</td>
                              <td>{item?.email}</td>
                              <td>{item?.mobile}</td>
                              <td>{item?.qualification}</td>
                              <td>{item?.experience} Years</td>
                              <td><a href={`${serverUrl}/upload/${item.degCertificate}`} target="_blank" style={{ textDecoration: "none" }} >Open File</a></td>
                              <td><a href={`${serverUrl}/upload/${item.expCertificate}`} target="_blank" style={{ textDecoration: "none" }} >Open File</a></td>

                              <td>
                                <span className={`badge ${item.status === "Approved" ? "bg-success" : "bg-warning text-dark"}`}>
                                  {item.status || "Pending"}
                                </span>
                              </td>

                              <td>
                                {item.status === "Approved" ? (
                                  <Button variant="secondary" size="sm" disabled>Approved</Button>
                                ) : (
                                  <>
                                    <Button onClick={() => handleApprove(item?._id)} variant="success" size="sm" className="me-2">
                                      Approve
                                    </Button>
                                    <Button onClick={() => handleReject(item?._id)} variant="danger" size="sm">
                                      Reject
                                    </Button>
                                  </>
                                )}
                              </td>

                            </tr>
                          ))
                          }
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      <ToastContainer position='top-center' autoClose={2000} theme='colored' />

    </>
  )
}

export default Admin;
