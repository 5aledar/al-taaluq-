import "./About.css";
import { FaCirclePlay } from "react-icons/fa6";
const About = () => {
  return (
    <div className=" about my-5 flex ">
      <div className=" w-full">
        <div className="flex justify-between gap-10">
          <div className="col-lg-6 w-1/2 flex justify-center">
            <div className="lg:w-6/12">
              <div className="h-full flex items-center justify-center min-h-[300px]">
                <button
                className="animate-bounce"
                 
                ><a  href="https://youtu.be/P-FAqaeHSfc?feature=shared"><i><FaCirclePlay size={'100px'} style={{ color: "#f97316" }} /></i>
</a>
                  
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pt-lg-5 wow fadeIn mt-20 w-1/2 heghit mr-10" data-wow-delay="0.5s">
            <div className="bg-white  rounded-top p-5 heghit mt-lg-5">
              <p className="fs-5 fw-medium text-primary my-6 text-xl text-orange-500">About Us</p>
              <h1 className="display-6 mb-4 text-3xl font-bold">
                The Best Marketing Agency to Improve Your Business
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <div className="flex row g-5 pt-2 my-10">
                <div className="col-sm-6 mr-6">
                  <img
                    className="img-fluid mb-4"
                    src="/public/icon-5.png"
                    alt=""
                  />
                  <h5 className="mb-3 text-xl font-bold ">Managed Services</h5>
                  <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                </div>
                <div className="col-sm-6 ">
                  <img
                    className="img-fluid mb-4"
                    src="/public/icon-2.png"
                    alt=""
                  />
                  <h5 className="mb-3 text-xl font-bold ">Dedicated Experts</h5>
                  <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                </div>
              </div>
              <a
                href="#"
                className={`inline-block bg-orange-500 text-white rounded-full py-3 px-5 animate__animated animate__slideInLeft hover:bg-orange-600 transition duration-400 `}
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
