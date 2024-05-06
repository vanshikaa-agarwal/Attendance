import React from "react";
import background from '../assets/Thak You.jpg'
import NavBar from "./NavBar";
const FacultyA = () => {
  return (

    <div className="h-screen overflow-hidden">
      <NavBar />
      {/* <img src={background} alt="Background" className="w-full h-full object-cover fixed top-0 left-0 z-0" /> */}
      

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-32 ml-32 mr-32">
    <table class="w-full text-2xl text-left rtl:text-right text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover">
        <thead class="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-4 text-center">
                    Name
                </th>
                <th scope="col" class="px-6 py-4 text-center">
                    Roll No
                </th>
                <th scope="col" class="px-6 py-4 text-center">
                    Attendance
                </th>
                <th scope="col" class="px-6 py-4 text-center">
                    Add Attendance
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-2xl px-8 py-4 text-center ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Vanshika
                </th>
                <td class="px-6 py-4">
                    21bec122
                </td>
                <td class="px-6 py-4">
                    18/22
                </td>
                <td class="px-6 py-4">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
+1
</span>
</button>
                </td>
                
            </tr>
            <tr class="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-2xl px-8 py-4 text-center ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Anushka
                </th>
                <td class="px-6 py-4">
                    21bec032
                </td>
                <td class="px-6 py-4">
                    18/22
                </td>
                <td class="px-6 py-4">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
+1
</span>
</button>
                </td>
               
            </tr>
            <tr class="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-2xl px-8 py-4 text-center ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Yashvardhan
                </th>
                <td class="px-6 py-4">
                    21bec126
                </td>
                <td class="px-6 py-4">
                    18/22
                </td>
                <td class="px-6 py-4">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
+1
</span>
</button>
                </td>
                
            </tr>
        </tbody>
    </table>
</div>


    </div>
  );
};

export default FacultyA;