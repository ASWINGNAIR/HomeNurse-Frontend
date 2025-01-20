import React from "react";
import Header from "../components/Header";
import { Container, Row, Col, Card, Button, Table, Nav } from "react-bootstrap";

function Admin() {
  return (
    <>
      <Header />

      <div style={{marginTop:"130px"}}>
        <div className="d-flex flex-column flex-md-row mt-5">
          {/* Sidebar */}
          <div
            className="d-md-block bg-dark text-light p-3"
            style={{ width: "250px" }}
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
  
            {/* Content Area */}
            <Container fluid className="mt-4">
              <Row>
                {/* Cards */}
                <Col xs={12} md={6} lg={4} className="mb-4">
                  <Card className="shadow">
                    <Card.Body>
                      <Card.Title>Total Users</Card.Title>
                      <h3>1,245</h3>
                      <Button variant="primary" size="sm">
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
  
                <Col xs={12} md={6} lg={4} className="mb-4">
                  <Card className="shadow">
                    <Card.Body>
                      <Card.Title>Active Nurses</Card.Title>
                      <h3>245</h3>
                      <Button variant="primary" size="sm">
                        View Details
                      </Button>
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
                            <th>Qualification</th>
                            <th>Experience</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td>B.Sc Nursing</td>
                            <td>5 Years</td>
                            <td>
                              <span className="badge bg-warning text-dark">
                                Pending
                              </span>
                            </td>
                            <td>
                              <Button
                                variant="success"
                                size="sm"
                                className="me-2"
                              >
                                Approve
                              </Button>
                              <Button variant="danger" size="sm">
                                Reject
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jane Smith</td>
                            <td>janesmith@example.com</td>
                            <td>G.N.M</td>
                            <td>3 Years</td>
                            <td>
                              <span className="badge bg-warning text-dark">
                                Pending
                              </span>
                            </td>
                            <td>
                              <Button
                                variant="success"
                                size="sm"
                                className="me-2"
                              >
                                Approve
                              </Button>
                              <Button variant="danger" size="sm">
                                Reject
                              </Button>
                            </td>
                          </tr>
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
    </>
  );
}

export default Admin;
