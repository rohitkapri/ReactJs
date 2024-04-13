import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [Articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setArticles(data.articles))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
            console.log(Articles);
    
    }, [category]);
  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
       {Articles.map((news,index)=>{
        return <NewsItem key={index} title = {news.title} description={news.description} src={news.urlToImage} url={news.url} />

       })}
    </div>
  )
}

export default NewsBoard
