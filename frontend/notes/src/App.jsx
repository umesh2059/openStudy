
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
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={   <>
            <FilterBar />
            <NoteCard/>
         </>}/>
        <Route path='/signup' element={<SignUp/>}/>
        </Routes>
  </div>
       
        </Router>
  )
}
export default App