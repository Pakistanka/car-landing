export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-6 text-center min-h-[60vh] flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="font-yellowtail text-4xl md:text-5xl mb-4">Vintage Autohaus</h1>
        {/* <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 font-montserrat">
          Experience the charm and elegance of vintage automobiles. Discover timeless classics and join our community of car enthusiasts.
        </p>
        <a
          href="#featured-cars"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded transition"
        >
          Explore Cars
        </a> */}
      </div>
    </section>
  );
}
