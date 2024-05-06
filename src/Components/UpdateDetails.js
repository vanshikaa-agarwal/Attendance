import React from 'react'
import NavBar from '../Adds/NavBar'
import { Search } from 'react-bootstrap-icons'
import EntryS from '../Adds/EntryS'
import background from '../assets/1.jpg'
const UpdateDetails = () => {
    return (
        <div>
            <NavBar />

            <div className="h-screen overflow-hidden">
                <img src={background} alt="Background" className="w-full h-full object-cover fixed top-0 left-0 z-0" />
                <div className="absolute top-0 left-0 flex flex-col justify-center h-full ml-4 z-10" style={{ marginLeft: 'calc(25vh + 200px)' }}>

                <label className='mx-2 mt-5'>Name</label>
                  <input className='mt-5 border w-80 mb-5 h-10 rounded-lg border-blue-300 mx-4' type='text' name='password' ></input>
                  <label className='mx-2 mt-5'>Roll No</label>
                  <input className='mt-5 border w-80 mb-5 h-10 rounded-lg border-blue-300 mx-4' type='text' name='password' ></input>
                  <div>
                  <button type="button" className="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-small rounded-lg text-xl px-8 py-4 text-center me-2 mb-8">Save</button>
                    <button type="button" className="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xl px-8 py-4 text-center me-2 mb-8">Cancel</button>
                  </div>
                    
                    

                </div>
                {/* <EntryS /> */}
                <div className='flex justify-center ml-4' >
                    <button className='border border-black bg-black rounded-lg w-1/12 mx-6 my-4  text-white'>
                        Save
                    </button>
                    <button className='border border-black bg-black rounded-lg w-1/12 mx-2 my-4 text-white'>
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    )
}

export default UpdateDetails