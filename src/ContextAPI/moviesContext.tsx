import axios from 'axios'
import React, { Children, useEffect, useState } from 'react'
import { createContext } from 'react'

export const MoviesContext = createContext()
export default function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState()
  useEffect(() => {
    fetchMovies()
  }, [])
  const fetchMovies = async () => {
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=03e185082f315843666a90034a86b9ff', {
    })
      .then(function (response) {
        // console.log(response.data.results[1].overview);
        setMovies(response.data.results)
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  return (
    <MoviesContext.Provider value={{
      movies, setMovies

    }}>
      {children}
    </MoviesContext.Provider>
  )
}

