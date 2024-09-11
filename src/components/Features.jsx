import React from 'react';

const Features = () => {
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
    }
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => (
          <div
            className="bg-white p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            key={index}
          >
            <div className="mb-4 flex justify-center">
              <img
                className="w-20 h-20 "
                src={feature.imgSrc}
                alt={feature.title}
              />
            </div>
            <h5 className="text-xl font-semibold mb-2">{feature.title}</h5>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
