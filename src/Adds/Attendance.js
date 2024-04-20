import React from 'react'

const Attendance = () => {
  return (
    <div className='grid grid-cols-4 border rounded-lg bg-slate-400 w-1/2 justify-items-stretch h-svh ml-72 grid-row-5'>
        <div className='col-span-2 justify-self-center text-2xl'>Courses</div>
        <div className='col-span-2 justify-self-center text-2xl'>
          Attendance
        </div>
        <div className='col-span-2 justify-self-center '>Artificial Intelligence</div>
        <div className='col-span-2 justify-self-center '>23/34</div>
        <div className='col-span-2 justify-self-center '>Data Structures and Algorithm</div>
        <div className='col-span-2 justify-self-center '>34/45</div>
        <div className='col-span-2 justify-self-center '>Digital WaterMarking</div>
        <div className='col-span-2 justify-self-center '>12/23</div>
        <div className='col-span-2 justify-self-center '>Operating System</div>
        <div className='col-span-2 justify-self-center '>0/9</div>
      </div>
  )
}

export default Attendance