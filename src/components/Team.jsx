import React from "react";


import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";


const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      imgSrc: "/team-1.jpg",
      name: t("team.member1.name"),
      role: t("team.member1.role"),
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      imgSrc: "/team-2.jpg",
      name: t("team.member2.name"),
      role: t("team.member2.role"),
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      imgSrc: "/team-3.jpg",
      name: t("team.member3.name"),
      role: t("team.member3.role"),
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      imgSrc: "/team-4.jpg",
      name: t("team.member4.name"),
      role: t("team.member4.role"),
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className="container mx-auto py-10 px-8 animate__animated animate__fadeInUp">
      <div className="text-center mx-auto mb-12 max-w-xl">
        <h1 className="text-4xl font-bold py-3 text-white">
          {t("team.header")}
        </h1>
        <h1 className="text-3xl font-medium text-orange-600">
          {t("team.subHeader")}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className=" relative bg-gray-900 rounded-xl  shadow-lg group "
          >
            <img
              className=" w-full  h-[350px] object-cover mb-4 "
              src={member.imgSrc}
              alt={member.name}
            />
            <div className="p-4 text-center">
              <h5 className="text-3xl mb-2 font-semibold">{member.name}</h5>
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
