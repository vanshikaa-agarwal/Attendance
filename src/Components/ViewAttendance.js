import React from 'react'
import NavBar from '../Adds/NavBar'
import { Search } from 'react-bootstrap-icons'
import Attendance from '../Adds/Attendance'
import background from '../assets/1.jpg'
const ViewAttendance = () => {
  return (
      <div>
          <NavBar />
          <div className="h-screen overflow-hidden">
                {/* <img src={background} alt="Background" className="w-full h-full object-cover fixed top-0 left-0 z-0" /> */}
                <div className="absolute top-0 left-0 flex flex-col justify-center h-full ml-4 z-10" style={{ marginLeft: 'calc(25vh + 200px)' }}>

                <label className='mx-2'>Name</label>
                  <input className='mt-5 border w-80  h-10 rounded-lg border-blue-300 mx-4' type='text' name='password' ></input>
                  <label className='mx-2 mt-5'>Roll No</label>
                  <input className='mt-5 border w-80 h-10 rounded-lg border-blue-300 mx-4' type='text' name='password' ></input>
                  <button>
                      <Search className='hover:fill-blue-500' size={25}/>
                  </button>
                    
                    

                </div>
              </div>
              <Attendance />
             
              
          </div>

  )
}

export default ViewAttendance