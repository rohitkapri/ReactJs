import React, { useEffect, useState } from 'react'
import "./Home.scss"
import card_image from '../../download.jpeg'
import axios from "axios"
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
import {IoIosArrowForward} from "react-icons/io"



const apikey = "b872368071b70996a2bffa4194e4e0f0"
const url = "https://api.themoviedb.org/3/movie/"
const genreurl = "https://api.themoviedb.org/3/genre/movie/list"
const ImgUrl = "https://image.tmdb.org/t/p/w500"
const nowplaying = "now_playing"
const popular = "popular"
const top_rated = "top_rated"
const upcoming = "upcoming"                           

const Card = ({img})=>{ 
  return(
    <div className='card'>
       <img src={img} alt='cover'/>
    </div>
  );
}
const Row =  ({ Title, arr = [] }) =>{
  const Handle_next_button = ()=>{
    console.log("next_clicked");  
  }

  const [isgenereavailable, setisgenereavailable] = useState(false);


return(
      
    <div className='row'>
        <h2>{Title}</h2>
        <div>
          {arr.map((item, index)=>(

             <Card key={index} img ={`${ImgUrl}${item.poster_path}`} />
          ))}
          
          <div className='next_button'>
          <button onClick={Handle_next_button} > <IoIosArrowForward/> </button>
          </div>
        </div>
    </div>
    );
}

const Home = () => {
  const [NowPlaying, setNowPlaying] = useState([]);
  const [PopularMovies, setPopularMovies] = useState([]);
  const [Top_Rated_Movies, setTop_Rated_Movies] = useState([]);
  const [Upcoming_movies, setUpcoming_movies] = useState([]);
  const [Genre, setGenre] = useState([]);

  useEffect(() => {

    console.log('useEffect triggered'); 
    const fetchNow_Playing = async () => {
      
        const { data: {results}, } = await axios.get(`${url}/${nowplaying}?api_key=${apikey}`);
        // console.log('Fetched data:', results);
        setNowPlaying(results)

    };
   
  const fetchTop_rated = async () => {
      
    const { data: {results}, } = await axios.get(`${url}/${top_rated}?api_key=${apikey}`);
    // console.log('Fetched data:', results);
    setTop_Rated_Movies(results)

};
const fetchUpcoming_movies = async () => {
      
  const { data: {results}, } = await axios.get(`${url}/${upcoming}?api_key=${apikey}`);
  // console.log('Fetched data:', results)
  setUpcoming_movies(results)

};
const fetchPopular = async () => {
      
  const { data: {results}, } = await axios.get(`${url}/${popular}?api_key=${apikey}`);
  // console.log('Fetched data:', results);
  setPopularMovies(results)

};   
const fetchGenre = async () => {
      // https://api.themoviedb.org/3/genre/movie/list?api_key=b872368071b70996a2bffa4194e4e0f0
  const { data : {genres} } = await axios.get(`${genreurl}?api_key=${apikey}`);
  console.log('Fetched genres:', genres);
  setGenre(genres)

};   
    fetchGenre();
    fetchUpcoming_movies();
    fetchTop_rated();
    fetchPopular();
    fetchNow_Playing();
  }, []);


  return (
    <div>
     <div className="banner" style={{
                    backgroundImage: NowPlaying[0]
                        ? `url(${`${ImgUrl}/${NowPlaying[0].backdrop_path}`})`
                        : "rgb(16, 16, 16)",
                }}>
                {NowPlaying[0] &&(<h1>{NowPlaying[0].original_title}</h1>)}
                {NowPlaying[0] &&(<p>{NowPlaying[0].overview}</p>)}

                <div>
                <button><BiPlay /> Play  </button>
                <button>My List <AiOutlinePlus /> </button>
                </div>
        
     </div>
     <Row Title={"Now Playing"} arr = {NowPlaying}/>
     <Row Title={"Popular on Netflix"} arr = {PopularMovies}/>
     <Row Title={"Top Rated"} arr = {Top_Rated_Movies}/>
     <Row Title={"Upcoming"} arr = {Upcoming_movies}/>

     <div className="genrebox">
     {Genre.map((item) => (
                    <Link key={item.id} to={`/genre/${item.id}`}>
                        {item.name}
                    </Link>
                ))}
     </div>
     
     
    </div>
  )
}

export default Home
