import React from "react";

export const OurActivities = () => {
  const activities = [
    {
      title: "Activity 1",
      description: "Description for activity 1.",
    },
    {
      title: "Activity 2",
      description: "Description for activity 2.",
    },
    {
      title: "Activity 3",
      description: "Description for activity 3.",
    },
    {
      title: "Activity 4",
      description: "Description for activity 4.",
    },
    {
      title: "Activity 5",
      description: "Description for activity 5.",
    },
    {
      title: "Activity 6",
      description: "Description for activity 5.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 py-10 animate__animated animate__fadeInUp text-center">
        <span className="text-orange-500">Our</span> Activities
      </h2>
      <div className="text-white w-full flex flex-col gap-4 sm:flex-row justify-center flex-wrap my-20 animate__animated animate__fadeInUp ">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="collapse collapse-plus     bg-base-200 w-full sm:w-96 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
