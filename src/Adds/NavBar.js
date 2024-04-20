import React from 'react'
import { Pen } from 'react-bootstrap-icons';
import { Person } from 'react-bootstrap-icons';
const NavBar = () => {
  return (
    <div>
      <div className='grid grid-cols-5 '>
          <div className='text-center text-4xl m-10 col-span-4 justify-self-start'>
             Hii Anushka !
      </div>
        <div>
          <button className='size-10' ><Pen size={25} className='col-span-1 mt-1 hover:fill-blue-500' /></button>
          <button className='size-10' ><Person size={30} className='col-span-1 mt-1 hover:fill-blue-500' /></button>
        </div>
        </div>
      </div>
    
  )
}

export default NavBar;