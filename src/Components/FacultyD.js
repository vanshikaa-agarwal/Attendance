import React from 'react'
import NavBar from '../Adds/NavBar'
import FacultyA from '../Adds/FacultyA';

const FacultyD = () => {
  return (
    <div>
      <NavBar />
      <div className="ml-10 mt-[20vh] flex items-center">
      <label for="large" class="block text-base font-medium text-gray-900 dark:text-white">Select Course</label>
  <select id="large" class="block ml-50 px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Select Course</option>
    <option value="US">AI</option>
    <option value="CA">Graph Theory</option>
    <option value="FR">Digital Watermarking</option>
    <option value="DE">Next Generation Networks</option>
  </select>
</div>

      <FacultyA />
    </div>
  )
}

export default FacultyD;