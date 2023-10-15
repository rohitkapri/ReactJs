import React from 'react'
import "./App.scss"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    
    <>
    <Header />
    <Router>
    <Routes>        
          <Route path="/" element={<Home />} />
    </Routes>
    </Router>
    </>
  );
}



export default App

