import React from "react";
import WorkImg from "../assets/workImg.jpg";
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
    <section name="projects" className=" h-screen bg-gray-50 ">
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
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Apps
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="button sm:px-4 px-4 py-3 m-2 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-md border-none box-border text-white cursor-pointer flex-shrink-0 text-base font-bold w-auto h-14 text-center shadow-lg transition-all duration-500 select-none">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="button sm:px-4 px-4 py-3 m-2 bg-gradient-to-r from-teal-500 to-emerald-600  rounded-md border-none box-border text-white cursor-pointer flex-shrink-0 text-base font-bold w-auto h-14 text-center shadow-lg transition-all duration-500 select-none">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Apps
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="button sm:px-4 px-4 py-3 m-2 bg-gradient-to-r from-teal-500 to-emerald-500  rounded-md border-none box-border text-white cursor-pointer flex-shrink-0 text-base font-bold w-auto h-14 text-center shadow-lg transition-all duration-500 select-none">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="button sm:px-4 px-4 py-3 m-2 bg-gradient-to-r from-teal-500 to-emerald-500  rounded-md border-none box-border text-white cursor-pointer flex-shrink-0 text-base font-bold w-auto h-14 text-center shadow-lg transition-all duration-500 select-none">
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
