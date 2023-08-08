import React, { useState } from "react";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div> 
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.5 }}
        className="!fixed w-full h-[80px] top-0 flex justify-between items-center shadow-sm bg-[#FEFEFA] !z-50  from-slate-950"
      >
        <div className="w-[10%] m-4 ">
          <a
            className="hidden sm:flex text-xl xl:text-3xl w-full hover:scale-105 transition-all duration-500 select-none font-sans font-medium justify-center m-2 ml-0 rounded-full bg-transparent text-slate-900 "
            href="/"
          >
            Raj Kumar
          </a>
        </div>

        <div className=" bg-inherit rounded-full text-gray-900 right-5 ">
          <ul className="hidden  font-sans font-medium px-4 md:flex ">
            <li className="px-5 text-xl xl:text-3xl hover:scale-105 transition-all duration-500 select-none hover:text-indigo-700 ">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="px-5 text-xl xl:text-3xl hover:scale-105 transition-all duration-500 select-none hover:text-indigo-700">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="px-5 text-xl xl:text-3xl hover:scale-105 transition-all duration-500 select-none hover:text-indigo-700">
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className="px-5 text-xl xl:text-3xl hover:scale-105 transition-all duration-500 select-none hover:text-indigo-700">
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className="px-5 text-xl xl:text-3xl hover:scale-105 transition-all duration-500 select-none hover:text-indigo-700">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

   

        <div
          onClick={handleClick}
          className="md:hidden overscroll-none mx-3 z-10 bg-white"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute overscroll-none top-0 left-0 w-full h-screen overflow-y-scroll overflow-hidden bg-[#0a192f] text-white flex flex-col justify-center items-center"
          }
        >
          <li className="py-4 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-4 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-4 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-4 text-4xl">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="py-4 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>

      <div className="hidden lg:flex fixed flex-col bottom-[10%] left-0">
        <ul>
          <li className="w-[145px] h-[50px] flex justify-between items-center rounded-lg shadow-lg ml-[-100px] hover:ml-[-2px] duration-300 bg-gradient-to-r from-gray-300 to-zinc-500 ">
            <a
              className=" m-2 flex justify-between items-center text-xl font-semibold w-full  text-black"
              href="https://github.com/rajkumar-magar"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[145px] h-[50px] flex justify-between items-center rounded-lg shadow-lg ml-[-100px] hover:ml-[-2px] duration-300 bg-gradient-to-r from-blue-300 to-indigo-500">
            <a
              className=" m-2 flex justify-between items-center text-xl font-semibold w-full  text-black"
              href="https://www.linkedin.com/in/raj-kumar-magar-8449b925a"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[145px] h-[50px] flex justify-between items-center rounded-lg shadow-lg ml-[-100px] hover:ml-[-2px] duration-300 bg-gradient-to-r from-green-300 to-emerald-500 ">
            <a
              className=" m-2 flex justify-between items-center text-xl font-semibold w-full  text-black"
              href="mailto:raz.magar251@gmail.com'"
              target="_blank"
            >
              E-Mail <FaEnvelope size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
