import React from "react";

const FacultyA = () => {
  return (
    <div>
      <div className="grid grid-cols-4 border rounded-lg bg-slate-400 w-1/2 justify-items-stretch h-svh ml-72 grid-row-5">
        <div className=" px-4 py-2">Name</div>
        <div className=" px-4 py-2">Roll No</div>
        <div className=" px-4 py-2">Attendance</div>
        <div className=" px-4 py-2">Add Attendance</div>
        {/* Entry 1 */}
        <div className=" px-4 py-2">Anushka</div>
        <div className=" px-4 py-2">21bec022</div>
        <div className=" px-4 py-2">18/22</div>
        <div className=" px-4 py-2">
          <button className=" bg-black text-white font-bold py-2 px-4 rounded">
            +1
          </button>
              </div>
        {/* Entry 2 */}
        <div className=" px-4 py-2">Simple</div>
        <div className=" px-4 py-2">21bme053</div>
        <div className=" px-4 py-2">18/22</div>
        <div className=" px-4 py-2">
          <button className=" bg-black text-white font-bold py-2 px-4 rounded">
            +1
          </button>
              </div>
              {/* Entry 3 */}
        <div className=" px-4 py-2">Samarth</div>
        <div className=" px-4 py-2">21bec045</div>
        <div className=" px-4 py-2">18/22</div>
        <div className=" px-4 py-2">
          <button className=" bg-black text-white font-bold py-2 px-4 rounded">
            +1
          </button>
              </div>
              {/* Entry 4 */}
        <div className=" px-4 py-2">Anushka</div>
        <div className=" px-4 py-2">21bec022</div>
        <div className=" px-4 py-2">18/22</div>
        <div className=" px-4 py-2">
          <button className=" bg-black text-white font-bold py-2 px-4 rounded">
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyA;
