"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { events } from "@/components/call-to-action/events";

export default function UpcomingEvents() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-center font-yellowtail text-5xl font-semibold mb-8">
        Explore our Upcoming Events
      </h2>

      <Swiper
        modules={[
            Navigation,
            // Pagination,
            Autoplay
        ]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop
        className="rounded-lg"
      >
        {events.map(({ id, img, alt, title, desc, date, btnHref }) => (
          <SwiperSlide key={id}>
            <div className="relative w-full h-64 md:h-96">
              <Image src={img} alt={alt} fill className="object-cover rounded-lg" priority />
              <div className="absolute bottom-6 left-6 right-6 bg-black bg-opacity-60 p-4 rounded text-white">
                <h5 className="text-xl font-semibold mb-1">{title}</h5>
                <p className="mb-1">{desc}</p>
                <p className="italic mb-2">{date}</p>
                <a
                  href={btnHref}
                  className="inline-block text-blue-400 font-medium hover:text-blue-300 active:text-blue-200 transition"
                >
                  Details
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
