import { useState, useEffect } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const getMovies = async () => {
    try {
      const response = await axios.get('http://localhost:4000/admin/getmovies'
        ,
        {
          headers: {
            ' Authorization': `${localStorage.getItem('token')}`,
          },
        }
      );
      setMovies(response.data.movies);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  const slides = [
    {
      image: "https://imgs.search.brave.com/GkInA9_UPHQyq2HK52sEFifE1W8P5dZVFsbgbkPJyeI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rYXJu/YXRha2FzdGF0ZW9w/ZW51bml2ZXJzaXR5/LmluL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzA1L0tHRi0z/LmpwZw",
      caption: "What happened in those 4 years?.",
      credit: "Photo: Tim Marshall"
    },
    {
      image: "https://imgs.search.brave.com/cDvWjHQ41hHp_U2iwhGr016f3R8v8WtI_exNF2VLsps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rYXJu/YXRha2FzdGF0ZW9w/ZW51bml2ZXJzaXR5/LmluL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAxL1B1c2hw/YS0yLW9mZmljaWFs/LXBvc3Rlci5qcGc",
      caption: "what happend to bhAAi?",
      credit: "Photo: Christian Joudrey"
    },
    {
      image: "https://imgs.search.brave.com/GA5YNK0FaYzRtSNeit3BNIrJvIvc1e7DmhH-zHS2A28/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVsdWd1MzYwLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMS9EZXZhcmEu/anBn",
      caption: "Zoovara break even in 2024",
      credit: "Photo: Steve Carter"
    },
    {
      image: "https://imgs.search.brave.com/0u_fZPp7gXVacWFcxT8fNwLYl_blRzELR98tcImFVkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yLzVV/ZGZnZGpBMkpaTVJE/RnZzbkpfWGctLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VEV5TkRJN2FEMDJP/VGstL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VuL2NvbWlu/Z3Nvb25fbmV0XzQ3/Ny81Yzc3ZDdkZWJk/MTAxYWJiMGU4Mzdl/MDgzOWQzY2M3Mw",
      caption: "what started the war between the two?",
      credit: "Photo: Rosan Harmens"
    },
    {
      image: "https://imgs.search.brave.com/dPOi8dgq75_hJmqe7F6bHQPPCL6Prjhe04mcvM1hYYs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL0Va/WGpMUlc4bUZ3YVdU/Ukk5amRFQUEtLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VEV5TkRJN2FEMDJP/VGstL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VuL2NvbWlu/Z3Nvb25fbmV0XzQ3/Ny81NmVhMGM5ODVm/ZjBkNGJmZjlmN2Y5/OTAyOWRiNTU3OA",
      caption: "Updates coming soon",
      credit: "Photo: Annie Spratt"
    }
  ];

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

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
                <p className="mt-2 text-sm">{slide.credit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
        </button>
        <button
          onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-900" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-56  lg:ml-4 lg:relative lg:top-0 lg:right-0 lg:bottom-0">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mb-2 overflow-hidden rounded border-2 ${activeIndex === index ? 'border-blue-500' : 'border-transparent'}`}
          >
            <img
              src={slide.image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </button>
        ))}
      </div>
    </section>
      <div className='flex gap-2 flex-wrap'>
          {
            movies.map((movie) => (
              <Card className="mt-6 w-80" key={movie.id}>
                <CardHeader color="blue-gray" className="relative w-9/12 mt-1">
                  <img
                    src={movie.image}
                    alt="card-image"
                    className="object-cover"
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
            ))
         }
        </div>
  </div>
  );
};

export default Carousel;
