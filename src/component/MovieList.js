import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import './MovieList.css'
import {API} from "../global"

export default function MovieList() {
    const [movie,setMovie] = useState([])
    const getMovies = () =>{
        fetch(`${API}/get`,{
            method:"GET",
            headers:{"backend-token":localStorage.getItem("store-token")}
        })
        .then((data) => data.json())
        .then((mvs)=>setMovie(mvs))
    }

    useEffect(()=>{
        getMovies()
    },[])

  console.log(movie,"ix");
  return (
    <div className='movie-list'>
        {
            movie.map((list,index)=>(
                <div key={index}>
                    <Movie movieTake={list} getMovies={getMovies}/>
                </div>
            ))
        }
    </div>
  )
}
