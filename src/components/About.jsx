import { useTranslation } from "react-i18next";

import { FaCirclePlay } from "react-icons/fa6";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="py-5 flex flex-col md:flex-row  animate__animated animate__fadeInUp"
      style={{
        background: `url(/about.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="md:w-full md:h-[70vh] flex flex-col md:flex-row ">
        <div className="flex justify-center w-full md:w-1/2">
          <div className="h-full flex items-center justify-center min-h-[300px]">
            <a
              target="_blank"
              href="https://youtu.be/P-FAqaeHSfc?feature=shared"
              className="animate-bounce"
            >
              <FaCirclePlay size={"100px"} style={{ color: "#f97316" }} />
            </a>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end items-center p-5"
          data-wow-delay="0.5s"
        >
          <div className="bg-white p-5 rounded-xl w-full md:w-3/4 text-center md:text-left">
            <p className="text-lg md:text-2xl text-orange-500 font-bold mb-6 text-center">
              {t("AboutUsSec.SEC-Title")}
            </p>
            <h1 className="text-xl md:text-3xl font-bold mb-4 text-center">
              {t("AboutUsSec.h2")}
            </h1>
            <p className="mb-4 text-center">{t("AboutUsSec.span1")}</p>
            <div className="flex flex-col items-center justify-center md:flex-row gap-5 pt-2 mb-10">
              <div className="flex-1 text-center  flex flex-col items-center justify-center md:text-left">
                <img
                  className="mx-auto md:mx-0 img-fluid mb-4"
                  src="/icon-5.png"
                  alt="Managed Services"
                />
                <h5 className="text-xl font-bold mb-3 text-center">
                  {t("AboutUsSec.AboutTitle1")}
                </h5>
                <span className="text-center">
                  {t("AboutUsSec.AboutDesc1")}
                </span>
              </div>
              <div className="flex-1 text-center flex flex-col items-center justify-center md:text-left">
                <img
                  className="mx-auto md:mx-0 img-fluid mb-4"
                  src="/icon-2.png"
                  alt="Dedicated Experts"
                />
                <h5 className="text-xl font-bold mb-3 text-center">
                  {t("AboutUsSec.AboutTitle2")}
                </h5>
                <span className="text-center">
                  {" "}
                  {t("AboutUsSec.AboutDesc2")}
                </span>
              </div>
            </div>
            <a
              href="#"
              target="_blank"
              className="inline-block bg-orange-500 text-white rounded-full py-3 px-5 animate__animated animate__slideInLeft hover:bg-orange-600 transition duration-400"
            >
              {t("AboutUsSec.AboutBtnw")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
