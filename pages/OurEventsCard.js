import Ntg from "../public/group.png";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const OurEventsCard = ({ event }) => {
  return (
    <div className="">
      <div className="bg-[#ffffff] rounded-lg w-full h-[30rem] flex flex-col justify-between shadow-sm">
        <Image
          src={event?.image}
          height={300}
          width={300}
          className="rounded-t-xl w-full h-60 "
        />
        <div className="p-4 ">
          <h1 className="text-xl text-[#1f1e1e] font-extrabold ">{event?.title}</h1>
          <div className="flex justify-between flex-wrap gap-2 mt-2">
            <p className="text-sm text-gray-600 flex gap-1 items-center font-extrabold">
              <FaRegClock className="text-xl" />
              {event?.date}
            </p>

            <p className="text-sm text-gray-600 flex gap-1 items-center font-extrabold">
              <FaMapMarkerAlt className="text-xl" />
              {event?.address}
            </p>
          </div>
          <article className="mainfont text-sm mt-10">
            {event?.shortDescription.slice(0, 260)}...
          </article>
          
        </div>
      </div>
    </div>
  );
};

export default OurEventsCard;
