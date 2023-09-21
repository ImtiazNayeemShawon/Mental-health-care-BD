import React from "react";
import Image from "next/image";
import News from "../public/news.png";

export default function Gallery() {
  return (
    <div className="mt-20">
      <div>
        <h1 className="uppercase font-semibold mainfont text-lg text-center text-yellow-500">
          Our Gallery
        </h1>
        <h2 className="text-center text-4xl px-40 mt-2 partnertxt text-gray-800 capitalize max-sm:px-2 max-sm:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10 max-sm:grid-cols-2">
        <Image src={News} className="rounded-lg" />
        <Image src={News} className="rounded-lg" />
        <Image src={News} className="rounded-lg" />
        <Image src={News} className="rounded-lg" />
        <Image src={News} className="rounded-lg" />
        <Image src={News} className="rounded-lg" />{" "}
      </div>
      <button className="bg-gray-500 text-white capitalize mainfont px-8 py-3 rounded-xl font-semibold m-auto block  mt-10">
        view all
      </button>
    </div>
  );
}
