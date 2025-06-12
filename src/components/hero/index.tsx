export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gray-900 text-white py-20 px-6 text-center min-h-[60vh] flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="font-yellowtail text-4xl md:text-5xl mb-4">Carkenstein</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 font-montserrat">
          Experience the thrill of high-speed racing in a groundbreaking Web3 game powered by the Cardano blockchain. Collect unique NFT vehicles, compete in dynamic multiplayer races, and earn real rewards in a decentralized, play-to-own ecosystem. Customize your ride, dominate the leaderboard, and become a legend in the metaverse.
        </p>
      </div>
    </section>
  );
}
