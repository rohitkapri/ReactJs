import React from 'react'
import './HeadSec.css'
import {BrowserRouter as Router , Link} from 'react-router-dom'
const HeadSec = () => {
  return (
    <>
    <Router>
      <nav >
         <Link to = '/about'>about</Link>
       
         <Link to = '/contact'>contact</Link>
      </nav>
      </Router>
    </>
  )
}

export default HeadSec
