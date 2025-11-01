import React from 'react'
import image1 from '../assets/image1.png'

const Navbar = () => {
    return (
        <nav className="bg-yellow-50 shadow-sm relative z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer">
                    <h1 className="text-2xl font-bold text-black">
                        open<span className="text-green-600">Study</span>
                    </h1>
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-md font-medium hover:bg-green-400 hover:text-white transition-all">Home</a>
                    <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-md font-medium hover:bg-green-400 hover:text-white transition-all">About</a>
                    <a href="#" className="text-gray-800 px-3 py-2 rounded-md text-md font-medium hover:bg-green-400 hover:text-white transition-all">Contact</a>
                </div>

                <div className="flex items-center gap-3 ">
                    <button className="border cursor-pointer rounded-full px-4 py-2 bg-green-100">Ask Doubts</button>
                    <button className="bg-green-500 cursor-pointer text-white rounded-full px-4 py-2">Upload Notes</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar