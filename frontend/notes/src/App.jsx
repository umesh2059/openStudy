import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './component/navbar'
import FilterBar from './component/filterbar'
import NoteCard from './component/notecard'
// import SignUp from './pages/signup'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
      <div>
        <Navbar />
       <FilterBar />
       <NoteCard />
          </div>       
  )
}
export default App