import React from "react";
import CardSS from "../assets/cardSS.png";
import EcomSS from "../assets/ecomSS.png";
import UiDegSS from "../assets/uidesSS.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section name="projects" className=" h-screen bg-[#FBFCF8] ">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="max-w-[75%] h-screen sm:w-screen sm:h-screen mx-auto flex flex-col justify-evenly from-slate-950 "
      >
        <h1 className="text-4xl md:text-6xl font-sans tracking-widest font-bold text-gray-700 ">
          PROJECTS
        </h1>
        <div className=" grid grid-cols-2 md:grid-cols-2 gap-4 py-8 place-content-evenly ">
          <div
            style={{ backgroundImage: `url(${EcomSS})` }}
            className="shadow-lg shadow-[#040c16] !bg-contain group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-indigo-900 tracking-wider">
                E-commerce App
              </span>
              <div className="pt-8 text-center">
                <a href="https://ecommerce-app-rk.netlify.app/" target="_blank">
                  <button
                    className="button sm:px-4 px-4 py-3 m-2 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-md border-none box-border
                   text-white cursor-pointer flex-shrink-0 text-base font-bold w-auto h-14 text-center shadow-lg transition-all duration-500 select-none"
                  >
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/rajkumar-magar/E-commerce-app.git"
                  target="_blank"
                >
                  <button
                    className="button sm:px-4 px-4 py-3 m-2 bg-gradient-to-r from-teal-500 to-emerald-600  rounded-md border-none box-border
                   text-white cursor-pointer flex-shrink-0 text-base font-bold w-auto h-14 text-center shadow-lg transition-all duration-500 select-none"
                  >
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${UiDegSS})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-green-600 tracking-wider">
                Real Estate Layout UI Design
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://www.figma.com/file/e4D3yihSOeBvpEXBsKhj7L/Real-Estate-Web-App?type=design&node-id=0%3A1&mode=design&t=wMvUn2zhKH7RZo7x-1"
                  target="_blank"
                >
                  <button
                    className="button sm:px-4 px-4 py-3 m-2 bg-gradient-to-r from-teal-500 to-emerald-500  rounded-md border-none box-border
                   text-white cursor-pointer flex-shrink-0 text-base font-bold w-auto h-14 text-center shadow-lg transition-all duration-500 select-none"
                  >
                    Figma View
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${CardSS})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Card Gallery
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://rajkumar-magar.github.io/Card-Gallery/"
                  target="_blank"
                >
                  <button
                    className="button sm:px-4 px-4 py-3 m-2 bg-gradient-to-r from-teal-500 to-emerald-500  rounded-md border-none box-border
                   text-white cursor-pointer flex-shrink-0 text-base font-bold w-auto h-14 text-center shadow-lg transition-all duration-500 select-none"
                  >
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/rajkumar-magar/Card-Gallery.git"
                  target="_blank"
                >
                  <button
                    className="button sm:px-4 px-4 py-3 m-2 bg-gradient-to-r from-teal-500 to-emerald-500  rounded-md border-none box-border
                   text-white cursor-pointer flex-shrink-0 text-base font-bold w-auto h-14 text-center shadow-lg transition-all duration-500 select-none"
                  >
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
