import React from 'react';
import image1 from '../assets/image1.png';


const Navbar=()=>{
    return(
  <nav className="flex items-center justify-between px-6 py-4 bg-yellow-50 shadow-sm relative z-50">
   <h1 className="text-2xl font-bold text-black">
    open<span className="text-green-600">Study</span>
   </h1>
   <div className="flex items-center gap-3">
    <button className="border rounded-full px-4 py-2 bg-green-100">Ask Doubts</button>
    <button className="bg-green-500 text-white rounded-full px-4 py-2">Upload Notes</button>
    <img src="/image1.png" className="w-10 h-10 rounded-full" />
  </div>
</nav>
 

<<<<<<< Updated upstream
 )
=======
        <div className="max-w-7xl mx-auto px-4">
            <div className='flex justify-between h-16 w-20 items-center bg-blue-600'>
                <div className="flex">
                    <h1>image1</h1>
                </div>
                <div className='flex'>
                    <a href="#" className='text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200'>Home</a>
                    <a href="#" className='text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200'>About</a>
                    <a href="#" className='text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200'>Contact</a>
                </div>
                <div className='flex'>
                    <button className='bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600'>Login</button>
                </div>
            </div>
        </div>
      </nav>
    )
>>>>>>> Stashed changes
}

export default Navbar