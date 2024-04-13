import React from 'react'
import Aboutt from "./Components/Aboutt"
import HeadSec from './Components/HeadSec'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Contactt from './Components/Contactt'

const App = () => {
  return (
    
    <>
    <HeadSec/>
      <Router>
      <Routes>
      <Route  exact path ='/' element = {<Homepage/>}/>
      <Route path="/about" element={<Aboutt/>}/>
      <Route path="/contact" element={<Contactt/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App

