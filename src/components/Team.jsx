import React from "react";


import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      imgSrc: "/team-1.jpg",
      name: "Alex Robin",
      role: "Founder & CEO",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      imgSrc: "/team-2.jpg",
      name: "Adam Crew",
      role: "Co Founder",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      imgSrc: "/team-3.jpg",
      name: "Boris Johnson",
      role: "Executive Manager",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      imgSrc: "/team-4.jpg",
      name: "Robert Jordan",
      role: "Digital Marketer",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className="container mx-auto py-10 ">
      <div className="text-center mx-auto mb-12 max-w-xl">
        <h1 className="text-4xl font-bold py-3 text-white">Our Team</h1>
        <h1 className="text-3xl font-medium text-orange-600">
          Our Expert People Ready to Help You
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-item relative bg-black rounded-lg overflow-hidden shadow-lg group "
          >
            <img
              className=" w-full py-2 h-64 object-cover mb-4 "
              src={member.imgSrc}
              alt={member.name}
            />
            <div className="p-4 text-center">
              <h5 className="text-3xl font-semibold">{member.name}</h5>
              <span className="text-orange-600 text-xl block mb-4">{member.role}</span>

              {/* Social Icons */}
              <ul className="absolute inset-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4 bg-black bg-opacity-80 p-4">
                <li>
                  <a
                    href={member.socialLinks.facebook}
                    className="  hover:text-orange-600"
                  >
                    <i>{<FaFacebookF />}</i>
                  </a>
                </li>
                <li>
                  <a
                    href={member.socialLinks.twitter}
                    className="  hover:text-orange-600 "
                  >
                    <i>{<FaTwitter />}</i>
                  </a>
                </li>
                <li>
                  <a
                    href={member.socialLinks.instagram}
                    className="  hover:text-orange-600 "
                  >
                    <i> {<FaInstagram />}</i>
                  </a>
                </li>
                <li>
                  <a
                    href={member.socialLinks.linkedin}
                    className="  hover:text-orange-600 "
                  >
                    <i>{<FaLinkedin />}</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
