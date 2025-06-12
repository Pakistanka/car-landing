"use client";

import { FaTwitter } from "react-icons/fa";
import { teamItems } from '@/components/team/team';
import Image from "next/image";

export default function Team() {
  return (
    <section className="w-full bg-black text-white py-12" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-yellowtail text-5xl font-bold text-center mb-16">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamItems?.map(({ id, title, description, twitterLink, image }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 shadow-lg">
                <Image
                  width={36}
                  height={36}
                  src={image}
                  alt={title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
              <a
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
