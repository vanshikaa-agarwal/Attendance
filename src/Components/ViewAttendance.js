import React from 'react'
import NavBar from './NavBar'
import { Search } from 'react-bootstrap-icons'
import Attendance from '../Adds/Attendance'
const ViewAttendance = () => {
  return (
      <div>
          <NavBar />
          <div>
              <div className='flex justify-center'>
                  
                  <label className='mx-2 mt-5'>Name</label>
                  <input className='mt-5 border w-1/6 mb-5 h-1/4 rounded-lg border-blue-300 mx-4' type='text' name='password' ></input>
                  
                  
                  <label className='mt-5 mx-2'>Roll No.</label>
                  <input className='mt-5 border w-1/6 mb-5 h-1/4 rounded-lg border-blue-300 mx-4' type='text' name='password' ></input>
                  <button>
                      <Search className='hover:fill-blue-500' size={25}/>
                  </button>
              </div>
              <Attendance />
             
              
          </div>
    </div>
  )
}

export default ViewAttendance