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
        <Image src={Logo} width={200} className="mt-20 block m-auto" />
        <h1 className="text-center font-semibold">
          © 2023 Mental health care. All Rights Reserved.Developed by{" "}
          <a className="font-bold text-blue-700 partnertxt text-xl cursor-pointer">
            {" "}
            ZIPBOX
          </a>
        </h1>
        <div className="flex justify-around mx-96 mt-5  max-sm:mx-10">
          <Image src={FB} width={20} />
          <Image src={Insta} width={20} />
          <Image src={Linkdin} width={20} />
          <Image src={Twitter} width={20} />
        </div>
        <div className="flex justify-around max-sm:flex-wrap mx-80 font-semibold mt-5 text-green-500 max-sm:mx-2 capitalize">
          <a
            className="max-sm:text-sm max-sm:w-full hover:underline max-sm:text-center max-sm:mt-2"
            href="#"
          >
            Terms and condition{" "}
          </a>
          <a
            className="max-sm:text-sm max-sm:w-full hover:underline max-sm:text-center max-sm:mt-2"
            href="#"
          >
            Achivement
          </a>
          <a
            className="max-sm:text-sm max-sm:w-full hover:underline max-sm:text-center max-sm:mt-2"
            href="#"
          >
            Developer contact
          </a>
          <a
            className="max-sm:text-sm max-sm:w-full hover:underline max-sm:text-center max-sm:mt-2"
            href="#"
          >
            contact us
          </a>
        </div>
       
      </div>
    </div>
  );
}
