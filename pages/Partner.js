import React from "react";
import Image from "next/image";
import Zip from "../public/zip.png";
import Babytube from "../public/babytube.png";
import Dailypost from "../public/dailypost.png";
import Desh from "../public/desh.png";

export default function Partner() {
  return (
    <div className="bg-gray-200 py-20 max-sm:py-5">
      <div className="mt-20 max-sm:mt-1  justify-around mx-80 max-sm:mx-2">
        <h1 className="text-5xl capitalize font-bold text-gray-700 text-center  partnertxt max-sm:text-2xl ">
          {" "}
          organizations work with us as technology,fund and media partner{" "}
        </h1>
        <p className="mt-2 text-center text-xl capitalize max-sm:text-sm">
          trusted by hundreds of volunteers and organizations
        </p>
      </div>
      <div className="grid grid-cols-3 mx-60 place-items-center gap-20 mt-10 max-sm:mx-4 max-sm:grid-cols-2 max-sm:gap-5 max-sm:gap-y-10">
        <Image className="opacity-70 max-sm:w-40" src={Zip} width={300} />
        <Image className="opacity-70 max-sm:w-40" src={Babytube} width={300} />
        <Image className="opacity-70 max-sm:w-40" src={Dailypost} width={300} />
        <Image className="opacity-70 rounded-md" src={Desh} width={300} />
        <Image className="opacity-70 max-sm:w-40" src={Zip} width={300} />
        <Image className="opacity-70 max-sm:w-40" src={Zip} width={300} />
      </div>
    </div>
  );
}
