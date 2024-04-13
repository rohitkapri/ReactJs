import React from 'react'
import './Movie_card.scss'
import { Link } from 'react-router-dom'
const Movie_card = () => {
  const click = ()=>{
     console.log("function invoked")
  }
  return (
    <>
      
      <div className="about_movie">
      <Link onClick={()=>click()} to = "/home">Press to see movies</Link>
      </div>  

      
    </>
  )
}

export default Movie_card
