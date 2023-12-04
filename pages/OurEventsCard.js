import Ntg from "../public/group.png";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const OurEventsCard = ({ event }) => {
  return (
    <div className="">
      <div className="bg-[#c9f6b4] rounded-lg w-full h-[30rem] flex flex-col justify-between ">
        <Image
          src={event?.image}
          height={300}
          width={300}
          className="rounded-t-xl w-full h-60 "
        />
        <div className="p-4 ">
          <h1 className="text-2xl text-[#444242] font-bold ">{event?.title}</h1>
          <div className="flex justify-between flex-wrap gap-2 mt-2">
            <p className="text-sm text-gray-600 flex gap-1 items-center">
              <FaRegClock className="text-xl" />
              {event?.date}
            </p>

            <p className="text-sm text-gray-600 gap-1 flex items-center">
              <FaMapMarkerAlt className="text-xl" />
              {event?.address}
            </p>
          </div>
          <article className="mainfont text-sm mt-2">
            {event?.shortDescription.slice(0, 60)}...
          </article>
          
        </div>
      </div>
    </div>
  );
};

export default OurEventsCard;
