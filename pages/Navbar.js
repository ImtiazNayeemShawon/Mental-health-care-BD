import React from "react";
import Logo from "../public/logo.png";
import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [show, setShow] = useState(true);

  const Navshow = () => {
    setShow(!show);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded   fixed top-0 right-0 left-0 z-50">
        <div className="container flex flex-wrap items-right justify-between mx-auto">
          <a href="/">
            <Image
              src={Logo}
              alt="mhc logo"
              width={200}
              height={100}
              className="max-sm:w-40 w-40 "
            />
          </a>
          <button
            className="bg-white py-0 px-0 hover:bg-white hidden max-sm:block"
            onClick={Navshow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-black hover:bg-white py"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1  ${
              show ? "hidden duration-300" : ""
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-2 font-bold mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white uppercase text-sm">
              <Link
                to="Home"
                duration={500}
                smooth={true}
                className="text-blue-700 p-2 text-sm font-bold hover:bg-gray-300 duration-300 rounded cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="blogs"
                duration={500}
                smooth={true}
                className="text-blue-700 p-2 font-bold  hover:bg-gray-300 duration-300 rounded cursor-pointer"
              >
                Blogs
              </Link>
              <Link
                to="Events"
                duration={500}
                smooth={true}
                className="text-blue-700 p-2 font-bold  hover:bg-gray-300 duration-300 rounded cursor-pointer"
              >
                Events
              </Link>
              <Link
                to="ourworks"
                duration={500}
                smooth={true}
                className="duration:300 text-blue-700 p-2 font-bold  hover:bg-gray-200 duration-300 rounded uppercase cursor-pointer"
              >
                OUR works
              </Link>

              <Link
                to="Contact"
                duration={500}
                smooth={true}
                className="text-blue-700 p-2 font-bold hover:bg-gray-300 duration-300 rounded cursor-pointer"
              >
                Contact us
              </Link>
              <Link
                href="/toiHomey"
                className="text-gray-100 p-2 font-bold bg-blue-700 duration-300 rounded cursor-pointer"
              >
                Join Our Family
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
