import React from 'react'
import "./App.scss"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Movie_card from "./components/Movie_card/Movie_card"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    
    <>
    <Header />  
    <Router>
    <Routes>  
           
          <Route path="/" element={<Home/>} />

          <Route path="/tvshows" element={<Home />} />
          <Route path="/Movies" element={<Home />} />
          <Route path="/Recently_added" element={<Home />} />
          <Route path="/My_list" element={<Home />} />
          <Route path="/movie_card" element={<Movie_card/>}/>


   
    </Routes>
    </Router>
    </>
  );
}



export default App

