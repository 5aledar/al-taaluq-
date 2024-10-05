import React from "react";
import { useTranslation } from "react-i18next";

export const OurActivities = () => {
  const { t, i18n } = useTranslation();
  const activities = [
    {
      title: t("OurActivites.A1"),
      description:t("OurActivites.D1") ,
    },
    {
      title: t("OurActivites.A2"),
      description: t("OurActivites.D2"),
    },
    {
      title: t("OurActivites.A3"),
      description: t("OurActivites.D3"),
    },

  ];

  return (
    <>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 py-10 animate__animated animate__fadeInUp text-center">
        <span className="text-orange-500">Our</span> Activities
      </h2>
      <div className="text-white w-full flex flex-col gap-4 x  text-center justify-center items-center flex-wrap my-20 animate__animated animate__fadeInUp px-8 ">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="collapse collapse-plus     bg-base-200 w-full sm:w-2/3  py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <input
              type="checkbox"
              name={`accordion-${index}`}
              id={`accordion-${index}`}
              className="hidden"
            />
            <label
              htmlFor={`accordion-${index}`}
              className={`collapse-title  cursor-pointer text-xl font-medium ${
                index % 2 == 0 ? "text-orange-500" : ""
              } `}
            >
              {activity.title}
            </label>
            <div className="collapse-content bg-gray-800 p-4 rounded-b-lg ">
              <p className="transition-opacity ease-in-out  duration-500">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button></button>
    </>
  );
};
