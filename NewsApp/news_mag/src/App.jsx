import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory = {setCategory}/>
      <NewsBoard category = {category}/>
    </div>
  )
}

export default App
