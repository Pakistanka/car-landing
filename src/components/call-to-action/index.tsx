"use client";

import { ctaItems } from "@/components/call-to-action/data";
import UpcomingEvents from "@/components/call-to-action/ui/index";

export default function CallToActionAndEvents() {
  return (
    <section className='w-full bg-black text-white py-8'>
      <div className="container mx-auto px-4 py-8">
        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ctaItems.map(({ id, title, description, btnText, btnHref }) => (
            <div key={id} className="p-6 rounded-lg shadow-md flex flex-col justify-between">
              <h5 className="text-left font-semibold mb-3 font-yellowtail text-3xl">{title}</h5>
              <p className="mb-4 text-gray-700 flex-grow text-white">{description}</p>
              {/* <a
                href={btnHref}
                className="inline-block text-blue-600 font-medium hover:text-blue-400 active:text-blue-300 transition"
              >
                {btnText} <span className="ml-1">&#8594;</span>
              </a> */}
            </div>
          ))}
        </div>

        <UpcomingEvents />
      </div>
    </section>

  );
}
