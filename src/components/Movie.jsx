import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

export default function Movie() {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const isTheatre = location.pathname.includes('theatre');
  async function movieData() {
    const response = await axios.get(`http://localhost:4000/admin/getmoviebyid/${localStorage.getItem('movie')}`,
      {
        headers: {
          'Authorization': `${localStorage.getItem('token')}`,
        },
      });
    setMovie(response.data.movie);
  }

  useEffect(() => {
    movieData();
  }, []);

  return (
    <>
      {!isTheatre && (
        <div className="mx-auto bg-[#1b1b1b] min-h-screen p-4">
          <section className="flex flex-col lg:flex-row lg:w-[1280px] w-full mt-10 space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="lg:max-w-[480px] mx-auto lg:mx-0">
              <img
                src={movie.image}
                alt="movie"
                className="rounded-lg w-full lg:w-auto"
              />
            </div>
            <div className="mx-auto lg:mx-0 p-4">
              <iframe
                width="100%"
                height="315px"
                src={movie.trailer}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] rounded-lg"
              ></iframe>
              <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
              <p className="mt-2">{movie.description}</p>
              <p className="mt-2">Director: {movie.director}</p>
              <p className="mt-2">Language: {movie.language}</p>
              <p className="mt-2">Genre: {movie.genre}</p>
              <p className="mt-2">Duration: {movie.duration} min</p>
              <Link to="theatre">
                <Button
                  variant="gradient"
                  color="amber"
                  className="mt-1"
                  size="sm"
                >
                  Book Tickets
                </Button>
              </Link>
            </div>
          </section>
        </div>
      )}
      <Outlet />
    </>
  );
}