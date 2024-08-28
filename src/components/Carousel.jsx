import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; // Ensure you have heroicons installed
import { Typography, Button } from '@material-tailwind/react';
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "KGF 3",
      image: "https://imgs.search.brave.com/GkInA9_UPHQyq2HK52sEFifE1W8P5dZVFsbgbkPJyeI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rYXJu/YXRha2FzdGF0ZW9w/ZW51bml2ZXJzaXR5/LmluL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzA1L0tHRi0z/LmpwZw",
      caption: "What happened in those 4 years?.",
      credit: "Photo: Tim Marshall"
    },
    {
      title: "Pushpa 2",
      image: "https://imgs.search.brave.com/cDvWjHQ41hHp_U2iwhGr016f3R8v8WtI_exNF2VLsps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rYXJu/YXRha2FzdGF0ZW9w/ZW51bml2ZXJzaXR5/LmluL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAxL1B1c2hw/YS0yLW9mZmljaWFs/LXBvc3Rlci5qcGc",
      caption: "what happend to bhAAi?",
      credit: "Photo: Christian Joudrey"
    },
    {
      title: "Zoovara",
      image: "https://imgs.search.brave.com/GA5YNK0FaYzRtSNeit3BNIrJvIvc1e7DmhH-zHS2A28/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVsdWd1MzYwLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMS9EZXZhcmEu/anBn",
      caption: "Zoovara break even in 2024",
      credit: "Photo: Steve Carter"
    },
    {
      title: "Salaar 2",
      image: "https://imgs.search.brave.com/0u_fZPp7gXVacWFcxT8fNwLYl_blRzELR98tcImFVkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yLzVV/ZGZnZGpBMkpaTVJE/RnZzbkpfWGctLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VEV5TkRJN2FEMDJP/VGstL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VuL2NvbWlu/Z3Nvb25fbmV0XzQ3/Ny81Yzc3ZDdkZWJk/MTAxYWJiMGU4Mzdl/MDgzOWQzY2M3Mw",
      caption: "what started the war between the two?",
      credit: "Photo: Rosan Harmens"
    },
    {
      title: "GameChanger",
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

  const gotoMovie = (movie) => {
    localStorage.setItem('movie', movie );
    navigate('/theatre');
  };

  return (
    <section className="relative bg-gray-900 py-6 mt-2 w-full  max-w-full max-h-full border rounded-lg overflow-hidden border-amber-100 shadow-2xl shadow-amber-200">

      <Typography variant="h3" color="white" className="text-center">
        Recently released movies
      </Typography>

      <div className="container mx-auto px-5">
        <div className="relative">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full  object-cover rounded-lg gap-2"
                />
                <div className="absolute bottom-0 left-0 p-5 bg-black bg-opacity-50 text-white w-full display: table-column object-postion: right-full ">
                  <div>
                    <p className="font-bold">{slide.caption}</p>
                    {/* <p className="mt-2">{slide.credit}</p> */}
                  </div>
                  <Button variant='filled' className='max-w-max object-right' color='yellow' onClick={()=>gotoMovie(slide.title)}>Know more</Button>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full lg:hidden"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-900 lg:hidden" />
          </button>
          <button
            onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length)}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full lg:hidden"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-900 lg:hidden" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="hidden lg:flex lg:flex-col lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-32 lg:justify-center lg:me-10">
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
      </div>
    </section>
  );
};

export default Carousel;
