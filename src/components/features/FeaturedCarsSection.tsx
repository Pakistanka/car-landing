"use client";

import Image from "next/image";
import { featuredCars } from "./data";

export default function FeaturedCarsSection() {
  return (
    <section id="featured-cars" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-12 font-yellowtail">
        Featured Cars
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuredCars?.map(({ id, name, description, image }) => (
          <div
            key={id}
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
          >
            <div className="relative w-full h-48">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={id <= 3} // prioritize top 3 images
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 font-montserrat">{name}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
