import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate()
  const goto = () => {
    navigate("/chat")
  }

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleUpload = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setShowForm(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-yellow-50 shadow-sm fixed top-0 left-0 right-0 z-50">
        <h1 className="text-2xl font-bold text-black">
          open<span className="text-green-600">Study</span>
        </h1>

        <div className="flex items-center gap-3">
          <button  onClick={goto} className="border rounded-full px-4 py-2 bg-green-100 hover:bg-green-200 transition">
            Ask Doubts
          </button>
          <button
            onClick={handleOpenForm}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 transition"
          >
            Upload Notes
          </button>
          <img src="/image1.png" className="w-10 h-10 rounded-full" alt="User" />
        </div>
      </nav>

      {/* Popup Overlay */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="relative bg-white dark:bg-gray-800 w-full max-w-md mx-auto p-6 rounded-2xl shadow-lg animate-fade-in">
            {/* Close Button */}
            <button
              onClick={handleCloseForm}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
              Upload Task
            </h2>

            <form onSubmit={handleUpload} className="space-y-5">
              {/* Subject Name */}
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="subject_name"
                  id="subject_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:border-green-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="subject_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-green-600"
                >
                  Subject Name
                </label>
              </div>

              {/* Semester */}
              <div className="relative z-0 w-full group">
                <select
                  id="semester"
                  name="semester"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
                  style={{ color: '#fff', '--select-text': '#fff' }}
                  required
                >
                  <option value="" className="text-gray-900" style={{ color: '#111' }}>Select Semester</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                    <option key={sem} value={sem} className="text-gray-900" style={{ color: '#111' }}>npm install react-router-dom
                      {sem} Semester
                    </option>
                  ))}
                </select>
              </div>

              {/* Branch */}
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="branch"
                  id="branch"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-green-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="branch"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-green-600"
                >
                  Branch (e.g. Engineering, Science)
                </label>
              </div>

              {/* Stream */}
              <div className="relative z-0 w-full group">
                <select
                  id="stream"
                  name="stream"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
                  style={{ color: '#fff', '--select-text': '#fff' }}
                  required
                >
                  <option value="" className="text-gray-900" style={{ color: '#111' }}>Select Stream</option>
                  <option value="CSE" className="text-gray-900" style={{ color: '#111' }}>Computer Science</option>
                  <option value="ECE" className="text-gray-900" style={{ color: '#111' }}>Electronics</option>
                  <option value="MECH" className="text-gray-900" style={{ color: '#111' }}>Mechanical</option>
                  <option value="CIVIL" className="text-gray-900" style={{ color: '#111' }}>Civil</option>
                  <option value="EEE" className="text-gray-900" style={{ color: '#111' }}>Electrical</option>
                </select>
              </div>

              {/* Upload PDF */}
              <div className="relative z-0 w-full group">
                <input
                  type="file"
                  name="task_pdf"
                  id="task_pdf"
                  accept="application/pdf"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  Upload your task file (PDF only)
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 text-white bg-green-500 hover:bg-green-600 transition rounded-lg px-5 py-2.5 text-sm font-medium"
                >
                  Submit Task
                </button>
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="flex-1 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg px-5 py-2.5 text-sm font-medium transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
