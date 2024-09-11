import "animate.css";
import { useState } from "react";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handelClick = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <div
        className="relative w-full h-screen bg-cover bg-center fadIn  transition-all  delay-150 "
        style={{
          backgroundImage: showModal
            ? "url('/carousel-2.jpg')"
            : "url('/carousel-1.jpg')",
            backgroundSize: "cover",
            
        }}
      >
        <div className={`absolute inset-0   bg-black bg-opacity-50 flex items-center`}>
          <div className={`container mx-auto`}>
            <div className={`flex justify-end  absolute ${showModal ? " left-4 top-48 sm:-left-64 " : "top-48 right-4 sm:top-48 sm:right-28"}`}>
              <div className={` text-center ${showModal ?"text-left":"text-right"} lg:w-7/12`}>
                <p className={`text-lg sm:text-2xl text-white   ${showModal ? "animate__animated animate__slideInRight" : "animate__animated animate__slideInLeft"} `}>
                  Welcome to <strong className="text-orange-500 ">GrowMark</strong>
                </p>
                <h1 className={`text-2xl sm:text-6xl font-extrabold text-white mb-5 ${showModal ? "animate__animated animate__slideInRight" : "animate__animated animate__slideInLeft"} `}>
                  {showModal ? (
                    <strong className="transition-all">Ready to Grow Your Business</strong>
                  ) : (
                    <strong className="transition-all ">Unlock Your Business Growth</strong>
                  )}
                </h1>
                <a
                  href="#"
                  className={`inline-block bg-orange-500 text-white rounded-full py-3 px-5 animate__animated animate__slideInLeft hover:bg-orange-600 transition duration-400 ${showModal ? "animate__animated animate__slideInRight duration-1000" : "animate__animated animate__slideInLeft"}`}
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handelClick}
        className="absolute   top-1/2 left-4 transform -translate-y-1/2 bg-orange-500 bg-opacity-75 hover:bg-orange-600 text-gray-800 rounded-full p-3 shadow-lg transition ease-in-out delay-150  hover:scale-110 duration-300 "
        type="button"
      >
        <svg
          className="w-6 h-6 "
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>
      <button
        onClick={handelClick}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-orange-500 bg-opacity-75 hover:bg-orange-600 text-gray-800 rounded-full p-3 shadow-lg  transition ease-in-out delay-150  hover:scale-110 duration-300"
        type="button"
      >
        <svg
          className="w-6 h-6 rotate-180"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>
    </div>
  );
};
