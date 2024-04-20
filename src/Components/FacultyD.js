import React from 'react'
import NavBar from '../Adds/NavBar'
import FacultyA from '../Adds/FacultyA';

const FacultyD = () => {
  return (
      <div>
          <NavBar />
          <div className=' ml-96 mb-4'>
          <label className="mx-2 ">Courses</label>
            <select className="w-1/5 ml-5 border border-black rounded-md" name="Semester" id="Semester">
            <option></option>
            <option value="1">Artificial Intelligence</option>
            <option value="2">Graph Theory</option>
            <option value="3">Digital WaterMarking</option>
            <option value="4">Intro to Programming Language using C</option>
          </select>
          </div>
          <FacultyA />
     </div>
  )
}

export default FacultyD;