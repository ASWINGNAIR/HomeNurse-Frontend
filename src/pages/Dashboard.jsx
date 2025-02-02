import React, { useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header'
import { getApprovedNursesApi } from '../Service/allApi'


function Dashboard() {

  const [nurses, setNurses] = useState([])

  const [searchKey, setSearchKey] = useState("")

  const getApprovedNurses = async () => {
    try {
      const result = await getApprovedNursesApi(searchKey)
      if (result.status === 200) {
        setNurses(result.data);
      }
    } catch (error) {
      console.error("Error fetching nurses:", error)
    }
  }
  console.log(nurses);

  console.log(searchKey);
  

  useEffect(() => {
    getApprovedNurses();
  }, [searchKey]);

  return (
    <>


      <Header />

      <div style={{ marginTop: "120px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex">
              <input onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder='Specialization' className='form-control shadow' />
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "lightgray", marginTop: "10px", marginLeft: "30px" }} />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">

          {nurses?.map((item) => (
            <div className="col-md-3"><ProfileCard data={item} /></div>
          ))
          }

        </div>
      </div>



    </>
  )
}

export default Dashboard