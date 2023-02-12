import React from "react";
import Logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



export default function Navbar() {
  //const style=drop?{display:"block"}:null
  
  //State for nav control
  const [drop, setDrop] = useState(false);
  const [Show, setShow] = useState(false);
  const handleSidenav = () => {
    setShow(!Show);
  };
  const handleDrop = () => {
    setDrop(!drop);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-md">
        <div className="container flex flex-wrap items-right justify-between mx-auto">
          <Image src={Logo} alt="mhc logo" width={200} height={100} />

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-2 font-bold mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 uppercase text-sm">
              <Link onMouseOver={()=>setDrop(false)}
                href="/"
                className="text-blue-700 p-2 text-sm font-bold hover:bg-gray-300 duration-300 rounded"
              >
                Home
              </Link>
              <Link onMouseOver={()=>setDrop(false)}
                href="/Achievement"
                className="text-blue-700 p-2 font-bold  hover:bg-gray-300 duration-300 rounded"
              >
                Achievement
              </Link>
              {/* drop down menu */}
              <div class="dropdown">
                <button onMouseOver={handleDrop} className="duration:300 text-blue-700 p-2 font-bold  hover:bg-gray-200 duration-300 rounded uppercase">
                  OUR works
                </button>
                {
                  drop&& (<div className="absolute block py-10 mt-6 rounded-md w-22 bg-slate-200 h-30 text-left">
                  <ul className="w-40">
                    <li>
                      <Link
                        href="/OurProjects"
                        className=" text-blue-700 p-2 text-left font-bold  hover:bg-gray-300 duration-300 rounded uppercase"
                      >
                        Our projects
                      </Link>
                    </li><br/>
                    <li>
                      <Link
                        href="/OurProjects"
                        className=" text-blue-700 p-2 text-left font-bold  hover:bg-gray-300 duration-300 rounded uppercase"
                      >
                        Our projects
                      </Link>
                    </li><br/>
                    <li>
                      <Link
                        href="/OurProjects"
                        className=" text-blue-700 p-2 text-left font-bold  hover:bg-gray-300 duration-300 rounded uppercase"
                      >
                        Our projects
                      </Link>
                    </li><br/>

                  </ul>
                </div>)
                }
               
              </div>
              {/* drop down menu */}

              <Link onMouseOver={()=>setDrop(false)}
                href="/Contact"
                className="text-blue-700 p-2 font-bold hover:bg-gray-300 duration-300 rounded"
              >
                Contact us
              </Link>
              <Link onMouseOver={()=>setDrop(false)}
                href="/JoinOurFamily"
                className="text-gray-100 p-2 font-bold bg-blue-700 duration-300 rounded"
              >
                Join Our Family
              </Link>
            </ul>
          </div>

          {/*Side navigation bar  */}

          <button onClick={handleSidenav} className="mr-5 hidden max-sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
          </button>
          {/*Side navigation bar  */}
        </div>
      </nav>
      {Show && (
        <div className=" absolute p-10 bg-white   w-fit shadow-md rounded hidden max-sm:block transition duration-700 ease-in-out">
          <ul className="hidden  mt-4 max-sm:block text-left uppercase ">
            <li>
              {" "}
              <Link
                href="/"
                className="text-blue-700 p-2  hover:bg-gray-300 duration-300 rounded"
              >
                Home
              </Link>
            </li>
            <br />
            <li>
              {" "}
              <Link
                href="/Achievement"
                className="text-blue-700 p-2  hover:bg-gray-300 duration-300 rounded"
              >
                Achievement
              </Link>
            </li>
            <br />
            <li>
              <Link
                href="/Showcase"
                className="text-blue-700 p-2  hover:bg-gray-300 duration-300 rounded"
              >
                Showcase
              </Link>
            </li>
            <br />
            <li>
              <Link
                href="/Ourprojects"
                className="text-blue-700 p-2  hover:bg-gray-300 duration-300 rounded"
              >
                Our projects
              </Link>
            </li>
            <br />
            <li>
              <Link
                href="/OurWorkshops"
                className="text-blue-700 p-2  hover:bg-gray-300 duration-300 rounded"
              >
                Our Workshops
              </Link>
            </li>
            <li>
              <br />
              <Link
                href="/OurProgramms"
                className="text-blue-700 p-2  hover:bg-gray-300 duration-300 rounded"
              >
                Our Programms
              </Link>
            </li>
            <br />
            <li>
              <Link
                href="/AboutUs"
                className="text-blue-700 p-2  hover:bg-gray-300 duration-300 rounded"
              >
                About Us
              </Link>
            </li>
            <br />
            <li>
              <Link
                href="/OurProgramms"
                className="text-blue-700 p-2  hover:bg-gray-300 duration-300 rounded"
              >
                Contact us
              </Link>
            </li>
            <br />
            <li>
              <Link
                href="/JoinOurFamily"
                className="text-gray-100 p-2 bg-blue-700 duration-300 rounded"
              >
                Join Our Family
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
