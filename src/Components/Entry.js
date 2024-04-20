import React from 'react'

const Entry = () => {
  return (
      <div>
          <div className='flex flex-col rounded-lg items-center border-2 border-slate-100 bg-slate-100 w-1/2 justify-center justify-self-center ml-64 mt-44' >
              <input className='border w-1/2 m-5 h-1/4 rounded-lg'   type='text' name='gmail' placeholder='Gmail'>
                  
              </input>
              <input className='border w-1/2 mb-5 h-1/4 rounded-lg' type='text' name='password' placeholder='Password' >
                  
              </input>
              <button className=' border-black bg-black rounded-lg text-white m-3 w-1/2' >
                  Sign In
              </button>
          </div>
          

    </div>
  )
}

export default Entry