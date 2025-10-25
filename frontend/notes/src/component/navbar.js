import React from 'react';

const Navbar=()=>{
    return(
      <nav className='bg-white shadow-lg'>

        <div className="max-w-7xl mx-auto px-4">
            <div className='flex justify-between h-16 items-center'>
                <div className="flex-shrink-0">
                    <img 
                    className="h-8 w-auto"
                    src="/image1.png"
                    alt="logo"/>
                </div>
                <div className='flex space-x-4'>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                        Ask doubt
                    </button>

                    <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium'>
                       Upload
                    </button>
                </div>
            </div>
        </div>
      </nav>
    )
}

export default Navbar