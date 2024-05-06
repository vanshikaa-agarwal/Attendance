import React from 'react'
import NavBar from '../Adds/NavBar'
import { Button, Container, Grid, Typography } from "@material-ui/core";

const AdminD = () => {
  return (
    <div>

      <NavBar />
      <div className="my-[25vh]"></div>
      <div className="flex justify-center gap-4 ">
        
        <Button variant="outlined">View Attendance</Button>
        <Button variant="outlined">Update details</Button>
        {/* <button className=" size-40 border rounded-lg bg-black text-white text-center m-10">
          View Attendance
        </button> */}
        {/* <button className=" size-40 border rounded-lg bg-black text-white text-center m-10">
          Update Deatils
        </button> */}
      </div>
    </div>
  )
}

export default AdminD