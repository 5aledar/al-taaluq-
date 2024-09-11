
export const OurServices = () => {
  const features = [
    {
      imgSrc: "/icon-1.png",
      title: "Award Winning",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam",
    },
    {
      imgSrc: "/icon-2.png",
      title: "Professional Staff",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam",
    },
    {
      imgSrc: "/icon-3.png",
      title: "Fair Prices",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam",
    },
    {
      imgSrc: "/icon-4.png",
      title: "24/7 Support",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam",
    },
    {
      imgSrc: "/icon-5.png",
      title: "24/7 Support",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam",
    },
    {
      imgSrc: "/icon-6.png",
      title: "24/7 Support",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam",
    },
    {
      imgSrc: "/icon-7.png",
      title: "24/7 Support",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam",
    },
    {
      imgSrc: "/icon-8.png",
      title: "24/7 Support",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam",
    },
  ];

  return (
    <div className="container mx-auto py-10 ">
      <div
        className="text-center mx-auto max-w-lg animate__animated animate__fadeInUp mb-14 "
        style={{
          animationDelay: "0.1s",
        }}
      >
        <p className="text-lg font-medium text-blue-600">Our Services</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
          Digital Marketing Services that We Offer
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center animate__animated animate__fadeInUp">
        {features.map((feature, index) => (
          <div
            className=" relative bg-white p-6 border   rounded-lg  transition ease-in-out   hover:-translate-y-5  hover:bg-stone-100 duration-300 group"
            key={index}
          >
            <div className="mb-4 flex justify-center ">
              <img
                className="w-20 h-20  "
                src={feature.imgSrc}
                alt={feature.title}
              />
            </div>
            <h5 className="text-xl font-semibold mb-2">{feature.title}</h5>
            <p className="text-slate-600 text-lg">{feature.description}</p>

            <div className=" cursor-pointer absolute -bottom-6 right-0   transition-all ease-in-out duration-500 rounded-xl p-0 m-0   bg-orange-300 text-white w-full opacity-0 group-hover:opacity-100  hover:bg-orange-500 ">
              <p className="font-bold items-center m-auto leading-10   ">
                Read More<span className="ml-1 text-lg font-bold">&raquo;</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
