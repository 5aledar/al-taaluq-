import React from 'react';
import { useTranslation } from "react-i18next";


const Features = () => {
const { t, i18n } = useTranslation();

  const features = [
    {
      imgSrc: "/icon-1.png",
      title: t("FeaturesSec.f1Title"),
      description: t("FeaturesSec.f1Description"),
    },
    {
      imgSrc: "/icon-2.png",
      title: t("FeaturesSec.f2Title"),
      description: t("FeaturesSec.f2Description"),
    },
    {
      imgSrc: "/icon-3.png",
      title: t("FeaturesSec.f3Title"),
      description: t("FeaturesSec.f3Description"),
    },
    {
      imgSrc: "/icon-4.png",
      title: t("FeaturesSec.f4Title"),
      description: t("FeaturesSec.f4Description"),
    }
  ];

  return (
    <div className="container mx-auto py-10 px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 py-10 animate__animated animate__fadeInUp text-center">
    
      
       <span className="text-orange-500">{t("FeaturesSec.SEC-Title.span")}{" "}</span> {t("FeaturesSec.SEC-Title.p1")}{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => (
          <div
            className="bg-white p-6  rounded-lg  hover:shadow-sm transition-shadow duration-300"
            key={index}
          >
            <div className="mb-4 flex justify-center text-orange-500">
              <img
                className="w-20 h-20 "
                src={feature.imgSrc}
                alt={feature.title}
              />
            </div>
            <h5 className="text-xl font-semibold mb-2 text-orange-500">{feature.title}</h5>
            <p className="text-black">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
