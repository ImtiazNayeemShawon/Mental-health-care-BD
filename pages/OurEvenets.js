import OurEventsCard from "./OurEventsCard";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

export default function OurEvenets() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`https://mental-health-care-bd.onrender.com/events`)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="mt-20" id="Events">
      <div>
        <h1 className="uppercase font-semibold mainfont text-lg text-center text-yellow-500">
          Our events
        </h1>
        <h2 className="text-center text-4xl px-40 mt-2 partnertxt text-gray-800 capitalize max-sm:px-2 max-sm:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </h2>
      </div>
      <div className="mt-10 overflow-hidden">
        <Swiper
          // style={{
          //   "--swiper-navigation-margin": "#fff",
          //   "--swiper-pagination-color": "#fff",
          // }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper md:h-[500px] h-[520px]"
        >
          {events?.reverse()?.map((event) => (
            <SwiperSlide key={event.id}>
              <OurEventsCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
