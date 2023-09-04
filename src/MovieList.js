import React from 'react'
// import movie from './movie'

function MovieList({movies}) {
  return (
   
    <>
    {movies.map((movie)=>(
        <movie key={movie._id} movie={movie}/>
    ))}
    
    
    </>
  )
}

export default MovieList