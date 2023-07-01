import React from "react";
import Image from "next/image";
import Achiv from "../public/achiv.png"

export default function Achivments() {
  return (
    <div id="Achievement">
      <div className="mx-20">
        <h1 className="mt-5 text-center partnertxt text-4xl uppercase text-gray-800">
          Our Achievements
        </h1>
        <div className="grid grid-cols-2 mt-20">
            <Image src={Achiv}  className="rounded-xl h-80"/>
          <div>
            <h1 className="text-left text-2xl font-semibold text-gray-900">
              What is Lorem Ipsum?
            </h1>
            <p className="text-xl mt-2 text-justify font-semibold text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
