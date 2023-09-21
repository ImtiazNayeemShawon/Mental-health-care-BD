import Image from "next/image";
import Support from "../public/support.png";
import Data from "./Data.json";

export default function Feature() {
  return (
    <div>
      <div>
        <p className="uppercase font-semibold mainfont text-lg text-center text-yellow-500">
          Our feature
        </p>
        <h2 className="text-center text-4xl px-40 mt-2 partnertxt text-gray-800 capitalize max-sm:px-2 max-sm:text-xl">
          Whatever it is that you care about, there will be a charity working on
          it . Charitis help is lots of different ways
        </h2>
      </div>
      <div className="grid grid-cols-2 mx-40 mt-20 gap-10 max-sm:grid-cols-1 max-sm:gap-2 max-sm:mx-2">
        {Data.map((Data, index) => (
          <div key={index} className="bg-gray-100 p-10 rounded-lg">
            <div className="flex gap-5 ">
              <Image src={Data.img} width={40} height={40} />{" "}
              <p className="font-semibold text-gray-800">{Data.title} </p>
            </div>
            <div className="bg-gray-300 h-1 w-full mt-2 rounded-lg">
              <div className="bg-pink-600 h-1 w-20 mt-2 rounded-lg"></div>
            </div>
            <p className="mt-5 font-semibold text-left text-sm">{Data.Des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}
