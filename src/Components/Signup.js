import React from "react";
// import book from "./book.jpg";
const Signup = () => {
  return (
    <div>
      <div className="px-10">
        <div className="border-2  rounded-lg border-slate-100  mt-7 bg-slate-100  font-mono text-5xl font-black antialiased text-center ">
          Get In As!
        </div>
        <div className="mt-10 flex justify-center">
          <button className="border-2 rounded-lg hover:m-4 border-black bg-black text-white w-1/6 h-40 m-5">
            Student
          </button>
          <button className="border-2 rounded-lg hover:m-4 border-black bg-black text-white w-1/6 h-40 m-5">
            Professor
          </button>
          <button className="border-2 rounded-lg m-5 hover:m-4 border-black bg-black text-white w-1/6 h-40">
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
