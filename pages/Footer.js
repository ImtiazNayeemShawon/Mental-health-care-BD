import React from "react";
import Image from "next/image";
import Logo from "../public/frontlogo.png";
import FB from "../public/facebook.svg";
import Insta from "../public/instagram.svg";
import Linkdin from "../public/linkedin.svg";
import Twitter from "../public/twitter.svg";

export default function Footer() {
  return (
    <div className="py-4">
      <div>
        <div className="w-[90%] m-auto block h-[1px] rounded-sm bg-[#b6b1b1]" />
        <h1 className="text-[40px] max-sm:text-[20px] w-[70%] m-auto capitalize text-[#3b3d3d] font-bold partnertxt text-center">
          {" "}
          lets change the world together with humanity
        </h1>
        <button className="partnertxt text-white bg-[#2e917a] px-8 py-2 rounded-lg m-auto block text-xl my-10">
          Join with us{" "}
        </button>
        <div className="w-[90%] m-auto block h-[1px] rounded-sm bg-[#b6b1b1]" />

        <div className="flex justify-between items-center py-10 flex-wrap">
          <h1 className="text- font-semibold p">
            © 2023 Mental health care BD. All Rights Reserved
       
          </h1>
          <div className="flex items-center capitalize gap-4 font-thin text-[#4d4a4a]">
            <a href="#">facebook</a>/<a href="#">instagram</a>/
            <a href="#">twitter</a>
          </div>
        </div>
        {/* <div className="w-[90%] m-auto block h-[1px] rounded-sm bg-[#b6b1b1]"/> */}

      </div>
    </div>
  );
}
