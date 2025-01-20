import React, { useState } from 'react'
import Header from '../components/Header'
import HomeCarousel from '../components/HomeCarousel'
import OurServices from '../components/OurServices';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Home() {

  const [isLogin,setIsLogin] =useState(false) 

  return (
    <>
      <Header/>
      <div className='bg-transparent' style={{ marginTop:"93px"}} id='home'> 
        <div className="container-fluid">
        <HomeCarousel/>

        <OurServices/>


          <div className="bg-secondary p-5 my-5" style={{ minHeight: "500px" }}>
            <div className="row align-items-center">

              <div className="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
                <h1 className="text-light display-4">Care Partner</h1>
                <p className="text-light">This is the place where you get your perfect Home Nurse.</p>
                {isLogin === false ?
                  (
                    <Link to={'/login'}><button className="btn btn-warning text-light px-3 py-2 mt-3">Login As User <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                  )
                  :
                  (
                    <Link to={'/Dashboard'}><button className="btn btn-primary text-light px-3 py-2 mt-3">Find Your Nurse <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                  )}
              </div>
              <div className="col-lg-6 col-md-12 text-center">
                <img src="https://lh3.googleusercontent.com/proxy/4XKH5Jz3K46HdRWS2UXOzRKHDq_cemmcJRnwIEVLO1gDp3mHVJoPaLICh7B87SJRqYuzUYPqTY2vkyXSW_ZLN9ImnSyqP78M00kg_BbMxaJvovUuPdCbtxMR-9_stxnhQLPVxgImJWx3g66KJ-PhxkR_JpWeGtW5" alt="Home Nurse" className="img-fluid" style={{ maxHeight: "300px" }} />
              </div>
            </div>
          </div>


          <div className="bg-warning p-5 my-5" style={{ minHeight: "500px" }}>
            <div className="row align-items-center">

              <div className="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
                <h1 className="text-light display-4">Care Partner</h1>
                <p className="text-light">If you are a certified nurse, you can join our team.</p>
                {isLogin === false ?
                  (
                    <Link to={'/login'}><button className="btn btn-primary text-light px-3 py-2 mt-3">Login as Nurse <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                  )
                  :
                  (
                    <Link to={'/Dashboard'}><button className="btn btn-success text-light px-3 py-2 mt-3">Manage Profile <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                  )}
              </div>

              <div className="col-lg-6 col-md-12 text-center">
                <img src="https://media.istockphoto.com/id/1412849328/photo/portrait-of-a-young-nurse-doctor.jpg?s=612x612&w=0&k=20&c=7xyroZ4ZjhIxdzo69ouaa7wUnqt-cTg15hTxoG2nBKs=" alt="Nurse Portrait" className="img-fluid rounded" style={{ maxHeight: "400px", objectFit: "cover" }} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home