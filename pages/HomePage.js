import React from "react";
import Image from "next/image";
import Logo from "../public/frontlogo.png";

export default function HomePage() {
  return (
    <div id="Home" className="m-0 bg pb-40 ">
      <div className=" ">
        <div className="grid grid-cols-2  mt-10 justify-between max-sm:grid-cols-1">
          <div>
            <Image src={Logo} alt="Logo" width={500} />
          </div>
          <div className="mt-20 max-sm:mt-4 max-sm:text-center">
            <h1 className=" text-4xl  intro max-sm:text-center max-sm:text-2xl">
              Take care of your{" "}
            </h1>
            <h1 className="font-bold text-7xl my-5 head max-sm:text-4xl">
              Mental health{" "}
            </h1>
            <div className="h-2 w-20 rounded-lg line my-10 opacity-60 max-sm:my-5"></div>
            <p className="details leading-7 max-sm:text-justify">
              Mental Health Care works to raise mental health awareness among
              the adolescents. Our mission is to reduce the misconceptions and
              stigma around mental health issues, and to encourage those who are
              suffering to seek help and find a support network through us.
            </p>
            <div className=" gap-20 flex max-sm:gap-4">
              <button className="line px-10 py-2 rounded-sm text-gray-50 font-bold mt-10 hover:bg-white hover:border-gray-200 border duration-200 hover:text-gray-500 max-sm:w-60 ">
                Donate now
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
