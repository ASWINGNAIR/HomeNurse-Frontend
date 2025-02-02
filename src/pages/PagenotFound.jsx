import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


function PagenotFound() {
  return (
    <>
      <Header />
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
            <img className='w-75 mt-5' src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt="Page Not Found" />
            <h1>Look like you're lost</h1>
            <h4 className='mt-3'>The page you are looking is unavailable</h4>
            <Link to={'/'}><button className='btn btn-success rounded-0 mt-4'>Go Home</button></Link>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  )
}

export default PagenotFound