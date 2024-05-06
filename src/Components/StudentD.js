import React from 'react'
import NavBar from '../Adds/NavBar'
const StudentD = () => {
  return (
    <div className="h-screen overflow-hidden">
    <NavBar />
    {/* <img src={background} alt="Background" className="w-full h-full object-cover fixed top-0 left-0 z-0" /> */}
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-32 ml-32 mr-32">
  <table class="w-full text-2xl text-left rtl:text-right text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover">
      <thead class="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" class="px-6 py-4 text-center">
                  Courses
              </th>
              
              <th scope="col" class="px-6 py-4 text-center">
                  Attendance
              </th>
              
              
          </tr>
      </thead>
      <tbody>
          <tr class="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-2xl px-8 py-4 text-center ">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Graph Theory
              </th>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  18/22
              </th>
              
              
          </tr>
          <tr class="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-2xl px-8 py-4 text-center ">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Graph Theory
              </th>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  18/22
              </th>
              
              
              
          </tr>
          <tr class="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-2xl px-8 py-4 text-center ">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Graph Theory
              </th>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  18/22
              </th>
              
              
          </tr>
         
      </tbody>
  </table>
</div>


  </div>
  )
}

export default StudentD