import React, { useEffect } from 'react'
import axios from 'axios';
export default function Movie() {
    async function movieData() {
        const response = await axios.get(`http://localhost:4000/admin/getmoviebyid/${localStorage.getItem('movie')}`, 
        {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
            },
        });
        const movie = response.data.movie;
        console.log(movie);
        // console.log(response);
    };

    useEffect(() => {   
        movieData();
    }
    , []);
  return (
    <div className='flex flex-col justify-center text-center'>
       
    </div>
  )
}
