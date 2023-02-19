import axios from 'axios'
import React, { Children, useEffect, useState } from 'react'
import { createContext } from 'react'

export const MoviesContext = createContext()
export default function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState()
  const [info, setInfo] = useState()
  const [showLoader, setshowLoader] = useState(false)
  const RandomNo=Math.floor(Math.random()*20)

  //

  // const bannerData = () => {
  //   const bannerImg = `http://image.tmdb.org/t/p/w185/${movies[5].poster_path}`
  //   const bannerName = movies[5].title
  //   const bannerInfo = movies[5]
  //   return(
  //     bannerImg
  //   )
  
  // }

  useEffect(() => {
    setshowLoader(true)
    fetchMovies()
  }, [])
  const fetchMovies = async () => {
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=03e185082f315843666a90034a86b9ff', {
    })
      .then(function (response) {
        // console.log(response.data.results[2].overview);
        setMovies(response.data.results)
        setshowLoader(false)
        // bannerData()

      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    // setshowLoader(false)
  }
      // console.log("Loading", bannerImg)
  return (
    <MoviesContext.Provider value={{
      movies, setMovies,
      showLoader, setshowLoader,
      info, setInfo,
      RandomNo


    }}>
      {children}
    </MoviesContext.Provider>
  )
}

