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
      // Add orange color to the arrows without changing the background
      nextButton.style.color = '#FF7F00'; // Orange color
      prevButton.style.color = '#FF7F00'; // Orange color
    }
  }, []);

  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-4xl font-bold text-white py-7">
        Alta'aloq Last News:
      </h2>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-1 md:order-2 h-52">
                <img src={feature.imgSrc} alt={feature.title} className="w-full rounded-lg h-full object-contain" />
              </div>

              <div className="order-2 md:order-1">
                <div className="p-6 rounded-lg hover:shadow-sm transition-shadow duration-300">
                  <h5 className="text-xl font-semibold mb-2 text-orange-500">
                    {feature.title} :
                  </h5>
                  <p className="text-black">{feature.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LastNews;
