import React from 'react'
import NavBar from './NavBar'
const AdminD = () => {
  return (
      <div>
          <NavBar />
          <div className="flex justify-center ">
        <button className=" size-40 border rounded-lg bg-black text-white text-center m-10">
          View Attendance
        </button>
        <button className=" size-40 border rounded-lg bg-black text-white text-center m-10">
          Update Deatils
        </button>
      </div>
    </div>
  )
}

export default AdminD