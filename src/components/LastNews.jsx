import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const LastNews = () => {
  const features = [
    {
      imgSrc: "/about.jpg",
      title: "Cooperation Agreement ",
      description: "Signing a cooperation agreement with Diamond Future Academy",
    },
    {
      imgSrc: "/carousel-1.jpg",
      title: "Memorandum of Understanding",
      description: "Signing a memorandum of understanding with the Faculty of Economics at Damascus University",
    },
    {
      imgSrc: "/team-3.jpg",
      title: "Cooperation note",
      description: "Signing a memorandum of cooperation with Shahd Al -Sham Company",
    },
  ];

  // Apply custom Tailwind classes to Swiper buttons
  useEffect(() => {
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');

    if (nextButton && prevButton) {
      nextButton.style.color = 'orange';
      prevButton.style.color = 'orange';
    }
  }, []);

  return (
    <div className="container mx-auto text-center py-10 px-8 ">
    <h2 className="text-4xl font-bold  text-white text-center py-7 ">
      Alta'aloq LastNews
    </h2>
    
    <div className="grid md:grid-cols-2 gap-6">
    <div className="order-2 md:order-1">
      {features.map((feature, index) => (
        <div
          className="flex-wrap mx-auto p-6 rounded-lg hover:shadow-sm transition-shadow duration-300"
          key={index}
        >
          <h5 className="text-xl font-semibold mb-2 text-orange-500">
            {feature.title} :
          </h5>
          <p className="text-black">{feature.description}</p>
        </div>
      ))}
    </div>
    <div className=" m-auto order-1 md:order-2">
      <img src="/about.jpg" alt="About Image" className="w-full rounded-lg" />
    </div>
  </div>
  
    </div>
  );
};

export default LastNews;
