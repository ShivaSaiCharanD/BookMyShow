import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; // Ensure you have heroicons installed
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from 'axios';

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  // const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const response = await axios.get('http://localhost:4000/admin/getmovies', {
        headers: {
          'Authorization': `${localStorage.getItem('token')}`,
        },
      });
      setMovies(response.data.movies);
      const slidesData = response.data.movies.map(movie => ({
        image: movie.image,
        caption: movie.title,
        credit: movie.description,
      }));
      setSlides(slidesData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen bg-[#1b1b1b] py-6 px-4">
      <Typography variant="h3" color="white" className="text-center mb-4">
        Recently Released Movies
      </Typography>

      <section className="relative flex max-w-6xl bg-[#292929] rounded-lg shadow-2xl overflow-hidden">
        {/* Main Carousel Container */}
        <div className="relative flex flex-grow">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="flex-shrink-0 w-full relative">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg mx-auto"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
                  <p className="font-bold text-lg text-center">{slide.caption}</p>
                  <p className="mt-2 text-sm text-center">{slide.credit}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
          </button>
          <button
            onClick={() => setActiveIndex(prevIndex => (prevIndex + 1) % slides.length)}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="hidden lg:flex lg:flex-col lg:justify-center lg:w-56 lg:ml-4 lg:relative lg:top-0 lg:right-0 lg:bottom-0 lg:items-center">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mb-2 overflow-hidden rounded border-2 ${activeIndex === index ? 'border-blue-500' : 'border-transparent'}`}
            >
              <img
                src={slide.image}
                alt={`Thumbnail ${index + 1}`}
                className="h-[150px] object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Movie Cards */}
      <div className='flex gap-2 flex-wrap mt-6'>
        {movies.map((movie) => (
          <Card className="w-80" key={movie.id}>
            <CardHeader color="blue-gray" className="relative w-48 mt-1">
              <img
                src={movie.image}
                alt="card-image"
                className="object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {movie.title}
              </Typography>
              <Typography>
                {movie.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button color='amber' variant='gradient'>Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
