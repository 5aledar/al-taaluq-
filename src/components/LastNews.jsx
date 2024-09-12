import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const LastNews = () => {
  const { t, i18n } = useTranslation();

  const features = [
    {
      imgSrc: "/about.jpg",
      title: t("LastNewsSec.NewTitle1"),
      description: t("LastNewsSec.Newdescription1"),
    },
    {
      imgSrc: "/carousel-1.jpg",
      title: t("LastNewsSec.NewTitle2"),
      description: t("LastNewsSec.Newdescription2"),
    },
    {
      imgSrc: "/team-3.jpg",
      title: t("LastNewsSec.NewTitle3"),
      description: t("LastNewsSec.Newdescription3"),
    },
  ];

  // Apply custom Tailwind classes to Swiper buttons
  useEffect(() => {
    const nextButton = document.querySelector(".swiper-button-next");
    const prevButton = document.querySelector(".swiper-button-prev");

    if (nextButton && prevButton) {
      // Add orange color to the arrows without changing the background
      nextButton.style.color = "#FF7F00"; // Orange color
      prevButton.style.color = "#FF7F00"; // Orange color
    }
  }, []);

  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-4xl font-bold text-white py-7">
        {t("LastNewsSec.SEC-Title")}
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
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-full rounded-lg h-full object-contain"
                />
              </div>

              <div className="order-2 md:order-1">
                <div className="p-6 rounded-lg hover:shadow-sm transition-shadow duration-300">
                  <h5 className="text-xl font-semibold mb-2 text-orange-500">
                    {feature.title} 
                  </h5>
                  <p className="text-white">{feature.description}</p>
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
