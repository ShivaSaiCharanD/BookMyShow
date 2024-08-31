import { useEffect } from 'react'
import axios from 'axios';
import { Outlet, useLocation } from 'react-router-dom';
export default function Movie() {
  const location = useLocation();
  const isTheatrePage = location.pathname.includes('/dashboard/movie/theatre');
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
    <div className="max-w-2xl">
      {!isTheatrePage && (
      <div className='flex flex-col justify-center text-center'>
        <p>Hello</p>
      </div>
      )}
      <Outlet /> {/* Renders nested routes */}
    </div>
  )
}
