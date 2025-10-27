import React from 'react';


const Navbar=()=>{
    return(
  <nav className="flex items-center justify-between px-6 py-4 bg-yellow-50 shadow-sm relative z-50">
   <h1 className="text-2xl font-bold text-black">
    Get <span className="text-green-600">Material</span>
   </h1>
   <div className="flex items-center gap-3">
    <button className="border rounded-full px-4 py-2 bg-green-100">Ask Doubts</button>
    <button className="bg-green-500 text-white rounded-full px-4 py-2">Upload Notes</button>
    <img src="/image1.png" className="w-10 h-10 rounded-full" />
  </div>
</nav>
 

 )
}

export default Navbar