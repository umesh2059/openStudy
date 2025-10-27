import React from 'react'

const NoteCard=()=>{
    return(
       <div className="bg-yellow-50 min-h-screen flex justify-center items-start py-10">

  <div className="bg-[#fffef8] rounded-3xl shadow-md w-11/12 max-w-7xl p-8">


    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      
    
      <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-300">
        <h2 className="text-lg font-bold">Biology For Engineers</h2>
        <p className="text-gray-600">@Assignment 1</p>
        <p className="text-gray-600">Semester: 7</p>
        <p className="text-gray-600">
          Details: <span className="text-black font-medium">BE assn-1 NIST</span>
        </p>
        <p className="mt-1">
          By: <span className="text-green-600 font-semibold">Rajesh</span>
        </p>

        <img
          src="/note-preview.jpg"
          alt="Note Preview"
          className="rounded-md mt-3 h-48 w-full object-cover"
        />

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <button className="bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-800 transition">
              View Note
            </button>
            <img src="/whatsapp-icon.png" alt="Share" className="w-6 h-6 cursor-pointer" />
            <img src="/bookmark-icon.png" alt="Save" className="w-6 h-6 cursor-pointer" />
          </div>
          <p className="text-gray-500 text-sm">12/09/2025</p>
        </div>
      </div>

      

    </div>
  </div>
</div>

    )
}
export default NoteCard