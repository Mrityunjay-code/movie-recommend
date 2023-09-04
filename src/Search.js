import './App.css';
import React, { useState } from 'react'
import axios from "axios"
function Search() {
  const [text, setText] = useState("")
  const [movie, setMovie] = useState([])
  const changeText = (event) => {
    setText(event.target.value);
  }
  const getMovie = (e) => {
    e.preventDefault();

    axios.get(`https://www.omdbapi.com/?s=${text}&apikey=43033444`)
      .then((response) => {
        console.log(response)
        setMovie(response.data.Search)
      })

  }
  return (
    <>
      <nav >
        <div >
          <h1>Movie App</h1>
          <form onSubmit={getMovie}>
            <input className='n1' type="search" placeholder="Search" aria-label="Search" value={text} onChange={changeText} />
            <button className='n2' type="submit">Search</button><br/><br/>
          </form>
        </div>
      </nav>

      <div className="container my-3">
        <div className="row">
          {
            movie.map((value) => {
              return (
                <div >
                  <div className="card" style={{ width: '18rem;' }}>
                    <img src={value.Poster}  />
                    <div>
                      <h3 >{value.Year}</h3>
                      <h4 >{value.Title}</h4>
                      
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Search;