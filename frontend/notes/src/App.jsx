import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './component/navbar'
import FilterBar from './component/filterbar'
import NoteCard from './component/notecard'
import ChatInterface from './component/ChatInterface'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
// import SignUp from './pages/signup'
// import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function Home() {
  return (
    <>
    <Navbar/>
      <FilterBar />
      <NoteCard />
    </>
  );
}
function App() {
  return (
      <div>
      <Router>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="/chat" element={<ChatInterface/>}/>
</Routes>
    
           </Router>    
          </div>   
  )
}
export default App