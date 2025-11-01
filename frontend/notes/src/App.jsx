import { useState } from 'react'
<<<<<<< Updated upstream
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './component/navbar'
import FilterBar from './component/filterbar'
import NoteCard from './component/notecard'
// import SignUp from './pages/signup'
// import 'bootstrap/dist/css/bootstrap.min.css'
=======
import Navbar from './component/navbar.jsx'
import React from 'react'

>>>>>>> Stashed changes
import './App.css'

function App() {
  return (
<<<<<<< Updated upstream
      <div>
        <Navbar />
       <FilterBar />
       <NoteCard />
          </div>       
=======
    <div className="App">
      <Navbar /> 
    </div>
>>>>>>> Stashed changes
  )
}
export default App