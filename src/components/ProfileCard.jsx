import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { serverUrl } from '../Service/serviceUrl';


function ProfileCard({ data }) {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);

    const handleShow = (nurse) => {
        setShow(true)
    }



    return (
        <>
            <style>{`.card-container {transition: transform 0.3s ease;}.card-container:hover {transform: scale(1.1);}`}</style>


            <Card style={{ width: '100%' }} className='shadow border-0 mt-5 card-container'>
                <Card.Img onClick={handleShow} style={{ height: "200px" }} variant="top" src={data.profile ? `${serverUrl}/upload/${data.profile}` : ''} className='w-100' />
                <Card.Body>
                    <p className='text-center'>{data.description}</p>
                    <Card.Title className='text-center'>{data.username}</Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} centered size='lg' >
                <Modal.Header closeButton>
                    <Modal.Title>{data.username}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <img style={{ height: "200px" }} src={data.profile ? `${serverUrl}/upload/${data.profile}` : ''} alt="No image" className='w-100' />
                            </div>
                            <div className="col-md-6">
                                <h3>Specialization</h3>
                                <p>{data.specialization}</p>
                                <h3>Education</h3>
                                <p>{data.qualification}</p>
                                <h3>Experience</h3>
                                <p>{data.experience}year experience</p>
                                <h3>Mobile</h3>
                                <p>{data.mobile}</p>
                                <h3>Email ID</h3>
                                <p>{data.email}</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProfileCard