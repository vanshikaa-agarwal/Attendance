import React from "react";
import NavBar from "./NavBar";
const EntryS = () => {
  return (
    <div>
        <NavBar/>
        <div className="mt-36 ml-96 flex flex-col space-y-4 self-center">
      <div className="flex items-center">
        <label htmlFor="semester" className="mr-2 text-lg">Semester</label>
        {/* <select id="semester" className="w-10/50 border border-black rounded-md py-1 px-2"> */}
        <select id="large" class="block ml-50 px-4 py-3 w-80 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Select semester</option>
          <option value="1">Sem 1</option>
          <option value="2">Sem 2</option>
          <option value="3">Sem 3</option>
          <option value="4">Sem 4</option>
        </select>
      </div>

      <div className="flex items-center">
        <label htmlFor="courses" className="mr-2 text-lg">Courses</label>
        <select id="large" class="block ml-50 px-4 py-3 w-80 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Select Courses</option>
          <option value="1">B. Tech</option>
          <option value="2">B. Des</option>
          <option value="3">M. Tech</option>
          <option value="4">PhD</option>
        </select>
      </div>

      
    </div>
    </div>
    
  );
};

export default EntryS;
