import { faArrowLeft, faHouseMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { registerUserApi } from '../Service/allApi'

function Auth({register}) {
  
  const navigate = useNavigate()

  const [userDetails , setUserDetails] = useState({
    username:"",
    email:"",
    password:""
  })
  console.log(userDetails);

  const handleRegister=async()=>{
    const {username , email , password} = userDetails
    if(!username || !email || !password){
      alert('Please Fill The Form Completely')
    }
    else{
      const result =await registerUserApi(userDetails)
      console.log(result);
      
      if(result.status ==200){
        alert('Registation successful')
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
        navigate('/login')
      }
      else if(result.status==406){
        alert(result.response.status)
      }
      else{
        alert('Something Went Wrong')
      }
    }
  }
  

  return (
    <>
      <Header/>
      <div className='container'>
        <div className="row">

            <Link to={'/'} style={{textDecoration:"none",marginTop:"100px"}}><p className='text-warning'><FontAwesomeIcon icon={faArrowLeft} className='me-3 ' />Back Home</p></Link>
            <div className='w-100 bg-transparent' style={{ height: "auto" }}>
              <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-6">
                  <p className='fs-3 text-secondary text-center mt-5'><FontAwesomeIcon icon={faHouseMedical} className='me-3' />Care Partner</p>

                  {!register ? <p className='fs-4 text-center text-secondary'>Sign In to Your Account</p>
                    :
                    <p className='fs-4 text-center text-secondary'>Sign Up to Your Account</p>}

                  {register && <div className='mb-3 pe-5 ps-5 md:ps-0'>
                    <input onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username' className='form-control rounded-0'  />
                  </div>}


                  <div className='mb-3 pe-5 ps-5 md:ps-0'>
                    <input onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} type="text" placeholder='Email ID' className='form-control shadow rounded-0  ' />
                  </div>

                  <div className='mb-3 pe-5 ps-5 md:ps-0'>
                    <input onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='Password' className='form-control shadow mt-3 rounded-0'  />
                  </div>

                  {!register ? <div className='pe-5 mb-3 ps-5 md:ps-0'>
                    <style>{`.button {transition: transform 0.3s ease;}.button:hover {transform: scale(1.1)}`}</style>
                    <button type='button' className='btn btn-warning form-control rounded-0 button'>Login</button>
                    <p className='mt-3 '>New User?click Here to <Link to={'/Register'} className='text-danger' >Register</Link></p>
                  </div>
                    :
                    <div className='pe-5 ps-5 md:ps-0'>
                      <style>{`.button {transition: transform 0.3s ease;}.button:hover {transform: scale(1.1)}`}</style>
                      <button onClick={handleRegister} type='button' className='btn btn-warning form-control rounded-0 button' >Register</button>
                      <p className='mt-3'>Already a User?click Here to <Link to={'/login'} className='text-danger' >Login</Link></p>
                    </div>}
                </div>

                <div className="col-md-3"></div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Auth