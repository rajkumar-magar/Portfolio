import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Socials = () => {
  return (
    <footer name="footer" className="flex  mx-auto py-6 my-4 from-slate-950">
      <div className="bottom-0 min-w-[100%] lg:hidden flex flex-col flex-grow bottom-0justify-center items-center">
        <ul className="grid  grid-cols-3 justify-around mx-auto">
          <li>
            <a
              className="grid px-4 w-auto justify-evenly items-center text-center text-lg font-semibold   text-black"
              href="https://github.com/rajkumar-magar" target="_blank"
            >
              <FaGithub size={30} className="mx-auto " />
              Github
            </a>
          </li>
          <li>
            <a
              className="grid px-4 w-auto justify-evenly items-center text-center  text-lg font-semibold  text-black"
              href="https://www.linkedin.com/in/raj-kumar-magar-8449b925a" target="_blank"
            >
              <FaLinkedin size={30} className="mx-auto" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="grid px-4 w-auto justify-evenly items-center text-center  text-lg font-semibold  text-black"
              href="mailto:raz.magar251@gmail.com'" target="_blank"
            >
              <FaEnvelope size={30} className="mx-auto" />
              E-Mail
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Socials;
