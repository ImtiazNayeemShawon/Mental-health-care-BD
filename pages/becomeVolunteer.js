import React from "react";
import Image from "next/image";
import World from "../public/world.png"

export default function becomeVolunteer() {
  return (
    <div className="mt-20">
      <div className=" bg-gradient-to-r from-[#5bac36] to-[#b8ee9d] grid grid-cols-4 p-2 rounded-lg px-10 items- gap-5 place-items-center max-sm:grid-cols-1">
        <div className="col-span-3 max-sm:col-span-1">
          <h1 className="text-6xl partnertxt text-white max-sm:text-4xl">
            lets change the world together with humanity
          </h1>
          <button className="bg-[#92d206] mt-10 text-white mainfont px-5 py-2 text-xl rounded-lg uppercase">
            Join our family{" "}
          </button>
        </div>
        <Image src={World} />
      </div>
    </div>
  );
}
