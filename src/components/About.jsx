// // import "./About.css";
// import { FaCirclePlay } from "react-icons/fa6";
// const About = () => {
//   return (
//     <div className="py-5 flex md:flex-row flex-col" style={{ background: `url(/about.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }} >
//       <div className=" md:w-full md:h-[70vh] ">
//         <div className="flex justify-between gap-2">
//           <div className="col-lg-6 w-1/2 flex justify-center">
//               <div className="h-full flex items-center justify-center min-h-[300px]">
//                 <a
//                   target="_balnk"
//                   href="https://youtu.be/P-FAqaeHSfc?feature=shared"
//                   className="animate-bounce"
//                 >
//                   <FaCirclePlay
//                     size={"100px"}
//                     style={{ color: "#f97316" }}
//                   />
//                 </a>
//             </div>
//           </div>
//           <div
//             className="col-lg-6 pt-lg-5 wow fadeIn mt-20 w-1/2 heghit mr-10"
//             data-wow-delay="0.5s"
//           >
//             <div className="bg-white  rounded-top p-5 heghit mt-lg-5 rounded-xl">
//               <p className="fs-5 fw-medium  my-6 md:text-2xl text-lg text-orange-500 font-bold ">
//                 About Us
//               </p>
//               <h1 className="display-6 mb-4 md:text-3xl text-lg font-bold">
//                 The Best Marketing Agency to Improve Your Business
//               </h1>
//               <p className="mb-4">
//                 Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
//                 Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
//                 sed stet lorem sit clita duo justo
//               </p>
//               <div className="flex md:flex-row flex-col g-5 pt-2 my-10">
//                 <div className="col-sm-6 mr-6">
//                   <img
//                     className="img-fluid mb-4"
//                     src="/icon-5.png"
//                     alt=""
//                   />
//                   <h5 className="mb-3 text-xl font-bold ">Managed Services</h5>
//                   <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
//                 </div>
//                 <div className="col-sm-6 ">
//                   <img
//                     className="img-fluid mb-4"
//                     src="/icon-2.png"
//                     alt=""
//                   />
//                   <h5 className="mb-3 text-xl font-bold ">Dedicated Experts</h5>
//                   <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
//                 </div>
//               </div>
//               <a
//                 href="#"
//                 target="_balnk"
//                 className={`inline-block bg-orange-500 text-white rounded-full py-3 px-5 animate__animated animate__slideInLeft hover:bg-orange-600 transition duration-400 `}
//               >
//                 Explore More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
// import "./About.css";
// import "./About.css";
// import "./About.css";
import { FaCirclePlay } from "react-icons/fa6";

const About = () => {
  return (
    <div
      className="py-5 flex flex-col md:flex-row"
      style={{
        background: `url(/about.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="md:w-full md:h-[70vh] flex flex-col md:flex-row">
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
            <p className="text-lg md:text-2xl text-orange-500 font-bold mb-6">
              About Us
            </p>
            <h1 className="text-xl md:text-3xl font-bold mb-4">
              The Best Marketing Agency to Improve Your Business
            </h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita duo justo
            </p>
            <div className="flex flex-col md:flex-row gap-5 pt-2 mb-10">
              <div className="flex-1 text-center md:text-left">
                <img className="mx-auto md:mx-0 img-fluid mb-4" src="/icon-5.png" alt="Managed Services" />
                <h5 className="text-xl font-bold mb-3">Managed Services</h5>
                <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <img className="mx-auto md:mx-0 img-fluid mb-4" src="/icon-2.png" alt="Dedicated Experts" />
                <h5 className="text-xl font-bold mb-3">Dedicated Experts</h5>
                <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
              </div>
            </div>
            <a
              href="#"
              target="_blank"
              className="inline-block bg-orange-500 text-white rounded-full py-3 px-5 animate__animated animate__slideInLeft hover:bg-orange-600 transition duration-400"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
