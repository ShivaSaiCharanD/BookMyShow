import { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
      image: "https://picsum.photos/id/1045/800/450https://imgs.search.brave.com/LgnXgmpfV_u4JAa_pjujnmKJ4MLLDMQlXh5te2pkn9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZHVzdGFudGlt/ZXMuY29tL2h0LWlt/Zy9pbWcvMjAyNC8w/Ni8zMC81NTB4MzA5/L0thbGtpXzI4OThf/QURfbmV3X3RyYWls/ZXJfMTcxODk4MDQy/MTgzMV8xNzE5NzM4/Mjc3NTAwLmpwZw",
      caption: "Where is Sumathi?",
      credit: "Photo: Aleksandra Boguslawska"
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

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-5">
        <div className="relative mb-6 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <figure className="flex m-0">
                  <div className="relative w-full pb-[66.6667%]">
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="self-end p-5 flex-shrink-0 w-1/4 min-w-[150px] text-black font-bold size-30">
                    {slide.caption}
                    <button className="bg-deep-orange-500">Learn More</button>
                    <span className="block mt-4 text-gray-500">{slide.credit}</span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        <ul className="flex p-0 m-0 justify-center">
          {slides.map((slide, index) => (
            <li key={index} className="mx-2.5">
              <button
                onClick={() => goToSlide(index)}
                className={`block relative w-20 h-20 cursor-pointer overflow-hidden border-2 ${activeIndex === index ? 'border-blue-500' : 'border-transparent'}`}
              >
                <img
                  src={slide.image}
                  alt={`Thumbnail ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Carousel;
