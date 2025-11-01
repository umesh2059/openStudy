import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './component/navbar'
import FilterBar from './component/filterbar'
import NoteCard from './component/notecard'
import SignUp from './pages/signup'

import './App.css'

function App() {
  return (
      <Router>
        <Navbar />
       <Routes>
        <Route path="/" element={<FilterBar />} />
        <Route path="/" element={<NoteCard />} />
       <Route path="/signup" element={<SignUp/>}/>
       </Routes>
          </Router>   
  )
}
export default App