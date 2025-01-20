import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header'


function NurseProfile() {
  return (
    <>
       <Header/>

       <div style={{marginTop:"120px"}}>
            <div className="container">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 d-flex">
                  <input type="text" placeholder='Specialization' className='form-control shadow' />
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"lightgray", marginTop:"10px", marginLeft:"30px"}} />
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
        </div>

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3"><ProfileCard/></div>
                <div className="col-md-3"><ProfileCard/></div>
                <div className="col-md-3"><ProfileCard/></div>
                <div className="col-md-3"><ProfileCard/></div>
            </div>
        </div>
    </>
  )
}

export default NurseProfile