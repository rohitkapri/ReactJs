import React from 'react'
import './Header.scss'
import logo from "../../logo.png"
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { IoSearch } from 'react-icons/io5';
import {FaBars} from "react-icons/fa";
import {RxCross1} from "react-icons/rx";

const Header = () => {
  return (
    <Router>
    <nav className="header">
        <img src={logo} alt="" />

        <div>
            <Link to = '/tvshows'>TV Shows</Link>
            <Link to = '/Movies'>Movies</Link>
            <Link to = '/Recently_added'>Recently added</Link>
            <Link to = '/My_List'>My List</Link>
                        
        </div>
        <IoSearch/>
        <FaBars className='fa-bars'/>
        <RxCross1 className='cross'/>
        
    </nav>
    </Router>
    
  )
}

export default Header
