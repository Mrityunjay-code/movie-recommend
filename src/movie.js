import React from 'react'


function movie({movie}) {
  return (
   <>
   <h2>{movie.title}</h2>
   <p>{movie.overview}</p>
   
   </>
  )
}

export default movie