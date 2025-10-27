import { useState } from 'react'
import Navbar from'./component/navbar'
import FilterBar from './component/filterbar'

import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <FilterBar/>
    </div>
  )
}

export default App
