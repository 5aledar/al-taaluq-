import React from 'react';

const LastNews = () => {
  const features = [
    {
      imgSrc: "/icon-1.png",
      title: "Cooperation Agreement ",
      description: "Signing a cooperation agreement with Diamond Future Academy",
    },
    {
      imgSrc: "/icon-2.png",
      title: " Memorandum of Understanding",
      description: "Signing a memorandum of understanding with the Faculty of Economics at Damascus University",
    },
    {
      imgSrc: "/icon-3.png",
      title: " Cooperation note",
      description: "Signing a memorandum of cooperation with Shahd Al -Sham Company",
    }
  ];

  return (
    <div className=" container mx-auto text-center py-10  ">
    <h2 className="text-4xl font-bold underline text-white  py-7 ">
      Alta'aloq LastNews : 
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
