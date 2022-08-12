
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import React, {useState} from 'react'



function Home() {

  const [movies, setMovie] = useState([])
  const [input, setInput] = useState('')
  const [count, setCount] = useState(1)

  

  return(

    <div className='bg-gray-800 w-fit h-fit py-4 px-4 my-4 mx-auto rounded-2xl'>
      <div>
          <h1 className='w-fit py-2 px-4 my-2 mx-2 rounded-md bg-slate-500 text-white'>What movie are you looking for?</h1>
              <input
              type='text' 
              placeholder='Search' 
              name='text' 
              className='movie-input bg-slate-200 py-2 px-4 mx-2 mb-4 rounded-md'
              ></input>
              
              <button className='movie-button py-2 px-4 bg-slate-400 rounded-md hover:bg-slate-200 hover:scale-110' onClick={()=>0}>Search button</button>
            

          <div>
            <h1 className='bg-gray-400 py-2 px-4 my-1 mx-2 w-fit rounded-md'>movie.Title</h1>
            <h1 className='bg-gray-400 py-2 px-4 my-1 mx-2 w-fit rounded-md'>movie.Year</h1>
            {/* <img src= {movie.Poster} className='bg-gray-400 py-2 px-4 my-1 mx-2 w-fit rounded-md'></img> */}
            <h1 className='bg-gray-400 py-2 px-4 my-1 mx-2 w-fit rounded-md'>movie.Page</h1>
          </div>
          
        </div>
    </div>
  )
}


export default Home
