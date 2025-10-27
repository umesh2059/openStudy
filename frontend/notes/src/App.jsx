import { useState } from 'react'
import Navbar from'./component/navbar'
import FilterBar from './component/filterbar'
import NoteCard from './component/notecard'

import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <FilterBar/>
      <NoteCard/>
    </div>
  )
}

export default App
